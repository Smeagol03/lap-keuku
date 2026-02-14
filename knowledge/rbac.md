# Role-Based Access Control (RBAC) untuk Lap-Keu

## Overview

Role-Based Access Control memungkinkan pemilik akun (Owner) untuk berbagi akses data keuangan dengan pasangan atau anggota keluarga lainnya dengan level permission yang berbeda-beda.

### Use Cases Utama

- **Shared Account**: Pasangan suami-istri mengelola keuangan bersama
- **Family View**: Orang tua memberikan akses view-only ke anak remaja
- **Accountant Access**: Memberikan akses terbatas ke akuntan atau financial advisor

---

## Database Schema

### 1. Tabel `account_members`

```sql
-- Tabel untuk menyimpan relasi antar user dan permission
CREATE TABLE IF NOT EXISTS account_members (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id        UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  member_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role            TEXT NOT NULL CHECK (role IN ('owner', 'admin', 'editor', 'viewer')),
  status          TEXT NOT NULL CHECK (status IN ('pending', 'active', 'revoked')) DEFAULT 'pending',
  invited_by      UUID REFERENCES profiles(id) ON DELETE SET NULL,
  accepted_at     TIMESTAMPTZ,
  expires_at      TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW(),
  
  -- Satu member hanya bisa join satu akun owner
  UNIQUE(owner_id, member_id)
);

-- Index untuk query performance
CREATE INDEX idx_account_members_owner ON account_members(owner_id);
CREATE INDEX idx_account_members_member ON account_members(member_id);
CREATE INDEX idx_account_members_status ON account_members(status);
```

### 2. Tabel `account_invites`

```sql
-- Tabel untuk menyimpan invitation codes
CREATE TABLE IF NOT EXISTS account_invites (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id        UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  code            TEXT NOT NULL UNIQUE,
  role            TEXT NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  email           TEXT,
  max_uses        INT DEFAULT 1,
  used_count      INT DEFAULT 0,
  expires_at      TIMESTAMPTZ NOT NULL,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  
  CHECK (used_count <= max_uses)
);

CREATE INDEX idx_account_invites_code ON account_invites(code);
CREATE INDEX idx_account_invites_owner ON account_invites(owner_id);
```

### 3. Update Tabel `transactions`

```sql
-- Tambahkan visibility field
ALTER TABLE transactions ADD COLUMN visibility TEXT DEFAULT 'private' 
  CHECK (visibility IN ('private', 'shared', 'public'));

-- Tambahkan created_by untuk tracking
ALTER TABLE transactions ADD COLUMN created_by UUID REFERENCES profiles(id) ON DELETE SET NULL;
```

---

## Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE account_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_invites ENABLE ROW LEVEL SECURITY;

-- Policy: Owner dapat melihat semua member mereka
CREATE POLICY "owner_view_members" ON account_members
  FOR SELECT USING (auth.uid() = owner_id);

-- Policy: Member dapat melihat data mereka sendiri
CREATE POLICY "member_view_own" ON account_members
  FOR SELECT USING (auth.uid() = member_id);

-- Policy: Owner dapat mengelola member
CREATE POLICY "owner_manage_members" ON account_members
  FOR ALL USING (auth.uid() = owner_id);

-- Policy: Owner dapat mengelola invites
CREATE POLICY "owner_manage_invites" ON account_invites
  FOR ALL USING (auth.uid() = owner_id);

-- Policy: Anyone dapat melihat invite yang valid
CREATE POLICY "view_valid_invites" ON account_invites
  FOR SELECT USING (
    expires_at > NOW() AND 
    used_count < max_uses
  );
```

---

## Types Definition

```typescript
// src/types/rbac.ts

export type MemberRole = 'owner' | 'admin' | 'editor' | 'viewer';
export type MemberStatus = 'pending' | 'active' | 'revoked';
export type TransactionVisibility = 'private' | 'shared' | 'public';

export interface AccountMember {
  id: string;
  owner_id: string;
  member_id: string;
  role: MemberRole;
  status: MemberStatus;
  invited_by?: string;
  accepted_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
  
  member_profile?: {
    full_name: string;
    avatar_url?: string;
    email: string;
  };
}

export interface AccountInvite {
  id: string;
  owner_id: string;
  code: string;
  role: MemberRole;
  email?: string;
  max_uses: number;
  used_count: number;
  expires_at: string;
  created_at: string;
}

export interface PermissionCheck {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canManageMembers: boolean;
  canManageSettings: boolean;
}

export const ROLE_PERMISSIONS: Record<MemberRole, PermissionCheck> = {
  owner: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
    canManageMembers: true,
    canManageSettings: true,
  },
  admin: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
    canManageMembers: true,
    canManageSettings: false,
  },
  editor: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
    canManageMembers: false,
    canManageSettings: false,
  },
  viewer: {
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
    canManageMembers: false,
    canManageSettings: false,
  },
};
```

---

## Service Layer

```typescript
// src/services/rbacService.ts

import { supabase } from '@/lib/supabase';
import type { AccountMember, AccountInvite, MemberRole } from '@/types/rbac';

export class RBACService {
  // Membuat invitation code baru
  static async createInvite(role: MemberRole, options?: {
    email?: string;
    maxUses?: number;
    expiresInDays?: number;
  }): Promise<AccountInvite> {
    const code = this.generateInviteCode();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + (options?.expiresInDays || 7));

    const { data, error } = await supabase
      .from('account_invites')
      .insert({
        role,
        code,
        email: options?.email,
        max_uses: options?.maxUses || 1,
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Join menggunakan invitation code
  static async joinWithInvite(code: string): Promise<AccountMember> {
    const { data: invite, error: inviteError } = await supabase
      .from('account_invites')
      .select('*')
      .eq('code', code)
      .single();

    if (inviteError || !invite) {
      throw new Error('Invalid invitation code');
    }

    if (new Date(invite.expires_at) < new Date()) {
      throw new Error('Invitation code has expired');
    }

    if (invite.used_count >= invite.max_uses) {
      throw new Error('Invitation code has been fully used');
    }

    const { data: member, error: memberError } = await supabase
      .from('account_members')
      .insert({
        owner_id: invite.owner_id,
        role: invite.role,
        status: 'active',
        accepted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (memberError) throw memberError;

    // Update used_count
    await supabase
      .from('account_invites')
      .update({ used_count: invite.used_count + 1 })
      .eq('id', invite.id);

    return member;
  }

  // Mendapatkan semua member akun
  static async getAccountMembers(): Promise<AccountMember[]> {
    const { data, error } = await supabase
      .from('account_members')
      .select(`
        *,
        member_profile:member_id (
          full_name,
          avatar_url,
          email
        )
      `)
      .eq('owner_id', supabase.auth.getUser())
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  // Mendapatkan akun yang diikuti user
  static async getJoinedAccounts(): Promise<AccountMember[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('account_members')
      .select(`
        *,
        owner_profile:owner_id (
          full_name,
          avatar_url,
          email
        )
      `)
      .eq('member_id', user.id)
      .eq('status', 'active');

    if (error) throw error;
    return data || [];
  }

  private static generateInviteCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
}
```

---

## Permission Hook

```typescript
// src/hooks/usePermissions.ts

import { useMemo } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { ROLE_PERMISSIONS, type MemberRole } from '@/types/rbac';

export function usePermissions() {
  const { profile } = useAuthStore();

  const permissions = useMemo(() => {
    const role: MemberRole = profile?.role || 'owner';
    return ROLE_PERMISSIONS[role];
  }, [profile?.role]);

  return {
    ...permissions,
    isOwner: permissions.canManageSettings,
    role: profile?.role || 'owner',
  };
}
```

---

## Security Considerations

1. **Validasi Permission di Server**: Selalu validasi permission di database (RLS)
2. **Audit Trail**: Log semua aksi member
3. **Rate Limiting**: Batasi 5 invites per jam per user
4. **Data Isolation**: Member tidak bisa lihat data private owner

---

## Migration Steps

1. Jalankan SQL schema updates
2. Deploy service layer
3. Update auth store
4. Integrasi PermissionGuard ke components
5. Testing dengan berbagai role scenarios


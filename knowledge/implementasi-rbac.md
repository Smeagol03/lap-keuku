# Implementasi Role-Based Access Control (RBAC)

Dokumen ini menjelaskan implementasi lengkap sistem RBAC pada aplikasi Lap-Keu.

---

## Daftar Isi

1. [Overview](#overview)
2. [Struktur File](#struktur-file)
3. [Database Schema](#database-schema)
4. [Types & Interfaces](#types--interfaces)
5. [Service Layer](#service-layer)
6. [Hooks](#hooks)
7. [UI Components](#ui-components)
8. [Integrasi](#integrasi)
9. [Langkah Deployment](#langkah-deployment)

---

## Overview

Sistem RBAC memungkinkan pemilik akun (Owner) untuk berbagi akses data keuangan dengan orang lain melalui sistem undangan dengan berbagai level permission.

### Role Permission Matrix

| Permission        | Owner | Admin | Editor | Viewer |
|------------       |-------|-------|--------|--------|
| canView           | ✅    |  ✅   |   ✅   |   ✅   |
| canCreate         | ✅    |  ✅   |   ✅   |   ❌   |
| canEdit           | ✅    |  ✅   |   ✅   |   ❌   |
| canDelete         | ✅    |  ✅   |   ❌   |   ❌   |
| canManageMembers  | ✅    |  ✅   |   ❌   |   ❌   |
| canManageSettings | ✅    |  ❌   |   ❌   |   ❌   |
| canViewPrivate    | ✅    |  ❌   |   ❌   |   ❌   |

---

## Struktur File

```
src/
├── types/
│   └── rbac.ts                    # Type definitions
├── services/
│   └── rbacService.ts             # Business logic
├── hooks/
│   ├── usePermissions.ts          # Permission hooks
│   └── useToast.ts                # Toast notification
├── components/
│   ├── features/
│   │   └── rbac/
│   │       ├── PermissionGuard.tsx    # Permission wrapper
│   │       ├── AccountSwitcher.tsx    # Account switcher
│   │       ├── InviteDialog.tsx       # Create invite dialog
│   │       └── InviteList.tsx         # List invites
│   └── ui/
│       ├── command.tsx            # Command menu
│       ├── popover.tsx            # Popover
│       ├── toast.tsx              # Toast component
│       ├── toaster.tsx            # Toast provider
│       └── badge.tsx              # Badge component
└── pages/
    ├── MemberManagementPage.tsx   # Manage members
    └── JoinAccountPage.tsx        # Join via invite

supabase/
└── migrations/
    └── 002_rbac_system.sql        # Database migration
```

---

## Database Schema

### Tabel `account_members`

Menyimpan relasi antara owner dan member.

```sql
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
  
  UNIQUE(owner_id, member_id),
  CHECK (owner_id != member_id)
);
```

### Tabel `account_invites`

Menyimpan kode undangan.

```sql
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
  created_by      UUID REFERENCES profiles(id) ON DELETE SET NULL,
  
  CHECK (used_count <= max_uses)
);
```

### Tabel `active_account`

Menyimpan akun yang sedang aktif untuk setiap user.

```sql
CREATE TABLE IF NOT EXISTS active_account (
  user_id         UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  active_owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### Tabel `audit_logs`

Menyimpan log aktivitas.

```sql
CREATE TABLE IF NOT EXISTS audit_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id        UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action          TEXT NOT NULL,
  resource_type   TEXT NOT NULL,
  resource_id     UUID,
  details         JSONB DEFAULT '{}',
  ip_address      TEXT,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### Update Tabel `transactions`

Menambahkan kolom untuk RBAC.

```sql
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS visibility TEXT DEFAULT 'private' 
  CHECK (visibility IN ('private', 'shared', 'public'));
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES profiles(id) ON DELETE SET NULL;
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE;
```

---

## Types & Interfaces

File: [`src/types/rbac.ts`](../src/types/rbac.ts)

```typescript
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
    id: string;
    full_name: string;
    avatar_url?: string;
    email: string;
  };
  owner_profile?: {
    id: string;
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
  created_by?: string;
}

export interface ActiveAccount {
  user_id: string;
  active_owner_id: string;
  updated_at: string;
  owner_profile?: {
    id: string;
    full_name: string;
    avatar_url?: string;
    email: string;
  };
}

export interface PermissionCheck {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canManageMembers: boolean;
  canManageSettings: boolean;
  canViewPrivate: boolean;
}

export const ROLE_PERMISSIONS: Record<MemberRole, PermissionCheck> = {
  owner: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
    canManageMembers: true,
    canManageSettings: true,
    canViewPrivate: true,
  },
  admin: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
    canManageMembers: true,
    canManageSettings: false,
    canViewPrivate: false,
  },
  editor: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
    canManageMembers: false,
    canManageSettings: false,
    canViewPrivate: false,
  },
  viewer: {
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
    canManageMembers: false,
    canManageSettings: false,
    canViewPrivate: false,
  },
};
```

---

## Service Layer

File: [`src/services/rbacService.ts`](../src/services/rbacService.ts)

### Method Utama

| Method | Deskripsi |
|--------|-----------|
| `createInvite()` | Membuat kode undangan baru |
| `getMyInvites()` | Mendapatkan semua invites milik owner |
| `deleteInvite()` | Menghapus invite |
| `getInviteInfo()` | Mendapatkan info invite sebelum join |
| `joinWithInvite()` | Join akun menggunakan kode undangan |
| `getAccountMembers()` | Mendapatkan semua member akun |
| `getJoinedAccounts()` | Mendapatkan akun yang diikuti user |
| `updateMemberRole()` | Mengubah role member |
| `revokeMember()` | Mencabut akses member |
| `leaveAccount()` | Keluar dari akun yang diikuti |
| `getActiveAccount()` | Mendapatkan akun yang sedang aktif |
| `setActiveAccount()` | Mengatur akun aktif |
| `getCurrentRole()` | Mendapatkan role user saat ini |
| `getAccessibleAccounts()` | Mendapatkan semua akun yang bisa diakses |

### Contoh Penggunaan

```typescript
import { RBACService } from '@/services/rbacService';

// Membuat invite
const invite = await RBACService.createInvite('editor', {
  maxUses: 3,
  expiresInDays: 7,
});

// Join dengan invite code
const member = await RBACService.joinWithInvite('ABCD1234');

// Switch account
await RBACService.setActiveAccount(ownerId);

// Mendapatkan current role
const role = await RBACService.getCurrentRole();
```

---

## Hooks

File: [`src/hooks/usePermissions.ts`](../src/hooks/usePermissions.ts)

### usePermissions

Hook utama untuk mendapatkan permissions user.

```typescript
import { usePermissions } from '@/hooks/usePermissions';

function MyComponent() {
  const { canCreate, canEdit, canDelete, isOwner, role } = usePermissions();
  
  return (
    <div>
      {canCreate && <Button>Tambah</Button>}
      {canEdit && <Button>Edit</Button>}
      {canDelete && <Button>Hapus</Button>}
    </div>
  );
}
```

### useActiveAccount

Mendapatkan akun yang sedang aktif.

```typescript
const { data: activeAccount } = useActiveAccount();
```

### useAccessibleAccounts

Mendapatkan semua akun yang bisa diakses.

```typescript
const { data: accounts } = useAccessibleAccounts();
```

### useAccountMembers

Mendapatkan semua member (untuk owner).

```typescript
const { data: members } = useAccountMembers();
```

### useSwitchAccount

Hook untuk switch akun.

```typescript
const { switchAccount } = useSwitchAccount();

// Switch ke akun lain
await switchAccount(ownerId);
```

---

## UI Components

### PermissionGuard

Component untuk mengontrol visibility/disable berdasarkan permission.

File: [`src/components/features/rbac/PermissionGuard.tsx`](../src/components/features/rbac/PermissionGuard.tsx)

```tsx
import { PermissionGuard } from '@/components/features/rbac/PermissionGuard';

// Hide jika tidak punya permission
<PermissionGuard permissions={['canCreate']}>
  <Button>Tambah Transaksi</Button>
</PermissionGuard>

// Disable jika tidak punya permission
<PermissionGuard permissions={['canEdit']} disableInsteadOfHide>
  <Button>Edit</Button>
</PermissionGuard>

// Multiple permissions (OR logic)
<PermissionGuard permissions={['canEdit', 'canDelete']}>
  <Button>Action</Button>
</PermissionGuard>

// Multiple permissions (AND logic)
<PermissionGuard permissions={['canEdit', 'canManageMembers']} requireAll>
  <Button>Manage Team</Button>
</PermissionGuard>
```

### AccountSwitcher

Dropdown untuk switch antar akun.

File: [`src/components/features/rbac/AccountSwitcher.tsx`](../src/components/features/rbac/AccountSwitcher.tsx)

```tsx
import { AccountSwitcher } from '@/components/features/rbac/AccountSwitcher';

// Mode compact untuk navbar
<AccountSwitcher compact />

// Mode full
<AccountSwitcher />
```

### InviteDialog

Dialog untuk membuat invite baru.

File: [`src/components/features/rbac/InviteDialog.tsx`](../src/components/features/rbac/InviteDialog.tsx)

```tsx
import { InviteDialog } from '@/components/features/rbac/InviteDialog';

<InviteDialog />
```

### InviteList

List semua active invites.

File: [`src/components/features/rbac/InviteList.tsx`](../src/components/features/rbac/InviteList.tsx)

```tsx
import { InviteList } from '@/components/features/rbac/InviteList';

<InviteList />
```

---

## Integrasi

### Navbar Integration

File: [`src/components/layout/Navbar.tsx`](../src/components/layout/Navbar.tsx)

```tsx
import { AccountSwitcher } from '@/components/features/rbac/AccountSwitcher';
import { usePermissions } from '@/hooks/usePermissions';

export default function Navbar() {
  const { isOwner } = usePermissions();
  
  return (
    <header>
      {/* ... */}
      <AccountSwitcher compact />
      {/* ... */}
      {isOwner && (
        <DropdownMenuItem asChild>
          <Link to="/settings/members">Kelola Member</Link>
        </DropdownMenuItem>
      )}
    </header>
  );
}
```

### Transactions Page Integration

File: [`src/pages/TransactionsPage.tsx`](../src/pages/TransactionsPage.tsx)

```tsx
import { PermissionGuard } from '@/components/features/rbac/PermissionGuard';

// Tombol tambah
<PermissionGuard permissions={['canCreate']}>
  <Button onClick={handleCreate}>Tambah Transaksi</Button>
</PermissionGuard>

// Tombol edit
<PermissionGuard permissions={['canEdit']} disableInsteadOfHide>
  <Button onClick={() => handleEdit(transaction)}>Edit</Button>
</PermissionGuard>

// Tombol delete
<PermissionGuard permissions={['canDelete']} disableInsteadOfHide>
  <Button onClick={() => handleDelete(transaction.id)}>Hapus</Button>
</PermissionGuard>
```

### Routing

File: [`src/App.tsx`](../src/App.tsx)

```tsx
import { MemberManagementPage } from '@/pages/MemberManagementPage';
import { JoinAccountPage } from '@/pages/JoinAccountPage';

// Di dalam Routes
<Route path="/settings/members" element={<MemberManagementPage />} />
<Route path="/join" element={<JoinAccountPage />} />
```

---

## Langkah Deployment

### 1. Jalankan SQL Migration

Jalankan file [`supabase/migrations/002_rbac_system.sql`](../supabase/migrations/002_rbac_system.sql) di Supabase Dashboard → SQL Editor.

### 2. Verifikasi Tabel

Pastikan tabel berikut sudah dibuat:
- `account_members`
- `account_invites`
- `active_account`
- `audit_logs`

### 3. Verifikasi RLS

Pastikan RLS sudah aktif pada semua tabel dan policies sudah dibuat.

### 4. Test Flow

1. **Create Invite**
   - Login sebagai owner
   - Buka `/settings/members`
   - Klik "Invite Member"
   - Pilih role dan buat invite

2. **Join Account**
   - Login sebagai user lain
   - Buka `/join?code=XXXXXXXX`
   - Masukkan kode invite
   - Accept dan join

3. **Switch Account**
   - Klik AccountSwitcher di navbar
   - Pilih akun yang ingin diakses

4. **Verify Permissions**
   - Coba akses fitur berbeda dengan role berbeda
   - Pastikan permission guard bekerja dengan benar

---

## Troubleshooting

### Error: "Invalid invitation code"

- Pastikan kode invite benar (8 karakter)
- Pastikan invite belum expired
- Pastikan `used_count < max_uses`

### Error: "You are already a member of this account"

- User sudah menjadi member aktif dari akun tersebut
- Coba revoke member lalu invite ulang

### Permission tidak berubah setelah switch account

- Pastikan `switchAccount` invalidates query dengan benar
- Coba refresh halaman

### RLS Policy tidak bekerja

- Pastikan `auth.uid()` mengembalikan nilai yang benar
- Check di Supabase Dashboard → Authentication → Users
- Verify policies dengan query manual di SQL Editor

---

## Future Improvements

1. **Email Notification** - Kirim email saat diundang
2. **Rate Limiting** - Batasi jumlah invite per jam
3. **Two-Factor Auth** - Verifikasi tambahan untuk aksi sensitif
4. **Activity Log UI** - Tampilkan audit logs ke user
5. **Bulk Invite** - Undang multiple users sekaligus
6. **Custom Roles** - Izinkan custom permission per role

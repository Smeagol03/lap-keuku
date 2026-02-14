// RBAC Types for Lap-Keu

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
  
  // Joined relations
  member_profile?: {
    id: string;
    full_name: string;
    avatar_url?: string;
    email: string;
  };
  inviter_profile?: {
    id: string;
    full_name: string;
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
  
  // Joined relation
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

export interface AuditLog {
  id: string;
  actor_id: string;
  action: string;
  resource_type: string;
  resource_id?: string;
  details: Record<string, unknown>;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
}

// Form types
export interface CreateInviteFormData {
  role: MemberRole;
  email?: string;
  max_uses: number;
  expires_in_days: number;
}

export interface JoinAccountData {
  code: string;
}

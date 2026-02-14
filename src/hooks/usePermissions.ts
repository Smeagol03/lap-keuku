import { useMemo } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { ROLE_PERMISSIONS, type MemberRole, type PermissionCheck } from '@/types/rbac';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { RBACService } from '@/services/rbacService';

/**
 * Hook untuk mendapatkan permissions user saat ini
 */
export function usePermissions() {
  const { isAuthenticated } = useAuthStore();

  // Fetch current role
  const { data: role = 'viewer', isLoading } = useQuery({
    queryKey: ['currentRole'],
    queryFn: () => RBACService.getCurrentRole(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const permissions: PermissionCheck = useMemo(() => {
    return ROLE_PERMISSIONS[role as MemberRole] || ROLE_PERMISSIONS.viewer;
  }, [role]);

  return {
    ...permissions,
    isOwner: role === 'owner',
    role: role as MemberRole,
    isLoading,
  };
}

/**
 * Hook untuk mendapatkan active account
 */
export function useActiveAccount() {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ['activeAccount'],
    queryFn: () => RBACService.getActiveAccount(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook untuk mendapatkan joined accounts
 */
export function useJoinedAccounts() {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ['joinedAccounts'],
    queryFn: () => RBACService.getJoinedAccounts(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook untuk mendapatkan account members (untuk owner)
 */
export function useAccountMembers() {
  const { isAuthenticated } = useAuthStore();
  const { isOwner } = usePermissions();

  return useQuery({
    queryKey: ['accountMembers'],
    queryFn: () => RBACService.getAccountMembers(),
    enabled: isAuthenticated && isOwner,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook untuk mendapatkan invites (untuk owner)
 */
export function useMyInvites() {
  const { isAuthenticated } = useAuthStore();
  const { isOwner } = usePermissions();

  return useQuery({
    queryKey: ['myInvites'],
    queryFn: () => RBACService.getMyInvites(),
    enabled: isAuthenticated && isOwner,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook untuk mendapatkan semua akun yang bisa diakses
 */
export function useAccessibleAccounts() {
  const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ['accessibleAccounts'],
    queryFn: () => RBACService.getAccessibleAccounts(),
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook untuk switch account
 */
export function useSwitchAccount() {
  const queryClient = useQueryClient();

  const switchAccount = async (ownerId: string) => {
    await RBACService.setActiveAccount(ownerId);
    
    // Invalidate all queries that depend on active account
    queryClient.invalidateQueries({ queryKey: ['activeAccount'] });
    queryClient.invalidateQueries({ queryKey: ['currentRole'] });
    queryClient.invalidateQueries({ queryKey: ['transactions'] });
    queryClient.invalidateQueries({ queryKey: ['categories'] });
    queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
  };

  return { switchAccount };
}

/**
 * Hook untuk mendapatkan info invite
 */
export function useInviteInfo(code: string | null) {
  return useQuery({
    queryKey: ['inviteInfo', code],
    queryFn: () => RBACService.getInviteInfo(code!),
    enabled: !!code,
    staleTime: 60 * 1000, // 1 minute
    retry: false,
  });
}

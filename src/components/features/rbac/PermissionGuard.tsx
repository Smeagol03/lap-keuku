import type { ReactNode } from 'react';
import { usePermissions } from '@/hooks/usePermissions';
import type { PermissionCheck } from '@/types/rbac';

interface PermissionGuardProps {
  /** Permissions yang diperlukan (OR logic by default) */
  permissions?: (keyof PermissionCheck)[];
  /** Jika true, semua permissions harus terpenuhi (AND logic) */
  requireAll?: boolean;
  /** Custom condition check */
  condition?: boolean;
  /** Fallback content jika tidak memiliki permission */
  fallback?: ReactNode;
  /** Jika true, children akan disabled bukan hidden */
  disableInsteadOfHide?: boolean;
  /** Children yang akan di-render */
  children: ReactNode;
}

/**
 * Component untuk mengontrol visibility/disable berdasarkan permissions
 * 
 * @example
 * // Hide jika tidak punya permission
 * <PermissionGuard permissions={['canCreate']}>
 *   <Button>Tambah Transaksi</Button>
 * </PermissionGuard>
 * 
 * @example
 * // Disable jika tidak punya permission
 * <PermissionGuard permissions={['canEdit']} disableInsteadOfHide>
 *   <Button>Edit</Button>
 * </PermissionGuard>
 * 
 * @example
 * // Multiple permissions (OR logic)
 * <PermissionGuard permissions={['canEdit', 'canDelete']}>
 *   <Button>Action</Button>
 * </PermissionGuard>
 * 
 * @example
 * // Multiple permissions (AND logic)
 * <PermissionGuard permissions={['canEdit', 'canManageMembers']} requireAll>
 *   <Button>Manage Team</Button>
 * </PermissionGuard>
 */
export function PermissionGuard({
  permissions = [],
  requireAll = false,
  condition,
  fallback = null,
  disableInsteadOfHide = false,
  children,
}: PermissionGuardProps) {
  const userPermissions = usePermissions();

  // Check custom condition first
  if (condition !== undefined && !condition) {
    return <>{fallback}</>;
  }

  // If no permissions specified, just check authentication
  if (permissions.length === 0) {
    return <>{children}</>;
  }

  // Check permissions
  const hasPermission = requireAll
    ? permissions.every((p) => userPermissions[p] === true)
    : permissions.some((p) => userPermissions[p] === true);

  if (!hasPermission) {
    if (disableInsteadOfHide) {
      // Render children but disabled
      return (
        <div className="pointer-events-none opacity-50" aria-disabled="true">
          {children}
        </div>
      );
    }
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

/**
 * HOC untuk wrapping component dengan permission check
 */
export function withPermission<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredPermissions: (keyof PermissionCheck)[],
  fallback?: ReactNode
) {
  return function WithPermissionComponent(props: P) {
    return (
      <PermissionGuard permissions={requiredPermissions} fallback={fallback}>
        <WrappedComponent {...props} />
      </PermissionGuard>
    );
  };
}

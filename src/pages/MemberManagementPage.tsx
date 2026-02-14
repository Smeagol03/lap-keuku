import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Edit, Eye, MoreHorizontal, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAccountMembers, usePermissions } from '@/hooks/usePermissions';
import { RBACService } from '@/services/rbacService';
import { useToast } from '@/hooks/useToast';
import { InviteDialog } from '@/components/features/rbac/InviteDialog';
import { InviteList } from '@/components/features/rbac/InviteList';
import type { AccountMember, MemberRole } from '@/types/rbac';

const roleIcons: Record<MemberRole, React.ReactNode> = {
  owner: <Shield className="h-4 w-4" />,
  admin: <Shield className="h-4 w-4" />,
  editor: <Edit className="h-4 w-4" />,
  viewer: <Eye className="h-4 w-4" />,
};

const roleColors: Record<MemberRole, string> = {
  owner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  admin: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  editor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  viewer: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
};

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  revoked: 'bg-red-100 text-red-800',
};

export function MemberManagementPage() {
  const { data: members = [], isLoading, refetch } = useAccountMembers();
  const { isOwner } = usePermissions();
  const { toast } = useToast();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [revokeDialogOpen, setRevokeDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<AccountMember | null>(null);
  const [newRole, setNewRole] = useState<MemberRole>('viewer');

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleEditRole = async () => {
    if (!selectedMember) return;

    try {
      await RBACService.updateMemberRole(selectedMember.id, newRole);
      toast({
        title: 'Role updated',
        description: `${selectedMember.member_profile?.full_name}'s role has been changed to ${newRole}.`,
      });
      setEditDialogOpen(false);
      refetch();
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update role',
        variant: 'destructive',
      });
    }
  };

  const handleRevoke = async () => {
    if (!selectedMember) return;

    try {
      await RBACService.revokeMember(selectedMember.id);
      toast({
        title: 'Access revoked',
        description: `${selectedMember.member_profile?.full_name}'s access has been revoked.`,
      });
      setRevokeDialogOpen(false);
      refetch();
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to revoke access',
        variant: 'destructive',
      });
    }
  };

  const openEditDialog = (member: AccountMember) => {
    setSelectedMember(member);
    setNewRole(member.role);
    setEditDialogOpen(true);
  };

  const openRevokeDialog = (member: AccountMember) => {
    setSelectedMember(member);
    setRevokeDialogOpen(true);
  };

  if (!isOwner) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <Shield className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
        <p className="text-muted-foreground">
          Only account owners can manage members.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Member Management</h1>
          <p className="text-muted-foreground">
            Manage who has access to your account
          </p>
        </div>
        <InviteDialog />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Members ({members.filter((m) => m.status === 'active').length})
            </CardTitle>
            <CardDescription>
              People who have access to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 animate-pulse bg-muted rounded-md" />
                ))}
              </div>
            ) : members.length === 0 ? (
              <p className="text-muted-foreground text-sm">
                No members yet. Invite someone to share access.
              </p>
            ) : (
              <div className="space-y-3">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.member_profile?.avatar_url} />
                        <AvatarFallback>
                          {member.member_profile?.full_name
                            ? getInitials(member.member_profile.full_name)
                            : '?'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            {member.member_profile?.full_name || 'Unknown'}
                          </span>
                          <Badge className={statusColors[member.status]}>
                            {member.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {member.member_profile?.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className={roleColors[member.role]}>
                        <span className="flex items-center gap-1">
                          {roleIcons[member.role]}
                          {member.role}
                        </span>
                      </Badge>

                      {member.role !== 'owner' && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => openEditDialog(member)}>
                              Change Role
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => openRevokeDialog(member)}
                              className="text-destructive"
                            >
                              Revoke Access
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <InviteList />
      </div>

      {/* Join Another Account */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Join Another Account
          </CardTitle>
          <CardDescription>
            Have an invite code? Join another account to access their shared financial data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/join">
            <Button variant="outline" className="w-full sm:w-auto">
              <UserPlus className="mr-2 h-4 w-4" />
              Enter Invite Code
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Edit Role Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Role</DialogTitle>
            <DialogDescription>
              Change the role for {selectedMember?.member_profile?.full_name}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Select value={newRole} onValueChange={(v) => setNewRole(v as MemberRole)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditRole}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Revoke Access Dialog */}
      <Dialog open={revokeDialogOpen} onOpenChange={setRevokeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Revoke Access</DialogTitle>
            <DialogDescription>
              Are you sure you want to revoke access for{' '}
              {selectedMember?.member_profile?.full_name}? They will no longer be
              able to view or manage your account data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRevokeDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleRevoke}>
              Revoke Access
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

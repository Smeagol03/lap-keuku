import { format } from 'date-fns';
import { Trash2, Clock, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMyInvites } from '@/hooks/usePermissions';
import { RBACService } from '@/services/rbacService';
import { useToast } from '@/hooks/useToast';
import type { MemberRole } from '@/types/rbac';

const roleColors: Record<MemberRole, string> = {
  owner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  admin: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  editor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  viewer: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
};

export function InviteList() {
  const { data: invites = [], isLoading, refetch } = useMyInvites();
  const { toast } = useToast();

  const handleDelete = async (inviteId: string) => {
    try {
      await RBACService.deleteInvite(inviteId);
      toast({
        title: 'Invite deleted',
        description: 'The invite has been removed.',
      });
      refetch();
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to delete invite',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Active Invites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="h-16 animate-pulse bg-muted rounded-md" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const activeInvites = invites.filter(
    (invite) => new Date(invite.expires_at) > new Date() && invite.used_count < invite.max_uses
  );

  if (activeInvites.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Active Invites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            No active invites. Create one to share access to your account.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Invites ({activeInvites.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activeInvites.map((invite) => {
            const isExpired = new Date(invite.expires_at) < new Date();

            return (
              <div
                key={invite.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg gap-3"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <code className="px-3 py-1 bg-muted rounded font-mono text-sm break-all">
                    {invite.code}
                  </code>
                  <Badge className={roleColors[invite.role]}>
                    {invite.role}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                  {invite.email && (
                    <div className="flex items-center gap-1 min-w-0">
                      <Mail className="h-3 w-3 shrink-0" />
                      <span className="truncate">{invite.email}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>
                      {invite.used_count}/{invite.max_uses}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {isExpired
                        ? 'Expired'
                        : format(new Date(invite.expires_at), 'dd MMM yyyy')}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(invite.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

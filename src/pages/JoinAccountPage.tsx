import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserPlus, Loader2, Shield, Edit, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useInviteInfo } from '@/hooks/usePermissions';
import { RBACService } from '@/services/rbacService';
import { useToast } from '@/hooks/useToast';
import type { MemberRole } from '@/types/rbac';

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

const roleDescriptions: Record<MemberRole, string[]> = {
  owner: ['Full access to all features', 'Can manage members', 'Can manage settings'],
  admin: ['Can view all shared transactions', 'Can create and edit transactions', 'Can manage members'],
  editor: ['Can view all shared transactions', 'Can create and edit transactions'],
  viewer: ['Can view shared transactions only'],
};

export function JoinAccountPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const codeFromUrl = searchParams.get('code');
  const [code, setCode] = useState(codeFromUrl || '');
  const [joining, setJoining] = useState(false);

  const { data: inviteInfo, isLoading, error, refetch } = useInviteInfo(
    code.length === 8 ? code : null
  );

  const handleCheckCode = () => {
    if (code.length === 8) {
      setSearchParams({ code });
      refetch();
    }
  };

  const handleJoin = async () => {
    if (!code) return;

    setJoining(true);
    try {
      const { ownerId } = await RBACService.joinWithInvite(code);
      
      // Switch to the joined account
      await RBACService.setActiveAccount(ownerId);
      
      toast({
        title: 'Successfully joined!',
        description: `You now have access to ${inviteInfo?.owner_profile?.full_name}'s account.`,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Join error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to join account',
        variant: 'destructive',
      });
    } finally {
      setJoining(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="container max-w-lg mx-auto py-8">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserPlus className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Join Account</CardTitle>
          <CardDescription>
            Enter the invite code to join and get access to shared financial data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Code Input */}
          <div className="space-y-2">
            <Label htmlFor="code">Invite Code</Label>
            <div className="flex gap-2">
              <Input
                id="code"
                placeholder="XXXXXXXX"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                maxLength={8}
                className="text-center text-lg font-mono tracking-widest"
              />
              <Button onClick={handleCheckCode} disabled={code.length !== 8 || isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Check'
                )}
              </Button>
            </div>
          </div>

          {/* Invite Preview */}
          {isLoading && (
            <div className="animate-pulse space-y-3">
              <div className="h-20 bg-muted rounded-lg" />
            </div>
          )}

          {error && (
            <div className="p-4 border border-destructive rounded-lg text-destructive text-sm">
              Invalid or expired invite code. Please check the code and try again.
            </div>
          )}

          {inviteInfo && (
            <div className="space-y-4">
              {/* Owner Info */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={undefined} />
                    <AvatarFallback>
                      {inviteInfo.owner_profile?.full_name
                        ? getInitials(inviteInfo.owner_profile.full_name)
                        : '?'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{inviteInfo.owner_profile?.full_name}</p>
                    <p className="text-sm text-muted-foreground">
                      {inviteInfo.owner_profile?.email}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  has invited you to join their account with the following permissions:
                </p>
              </div>

              {/* Role Info */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={roleColors[inviteInfo.role]}>
                    <span className="flex items-center gap-1">
                      {roleIcons[inviteInfo.role]}
                      {inviteInfo.role.charAt(0).toUpperCase() + inviteInfo.role.slice(1)}
                    </span>
                  </Badge>
                </div>
                <ul className="space-y-1">
                  {roleDescriptions[inviteInfo.role].map((desc, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Join Button */}
              <Button
                className="w-full"
                onClick={handleJoin}
                disabled={joining}
              >
                {joining ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Accept & Join
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

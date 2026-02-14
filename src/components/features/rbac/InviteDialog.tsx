import { useState } from 'react';
import { Copy, Check, Loader2, UserPlus, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/useToast';
import { RBACService } from '@/services/rbacService';
import type { MemberRole } from '@/types/rbac';

interface InviteDialogProps {
  /** Trigger button variant */
  triggerVariant?: 'default' | 'outline' | 'ghost';
  /** Custom trigger element */
  trigger?: React.ReactNode;
}

const roleOptions: { value: MemberRole; label: string; description: string }[] = [
  { value: 'admin', label: 'Admin', description: 'Can manage members and all transactions' },
  { value: 'editor', label: 'Editor', description: 'Can create and edit shared transactions' },
  { value: 'viewer', label: 'Viewer', description: 'Can only view shared transactions' },
];

export function InviteDialog({ triggerVariant = 'default', trigger }: InviteDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [formData, setFormData] = useState({
    role: 'viewer' as MemberRole,
    email: '',
    maxUses: '1',
    expiresInDays: '7',
  });
  const { toast } = useToast();

  const getInviteLink = () => {
    if (!inviteCode) return '';
    const baseUrl = window.location.origin;
    return `${baseUrl}/join?code=${inviteCode}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const invite = await RBACService.createInvite(formData.role, {
        email: formData.email || undefined,
        maxUses: parseInt(formData.maxUses, 10),
        expiresInDays: parseInt(formData.expiresInDays, 10),
      });
      
      setInviteCode(invite.code);
      toast({
        title: 'Invite created',
        description: 'Share the code with the person you want to invite.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create invite',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (inviteCode) {
      await navigator.clipboard.writeText(inviteCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = async () => {
    const link = getInviteLink();
    if (link) {
      await navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
      toast({
        title: 'Link copied!',
        description: 'Share this link with the person you want to invite.',
      });
    }
  };

  const handleShare = async () => {
    const link = getInviteLink();
    if (navigator.share && link) {
      try {
        await navigator.share({
          title: 'Join my FinTrack account',
          text: `I've invited you to join my FinTrack account. Use this link: ${link}`,
          url: link,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback to copy
      handleCopyLink();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setInviteCode(null);
    setFormData({
      role: 'viewer',
      email: '',
      maxUses: '1',
      expiresInDays: '7',
    });
  };

  const selectedRole = roleOptions.find((r) => r.value === formData.role);

  return (
    <Dialog open={open} onOpenChange={open ? handleClose : setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={triggerVariant}>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>
            {inviteCode ? 'Invite Code Created!' : 'Invite New Member'}
          </DialogTitle>
          <DialogDescription>
            {inviteCode
              ? 'Share this code with the person you want to invite.'
              : 'Create an invite code to share access to your account.'}
          </DialogDescription>
        </DialogHeader>

        {inviteCode ? (
          <div className="space-y-4">
            {/* Invite Code */}
            <div className="space-y-2">
              <Label>Invite Code</Label>
              <div className="flex items-center gap-2">
                <Input
                  value={inviteCode}
                  readOnly
                  className="text-center text-2xl font-mono tracking-widest"
                />
                <Button variant="outline" size="icon" onClick={handleCopy}>
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Shareable Link */}
            <div className="space-y-2">
              <Label>Shareable Link</Label>
              <div className="flex items-center gap-2">
                <Input
                  value={getInviteLink()}
                  readOnly
                  className="text-sm"
                />
                <Button variant="outline" size="icon" onClick={handleCopyLink}>
                  {copiedLink ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex gap-2">
              <Button 
                variant="default" 
                className="flex-1"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Link
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              This invite will expire in {formData.expiresInDays} days
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value as MemberRole })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex flex-col">
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedRole && (
                  <p className="text-xs text-muted-foreground">
                    {selectedRole.description}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Optionally specify who can use this invite
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="maxUses">Max Uses</Label>
                  <Select
                    value={formData.maxUses}
                    onValueChange={(value) =>
                      setFormData({ ...formData, maxUses: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 use</SelectItem>
                      <SelectItem value="3">3 uses</SelectItem>
                      <SelectItem value="5">5 uses</SelectItem>
                      <SelectItem value="10">10 uses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="expires">Expires in</Label>
                  <Select
                    value={formData.expiresInDays}
                    onValueChange={(value) =>
                      setFormData({ ...formData, expiresInDays: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Invite
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

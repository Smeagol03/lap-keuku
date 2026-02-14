import { useState } from 'react';
import { Check, ChevronsUpDown, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useActiveAccount, useAccessibleAccounts, useSwitchAccount } from '@/hooks/usePermissions';
import { useAuthStore } from '@/stores/authStore';
import type { MemberRole } from '@/types/rbac';

interface AccountSwitcherProps {
  /** Mode compact untuk navbar */
  compact?: boolean;
}

const roleLabels: Record<MemberRole, string> = {
  owner: 'Owner',
  admin: 'Admin',
  editor: 'Editor',
  viewer: 'Viewer',
};

const roleColors: Record<MemberRole, string> = {
  owner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  admin: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  editor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  viewer: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
};

export function AccountSwitcher({ compact = false }: AccountSwitcherProps) {
  const [open, setOpen] = useState(false);
  const { profile } = useAuthStore();
  const { data: activeAccount } = useActiveAccount();
  const { data: accounts = [], isLoading } = useAccessibleAccounts();
  const { switchAccount } = useSwitchAccount();

  const currentOwnerId = activeAccount?.active_owner_id || profile?.id;
  const currentAccount = accounts.find((a) => a.owner_id === currentOwnerId);

  const handleSelect = async (ownerId: string) => {
    if (ownerId !== currentOwnerId) {
      await switchAccount(ownerId);
    }
    setOpen(false);
  };

  if (isLoading || accounts.length === 0) {
    return null;
  }

  // If only one account and it's own account, don't show switcher
  if (accounts.length === 1 && accounts[0].role === 'owner') {
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select account"
          className={cn(
            'justify-between',
            compact ? 'h-9 w-auto px-2' : 'w-full max-w-70'
          )}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className="h-6 w-6 shrink-0">
              <AvatarImage src={currentAccount?.profile.avatar_url} />
              <AvatarFallback className="text-xs">
                {currentAccount?.profile.full_name
                  ? getInitials(currentAccount.profile.full_name)
                  : '?'}
              </AvatarFallback>
            </Avatar>
            {!compact && (
              <div className="flex flex-col items-start overflow-hidden">
                <span className="truncate text-sm font-medium">
                  {currentAccount?.profile.full_name || 'Unknown'}
                </span>
                <span className={cn(
                  'text-xs',
                  roleColors[currentAccount?.role || 'viewer']
                )}>
                  {roleLabels[currentAccount?.role || 'viewer']}
                </span>
              </div>
            )}
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-70 p-0">
        <Command>
          <CommandInput placeholder="Search account..." />
          <CommandList>
            <CommandEmpty>No accounts found.</CommandEmpty>
            <CommandGroup heading="Your Accounts">
              {accounts.map((account) => (
                <CommandItem
                  key={account.owner_id}
                  onSelect={() => handleSelect(account.owner_id)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarImage src={account.profile.avatar_url} />
                      <AvatarFallback className="text-xs">
                        {account.profile.full_name
                          ? getInitials(account.profile.full_name)
                          : '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden flex-1">
                      <span className="truncate font-medium">
                        {account.profile.full_name}
                      </span>
                      <span className={cn(
                        'text-xs px-1.5 py-0.5 rounded w-fit',
                        roleColors[account.role]
                      )}>
                        {roleLabels[account.role]}
                      </span>
                    </div>
                    {account.owner_id === currentOwnerId && (
                      <Check className="h-4 w-4 shrink-0" />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  // Navigate to member management page
                  window.location.href = '/settings/members';
                }}
                className="cursor-pointer"
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Members
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

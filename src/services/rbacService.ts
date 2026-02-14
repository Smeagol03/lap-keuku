import { supabase } from '@/lib/supabase';
import type { 
  AccountMember, 
  AccountInvite, 
  MemberRole, 
  ActiveAccount
} from '@/types/rbac';

export class RBACService {
  // ==================== INVITE MANAGEMENT ====================

  /**
   * Membuat invitation code baru
   */
  static async createInvite(
    role: MemberRole,
    options?: {
      email?: string;
      maxUses?: number;
      expiresInDays?: number;
    }
  ): Promise<AccountInvite> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const code = this.generateInviteCode();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + (options?.expiresInDays || 7));

    const { data, error } = await supabase
      .from('account_invites')
      .insert({
        owner_id: user.id,
        created_by: user.id,
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

  /**
   * Mendapatkan semua invites untuk owner
   */
  static async getMyInvites(): Promise<AccountInvite[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('account_invites')
      .select('*')
      .eq('owner_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Menghapus invite
   */
  static async deleteInvite(inviteId: string): Promise<void> {
    const { error } = await supabase
      .from('account_invites')
      .delete()
      .eq('id', inviteId);

    if (error) throw error;
  }

  // ==================== JOIN/ACCEPT INVITE ====================

  /**
   * Mendapatkan info invite sebelum join
   */
  static async getInviteInfo(code: string): Promise<AccountInvite & { owner_profile: { full_name: string; email: string } }> {
    const { data, error } = await supabase
      .from('account_invites')
      .select(`
        *,
        owner_profile:profiles!owner_id (full_name, email)
      `)
      .eq('code', code)
      .single();

    if (error) throw new Error('Invalid invitation code');
    return data as AccountInvite & { owner_profile: { full_name: string; email: string } };
  }

  /**
   * Join menggunakan invitation code
   */
  static async joinWithInvite(code: string): Promise<AccountMember> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    // 1. Validate invite
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

    // 2. Check if already a member
    const { data: existingMember } = await supabase
      .from('account_members')
      .select('*')
      .eq('owner_id', invite.owner_id)
      .eq('member_id', user.id)
      .single();

    if (existingMember) {
      if (existingMember.status === 'active') {
        throw new Error('You are already a member of this account');
      }
      // Reactivate if previously revoked
      const { data, error } = await supabase
        .from('account_members')
        .update({
          status: 'active',
          role: invite.role,
          accepted_at: new Date().toISOString(),
        })
        .eq('id', existingMember.id)
        .select()
        .single();

      if (error) throw error;
      await this.incrementInviteUsage(invite.id, invite.used_count);
      return data;
    }

    // 3. Create new member
    const { data: member, error: memberError } = await supabase
      .from('account_members')
      .insert({
        owner_id: invite.owner_id,
        member_id: user.id,
        role: invite.role,
        status: 'active',
        invited_by: invite.created_by,
        accepted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (memberError) throw memberError;

    // 4. Update used_count
    await this.incrementInviteUsage(invite.id, invite.used_count);

    return member;
  }

  private static async incrementInviteUsage(inviteId: string, currentCount: number): Promise<void> {
    const { error } = await supabase
      .from('account_invites')
      .update({ used_count: currentCount + 1 })
      .eq('id', inviteId);

    if (error) throw error;
  }

  // ==================== MEMBER MANAGEMENT ====================

  /**
   * Mendapatkan semua member akun (untuk owner)
   */
  static async getAccountMembers(): Promise<AccountMember[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('account_members')
      .select(`
        *,
        member_profile:profiles!member_id (id, full_name, avatar_url, email),
        inviter_profile:profiles!invited_by (id, full_name)
      `)
      .eq('owner_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  /**
   * Mendapatkan akun yang diikuti user
   */
  static async getJoinedAccounts(): Promise<AccountMember[]> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('account_members')
      .select(`
        *,
        owner_profile:profiles!owner_id (id, full_name, avatar_url, email)
      `)
      .eq('member_id', user.id)
      .eq('status', 'active');

    if (error) throw error;
    return data || [];
  }

  /**
   * Update role member
   */
  static async updateMemberRole(memberId: string, role: MemberRole): Promise<void> {
    const { error } = await supabase
      .from('account_members')
      .update({ role, updated_at: new Date().toISOString() })
      .eq('id', memberId);

    if (error) throw error;
  }

  /**
   * Revoke member access
   */
  static async revokeMember(memberId: string): Promise<void> {
    const { error } = await supabase
      .from('account_members')
      .update({ status: 'revoked', updated_at: new Date().toISOString() })
      .eq('id', memberId);

    if (error) throw error;
  }

  /**
   * Leave dari akun yang diikuti
   */
  static async leaveAccount(ownerId: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('account_members')
      .delete()
      .eq('owner_id', ownerId)
      .eq('member_id', user.id);

    if (error) throw error;
  }

  // ==================== ACTIVE ACCOUNT ====================

  /**
   * Mendapatkan active account
   */
  static async getActiveAccount(): Promise<ActiveAccount | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('active_account')
      .select(`
        *,
        owner_profile:profiles!active_owner_id (id, full_name, avatar_url, email)
      `)
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  }

  /**
   * Set active account
   */
  static async setActiveAccount(ownerId: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    // Upsert active account
    const { error } = await supabase
      .from('active_account')
      .upsert({
        user_id: user.id,
        active_owner_id: ownerId,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;
  }

  /**
   * Initialize active account (set to own account if not set)
   */
  static async initializeActiveAccount(): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const existing = await this.getActiveAccount();
    if (!existing) {
      await this.setActiveAccount(user.id);
    }
  }

  // ==================== PERMISSIONS ====================

  /**
   * Mendapatkan role user untuk active account
   */
  static async getCurrentRole(): Promise<MemberRole> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 'viewer';

    const activeAccount = await this.getActiveAccount();
    if (!activeAccount) return 'owner';

    // If active account is own account, user is owner
    if (activeAccount.active_owner_id === user.id) {
      return 'owner';
    }

    // Get role from account_members
    const { data: member } = await supabase
      .from('account_members')
      .select('role')
      .eq('owner_id', activeAccount.active_owner_id)
      .eq('member_id', user.id)
      .eq('status', 'active')
      .single();

    return (member?.role as MemberRole) || 'viewer';
  }

  /**
   * Mendapatkan semua akun yang bisa diakses user (own + joined)
   */
  static async getAccessibleAccounts(): Promise<Array<{ 
    owner_id: string; 
    role: MemberRole; 
    profile: { id: string; full_name: string; avatar_url?: string; email: string };
  }>> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    // Get own profile
    const { data: ownProfile } = await supabase
      .from('profiles')
      .select('id, full_name, avatar_url, email')
      .eq('id', user.id)
      .single();

    const accounts: Array<{ 
      owner_id: string; 
      role: MemberRole; 
      profile: { id: string; full_name: string; avatar_url?: string; email: string };
    }> = [];

    // Add own account
    if (ownProfile) {
      accounts.push({
        owner_id: user.id,
        role: 'owner',
        profile: ownProfile,
      });
    }

    // Get joined accounts
    const joinedAccounts = await this.getJoinedAccounts();
    for (const account of joinedAccounts) {
      if (account.owner_profile) {
        accounts.push({
          owner_id: account.owner_id,
          role: account.role as MemberRole,
          profile: account.owner_profile,
        });
      }
    }

    return accounts;
  }

  // ==================== HELPERS ====================

  private static generateInviteCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
}

// Export individual functions for easier imports
export const createInvite = RBACService.createInvite;
export const getMyInvites = RBACService.getMyInvites;
export const deleteInvite = RBACService.deleteInvite;
export const getInviteInfo = RBACService.getInviteInfo;
export const joinWithInvite = RBACService.joinWithInvite;
export const getAccountMembers = RBACService.getAccountMembers;
export const getJoinedAccounts = RBACService.getJoinedAccounts;
export const updateMemberRole = RBACService.updateMemberRole;
export const revokeMember = RBACService.revokeMember;
export const leaveAccount = RBACService.leaveAccount;
export const getActiveAccount = RBACService.getActiveAccount;
export const setActiveAccount = RBACService.setActiveAccount;
export const initializeActiveAccount = RBACService.initializeActiveAccount;
export const getCurrentRole = RBACService.getCurrentRole;
export const getAccessibleAccounts = RBACService.getAccessibleAccounts;

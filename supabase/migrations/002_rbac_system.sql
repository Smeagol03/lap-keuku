-- =====================================================
-- RBAC System Migration for Lap-Keu
-- Version: 1.0.0
-- Created: 2024
-- =====================================================

-- =====================================================
-- 1. ACCOUNT MEMBERS TABLE
-- =====================================================

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
  
  -- Constraint: Satu member hanya bisa join satu akun owner
  UNIQUE(owner_id, member_id),
  -- Constraint: Owner tidak bisa menjadi member akun lain
  CHECK (owner_id != member_id)
);

-- Index untuk query performance
CREATE INDEX idx_account_members_owner ON account_members(owner_id);
CREATE INDEX idx_account_members_member ON account_members(member_id);
CREATE INDEX idx_account_members_status ON account_members(status);
CREATE INDEX idx_account_members_owner_status ON account_members(owner_id, status);

-- =====================================================
-- 2. ACCOUNT INVITES TABLE
-- =====================================================

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

CREATE INDEX idx_account_invites_code ON account_invites(code);
CREATE INDEX idx_account_invites_owner ON account_invites(owner_id);
CREATE INDEX idx_account_invites_expires ON account_invites(expires_at);

-- =====================================================
-- 3. ACTIVE ACCOUNT TABLE (for account switching)
-- =====================================================

CREATE TABLE IF NOT EXISTS active_account (
  user_id         UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  active_owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_active_account_user ON active_account(user_id);
CREATE INDEX idx_active_account_owner ON active_account(active_owner_id);

-- =====================================================
-- 4. AUDIT LOGS TABLE
-- =====================================================

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

CREATE INDEX idx_audit_logs_actor ON audit_logs(actor_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_resource ON audit_logs(resource_type, resource_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);

-- =====================================================
-- 5. UPDATE TRANSACTIONS TABLE
-- =====================================================

-- Tambahkan kolom untuk RBAC
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS visibility TEXT DEFAULT 'private' 
  CHECK (visibility IN ('private', 'shared', 'public'));
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES profiles(id) ON DELETE SET NULL;
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE;

-- Set owner_id untuk existing transactions ke user_id
UPDATE transactions SET owner_id = user_id WHERE owner_id IS NULL;

-- Index untuk RLS performance
CREATE INDEX IF NOT EXISTS idx_transactions_owner ON transactions(owner_id);
CREATE INDEX IF NOT EXISTS idx_transactions_visibility ON transactions(visibility);
CREATE INDEX IF NOT EXISTS idx_transactions_created_by ON transactions(created_by);

-- =====================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS
ALTER TABLE account_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE active_account ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- RLS for account_members
-- =====================================================

-- Owner dapat melihat semua member mereka
CREATE POLICY "owner_view_members" ON account_members
  FOR SELECT USING (auth.uid() = owner_id);

-- Member dapat melihat data mereka sendiri
CREATE POLICY "member_view_own" ON account_members
  FOR SELECT USING (auth.uid() = member_id);

-- Owner dapat insert member baru, ATAU user dapat insert diri mereka sendiri dengan invite valid
CREATE POLICY "insert_members" ON account_members
  FOR INSERT WITH CHECK (
    -- Owner can insert members directly
    auth.uid() = owner_id
    OR
    -- User can insert themselves when using valid invite
    (
      auth.uid() = member_id
      AND EXISTS (
        SELECT 1 FROM account_invites
        WHERE account_invites.owner_id = account_members.owner_id
        AND account_invites.expires_at > NOW()
        AND account_invites.used_count < account_invites.max_uses
      )
    )
  );

-- Owner dapat update member
CREATE POLICY "owner_update_members" ON account_members
  FOR UPDATE USING (auth.uid() = owner_id);

-- Owner dapat delete member
CREATE POLICY "owner_delete_members" ON account_members
  FOR DELETE USING (auth.uid() = owner_id);

-- Member dapat update status mereka sendiri (untuk accept/reject)
CREATE POLICY "member_update_status" ON account_members
  FOR UPDATE USING (auth.uid() = member_id)
  WITH CHECK (auth.uid() = member_id);

-- Member dapat delete (leave) membership mereka sendiri
CREATE POLICY "member_delete_own" ON account_members
  FOR DELETE USING (auth.uid() = member_id);

-- =====================================================
-- RLS for account_invites
-- =====================================================

-- Owner dapat melihat semua invites mereka
CREATE POLICY "owner_view_invites" ON account_invites
  FOR SELECT USING (auth.uid() = owner_id);

-- Owner dapat membuat invites
CREATE POLICY "owner_insert_invites" ON account_invites
  FOR INSERT WITH CHECK (auth.uid() = owner_id);

-- Owner dapat menghapus invites
CREATE POLICY "owner_delete_invites" ON account_invites
  FOR DELETE USING (auth.uid() = owner_id);

-- Anyone dapat melihat invite yang valid (untuk join)
CREATE POLICY "public_view_valid_invites" ON account_invites
  FOR SELECT USING (
    expires_at > NOW() AND 
    used_count < max_uses
  );

-- Allow updating used_count for valid invites (needed when user joins)
CREATE POLICY "update_invite_usage" ON account_invites
  FOR UPDATE USING (
    expires_at > NOW() AND used_count < max_uses
  )
  WITH CHECK (
    used_count <= max_uses
  );

-- =====================================================
-- RLS for active_account
-- =====================================================

-- User dapat melihat active account mereka sendiri
CREATE POLICY "view_own_active_account" ON active_account
  FOR SELECT USING (auth.uid() = user_id);

-- User dapat insert active account mereka sendiri
CREATE POLICY "insert_own_active_account" ON active_account
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User dapat update active account mereka sendiri
CREATE POLICY "update_own_active_account" ON active_account
  FOR UPDATE USING (auth.uid() = user_id);

-- User dapat delete active account mereka sendiri
CREATE POLICY "delete_own_active_account" ON active_account
  FOR DELETE USING (auth.uid() = user_id);

-- =====================================================
-- RLS for audit_logs
-- =====================================================

-- User dapat melihat audit logs mereka sendiri (sebagai actor)
CREATE POLICY "view_own_audit_logs" ON audit_logs
  FOR SELECT USING (auth.uid() = actor_id);

-- Insert hanya via service role atau trigger
CREATE POLICY "insert_audit_logs_service" ON audit_logs
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- =====================================================
-- 7. HELPER FUNCTIONS
-- =====================================================

-- Function untuk check apakah user memiliki akses ke akun owner
CREATE OR REPLACE FUNCTION has_account_access(owner_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  -- User adalah owner
  IF auth.uid() = owner_id THEN
    RETURN TRUE;
  END IF;
  
  -- User adalah active member
  RETURN EXISTS (
    SELECT 1 FROM account_members
    WHERE member_id = auth.uid()
    AND account_members.owner_id = has_account_access.owner_id
    AND status = 'active'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function untuk mendapatkan role user untuk akun tertentu
CREATE OR REPLACE FUNCTION get_user_role(target_owner_id UUID)
RETURNS TEXT AS $$
DECLARE
  user_role TEXT;
BEGIN
  -- Jika user adalah owner
  IF auth.uid() = target_owner_id THEN
    RETURN 'owner';
  END IF;
  
  -- Get role from account_members
  SELECT role INTO user_role
  FROM account_members
  WHERE member_id = auth.uid()
    AND owner_id = target_owner_id
    AND status = 'active';
  
  RETURN COALESCE(user_role, 'none');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function untuk mendapatkan active owner ID
CREATE OR REPLACE FUNCTION get_active_owner_id()
RETURNS UUID AS $$
DECLARE
  active_owner UUID;
BEGIN
  -- Get from active_account table
  SELECT active_owner_id INTO active_owner
  FROM active_account
  WHERE user_id = auth.uid();
  
  -- If not set, return own user ID
  RETURN COALESCE(active_owner, auth.uid());
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 8. RLS POLICIES FOR TRANSACTIONS
-- =====================================================

-- Drop existing policies jika ada
DROP POLICY IF EXISTS "Users can view their own transactions" ON transactions;
DROP POLICY IF EXISTS "Users can insert their own transactions" ON transactions;
DROP POLICY IF EXISTS "Users can update their own transactions" ON transactions;
DROP POLICY IF EXISTS "Users can delete their own transactions" ON transactions;

-- Policy: Select transactions
CREATE POLICY "select_transactions" ON transactions
  FOR SELECT USING (
    -- Owner dapat melihat semua transaksi mereka
    owner_id = auth.uid()
    OR
    -- Member dapat melihat transaksi shared/public
    (
      has_account_access(owner_id) 
      AND visibility IN ('shared', 'public')
    )
  );

-- Policy: Insert transactions
CREATE POLICY "insert_transactions" ON transactions
  FOR INSERT WITH CHECK (
    -- Owner dapat membuat transaksi
    owner_id = auth.uid()
    OR
    -- Admin/Editor dapat membuat transaksi shared
    (
      has_account_access(owner_id)
      AND EXISTS (
        SELECT 1 FROM account_members
        WHERE member_id = auth.uid()
        AND account_members.owner_id = transactions.owner_id
        AND role IN ('admin', 'editor')
        AND status = 'active'
      )
    )
  );

-- Policy: Update transactions
CREATE POLICY "update_transactions" ON transactions
  FOR UPDATE USING (
    -- Owner dapat update transaksi mereka
    owner_id = auth.uid()
    OR
    -- Creator dapat update transaksi mereka
    created_by = auth.uid()
    OR
    -- Admin dapat update transaksi shared
    (
      has_account_access(owner_id)
      AND visibility = 'shared'
      AND EXISTS (
        SELECT 1 FROM account_members
        WHERE member_id = auth.uid()
        AND account_members.owner_id = transactions.owner_id
        AND role = 'admin'
        AND status = 'active'
      )
    )
  );

-- Policy: Delete transactions
CREATE POLICY "delete_transactions" ON transactions
  FOR DELETE USING (
    -- Owner dapat delete transaksi mereka
    owner_id = auth.uid()
    OR
    -- Admin dapat delete transaksi shared
    (
      has_account_access(owner_id)
      AND visibility = 'shared'
      AND EXISTS (
        SELECT 1 FROM account_members
        WHERE member_id = auth.uid()
        AND account_members.owner_id = transactions.owner_id
        AND role = 'admin'
        AND status = 'active'
      )
    )
  );

-- =====================================================
-- 9. TRIGGERS
-- =====================================================

-- Trigger untuk updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_account_members_updated_at
  BEFORE UPDATE ON account_members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_active_account_updated_at
  BEFORE UPDATE ON active_account
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger untuk auto-set owner_id pada insert transaction
CREATE OR REPLACE FUNCTION set_transaction_owner_id()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner_id IS NULL THEN
    NEW.owner_id = get_active_owner_id();
  END IF;
  
  IF NEW.created_by IS NULL THEN
    NEW.created_by = auth.uid();
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_set_transaction_owner_id
  BEFORE INSERT ON transactions
  FOR EACH ROW
  EXECUTE FUNCTION set_transaction_owner_id();

-- =====================================================
-- 10. INITIALIZE ACTIVE ACCOUNT FOR EXISTING USERS
-- =====================================================

-- Insert active_account untuk semua user yang belum punya
INSERT INTO active_account (user_id, active_owner_id)
SELECT id, id FROM profiles
WHERE id NOT IN (SELECT user_id FROM active_account)
ON CONFLICT (user_id) DO NOTHING;

-- =====================================================
-- 11. GRANT PERMISSIONS
-- =====================================================

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION has_account_access(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_role(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION get_active_owner_id() TO authenticated;

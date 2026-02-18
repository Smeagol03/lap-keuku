-- Migration: Add RAB Item Templates Table
-- Purpose: Allow users to create reusable item templates for RAB

-- Create rab_item_templates table for independent item templates
CREATE TABLE IF NOT EXISTS rab_item_templates (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  category_id     UUID REFERENCES categories(id) ON DELETE SET NULL,
  name            TEXT NOT NULL,
  unit            TEXT NOT NULL,
  default_price   NUMERIC(15, 2) DEFAULT 0,
  description     TEXT,
  is_active       BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Add template_id column to rab_items (optional reference to template)
ALTER TABLE rab_items 
ADD COLUMN IF NOT EXISTS template_id UUID REFERENCES rab_item_templates(id) ON DELETE SET NULL;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rab_item_templates_user_id ON rab_item_templates(user_id);
CREATE INDEX IF NOT EXISTS idx_rab_item_templates_category_id ON rab_item_templates(category_id);
CREATE INDEX IF NOT EXISTS idx_rab_item_templates_is_active ON rab_item_templates(is_active);
CREATE INDEX IF NOT EXISTS idx_rab_items_template_id ON rab_items(template_id);

-- Add comments for documentation
COMMENT ON TABLE rab_item_templates IS 'Template/katalog item RAB yang dapat digunakan kembali di berbagai proyek RAB';
COMMENT ON COLUMN rab_item_templates.user_id IS 'ID user/pemilik template (dari active_owner_id)';
COMMENT ON COLUMN rab_item_templates.category_id IS 'Kategori item (optional, linked to categories table)';
COMMENT ON COLUMN rab_item_templates.name IS 'Nama item template';
COMMENT ON COLUMN rab_item_templates.unit IS 'Satuan default (contoh: pcs, m2, ls, kg)';
COMMENT ON COLUMN rab_item_templates.default_price IS 'Harga default per unit';
COMMENT ON COLUMN rab_item_templates.description IS 'Deskripsi tambahan tentang item';
COMMENT ON COLUMN rab_item_templates.is_active IS 'Status aktif/tidak aktif template';
COMMENT ON COLUMN rab_items.template_id IS 'Referensi ke template asal (jika item dibuat dari template)';

-- Enable Row Level Security (RLS)
ALTER TABLE rab_item_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies for rab_item_templates
-- Users can only view their own templates
CREATE POLICY "Users can view own templates"
  ON rab_item_templates
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM active_account
      WHERE active_account.user_id = auth.uid()
      AND active_account.active_owner_id = rab_item_templates.user_id
    )
    OR
    user_id = auth.uid()
  );

-- Users can insert their own templates
CREATE POLICY "Users can insert own templates"
  ON rab_item_templates
  FOR INSERT
  WITH CHECK (
    user_id = (
      SELECT COALESCE(active_account.active_owner_id, auth.uid())
      FROM active_account
      WHERE active_account.user_id = auth.uid()
      LIMIT 1
    )
  );

-- Users can update their own templates
CREATE POLICY "Users can update own templates"
  ON rab_item_templates
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM active_account
      WHERE active_account.user_id = auth.uid()
      AND active_account.active_owner_id = rab_item_templates.user_id
    )
    OR
    user_id = auth.uid()
  );

-- Users can delete their own templates
CREATE POLICY "Users can delete own templates"
  ON rab_item_templates
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM active_account
      WHERE active_account.user_id = auth.uid()
      AND active_account.active_owner_id = rab_item_templates.user_id
    )
    OR
    user_id = auth.uid()
  );

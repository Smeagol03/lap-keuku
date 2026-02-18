import { supabase } from '@/lib/supabase';
import type {
  RABItemTemplate,
  RABItemTemplateFormData,
  RABItemTemplateFilters,
} from '@/types/rab';

/**
 * Helper to get the active owner ID for data filtering
 */
async function getActiveOwnerId(): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data: activeAccount } = await supabase
    .from('active_account')
    .select('active_owner_id')
    .eq('user_id', user.id)
    .single();

  return activeAccount?.active_owner_id || user.id;
}

/**
 * Mengambil daftar template item berdasarkan active_owner_id
 */
export async function getRABItemTemplates(
  filters?: RABItemTemplateFilters
): Promise<RABItemTemplate[]> {
  const activeOwnerId = await getActiveOwnerId();

  let query = supabase
    .from('rab_item_templates')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('user_id', activeOwnerId)
    .order('created_at', { ascending: false });

  if (filters?.category_id) {
    query = query.eq('category_id', filters.category_id);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }
  if (filters?.is_active !== undefined) {
    query = query.eq('is_active', filters.is_active);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as RABItemTemplate[];
}

/**
 * Mengambil template item aktif untuk dropdown (hanya yang is_active = true)
 */
export async function getActiveRABItemTemplates(): Promise<RABItemTemplate[]> {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('rab_item_templates')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('user_id', activeOwnerId)
    .eq('is_active', true)
    .order('name');

  if (error) throw error;
  return data as RABItemTemplate[];
}

/**
 * Mengambil detail template item by ID
 */
export async function getRABItemTemplateDetail(
  id: string
): Promise<RABItemTemplate | null> {
  const { data, error } = await supabase
    .from('rab_item_templates')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data as RABItemTemplate;
}

/**
 * Membuat template item baru
 */
export async function createRABItemTemplate(
  formData: RABItemTemplateFormData
): Promise<RABItemTemplate> {
  const activeOwnerId = await getActiveOwnerId();

  const { data: template, error: templateError } = await supabase
    .from('rab_item_templates')
    .insert({
      user_id: activeOwnerId,
      category_id: formData.category_id,
      name: formData.name,
      unit: formData.unit,
      default_price: formData.default_price,
      description: formData.description || null,
      is_active: true,
    })
    .select(`
      *,
      category:categories(*)
    `)
    .single();

  if (templateError) throw templateError;
  return template as RABItemTemplate;
}

/**
 * Update template item
 */
export async function updateRABItemTemplate(
  id: string,
  formData: Partial<RABItemTemplateFormData>
): Promise<RABItemTemplate> {
  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  if (formData.category_id !== undefined)
    updateData.category_id = formData.category_id;
  if (formData.name !== undefined) updateData.name = formData.name;
  if (formData.unit !== undefined) updateData.unit = formData.unit;
  if (formData.default_price !== undefined)
    updateData.default_price = formData.default_price;
  if (formData.description !== undefined)
    updateData.description = formData.description || null;

  const { data: template, error: templateError } = await supabase
    .from('rab_item_templates')
    .update(updateData)
    .eq('id', id)
    .select(`
      *,
      category:categories(*)
    `)
    .single();

  if (templateError) throw templateError;
  return template as RABItemTemplate;
}

/**
 * Toggle status aktif/non-aktif template
 */
export async function toggleRABItemTemplateStatus(
  id: string
): Promise<RABItemTemplate> {
  // Get current status first
  const current = await getRABItemTemplateDetail(id);
  if (!current) throw new Error('Template not found');

  const { data: template, error: templateError } = await supabase
    .from('rab_item_templates')
    .update({
      is_active: !current.is_active,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select(`
      *,
      category:categories(*)
    `)
    .single();

  if (templateError) throw templateError;
  return template as RABItemTemplate;
}

/**
 * Hapus template item
 */
export async function deleteRABItemTemplate(id: string): Promise<void> {
  const { error } = await supabase
    .from('rab_item_templates')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

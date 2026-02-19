import { supabase } from '@/lib/supabase';
import type { RAB, RABFormData, RABFilters } from '@/types/rab';

/**
 * Helper to get the active owner ID for data filtering
 * Mengikuti pola yang sudah ada di transactionService.ts
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
 * Mengambil daftar RAB berdasarkan active_owner_id
 */
export async function getRABList(filters?: RABFilters): Promise<RAB[]> {
  const activeOwnerId = await getActiveOwnerId();

  let query = supabase
    .from('rab')
    .select(`
      *,
      items:rab_items(
        *,
        template:rab_item_templates(*),
        category:categories(*)
      )
    `)
    .eq('user_id', activeOwnerId)
    .order('created_at', { ascending: false });

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as RAB[];
}

/**
 * Mengambil detail RAB beserta item dan ringkasan realisasi
 */
export async function getRABDetail(id: string): Promise<RAB | null> {
  const { data, error } = await supabase
    .from('rab')
    .select(`
      *,
      items:rab_items(
        *,
        template:rab_item_templates(*),
        category:categories(*)
      )
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data as RAB;
}

/**
 * Membuat header RAB dan item secara batch (transactional)
 */
export async function createRAB(formData: RABFormData): Promise<RAB> {
  const activeOwnerId = await getActiveOwnerId();

  // Calculate total budget from items
  const totalBudget = formData.items.reduce(
    (sum, item) => sum + item.quantity * item.price_per_unit,
    0
  );

  // Insert RAB header
  const { data: rab, error: rabError } = await supabase
    .from('rab')
    .insert({
      user_id: activeOwnerId,
      name: formData.name,
      description: formData.description || null,
      status: formData.status,
      total_budget: totalBudget,
    })
    .select()
    .single();

  if (rabError) throw rabError;

  // Insert RAB items
  if (formData.items.length > 0) {
    const itemsToInsert = formData.items.map((item) => ({
      rab_id: rab.id,
      template_id: item.template_id || null,
      category_id: item.category_id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      price_per_unit: item.price_per_unit,
    }));

    const { error: itemsError } = await supabase
      .from('rab_items')
      .insert(itemsToInsert);

    if (itemsError) {
      // Rollback RAB header if items fail
      await supabase.from('rab').delete().eq('id', rab.id);
      throw itemsError;
    }
  }

  return getRABDetail(rab.id) as Promise<RAB>;
}

/**
 * Update RAB dan item-itemnya
 */
export async function updateRAB(id: string, formData: Partial<RABFormData>): Promise<RAB> {
  // Calculate total budget if items provided
  const totalBudget = formData.items?.reduce(
    (sum, item) => sum + item.quantity * item.price_per_unit,
    0
  );

  // Update RAB header
  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };
  if (formData.name) updateData.name = formData.name;
  if (formData.description !== undefined) updateData.description = formData.description || null;
  if (formData.status) updateData.status = formData.status;
  if (totalBudget !== undefined) updateData.total_budget = totalBudget;

  const { error: rabError } = await supabase
    .from('rab')
    .update(updateData)
    .eq('id', id);

  if (rabError) throw rabError;

  // Update items if provided
  if (formData.items) {
    // Delete existing items
    await supabase.from('rab_items').delete().eq('rab_id', id);

    // Insert new items
    if (formData.items.length > 0) {
      const itemsToInsert = formData.items.map((item) => ({
        rab_id: id,
        template_id: item.template_id || null,
        category_id: item.category_id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        price_per_unit: item.price_per_unit,
      }));

      const { error: itemsError } = await supabase
        .from('rab_items')
        .insert(itemsToInsert);

      if (itemsError) throw itemsError;
    }
  }

  return getRABDetail(id) as Promise<RAB>;
}

/**
 * Menghapus RAB (item akan ikut terhapus via CASCADE)
 */
export async function deleteRAB(id: string): Promise<void> {
  const { error } = await supabase.from('rab').delete().eq('id', id);
  if (error) throw error;
}

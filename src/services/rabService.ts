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
 * Mempertahankan ID item yang sudah ada untuk preserve progress data
 */
export async function updateRAB(id: string, formData: Partial<RABFormData>): Promise<RAB> {
  console.log('updateRAB called with:', { id, formData });
  
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

  console.log('Updating RAB header:', updateData);

  const { error: rabError } = await supabase
    .from('rab')
    .update(updateData)
    .eq('id', id);

  if (rabError) {
    console.error('Error updating RAB header:', rabError);
    throw rabError;
  }

  // Update items if provided
  if (formData.items) {
    console.log('Processing items update...');
    
    // Get existing items to determine which to update, insert, or delete
    const { data: existingItems, error: fetchError } = await supabase
      .from('rab_items')
      .select('id')
      .eq('rab_id', id);

    if (fetchError) {
      console.error('Error fetching existing items:', fetchError);
      throw fetchError;
    }

    console.log('Existing items:', existingItems);

    const existingIds = new Set(existingItems?.map((item) => item.id) || []);
    
    // Get form item IDs (only those that have valid string IDs)
    const formIds = new Set(
      formData.items
        .filter((item) => item.id && typeof item.id === 'string')
        .map((item) => item.id as string)
    );

    console.log('Existing IDs:', [...existingIds]);
    console.log('Form IDs:', [...formIds]);

    // Items to delete (exist in DB but not in form)
    const idsToDelete = [...existingIds].filter((itemId) => !formIds.has(itemId));
    console.log('IDs to delete:', idsToDelete);
    
    if (idsToDelete.length > 0) {
      const { error: deleteError } = await supabase
        .from('rab_items')
        .delete()
        .in('id', idsToDelete);
      if (deleteError) {
        console.error('Error deleting items:', deleteError);
        throw deleteError;
      }
    }

    // Separate items into update and insert
    const itemsToUpdate = formData.items.filter((item) => item.id && typeof item.id === 'string');
    const itemsToInsert = formData.items.filter((item) => !item.id);

    console.log('Items to update:', itemsToUpdate);
    console.log('Items to insert:', itemsToInsert);

    // Update existing items
    for (const item of itemsToUpdate) {
      const updatePayload = {
        template_id: item.template_id || null,
        category_id: item.category_id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        price_per_unit: item.price_per_unit,
      };
      console.log(`Updating item ${item.id}:`, updatePayload);
      
      const { error: updateError } = await supabase
        .from('rab_items')
        .update(updatePayload)
        .eq('id', item.id);
      if (updateError) {
        console.error(`Error updating item ${item.id}:`, updateError);
        throw updateError;
      }
    }

    // Insert new items
    if (itemsToInsert.length > 0) {
      const insertData = itemsToInsert.map((item) => ({
        rab_id: id,
        template_id: item.template_id || null,
        category_id: item.category_id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        price_per_unit: item.price_per_unit,
      }));

      console.log('Inserting items:', insertData);

      const { error: insertError } = await supabase
        .from('rab_items')
        .insert(insertData);

      if (insertError) {
        console.error('Error inserting items:', insertError);
        throw insertError;
      }
    }
  }

  console.log('RAB update completed successfully');
  return getRABDetail(id) as Promise<RAB>;
}

/**
 * Menghapus RAB (item akan ikut terhapus via CASCADE)
 */
export async function deleteRAB(id: string): Promise<void> {
  const { error } = await supabase.from('rab').delete().eq('id', id);
  if (error) throw error;
}

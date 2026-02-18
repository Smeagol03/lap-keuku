import { supabase } from '@/lib/supabase';
import type { RAB, RABItem, RABFormData, RABFilters, RABAnalysis } from '@/types/rab';

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

/**
 * Menghitung perbandingan budget vs realisasi dari tabel transactions
 */
export async function getRABAnalysis(id: string): Promise<RABAnalysis | null> {
  const rab = await getRABDetail(id);
  if (!rab) return null;

  // Get all transactions linked to this RAB
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('amount, rab_item_id, category_id')
    .eq('rab_id', id)
    .eq('type', 'expense');

  if (error) throw error;

  const totalRealization = transactions?.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  ) ?? 0;

  const remainingBudget = rab.total_budget - totalRealization;
  const absorptionPercentage = rab.total_budget > 0
    ? (totalRealization / rab.total_budget) * 100
    : 0;

  // Category breakdown
  const categoryMap = new Map<string, { budgeted: number; realized: number; name: string }>();

  // Initialize with budgeted amounts from RAB items
  rab.items?.forEach((item) => {
    if (item.category_id && item.category) {
      const existing = categoryMap.get(item.category_id) || { budgeted: 0, realized: 0, name: item.category.name };
      existing.budgeted += item.total_price;
      categoryMap.set(item.category_id, existing);
    }
  });

  // Add realized amounts from transactions
  transactions?.forEach((t) => {
    if (t.category_id) {
      const existing = categoryMap.get(t.category_id) || { budgeted: 0, realized: 0, name: 'Lainnya' };
      existing.realized += Number(t.amount);
      categoryMap.set(t.category_id, existing);
    }
  });

  const categoryBreakdown = Array.from(categoryMap.entries()).map(([category_id, data]) => ({
    category_id,
    category_name: data.name,
    budgeted: data.budgeted,
    realized: data.realized,
    remaining: data.budgeted - data.realized,
  }));

  return {
    rab,
    totalRealization,
    remainingBudget,
    absorptionPercentage,
    categoryBreakdown,
  };
}

/**
 * Get RAB items for dropdown in transaction form
 */
export async function getRABItemsForTransaction(rabId: string): Promise<RABItem[]> {
  const { data, error } = await supabase
    .from('rab_items')
    .select('*, category:categories(*)')
    .eq('rab_id', rabId)
    .order('name');

  if (error) throw error;
  return data as RABItem[];
}

/**
 * Get active RAB list for dropdown (only status = 'active')
 */
export async function getActiveRABList(): Promise<RAB[]> {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('rab')
    .select('id, name, total_budget, status')
    .eq('user_id', activeOwnerId)
    .eq('status', 'active')
    .order('name');

  if (error) throw error;
  return data as RAB[];
}
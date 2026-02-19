import { supabase } from '@/lib/supabase';
import type { 
  RABProgressUpdate, 
  RABItemProgress, 
  RABProgressSummary,
  RABProgressHistory 
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
 * Update progress per item RAB
 * Menambahkan quantity yang terealisasi ke item tertentu
 */
export async function updateRABProgress(data: RABProgressUpdate): Promise<void> {
  const activeOwnerId = await getActiveOwnerId();

  // Get the RAB item to verify ownership
  const { data: item, error: itemError } = await supabase
    .from('rab_items')
    .select('rab_id, quantity, price_per_unit')
    .eq('id', data.rab_item_id)
    .single();

  if (itemError) throw itemError;

  // Verify ownership
  const { data: rab, error: rabError } = await supabase
    .from('rab')
    .select('user_id')
    .eq('id', item.rab_id)
    .single();

  if (rabError) throw rabError;
  if (rab.user_id !== activeOwnerId) {
    throw new Error('Unauthorized: You can only update progress for your own RAB');
  }

  // Insert progress record
  const { error } = await supabase
    .from('rab_progress')
    .insert({
      rab_item_id: data.rab_item_id,
      quantity_added: data.quantity_added,
      description: data.description || null,
      user_id: activeOwnerId,
    });

  if (error) throw error;
}

/**
 * Get progress per item untuk RAB tertentu
 */
export async function getRABItemProgress(rabId: string): Promise<RABItemProgress[]> {
  // Get RAB items with their budgeted quantities
  const { data: items, error } = await supabase
    .from('rab_items')
    .select(`
      id,
      name,
      quantity,
      unit,
      price_per_unit,
      category_id,
      categories(name)
    `)
    .eq('rab_id', rabId)
    .order('name');

  if (error) throw error;
  if (!items || items.length === 0) return [];

  // Get realized quantities from rab_progress table
  const itemIds = items.map(item => item.id);
  const { data: progressData, error: progressError } = await supabase
    .from('rab_progress')
    .select('rab_item_id, quantity_added, created_at')
    .in('rab_item_id', itemIds);

  if (progressError) throw progressError;

  // Calculate progress per item
  const itemProgress: RABItemProgress[] = items.map(item => {
    const progressRecords = progressData?.filter(p => p.rab_item_id === item.id) || [];
    const realizedQty = progressRecords.reduce((sum, p) => sum + Number(p.quantity_added), 0);
    const lastUpdated = progressRecords.length > 0 
      ? progressRecords.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0].created_at
      : undefined;

    const budgetedQty = Number(item.quantity);
    const pricePerUnit = Number(item.price_per_unit);
    // Handle category - could be array or object depending on query
    const categoryData = Array.isArray(item.categories) 
      ? item.categories[0] 
      : item.categories as { name: string } | null;

    return {
      item_id: item.id,
      item_name: item.name,
      category_id: item.category_id,
      category_name: categoryData?.name,
      budgeted_quantity: budgetedQty,
      realized_quantity: realizedQty,
      remaining_quantity: budgetedQty - realizedQty,
      unit: item.unit,
      price_per_unit: pricePerUnit,
      budgeted_amount: budgetedQty * pricePerUnit,
      realized_amount: realizedQty * pricePerUnit,
      absorption_percentage: budgetedQty > 0 ? (realizedQty / budgetedQty) * 100 : 0,
      last_updated: lastUpdated,
    };
  });

  return itemProgress;
}

/**
 * Get summary progress RAB
 */
export async function getRABProgressSummary(rabId: string): Promise<RABProgressSummary> {
  const { data: rab, error } = await supabase
    .from('rab')
    .select('id, name, total_budget')
    .eq('id', rabId)
    .single();

  if (error) throw error;

  const itemProgress = await getRABItemProgress(rabId);

  const totalItems = itemProgress.length;
  const completedItems = itemProgress.filter(
    item => item.absorption_percentage >= 100
  ).length;

  const totalBudgeted = itemProgress.reduce(
    (sum, item) => sum + item.budgeted_amount,
    0
  );

  const totalRealized = itemProgress.reduce(
    (sum, item) => sum + item.realized_amount,
    0
  );

  const overallProgress = totalBudgeted > 0
    ? (totalRealized / totalBudgeted) * 100
    : 0;

  return {
    rab_id: rab.id,
    rab_name: rab.name,
    total_items: totalItems,
    completed_items: completedItems,
    overall_progress_percentage: overallProgress,
    total_budgeted: totalBudgeted,
    total_realized: totalRealized,
    remaining_budget: totalBudgeted - totalRealized,
  };
}

/**
 * Get progress history untuk item tertentu
 */
export async function getProgressHistory(rabItemId: string): Promise<RABProgressHistory[]> {
  const { data, error } = await supabase
    .from('rab_progress')
    .select(`
      id,
      rab_item_id,
      quantity_added,
      description,
      user_id,
      created_at
    `)
    .eq('rab_item_id', rabItemId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as RABProgressHistory[];
}

/**
 * Delete progress record
 */
export async function deleteProgressRecord(progressId: string): Promise<void> {
  const { error } = await supabase
    .from('rab_progress')
    .delete()
    .eq('id', progressId);

  if (error) throw error;
}

/**
 * Update progress record
 */
export async function updateProgressRecord(
  progressId: string, 
  data: { quantity_added?: number; description?: string }
): Promise<void> {
  const { error } = await supabase
    .from('rab_progress')
    .update(data)
    .eq('id', progressId);

  if (error) throw error;
}

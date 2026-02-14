import { supabase } from '@/lib/supabase';
import type { Category, CategoryFormData } from '@/types';

/**
 * Helper to get the active owner ID for data filtering
 * This ensures data is filtered based on the currently active account
 */
async function getActiveOwnerId(): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data: activeAccount } = await supabase
    .from('active_account')
    .select('active_owner_id')
    .eq('user_id', user.id)
    .single();

  // If no active account set, default to user's own account
  return activeAccount?.active_owner_id || user.id;
}

export async function getCategories() {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', activeOwnerId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data as Category[];
}

export async function getCategoriesByType(type: 'income' | 'expense') {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', activeOwnerId)
    .eq('type', type)
    .order('name', { ascending: true });

  if (error) throw error;
  return data as Category[];
}

export async function createCategory(category: CategoryFormData) {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('categories')
    .insert({
      user_id: activeOwnerId,
      ...category,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Category;
}

export async function updateCategory(id: string, category: Partial<CategoryFormData>) {
  const { data, error } = await supabase
    .from('categories')
    .update(category)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Category;
}

export async function deleteCategory(id: string) {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

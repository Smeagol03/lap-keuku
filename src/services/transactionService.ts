import { supabase } from '@/lib/supabase';
import type { Transaction, TransactionFormData } from '@/types';
import { format, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

export interface TransactionFilters {
  startDate?: string;
  endDate?: string;
  type?: 'income' | 'expense';
  categoryId?: string;
}

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

export async function getTransactions(filters?: TransactionFilters) {
  const activeOwnerId = await getActiveOwnerId();

  let query = supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('user_id', activeOwnerId)
    .order('date', { ascending: false });

  if (filters?.startDate) {
    query = query.gte('date', filters.startDate);
  }
  if (filters?.endDate) {
    query = query.lte('date', filters.endDate);
  }
  if (filters?.type) {
    query = query.eq('type', filters.type);
  }
  if (filters?.categoryId) {
    query = query.eq('category_id', filters.categoryId);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data as Transaction[];
}

export async function getTransactionsPaginated(
  page: number = 1,
  pageSize: number = 10,
  filters?: TransactionFilters
) {
  const activeOwnerId = await getActiveOwnerId();
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `, { count: 'exact' })
    .eq('user_id', activeOwnerId)
    .order('date', { ascending: false })
    .range(from, to);

  if (filters?.startDate) {
    query = query.gte('date', filters.startDate);
  }
  if (filters?.endDate) {
    query = query.lte('date', filters.endDate);
  }
  if (filters?.type) {
    query = query.eq('type', filters.type);
  }
  if (filters?.categoryId) {
    query = query.eq('category_id', filters.categoryId);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return {
    transactions: data as Transaction[],
    totalCount: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / pageSize),
  };
}

export async function getTransaction(id: string) {
  const { data, error } = await supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Transaction;
}

export async function createTransaction(transaction: TransactionFormData) {
  const activeOwnerId = await getActiveOwnerId();

  const { data, error } = await supabase
    .from('transactions')
    .insert({
      user_id: activeOwnerId,
      ...transaction,
      rab_id: transaction.rab_id || null,
      rab_item_id: transaction.rab_item_id || null,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Transaction;
}

export async function updateTransaction(id: string, transaction: Partial<TransactionFormData>) {
  const { data, error } = await supabase
    .from('transactions')
    .update({
      ...transaction,
      rab_id: transaction.rab_id || null,
      rab_item_id: transaction.rab_item_id || null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Transaction;
}

export async function deleteTransaction(id: string) {
  const { error } = await supabase
    .from('transactions')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Dashboard summary
export async function getDashboardSummary() {
  const activeOwnerId = await getActiveOwnerId();
  const now = new Date();
  const monthStart = format(startOfMonth(now), 'yyyy-MM-dd');
  const monthEnd = format(endOfMonth(now), 'yyyy-MM-dd');

  // Get all transactions for current month
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('user_id', activeOwnerId)
    .gte('date', monthStart)
    .lte('date', monthEnd)
    .order('date', { ascending: false });

  if (error) throw error;

  const totalIncome = transactions
    ?.filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0) ?? 0;

  const totalExpense = transactions
    ?.filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0) ?? 0;

  const totalBalance = totalIncome - totalExpense;

  // Get recent transactions (last 5)
  const { data: recentTransactions, error: recentError } = await supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('user_id', activeOwnerId)
    .order('date', { ascending: false })
    .limit(5);

  if (recentError) throw recentError;

  return {
    totalBalance,
    totalIncome,
    totalExpense,
    recentTransactions: recentTransactions as Transaction[],
  };
}

// Get monthly data for reports
export async function getMonthlyData(year: number) {
  const activeOwnerId = await getActiveOwnerId();
  const yearStart = format(startOfYear(new Date(year, 0, 1)), 'yyyy-MM-dd');
  const yearEnd = format(endOfYear(new Date(year, 0, 1)), 'yyyy-MM-dd');

  const { data, error } = await supabase
    .from('transactions')
    .select('amount, type, date')
    .eq('user_id', activeOwnerId)
    .gte('date', yearStart)
    .lte('date', yearEnd);

  if (error) throw error;

  // Group by month
  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    income: 0,
    expense: 0,
  }));

  data?.forEach((t) => {
    const month = new Date(t.date).getMonth();
    if (t.type === 'income') {
      monthlyData[month].income += Number(t.amount);
    } else {
      monthlyData[month].expense += Number(t.amount);
    }
  });

  return monthlyData;
}

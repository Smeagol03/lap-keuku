import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  getTransactions,
  getTransactionsPaginated,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getDashboardSummary,
  getMonthlyData,
  type TransactionFilters,
} from '@/services/transactionService';
import type { Transaction, TransactionFormData } from '@/types';

export function useTransactions(filters?: TransactionFilters) {
  return useQuery({
    queryKey: ['transactions', filters],
    queryFn: () => getTransactions(filters),
  });
}

export function useTransactionsPaginated(
  page: number = 1,
  pageSize: number = 10,
  filters?: TransactionFilters
) {
  return useQuery({
    queryKey: ['transactions', 'paginated', page, pageSize, filters],
    queryFn: () => getTransactionsPaginated(page, pageSize, filters),
  });
}

export function useTransaction(id: string) {
  return useQuery({
    queryKey: ['transaction', id],
    queryFn: () => getTransaction(id),
    enabled: !!id,
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTransaction,
    onMutate: async (newTransaction) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      // Snapshot the previous value
      const previousTransactions = queryClient.getQueryData<Transaction[]>(['transactions']);

      // Optimistically update to the new value
      if (previousTransactions) {
        const optimisticTransaction: Transaction = {
          id: `temp-${Date.now()}`,
          user_id: '',
          category_id: newTransaction.category_id,
          type: newTransaction.type,
          amount: newTransaction.amount,
          description: newTransaction.description ?? null,
          date: newTransaction.date,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          category: undefined,
        };
        queryClient.setQueryData<Transaction[]>(
          ['transactions'],
          [optimisticTransaction, ...previousTransactions]
        );
      }

      return { previousTransactions };
    },
    onError: (error, _newTransaction, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousTransactions) {
        queryClient.setQueryData(['transactions'], context.previousTransactions);
      }
      toast.error('Gagal menambahkan transaksi', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Transaksi berhasil ditambahkan');
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TransactionFormData> }) =>
      updateTransaction(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      const previousTransactions = queryClient.getQueryData<Transaction[]>(['transactions']);

      if (previousTransactions) {
        queryClient.setQueryData<Transaction[]>(
          ['transactions'],
          previousTransactions.map((t) =>
            t.id === id
              ? { ...t, ...data, amount: data.amount ?? t.amount }
              : t
          )
        );
      }

      return { previousTransactions };
    },
    onError: (error, _variables, context) => {
      if (context?.previousTransactions) {
        queryClient.setQueryData(['transactions'], context.previousTransactions);
      }
      toast.error('Gagal mengupdate transaksi', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Transaksi berhasil diupdate');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTransaction,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['transactions'] });

      const previousTransactions = queryClient.getQueryData<Transaction[]>(['transactions']);

      if (previousTransactions) {
        queryClient.setQueryData<Transaction[]>(
          ['transactions'],
          previousTransactions.filter((t) => t.id !== id)
        );
      }

      return { previousTransactions };
    },
    onError: (error, _id, context) => {
      if (context?.previousTransactions) {
        queryClient.setQueryData(['transactions'], context.previousTransactions);
      }
      toast.error('Gagal menghapus transaksi', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Transaksi berhasil dihapus');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}

export function useDashboardSummary() {
  return useQuery({
    queryKey: ['dashboard', 'summary'],
    queryFn: getDashboardSummary,
  });
}

export function useMonthlyData(year: number) {
  return useQuery({
    queryKey: ['reports', 'monthly', year],
    queryFn: () => getMonthlyData(year),
  });
}

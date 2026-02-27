import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  getRABList,
  getRABDetail,
  createRAB,
  updateRAB,
  deleteRAB,
} from '@/services/rabService';
import type { RAB, RABFormData, RABFilters } from '@/types/rab';

/**
 * Hook untuk mengambil daftar RAB
 */
export function useRABs(filters?: RABFilters) {
  return useQuery({
    queryKey: ['rabs', filters],
    queryFn: () => getRABList(filters),
  });
}

/**
 * Hook untuk mengambil detail RAB
 */
export function useRAB(id: string) {
  return useQuery({
    queryKey: ['rab', id],
    queryFn: () => getRABDetail(id),
    enabled: !!id,
  });
}

/**
 * Hook untuk membuat RAB baru
 */
export function useCreateRAB() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRAB,
    onMutate: async (newRAB) => {
      await queryClient.cancelQueries({ queryKey: ['rabs'] });

      const previousRABs = queryClient.getQueryData<RAB[]>(['rabs']);

      if (previousRABs) {
        const subtotal = newRAB.items.reduce((sum, item) => sum + item.quantity * item.price_per_unit, 0);
        const taxRate = newRAB.tax_rate || 0;
        const taxAmount = (subtotal * taxRate) / 100;
        const grandTotal = subtotal + taxAmount;

        const optimisticRAB: RAB = {
          id: `temp-${Date.now()}`,
          user_id: '',
          name: newRAB.name,
          description: newRAB.description || null,
          status: newRAB.status,
          tax_rate: taxRate,
          tax_amount: taxAmount,
          total_budget: grandTotal,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          items: [],
        };
        queryClient.setQueryData<RAB[]>(['rabs'], [optimisticRAB, ...previousRABs]);
      }

      return { previousRABs };
    },
    onError: (error, _newRAB, context) => {
      if (context?.previousRABs) {
        queryClient.setQueryData(['rabs'], context.previousRABs);
      }
      toast.error('Gagal membuat RAB', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('RAB berhasil dibuat');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rabs'] });
    },
  });
}

/**
 * Hook untuk update RAB
 */
export function useUpdateRAB() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<RABFormData> }) =>
      updateRAB(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ['rabs'] });
      await queryClient.cancelQueries({ queryKey: ['rab', id] });

      const previousRABs = queryClient.getQueryData<RAB[]>(['rabs']);
      const previousRAB = queryClient.getQueryData<RAB>(['rab', id]);

      if (previousRABs) {
        queryClient.setQueryData<RAB[]>(
          ['rabs'],
          previousRABs.map((rab) =>
            rab.id === id
              ? { ...rab, name: data.name ?? rab.name, description: data.description ?? rab.description, status: data.status ?? rab.status, updated_at: new Date().toISOString() }
              : rab
          )
        );
      }

      return { previousRABs, previousRAB };
    },
    onError: (error, { id }, context) => {
      if (context?.previousRABs) {
        queryClient.setQueryData(['rabs'], context.previousRABs);
      }
      if (context?.previousRAB) {
        queryClient.setQueryData(['rab', id], context.previousRAB);
      }
      toast.error('Gagal mengupdate RAB', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: (data) => {
      toast.success('RAB berhasil diupdate');
      // Update the detail cache with new data
      queryClient.setQueryData(['rab', data.id], data);
    },
    onSettled: (_, __, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['rabs'] });
      queryClient.invalidateQueries({ queryKey: ['rab', id] });
    },
  });
}

/**
 * Hook untuk menghapus RAB
 */
export function useDeleteRAB() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRAB,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['rabs'] });

      const previousRABs = queryClient.getQueryData<RAB[]>(['rabs']);

      if (previousRABs) {
        queryClient.setQueryData<RAB[]>(
          ['rabs'],
          previousRABs.filter((rab) => rab.id !== id)
        );
      }

      return { previousRABs };
    },
    onError: (error, _id, context) => {
      if (context?.previousRABs) {
        queryClient.setQueryData(['rabs'], context.previousRABs);
      }
      toast.error('Gagal menghapus RAB', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('RAB berhasil dihapus');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rabs'] });
    },
  });
}

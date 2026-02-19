import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  updateRABProgress,
  getRABItemProgress,
  getRABProgressSummary,
  getProgressHistory,
  deleteProgressRecord,
  updateProgressRecord,
} from '@/services/rabProgressService';

/**
 * Hook untuk mengambil progress per item RAB
 */
export function useRABItemProgress(rabId: string) {
  return useQuery({
    queryKey: ['rab', 'progress', rabId],
    queryFn: () => getRABItemProgress(rabId),
    enabled: !!rabId,
  });
}

/**
 * Hook untuk mengambil summary progress RAB
 */
export function useRABProgressSummary(rabId: string) {
  return useQuery({
    queryKey: ['rab', 'progress-summary', rabId],
    queryFn: () => getRABProgressSummary(rabId),
    enabled: !!rabId,
  });
}

/**
 * Hook untuk update progress RAB
 */
export function useUpdateRABProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRABProgress,
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress-summary'] });
      toast.success('Progress berhasil diupdate');
    },
    onError: (error) => {
      toast.error('Gagal mengupdate progress', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
  });
}

/**
 * Hook untuk mengambil history progress item
 */
export function useProgressHistory(rabItemId: string) {
  return useQuery({
    queryKey: ['rab', 'progress-history', rabItemId],
    queryFn: () => getProgressHistory(rabItemId),
    enabled: !!rabItemId,
  });
}

/**
 * Hook untuk menghapus progress record
 */
export function useDeleteProgressRecord() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProgressRecord,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress-summary'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress-history'] });
      toast.success('Record berhasil dihapus');
    },
    onError: (error) => {
      toast.error('Gagal menghapus record', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
  });
}

/**
 * Hook untuk update progress record
 */
export function useUpdateProgressRecord() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { quantity_added?: number; description?: string } }) =>
      updateProgressRecord(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress-summary'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress-history'] });
      toast.success('Record berhasil diupdate');
    },
    onError: (error) => {
      toast.error('Gagal mengupdate record', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
  });
}

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  getRABItemTemplates,
  getActiveRABItemTemplates,
  getRABItemTemplateDetail,
  createRABItemTemplate,
  updateRABItemTemplate,
  toggleRABItemTemplateStatus,
  deleteRABItemTemplate,
} from '@/services/rabItemTemplateService';
import type { RABItemTemplate, RABItemTemplateFormData, RABItemTemplateFilters } from '@/types/rab';

/**
 * Hook untuk mengambil daftar template item RAB
 */
export function useRABItemTemplates(filters?: RABItemTemplateFilters) {
  return useQuery({
    queryKey: ['rab-item-templates', filters],
    queryFn: () => getRABItemTemplates(filters),
  });
}

/**
 * Hook untuk mengambil template item aktif (untuk dropdown)
 */
export function useActiveRABItemTemplates() {
  return useQuery({
    queryKey: ['rab-item-templates-active'],
    queryFn: () => getActiveRABItemTemplates(),
  });
}

/**
 * Hook untuk mengambil detail template item by ID
 */
export function useRABItemTemplateDetail(id: string) {
  return useQuery({
    queryKey: ['rab-item-template', id],
    queryFn: () => getRABItemTemplateDetail(id),
    enabled: !!id,
  });
}

/**
 * Hook untuk membuat template item baru
 */
export function useCreateRABItemTemplate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRABItemTemplate,
    onMutate: async (newTemplate) => {
      await queryClient.cancelQueries({ queryKey: ['rab-item-templates'] });

      const previousTemplates = queryClient.getQueryData<RABItemTemplate[]>([
        'rab-item-templates',
      ]);

      if (previousTemplates) {
        const optimisticTemplate: RABItemTemplate = {
          id: `temp-${Date.now()}`,
          user_id: '',
          category_id: newTemplate.category_id,
          name: newTemplate.name,
          unit: newTemplate.unit,
          default_price: newTemplate.default_price,
          description: newTemplate.description || null,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        queryClient.setQueryData<RABItemTemplate[]>(
          ['rab-item-templates'],
          [...previousTemplates, optimisticTemplate]
        );
      }

      return { previousTemplates };
    },
    onError: (error, _newTemplate, context) => {
      if (context?.previousTemplates) {
        queryClient.setQueryData(['rab-item-templates'], context.previousTemplates);
      }
      toast.error('Gagal menambahkan item template', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Item template berhasil ditambahkan');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rab-item-templates'] });
    },
  });
}

/**
 * Hook untuk update template item
 */
export function useUpdateRABItemTemplate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<RABItemTemplateFormData> }) =>
      updateRABItemTemplate(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ['rab-item-templates'] });
      await queryClient.cancelQueries({ queryKey: ['rab-item-template', id] });

      const previousTemplates = queryClient.getQueryData<RABItemTemplate[]>([
        'rab-item-templates',
      ]);
      const previousTemplate = queryClient.getQueryData<RABItemTemplate>([
        'rab-item-template',
        id,
      ]);

      if (previousTemplates) {
        queryClient.setQueryData<RABItemTemplate[]>(
          ['rab-item-templates'],
          previousTemplates.map((t) =>
            t.id === id ? { ...t, ...data, updated_at: new Date().toISOString() } : t
          )
        );
      }

      if (previousTemplate) {
        queryClient.setQueryData<RABItemTemplate>(
          ['rab-item-template', id],
          { ...previousTemplate, ...data, updated_at: new Date().toISOString() }
        );
      }

      return { previousTemplates, previousTemplate };
    },
    onError: (error, _variables, context) => {
      if (context?.previousTemplates) {
        queryClient.setQueryData(['rab-item-templates'], context.previousTemplates);
      }
      toast.error('Gagal mengupdate item template', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Item template berhasil diupdate');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rab-item-templates'] });
      queryClient.invalidateQueries({ queryKey: ['rab-item-template'] });
    },
  });
}

/**
 * Hook untuk toggle status aktif/non-aktif template
 */
export function useToggleRABItemTemplateStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleRABItemTemplateStatus,
    onSuccess: () => {
      toast.success('Status template berhasil diubah');
    },
    onError: (error) => {
      toast.error('Gagal mengubah status template', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rab-item-templates'] });
      queryClient.invalidateQueries({ queryKey: ['rab-item-template'] });
    },
  });
}

/**
 * Hook untuk hapus template item
 */
export function useDeleteRABItemTemplate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRABItemTemplate,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['rab-item-templates'] });

      const previousTemplates = queryClient.getQueryData<RABItemTemplate[]>([
        'rab-item-templates',
      ]);

      if (previousTemplates) {
        queryClient.setQueryData<RABItemTemplate[]>(
          ['rab-item-templates'],
          previousTemplates.filter((t) => t.id !== id)
        );
      }

      return { previousTemplates };
    },
    onError: (error, _id, context) => {
      if (context?.previousTemplates) {
        queryClient.setQueryData(['rab-item-templates'], context.previousTemplates);
      }
      toast.error('Gagal menghapus item template', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Item template berhasil dihapus');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['rab-item-templates'] });
      queryClient.invalidateQueries({ queryKey: ['rab-item-template'] });
    },
  });
}

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  getCategories,
  getCategoriesByType,
  createCategory,
  updateCategory,
  deleteCategory,
} from '@/services/categoryService';
import type { Category, CategoryFormData } from '@/types';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
}

export function useCategoriesByType(type: 'income' | 'expense') {
  return useQuery({
    queryKey: ['categories', type],
    queryFn: () => getCategoriesByType(type),
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onMutate: async (newCategory) => {
      await queryClient.cancelQueries({ queryKey: ['categories'] });

      const previousCategories = queryClient.getQueryData<Category[]>(['categories']);

      if (previousCategories) {
        const optimisticCategory: Category = {
          id: `temp-${Date.now()}`,
          user_id: '',
          name: newCategory.name,
          type: newCategory.type,
          icon: newCategory.icon,
          color: newCategory.color,
          is_default: false,
          created_at: new Date().toISOString(),
        };
        queryClient.setQueryData<Category[]>(
          ['categories'],
          [...previousCategories, optimisticCategory]
        );
      }

      return { previousCategories };
    },
    onError: (error, _newCategory, context) => {
      if (context?.previousCategories) {
        queryClient.setQueryData(['categories'], context.previousCategories);
      }
      toast.error('Gagal menambahkan kategori', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Kategori berhasil ditambahkan');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CategoryFormData> }) =>
      updateCategory(id, data),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ['categories'] });

      const previousCategories = queryClient.getQueryData<Category[]>(['categories']);

      if (previousCategories) {
        queryClient.setQueryData<Category[]>(
          ['categories'],
          previousCategories.map((c) =>
            c.id === id ? { ...c, ...data } : c
          )
        );
      }

      return { previousCategories };
    },
    onError: (error, _variables, context) => {
      if (context?.previousCategories) {
        queryClient.setQueryData(['categories'], context.previousCategories);
      }
      toast.error('Gagal mengupdate kategori', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Kategori berhasil diupdate');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['categories'] });

      const previousCategories = queryClient.getQueryData<Category[]>(['categories']);

      if (previousCategories) {
        queryClient.setQueryData<Category[]>(
          ['categories'],
          previousCategories.filter((c) => c.id !== id)
        );
      }

      return { previousCategories };
    },
    onError: (error, _id, context) => {
      if (context?.previousCategories) {
        queryClient.setQueryData(['categories'], context.previousCategories);
      }
      toast.error('Gagal menghapus kategori', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
    onSuccess: () => {
      toast.success('Kategori berhasil dihapus');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}

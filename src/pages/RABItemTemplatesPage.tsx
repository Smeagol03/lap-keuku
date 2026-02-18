import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Pencil, Trash2, Eye, Search, Package, EyeOff } from 'lucide-react';
import {
  useRABItemTemplates,
  useCreateRABItemTemplate,
  useUpdateRABItemTemplate,
  useDeleteRABItemTemplate,
  useToggleRABItemTemplateStatus,
} from '@/hooks/useRABItemTemplates';
import { useCategories } from '@/hooks/useCategories';
import RABItemTemplateDialog from '@/components/features/rab/RABItemTemplateDialog';
import { SkeletonList } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import { PermissionGuard } from '@/components/features/rbac/PermissionGuard';
import Seo from '@/components/Seo';
import type { RABItemTemplate } from '@/types/rab';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function RABItemTemplatesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<RABItemTemplate | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category_id: '',
    search: '',
  });

  const { data: templates, isLoading, isError } = useRABItemTemplates({
    category_id: filters.category_id || undefined,
    search: filters.search || undefined,
  });

  const { data: categories } = useCategories();
  const expenseCategories = categories?.filter((c) => c.type === 'expense') ?? [];

  const createMutation = useCreateRABItemTemplate();
  const updateMutation = useUpdateRABItemTemplate();
  const deleteMutation = useDeleteRABItemTemplate();
  const toggleStatusMutation = useToggleRABItemTemplateStatus();

  const handleCreate = () => {
    setEditingTemplate(null);
    setDialogOpen(true);
  };

  const handleEdit = (template: RABItemTemplate) => {
    setEditingTemplate(template);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting template:', error);
    }
  };

  const handleSubmit = async (data: Parameters<typeof createMutation.mutateAsync>[0]) => {
    if (editingTemplate) {
      await updateMutation.mutateAsync({ id: editingTemplate.id, data });
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const handleToggleStatus = async (id: string) => {
    await toggleStatusMutation.mutateAsync(id);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Katalog Item RAB</h1>
          <p className="text-muted-foreground">Memuat data...</p>
        </div>
        <SkeletonList />
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon="file"
        title="Gagal memuat data"
        description="Terjadi kesalahan saat memuat data katalog item. Silakan coba lagi."
      />
    );
  }

  return (
    <>
      <Seo
        title="Katalog Item RAB"
        description="Kelola katalog item template untuk rencana anggaran biaya"
      />
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Katalog Item RAB</h1>
            <p className="text-muted-foreground">
              Kelola item template yang dapat digunakan di berbagai proyek RAB
            </p>
          </div>
          <PermissionGuard permissions={['canCreate']}>
            <Button onClick={handleCreate} className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Item Template
            </Button>
          </PermissionGuard>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="search">Cari</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Cari nama item..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Kategori</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={filters.category_id}
                  onChange={(e) => handleFilterChange('category_id', e.target.value)}
                >
                  <option value="">Semua Kategori</option>
                  {expenseCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Templates List - Desktop Table */}
        <Card className="hidden md:block">
          <CardContent className="p-0">
            {templates && templates.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Item</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Satuan</TableHead>
                    <TableHead className="text-right">Harga Default</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>
                        {template.category ? (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: template.category.color }}
                            />
                            {template.category.name}
                          </div>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell>{template.unit}</TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(template.default_price)}
                      </TableCell>
                      <TableCell>
                        <Badge variant={template.is_active ? 'default' : 'secondary'}>
                          {template.is_active ? 'Aktif' : 'Non-aktif'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleToggleStatus(template.id)}
                            title={template.is_active ? 'Non-aktifkan' : 'Aktifkan'}
                          >
                            {template.is_active ? (
                              <Eye className="h-4 w-4" />
                            ) : (
                              <EyeOff className="h-4 w-4" />
                            )}
                          </Button>
                          <PermissionGuard permissions={['canEdit']}>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(template)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </PermissionGuard>
                          <PermissionGuard permissions={['canDelete']}>
                            {deleteConfirm === template.id ? (
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDelete(template.id)}
                                disabled={deleteMutation.isPending}
                              >
                                Konfirmasi
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setDeleteConfirm(template.id)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            )}
                          </PermissionGuard>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="p-8 text-center">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Belum ada item template</h3>
                <p className="text-muted-foreground">
                  Buat item template untuk digunakan di berbagai proyek RAB
                </p>
                <PermissionGuard permissions={['canCreate']}>
                  <Button onClick={handleCreate} className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah Item Template
                  </Button>
                </PermissionGuard>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Templates List - Mobile Cards */}
        <div className="md:hidden space-y-4">
          {templates && templates.length > 0 ? (
            templates.map((template) => (
              <Card key={template.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {template.category?.name || 'Tidak ada kategori'} • {template.unit}
                      </p>
                    </div>
                    <Badge variant={template.is_active ? 'default' : 'secondary'}>
                      {template.is_active ? 'Aktif' : 'Non-aktif'}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">Harga Default</span>
                    <span className="font-bold">{formatCurrency(template.default_price)}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleToggleStatus(template.id)}
                    >
                      {template.is_active ? 'Non-aktifkan' : 'Aktifkan'}
                    </Button>
                    <PermissionGuard permissions={['canEdit']}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(template)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </PermissionGuard>
                    <PermissionGuard permissions={['canDelete']}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDeleteConfirm(template.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </PermissionGuard>
                  </div>

                  {/* Delete Confirmation */}
                  {deleteConfirm === template.id && (
                    <div className="mt-3 p-3 bg-destructive/10 rounded-lg">
                      <p className="text-sm mb-2">Yakin ingin menghapus item template ini?</p>
                      <div className="flex gap-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(template.id)}
                          disabled={deleteMutation.isPending}
                        >
                          Hapus
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDeleteConfirm(null)}
                        >
                          Batal
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Belum ada item template</h3>
                <p className="text-muted-foreground">
                  Buat item template untuk digunakan di berbagai proyek RAB
                </p>
                <PermissionGuard permissions={['canCreate']}>
                  <Button onClick={handleCreate} className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah Item Template
                  </Button>
                </PermissionGuard>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Form Dialog */}
        <RABItemTemplateDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          template={editingTemplate}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

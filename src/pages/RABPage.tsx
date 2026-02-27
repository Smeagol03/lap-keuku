import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  Search,
  FileText,
  Package,
} from "lucide-react";
import {
  useRABs,
  useCreateRAB,
  useUpdateRAB,
  useDeleteRAB,
} from "@/hooks/useRABs";
import { useDebounce } from "@/hooks/useDebounce";
import RABFormDialog from "@/components/features/rab/RABFormDialog";
import { SkeletonList } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { PermissionGuard } from "@/components/features/rbac/PermissionGuard";
import Seo from "@/components/Seo";
import type { RAB, RABFormData, RABStatus } from "@/types/rab";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const statusColors: Record<RABStatus, string> = {
  draft: "bg-gray-500",
  active: "bg-green-500",
  completed: "bg-blue-500",
  cancelled: "bg-red-500",
};

const statusLabels: Record<RABStatus, string> = {
  draft: "Draft",
  active: "Aktif",
  completed: "Selesai",
  cancelled: "Dibatalkan",
};

export default function RABPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingRAB, setEditingRAB] = useState<RAB | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    status: "",
    search: "",
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  const {
    data: rabs,
    isLoading,
    isError,
  } = useRABs({
    status: filters.status as RABStatus | undefined,
    search: debouncedSearch || undefined,
  });

  const createMutation = useCreateRAB();
  const updateMutation = useUpdateRAB();
  const deleteMutation = useDeleteRAB();

  const handleCreate = () => {
    setEditingRAB(null);
    setDialogOpen(true);
  };

  const handleEdit = (rab: RAB) => {
    setEditingRAB(rab);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      setDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting RAB:", error);
    }
  };

  const handleSubmit = async (formData: RABFormData) => {
    if (editingRAB) {
      await updateMutation.mutateAsync({ id: editingRAB.id, data: formData });
    } else {
      await createMutation.mutateAsync(formData);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">RAB</h1>
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
        description="Terjadi kesalahan saat memuat data RAB. Silakan coba lagi."
      />
    );
  }

  return (
    <>
      <Seo
        title="RAB - Rencana Anggaran Biaya"
        description="Kelola rencana anggaran biaya proyek Anda dengan rincian item yang detail dan katalog item template."
      />
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">RAB</h1>
            <p className="text-muted-foreground">
              Rencana Anggaran Biaya - Kelola anggaran proyek Anda
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link to="/rab/templates">
              <Button variant="outline" className="w-full sm:w-auto">
                <Package className="mr-2 h-4 w-4" />
                Katalog Item
              </Button>
            </Link>
            <PermissionGuard permissions={["canCreate"]}>
              <Button onClick={handleCreate} className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Tambah RAB
              </Button>
            </PermissionGuard>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-2">
                <Label htmlFor="search">Cari</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Cari nama proyek..."
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange("search", e.target.value)
                    }
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option value="">Semua</option>
                  <option value="draft">Draft</option>
                  <option value="active">Aktif</option>
                  <option value="completed">Selesai</option>
                  <option value="cancelled">Dibatalkan</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RAB List - Desktop Table */}
        <Card className="hidden md:block">
          <CardContent className="p-0">
            {rabs && rabs.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Proyek</TableHead>
                    <TableHead>Deskripsi</TableHead>
                    <TableHead className="text-right">Total Budget</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rabs.map((rab) => (
                    <TableRow key={rab.id}>
                      <TableCell className="font-medium">{rab.name}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {rab.description || "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(rab.total_budget)}
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[rab.status]}>
                          {statusLabels[rab.status]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {format(new Date(rab.created_at), "dd MMM yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link to={`/rab/${rab.id}`}>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <PermissionGuard permissions={["canEdit"]}>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(rab)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </PermissionGuard>
                          <PermissionGuard permissions={["canDelete"]}>
                            {deleteConfirm === rab.id ? (
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDelete(rab.id)}
                                disabled={deleteMutation.isPending}
                              >
                                Konfirmasi
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setDeleteConfirm(rab.id)}
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
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Belum ada RAB</h3>
                <p className="text-muted-foreground">
                  Mulai buat rencana anggaran biaya untuk proyek Anda
                </p>
                <PermissionGuard permissions={["canCreate"]}>
                  <Button onClick={handleCreate} className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah RAB
                  </Button>
                </PermissionGuard>
              </div>
            )}
          </CardContent>
        </Card>

        {/* RAB List - Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rabs && rabs.length > 0 ? (
            rabs.map((rab) => (
              <Card key={rab.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{rab.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {rab.description || "Tidak ada deskripsi"}
                      </p>
                    </div>
                    <Badge className={statusColors[rab.status]}>
                      {statusLabels[rab.status]}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Total Budget
                    </span>
                    <span className="font-bold">
                      {formatCurrency(rab.total_budget)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      Dibuat
                    </span>
                    <span className="text-sm">
                      {format(new Date(rab.created_at), "dd MMM yyyy")}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/rab/${rab.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        Detail
                      </Button>
                    </Link>
                    <PermissionGuard permissions={["canEdit"]}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(rab)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </PermissionGuard>
                    <PermissionGuard permissions={["canDelete"]}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDeleteConfirm(rab.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </PermissionGuard>
                  </div>

                  {/* Delete Confirmation */}
                  {deleteConfirm === rab.id && (
                    <div className="mt-3 p-3 bg-destructive/10 rounded-lg">
                      <p className="text-sm mb-2">
                        Yakin ingin menghapus RAB ini?
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(rab.id)}
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
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Belum ada RAB</h3>
                <p className="text-muted-foreground">
                  Mulai buat rencana anggaran biaya untuk proyek Anda
                </p>
                <PermissionGuard permissions={["canCreate"]}>
                  <Button onClick={handleCreate} className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah RAB
                  </Button>
                </PermissionGuard>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Form Dialog */}
        <RABFormDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          rab={editingRAB}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Printer,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { useRAB, useRABAnalysis, useDeleteRAB, useUpdateRAB } from '@/hooks/useRABs';
import RABFormDialog from '@/components/features/rab/RABFormDialog';
import { SkeletonCard } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import { PermissionGuard } from '@/components/features/rbac/PermissionGuard';
import Seo from '@/components/Seo';
import type { RABFormData, RABStatus } from '@/types';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const statusColors: Record<RABStatus, string> = {
  draft: 'bg-gray-500',
  active: 'bg-green-500',
  completed: 'bg-blue-500',
  cancelled: 'bg-red-500',
};

const statusLabels: Record<RABStatus, string> = {
  draft: 'Draft',
  active: 'Aktif',
  completed: 'Selesai',
  cancelled: 'Dibatalkan',
};

export default function RABDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const { data: rab, isLoading: rabLoading, isError: rabError } = useRAB(id!);
  const { data: analysis, isLoading: analysisLoading } = useRABAnalysis(id!);
  const deleteMutation = useDeleteRAB();
  const updateMutation = useUpdateRAB();

  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteMutation.mutateAsync(id);
      navigate('/rab');
    } catch (error) {
      console.error('Error deleting RAB:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const isLoading = rabLoading || analysisLoading;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (rabError || !rab) {
    return (
      <EmptyState
        icon="file"
        title="RAB tidak ditemukan"
        description="RAB yang Anda cari tidak ditemukan atau sudah dihapus."
      />
    );
  }

  const totalBudget = rab.total_budget;
  const totalRealization = analysis?.totalRealization ?? 0;
  const remainingBudget = analysis?.remainingBudget ?? totalBudget;
  const absorptionPercentage = analysis?.absorptionPercentage ?? 0;

  // Determine status color for progress bar
  const getProgressColor = () => {
    if (absorptionPercentage > 100) return 'bg-red-500';
    if (absorptionPercentage > 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <>
      <Seo
        title={`${rab.name} - Detail RAB`}
        description={`Detail rencana anggaran biaya untuk proyek ${rab.name}`}
      />
      <div className="space-y-6 no-print">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/rab')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {rab.name}
                </h1>
                <Badge className={statusColors[rab.status]}>
                  {statusLabels[rab.status]}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {rab.description || 'Tidak ada deskripsi'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Cetak
            </Button>
            <PermissionGuard permissions={['canEdit']}>
              <Button variant="outline" onClick={() => setDialogOpen(true)}>
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </PermissionGuard>
            <PermissionGuard permissions={['canDelete']}>
              {deleteConfirm ? (
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={deleteMutation.isPending}
                >
                  Konfirmasi Hapus
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setDeleteConfirm(true)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </PermissionGuard>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Anggaran</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">
                {formatCurrency(totalBudget)}
              </div>
              <p className="text-xs text-muted-foreground">
                {rab.items?.length || 0} item anggaran
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Realisasi</CardTitle>
              {absorptionPercentage > 100 ? (
                <TrendingUp className="h-4 w-4 text-red-500" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
            </CardHeader>
            <CardContent>
              <div
                className={`text-xl sm:text-2xl font-bold ${
                  absorptionPercentage > 100 ? 'text-red-500' : ''
                }`}
              >
                {formatCurrency(totalRealization)}
              </div>
              <p className="text-xs text-muted-foreground">
                {absorptionPercentage.toFixed(1)}% terserap
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sisa Anggaran</CardTitle>
              {remainingBudget < 0 ? (
                <TrendingDown className="h-4 w-4 text-red-500" />
              ) : (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
            </CardHeader>
            <CardContent>
              <div
                className={`text-xl sm:text-2xl font-bold ${
                  remainingBudget < 0 ? 'text-red-500' : ''
                }`}
              >
                {formatCurrency(remainingBudget)}
              </div>
              <p className="text-xs text-muted-foreground">
                {remainingBudget < 0 ? 'Over budget!' : 'Tersisa'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Penyerapan Anggaran</span>
                <span className="font-medium">{absorptionPercentage.toFixed(1)}%</span>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${getProgressColor()} transition-all duration-500`}
                  style={{ width: `${Math.min(absorptionPercentage, 100)}%` }}
                />
              </div>
              {absorptionPercentage > 100 && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Realisasi melebihi anggaran sebesar {formatCurrency(Math.abs(remainingBudget))}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tabs: Items & Analysis */}
        <Tabs defaultValue="items" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="items">Rincian Item</TabsTrigger>
            <TabsTrigger value="analysis">Analisis Kategori</TabsTrigger>
          </TabsList>

          {/* Items Tab */}
          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>Rincian Item Anggaran</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">No</TableHead>
                        <TableHead>Nama Item</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead className="text-right">Qty</TableHead>
                        <TableHead>Satuan</TableHead>
                        <TableHead className="text-right">Harga/Unit</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rab.items?.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>
                            {item.category ? (
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: item.category.color }}
                                />
                                {item.category.name}
                              </div>
                            ) : (
                              '-'
                            )}
                          </TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell>{item.unit}</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(item.price_per_unit)}
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {formatCurrency(item.total_price)}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-muted/50">
                        <TableCell colSpan={6} className="font-bold text-right">
                          Total
                        </TableCell>
                        <TableCell className="text-right font-bold">
                          {formatCurrency(totalBudget)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y">
                  {rab.items?.map((item, index) => (
                    <div key={item.id} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-xs text-muted-foreground">#{index + 1}</span>
                          <h4 className="font-medium">{item.name}</h4>
                        </div>
                        <span className="font-bold">{formatCurrency(item.total_price)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>
                          <span>Kategori: </span>
                          {item.category ? item.category.name : '-'}
                        </div>
                        <div className="text-right">
                          {item.quantity} {item.unit} × {formatCurrency(item.price_per_unit)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 bg-muted/50 flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(totalBudget)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Analisis per Kategori</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {analysis?.categoryBreakdown && analysis.categoryBreakdown.length > 0 ? (
                  <>
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Kategori</TableHead>
                            <TableHead className="text-right">Anggaran</TableHead>
                            <TableHead className="text-right">Realisasi</TableHead>
                            <TableHead className="text-right">Selisih</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {analysis.categoryBreakdown.map((cat) => (
                            <TableRow key={cat.category_id}>
                              <TableCell className="font-medium">
                                {cat.category_name}
                              </TableCell>
                              <TableCell className="text-right">
                                {formatCurrency(cat.budgeted)}
                              </TableCell>
                              <TableCell className="text-right">
                                {formatCurrency(cat.realized)}
                              </TableCell>
                              <TableCell
                                className={`text-right font-medium ${
                                  cat.remaining < 0 ? 'text-red-500' : 'text-green-600'
                                }`}
                              >
                                {cat.remaining >= 0 ? '+' : ''}
                                {formatCurrency(cat.remaining)}
                              </TableCell>
                              <TableCell className="text-right">
                                {cat.remaining < 0 ? (
                                  <Badge variant="destructive">Over Budget</Badge>
                                ) : cat.remaining === 0 ? (
                                  <Badge variant="secondary">Pas</Badge>
                                ) : (
                                  <Badge variant="default" className="bg-green-500">
                                    Under Budget
                                  </Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y">
                      {analysis.categoryBreakdown.map((cat) => (
                        <div key={cat.category_id} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">{cat.category_name}</h4>
                            {cat.remaining < 0 ? (
                              <Badge variant="destructive">Over Budget</Badge>
                            ) : (
                              <Badge variant="default" className="bg-green-500">
                                Under Budget
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">Anggaran</p>
                              <p className="font-medium">{formatCurrency(cat.budgeted)}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Realisasi</p>
                              <p className="font-medium">{formatCurrency(cat.realized)}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Selisih</p>
                              <p
                                className={`font-medium ${
                                  cat.remaining < 0 ? 'text-red-500' : 'text-green-600'
                                }`}
                              >
                                {cat.remaining >= 0 ? '+' : ''}
                                {formatCurrency(cat.remaining)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>Belum ada data realisasi untuk dianalisis.</p>
                    <p className="text-sm mt-1">
                      Hubungkan transaksi pengeluaran ke RAB ini untuk melihat analisis.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Print Layout */}
      <div className="print-only print-container">
        <style>
          {`
            @media print {
              .no-print { display: none !important; }
              .print-only { display: block !important; }
              .print-container {
                width: 100%;
                max-width: 210mm;
                margin: 0 auto;
                padding: 10mm;
              }
            }
            @media screen {
              .print-only { display: none !important; }
            }
          `}
        </style>
        <div className="print-header">
          <h1 className="text-2xl font-bold">{rab.name}</h1>
          <p className="text-muted-foreground">{rab.description}</p>
          <p className="text-sm">Status: {statusLabels[rab.status]} | Tanggal Cetak: {format(new Date(), 'dd MMMM yyyy')}</p>
        </div>

        <div className="print-summary mt-6">
          <h2 className="text-lg font-bold mb-2">Ringkasan Anggaran</h2>
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Total Anggaran</td>
                <td className="border border-gray-300 p-2 text-right">{formatCurrency(totalBudget)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Total Realisasi</td>
                <td className="border border-gray-300 p-2 text-right">{formatCurrency(totalRealization)}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">Sisa Anggaran</td>
                <td className="border border-gray-300 p-2 text-right font-bold">{formatCurrency(remainingBudget)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="print-items mt-6">
          <h2 className="text-lg font-bold mb-2">Rincian Item</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">No</th>
                <th className="border border-gray-300 p-2 text-left">Item</th>
                <th className="border border-gray-300 p-2 text-right">Qty</th>
                <th className="border border-gray-300 p-2 text-left">Satuan</th>
                <th className="border border-gray-300 p-2 text-right">Harga/Unit</th>
                <th className="border border-gray-300 p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {rab.items?.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2 text-right">{item.quantity}</td>
                  <td className="border border-gray-300 p-2">{item.unit}</td>
                  <td className="border border-gray-300 p-2 text-right">{formatCurrency(item.price_per_unit)}</td>
                  <td className="border border-gray-300 p-2 text-right">{formatCurrency(item.total_price)}</td>
                </tr>
              ))}
              <tr className="bg-gray-100">
                <td colSpan={5} className="border border-gray-300 p-2 text-right font-bold">Total</td>
                <td className="border border-gray-300 p-2 text-right font-bold">{formatCurrency(totalBudget)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="print-footer mt-8 pt-4 border-t">
          <div className="flex justify-between">
            <div className="text-center">
              <p className="mb-8">Dibuat oleh,</p>
              <p>_________________</p>
            </div>
            <div className="text-center">
              <p className="mb-8">Mengetahui,</p>
              <p>_________________</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <RABFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        rab={rab}
        onSubmit={async (formData: RABFormData) => {
          await updateMutation.mutateAsync({ id: rab.id, data: formData });
          setDialogOpen(false);
        }}
      />
    </>
  );
}
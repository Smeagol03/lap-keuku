import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight, Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import { useDashboardSummary } from '@/hooks/useTransactions';
import { Link } from 'react-router-dom';
import { SkeletonCard } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function DashboardPage() {
  const { data: summary, isLoading, isError } = useDashboardSummary();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Memuat data...
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon="file"
        title="Gagal memuat data"
        description="Terjadi kesalahan saat memuat ringkasan keuangan. Silakan coba lagi."
      />
    );
  }

  const totalBalance = summary?.totalBalance ?? 0;
  const totalIncome = summary?.totalIncome ?? 0;
  const totalExpense = summary?.totalExpense ?? 0;
  const recentTransactions = summary?.recentTransactions ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Ringkasan keuangan Anda - {format(new Date(), 'MMMM yyyy')}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Saldo</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-xl sm:text-2xl font-bold ${totalBalance >= 0 ? '' : 'text-red-500'}`}>
              {formatCurrency(totalBalance)}
            </div>
            <p className="text-xs text-muted-foreground">
              Saldo bersih bulan ini
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pemasukan</CardTitle>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-green-500">
              +{formatCurrency(totalIncome)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total pemasukan bulan ini
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pengeluaran</CardTitle>
            <div className="flex items-center gap-1">
              <TrendingDown className="h-4 w-4 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold text-red-500">
              -{formatCurrency(totalExpense)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total pengeluaran bulan ini
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ringkasan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownLeft className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Pemasukan</span>
                </div>
                <span className="font-medium text-green-500">
                  +{formatCurrency(totalIncome)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Pengeluaran</span>
                </div>
                <span className="font-medium text-red-500">
                  -{formatCurrency(totalExpense)}
                </span>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Saldo Bersih</span>
                <span className={`font-bold ${totalBalance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {formatCurrency(totalBalance)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tips Keuangan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              {totalExpense > totalIncome ? (
                <p className="text-red-500">
                  ⚠️ Pengeluaran Anda lebih besar dari pemasukan bulan ini. Pertimbangkan untuk mengurangi pengeluaran.
                </p>
              ) : totalBalance > 0 ? (
                <p className="text-green-600">
                  ✨ Bagus! Anda berhasil menabung {formatCurrency(totalBalance)} bulan ini.
                </p>
              ) : (
                <p>
                  💡 Mulai catat transaksi Anda untuk melihat ringkasan keuangan.
                </p>
              )}
              <p>
                📊 Gunakan halaman Laporan untuk melihat analisis keuangan lebih detail.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transaksi Terbaru</CardTitle>
          <Link
            to="/transactions"
            className="text-sm text-primary hover:underline"
          >
            Lihat Semua
          </Link>
        </CardHeader>
        <CardContent>
          {recentTransactions.length === 0 ? (
            <EmptyState
              icon="inbox"
              title="Belum ada transaksi"
              description="Mulai catat keuangan Anda dengan menambahkan transaksi pertama."
              action={{
                label: 'Tambah Transaksi',
                onClick: () => window.location.href = '/transactions',
              }}
            />
          ) : (
            <div className="space-y-2">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent transition-colors gap-2 sm:gap-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        transaction.type === 'income'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {transaction.type === 'income' ? (
                        <ArrowDownLeft className="h-5 w-5" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">
                        {transaction.category?.name ?? 'Tanpa Kategori'}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {transaction.description || '-'}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right pl-13 sm:pl-0">
                    <p
                      className={`font-semibold ${
                        transaction.type === 'income'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : '-'}
                      {formatCurrency(Number(transaction.amount))}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(transaction.date), 'dd MMM yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

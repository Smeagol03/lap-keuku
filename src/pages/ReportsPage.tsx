import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { FileSpreadsheet, FileText } from 'lucide-react';
import { useMonthlyData, useTransactions } from '@/hooks/useTransactions';
import { formatCurrency } from '@/lib/utils';
import { format } from 'date-fns';

const months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const monthsShort = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
];

export default function ReportsPage() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { data: monthlyData, isLoading } = useMonthlyData(selectedYear);
  const { data: transactions } = useTransactions();

  const chartData = monthlyData?.map((item) => ({
    name: monthsShort[item.month - 1],
    Pemasukan: item.income,
    Pengeluaran: item.expense,
    Saldo: item.income - item.expense,
  })) ?? [];

  const totalIncome = monthlyData?.reduce((sum, m) => sum + m.income, 0) ?? 0;
  const totalExpense = monthlyData?.reduce((sum, m) => sum + m.expense, 0) ?? 0;
  const averageIncome = totalIncome / 12;
  const averageExpense = totalExpense / 12;

  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  // Filter transactions for selected year
  const yearTransactions = transactions?.filter((t) => {
    const transactionYear = new Date(t.date).getFullYear();
    return transactionYear === selectedYear;
  }) ?? [];

  // Export to CSV
  const exportToCSV = () => {
    if (!yearTransactions.length) {
      alert('Tidak ada data untuk diekspor');
      return;
    }

    // CSV Header
    const headers = ['Tanggal', 'Tipe', 'Kategori', 'Jumlah', 'Keterangan'];
    
    // CSV Rows
    const rows = yearTransactions.map((t) => [
      format(new Date(t.date), 'dd/MM/yyyy'),
      t.type === 'income' ? 'Pemasukan' : 'Pengeluaran',
      t.category?.name ?? 'Tanpa Kategori',
      t.amount.toString(),
      t.description ?? '',
    ]);

    // Combine header and rows
    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `laporan-keuangan-${selectedYear}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to PDF (simple HTML to print)
  const exportToPDF = () => {
    if (!yearTransactions.length) {
      alert('Tidak ada data untuk diekspor');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Popup blocked. Please allow popups for this site.');
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Laporan Keuangan ${selectedYear}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f4f4f4; }
          .income { color: green; }
          .expense { color: red; }
          .summary { margin-bottom: 20px; }
          .summary-card { display: inline-block; padding: 10px 20px; margin-right: 10px; background: #f9f9f9; border-radius: 5px; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <h1>Laporan Keuangan ${selectedYear}</h1>
        <p>Diekspor pada: ${format(new Date(), 'dd MMMM yyyy HH:mm')}</p>
        
        <div class="summary">
          <div class="summary-card">
            <strong>Total Pemasukan:</strong><br>
            <span class="income">${formatCurrency(totalIncome)}</span>
          </div>
          <div class="summary-card">
            <strong>Total Pengeluaran:</strong><br>
            <span class="expense">${formatCurrency(totalExpense)}</span>
          </div>
          <div class="summary-card">
            <strong>Saldo:</strong><br>
            <span class="${totalIncome - totalExpense >= 0 ? 'income' : 'expense'}">${formatCurrency(totalIncome - totalExpense)}</span>
          </div>
        </div>

        <h2>Rincian Bulanan</h2>
        <table>
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Pemasukan</th>
              <th>Pengeluaran</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            ${monthlyData?.map((item) => `
              <tr>
                <td>${months[item.month - 1]}</td>
                <td class="income">${formatCurrency(item.income)}</td>
                <td class="expense">${formatCurrency(item.expense)}</td>
                <td class="${item.income - item.expense >= 0 ? 'income' : 'expense'}">${formatCurrency(item.income - item.expense)}</td>
              </tr>
            `).join('') ?? ''}
          </tbody>
          <tfoot>
            <tr style="font-weight: bold; background: #f4f4f4;">
              <td>Total</td>
              <td class="income">${formatCurrency(totalIncome)}</td>
              <td class="expense">${formatCurrency(totalExpense)}</td>
              <td class="${totalIncome - totalExpense >= 0 ? 'income' : 'expense'}">${formatCurrency(totalIncome - totalExpense)}</td>
            </tr>
          </tfoot>
        </table>

        <h2>Daftar Transaksi</h2>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Tipe</th>
              <th>Kategori</th>
              <th>Jumlah</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            ${yearTransactions.map((t) => `
              <tr>
                <td>${format(new Date(t.date), 'dd/MM/yyyy')}</td>
                <td>${t.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}</td>
                <td>${t.category?.name ?? 'Tanpa Kategori'}</td>
                <td class="${t.type === 'income' ? 'income' : 'expense'}">
                  ${t.type === 'income' ? '+' : '-'}${formatCurrency(Number(t.amount))}
                </td>
                <td>${t.description ?? '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <script>window.print();</script>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Laporan</h1>
          <p className="text-muted-foreground">
            Analisis keuangan Anda
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="flex gap-2">
        <Button variant="outline" onClick={exportToCSV}>
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
        <Button variant="outline" onClick={exportToPDF}>
          <FileText className="mr-2 h-4 w-4" />
          Export PDF
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Pemasukan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-green-500">
              {formatCurrency(totalIncome)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Pengeluaran</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-red-500">
              {formatCurrency(totalExpense)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata Pemasukan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {formatCurrency(averageIncome)}/bln
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata Pengeluaran</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">
              {formatCurrency(averageExpense)}/bln
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="bar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bar">Grafik Batang</TabsTrigger>
          <TabsTrigger value="line">Grafik Garis</TabsTrigger>
        </TabsList>

        <TabsContent value="bar">
          <Card>
            <CardHeader>
              <CardTitle>Pemasukan vs Pengeluaran Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-100 flex items-center justify-center">
                  <p className="text-muted-foreground">Memuat data...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      tickFormatter={(value) =>
                        new Intl.NumberFormat('id-ID', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(value)
                      }
                    />
                    <Tooltip
                      formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value) : ''}
                      labelStyle={{ color: '#000' }}
                    />
                    <Legend />
                    <Bar dataKey="Pemasukan" fill="#22c55e" />
                    <Bar dataKey="Pengeluaran" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="line">
          <Card>
            <CardHeader>
              <CardTitle>Tren Keuangan Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-100 flex items-center justify-center">
                  <p className="text-muted-foreground">Memuat data...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      tickFormatter={(value) =>
                        new Intl.NumberFormat('id-ID', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(value)
                      }
                    />
                    <Tooltip
                      formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value) : ''}
                      labelStyle={{ color: '#000' }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Pemasukan"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ fill: '#22c55e' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Pengeluaran"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ fill: '#ef4444' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Saldo"
                      stroke="#6366f1"
                      strokeWidth={2}
                      dot={{ fill: '#6366f1' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Monthly Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Rincian Bulanan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Bulan</th>
                  <th className="text-right py-3 px-2">Pemasukan</th>
                  <th className="text-right py-3 px-2">Pengeluaran</th>
                  <th className="text-right py-3 px-2">Saldo</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData?.map((item) => (
                  <tr key={item.month} className="border-b">
                    <td className="py-3 px-2 font-medium">{monthsShort[item.month - 1]}</td>
                    <td className="py-3 px-2 text-right text-green-500">
                      {formatCurrency(item.income)}
                    </td>
                    <td className="py-3 px-2 text-right text-red-500">
                      {formatCurrency(item.expense)}
                    </td>
                    <td
                      className={`py-3 px-2 text-right font-medium ${
                        item.income - item.expense >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {formatCurrency(item.income - item.expense)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold bg-muted/50">
                  <td className="py-3 px-2">Total</td>
                  <td className="py-3 px-2 text-right text-green-500">
                    {formatCurrency(totalIncome)}
                  </td>
                  <td className="py-3 px-2 text-right text-red-500">
                    {formatCurrency(totalExpense)}
                  </td>
                  <td
                    className={`py-3 px-2 text-right ${
                      totalIncome - totalExpense >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {formatCurrency(totalIncome - totalExpense)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

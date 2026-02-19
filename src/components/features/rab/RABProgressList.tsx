import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import type { RABItemProgress } from '@/types/rab';

interface RABProgressListProps {
  itemProgress: RABItemProgress[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const getProgressColor = (percentage: number) => {
  if (percentage >= 100) return 'bg-green-500';
  if (percentage >= 80) return 'bg-yellow-500';
  return 'bg-blue-500';
};

const getProgressIcon = (percentage: number) => {
  if (percentage >= 100) return <CheckCircle className="h-4 w-4 text-green-500" />;
  if (percentage >= 80) return <Clock className="h-4 w-4 text-yellow-500" />;
  return null;
};

export default function RABProgressList({ itemProgress }: RABProgressListProps) {
  if (!itemProgress || itemProgress.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          <p>Belum ada item RAB</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Item</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead className="text-center">Budget Qty</TableHead>
              <TableHead className="text-center">Realized Qty</TableHead>
              <TableHead className="text-center">Remaining</TableHead>
              <TableHead>Satuan</TableHead>
              <TableHead className="text-right">Harga/Unit</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead className="text-right">Realized</TableHead>
              <TableHead className="text-center">Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {itemProgress.map((item) => (
              <TableRow key={item.item_id}>
                <TableCell className="font-medium">{item.item_name}</TableCell>
                <TableCell>
                  {item.category_name ? (
                    <Badge variant="outline">{item.category_name}</Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="text-center">{item.budgeted_quantity}</TableCell>
                <TableCell className="text-center font-medium">
                  {item.realized_quantity}
                </TableCell>
                <TableCell className="text-center">
                  <span className={item.remaining_quantity <= 0 ? 'text-green-600' : ''}>
                    {item.remaining_quantity}
                  </span>
                </TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(item.price_per_unit)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(item.budgeted_amount)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(item.realized_amount)}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(item.absorption_percentage)}`}
                        style={{
                          width: `${Math.min(item.absorption_percentage, 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {item.absorption_percentage.toFixed(0)}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {/* Total Row */}
            <TableRow className="bg-muted/50 font-bold">
              <TableCell colSpan={7}>Total</TableCell>
              <TableCell className="text-right">
                {formatCurrency(
                  itemProgress.reduce((sum, item) => sum + item.budgeted_amount, 0)
                )}
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(
                  itemProgress.reduce((sum, item) => sum + item.realized_amount, 0)
                )}
              </TableCell>
              <TableCell className="text-center">
                {getProgressIcon(
                  (itemProgress.reduce((sum, item) => sum + item.realized_amount, 0) /
                    itemProgress.reduce((sum, item) => sum + item.budgeted_amount, 0)) *
                    100
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {itemProgress.map((item) => (
          <Card key={item.item_id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{item.item_name}</CardTitle>
                {item.absorption_percentage >= 100 && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
              {item.category_name && (
                <Badge variant="outline" className="w-fit">
                  {item.category_name}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">
                    {item.realized_quantity}/{item.budgeted_quantity} {item.unit}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getProgressColor(item.absorption_percentage)}`}
                    style={{
                      width: `${Math.min(item.absorption_percentage, 100)}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-right">
                  {item.absorption_percentage.toFixed(1)}%
                </p>
              </div>

              {/* Amount Details */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Budget</p>
                  <p className="font-medium">{formatCurrency(item.budgeted_amount)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Realized</p>
                  <p className="font-medium">{formatCurrency(item.realized_amount)}</p>
                </div>
              </div>

              {/* Remaining Alert */}
              {item.remaining_quantity > 0 && item.absorption_percentage >= 80 && (
                <div className="flex items-center gap-2 text-yellow-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>Sisa {item.remaining_quantity} {item.unit}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Total Card */}
        <Card className="bg-muted/50">
          <CardContent className="py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="text-lg font-bold">
                  {formatCurrency(
                    itemProgress.reduce((sum, item) => sum + item.budgeted_amount, 0)
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Realized</p>
                <p className="text-lg font-bold">
                  {formatCurrency(
                    itemProgress.reduce((sum, item) => sum + item.realized_amount, 0)
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

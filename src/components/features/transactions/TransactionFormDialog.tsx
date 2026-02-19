import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCategories } from '@/hooks/useCategories';
import type { Transaction } from '@/types';

const transactionSchema = z.object({
  type: z.enum(['income', 'expense']),
  amount: z.number().positive('Jumlah harus lebih dari 0'),
  category_id: z.string().nullable(),
  description: z.string(),
  date: z.string().min(1, 'Tanggal harus diisi'),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

interface TransactionFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction?: Transaction | null;
  onSubmit: (data: TransactionFormValues) => Promise<void>;
}

// Format number to Indonesian locale string (with dots as thousand separator)
const formatNumberInput = (value: number): string => {
  if (value === 0) return '';
  return value.toLocaleString('id-ID');
};

export default function TransactionFormDialog({
  open,
  onOpenChange,
  transaction,
  onSubmit,
}: TransactionFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [amountDisplay, setAmountDisplay] = useState('');

  const { data: categories } = useCategories();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: 'expense',
      amount: 0,
      category_id: null,
      description: '',
      date: format(new Date(), 'yyyy-MM-dd'),
    },
  });

  const selectedType = watch('type');
  const filteredCategories = categories?.filter((c) => c.type === selectedType) ?? [];

  // Reset form when dialog opens with transaction data
  useEffect(() => {
    if (open) {
      const amount = transaction?.amount ?? 0;
      reset({
        type: transaction?.type ?? 'expense',
        amount: amount,
        category_id: transaction?.category_id ?? null,
        description: transaction?.description ?? '',
        date: transaction?.date ?? format(new Date(), 'yyyy-MM-dd'),
      });
      setAmountDisplay(formatNumberInput(amount));
    }
  }, [open, transaction, reset]);

  // Reset category when type changes
  useEffect(() => {
    setValue('category_id', null);
  }, [selectedType, setValue]);

  const handleFormSubmit = async (data: TransactionFormValues) => {
    setLoading(true);
    try {
      await onSubmit(data);
      onOpenChange(false);
      reset();
      setAmountDisplay('');
    } catch (error) {
      console.error('Error saving transaction:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Allow empty input
    if (inputValue === '') {
      setAmountDisplay('');
      setValue('amount', 0);
      return;
    }

    // Only allow digits
    const digitsOnly = inputValue.replace(/[^\d]/g, '');
    
    if (digitsOnly === '') {
      setAmountDisplay('');
      setValue('amount', 0);
      return;
    }

    const numericValue = parseInt(digitsOnly, 10);
    
    if (!isNaN(numericValue)) {
      setValue('amount', numericValue);
      setAmountDisplay(formatNumberInput(numericValue));
    }
  };

  const handleAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      return;
    }
    // Block any non-digit
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>
            {transaction ? 'Edit Transaksi' : 'Tambah Transaksi'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {transaction ? 'Edit transaksi yang sudah ada' : 'Tambah transaksi baru ke dalam sistem'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Tipe</Label>
              <Select
                value={selectedType}
                onValueChange={(value: 'income' | 'expense') => setValue('type', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Pemasukan</SelectItem>
                  <SelectItem value="expense">Pengeluaran</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="amount">Jumlah (Rp)</Label>
              <Input
                id="amount"
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={amountDisplay}
                onChange={handleAmountChange}
                onKeyDown={handleAmountKeyDown}
              />
              {errors.amount && (
                <p className="text-sm text-destructive">{errors.amount.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category_id">Kategori</Label>
              <Select
                value={watch('category_id') ?? undefined}
                onValueChange={(value) => setValue('category_id', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {filteredCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        {category.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="date">Tanggal</Label>
              <Input
                id="date"
                type="date"
                {...register('date')}
              />
              {errors.date && (
                <p className="text-sm text-destructive">{errors.date.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Keterangan (opsional)</Label>
              <Input
                id="description"
                placeholder="Contoh: Makan siang"
                {...register('description')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Menyimpan...' : transaction ? 'Simpan' : 'Tambah'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';
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
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Minus } from 'lucide-react';
import { useRABItemProgress, useUpdateRABProgress } from '@/hooks/useRABProgress';

interface RABProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rabId: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function RABProgressDialog({
  open,
  onOpenChange,
  rabId,
}: RABProgressDialogProps) {
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [quantityToAdd, setQuantityToAdd] = useState<number>(0);
  const [description, setDescription] = useState('');

  const { data: itemProgress } = useRABItemProgress(rabId);
  const updateMutation = useUpdateRABProgress();

  const selectedItem = itemProgress?.find((item) => item.item_id === selectedItemId);

  const handleSubmit = async () => {
    if (!selectedItemId || quantityToAdd <= 0) return;

    try {
      await updateMutation.mutateAsync({
        rab_item_id: selectedItemId,
        quantity_added: quantityToAdd,
        description: description || undefined,
      });
      // Reset form
      setQuantityToAdd(0);
      setDescription('');
      onOpenChange(false);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value < 0) return;
    if (selectedItem && value > selectedItem.remaining_quantity) {
      // Don't allow exceeding remaining quantity
      setQuantityToAdd(selectedItem.remaining_quantity);
      return;
    }
    setQuantityToAdd(value);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Progres RAB</DialogTitle>
          <DialogDescription>
            Input quantity yang sudah terealisasi untuk item RAB
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Pilih Item */}
          <div className="grid gap-2">
            <Label htmlFor="item">Pilih Item</Label>
            <Select
              value={selectedItemId}
              onValueChange={(value) => {
                setSelectedItemId(value);
                setQuantityToAdd(0);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih item RAB" />
              </SelectTrigger>
              <SelectContent>
                {itemProgress?.map((item) => (
                  <SelectItem key={item.item_id} value={item.item_id}>
                    {item.item_name} ({item.budgeted_quantity} {item.unit})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Info Progress Item */}
          {selectedItem && (
            <Card>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Budget:</span>
                    <span className="font-medium">
                      {selectedItem.budgeted_quantity} {selectedItem.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Terealisasi:</span>
                    <span className="font-medium">
                      {selectedItem.realized_quantity} {selectedItem.unit}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sisa:</span>
                    <span className="font-medium text-green-600">
                      {selectedItem.remaining_quantity} {selectedItem.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                    <div
                      className={`h-full transition-all duration-500 ${
                        selectedItem.absorption_percentage >= 100
                          ? 'bg-green-500'
                          : selectedItem.absorption_percentage >= 80
                          ? 'bg-yellow-500'
                          : 'bg-blue-500'
                      }`}
                      style={{
                        width: `${Math.min(selectedItem.absorption_percentage, 100)}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    {selectedItem.absorption_percentage.toFixed(1)}% complete
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Input Quantity */}
          {selectedItem && selectedItem.remaining_quantity > 0 && (
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity Terealisasi</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantityToAdd - 1)}
                  disabled={quantityToAdd <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  min="0"
                  max={selectedItem.remaining_quantity}
                  step="0.01"
                  value={quantityToAdd || ''}
                  onChange={(e) => handleQuantityChange(parseFloat(e.target.value) || 0)}
                  className="text-center"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantityToAdd + 1)}
                  disabled={quantityToAdd >= selectedItem.remaining_quantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Max: {selectedItem.remaining_quantity} {selectedItem.unit}</span>
                <span>= {formatCurrency(quantityToAdd * selectedItem.price_per_unit)}</span>
              </div>
            </div>
          )}

          {/* Catatan */}
          <div className="grid gap-2">
            <Label htmlFor="description">Catatan (opsional)</Label>
            <Input
              id="description"
              placeholder="Contoh: Terpasang di lantai 1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Batal
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!selectedItemId || quantityToAdd <= 0 || updateMutation.isPending}
          >
            {updateMutation.isPending ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

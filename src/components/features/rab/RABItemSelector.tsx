import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
import { Search, Check } from 'lucide-react';
import { useActiveRABItemTemplates } from '@/hooks/useRABItemTemplates';
import type { RABItemTemplate } from '@/types/rab';

interface RABItemSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (template: RABItemTemplate) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function RABItemSelector({
  open,
  onOpenChange,
  onSelect,
}: RABItemSelectorProps) {
  const [search, setSearch] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const { data: templates, isLoading } = useActiveRABItemTemplates();

  // Filter templates
  const filteredTemplates = templates?.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategoryId || template.category_id === selectedCategoryId;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from templates
  const categories = Array.from(
    new Map(
      templates
        ?.filter((t) => t.category_id && t.category)
        .map((t) => [t.category_id!, t.category!])
    ).values()
  );

  const handleSelect = (template: RABItemTemplate) => {
    onSelect(template);
    onOpenChange(false);
    setSearch('');
    setSelectedCategoryId('');
  };

  const handleClose = () => {
    onOpenChange(false);
    setSearch('');
    setSelectedCategoryId('');
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Pilih dari Katalog Item</DialogTitle>
          <DialogDescription>
            Pilih item template dari katalog untuk ditambahkan ke RAB
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Filters */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4">
            <div className="grid gap-2">
              <Label htmlFor="search">Cari Item</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Cari nama item..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category-filter">Filter Kategori</Label>
              <select
                id="category-filter"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
              >
                <option value="">Semua Kategori</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Templates Table */}
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">
              Memuat data...
            </div>
          ) : filteredTemplates && filteredTemplates.length > 0 ? (
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10"></TableHead>
                    <TableHead>Nama Item</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Satuan</TableHead>
                    <TableHead className="text-right">Harga Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTemplates.map((template) => (
                    <TableRow
                      key={template.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleSelect(template)}
                    >
                      <TableCell>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary hover:text-primary-foreground">
                          <Check className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                        </div>
                      </TableCell>
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
                      <TableCell>
                        <Badge variant="outline">{template.unit}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {formatCurrency(template.default_price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>Tidak ada item template yang ditemukan</p>
              <p className="text-sm mt-1">
                Coba ubah filter atau tambah item template baru di halaman Katalog Item
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={handleClose}>
            Batal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

# Fitur Update Progres RAB Berbasis Quantity

## 🎯 Tujuan

Memudahkan update progres RAB dengan input **quantity** yang sudah terealisasi, bukan nominal rupiah. Fitur ini memisahkan logika update progres dari transaksi pengeluaran, sehingga user dapat update progress RAB secara independen hanya dengan input quantity.

---

## 📋 Perbandingan Pendekatan

### Pendekatan Saat Ini (Amount-based via Transaksi)
- Transaksi pengeluaran → input **nominal rupiah** → otomatis masuk realisasi RAB
- Progres terupdate hanya saat ada transaksi
- **Keterbatasan:** Tidak fleksibel untuk tracking progress berbasis volume/quantity

### Pendekatan Baru (Quantity-based)
- Input **quantity yang terealisasi** dari item RAB
- Sistem otomatis hitung: `quantity terealisasi × harga satuan = realisasi rupiah`
- Update progres independen dari transaksi
- **Keuntungan:** Cocok untuk konstruksi/proyek yang tracking-nya berbasis volume

---

## 📊 Contoh Skenario

**Item RAB: Semen 50kg**
- Budget: 100 sak × Rp 60.000 = Rp 6.000.000

**Update Progres:**
- User input: "Sudah terpakai 35 sak"
- Sistem hitung: 35 × Rp 60.000 = Rp 2.100.000 (terserap)
- Progress: 35% (35/100 sak)

---

## 📁 Struktur File

### File yang Akan Dibuat/Dimodifikasi

| File | Tipe | Deskripsi |
|------|------|-----------|
| `src/types/rab.ts` | Modify | Tambah interface `RABProgressUpdate` dan `RABItemProgress` |
| `src/services/rabProgressService.ts` | **NEW** | Service untuk update & tracking progress |
| `src/hooks/useRABProgress.ts` | **NEW** | Hook untuk progress tracking |
| `src/components/features/rab/RABProgressDialog.tsx` | **NEW** | Dialog untuk update progress |
| `src/components/features/rab/RABProgressList.tsx` | **NEW** | List monitoring progress per item |
| `src/pages/RABDetailPage.tsx` | Modify | Tambah tab/button "Update Progres" |
| `src/pages/RABProgressPage.tsx` | **NEW** | Halaman monitoring progress semua RAB (optional) |

---

## 🔧 Implementasi

### 1. Types (`src/types/rab.ts`)

```typescript
// Type untuk input update progress
export interface RABProgressUpdate {
  rab_item_id: string;
  quantity_realized: number;  // Quantity yang baru terealisasi
  description?: string;        // Catatan optional
}

// Type untuk progress per item
export interface RABItemProgress {
  item_id: string;
  item_name: string;
  category_name?: string;
  budgeted_quantity: number;
  realized_quantity: number;
  remaining_quantity: number;
  unit: string;
  price_per_unit: number;
  budgeted_amount: number;
  realized_amount: number;
  absorption_percentage: number;
  last_updated?: string;
}

// Type untuk summary progress RAB
export interface RABProgressSummary {
  rab_id: string;
  rab_name: string;
  total_items: number;
  completed_items: number;
  overall_progress_percentage: number;
  total_budgeted: number;
  total_realized: number;
  remaining_budget: number;
}
```

---

### 2. Service Layer (`src/services/rabProgressService.ts`)

```typescript
import { supabase } from '@/lib/supabase';
import type { RABProgressUpdate, RABItemProgress, RABProgressSummary } from '@/types/rab';

/**
 * Helper to get the active owner ID for data filtering
 */
async function getActiveOwnerId(): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data: activeAccount } = await supabase
    .from('active_account')
    .select('active_owner_id')
    .eq('user_id', user.id)
    .single();

  return activeAccount?.active_owner_id || user.id;
}

/**
 * Update progress per item RAB
 * Menambahkan quantity yang terealisasi ke item tertentu
 */
export async function updateRABProgress(data: RABProgressUpdate): Promise<void> {
  const activeOwnerId = await getActiveOwnerId();

  // Get the RAB item to verify ownership
  const { data: item, error: itemError } = await supabase
    .from('rab_items')
    .select('rab_id, quantity, price_per_unit')
    .eq('id', data.rab_item_id)
    .single();

  if (itemError) throw itemError;

  // Verify ownership
  const { data: rab, error: rabError } = await supabase
    .from('rab')
    .select('user_id')
    .eq('id', item.rab_id)
    .single();

  if (rabError) throw rabError;
  if (rab.user_id !== activeOwnerId) {
    throw new Error('Unauthorized: You can only update progress for your own RAB');
  }

  // Insert progress record (if using history table)
  // Or update a cumulative quantity field in rab_items
  const { error } = await supabase
    .from('rab_progress')
    .insert({
      rab_item_id: data.rab_item_id,
      quantity_added: data.quantity_realized,
      description: data.description,
      user_id: activeOwnerId,
    });

  if (error) throw error;
}

/**
 * Get progress per item untuk RAB tertentu
 */
export async function getRABItemProgress(rabId: string): Promise<RABItemProgress[]> {
  // Get RAB items with their budgeted quantities
  const { data: items, error } = await supabase
    .from('rab_items')
    .select(`
      *,
      category:categories(name)
    `)
    .eq('rab_id', rabId)
    .order('name');

  if (error) throw error;

  // Get realized quantities from rab_progress table
  const { data: progressData, error: progressError } = await supabase
    .from('rab_progress')
    .select('rab_item_id, quantity_added')
    .in('rab_item_id', items!.map(item => item.id));

  if (progressError) throw progressError;

  // Calculate progress per item
  const itemProgress = items!.map(item => {
    const realizedQty = progressData
      ?.filter(p => p.rab_item_id === item.id)
      .reduce((sum, p) => sum + Number(p.quantity_added), 0) ?? 0;

    const budgetedQty = Number(item.quantity);
    const pricePerUnit = Number(item.price_per_unit);

    return {
      item_id: item.id,
      item_name: item.name,
      category_name: item.category?.name,
      budgeted_quantity: budgetedQty,
      realized_quantity: realizedQty,
      remaining_quantity: budgetedQty - realizedQty,
      unit: item.unit,
      price_per_unit: pricePerUnit,
      budgeted_amount: budgetedQty * pricePerUnit,
      realized_amount: realizedQty * pricePerUnit,
      absorption_percentage: budgetedQty > 0 ? (realizedQty / budgetedQty) * 100 : 0,
    };
  });

  return itemProgress as RABItemProgress[];
}

/**
 * Get summary progress RAB
 */
export async function getRABProgressSummary(rabId: string): Promise<RABProgressSummary> {
  const { data: rab, error } = await supabase
    .from('rab')
    .select('id, name, total_budget')
    .eq('id', rabId)
    .single();

  if (error) throw error;

  const itemProgress = await getRABItemProgress(rabId);

  const totalItems = itemProgress.length;
  const completedItems = itemProgress.filter(
    item => item.absorption_percentage >= 100
  ).length;

  const totalBudgeted = itemProgress.reduce(
    (sum, item) => sum + item.budgeted_amount,
    0
  );

  const totalRealized = itemProgress.reduce(
    (sum, item) => sum + item.realized_amount,
    0
  );

  const overallProgress = totalBudgeted > 0
    ? (totalRealized / totalBudgeted) * 100
    : 0;

  return {
    rab_id: rab.id,
    rab_name: rab.name,
    total_items: totalItems,
    completed_items: completedItems,
    overall_progress_percentage: overallProgress,
    total_budgeted: totalBudgeted,
    total_realized: totalRealized,
    remaining_budget: totalBudgeted - totalRealized,
  };
}

/**
 * Get progress history untuk item tertentu (optional)
 */
export async function getProgressHistory(rabItemId: string) {
  const { data, error } = await supabase
    .from('rab_progress')
    .select(`
      *,
      user:profiles(name, avatar_url)
    `)
    .eq('rab_item_id', rabItemId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
```

---

### 3. Database Schema (Optional Enhancement)

Jika ingin tracking history progress, buat tabel baru:

```sql
-- Tabel untuk menyimpan history progress
CREATE TABLE IF NOT EXISTS rab_progress (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rab_item_id     UUID NOT NULL REFERENCES rab_items(id) ON DELETE CASCADE,
  quantity_added  NUMERIC(10, 2) NOT NULL DEFAULT 0,
  description     TEXT,
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index untuk performa
CREATE INDEX IF NOT EXISTS idx_rab_progress_rab_item_id ON rab_progress(rab_item_id);
CREATE INDEX IF NOT EXISTS idx_rab_progress_user_id ON rab_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_rab_progress_created_at ON rab_progress(created_at);

-- Enable RLS
ALTER TABLE rab_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own progress"
  ON rab_progress FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM rab_items ri
      JOIN rab r ON r.id = ri.rab_id
      WHERE ri.id = rab_progress.rab_item_id
      AND (r.user_id = auth.uid() OR r.user_id = (
        SELECT active_owner_id FROM active_account WHERE user_id = auth.uid() LIMIT 1
      ))
    )
  );

CREATE POLICY "Users can insert own progress"
  ON rab_progress FOR INSERT
  WITH CHECK (
    user_id = (
      SELECT COALESCE(active_account.active_owner_id, auth.uid())
      FROM active_account
      WHERE active_account.user_id = auth.uid()
      LIMIT 1
    )
  );

CREATE POLICY "Users can delete own progress"
  ON rab_progress FOR DELETE
  USING (
    user_id = auth.uid()
  );

-- Comments
COMMENT ON TABLE rab_progress IS 'History update progress quantity untuk item RAB';
COMMENT ON COLUMN rab_progress.quantity_added IS 'Quantity yang ditambahkan pada update ini';
```

---

### 4. UI Components

#### A. RABProgressDialog - Form Update Progress

```tsx
// src/components/features/rab/RABProgressDialog.tsx

interface RABProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rabId: string;
  onSubmit: (data: RABProgressUpdate) => Promise<void>;
}

export default function RABProgressDialog({
  open,
  onOpenChange,
  rabId,
  onSubmit,
}: RABProgressDialogProps) {
  const [loading, setLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [quantityRealized, setQuantityRealized] = useState<number>(0);
  const [description, setDescription] = useState('');

  const { data: itemProgress } = useRABItemProgress(rabId);
  const selectedItem = itemProgress?.find(item => item.item_id === selectedItemId);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit({
        rab_item_id: selectedItemId,
        quantity_realized: quantityRealized,
        description,
      });
      onOpenChange(false);
      setQuantityRealized(0);
      setDescription('');
    } catch (error) {
      console.error('Error updating progress:', error);
    } finally {
      setLoading(false);
    }
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
              onValueChange={setSelectedItemId}
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
                    <span className="font-medium">
                      {selectedItem.remaining_quantity} {selectedItem.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{
                        width: `${Math.min(selectedItem.absorption_percentage, 100)}%`
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
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity Terealisasi</Label>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantityRealized(q => Math.max(0, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                value={quantityRealized}
                onChange={(e) => setQuantityRealized(Number(e.target.value))}
                className="text-center"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantityRealized(q => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {selectedItem && (
              <p className="text-xs text-muted-foreground">
                = {formatCurrency(quantityRealized * selectedItem.price_per_unit)}
              </p>
            )}
          </div>

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
            type="submit"
            onClick={handleSubmit}
            disabled={loading || !selectedItemId || quantityRealized <= 0}
          >
            {loading ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

#### B. RABProgressList - List Monitoring Progress

```tsx
// src/components/features/rab/RABProgressList.tsx

interface RABProgressListProps {
  rabId: string;
  onEdit: (itemId: string) => void;
}

export default function RABProgressList({ rabId, onEdit }: RABProgressListProps) {
  const { data: itemProgress, isLoading } = useRABItemProgress(rabId);

  if (isLoading) return <SkeletonList />;
  if (!itemProgress?.length) {
    return (
      <EmptyState
        icon="file"
        title="Belum ada progress"
        description="Update progress untuk mulai tracking"
      />
    );
  }

  return (
    <div className="space-y-4">
      {itemProgress.map((item) => (
        <Card key={item.item_id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium">{item.item_name}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.category_name || 'Uncategorized'}
                </p>
              </div>
              <Badge
                className={
                  item.absorption_percentage >= 100
                    ? 'bg-green-500'
                    : item.absorption_percentage >= 80
                    ? 'bg-yellow-500'
                    : 'bg-blue-500'
                }
              >
                {item.absorption_percentage.toFixed(1)}%
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.realized_quantity} / {item.budgeted_quantity} {item.unit}
                </span>
                <span className="font-medium">
                  {formatCurrency(item.realized_amount)} / {formatCurrency(item.budgeted_amount)}
                </span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    item.absorption_percentage >= 100
                      ? 'bg-green-500'
                      : item.absorption_percentage >= 80
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                  style={{ width: `${Math.min(item.absorption_percentage, 100)}%` }}
                />
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(item.item_id)}
              >
                <Plus className="h-3 w-3 mr-1" />
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

### 5. Hooks (`src/hooks/useRABProgress.ts`)

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  updateRABProgress,
  getRABItemProgress,
  getRABProgressSummary,
} from '@/services/rabProgressService';
import type { RABProgressUpdate } from '@/types/rab';

/**
 * Hook untuk mengambil progress per item RAB
 */
export function useRABItemProgress(rabId: string) {
  return useQuery({
    queryKey: ['rab', 'progress', rabId],
    queryFn: () => getRABItemProgress(rabId),
    enabled: !!rabId,
  });
}

/**
 * Hook untuk mengambil summary progress RAB
 */
export function useRABProgressSummary(rabId: string) {
  return useQuery({
    queryKey: ['rab', 'progress', 'summary', rabId],
    queryFn: () => getRABProgressSummary(rabId),
    enabled: !!rabId,
  });
}

/**
 * Hook untuk update progress RAB
 */
export function useUpdateRABProgress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RABProgressUpdate) => updateRABProgress(data),
    onSuccess: (_, { rab_item_id }) => {
      toast.success('Progress berhasil diupdate');
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['rab', 'progress'] });
      queryClient.invalidateQueries({ queryKey: ['rab', 'analysis'] });
    },
    onError: (error) => {
      toast.error('Gagal update progress', {
        description: error instanceof Error ? error.message : 'Terjadi kesalahan',
      });
    },
  });
}
```

---

### 6. Page Integration

#### A. RABDetailPage Enhancement

Tambahkan tab "Monitoring Progress" di `RABDetailPage.tsx`:

```tsx
<Tabs defaultValue="items" className="space-y-4">
  <TabsList className="grid w-full grid-cols-3 max-w-md">
    <TabsTrigger value="items">Rincian Item</TabsTrigger>
    <TabsTrigger value="progress">Monitoring Progress</TabsTrigger>
    <TabsTrigger value="analysis">Analisis Kategori</TabsTrigger>
  </TabsList>

  {/* Progress Tab */}
  <TabsContent value="progress">
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Monitoring Progress per Item</CardTitle>
          <Button onClick={() => setProgressDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Update Progress
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <RABProgressList
          rabId={rab.id}
          onEdit={(itemId) => {
            setSelectedItemId(itemId);
            setProgressDialogOpen(true);
          }}
        />
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>

<RABProgressDialog
  open={progressDialogOpen}
  onOpenChange={setProgressDialogOpen}
  rabId={rab.id}
  onSubmit={async (data) => {
    await updateProgressMutation.mutateAsync(data);
    setProgressDialogOpen(false);
  }}
/>
```

#### B. RABProgressPage (Optional - Monitoring Semua RAB)

```tsx
// src/pages/RABProgressPage.tsx

export default function RABProgressPage() {
  const { data: rabs } = useRABs({ status: 'active' });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Monitoring Progress RAB</h1>
        <p className="text-muted-foreground">
          Pantau progress semua RAB aktif Anda
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rabs?.map((rab) => (
          <RABProgressCard key={rab.id} rabId={rab.id} rabName={rab.name} />
        ))}
      </div>
    </div>
  );
}
```

---

## 📊 Flow Update Progress

```
┌─────────────────────────────────────────────────────────┐
│ 1. User buka RABDetailPage                              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 2. Klik tab "Monitoring Progress"                       │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Klik "Update Progress"                               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 4. Dialog terbuka:                                      │
│    - Pilih item dari dropdown                           │
│    - Lihat progress current (progress bar)              │
│    - Input quantity terealisasi                         │
│    - Lihat auto-calculate realisasi rupiah              │
│    - Tambah catatan (opsional)                          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 5. Klik "Simpan" → Progress terupdate                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ 6. UI auto-refresh dengan progress baru                 │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Fitur yang Ditambahkan

1. ✅ **Update progress via quantity input** (bukan nominal)
2. ✅ **Progress bar per item** dengan persentase
3. ✅ **Auto-calculate realisasi rupiah** dari quantity
4. ✅ **List monitoring progress** semua item dalam RAB
5. ✅ **History tracking** untuk audit trail (optional)
6. ✅ **Quick update** dari halaman detail RAB
7. ✅ **Independent dari transaksi** - tidak perlu buat transaksi untuk update progress
8. ✅ **Visual feedback** dengan progress bar dan badge status

---

## 🔗 Integrasi dengan Fitur Existing

### Dengan Transaksi
- Progress RAB **tidak terpengaruh** oleh transaksi
- Transaksi tetap bisa di-link ke RAB untuk tracking keuangan
- Kedua sistem berjalan paralel:
  - **Progress tracking** → berbasis quantity
  - **Financial tracking** → berbasis nominal transaksi

### Dengan RAB Analysis
- `getRABAnalysis()` tetap menghitung dari transaksi
- Progress quantity memberikan insight **berbeda** untuk tracking fisik proyek

---

## 🚀 Langkah Implementasi

1. [ ] Buat migration database untuk tabel `rab_progress`
2. [ ] Update `src/types/rab.ts` dengan type baru
3. [ ] Buat `src/services/rabProgressService.ts`
4. [ ] Buat `src/hooks/useRABProgress.ts`
5. [ ] Buat `src/components/features/rab/RABProgressDialog.tsx`
6. [ ] Buat `src/components/features/rab/RABProgressList.tsx`
7. [ ] Update `src/pages/RABDetailPage.tsx` dengan tab baru
8. [ ] (Optional) Buat `src/pages/RABProgressPage.tsx`
9. [ ] Test di local environment
10. [ ] Deploy dan test di production

---

## 📝 Catatan

- Progress tracking ini **independen** dari transaksi
- User dapat update progress berkali-kali untuk item yang sama
- History tracking memungkinkan audit trail untuk compliance
- Progress dapat melebihi 100% (over-delivery) dengan warning visual

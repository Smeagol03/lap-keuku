# Blueprint Fitur RAB (Rencana Anggaran Biaya)

Dokumen ini menjelaskan rancangan teknis implementasi fitur RAB pada aplikasi Lap-Keu, termasuk struktur data, integrasi transaksi, analisis budget, pelaporan, dan pertimbangan responsive mobile.

---

## 1. Overview
Fitur RAB memungkinkan pengguna (khususnya Owner dan Admin) untuk membuat perencanaan anggaran berbasis proyek atau kegiatan dengan rincian item yang mendetail (kuantitas, satuan, harga). Fitur ini terintegrasi dengan transaksi riil untuk memantau penyerapan anggaran secara *real-time*.

### Integrasi dengan Sistem yang Ada
- **RBAC**: Menggunakan sistem permission yang sudah ada (`canView`, `canCreate`, `canEdit`, `canDelete`)
- **Active Account**: Data RAB difilter berdasarkan `active_owner_id` (sama seperti transaksi)
- **Kategori**: Item RAB dapat dihubungkan ke kategori yang sudah ada
- **Transaksi**: Pengeluaran dapat dihubungkan ke item RAB tertentu

---

## 2. Struktur Database

### Tabel `rab` (Header Proyek)
Menyimpan informasi utama proyek RAB.
```sql
CREATE TABLE IF NOT EXISTS rab (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE, -- Merujuk ke active_owner_id
  name            TEXT NOT NULL,
  description     TEXT,
  status          TEXT NOT NULL CHECK (status IN ('draft', 'active', 'completed', 'cancelled')) DEFAULT 'active',
  total_budget    NUMERIC(15, 2) DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index untuk performa query
CREATE INDEX IF NOT EXISTS idx_rab_user_id ON rab(user_id);
CREATE INDEX IF NOT EXISTS idx_rab_status ON rab(status);
```

### Tabel `rab_items` (Rincian Item)
Menyimpan detail setiap item dalam RAB.
```sql
CREATE TABLE IF NOT EXISTS rab_items (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rab_id          UUID NOT NULL REFERENCES rab(id) ON DELETE CASCADE,
  category_id     UUID REFERENCES categories(id) ON DELETE SET NULL,
  name            TEXT NOT NULL,
  quantity        NUMERIC(10, 2) NOT NULL DEFAULT 1,
  unit            TEXT NOT NULL, -- Contoh: 'ls', 'm2', 'kg', 'pcs'
  price_per_unit  NUMERIC(15, 2) NOT NULL DEFAULT 0,
  total_price     NUMERIC(15, 2) GENERATED ALWAYS AS (quantity * price_per_unit) STORED,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Index untuk performa query
CREATE INDEX IF NOT EXISTS idx_rab_items_rab_id ON rab_items(rab_id);
CREATE INDEX IF NOT EXISTS idx_rab_items_category_id ON rab_items(category_id);
```

### Update Tabel `transactions`
Menghubungkan pengeluaran riil dengan RAB.
```sql
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS rab_id UUID REFERENCES rab(id) ON DELETE SET NULL;
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS rab_item_id UUID REFERENCES rab_items(id) ON DELETE SET NULL;

-- Index untuk performa query
CREATE INDEX IF NOT EXISTS idx_transactions_rab_id ON transactions(rab_id);
CREATE INDEX IF NOT EXISTS idx_transactions_rab_item_id ON transactions(rab_item_id);
```

---

## 3. Types & Interfaces
File: `src/types/rab.ts` (file terpisah untuk modularitas)

```typescript
import type { Category } from './index';

export type RABStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export interface RAB {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  status: RABStatus;
  total_budget: number;
  created_at: string;
  updated_at: string;
  items?: RABItem[];
}

export interface RABItem {
  id: string;
  rab_id: string;
  category_id: string | null;
  name: string;
  quantity: number;
  unit: string;
  price_per_unit: number;
  total_price: number;
  category?: Category;
}

export interface RABAnalysis {
  rab: RAB;
  totalRealization: number;
  remainingBudget: number;
  absorptionPercentage: number;
  categoryBreakdown: {
    category_id: string;
    category_name: string;
    budgeted: number;
    realized: number;
    remaining: number;
  }[];
}

// Form types untuk create/update RAB
export interface RABFormData {
  name: string;
  description: string;
  status: RABStatus;
  items: RABItemFormData[];
}

export interface RABItemFormData {
  id?: string; // untuk update existing item
  category_id: string | null;
  name: string;
  quantity: number;
  unit: string;
  price_per_unit: number;
}

// Filter types
export interface RABFilters {
  status?: RABStatus;
  search?: string;
}
```

---

## 4. Service Layer (`rabService.ts`)
Logika bisnis utama untuk pengolahan RAB. Mengikuti pola yang sudah ada di `transactionService.ts`.

```typescript
import { supabase } from '@/lib/supabase';
import type { RAB, RABItem, RABFormData, RABItemFormData, RABFilters, RABAnalysis } from '@/types/rab';

/**
 * Helper to get the active owner ID for data filtering
 * Mengikuti pola yang sudah ada di transactionService.ts
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
 * Mengambil daftar RAB berdasarkan active_owner_id
 */
export async function getRABList(filters?: RABFilters): Promise<RAB[]> {
  const activeOwnerId = await getActiveOwnerId();

  let query = supabase
    .from('rab')
    .select(`
      *,
      items:rab_items(
        *,
        category:categories(*)
      )
    `)
    .eq('user_id', activeOwnerId)
    .order('created_at', { ascending: false });

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }
  if (filters?.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as RAB[];
}

/**
 * Mengambil detail RAB beserta item dan ringkasan realisasi
 */
export async function getRABDetail(id: string): Promise<RAB | null> {
  const { data, error } = await supabase
    .from('rab')
    .select(`
      *,
      items:rab_items(
        *,
        category:categories(*)
      )
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data as RAB;
}

/**
 * Membuat header RAB dan item secara batch (transactional)
 */
export async function createRAB(formData: RABFormData): Promise<RAB> {
  const activeOwnerId = await getActiveOwnerId();

  // Calculate total budget from items
  const totalBudget = formData.items.reduce(
    (sum, item) => sum + item.quantity * item.price_per_unit,
    0
  );

  // Insert RAB header
  const { data: rab, error: rabError } = await supabase
    .from('rab')
    .insert({
      user_id: activeOwnerId,
      name: formData.name,
      description: formData.description || null,
      status: formData.status,
      total_budget: totalBudget,
    })
    .select()
    .single();

  if (rabError) throw rabError;

  // Insert RAB items
  if (formData.items.length > 0) {
    const itemsToInsert = formData.items.map((item) => ({
      rab_id: rab.id,
      category_id: item.category_id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      price_per_unit: item.price_per_unit,
    }));

    const { error: itemsError } = await supabase
      .from('rab_items')
      .insert(itemsToInsert);

    if (itemsError) {
      // Rollback RAB header if items fail
      await supabase.from('rab').delete().eq('id', rab.id);
      throw itemsError;
    }
  }

  return getRABDetail(rab.id) as Promise<RAB>;
}

/**
 * Update RAB dan item-itemnya
 */
export async function updateRAB(id: string, formData: Partial<RABFormData>): Promise<RAB> {
  // Calculate total budget if items provided
  const totalBudget = formData.items?.reduce(
    (sum, item) => sum + item.quantity * item.price_per_unit,
    0
  );

  // Update RAB header
  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };
  if (formData.name) updateData.name = formData.name;
  if (formData.description !== undefined) updateData.description = formData.description || null;
  if (formData.status) updateData.status = formData.status;
  if (totalBudget !== undefined) updateData.total_budget = totalBudget;

  const { error: rabError } = await supabase
    .from('rab')
    .update(updateData)
    .eq('id', id);

  if (rabError) throw rabError;

  // Update items if provided
  if (formData.items) {
    // Delete existing items
    await supabase.from('rab_items').delete().eq('rab_id', id);

    // Insert new items
    if (formData.items.length > 0) {
      const itemsToInsert = formData.items.map((item) => ({
        rab_id: id,
        category_id: item.category_id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        price_per_unit: item.price_per_unit,
      }));

      const { error: itemsError } = await supabase
        .from('rab_items')
        .insert(itemsToInsert);

      if (itemsError) throw itemsError;
    }
  }

  return getRABDetail(id) as Promise<RAB>;
}

/**
 * Menghapus RAB (item akan ikut terhapus via CASCADE)
 */
export async function deleteRAB(id: string): Promise<void> {
  const { error } = await supabase.from('rab').delete().eq('id', id);
  if (error) throw error;
}

/**
 * Menghitung perbandingan budget vs realisasi dari tabel transactions
 */
export async function getRABAnalysis(id: string): Promise<RABAnalysis | null> {
  const rab = await getRABDetail(id);
  if (!rab) return null;

  // Get all transactions linked to this RAB
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('amount, rab_item_id, category_id')
    .eq('rab_id', id)
    .eq('type', 'expense');

  if (error) throw error;

  const totalRealization = transactions?.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  ) ?? 0;

  const remainingBudget = rab.total_budget - totalRealization;
  const absorptionPercentage = rab.total_budget > 0
    ? (totalRealization / rab.total_budget) * 100
    : 0;

  // Category breakdown
  const categoryMap = new Map<string, { budgeted: number; realized: number; name: string }>();

  // Initialize with budgeted amounts from RAB items
  rab.items?.forEach((item) => {
    if (item.category_id && item.category) {
      const existing = categoryMap.get(item.category_id) || { budgeted: 0, realized: 0, name: item.category.name };
      existing.budgeted += item.total_price;
      categoryMap.set(item.category_id, existing);
    }
  });

  // Add realized amounts from transactions
  transactions?.forEach((t) => {
    if (t.category_id) {
      const existing = categoryMap.get(t.category_id) || { budgeted: 0, realized: 0, name: 'Lainnya' };
      existing.realized += Number(t.amount);
      categoryMap.set(t.category_id, existing);
    }
  });

  const categoryBreakdown = Array.from(categoryMap.entries()).map(([category_id, data]) => ({
    category_id,
    category_name: data.name,
    budgeted: data.budgeted,
    realized: data.realized,
    remaining: data.budgeted - data.realized,
  }));

  return {
    rab,
    totalRealization,
    remainingBudget,
    absorptionPercentage,
    categoryBreakdown,
  };
}

/**
 * Get RAB items for dropdown in transaction form
 */
export async function getRABItemsForTransaction(rabId: string): Promise<RABItem[]> {
  const { data, error } = await supabase
    .from('rab_items')
    .select('*, category:categories(*)')
    .eq('rab_id', rabId)
    .order('name');

  if (error) throw error;
  return data as RABItem[];
}
```

| Method | Deskripsi |
|--------|-----------|
| `getRABList()` | Mengambil daftar RAB berdasarkan `active_owner_id`. |
| `getRABDetail()` | Mengambil detail RAB beserta item dan ringkasan realisasi. |
| `createRAB()` | Membuat header RAB dan item secara batch (transactional). |
| `updateRAB()` | Update RAB dan item-itemnya. |
| `deleteRAB()` | Menghapus RAB (item akan ikut terhapus via CASCADE). |
| `getRABAnalysis()` | Menghitung perbandingan budget vs realisasi dari tabel `transactions`. |
| `getRABItemsForTransaction()` | Mengambil RAB items untuk dropdown di form transaksi. |

---

## 5. UI & Fitur Analisis

### Prosedur Input
1. Pengguna membuat RAB dengan rincian item.
2. Saat mencatat transaksi pengeluaran, pengguna dapat memilih "Hubungkan ke Proyek RAB" dan memilih item spesifik dari RAB tersebut.

### Komponen Analisis Visual
- **Progress Bar Penyerapan**: Visualisasi seberapa besar anggaran yang sudah terpakai.
- **Tabel Deviasi**: Menampilkan selisih (over/under budget) per item atau per kategori.
- **Alert System**: Notifikasi warna (Merah) jika realisasi melebihi anggaran yang direncanakan.

### Responsive Mobile Design

#### Breakpoints (mengikuti Tailwind CSS)
- `sm`: 640px (landscape mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)

#### Strategi Responsive

**1. Halaman Daftar RAB (`RABListPage`)**
```
Desktop (lg+):
┌─────────────────────────────────────────────────────┐
│ Header: Judul + Tombol "Tambah RAB"                 │
├─────────────────────────────────────────────────────┤
│ Filter Bar (Status, Search)                         │
├─────────────────────────────────────────────────────┤
│ Tabel dengan kolom:                                 │
│ Nama | Deskripsi | Total Budget | Status | Aksi     │
└─────────────────────────────────────────────────────┘

Mobile (< md):
┌─────────────────────┐
│ Header              │
│ +-------------------+ │
│ Filter (collapsible) │
├─────────────────────┤
│ Card List:          │
│ ┌─────────────────┐ │
│ │ Nama RAB        │ │
│ │ Rp 10.000.000   │ │
│ │ Status: Active  │ │
│ │ [Edit] [Delete] │ │
│ └─────────────────┘ │
└─────────────────────┘
```

**2. Form RAB (`RABFormDialog`)**
```
Desktop (lg+):
┌─────────────────────────────────────────────────────┐
│ Dialog Header: "Tambah/Edit RAB"                    │
├─────────────────────────────────────────────────────┤
│ Nama Proyek: [________________]                      │
│ Deskripsi:  [________________]                      │
│ Status:     [Dropdown_______]                       │
├─────────────────────────────────────────────────────┤
│ Items Section:                                      │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Nama | Qty | Satuan | Harga | Total | Aksi     │ │
│ │ [___] | [_] | [____] | [___] | Rp... | [X]     │ │
│ │ [+ Tambah Item]                                 │ │
│ └─────────────────────────────────────────────────┘ │
│ Total Budget: Rp 0                                  │
├─────────────────────────────────────────────────────┤
│ [Batal]                              [Simpan]       │
└─────────────────────────────────────────────────────┘

Mobile (< md):
┌─────────────────────┐
│ Dialog Full Screen  │
├─────────────────────┤
│ Nama: [__________]  │
│ Deskripsi:          │
│ [_______________]   │
│ Status: [Dropdown]  │
├─────────────────────┤
│ Items (Stacked):    │
│ ┌─────────────────┐ │
│ │ Item 1          │ │
│ │ Nama: [______]  │ │
│ │ Qty: [_]        │ │
│ │ Satuan: [____]  │ │
│ │ Harga: [______] │ │
│ │ Total: Rp xxx   │ │
│ │ [Hapus]         │ │
│ └─────────────────┘ │
│ [+ Tambah Item]     │
├─────────────────────┤
│ Total: Rp 0         │
├─────────────────────┤
│ [Batal] [Simpan]    │
└─────────────────────┘
```

**3. Detail & Analisis RAB (`RABDetailPage`)**
```
Desktop (lg+):
┌─────────────────────────────────────────────────────┐
│ Header: Nama Proyek | Status Badge | Aksi           │
├─────────────────────────────────────────────────────┤
│ Summary Cards (3 columns):                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│ │ Budget   │ │ Realisasi│ │ Sisa     │            │
│ │ Rp 10jt  │ │ Rp 7jt   │ │ Rp 3jt   │            │
│ └──────────┘ └──────────┘ └──────────┘            │
├─────────────────────────────────────────────────────┤
│ Progress Bar: [████████░░] 70%                      │
├─────────────────────────────────────────────────────┤
│ Tabs: [Rincian Item] [Analisis Kategori]            │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Tabel Item/Analisis                            │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

Mobile (< md):
┌─────────────────────┐
│ Header + Actions    │
├─────────────────────┤
│ Summary Cards       │
│ (Stacked/Carousel): │
│ ┌─────────────────┐ │
│ │ Budget: Rp 10jt │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Realisasi: 70%  │ │
│ └─────────────────┘ │
├─────────────────────┤
│ Progress Bar        │
│ [████████░░] 70%    │
├─────────────────────┤
│ Tabs (Scrollable):  │
│ [Items] [Analisis]  │
├─────────────────────┤
│ Card List Items:    │
│ ┌─────────────────┐ │
│ │ Item Name       │ │
│ │ Budget: Rp xxx  │ │
│ │ Realisasi: Rp y │ │
│ │ Selisih: +/- Rp │ │
│ └─────────────────┘ │
└─────────────────────┘
```

**4. Integrasi Form Transaksi**
```
Desktop & Mobile:
┌─────────────────────────────────┐
│ Form Transaksi                  │
│ ...                             │
│ ☑ Hubungkan ke RAB              │
│ ┌─────────────────────────────┐ │
│ │ Pilih RAB: [Dropdown______] │ │
│ │ Pilih Item: [Dropdown_____] │ │
│ └─────────────────────────────┘ │
│ ...                             │
└─────────────────────────────────┘
```

### Komponen UI yang Dibutuhkan

| Komponen | Deskripsi | Responsive |
|----------|-----------|------------|
| `RABListPage` | Halaman daftar RAB | Grid → Card list on mobile |
| `RABFormDialog` | Form create/edit RAB dengan dynamic items | Full screen on mobile |
| `RABDetailPage` | Detail & analisis RAB | Stacked cards on mobile |
| `RABItemCard` | Card untuk item RAB | Compact on mobile |
| `RABAnalysisChart` | Chart penyerapan anggaran | Responsive width |
| `RABProgressBar` | Progress bar dengan persentase | Full width |
| `RABItemForm` | Form input item (nested in dialog) | Stacked fields on mobile |
| `RABSelector` | Dropdown untuk pilih RAB & item | Full width on mobile |

---

## 6. Pelaporan Siap Print
Laporan akan dibuat menggunakan modul `PrintLayout` khusus dengan format:

### Header Laporan
- Logo Aplikasi & Nama Akun
- Judul Proyek RAB
- Status Proyek & Tanggal Cetak

### Body Laporan
1. **Ringkasan Anggaran**: Total Anggaran vs Total Realisasi vs Sisa.
2. **Tabel Rincian RAB**: Kolom (No, Item, Qty, Satuan, Harga Satuan, Total Harga).
3. **Tabel Realisasi**: Perbandingan per kategori (Anggaran vs Terpakai vs Selisih).

### Footer
- Tanda Tangan (Pembuat & Penanggung Jawab).

### Print CSS (Responsive)
```css
@media print {
  /* Hide non-printable elements */
  .no-print, .sidebar, .navbar, .mobile-nav {
    display: none !important;
  }
  
  /* Optimize for A4 paper */
  .print-container {
    width: 100%;
    max-width: 210mm;
    margin: 0 auto;
    padding: 10mm;
  }
  
  /* Page break handling */
  .page-break {
    page-break-before: always;
  }
  
  /* Table styling for print */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
}
```

---

## 7. Langkah Integrasi RBAC
Menggunakan sistem permission yang sudah ada di `src/types/rbac.ts`:

| Role | Permission | Akses RAB |
|------|------------|-----------|
| **Owner** | Full access | Create, Edit, Delete, View, Manage |
| **Admin** | Full access | Create, Edit, Delete, View |
| **Editor** | canCreate, canEdit | Create, Edit item RAB, mencatat transaksi RAB |
| **Viewer** | canView only | View-only daftar dan analisis RAB |

### Implementasi Permission Guard
```tsx
// Di halaman RAB
<PermissionGuard permissions={['canCreate']}>
  <Button onClick={handleCreate}>Tambah RAB</Button>
</PermissionGuard>

<PermissionGuard permissions={['canEdit']}>
  <Button variant="ghost" onClick={() => handleEdit(rab)}>
    <Pencil className="h-4 w-4" />
  </Button>
</PermissionGuard>

<PermissionGuard permissions={['canDelete']}>
  <Button variant="ghost" onClick={() => handleDelete(rab.id)}>
    <Trash2 className="h-4 w-4" />
  </Button>
</PermissionGuard>
```

### Permission untuk RAB-specific Actions
Tambahkan ke `PermissionCheck` interface jika diperlukan:
```typescript
export interface PermissionCheck {
  // ... existing permissions
  canManageRAB?: boolean;  // Untuk fitur RAB khusus
}
```

---

## 8. Roadmap Implementasi

### Fase 1: Migrasi Database
- [ ] Buat migration file untuk tabel `rab`
- [ ] Buat migration file untuk tabel `rab_items`
- [ ] Buat migration file untuk alter tabel `transactions` (tambah kolom `rab_id`, `rab_item_id`)
- [ ] Tambahkan index untuk performa query
- [ ] Test migration di local environment

### Fase 2: Service Layer & Hooks
- [ ] Buat file `src/types/rab.ts` dengan semua type definitions
- [ ] Buat file `src/services/rabService.ts` dengan semua service methods
- [ ] Buat file `src/hooks/useRABs.ts` dengan React Query hooks
- [ ] Export types dari `src/types/index.ts`

### Fase 3: UI CRUD RAB
- [ ] Buat halaman `src/pages/RABPage.tsx` (list RAB)
- [ ] Buat komponen `src/components/features/rab/RABFormDialog.tsx`
- [ ] Buat komponen `src/components/features/rab/RABItemForm.tsx` (dynamic form items)
- [ ] Implementasi responsive design (mobile-first)
- [ ] Tambahkan navigasi ke Sidebar

### Fase 4: Integrasi Form Transaksi
- [ ] Update `TransactionFormDialog.tsx` dengan opsi pilih RAB
- [ ] Buat komponen `RABSelector.tsx` untuk dropdown RAB & item
- [ ] Update `transactionService.ts` untuk handle RAB relation
- [ ] Update `useTransactions.ts` hooks

### Fase 5: Dashboard Analisis & Laporan
- [ ] Buat halaman `src/pages/RABDetailPage.tsx` (detail & analisis)
- [ ] Buat komponen `RABAnalysisChart.tsx` (visualisasi penyerapan)
- [ ] Buat komponen `RABProgressBar.tsx`
- [ ] Implementasi print layout untuk laporan RAB
- [ ] Test responsive design di berbagai device

---

## 9. File Structure

```
src/
├── types/
│   ├── index.ts          # Export semua types
│   ├── rbac.ts           # Existing RBAC types
│   └── rab.ts            # NEW: RAB types
├── services/
│   ├── categoryService.ts
│   ├── transactionService.ts
│   ├── rbacService.ts
│   └── rabService.ts     # NEW: RAB service layer
├── hooks/
│   ├── useAuth.ts
│   ├── useCategories.ts
│   ├── useTransactions.ts
│   ├── usePermissions.ts
│   └── useRABs.ts        # NEW: RAB hooks
├── pages/
│   ├── DashboardPage.tsx
│   ├── TransactionsPage.tsx
│   ├── CategoriesPage.tsx
│   ├── ReportsPage.tsx
│   ├── SettingsPage.tsx
│   ├── RABPage.tsx       # NEW: RAB list page
│   └── RABDetailPage.tsx # NEW: RAB detail & analysis
├── components/
│   ├── features/
│   │   ├── transactions/
│   │   │   └── TransactionFormDialog.tsx  # UPDATE: Add RAB selector
│   │   └── rab/          # NEW: RAB components
│   │       ├── RABFormDialog.tsx
│   │       ├── RABItemForm.tsx
│   │       ├── RABItemCard.tsx
│   │       ├── RABSelector.tsx
│   │       ├── RABAnalysisChart.tsx
│   │       └── RABProgressBar.tsx
│   └── layout/
│       └── Sidebar.tsx   # UPDATE: Add RAB navigation
```

---

## 10. Dependencies

Tidak ada dependency tambahan yang diperlukan. Menggunakan:
- React Query (sudah ada) - untuk data fetching
- Tailwind CSS (sudah ada) - untuk styling responsive
- Lucide React (sudah ada) - untuk icons
- React Hook Form + Zod (sudah ada) - untuk form handling
- Recharts (jika perlu chart) - atau gunakan CSS-based visualization

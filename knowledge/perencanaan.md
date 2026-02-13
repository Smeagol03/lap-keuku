# 📒 Perencanaan Aplikasi Pencatat Keuangan
> Stack: Vite + React · Supabase · Vercel/Netlify

---

## 1. Gambaran Umum Proyek

**Nama Aplikasi:** FinTrack (atau sesuaikan)
**Tujuan:** Aplikasi pencatatan pemasukan & pengeluaran pribadi berbasis web yang ringan, real-time, dan aman.
**Target Pengguna:** Individu yang ingin memantau keuangan harian/bulanan.

---

## 2. Fitur Utama

### 2.1 MVP (Minimum Viable Product)
- [ ] Autentikasi pengguna via **Google OAuth** (Login / Logout)
- [ ] Dashboard ringkasan keuangan (total saldo, pemasukan, pengeluaran)
- [ ] Tambah / Edit / Hapus transaksi
- [ ] Kategori transaksi (Makanan, Transport, Gaji, dll.)
- [ ] Filter transaksi berdasarkan tanggal & kategori
- [ ] Riwayat transaksi dengan pagination

### 2.2 Fitur Lanjutan (Post-MVP)
- [ ] Laporan grafik bulanan (Recharts)
- [ ] Anggaran (Budget) per kategori
- [ ] Ekspor data ke CSV / PDF
- [ ] Multi-currency support
- [ ] Dark mode
- [ ] Notifikasi ketika mendekati batas anggaran

---

## 3. Tech Stack & Alasan Pemilihan

| Teknologi           | Kegunaan                          | Alasan                                           |
|---------------------|-----------------------------------|--------------------------------------------------|
| **Vite**            | Build tool & dev server           | Cepat, HMR instant, ringan                       |
| **React 18**        | UI Library                        | Ekosistem luas, component-based                  |
| **React Router v6** | Client-side routing               | Standard routing untuk React SPA                 |
| **Supabase**        | Auth + PostgreSQL + Realtime      | Google OAuth bawaan, gratis, mudah dikonfigurasi |
| **Zustand**         | State Management                  | Ringan, minimal boilerplate vs Redux             |
| **TanStack Query**  | Server state & caching            | Cache otomatis, sinkron dengan Supabase          |
| **Tailwind CSS**    | Styling                           | Utility-first, cepat prototyping                 |
| **shadcn/ui**       | Komponen UI siap pakai            | Aksesibel, bisa dikustomisasi                    |
| **Recharts**        | Visualisasi grafik                | Ringan, deklaratif                               |
| **date-fns**        | Manipulasi tanggal                | Modular, lebih ringan dari moment.js             |
| **Zod**             | Validasi schema                   | Type-safe, integrasi baik dengan React Hook Form |
| **React Hook Form** | Manajemen form                    | Performa tinggi, validasi mudah                  |

---

## 4. Struktur Proyek

```
fintrack/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/                    # Button, Input, Modal, Card, dll.
│   │   ├── layout/                # Navbar, Sidebar, Layout wrapper
│   │   └── features/
│   │       ├── auth/
│   │       │   ├── LoginPage.jsx
│   │       │   ├── AuthCallback.jsx   ← ⚠️ wajib ada untuk OAuth
│   │       │   └── ProtectedRoute.jsx
│   │       ├── dashboard/
│   │       ├── transactions/
│   │       ├── categories/
│   │       └── reports/
│   ├── hooks/
│   │   └── useAuth.js
│   ├── lib/
│   │   ├── supabase.js            # Inisialisasi Supabase client
│   │   └── utils.js
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── TransactionsPage.jsx
│   │   ├── ReportsPage.jsx
│   │   └── SettingsPage.jsx
│   ├── stores/
│   │   └── authStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── database/
│   └── setup.sql                  # Semua SQL: tabel, RLS, trigger
├── .env.local                     # ← jangan di-commit!
├── .env.example
├── vercel.json
└── package.json
```

---

## 5. Desain Database (Supabase / PostgreSQL)

Jalankan SQL berikut di **Supabase Dashboard → SQL Editor**.

### 5.1 Buat Semua Tabel

```sql
-- profiles (auto-create via trigger saat user login Google pertama kali)
CREATE TABLE IF NOT EXISTS profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT,
  avatar_url  TEXT,   -- diisi otomatis dari foto profil Google
  email       TEXT,
  currency    TEXT DEFAULT 'IDR',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- categories
CREATE TABLE IF NOT EXISTS categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  type        TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  icon        TEXT,
  color       TEXT DEFAULT '#6366f1',
  is_default  BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- transactions
CREATE TABLE IF NOT EXISTS transactions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  type        TEXT NOT NULL CHECK (type IN ('income', 'expense')),
  amount      NUMERIC(15, 2) NOT NULL CHECK (amount > 0),  -- ⚠️ pakai NUMERIC, bukan FLOAT
  description TEXT,
  date        DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- budgets
CREATE TABLE IF NOT EXISTS budgets (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  amount      NUMERIC(15, 2) NOT NULL CHECK (amount > 0),
  month       INT NOT NULL CHECK (month BETWEEN 1 AND 12),
  year        INT NOT NULL CHECK (year >= 2020),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, category_id, month, year)
);
```

### 5.2 Aktifkan Row Level Security (RLS)

```sql
ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories   ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets      ENABLE ROW LEVEL SECURITY;

-- Setiap user hanya bisa akses data miliknya sendiri
CREATE POLICY "own profiles"     ON profiles     FOR ALL USING (auth.uid() = id);
CREATE POLICY "own categories"   ON categories   FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "own transactions" ON transactions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "own budgets"      ON budgets      FOR ALL USING (auth.uid() = user_id);
```

### 5.3 Trigger Auto-Create Profile dari Data Google

```sql
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.email
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

### 5.4 Seed Kategori Default (opsional, untuk testing)

```sql
-- Ganti <USER_UUID> dengan UUID user yang sudah login
INSERT INTO categories (user_id, name, type, icon, color, is_default) VALUES
  ('<USER_UUID>', 'Gaji',      'income',  'briefcase',   '#22c55e', true),
  ('<USER_UUID>', 'Freelance', 'income',  'laptop',      '#10b981', true),
  ('<USER_UUID>', 'Makanan',   'expense', 'utensils',    '#f97316', true),
  ('<USER_UUID>', 'Transport', 'expense', 'car',         '#3b82f6', true),
  ('<USER_UUID>', 'Belanja',   'expense', 'shopping-bag','#8b5cf6', true),
  ('<USER_UUID>', 'Kesehatan', 'expense', 'heart',       '#ef4444', true),
  ('<USER_UUID>', 'Hiburan',   'expense', 'music',       '#ec4899', true),
  ('<USER_UUID>', 'Tagihan',   'expense', 'file-text',   '#64748b', true);
```

---

## 6. Setup Google OAuth — Langkah demi Langkah

### Step 1: Buat OAuth App di Google Cloud Console
1. Buka [console.cloud.google.com](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang ada
3. Pergi ke **APIs & Services → Credentials**
4. Klik **Create Credentials → OAuth 2.0 Client IDs**
5. Application type: **Web application**
6. Tambahkan **Authorized redirect URIs**:
   ```
   https://<project-ref>.supabase.co/auth/v1/callback
   ```
   *(project-ref bisa dilihat di Supabase → Settings → API)*
7. Simpan **Client ID** dan **Client Secret**

### Step 2: Aktifkan di Supabase
1. Buka **Supabase Dashboard → Authentication → Providers**
2. Cari **Google**, aktifkan toggle
3. Masukkan **Client ID** dan **Client Secret** dari Step 1
4. Simpan

### Step 3: Konfigurasi Redirect URL di Supabase
Pergi ke **Authentication → URL Configuration**:
```
Site URL:      http://localhost:5173              (development)
Redirect URLs: http://localhost:5173/auth/callback
               https://nama-app.vercel.app/auth/callback  (production — tambahkan setelah deploy)
```

### Step 4: Environment Variables
File `.env.local` (jangan di-commit ke Git):
```
VITE_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

File `.env.example` (di-commit sebagai template):
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 7. Alur Autentikasi Google OAuth

```
User klik "Masuk dengan Google"
  │
  ▼
supabase.auth.signInWithOAuth({ provider: 'google' })
  │
  ▼
Browser redirect ke halaman login Google
  │
  ▼
User pilih akun → Google redirect ke Supabase:
  https://<project>.supabase.co/auth/v1/callback
  │
  ▼
Supabase proses token → redirect ke app:
  http://localhost:5173/auth/callback  (dev)
  https://nama-app.vercel.app/auth/callback  (prod)
  │
  ▼
AuthCallback.jsx membaca session dari Supabase
  │
  ├── Session valid   → redirect /dashboard
  └── Session gagal  → redirect /login
```

---

## 8. Kode Implementasi

### 8.1 `src/lib/supabase.js` — Inisialisasi Client

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

### 8.2 `src/hooks/useAuth.js` — Hook Autentikasi

```js
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ambil session saat pertama kali mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setLoading(false)
    })

    // Subscribe perubahan status auth (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) fetchProfile(session.user.id)
        else {
          setProfile(null)
          setLoading(false)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (!error) setProfile(data)
    setLoading(false)
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) throw error
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,               // data user dari Supabase Auth
    profile,            // data profil dari tabel profiles
    loading,            // true saat pertama kali cek session
    signInWithGoogle,
    signOut,
    isAuthenticated: !!user,
  }
}
```

---

### 8.3 `src/features/auth/LoginPage.jsx` — Halaman Login

```jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function LoginPage() {
  const { signInWithGoogle, isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, loading, navigate])

  async function handleGoogleLogin() {
    try {
      await signInWithGoogle()
      // Browser akan redirect ke Google, tidak perlu navigate() di sini
    } catch (error) {
      console.error('Login gagal:', error.message)
      alert('Login gagal. Silakan coba lagi.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm text-center">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">💰 FinTrack</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Catat keuanganmu dengan mudah
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Masuk dengan Google
        </button>

        <p className="mt-6 text-xs text-gray-400">
          Dengan masuk, kamu menyetujui syarat & ketentuan penggunaan.
        </p>
      </div>
    </div>
  )
}
```

---

### 8.4 `src/features/auth/AuthCallback.jsx` — Handle Redirect OAuth

> ⚠️ Komponen ini **wajib ada**. Setelah user login via Google, Supabase akan redirect browser ke `/auth/callback`. Komponen ini membaca token dan meneruskan ke dashboard.

```jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        setError('Login gagal. Silakan coba lagi.')
        setTimeout(() => navigate('/login', { replace: true }), 3000)
        return
      }

      if (session) {
        navigate('/dashboard', { replace: true })
      } else {
        navigate('/login', { replace: true })
      }
    })
  }, [navigate])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 font-medium">{error}</p>
          <p className="text-gray-400 text-sm mt-1">Mengalihkan ke halaman login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-600">Sedang memverifikasi akun...</p>
      </div>
    </div>
  )
}
```

---

### 8.5 `src/features/auth/ProtectedRoute.jsx` — Guard Halaman

```jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
```

---

### 8.6 `src/App.jsx` — Routing Lengkap

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage      from './features/auth/LoginPage'
import AuthCallback   from './features/auth/AuthCallback'
import ProtectedRoute from './features/auth/ProtectedRoute'
// import DashboardPage, TransactionsPage, dll. sesuai kebutuhan

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login"         element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} /> {/* ⚠️ wajib ada */}

        {/* Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute><DashboardPage /></ProtectedRoute>
        }/>
        <Route path="/transactions" element={
          <ProtectedRoute><TransactionsPage /></ProtectedRoute>
        }/>
        <Route path="/reports" element={
          <ProtectedRoute><ReportsPage /></ProtectedRoute>
        }/>

        {/* Redirect */}
        <Route path="/"  element={<Navigate to="/dashboard" replace />} />
        <Route path="*"  element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

## 9. Fase Development

### Fase 1 — Setup & Fondasi (2–3 hari)
- [ ] Init proyek:
  ```bash
  npm create vite@latest fintrack -- --template react
  cd fintrack
  ```
- [ ] Install semua dependensi:
  ```bash
  npm install @supabase/supabase-js react-router-dom zustand
  npm install @tanstack/react-query react-hook-form zod @hookform/resolvers
  npm install recharts date-fns
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npx shadcn@latest init
  ```
- [ ] Isi `src/lib/supabase.js`
- [ ] Buat layout dasar (Navbar, Sidebar)
- [ ] Setup Supabase project & jalankan `database/setup.sql`

### Fase 2 — Autentikasi Google OAuth (1–2 hari)
- [ ] Setup Google OAuth di Google Cloud Console (Step 1–4 di atas)
- [ ] Buat `LoginPage.jsx`, `AuthCallback.jsx`, `ProtectedRoute.jsx`
- [ ] Buat `useAuth.js` hook
- [ ] Setup routing termasuk `/auth/callback`
- [ ] Test full flow: login → callback → dashboard → logout

### Fase 3 — Manajemen Kategori (1 hari)
- [ ] CRUD kategori (Tambah / Edit / Hapus)
- [ ] Seed data kategori default saat user pertama login

### Fase 4 — Transaksi (2–3 hari)
- [ ] Form tambah transaksi (amount, type, category, date, desc)
- [ ] Daftar riwayat dengan pagination
- [ ] Edit & hapus transaksi
- [ ] Filter berdasarkan tanggal, tipe, kategori
- [ ] Search transaksi

### Fase 5 — Dashboard (1–2 hari)
- [ ] Kartu ringkasan: Saldo, Pemasukan, Pengeluaran bulan ini
- [ ] Grafik pie pengeluaran per kategori
- [ ] Grafik tren pemasukan vs pengeluaran (bar/line)
- [ ] Daftar 5 transaksi terbaru

### Fase 6 — Laporan & Budget (2 hari)
- [ ] Halaman laporan bulanan
- [ ] Setup anggaran per kategori
- [ ] Progress bar budget vs aktual

### Fase 7 — Polish & Testing (2 hari)
- [ ] Responsive design (mobile-first)
- [ ] Loading states & skeleton screens
- [ ] Error handling global + toast notifications
- [ ] Empty states yang informatif
- [ ] Optimistic updates pada CRUD

---

## 10. Panduan Deployment

### Persiapan
```bash
npm run build    # pastikan tidak ada error
npm run preview  # cek hasil build lokal
```
Pastikan tidak ada referensi `localhost` yang hardcoded di kode.

### Opsi A: Vercel (Rekomendasi)
1. Push ke GitHub (pastikan `.env.local` ada di `.gitignore`)
2. Import di [vercel.com](https://vercel.com) → Framework: **Vite**
3. Tambahkan Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Buat `vercel.json` di root:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
5. Deploy

### Opsi B: Netlify
1. Build command: `npm run build` | Publish: `dist`
2. Tambahkan Environment Variables
3. Buat `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### Konfigurasi Supabase Setelah Deploy
Di **Supabase → Authentication → URL Configuration**, tambahkan URL production:
```
Site URL:      https://nama-app.vercel.app
Redirect URLs: https://nama-app.vercel.app/auth/callback
```

---

## 11. Keamanan & Best Practices

- Hanya gunakan `anon` key di frontend — **jangan pernah** expose `service_role` key
- RLS **wajib aktif** di semua tabel sebelum go live
- `.env.local` harus selalu ada di `.gitignore`
- Gunakan `NUMERIC(15, 2)` untuk menyimpan nilai uang (bukan `FLOAT` — rawan floating point error)
- Selalu validasi session sebelum render data sensitif
- Jangan hardcode callback URL — gunakan `window.location.origin` agar otomatis menyesuaikan environment

---

## 12. Estimasi Waktu Total

| Fase                  | Estimasi       |
|-----------------------|----------------|
| Setup & Fondasi       | 2–3 hari       |
| Autentikasi Google    | 1–2 hari       |
| Kategori              | 1 hari         |
| Transaksi             | 2–3 hari       |
| Dashboard             | 1–2 hari       |
| Laporan & Budget      | 2 hari         |
| Polish & Testing      | 2 hari         |
| **Total**             | **~11–15 hari** |

> Estimasi untuk 1 developer bekerja full-time (6–8 jam/hari).

---

## 13. Referensi

- [Supabase Auth — Google OAuth](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Vite Docs](https://vitejs.dev/guide/)
- [React Router v6](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [date-fns](https://date-fns.org/)

---

*Living document — perbarui seiring perkembangan proyek.*

<div align="center">
  <img src="public/logoBesar.png" alt="FinTrack Logo" width="150"/>
  <h1>FinTrack</h1>
  <p><strong>Catat keuanganmu dengan mudah dan cepat.</strong></p>
  <p>Fokus pada tujuan finansialmu, biarkan FinTrack yang urus pencatatannya.</p>
  <br />
</div>

![Cuplikan Aplikasi FinTrack](https://user-images.githubusercontent.com/810438/222871783-ac522a10-272d-4180-87a4-16d773f32488.png)
_Placeholder untuk cuplikan aplikasi Anda._

---

## ✨ Tentang FinTrack

FinTrack adalah aplikasi web modern yang dirancang untuk membantumu mengelola keuangan pribadi dengan cara yang paling sederhana. Lupakan kerumitan spreadsheet atau aplikasi yang membingungkan. Dengan antarmuka yang bersih dan intuitif, FinTrack membuat pencatatan transaksi harian, pemantauan pengeluaran, dan visualisasi arus kas menjadi aktivitas yang menyenangkan.

## 🚀 Fitur Unggulan

- **📊 Dashboard Interaktif:** Dapatkan ringkasan kondisi finansialmu dalam sekejap.
- **💸 Pencatatan Transaksi Cepat:** Tambah pemasukan dan pengeluaran dalam hitungan detik.
- **🗂️ Kategori Fleksibel:** Kelompokkan transaksimu dengan kategori yang bisa disesuaikan.
- **📈 Laporan Visual:** Pahami kebiasaan belanjamu melalui grafik dan laporan yang mudah dibaca.
- **🔐 Keamanan Terjamin:** Otentikasi aman dan data disimpan dengan Supabase.
- **📱 Desain Responsif:** Akses dan catat keuanganmu dari perangkat apa pun, desktop maupun mobile.

## 🛠️ Teknologi yang Digunakan

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Backend & Database:** [Supabase](https://supabase.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Manajemen State:** [Zustand](https://github.com/pmndrs/zustand) & [TanStack Query](https://tanstack.com/query)
- **Routing:** [React Router](https://reactrouter.com/)
- **Form:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Visualisasi Data:** [Recharts](https://recharts.org/)

## 🏁 Panduan Memulai

Ikuti langkah-langkah berikut untuk menjalankan FinTrack di lingkungan lokalmu.

### Prasyarat

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [pnpm](https://pnpm.io/)
- Akun gratis di [Supabase](https://supabase.com/)

### 1. Clone Repositori

```bash
git clone https://github.com/NAMA_USER/NAMA_REPO.git
cd NAMA_REPO
```
_Jangan lupa ganti `NAMA_USER/NAMA_REPO` dengan URL repositori Anda._

### 2. Instal Dependensi

```bash
npm install
```

### 3. Konfigurasi Lingkungan Supabase

- Buat proyek baru di [dashboard Supabase](https://app.supabase.com/).
- Pergi ke **Settings -> API**.
- Buat file baru bernama `.env` di root proyek Anda.
- Salin dan tempel isinya dari file `.env.example` (jika ada) atau tambahkan variabel berikut:

```env
VITE_SUPABASE_URL="URL_PROYEK_SUPABASE_ANDA"
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY="KUNCI_ANON_PUBLISHABLE_ANDA"
```
- Ganti nilai di atas dengan URL Proyek dan kunci `anon`, `public` dari pengaturan API Supabase Anda.

### 4. Jalankan Aplikasi

```bash
npm run dev
```

Aplikasi sekarang akan berjalan di `http://localhost:5173` (atau port lain yang tersedia).

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).

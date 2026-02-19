Cara Update Progres RAB
Progres RAB otomatis terupdate melalui transaksi pengeluaran yang dihubungkan ke RAB. Berikut alurnya:

1. Saat Membuat Transaksi Pengeluaran
Di form transaksi (TransactionFormDialog.tsx), ada opsi:

Checkbox "Hubungkan ke RAB" - untuk mengaktifkan linking
Dropdown "Pilih RAB" - pilih RAB yang aktif (status = 'active')
Dropdown "Pilih Item" (opsional) - pilih item RAB spesifik
2. Perhitungan Otomatis
Di rabService.ts, fungsi getRABAnalysis() menghitung:

Mengambil semua transaksi dengan rab_id yang sama
Menjumlahkan amount untuk mendapatkan totalRealization
Menghitung absorptionPercentage dan remainingBudget
3. Syarat Agar Progres Terupdate
RAB harus berstatus "active" - hanya RAB aktif yang muncul di dropdown transaksi
Transaksi harus bertipe "expense" - hanya pengeluaran yang dihitung
Transaksi harus di-link ke RAB - centang "Hubungkan ke RAB"
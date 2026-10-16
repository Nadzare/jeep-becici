# Design Guidelines — Jeep Puncak Becici Official

**Lokasi file:** `docs/DESIGN_GUIDELINES.md`  
**Proyek:** Landing page Next.js untuk Jeep Puncak Becici Official  
**Status:** Panduan desain awal. PRD final tetap menjadi sumber utama untuk fitur, ruang lingkup, dan acceptance criteria.

## 1. Tujuan dan prinsip

Dokumen ini menjadi acuan visual, UX, konten, fotografi, dan implementasi frontend.

**Urutan prioritas:** (1) PRD final, (2) panduan ini, (3) aksesibilitas/performa/SEO, (4) klarifikasi untuk informasi yang belum pasti. Jika PRD bertentangan dengan panduan ini, catat konfliknya—jangan memilih diam-diam.

### Arah visual: Modern Outdoor Adventure Editorial
Karakter brand: autentik, berani, hangat, dekat dengan alam, profesional, dan berorientasi pengalaman. Foto perjalanan menjadi fokus; informasi paket dan reservasi harus mudah ditemukan.

**Hindari:** tampilan generik seperti template AI, gradient/neon/glassmorphism berlebihan, animasi dekoratif, terlalu banyak kartu seragam, ikon ornamen, shadow besar, klaim pemasaran tanpa bukti, dan foto yang tidak relevan dengan usaha.

## 2. Palet warna

| Token | Hex | Penggunaan |
|---|---|---|
| Forest Green | `#243D32` | Identitas utama, header/footer gelap, section kontras |
| Warm Sand | `#E8E3D7` | Latar section hangat, panel editorial |
| Adventure Orange | `#F0A12B` | CTA utama dan aksen penting |
| Charcoal | `#252923` | Teks utama |
| Off White | `#F8F7F2` | Latar halaman |
| Muted Green | `#667067` | Teks sekunder dan metadata |
| White | `#FFFFFF` | Teks pada latar gelap |

Aturan:
- Gunakan Off White sebagai latar dasar, Forest Green sebagai warna identitas, dan Orange secara hemat.
- Jangan menjadikan setiap section warna berbeda atau menggunakan aksen pada semua elemen sekaligus.
- Teks sekunder harus tetap terbaca. Uji kontras kombinasi warna sebelum rilis; jangan menganggap semua pasangan warna otomatis aksesibel.
- Status tidak boleh dibedakan dengan warna saja; sertakan label atau ikon bila diperlukan.

```css
:root {
  --color-forest: #243D32;
  --color-sand: #E8E3D7;
  --color-adventure: #F0A12B;
  --color-charcoal: #252923;
  --color-off-white: #F8F7F2;
  --color-muted-green: #667067;
  --color-white: #FFFFFF;
}
```

## 3. Tipografi

- **Headline/display:** pilih salah satu, `Oswald` atau `Barlow Condensed`, bobot 600–700.
- **Body/UI:** pilih salah satu, `Inter` atau `Manrope`, bobot 400–600.
- Maksimal dua keluarga font utama. Sediakan fallback sans-serif.
- H1 besar, kuat, dan ringkas; H2 menandai section; H3 untuk paket/subbagian; body nyaman dibaca dengan line-height cukup.
- Gunakan uppercase hanya untuk label pendek, bukan seluruh isi halaman.
- Hindari paragraf panjang di hero dan judul yang terlalu penuh kata kunci.

## 4. Layout dan spacing

- Gunakan container dengan lebar maksimum konsisten, grid teratur, dan ruang kosong yang cukup.
- Terapkan spacing scale konsisten (misalnya kelipatan 4 atau 8 px).
- Batasi lebar baris teks panjang agar mudah dibaca.
- Variasikan komposisi secara editorial—foto besar, teks berdampingan, galeri, section gelap—tanpa membuat setiap section berbeda gaya.
- Hindari card bersarang, panel berlebihan, dan duplikasi dekorasi.
- Pada mobile, susun ulang konten dengan urutan logis; jangan hanya mengecilkan layout desktop.

## 5. Header dan navigasi

- Header ringkas, mudah dipahami, dan menampilkan logo hanya jika aset resmi tersedia.
- Navigasi boleh menuju Paket Trip, Pengalaman, Galeri, Lokasi, dan Kontak jika section tersebut memang ada.
- CTA reservasi harus mudah ditemukan tetapi tidak mendominasi seluruh halaman.
- Menu mobile harus dapat digunakan dengan sentuhan dan keyboard.
- Jika header sticky, pastikan tidak menutupi target anchor.
- Jangan menambahkan link sosial atau halaman yang belum dikonfirmasi.

## 6. Hero section

Hero harus segera menjelaskan: layanan apa yang ditawarkan, pengalaman apa yang bisa dipesan, dan cara memulai reservasi.

Komposisi yang disarankan:
- Foto autentik jeep dan alam yang relevan.
- Headline singkat, subheadline informatif, CTA utama untuk reservasi, dan CTA sekunder menuju paket.
- Overlay gelap hanya bila dibutuhkan agar teks terbaca.
- Lokasi hanya ditampilkan setelah alamat/titik lokasi dikonfirmasi.
- Atur crop dan `object-position` untuk desktop maupun mobile.
- Jangan memasukkan klaim, harga, fasilitas, rating, atau informasi operasional yang belum diverifikasi.

## 7. Paket trip dan harga

Paket harus mudah dibandingkan. Tampilkan nama, harga yang valid, ringkasan, fasilitas yang benar, dan CTA pemesanan. Jangan menandai paket sebagai “Terlaris” atau “Paling Hemat” tanpa bukti.

**Harga berikut berasal dari materi visual awal dan belum boleh dianggap final sebelum dikonfirmasi:**

| Nama paket pada materi | Harga pada materi |
|---|---:|
| Fun Trip | Rp400.000 |
| Short Trip | Rp450.000 |
| Medium Trip | Rp550.000 |
| Long Trip | Rp650.000 |
| Full Offroad | Rp500.000 |
| Sunrise Trip | Rp650.000 |
| Private Trip | Rp850.000 |
| Special Trip | Rp1.000.000 |

Konfirmasi sebelum publikasi:
- Nama dan harga terbaru.
- Harga per jeep, per orang, atau per trip.
- Kapasitas penumpang, durasi, rute, titik keberangkatan.
- Fasilitas per paket, biaya tambahan, aturan pemesanan, pembatalan, dan batasan peserta.
- Jangan menganggap semua paket memiliki fasilitas yang sama. Jika belum pasti, tandai internal sebagai `NEEDS CONFIRMATION` dan jangan tampilkan sebagai fakta.

## 8. Fotografi dan aset

Foto autentik lebih penting daripada jumlah foto.

**Urutan sumber:** foto dari pemilik/pengelola → kanal resmi Jeep Puncak Becici Official setelah sumber dan izin dikonfirmasi → fotografer/mitra berizin → foto stok berlisensi sebagai placeholder sementara.

Google Images hanya alat menemukan sumber. Foto yang muncul di Google tidak otomatis bebas dipakai. Jangan menyalin foto dari akun lain tanpa memastikan hak penggunaan.

Aturan aset:
- Simpan lokal di `public/images/jeep-puncak-becici/`; jangan gunakan hotlink permanen.
- Jangan menghapus watermark atau mengubah foto secara menyesatkan.
- Jangan menampilkan foto AI atau stok seolah dokumentasi asli armada, lokasi, atau pelanggan.
- Foto orang yang dapat dikenali memerlukan izin yang sesuai.
- Catat sumber, pemilik, URL asal, status izin, nama file, dan section pemakaian di `docs/ASSET_SOURCES.md`.
- Jika izin belum jelas, beri status `PENDING APPROVAL` dan gunakan placeholder.
- Jangan memakai foto milik operator lain hanya karena lokasinya sama.

Struktur yang disarankan:
```text
public/images/jeep-puncak-becici/
├── hero/
├── packages/
├── gallery/
├── fleet/
└── placeholders/
```

Contoh pola nama file (bukan aset yang sudah tersedia): `hero-jeep-pine-forest.webp`, `fun-trip-jeep-stream.webp`, `gallery-offroad-01.webp`.

## 9. Galeri dan pengalaman

- Tampilkan variasi pengalaman yang benar-benar relevan: armada, hutan pinus, aktivitas off-road, peserta, dan momen perjalanan jika tersedia serta diizinkan.
- Jangan mengulang foto yang sama untuk memenuhi grid.
- Jika aset masih sedikit, gunakan foto berkualitas yang tersedia dan placeholder internal, bukan foto tak relevan.
- Lightbox bersifat opsional; jika digunakan, harus mudah ditutup, dapat dioperasikan dengan keyboard, dan tidak mengunci pengguna.

## 10. Tombol dan reservasi

- CTA utama menggunakan Adventure Orange dengan teks berkontras memadai; CTA sekunder dapat menggunakan Forest Green atau outline.
- Bedakan tombol utama, tombol sekunder, dan link.
- Implementasikan hover, focus, active, dan disabled state. Semua tombol harus punya aksi nyata.
- Jangan menyampaikan informasi penting hanya melalui hover.

**WhatsApp:** nomor awal yang tampak pada materi adalah `+62 857-2525-0851` dan tautan katalog `https://wa.me/c/6285725250851`. Verifikasi ulang ke pemilik sebelum produksi. Jika pengunjung memilih paket, sertakan nama paket dalam pesan awal hanya jika datanya telah valid. Klik WhatsApp bukan bukti reservasi berhasil—tombol hanya membuka kanal komunikasi.

Jika memakai form, minta data minimum, beri label jelas, validasi input, dan tampilkan pesan error/sukses. Jangan mengumpulkan data sensitif yang tidak diperlukan.

## 11. Ikon, bentuk, dan animasi

- Gunakan satu set ikon konsisten dan hanya bila membantu pemahaman.
- Hindari emoji sebagai pengganti ikon UI utama.
- Gunakan radius kecil–sedang; jangan membulatkan semua elemen berlebihan.
- Border/shadow hanya untuk menunjukkan batas atau elevasi yang bermakna.
- Animasi harus singkat, ringan, dan membantu feedback; hindari parallax berat, autoplay video bersuara, dan animasi scroll yang mengganggu.
- Hormati `prefers-reduced-motion`.

## 12. Responsive design

**Mobile:** satu kolom bila diperlukan, CTA mudah disentuh, hero tetap terbaca, crop foto sesuai, tanpa horizontal overflow.  
**Tablet:** gunakan dua kolom hanya jika ruang dan keterbacaan memadai.  
**Desktop:** gunakan grid editorial, batasi lebar teks, dan hindari layout yang terlalu melebar.

Uji minimal pada viewport sekitar 360, 390, 768, 1024, dan 1440 px. Pastikan menu, dialog, galeri, dan tombol mudah dioperasikan dengan sentuhan maupun keyboard.

## 13. Aksesibilitas

- Gunakan elemen semantik dan hierarki heading yang logis.
- Semua kontrol harus bisa digunakan dengan keyboard dan memiliki focus state yang terlihat.
- Gunakan alt text deskriptif untuk foto informatif; gunakan alt kosong untuk gambar dekoratif.
- Informasi penting tidak boleh hanya tersedia di dalam gambar.
- Periksa kontras, label input, nama tombol, dialog, dan urutan fokus.
- Jangan mengandalkan warna saja untuk menyampaikan status.
- Periksa halaman pada zoom browser dan ukuran teks yang diperbesar.

## 14. Performa dan SEO

- Gunakan `next/image` jika sesuai dengan versi dan konfigurasi Next.js yang ada.
- Optimalkan gambar (WebP/AVIF bila sesuai), gunakan dimensi/aspect ratio, dan lazy-load gambar di bawah fold.
- Jangan menunda gambar hero utama yang terlihat pertama kali jika itu memperburuk tampilan awal.
- Siapkan metadata title, description, Open Graph, dan favicon sesuai data brand yang terverifikasi.
- Gunakan teks layanan secara natural; hindari keyword stuffing.
- Data terstruktur hanya boleh memuat informasi valid. Jangan menambahkan rating, review, harga, atau jam operasional yang belum terverifikasi.
- Pastikan tautan WhatsApp, Instagram, peta, dan anchor berfungsi.

## 15. Konten dan kepercayaan

- Gunakan Bahasa Indonesia yang natural, jelas, dan konsisten.
- Klaim seperti “nomor satu”, “paling aman”, “termurah”, jumlah pelanggan, rating, testimoni, asuransi, sertifikasi, atau mitra harus didukung informasi yang disetujui.
- Fasilitas seperti pemandu, dokumentasi, tiket masuk, asuransi, atau welcome drink harus dipastikan berlaku untuk paket mana.
- Jangan membuat urgensi palsu seperti “tersisa 2 slot”.
- Informasi yang belum dikonfirmasi harus ditandai internal dan tidak boleh lolos ke produksi.

## 16. Struktur landing page

Urutan final mengikuti PRD. Sebagai arah awal, jika relevan:
1. Header & navigasi
2. Hero dan CTA reservasi
3. Pengenalan pengalaman
4. Daftar paket
5. Pengalaman/keunggulan yang terverifikasi
6. Galeri
7. Cara reservasi
8. Lokasi dan kontak resmi
9. FAQ dengan jawaban terverifikasi
10. CTA akhir dan footer

Jangan memaksakan section yang tidak dibutuhkan PRD. Jangan menambahkan login, dashboard, payment gateway, atau booking system kompleks jika tidak termasuk scope.

## 17. Instruksi implementasi untuk coding agent

Sebelum coding:
1. Baca seluruh PRD final di `docs/` (gunakan nama file aktual yang tersedia).
2. Audit `package.json`, versi Next.js, routing, styling, komponen, dan struktur proyek.
3. Ekstrak kebutuhan, konten, fitur, dan acceptance criteria dari PRD.
4. Baca panduan ini dan `docs/ASSET_SOURCES.md` bila tersedia.
5. Buat daftar informasi yang belum terverifikasi; jangan mengarang penggantinya.

Saat coding:
- Pertahankan stack dan konvensi yang sudah ada; jangan mengganti framework atau dependency besar tanpa alasan.
- Buat komponen reusable sesuai kebutuhan dan hindari satu komponen raksasa.
- Hindari duplikasi CSS dan dependency tambahan hanya untuk efek dekoratif kecil.
- Pastikan semua link dan tombol memiliki tujuan nyata.
- Jangan mengubah logo/aset resmi tanpa persetujuan.

Sesudah coding:
- Jalankan lint, type-check, dan build jika script tersedia; laporkan hasil sebenarnya.
- Uji mobile/desktop, link, gambar, focus state, overflow, dan console.
- Laporkan file yang dibuat/diubah, hasil pengujian, sumber foto/status izin, dan pertanyaan yang masih perlu konfirmasi.

## 18. Checklist sebelum rilis

### Visual
- [ ] Warna dan tipografi konsisten.
- [ ] Hierarki informasi jelas, tidak berlebihan dekorasi.
- [ ] CTA mudah ditemukan.
- [ ] Mobile dan desktop telah diperiksa.

### Konten/aset
- [ ] Harga, nama paket, satuan harga, durasi, kapasitas, dan fasilitas dikonfirmasi.
- [ ] Nomor WhatsApp, akun sosial, dan lokasi resmi diverifikasi.
- [ ] Sumber dan izin penggunaan setiap foto tercatat.
- [ ] Tidak ada foto pihak lain yang disajikan seolah milik klien.
- [ ] Tidak ada testimoni/klaim buatan.
- [ ] Tidak ada `TODO`, placeholder, atau data belum terverifikasi yang tampil ke pengunjung.

### Teknis
- [ ] Tidak ada horizontal overflow.
- [ ] Semua tombol dan link berfungsi.
- [ ] Gambar dioptimalkan.
- [ ] Metadata dasar sesuai.
- [ ] Alt text, focus state, dan navigasi keyboard diperiksa.
- [ ] Lint/type-check/build dijalankan jika tersedia dan hasilnya dilaporkan.
- [ ] Tidak ada error kritis di console.

---

**Prinsip akhir:** buat website yang terasa seperti brand petualangan outdoor yang nyata dan terpercaya. Foto autentik, informasi paket yang benar, navigasi jelas, dan reservasi mudah lebih penting daripada efek visual yang ramai.

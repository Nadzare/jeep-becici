# Asset Sources & Usage Register — Jeep Puncak Becici Official

**File:** `docs/ASSET_SOURCES.md`  
**Project:** Website landing page Jeep Puncak Becici Official  
**Purpose:** Mencatat asal, pemilik, izin penggunaan, status verifikasi, dan penempatan setiap aset visual yang digunakan pada website.

> **Penting:** Dokumen ini adalah register kerja, bukan bukti bahwa suatu foto/logo sudah memiliki izin. Jangan mempublikasikan aset berstatus `PENDING` atau `UNKNOWN` sebelum statusnya diselesaikan. Hasil Google Images bukan bukti kepemilikan atau izin.

---

## 1. Aturan penggunaan aset

1. Prioritaskan aset yang diberikan langsung oleh pemilik/pengelola Jeep Puncak Becici Official.
2. Kanal resmi dapat digunakan untuk menemukan dan menghubungi pemilik aset, tetapi keberadaan foto pada akun resmi tidak otomatis menjelaskan izin untuk mengunduh, mengedit, atau memublikasikannya kembali di website. Minta konfirmasi jika izinnya belum jelas.
3. Google Images adalah alat pencarian, bukan sumber lisensi. Buka halaman asal dan periksa pemilik, lisensi, serta syarat penggunaan.
4. Jangan menyalin foto dari operator jeep lain, situs wisata lain, fotografer, atau pengunjung hanya karena fotonya menampilkan lokasi Puncak Becici.
5. Jangan menghapus watermark, menghapus atribusi, atau mengedit foto dengan cara yang menyesatkan.
6. Jangan menampilkan gambar stok atau gambar AI seolah-olah dokumentasi asli armada, lokasi, pelanggan, atau layanan klien.
7. Untuk foto yang menampilkan orang yang dapat dikenali, pastikan izin yang sesuai telah diperoleh sebelum digunakan untuk promosi.
8. Jangan memakai hotlink sebagai solusi permanen. Setelah hak penggunaan dipastikan, simpan salinan lokal yang diizinkan di folder `public/images/`.
9. Jika lisensi mensyaratkan atribusi, catat dan tampilkan atribusi sesuai ketentuannya.
10. Jika sumber, pemilik, atau izin belum diketahui, beri status `PENDING` atau `UNKNOWN` dan gunakan placeholder sementara.

## 2. Kanal resmi dan sumber awal untuk verifikasi

| Sumber | URL | Kegunaan | Status |
|---|---|---|---|
| Instagram Jeep Puncak Becici Official | https://www.instagram.com/jeep_puncak_becici_official/ | Menemukan dokumentasi dan menghubungi pengelola untuk meminta aset asli/izin | `NEEDS VERIFICATION` |
| Tautan katalog WhatsApp yang tampak pada materi referensi | https://wa.me/c/6285725250851 | Memeriksa katalog, nama paket, dan kanal komunikasi | `NEEDS VERIFICATION` |
| Foto/materi yang dikirim langsung oleh pemilik | Catat lokasi file atau pesan saat diterima | Sumber utama untuk foto, logo, dan materi brand | `AWAITING CLIENT ASSETS` |

**Catatan:** URL dan nomor kontak di atas berasal dari materi referensi proyek yang tersedia saat dokumen ini disusun. Verifikasi kembali sebelum publikasi. Jangan menganggap foto dari akun sosial otomatis boleh dipakai ulang tanpa konfirmasi yang sesuai.

## 3. Status aset

Gunakan status berikut secara konsisten:

- `APPROVED` — sumber dan hak penggunaan telah diverifikasi serta disetujui untuk penggunaan yang dimaksud.
- `PENDING` — sumber ditemukan, tetapi izin atau detail penggunaan belum dikonfirmasi.
- `NEEDS VERIFICATION` — identitas sumber, keaslian, atau kepemilikan masih perlu diperiksa.
- `REJECTED` — tidak boleh digunakan, tidak relevan, atau izin ditolak.
- `PLACEHOLDER` — aset sementara untuk development; tidak boleh lolos ke produksi.
- `UNKNOWN` — informasi sumber/izin tidak tersedia.

Jangan mengubah status menjadi `APPROVED` hanya karena gambar dapat diunduh atau ditemukan di akun publik.

## 4. Asset register

Tambahkan satu baris untuk **setiap file visual** yang dipakai atau dipertimbangkan.

| ID | Nama file lokal | Jenis/penempatan | URL sumber / lokasi asal | Pemilik/kreator | Lisensi/izin | Atribusi wajib | Status | Catatan |
|---|---|---|---|---|---|---|---|---|
| A-001 | `hero/hero-jeep-puncak-becici.jpg` | Hero background | Local development asset (AI-rendered editorial prototype) | AI generation reference | Prototype only - Not for final production | — | `PLACEHOLDER` | Visual mockup armada jeep di hutan pinus Becici. Wajib diganti dengan foto armada asli klien setelah diserahkan. |
| A-002 | `packages/fun-trip.jpg` | Kartu Paket: Fun Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan jeep melintasi pedesaan dan terasering persawahan. Wajib diverifikasi dengan rute Fun Trip resmi. |
| A-003 | `packages/short-trip.jpg` | Kartu Paket: Short Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan jeep di jalur pinus. Menunggu foto dokumentasi Short Trip klien. |
| A-004 | `packages/medium-trip.jpg` | Kartu Paket: Medium Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan barisan armada jeep. Menunggu foto dokumentasi Medium Trip klien. |
| A-005 | `packages/long-trip.jpg` | Kartu Paket: Long Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan aktivitas petualangan air / susur sungai. Menunggu konfirmasi rute dan foto asli. |
| A-006 | `packages/full-offroad.jpg` | Kartu Paket: Full Offroad | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan aksi jeep di jalur tanah berlumpur ekstrim. Menunggu foto offroad resmi klien. |
| A-007 | `packages/sunrise-trip.jpg` | Kartu Paket: Sunrise Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan pemandangan gardu pandang matahari terbit di atas kabut bukit. Menunggu foto spot sunrise resmi. |
| A-008 | `packages/private-trip.jpg` | Kartu Paket: Private Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan trip privat di alam terbuka. Menunggu aset resmi klien. |
| A-009 | `packages/special-trip.jpg` | Kartu Paket: Special Trip | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Menampilkan panorama khusus petualangan. Menunggu kepastian isi paket dan foto dari klien. |
| A-010 | `gallery/gallery-pine-forest.jpg` | Galeri foto 1 | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Suasana hutan pinus dan jeep Puncak Becici. Menunggu foto galeri asli. |
| A-011 | `gallery/gallery-river-splash.jpg` | Galeri foto 2 | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Atraksi susur sungai offroad. Menunggu foto dokumentasi asli. |
| A-012 | `gallery/gallery-mud-trail.jpg` | Galeri foto 3 | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Jalur tanah & lumpur menantang. Menunggu foto dokumentasi asli. |
| A-013 | `gallery/gallery-sunrise.jpg` | Galeri foto 4 | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Pemandangan sunrise berkabut Puncak Becici. Menunggu foto asli klien. |
| A-014 | `gallery/gallery-village-trail.jpg` | Galeri foto 5 | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Jalur pedesaan dan terasering Dlingo. Menunggu foto asli klien. |
| A-015 | `gallery/gallery-fleet-basecamp.jpg` | Galeri foto 6 & Fleet | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Deretan armada jeep di basecamp hutan pinus. Wajib diganti dengan foto armada riil pengelola. |
| A-016 | `hero/jeep-hero.png` | Hero Jeep Cutout PNG | Local development asset (AI-rendered turquoise 4x4 open-top jeep) | AI generation reference | Prototype only - Not client fleet | — | `PLACEHOLDER` | Ilustrasi visual jeep 4x4 toska atap terbuka dengan latar transparan untuk focal point hero split layout. Bukan armada riil klien. |
| A-017 | `hero/hero-forest-bg.jpg` | Hero Backdrop Image | Local development asset | AI generation reference | Prototype only | — | `PLACEHOLDER` | Panorama siluet hutan pinus Becici dan pancaran fajar untuk latar belakang hero section. |
| A-018 | `textures/distressed-grunge.png` | Tekstur Masker Tipografi | Procedural asset | Local generated pattern | Open commercial use | — | `APPROVED` | Tekstur masker CSS untuk efek bercak distressed/grunge pada headline Bebas Neue. |

Catatan: Seluruh file berstatus `PLACEHOLDER` diperuntukkan untuk demonstrasi tata letak UI/UX dan bukan klaim armada asli. Foto resmi armada dan dokumentasi wisata Jeep Puncak Becici Official masih perlu diserahkan dan diverifikasi bersama pemilik usaha sebelum website naik ke tahap produksi publik.

## 5. Folder aset lokal

Simpan file yang sudah disetujui di struktur yang konsisten:

```text
public/images/jeep-puncak-becici/
├── hero/
├── packages/
├── gallery/
├── fleet/
└── placeholders/
```

Panduan:
- Gunakan nama deskriptif, huruf kecil, dan tanda hubung.
- Contoh pola nama: `hero-jeep-pine-forest.webp`, `package-fun-trip-01.webp`, `gallery-offroad-01.webp`.
- Nama tersebut hanya contoh; jangan membuat referensi ke file yang belum tersedia.
- Optimalkan ukuran dan format tanpa mengubah isi foto secara menyesatkan.
- Jangan simpan dokumen izin atau data pribadi pelanggan di folder `public/`.

## 6. Checklist verifikasi per aset

Sebelum aset digunakan di produksi, pastikan:

- [ ] File dan sumber asal teridentifikasi.
- [ ] Pemilik/kreator diketahui.
- [ ] Izin atau lisensi mencakup penggunaan pada website bisnis/komersial.
- [ ] Hak untuk melakukan crop, kompresi, atau pengeditan yang diperlukan telah dipastikan bila relevan.
- [ ] Syarat atribusi dicatat dan dipenuhi.
- [ ] Izin penggunaan orang yang dapat dikenali sudah sesuai bila diperlukan.
- [ ] Foto relevan dengan usaha, paket, kendaraan, dan lokasi yang ditampilkan.
- [ ] Nama file lokal dan section website dicatat.
- [ ] Status di tabel diperbarui.
- [ ] Aset berstatus `APPROVED` sebelum dipakai di produksi.

## 7. Arahan khusus untuk coding agent

Sebelum memilih atau mengunduh gambar:

1. Baca `docs/PRD_Jeep_Puncak_Becici_Official.docx` (atau nama file PRD aktual) dan `docs/DESIGN_GUIDELINES.md`.
2. Audit aset yang sudah tersedia di repository terlebih dahulu; jangan mengunduh duplikat.
3. Prioritaskan meminta atau menggunakan aset resmi yang disediakan klien.
4. Jika mencari di internet, buka halaman sumber asli dan periksa pemilik serta lisensi; jangan hanya mengambil URL gambar dari hasil pencarian.
5. Jangan melakukan scraping yang melanggar ketentuan situs atau mencoba melewati pembatasan akses.
6. Jangan menggunakan foto yang belum jelas izinnya pada production build. Gunakan placeholder netral selama development.
7. Jangan membuat klaim bahwa foto merupakan milik Jeep Puncak Becici Official kecuali telah diverifikasi.
8. Catat setiap aset di tabel register sebelum mengintegrasikannya.
9. Jangan mengarang nama file atau menganggap aset tersedia. Periksa keberadaan file di filesystem.
10. Pada laporan akhir, sebutkan aset yang digunakan, sumbernya, status izin, aset yang masih placeholder, dan tindakan yang masih membutuhkan konfirmasi klien.

## 8. Daftar kebutuhan aset untuk diminta kepada klien

- [ ] Logo resmi resolusi tinggi (PNG/SVG jika tersedia).
- [ ] Foto hero: jeep dan suasana lokasi, resolusi besar.
- [ ] Foto setiap paket/trip yang benar-benar sesuai.
- [ ] Foto armada yang saat ini digunakan.
- [ ] Foto galeri tambahan yang disetujui.
- [ ] Foto atau video suasana perjalanan (pastikan izin orang yang tampil).
- [ ] File poster paket terbaru, jika ada.
- [ ] Informasi apakah harga, fasilitas, dan foto boleh ditampilkan secara publik.
- [ ] Panduan penggunaan brand atau warna/logo jika tersedia.
- [ ] Konfirmasi tertulis untuk aset dari kanal sosial jika izin pemakaian ulang belum jelas.

## 9. Audit sebelum production

Cari placeholder, file yang belum terdaftar, dan status selain `APPROVED`. Pastikan tidak ada aset `PENDING`, `UNKNOWN`, `REJECTED`, atau `PLACEHOLDER` yang digunakan pada halaman publik. Jika placeholder diperlukan selama development, pastikan jelas ditandai dan diganti sebelum rilis.

**Prinsip akhir:** setiap aset visual yang dipublikasikan harus relevan, sumbernya terlacak, dan penggunaannya telah diizinkan. Jika ragu, jangan publikasikan—gunakan placeholder dan minta konfirmasi.

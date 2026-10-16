# Jeep Puncak Becici Official — Landing Page

Website resmi promosi dan reservasi wisata jeep petualangan outdoor di kawasan hutan pinus Puncak Becici, Dlingo, Bantul, D.I. Yogyakarta.

Dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS** dengan konsep desain **Modern Outdoor Adventure Editorial**.

---

## 🌲 Fitur & Keunggulan

- **Editorial Outdoor Design:** Perpaduan visual alam autentik hutan pinus, jalur perbukitan, serta palet warna alami (*Forest Green*, *Warm Sand*, dan aksen *Adventure Orange*).
- **Katalog 8 Paket Trip:**
  1. **Fun Trip** — Rp400.000
  2. **Short Trip** — Rp450.000
  3. **Medium Trip** — Rp550.000
  4. **Long Trip** — Rp650.000
  5. **Full Offroad** — Rp500.000
  6. **Sunrise Trip** — Rp650.000
  7. **Private Trip** — Rp850.000
  8. **Special Trip** — Rp1.000.000
- **Integrasi WhatsApp Resmi Terpusat:** Nomor bisnis `+62 857-2525-0851` dengan pesan otomatis terformat per paket perjalanan.
- **Aksesibilitas & Interaktivitas Penuh:**
  - Navigasi anchor dan drawer menu mobile responsif.
  - Galeri potret dengan modal lightbox interaktif (navigasi keyboard `ESC`, panah kiri/kanan).
  - Accordion FAQ dengan semantik `aria-expanded`.
  - Floating WhatsApp action button responsif.
- **Fondasi SEO & Metadata:** Metadata Open Graph lengkap, dynamic `sitemap.ts`, dan `robots.ts`.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library UI:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Tipografi:** Google Fonts (Oswald & Inter via `next/font/google`)

---

## 🚀 Memulai Pengembangan Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/Nadzare/jeep-becici.git
   cd jeep-becici
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

4. **Build untuk produksi:**
   ```bash
   npm run build
   npm run start
   ```

5. **Linting kode:**
   ```bash
   npm run lint
   ```

---

## 📁 Struktur Direktori

```text
jeep-becici/
├── app/                  # Next.js App Router (layout, page, sitemap, robots)
├── components/           # Komponen UI & Layout
│   ├── layout/           # SiteHeader, SiteFooter
│   ├── sections/         # Hero, Packages, Experience, Facilities, Gallery, FAQ, dll.
│   └── ui/               # Button, SectionHeading, Icons, FloatingWhatsApp
├── data/                 # Data terpusat paket, site config, FAQ, fasilitas
├── docs/                 # PRD, Design Guidelines, Asset Sources Register
├── lib/                  # Helper WhatsApp URL builder & SEO
├── public/images/        # Aset visual & galeri terstruktur
└── types/                # Definisi antarmuka TypeScript
```

---

## 📄 Dokumentasi Proyek

- [PRD (Product Requirements Document)](docs/PRD_Jeep_Puncak_Becici_Official.docx)
- [Design Guidelines](docs/DESIGN_GUIDELINES.md)
- [Asset Sources Register](docs/ASSET_SOURCES.md)

---

## ⚖️ Lisensi & Hak Cipta

© 2026 **Jeep Puncak Becici Official**. Seluruh hak cipta dilindungi.

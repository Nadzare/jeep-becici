import { PackageItem, ExperienceItem, FAQItem, GalleryPhoto } from "@/types/package";

export const PACKAGES: PackageItem[] = [
  {
    id: "fun-trip",
    slug: "fun-trip",
    name: "Fun Trip",
    priceAmount: 400000,
    priceDisplay: "Rp400.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Trip santai melintasi perbukitan pinus, perkampungan asri, dan pemandangan terasering persawahan hijau Dlingo.",
    category: "standard",
    categoryLabel: "Standard Trip",
    badge: "Cocok untuk Pemula",
    highlights: [
      "Jalur santai ramah keluarga & teman",
      "Pemandangan terasering sawah & desa",
      "Spot foto panoramik hutan pinus",
    ],
    routeHighlights: [
      "Basecamp Puncak Becici",
      "Kawasan Hutan Pinus",
      "Keliling Perkampungan Dlingo",
      "Spot Terasering Persawahan",
    ],
    includedAmenities: [
      "Armada Jeep 4x4",
      "Pemandu / Driver Berpengalaman",
      "Dokumentasi Foto",
      "Tiket Masuk Lokasi",
    ],
    image: "/images/jeep-puncak-becici/packages/fun-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya tertarik dengan paket Fun Trip (Rp400.000). Mohon informasi durasi, rute, dan ketersediaan jadwalnya.",
  },
  {
    id: "short-trip",
    slug: "short-trip",
    name: "Short Trip",
    priceAmount: 450000,
    priceDisplay: "Rp450.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Petualangan singkat berdurasi pas untuk menjelajahi kanopi pinus Becici dan jalan setapak berbatu yang memikat.",
    category: "standard",
    categoryLabel: "Standard Trip",
    badge: "Paling Fleksibel",
    highlights: [
      "Eksplorasi ringkas & berkesan",
      "Sensasi berkendara jeep atap terbuka",
      "Spot foto ikonik hutan pinus",
    ],
    routeHighlights: [
      "Basecamp Puncak Becici",
      "Jalur Lingkar Pinus Becici",
      "Pemberhentian Panorama Alam",
      "Trek Pedesaan Sekitar",
    ],
    includedAmenities: [
      "Armada Jeep 4x4",
      "Pemandu / Driver Berpengalaman",
      "Dokumentasi Perjalanan",
      "Tiket Masuk Spot",
    ],
    image: "/images/jeep-puncak-becici/packages/short-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya ingin reservasi paket Short Trip (Rp450.000). Mohon info ketersediaan armada dan jadwalnya.",
  },
  {
    id: "medium-trip",
    slug: "medium-trip",
    name: "Medium Trip",
    priceAmount: 550000,
    priceDisplay: "Rp550.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Kombinasi ideal antara rute perbukitan sejuk, jalur pedesaan, serta trek tanah ringan yang menyenangkan.",
    category: "standard",
    categoryLabel: "Standard Trip",
    badge: "Paling Diminati",
    highlights: [
      "Rute lebih panjang & bervariasi",
      "Jelajah hutan pinus & lembah Dlingo",
      "Waktu eksplorasi & foto lebih leluasa",
    ],
    routeHighlights: [
      "Puncak Becici & Area Pinus",
      "Lembah Perbukitan Dlingo",
      "Perkampungan Tradisional",
      "Spot Foto Alam & Istirahat",
    ],
    includedAmenities: [
      "Armada Jeep 4x4",
      "Pemandu / Driver Ramah",
      "Dokumentasi Foto",
      "Tiket Masuk Wisata",
    ],
    image: "/images/jeep-puncak-becici/packages/medium-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya tertarik dengan paket Medium Trip (Rp550.000). Mohon penjelasan rute lengkap dan cara pemesanannya.",
  },
  {
    id: "long-trip",
    slug: "long-trip",
    name: "Long Trip",
    priceAmount: 650000,
    priceDisplay: "Rp650.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Eksplorasi menyeluruh dengan durasi terpanjang menjangkau sudut-sudut eksotis kawasan Dlingo dan sekitarnya.",
    category: "standard",
    categoryLabel: "Standard Trip",
    badge: "Rute Terlengkap",
    highlights: [
      "Jelajah menyeluruh kawasan Dlingo",
      "Melewati berbagai bentang alam & spot unik",
      "Dokumentasi melimpah di setiap titik",
    ],
    routeHighlights: [
      "Basecamp Puncak Becici",
      "Kawasan Hutan Pinus Terpadu",
      "Lembah & Sungai Alami Dlingo",
      "Spot Terasering & Panorama Bukit",
    ],
    includedAmenities: [
      "Armada Jeep 4x4 Terawat",
      "Pemandu / Driver Berpengalaman",
      "Dokumentasi Lengkap",
      "Tiket Masuk Titik Kunjung",
    ],
    image: "/images/jeep-puncak-becici/packages/long-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya tertarik dengan paket Long Trip (Rp650.000). Berapa lama estimasi durasi dan apa saja titik kunjungannya?",
  },
  {
    id: "full-offroad",
    slug: "full-offroad",
    name: "Full Offroad",
    priceAmount: 500000,
    priceDisplay: "Rp500.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Uji adrenalin sejati melibas trek tanah berlumpur, tanjakan terjal, dan lintasan offroad menantang di alam terbuka.",
    category: "adventure",
    categoryLabel: "Offroad & Alam",
    badge: "Adrenalin Tinggi",
    highlights: [
      "Trek tanah gembur & kubangan lumpur",
      "Manuver dinamis 4x4 dipandu driver ahli",
      "Pengalaman offroad petualangan seru",
    ],
    routeHighlights: [
      "Sirkuit / Jalur Tanah Ekstrim",
      "Tanjakan & Turunan Perbukitan",
      "Lintasan Kubangan Lumpur",
      "Titik Dokumentasi Aksi Offroad",
    ],
    includedAmenities: [
      "Armada Jeep 4x4 High-Torque",
      "Driver Offroad Berpengalaman",
      "Dokumentasi Aksi Seru",
      "Bantuan Jalur & Keselamatan",
    ],
    image: "/images/jeep-puncak-becici/packages/full-offroad.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya ingin menanyakan paket Full Offroad (Rp500.000). Bagaimana kondisi jalur dan persiapannya?",
  },
  {
    id: "sunrise-trip",
    slug: "sunrise-trip",
    name: "Sunrise Trip",
    priceAmount: 650000,
    priceDisplay: "Rp650.000",
    priceUnitNotice: "Harga referensi materi poster • Wajib reservasi H-1",
    shortDescription:
      "Saksikan keajaiban fajar menyingsing di atas selimut kabut putih dari gardu pandang tertinggi Puncak Becici.",
    category: "adventure",
    categoryLabel: "Offroad & Alam",
    badge: "Golden Hour View",
    highlights: [
      "Berangkat fajar menikmati udara segar",
      "Spot panorama lautan kabut & matahari terbit",
      "Suasana tenang nan magis di perbukitan",
    ],
    routeHighlights: [
      "Keberangkatan Subuh dari Basecamp",
      "Spot Puncak Sunrise Becici",
      "Gardu Pandang Samudra Kabut",
      "Jelajah Hutan Pinus Pagi Hari",
    ],
    includedAmenities: [
      "Armada Jeep 4x4",
      "Driver Siaga Dini Hari",
      "Dokumentasi Golden Hour",
      "Tiket Spot Sunrise",
    ],
    image: "/images/jeep-puncak-becici/packages/sunrise-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya ingin reservasi paket Sunrise Trip (Rp650.000). Jam berapa waktu kumpul dan bagaimana jadwal keberangkatannya?",
  },
  {
    id: "private-trip",
    slug: "private-trip",
    name: "Private Trip",
    priceAmount: 850000,
    priceDisplay: "Rp850.000",
    priceUnitNotice: "Harga referensi materi poster • Konfirmasi satuan via admin",
    shortDescription:
      "Layanan eksklusif dengan privasi penuh, waktu santai fleksibel, dan rute istimewa sesuai kenyamanan rombongan.",
    category: "special",
    categoryLabel: "Trip Khusus",
    badge: "Eksklusif & Personal",
    highlights: [
      "Satu armada eksklusif untuk grup Anda",
      "Durasi santai tanpa terburu-buru",
      "Prioritas pendampingan & spot foto spesial",
    ],
    routeHighlights: [
      "Penjemputan Khusus di Basecamp",
      "Rute Pilihan Sesuai Preferensi",
      "Pemberhentian Fleksibel untuk Foto",
      "Kawasan Hutan Pinus & Bukit Becici",
    ],
    includedAmenities: [
      "Jeep 4x4 Khusus Rombongan",
      "Driver Pribadi Berpengalaman",
      "Dokumentasi Foto Khusus",
      "Tiket Masuk Lokasi",
    ],
    image: "/images/jeep-puncak-becici/packages/private-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya tertarik dengan Private Trip (Rp850.000). Mohon informasi ketersediaan armada dan detail fleksibilitas rutenya.",
  },
  {
    id: "special-trip",
    slug: "special-trip",
    name: "Special Trip",
    priceAmount: 1000000,
    priceDisplay: "Rp1.000.000",
    priceUnitNotice: "Harga referensi materi poster • Rincian dikonfirmasi via admin",
    shortDescription:
      "Paket unggulan terlengkap dengan pengalaman menyeluruh, durasi istimewa, dan kombinasi rute petualangan terbaik.",
    category: "special",
    categoryLabel: "Trip Khusus",
    badge: "Paket Signature",
    highlights: [
      "Pengalaman petualangan paling lengkap",
      "Kombinasi rute alam, offroad & panorama",
      "Layanan prima dengan fleksibilitas tinggi",
    ],
    routeHighlights: [
      "Rute Hutan Pinus Terpadu",
      "Jalur Offroad & Susur Lembah",
      "Spot Panorama Alam Pilihan",
      "Destinasi Spesial Puncak Becici",
    ],
    includedAmenities: [
      "Armada Jeep 4x4 Pilihan",
      "Driver Berpengalaman & Guide",
      "Dokumentasi Lengkap",
      "Tiket Masuk Seluruh Spot",
    ],
    image: "/images/jeep-puncak-becici/packages/special-trip.jpg",
    whatsappMessage:
      "Halo Jeep Puncak Becici Official, saya ingin menanyakan paket Special Trip (Rp1.000.000). Apa saja rute dan keistimewaan yang termasuk?",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-pinus",
    title: "Kanopi Hutan Pinus Asri",
    subtitle: "Kesejukan Udara Alami Pegunungan",
    description:
      "Berkendara melintasi rimbunnya ribuan pohon pinus yang menjulang tinggi. Rasakan hembusan udara sejuk khas perbukitan Dlingo dan aroma khas getah pinus yang menenangkan pikiran.",
    image: "/images/jeep-puncak-becici/gallery/gallery-pine-forest.jpg",
    tag: "Nuansa Hutan Pinus",
  },
  {
    id: "exp-offroad",
    title: "Trek Tanah & Kontur Menantang",
    subtitle: "Adrenalin Berkendara 4x4",
    description:
      "Rasakan ketangguhan suspensi dan tenaga mesin 4x4 menaklukkan tanah bergelombang, turunan tanah, serta kubangan lumpur yang memacu tawa dan keceriaan rombongan.",
    image: "/images/jeep-puncak-becici/gallery/gallery-mud-trail.jpg",
    tag: "Aksi Offroad",
  },
  {
    id: "exp-river",
    title: "Sensasi Susur Aliran Sungai",
    subtitle: "Cipratan Air & Petualangan Segar",
    description:
      "Pengalaman seru melintasi jalur dangkal aliran sungai berbatu dengan cipratan air yang menyegarkan. Momen paling ditunggu untuk foto aksi dan video perjalanan Anda.",
    image: "/images/jeep-puncak-becici/gallery/gallery-river-splash.jpg",
    tag: "Susur Sungai",
  },
  {
    id: "exp-sunrise",
    title: "Pesona Sunrise di Lautan Awan",
    subtitle: "Keajaiban Pagi dari Puncak Becici",
    description:
      "Menyambut terbitnya matahari emas dari puncak ketinggian perbukitan Bantul dengan selimut kabut putih yang membentang luas di bawah Anda. Panorama magis yang tak terlupakan.",
    image: "/images/jeep-puncak-becici/gallery/gallery-sunrise.jpg",
    tag: "Golden Sunrise",
  },
];

export const CORE_FACILITIES = [
  {
    id: "fac-jeep",
    name: "Armada Jeep 4x4 Terawat",
    description: "Kendaraan tangguh berpenggerak 4 roda dengan perawatan berkala dan uji kelaikan jalan.",
    iconName: "Compass",
  },
  {
    id: "fac-ticket",
    name: "Tiket Masuk Lokasi",
    description: "Akses masuk spot wisata sesuai rute paket perjalanan yang telah dipilih.",
    iconName: "Ticket",
  },
  {
    id: "fac-doc",
    name: "Dokumentasi Perjalanan",
    description: "Bantuan foto dan video di spot-spot terbaik oleh kru dan driver sepanjang trip.",
    iconName: "Camera",
  },
  {
    id: "fac-guide",
    name: "Driver & Pemandu Lokal",
    description: "Pengemudi berpengalaman yang mengenal kontur medan serta cerita lokal kawasan Becici.",
    iconName: "UserCheck",
  },
  {
    id: "fac-insurance",
    name: "Asuransi Jiwa Peserta",
    description: "Perlindungan asuransi perjalanan sesuai ketentuan operasional yang berlaku.",
    iconName: "ShieldCheck",
  },
  {
    id: "fac-drink",
    name: "Welcome Drink Segar",
    description: "Minuman pelepas dahaga yang disediakan untuk menyambut petualangan Anda.",
    iconName: "Coffee",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Jalur Teduh Hutan Pinus Becici",
    location: "Kawasan Hutan Pinus Puncak Becici",
    category: "Hutan Pinus",
    image: "/images/jeep-puncak-becici/gallery/gallery-pine-forest.jpg",
    aspect: "wide",
  },
  {
    id: "gal-2",
    title: "Cipratan Air Aksi Susur Sungai",
    location: "Lintasan Aliran Air Dlingo",
    category: "Susur Sungai",
    image: "/images/jeep-puncak-becici/gallery/gallery-river-splash.jpg",
    aspect: "square",
  },
  {
    id: "gal-3",
    title: "Taklukkan Trek Tanah & Lumpur",
    location: "Jalur Offroad Perbukitan",
    category: "Offroad",
    image: "/images/jeep-puncak-becici/gallery/gallery-mud-trail.jpg",
    aspect: "square",
  },
  {
    id: "gal-4",
    title: "Matahari Terbit di Atas Samudra Awan",
    location: "Gardu Pandang Sunrise Becici",
    category: "Sunrise",
    image: "/images/jeep-puncak-becici/gallery/gallery-sunrise.jpg",
    aspect: "wide",
  },
  {
    id: "gal-5",
    title: "Melintasi Terasering & Pedesaan Asri",
    location: "Jalur Pedesaan Muntuk Dlingo",
    category: "Panorama Desa",
    image: "/images/jeep-puncak-becici/gallery/gallery-village-trail.jpg",
    aspect: "square",
  },
  {
    id: "gal-6",
    title: "Kesiapan Armada di Basecamp",
    location: "Staging Area Basecamp Becici",
    category: "Armada",
    image: "/images/jeep-puncak-becici/gallery/gallery-fleet-basecamp.jpg",
    aspect: "wide",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-price-basis",
    question: "Apakah harga paket yang tertera dihitung per jeep atau per orang?",
    answer:
      "Pada materi poster referensi awal, harga tertera sebagai nominal paket (mulai Rp400.000 hingga Rp1.000.000). Umumnya paket jeep wisata dihitung per armada mobil (kapasitas 4 orang). Namun demikian, mohon pastikan kembali rincian satuan harga final kepada admin via WhatsApp sebelum keberangkatan.",
  },
  {
    id: "faq-capacity",
    question: "Berapa kapasitas penumpang untuk setiap satu unit armada jeep?",
    answer:
      "Untuk kenyamanan dan keselamatan perjalanan di medan berbukit, kapasitas standar jeep terbuka umumnya disarankan untuk 4 orang penumpang dewasa per unit. Jika rombongan Anda berjumlah lebih banyak, admin kami dapat menyiapkan beberapa unit armada konvoi bersamaan.",
  },
  {
    id: "faq-sunrise",
    question: "Kapan jadwal keberangkatan untuk paket Sunrise Trip?",
    answer:
      "Trip Sunrise membutuhkan keberangkatan dini hari (biasanya berkumpul sekitar pukul 04.30 – 05.00 WIB di titik kumpul) agar dapat mencapai spot gardu pandang sebelum fajar menyingsing. Paket Sunrise Trip wajib direservasi setidaknya H-1 agar armada dan driver siaga tepat waktu.",
  },
  {
    id: "faq-dresscode",
    question: "Pakaian dan perlengkapan apa yang disarankan untuk dibawa?",
    answer:
      "Gunakan pakaian yang nyaman dan tidak mudah robek, alas kaki bersol karet/sneakers anti-slip, kacamata hitam, serta jaket bila Anda mengambil trip pagi/sunrise karena udara bukit cukup dingin. Untuk paket dengan rute susur sungai atau offroad lumpur, Anda disarankan membawa baju ganti cadangan.",
  },
  {
    id: "faq-weather",
    question: "Bagaimana jika terjadi hujan saat jadwal perjalanan?",
    answer:
      "Hujan ringan di hutan pinus seringkali menambah sensasi petualangan berkabut yang indah. Namun jika hujan sangat deras atau kondisi jalur tanah dinilai berbahaya oleh pengemudi, trip dapat ditunda sejenak, dialihkan ke rute alternatif yang lebih aman, atau dijadwal ulang sesuai koordinasi bersama admin.",
  },
  {
    id: "faq-booking",
    question: "Bagaimana cara melakukan reservasi dan apakah memerlukan uang muka (DP)?",
    answer:
      "Cukup klik tombol 'Pesan via WhatsApp' pada paket yang Anda inginkan. Admin kami akan memeriksa ketersediaan armada pada tanggal yang diminta. Ketentuan mengenai konfirmasi jadwal dan pembayaran uang muka (DP) akan dijelaskan secara transparan oleh admin resmi.",
  },
  {
    id: "faq-kids",
    question: "Apakah aman untuk anak-anak dan lansia?",
    answer:
      "Paket Fun Trip dan Short Trip memiliki karakter jalur yang lebih landai dan santai, sehingga sangat cocok untuk keluarga dan anak-anak dengan pengawasan orang tua. Untuk lansia atau peserta dengan kondisi medis khusus (seperti riwayat cedera punggung/leher), disarankan menghindari rute Full Offroad ekstrim.",
  },
  {
    id: "faq-meeting-point",
    question: "Di mana lokasi titik kumpul / basecamp Jeep Puncak Becici Official?",
    answer:
      "Titik kumpul berada di area parkir kawasan wisata Puncak Becici, Gunungcilik, Muntuk, Kec. Dlingo, Kabupaten Bantul, Yogyakarta. Titik koordinat GPS presisi dan panduan arah akan dibagikan langsung oleh admin setelah reservasi Anda tercatat.",
  },
];

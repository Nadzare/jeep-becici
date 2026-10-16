import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#243D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jeeppuncakbeciciofficial.com"),
  title: "Jeep Puncak Becici Official | Wisata Jeep Offroad & Hutan Pinus Dlingo",
  description:
    "Jelajahi keindahan hutan pinus Puncak Becici, trek offroad tanah, susur sungai, dan panorama sunrise Dlingo Bantul bersama Jeep Puncak Becici Official. Informasi paket dan konsultasi via WhatsApp.",
  keywords: [
    "Jeep Puncak Becici Official",
    "wisata jeep puncak becici",
    "sewa jeep dlingo bantul",
    "offroad puncak becici",
    "sunrise jeep puncak becici",
    "paket jeep becici jogja",
    "jeep wisata jogja",
  ],
  authors: [{ name: "Jeep Puncak Becici Official" }],
  creator: "Jeep Puncak Becici Official",
  publisher: "Jeep Puncak Becici Official",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jeeppuncakbeciciofficial.com",
    siteName: "Jeep Puncak Becici Official",
    title: "Jeep Puncak Becici Official — Wisata Jeep Offroad Hutan Pinus",
    description:
      "Pengalaman petualangan outdoor autentik di Puncak Becici, Dlingo, Yogyakarta. 8 pilihan paket trip seru dari Fun Trip hingga Sunrise Trip.",
    images: [
      {
        url: "/images/jeep-puncak-becici/hero/hero-jeep-puncak-becici.jpg",
        width: 1200,
        height: 630,
        alt: "Armada Jeep Wisata di Kawasan Hutan Pinus Puncak Becici",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeep Puncak Becici Official | Petualangan Outdoor di Yogyakarta",
    description:
      "Wisata jeep hutan pinus, offroad tanah, susur sungai, dan sunrise Puncak Becici Dlingo Bantul.",
    images: ["/images/jeep-puncak-becici/hero/hero-jeep-puncak-becici.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-offwhite text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}

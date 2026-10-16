"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PACKAGES } from "@/data/packages";
import { getPackageBookingUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquare, Check, Info } from "lucide-react";

export function PackageSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Paket (8)" },
    { id: "standard", label: "Standard Trip (4)" },
    { id: "adventure", label: "Offroad & Alam (2)" },
    { id: "special", label: "Trip Khusus (2)" },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? PACKAGES
      : PACKAGES.filter((p) => p.category === selectedCategory);

  return (
    <section id="paket" className="py-20 sm:py-28 bg-offwhite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Katalog Paket Wisata"
          title="PILIH PETUALANGANMU DI PUNCAK BECICI"
          description="Temukan paket trip yang paling pas untuk liburan bersama teman, pasangan, maupun rombongan keluarga. Delapan pilihan rute dengan sensasi berbeda."
        />

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-forest text-white shadow-md"
                  : "bg-white text-charcoal hover:bg-sand border border-sand-dark/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col rounded-2xl bg-white border border-sand-dark/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-sand">
                <Image
                  src={pkg.image}
                  alt={`Paket Wisata ${pkg.name} Jeep Puncak Becici`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-black/20" />

                {/* Badge Tag */}
                {pkg.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-adventure text-charcoal text-[11px] font-bold tracking-wider uppercase font-display shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold tracking-widest text-adventure uppercase">
                    {pkg.categoryLabel}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight leading-tight text-white">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Price Block */}
                  <div className="pb-3 border-b border-sand-dark/20">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-muted-green">Mulai</span>
                      <span className="font-sans text-2xl sm:text-3xl font-extrabold text-forest">
                        {pkg.priceDisplay}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-green italic leading-tight">
                      *Harga referensi poster materi. Detail satuan dikonfirmasi admin.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-charcoal/80 leading-relaxed min-h-[40px]">
                    {pkg.shortDescription}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-4 pt-3 border-t border-sand-dark/15">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-charcoal font-display">
                      Highlight Rute:
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {pkg.routeHighlights.slice(0, 3).map((route, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-green">
                          <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                          <span>{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-sand-dark/20">
                  <a
                    href={getPackageBookingUrl(pkg.name, pkg.priceDisplay)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-sm tracking-wider uppercase shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4 fill-charcoal/20" />
                    <span>Tanya Paket Ini</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Transparency Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-sand/60 border border-sand-dark/40 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-charcoal/90 leading-relaxed">
            <span className="font-bold text-forest">Catatan Penting Reservasi:</span> Harga delapan paket di atas disadur langsung dari poster materi promosi Jeep Puncak Becici Official. Sebelum melakukan perjalanan, pastikan Anda berkonsultasi mengenai kapasitas unit jeep (umumnya 4 orang), durasi riil perjalanan, serta titik temu keberangkatan melalui WhatsApp resmi.
          </div>
        </div>
      </div>
    </section>
  );
}

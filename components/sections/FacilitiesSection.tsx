import React from "react";
import { CORE_FACILITIES } from "@/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  Ticket,
  Camera,
  UserCheck,
  ShieldCheck,
  Coffee,
  Info,
} from "lucide-react";

export function FacilitiesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Ticket,
    Camera,
    UserCheck,
    ShieldCheck,
    Coffee,
  };

  return (
    <section id="fasilitas" className="py-20 sm:py-28 bg-sand-light scroll-mt-20 border-b border-sand-dark/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fasilitas Penunjang"
          title="YANG MENEMANI PETUALANGANMU"
          description="Kenyamanan dan keselamatan Anda adalah prioritas. Berikut fasilitas yang tercantum pada materi resmi penunjang pengalaman wisata jeep di Becici."
        />

        {/* 6 Facilities Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FACILITIES.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || Compass;
            return (
              <div
                key={facility.id}
                className="flex flex-col p-6 rounded-2xl bg-white border border-sand-dark/30 shadow-xs hover:border-forest/50 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  {facility.name}
                </h3>
                <p className="mt-2 text-sm text-muted-green leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-white border border-sand-dark/40 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <span className="font-bold text-forest">Konfirmasi Per Paket:</span> Ketersediaan fasilitas seperti welcome drink atau asuransi tertentu dapat berbeda bergantung jenis paket yang Anda ambil. Tim admin kami akan memberikan konfirmasi rincian fasilitas sebelum reservasi Anda difinalisasi.
          </p>
        </div>
      </div>
    </section>
  );
}

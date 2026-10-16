import React from "react";
import Image from "next/image";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowDown, MapPin, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-charcoal">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jeep-puncak-becici/hero/hero-jeep-puncak-becici.jpg"
          alt="Armada Jeep Wisata Puncak Becici di tengah Hutan Pinus Dlingo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Multi-layer Gradient Overlay for Optimal Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal/75 to-charcoal/40" />
        <div className="absolute inset-0 bg-forest/35 mix-blend-multiply" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location & Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-dark/80 backdrop-blur-md border border-white/15 text-sand text-xs sm:text-sm font-medium mb-6 shadow-md">
          <MapPin className="w-4 h-4 text-adventure shrink-0" />
          <span>Puncak Becici • Dlingo, Bantul, D.I. Yogyakarta</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05] drop-shadow-sm max-w-4xl">
          Jelajahi Puncak Becici dengan{" "}
          <span className="text-adventure underline decoration-adventure/40 decoration-wavy decoration-2">
            Cara yang Berbeda
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-sand/90 font-sans max-w-2xl leading-relaxed">
          Rasakan hembusan udara sejuk hutan pinus, keseruan jalur tanah berbukit,
          hingga cipratan air susur sungai bersama armada jeep 4x4 tangguh. Konsultasikan jadwal dan rute impianmu bersama tim kami.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={getGeneralConsultationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-lg tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] group"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Pesan via WhatsApp</span>
          </a>

          <a
            href="#paket"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-base tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all duration-200"
          >
            <span>Lihat 8 Paket Trip</span>
            <ArrowDown className="w-4 h-4 text-adventure" />
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-charcoal-dark/70 backdrop-blur-md border border-white/10 text-left">
            <CheckCircle2 className="w-5 h-5 text-adventure shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white font-display">
                8 Pilihan Paket
              </p>
              <p className="text-[11px] text-sand/70">Mulai Rp400.000</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-charcoal-dark/70 backdrop-blur-md border border-white/10 text-left">
            <CheckCircle2 className="w-5 h-5 text-adventure shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white font-display">
                Hutan Pinus & Sungai
              </p>
              <p className="text-[11px] text-sand/70">Trek asri & menantang</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-charcoal-dark/70 backdrop-blur-md border border-white/10 text-left">
            <CheckCircle2 className="w-5 h-5 text-adventure shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white font-display">
                Trip Sunrise Becici
              </p>
              <p className="text-[11px] text-sand/70">Lautan awan pagi</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-charcoal-dark/70 backdrop-blur-md border border-white/10 text-left">
            <CheckCircle2 className="w-5 h-5 text-adventure shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white font-display">
                Driver Berpengalaman
              </p>
              <p className="text-[11px] text-sand/70">Pemandu lokal ramah</p>
            </div>
          </div>
        </div>

        {/* Note on data status */}
        <p className="mt-6 text-xs text-sand/60 max-w-xl text-center">
          *Informasi paket & harga dirangkum dari materi referensi usaha. Konfirmasi ketersediaan armada, durasi, dan rute final melalui WhatsApp resmi.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowDown, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 overflow-hidden bg-forest-dark text-white">
      {/* 1. Cinematic Background Layer: Pine Forest & Morning Sun */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jeep-puncak-becici/hero/hero-forest-bg.jpg"
          alt="Suasana Hutan Pinus Puncak Becici Yogyakarta saat Pagi Hari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Editorial Gradients & Tints */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 to-transparent lg:w-[68%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-transparent to-forest-dark/90" />
      </div>

      {/* 2. Topographic Elevation Contour Lines Overlay (Top-Left Accent) */}
      <div
        className="absolute top-0 left-0 w-[550px] h-[550px] pointer-events-none opacity-20 z-1"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          stroke="#F0A12B"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          className="w-full h-full"
        >
          <path d="M-50,80 Q120,40 220,130 T450,110 T650,220" />
          <path d="M-50,140 Q140,90 260,190 T500,170 T680,290" />
          <path d="M-50,200 Q160,150 290,260 T540,240 T700,360" />
          <path d="M-50,270 Q180,220 330,330 T590,310 T720,430" />
          <path d="M-50,350 Q200,300 380,410 T640,390 T750,510" />
          <path d="M-50,440 Q230,390 430,500 T690,480 T780,600" />
        </svg>
      </div>

      {/* 3. Main Split Hero Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Eyebrow, Distressed Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 text-adventure font-display tracking-widest text-xs sm:text-sm uppercase font-bold mb-3 select-none">
              <span className="w-8 h-0.5 bg-adventure inline-block" />
              <span>EXPLORE THE OUTDOORS</span>
            </div>

            {/* Distressed Multi-tier Headline */}
            <h1 className="font-bebas tracking-tight uppercase leading-[0.9] select-none text-left">
              {/* Line 1: White with Distressed Texture & Adventure Mountain Silhouette */}
              <span className="flex items-center flex-wrap gap-x-3 gap-y-1 text-white text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal drop-shadow-md">
                <span className="distressed-headline">JELAJAHI</span>
                
                {/* Stylized Mountain Peak Outline Icon */}
                <svg
                  viewBox="0 0 110 50"
                  className="h-9 sm:h-14 lg:h-18 w-auto text-adventure fill-adventure/20 stroke-adventure stroke-[3.5] stroke-linejoin-round shrink-0"
                  aria-hidden="true"
                >
                  <path d="M5 45 L42 8 L65 26 L82 12 L105 45 Z" />
                  <path d="M42 8 L52 26" />
                  <path d="M82 12 L90 26" />
                </svg>
              </span>

              {/* Line 2: Adventure Orange with Distressed Texture */}
              <span className="block text-adventure text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal drop-shadow-md distressed-headline mt-1 sm:mt-2">
                PUNCAK BECICI
              </span>
            </h1>

            {/* Subheadline / Paragraph */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-sand/90 font-sans max-w-xl leading-relaxed">
              Rasakan petualangan seru menyusuri hutan pinus, jalur tanah berbukit,
              hingga cipratan air susur sungai bersama armada jeep 4×4 tangguh.
            </p>

            {/* Dual Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: WhatsApp */}
              <a
                href={getGeneralConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-xl transition-all duration-200 active:scale-[0.98] group"
              >
                <MessageSquare className="w-5 h-5 fill-charcoal/20" />
                <span>PESAN VIA WHATSAPP</span>
                <ChevronRight className="w-4 h-4 text-charcoal group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Lihat 8 Paket Trip */}
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-charcoal/40 hover:bg-charcoal/60 text-white font-display font-semibold text-sm sm:text-base tracking-wider uppercase rounded-xl backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                <span>LIHAT 8 PAKET TRIP</span>
                <ArrowDown className="w-4 h-4 text-adventure" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Jeep PNG Transparan */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0 z-10">
            <div className="relative w-full max-w-[580px] lg:max-w-none lg:w-[130%] lg:-mr-16 aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 flex items-center justify-center">
              
              {/* Ground Shadow & Subtle Terrain Grounding */}
              <div
                className="absolute bottom-2 sm:bottom-4 left-[10%] right-[10%] h-12 bg-black/70 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* The Jeep Cutout Image */}
              <Image
                src="/images/jeep-puncak-becici/herojeep.png"
                alt="Armada Jeep 4x4 Wisata Puncak Becici"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom 4-Pill Outdoor Feature Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl bg-charcoal-dark/75 backdrop-blur-md border border-white/10 shadow-2xl">
          
          {/* Feature 1: Hutan Pinus */}
          <div className="flex items-center gap-3 p-2 border-r border-white/10 last:border-r-0 md:[&:nth-child(2)]:border-r">
            <div className="w-10 h-10 rounded-lg bg-adventure/15 border border-adventure/30 flex items-center justify-center text-adventure shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2L6 9h4l-5 7h6l-3 4h12l-3-4h6l-5-7h4L12 2z" />
                <path d="M12 20v2" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                HUTAN PINUS
              </h3>
              <p className="text-[11px] text-sand/70 font-sans">
                Trek asri & menantang
              </p>
            </div>
          </div>

          {/* Feature 2: Jalur Berbukit */}
          <div className="flex items-center gap-3 p-2 border-r-0 sm:border-r border-white/10 last:border-r-0">
            <div className="w-10 h-10 rounded-lg bg-adventure/15 border border-adventure/30 flex items-center justify-center text-adventure shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                JALUR BERBUKIT
              </h3>
              <p className="text-[11px] text-sand/70 font-sans">
                Pemandangan memukau
              </p>
            </div>
          </div>

          {/* Feature 3: Susur Sungai */}
          <div className="flex items-center gap-3 p-2 border-r border-white/10 last:border-r-0">
            <div className="w-10 h-10 rounded-lg bg-adventure/15 border border-adventure/30 flex items-center justify-center text-adventure shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                SUSUR SUNGAI
              </h3>
              <p className="text-[11px] text-sand/70 font-sans">
                Pengalaman tak terlupakan
              </p>
            </div>
          </div>

          {/* Feature 4: Driver Lokal */}
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-lg bg-adventure/15 border border-adventure/30 flex items-center justify-center text-adventure shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                DRIVER LOKAL
              </h3>
              <p className="text-[11px] text-sand/70 font-sans">
                Ramah & berpengalaman
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

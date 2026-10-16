import React from "react";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/data/site";
import { MessageSquare, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-20 sm:py-24 bg-forest-dark overflow-hidden text-white border-t border-forest-light/40">
      {/* Subtle Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#F0A12B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-forest-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-adventure/15 text-adventure text-xs font-bold uppercase tracking-wider font-display border border-adventure/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Rencanakan Liburan Terbaikmu</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
          Siap Menjelajahi Puncak Becici?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-sand/90 font-sans max-w-2xl leading-relaxed">
          Tanyakan detail ketersediaan paket, rute khusus, durasi, hingga kapasitas unit jeep rombongan Anda langsung kepada tim Jeep Puncak Becici Official.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={getGeneralConsultationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-lg tracking-wider uppercase rounded-xl shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Konsultasi & Pesan via WhatsApp</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-sand/60">
          Nomor WhatsApp Resmi: {SITE_CONFIG.contact.whatsappDisplay} • Respons Cepat & Ramah
        </p>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href={getGeneralConsultationUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi langsung via WhatsApp Resmi Jeep Puncak Becici"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-sm tracking-wider uppercase shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline">Chat Admin WA</span>
      </a>
    </div>
  );
}

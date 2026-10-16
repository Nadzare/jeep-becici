"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/site";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { Menu, X, MessageSquare, Compass, Phone } from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-forest/95 backdrop-blur-md shadow-md py-3 border-b border-forest-light/40"
          : "bg-forest/90 backdrop-blur-xs py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Title */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-adventure focus-visible:outline-offset-4 rounded-md"
          >
            <div className="w-9 h-9 rounded-md bg-adventure flex items-center justify-center text-charcoal font-black shadow-inner shrink-0">
              <Compass className="w-5 h-5 text-charcoal" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-none">
                Jeep Puncak Becici
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-adventure uppercase">
                Official Adventure
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sand/90 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-adventure hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase font-display bg-adventure hover:bg-adventure-hover text-charcoal rounded-lg shadow-sm transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal/20" />
              <span>Pesan via WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Admin"
              className="p-2 text-charcoal bg-adventure rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="p-2 text-sand hover:text-white rounded-lg focus-visible:outline-2 focus-visible:outline-adventure"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] z-40 bg-charcoal-dark/95 backdrop-blur-lg flex flex-col p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-4 text-center mt-4">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-sand hover:text-white py-2 border-b border-sand/10 active:text-adventure"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-sand/15 flex flex-col gap-3">
            <a
              href={getGeneralConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-base tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Hubungi WhatsApp Admin</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-green mt-2">
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.contact.whatsappDisplay}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

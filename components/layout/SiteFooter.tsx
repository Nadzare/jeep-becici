import React from "react";
import { SITE_CONFIG } from "@/data/site";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import { Compass, MessageSquare, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-dark text-sand/80 pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-md bg-adventure flex items-center justify-center text-charcoal font-black shrink-0">
                <Compass className="w-5 h-5 text-charcoal" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white uppercase leading-none">
                  Jeep Puncak Becici
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-adventure uppercase">
                  Official Adventure
                </span>
              </div>
            </div>

            <p className="text-sm text-sand/70 leading-relaxed max-w-sm">
              Layanan wisata jeep offroad resmi di kawasan perbukitan dan hutan pinus Puncak Becici, Dlingo, Bantul, Yogyakarta. Mengutamakan pengalaman autentik, keselamatan, dan keindahan alam perbukitan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jeep Puncak Becici Official"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-adventure hover:text-charcoal text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getGeneralConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Jeep Puncak Becici Official"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-adventure hover:text-charcoal text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Jelajahi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-adventure transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 8 Packages Col */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Katalog 8 Paket
            </h4>
            <ul className="space-y-2 text-xs text-sand/70">
              <li>• Fun Trip (Rp400.000)</li>
              <li>• Short Trip (Rp450.000)</li>
              <li>• Medium Trip (Rp550.000)</li>
              <li>• Long Trip (Rp650.000)</li>
              <li>• Full Offroad (Rp500.000)</li>
              <li>• Sunrise Trip (Rp650.000)</li>
              <li>• Private Trip (Rp850.000)</li>
              <li>• Special Trip (Rp1.000.000)</li>
            </ul>
          </div>

          {/* Official Contact Info Col */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-adventure shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.whatsappDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <InstagramIcon className="w-4 h-4 text-adventure shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.instagramHandle}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-adventure shrink-0 mt-0.5" />
                <span>Puncak Becici, Dlingo, Bantul, D.I. Yogyakarta 55783</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Transparency Notice */}
        <div className="mt-8 text-xs text-sand/50 leading-relaxed max-w-4xl">
          <p>
            <span className="text-sand/70 font-semibold">Pemberitahuan Transparansi Informasi Usaha:</span> Website ini dikembangkan sebagai media informasi resmi penunjang promosi digital Jeep Puncak Becici Official. Informasi paket dan harga disadur dari materi referensi promosi. Seluruh ketentuan final, ketersediaan jadwal, titik kumpul presisi, dan satuan tarif per kendaraan dikonfirmasi melalui admin resmi WhatsApp.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>© 2026 Jeep Puncak Becici Official. Seluruh hak cipta dilindungi.</p>
          <p>Modern Outdoor Adventure Editorial • Next.js</p>
        </div>
      </div>
    </footer>
  );
}

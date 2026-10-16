import React from "react";
import { SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function LocationContactSection() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-sand-light scroll-mt-20 border-t border-sand-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Lokasi & Kontak Resmi"
          title="TEMUKAN KAMI DI PUNCAK BECICI"
          description="Rencanakan rute perjalanan Anda menuju kawasan wisata perbukitan Dlingo Bantul, Yogyakarta."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-sand-dark/30 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-forest">
                <MapPin className="w-5 h-5 text-forest" />
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                  Area Basecamp & Titik Temu
                </h3>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {SITE_CONFIG.contact.addressDisplay}
              </p>
              <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between">
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase font-display text-forest hover:text-adventure transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-sand-dark/30 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-forest">
                <Clock className="w-5 h-5 text-forest" />
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                  Jam Operasional & Trip
                </h3>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {SITE_CONFIG.contact.operatingHours}
              </p>
              <p className="mt-2 text-xs text-muted-green">
                *Trip Sunrise dimulai sekitar pukul 04.30 WIB di titik kumpul.
              </p>
            </div>

            {/* Official Channels Card */}
            <div className="p-6 rounded-2xl bg-forest text-white shadow-md">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-4 text-adventure">
                Kanal Komunikasi Resmi
              </h3>

              <div className="space-y-3">
                <a
                  href={getGeneralConsultationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-white"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-adventure" />
                    <div>
                      <p className="text-xs text-sand/70">WhatsApp Resmi</p>
                      <p className="text-sm font-bold font-sans">
                        {SITE_CONFIG.contact.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-adventure uppercase font-display">
                    Chat
                  </span>
                </a>

                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-white"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-5 h-5 text-adventure" />
                    <div>
                      <p className="text-xs text-sand/70">Instagram Resmi</p>
                      <p className="text-sm font-bold font-sans">
                        {SITE_CONFIG.contact.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-sand/60" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map / Visual Guide Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-sand-dark/40 shadow-sm bg-sand">
              {/* Google Maps Embed iframe with privacy sandbox */}
              <iframe
                title="Peta Lokasi Kawasan Wisata Puncak Becici Dlingo Bantul"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.974052329683!2d110.43577749999999!3d-7.904870199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a54911d87178d%3A0x6ec040fc7888b64e!2sPuncak%20Becici!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
            </div>

            {/* Verification & Directions Guidance */}
            <div className="p-5 rounded-2xl bg-white border border-sand-dark/30 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                <span className="font-bold text-forest">Panduan Menuju Lokasi:</span> Kawasan Puncak Becici berjarak sekitar 25 km (sekitar 50 menit berkendara) dari pusat Kota Yogyakarta melalui Jl. Imogiri Timur atau Jl. Wonosari - Patuk. Akses jalan aspal dapat dilalui mobil pribadi dan bus wisata.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

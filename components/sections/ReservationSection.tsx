import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGeneralConsultationUrl } from "@/lib/whatsapp";
import {
  Compass,
  MessageSquare,
  CalendarCheck,
  Flag,
} from "lucide-react";

export function ReservationSection() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Pilih Paket Petualangan",
      desc: "Tentukan salah satu dari 8 paket yang paling sesuai dengan keinginan, jumlah peserta, dan waktu liburan Anda.",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Hubungi WhatsApp Admin",
      desc: "Klik tombol pesan via WhatsApp. Pesan otomatis sudah terisi dengan detail paket yang Anda pilih untuk kenyamanan Anda.",
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Konfirmasi Jadwal & Armada",
      desc: "Admin akan memeriksa ketersediaan unit jeep, jadwal waktu terbaik, serta memberikan petunjuk lokasi titik kumpul.",
    },
    {
      number: "04",
      icon: Flag,
      title: "Siap Berpetualang di Becici",
      desc: "Tiba di basecamp Puncak Becici sesuai jam yang disepakati, bertemu driver lokal ramah, dan nikmati serunya offroad!",
    },
  ];

  return (
    <section id="reservasi" className="py-20 sm:py-28 bg-sand scroll-mt-20 border-y border-sand-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Alur Pemesanan"
          title="CARA MUDAH RESERVASI JEEP PUNCAK BECICI"
          description="Proses konsultasi dan reservasi cepat dan langsung terhubung dengan admin resmi tanpa kerumitan formulir."
        />

        {/* 4 Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col p-6 rounded-2xl bg-white border border-sand-dark/30 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl font-black text-forest/20">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-green leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-forest text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              Punya Pertanyaan Khusus untuk Rombongan?
            </h3>
            <p className="mt-1 text-sm sm:text-base text-sand/80 max-w-xl">
              Konsultasikan jadwal kedatangan, kapasitas kendaraan konvoi, atau permintaan rute khusus bersama tim kami.
            </p>
          </div>

          <a
            href={getGeneralConsultationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-adventure hover:bg-adventure-hover text-charcoal font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg transition-transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

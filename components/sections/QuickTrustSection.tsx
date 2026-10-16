import { Trees, MessageCircleCheck, Compass, HeartHandshake } from "lucide-react";

export function QuickTrustSection() {
  const values = [
    {
      icon: Trees,
      title: "Wisata Alam Asli Dlingo",
      desc: "Menghadirkan rute autentik di sejuknya hutan pinus, lembah asri, dan pemandangan perbukitan Puncak Becici.",
    },
    {
      icon: Compass,
      title: "Armada 4x4 Tangguh & Terawat",
      desc: "Jeep offroad yang dipersiapkan khusus untuk kontur medan tanah dan bebatuan pegunungan.",
    },
    {
      icon: HeartHandshake,
      title: "Driver Lokal Berpengalaman",
      desc: "Dipandu oleh kru lokal yang ramah, memahami seluk-beluk jalur, serta siap membantu dokumentasi terbaik.",
    },
    {
      icon: MessageCircleCheck,
      title: "Reservasi Transparan",
      desc: "Konsultasi rute, ketersediaan jadwal, serta konfirmasi harga dilayani langsung via admin WhatsApp resmi.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-sand-light border-b border-sand-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-sand-dark/25 shadow-xs hover:border-forest/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center text-forest shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-charcoal uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-green leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

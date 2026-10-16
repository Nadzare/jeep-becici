import { SITE_CONFIG } from "@/data/site";

export function getWhatsAppUrl(message: string): string {
  const number = SITE_CONFIG.contact.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getGeneralConsultationUrl(): string {
  const message =
    "Halo Jeep Puncak Becici Official, saya ingin konsultasi dan bertanya mengenai paket wisata jeep di Puncak Becici.";
  return getWhatsAppUrl(message);
}

export function getPackageBookingUrl(packageName: string, priceDisplay: string): string {
  const message = `Halo Jeep Puncak Becici Official, saya tertarik dengan paket *${packageName}* (${priceDisplay}). Mohon informasi detail durasi, rute, kapasitas penumpang per jeep, fasilitas termasuk, dan ketersediaan jadwalnya. Terima kasih.`;
  return getWhatsAppUrl(message);
}

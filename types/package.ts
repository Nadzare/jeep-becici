export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  priceAmount: number;
  priceDisplay: string;
  priceUnitNotice: string;
  shortDescription: string;
  category: "standard" | "adventure" | "special";
  categoryLabel: string;
  highlights: string[];
  routeHighlights: string[];
  includedAmenities: string[];
  image: string;
  badge?: string;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  aspect?: "wide" | "tall" | "square";
}

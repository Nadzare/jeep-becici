import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickTrustSection } from "@/components/sections/QuickTrustSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationContactSection } from "@/components/sections/LocationContactSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <QuickTrustSection />
        <PackageSection />
        <ExperienceSection />
        <FacilitiesSection />
        <GallerySection />
        <ReservationSection />
        <FAQSection />
        <LocationContactSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}

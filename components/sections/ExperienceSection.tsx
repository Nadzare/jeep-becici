import React from "react";
import Image from "next/image";
import { EXPERIENCES } from "@/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="pengalaman" className="py-20 sm:py-28 bg-forest text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pengalaman Wisata"
          title="CERITA DARI JALUR PETUALANGAN BECICI"
          description="Bukan sekadar perjalanan berkendara, tetapi perjumpaan langsung dengan kekayaan alam perbukitan Dlingo yang menyegarkan pikiran."
          theme="dark"
        />

        {/* Editorial Experience Showcase */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {EXPERIENCES.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 relative aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-dark/80 backdrop-blur-md text-adventure text-xs font-semibold tracking-wider uppercase border border-adventure/30">
                    {item.tag}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-adventure text-xs sm:text-sm font-semibold tracking-widest uppercase font-display">
                    <Compass className="w-4 h-4 text-adventure" />
                    <span>Aktivitas Unggulan #{index + 1}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base sm:text-lg font-medium text-sand/80">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-sand/90 font-sans leading-relaxed">
                    {item.description}
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

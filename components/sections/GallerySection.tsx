"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";

export function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const activePhoto = activePhotoIndex !== null ? GALLERY_PHOTOS[activePhotoIndex] : null;

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex]);

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-offwhite scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dokumentasi Visual"
          title="GALERI POTRET PETUALANGAN BECICI"
          description="Intip keseruan momen wisatawan melintasi kanopi hutan pinus, trek tanah perbukitan, hingga keindahan matahari terbit."
        />

        {/* Editorial Photo Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePhotoIndex(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Buka foto ${photo.title}`}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer bg-sand border border-sand-dark/30 shadow-xs hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-adventure focus-visible:outline-offset-2"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-forest/80 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wider uppercase font-display border border-white/10">
                {photo.category}
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white leading-tight">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-sand/80">
                  <MapPin className="w-3.5 h-3.5 text-adventure" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau Foto: ${activePhoto.title}`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            aria-label="Tutup pratinjau foto"
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-adventure"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
              )
            }
            aria-label="Foto sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block focus-visible:outline-2 focus-visible:outline-adventure"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
              )
            }
            aria-label="Foto selanjutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:block focus-visible:outline-2 focus-visible:outline-adventure"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-xl overflow-hidden shadow-2xl bg-charcoal">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-adventure font-display">
                {activePhoto.category}
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase mt-1">
                {activePhoto.title}
              </h4>
              <p className="text-sm text-sand/80 mt-1 flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-adventure" />
                <span>{activePhoto.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

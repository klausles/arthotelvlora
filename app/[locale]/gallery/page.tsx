"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/room-bedroom.png", category: "rooms", alt: "Art Hotel Vlora — Deluxe Bedroom" },
  { src: "/images/room-living.png", category: "hotel", alt: "Art Hotel Vlora — Reception" },
  { src: "/images/room-hallway.png", category: "hotel", alt: "Art Hotel Vlora — Corridor" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", category: "views", alt: "Beach view" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80", category: "views", alt: "Seaside panorama" },
  { src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80", category: "views", alt: "Sunset over the sea" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", category: "rooms", alt: "Modern hotel room" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d955c4644?w=800&q=80", category: "rooms", alt: "Deluxe room" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", category: "hotel", alt: "Hotel terrace" },
  { src: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80", category: "area", alt: "Vlorë cityscape" },
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", category: "area", alt: "Mediterranean architecture" },
  { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", category: "rooms", alt: "Premium suite" },
];

const categories = ["all", "rooms", "views", "hotel", "area"] as const;

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-gold text-dark"
                  : "bg-white/5 text-white/60 hover:text-gold hover:bg-white/10"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="mb-4 break-inside-avoid group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden rounded-xl border border-white/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-dark/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl z-10"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : filtered.length - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold text-3xl z-10"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < filtered.length - 1 ? lightbox + 1 : 0);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold text-3xl z-10"
            aria-label="Next"
          >
            ›
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/hotel/pro-room-1.jpg", category: "rooms", alt: "Art Hotel Vlora — Deluxe Twin Room with Mountain View" },
  { src: "/images/hotel/pro-room-2.jpg", category: "rooms", alt: "Art Hotel Vlora — Triple Room with Art Decor" },
  { src: "/images/hotel/pro-room-3.jpg", category: "rooms", alt: "Art Hotel Vlora — Standard Double with View" },
  { src: "/images/hotel/pro-room-4.jpg", category: "rooms", alt: "Art Hotel Vlora — Deluxe Suite Living Area" },
  { src: "/images/hotel/room-1.jpg", category: "rooms", alt: "Art Hotel Vlora — Bedroom" },
  { src: "/images/hotel/room-2.jpg", category: "rooms", alt: "Art Hotel Vlora — Room with Living Area" },
  { src: "/images/hotel/room-3.jpg", category: "rooms", alt: "Art Hotel Vlora — Standard Room" },
  { src: "/images/hotel/room-4.jpg", category: "rooms", alt: "Art Hotel Vlora — Room with Desk" },
  { src: "/images/hotel/room-7.jpg", category: "rooms", alt: "Art Hotel Vlora — Double Room" },
  { src: "/images/hotel/bathroom-1.jpg", category: "rooms", alt: "Art Hotel Vlora — Modern Bathroom" },
  { src: "/images/hotel/bathroom-2.jpg", category: "rooms", alt: "Art Hotel Vlora — Bathroom with Marble" },
  { src: "/images/hotel/hallway-1.jpg", category: "hotel", alt: "Art Hotel Vlora — Hallway" },
  { src: "/images/hotel/hallway-2.jpg", category: "hotel", alt: "Art Hotel Vlora — Corridor" },
  { src: "/images/hotel/hallway-3.jpg", category: "hotel", alt: "Art Hotel Vlora — Lobby Area" },
  { src: "/images/hotel/living-1.jpg", category: "hotel", alt: "Art Hotel Vlora — Common Area" },
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

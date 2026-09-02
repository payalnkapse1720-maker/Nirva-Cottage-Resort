"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_DATA } from "@/data/resort-data";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "rooms", label: "Rooms & Villas" },
    { id: "dining", label: "Bliss Cafe" },
    { id: "pool", label: "Infinity Pool" },
    { id: "nature", label: "Nature & Views" },
    { id: "events", label: "Events & Lawns" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0a0a09] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">
            Moments at Nirva
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#E5E4E2]/70 max-w-2xl mx-auto font-light">
            Explore the serene beauty, ambient architecture, and tranquil poolside vistas of our
            retreat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-[#161714] border border-[#d4af37]/25">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium font-sans transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#f2ca50] text-[#121411] font-semibold shadow-md"
                    : "text-[#E5E4E2]/70 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden rounded-2xl glass-panel border border-[#d4af37]/20 group cursor-pointer aspect-[4/3] shadow-lg ${
                item.span || ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-semibold mb-1">
                  {item.categoryLabel}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-white font-bold">{item.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#f2ca50] text-black flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#f2ca50] hover:text-black transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#f2ca50] hover:text-black transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#f2ca50] hover:text-black transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-2 bg-black/70 backdrop-blur-md px-6 py-2 rounded-full border border-white/15 text-center">
              <span className="text-xs uppercase tracking-widest text-[#f2ca50] block">
                {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <p className="font-serif text-base text-white">
                {filteredItems[lightboxIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

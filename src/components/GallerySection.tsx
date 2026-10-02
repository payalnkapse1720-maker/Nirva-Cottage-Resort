"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_DATA } from "@/data/resort-data";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (filteredItems.length > 1) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || filteredItems.length <= 1) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextImage();
    } else if (diff < -40) {
      prevImage();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F1E9DA] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Moments at Nirva
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-2xl mx-auto font-light">
            Explore the serene beauty, ambient architecture, and tranquil poolside vistas of our
            retreat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-[#FBF8F1] border border-[#D8C6A8]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium font-sans transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#C99A4A] text-[#2F241C] font-semibold shadow-md"
                    : "text-[#6B5540] hover:text-[#3E2F24]"
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
              className={`relative overflow-hidden rounded-2xl glass-panel border border-[#D8C6A8] group cursor-pointer aspect-[4/3] shadow-lg ${
                item.span || ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/90 via-[#3E2F24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold mb-1">
                  {item.categoryLabel}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-white font-bold">{item.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-[#C99A4A] text-[#2F241C] flex items-center justify-center shrink-0">
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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none"
        >
          {/* Top Bar: Counter Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-white/90 font-sans pointer-events-none">
            <span>{lightboxIndex + 1} / {filteredItems.length}</span>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/15 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-colors z-20 cursor-pointer border border-white/20 shadow-lg focus:outline-none focus:ring-0 outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/50 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-all z-20 cursor-pointer border border-white/20 shadow-xl focus:outline-none focus:ring-0 outline-none active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/50 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-all z-20 cursor-pointer border border-white/20 shadow-xl focus:outline-none focus:ring-0 outline-none active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Image Container - Expanded wide view */}
          <div
            className="relative max-w-7xl w-full max-h-[88vh] h-[78vh] sm:h-[84vh] flex items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              fill
              unoptimized
              className="object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
              priority
            />
            <div className="absolute bottom-3 bg-[#3E2F24]/85 backdrop-blur-md px-6 py-2 rounded-full border border-[#D8C6A8]/40 text-center pointer-events-auto shadow-lg">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E6D8C2] block">
                {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <p className="font-serif text-sm sm:text-base text-white">
                {filteredItems[lightboxIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

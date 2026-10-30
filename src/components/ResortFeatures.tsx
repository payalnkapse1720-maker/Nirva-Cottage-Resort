"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Waves,
  UtensilsCrossed,
  Music,
  Sparkles,
  Wifi,
  Compass,
  Clock,
  CalendarCheck,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AMENITIES_LIST, GALLERY_DATA, GalleryItem } from "@/data/resort-data";

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-[#C99A4A]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#C99A4A]" />,
  Music: <Music className="w-6 h-6 text-[#C99A4A]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C99A4A]" />,
  Wifi: <Wifi className="w-6 h-6 text-[#C99A4A]" />,
  Compass: <Compass className="w-6 h-6 text-[#C99A4A]" />,
  Clock: <Clock className="w-6 h-6 text-[#C99A4A]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#C99A4A]" />,
};

const ALL_EXCLUSIVE_ITEMS: GalleryItem[] = [
  {
    id: "g-all-1",
    title: "Pink Porch Swing in Lush Garden",
    category: "all",
    categoryLabel: "Garden & Grounds",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793133951/Pink_Porch_Swing_in_a_Lush_Garden.png",
  },
  {
    id: "g-all-2",
    title: "Misty Mountain Poolside Retreat",
    category: "all",
    categoryLabel: "Poolside Retreat",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793133954/Misty_Mountain_Poolside_Retreat.png",
  },
  {
    id: "g-all-3",
    title: "Warmly Lit Garden Pathway at Night",
    category: "all",
    categoryLabel: "Twilight Pathway",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793133944/Warmly_Lit_Garden_Pathway_at_Night.png",
  },
  {
    id: "g-all-4",
    title: "Garden-Framed Cottage Entrance",
    category: "all",
    categoryLabel: "Cottage Grounds",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793134999/Garden-Framed_Cottage_Entrance.png",
  },
  {
    id: "g-all-5",
    title: "Sunset Wedding by the Infinity Pool",
    category: "all",
    categoryLabel: "Poolside Wedding",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793134998/Sunset_Wedding_by_the_Infinity_Pool.png",
  },
  {
    id: "g-all-6",
    title: "Illuminated Tropical Wedding Entrance",
    category: "all",
    categoryLabel: "Celebration Gateway",
    image:
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1793134994/Illuminated_Tropical_Wedding_Entrance.png",
  },
];

export default function ResortFeatures() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = [
    { id: "all", label: "All" },
    { id: "rooms", label: "Rooms & Villas" },
    { id: "dining", label: "Bliss Cafe" },
    { id: "pool", label: "Infinity Pool" },
    { id: "nature", label: "Nature & Views" },
    { id: "events", label: "Events & Lawns" },
    { id: "reception", label: "Reception" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? [...GALLERY_DATA.filter((item) => item.id !== "g-13"), ...ALL_EXCLUSIVE_ITEMS]
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const visibleItems =
    activeCategory === "all" && !isExpanded
      ? filteredItems.slice(0, 9)
      : filteredItems;

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
    <section id="features" className="py-20 sm:py-28 md:py-32 bg-[#F1E9DA] relative overflow-hidden">
      {/* Target anchors for older links */}
      <div id="amenities" className="absolute -top-24 left-0" />
      <div id="gallery" className="absolute top-[45%] left-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-20 sm:space-y-28">
        {/* Main Section Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Resort Features
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Amenities & Visual Moments
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-2xl mx-auto font-light leading-relaxed">
            From premier guest privileges to captured vistas of serenity, explore what makes Nirva a distinguished boutique getaway.
          </p>
          <div className="w-20 h-0.5 bg-[#C99A4A] mx-auto mt-3" />
        </div>

        {/* Subcategory 1: Amenities & Privileges */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
              Guest Privileges
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-bold">
              Amenities & Privileges
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] max-w-xl mx-auto font-light">
              Every facility is crafted to evoke effortless indulgence and intimate quietude during your stay.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4">
            {AMENITIES_LIST.map((amenity) => (
              <div
                key={amenity.title}
                className="glass-panel p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#D8C6A8] hover:border-[#C99A4A] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between bg-[#FBF8F1]"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center mb-2.5 sm:mb-4 group-hover:scale-105 transition-transform">
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                      {iconMap[amenity.icon]}
                    </div>
                  </div>
                  <h4 className="font-serif text-sm sm:text-lg text-[#3E2F24] font-semibold mb-1 sm:mb-2 group-hover:text-[#C99A4A] transition-colors leading-tight">
                    {amenity.title}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-[#6B5540] leading-snug sm:leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subcategory 2: Visual Journey → Moments of Nirva (existing Gallery) */}
        <div className="space-y-8 pt-12 border-t border-[#D8C6A8]">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
              Visual Journey
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3E2F24] font-bold">
              Moments of Nirva
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-2xl mx-auto font-light">
              Explore the serene beauty, ambient architecture, and tranquil poolside vistas of our retreat.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <div className="inline-flex gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#FBF8F1] border border-[#D8C6A8]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setIsExpanded(false);
                  }}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-semibold"
                      : "text-[#6B5540] hover:text-[#3E2F24] hover:bg-[#F7F3EA]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {visibleItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F7F3EA] border border-[#D8C6A8] hover:border-[#C99A4A] transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E6D8C2] font-semibold mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#F7F3EA] leading-tight flex items-center justify-between">
                    <span>{item.title}</span>
                    <Eye className="w-4 h-4 text-[#C99A4A] shrink-0" />
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* View More / Less Toggle for 'All' Category */}
          {activeCategory === "all" && filteredItems.length > 9 && (
            <div className="text-center pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C99A4A] bg-[#FBF8F1] text-[#3E2F24] text-xs font-semibold uppercase tracking-wider hover:bg-[#C99A4A] hover:text-[#2F241C] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>{isExpanded ? "Show Fewer Moments" : `View All Moments (${filteredItems.length})`}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#C99A4A] p-2 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] flex items-center justify-center transition-all cursor-pointer z-10"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="w-full flex items-center justify-between text-white pt-4 px-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C99A4A] block">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="font-serif text-base sm:text-xl font-bold">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <span className="text-xs font-mono text-[#D8C6A8]">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

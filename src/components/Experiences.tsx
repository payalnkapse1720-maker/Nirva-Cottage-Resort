"use client";

import { useState } from "react";
import { Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { EXPERIENCES_DATA } from "@/data/resort-data";

const WEDDING_IMAGES = [
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793185315/Festive_Floral_Wedding_Entrance.png",
    alt: "Festive Floral Wedding Entrance at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789319261/Wedding_1.jpg",
    alt: "Weddings & Celebrations floating pool stage at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793184703/Golden-Hour_Poolside_Floral_Mandap.png",
    alt: "Golden-Hour Poolside Floral Mandap at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793188189/Tropical_Wedding_Arch_and_Welcome_Sign.png",
    alt: "Tropical Wedding Arch and Welcome Sign at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793188610/Poolside_Mandap_with_Mountain_Views.png",
    alt: "Poolside Mandap with Mountain Views at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793188191/Tropical_Wedding_Entrance_Under_Night_Lights.png",
    alt: "Tropical Wedding Entrance Under Night Lights at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793185309/Poolside_Floral_Mandap_Ceremony_Setup.png",
    alt: "Poolside Floral Mandap Ceremony Setup at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793185549/Garden_Wedding_Entrance_with_Floral_Arch.png",
    alt: "Garden Wedding Entrance with Floral Arch at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793188191/Mountain_Garden_Wedding_Stage_Decor.png",
    alt: "Mountain Garden Wedding Stage Decor at Nirva The Cottage & Resort",
  },
];

const WELLNESS_IMAGES = [
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789330780/Wellnesss_1.png",
    alt: "Nightlife and wellness poolside ambiance and weekend vibes at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789331405/Wellness_2.png",
    alt: "Tranquil evening poolside lounge and acoustic melodies at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1793185582/Warmly_Lit_Courtyard_Bungalow_at_Night.png",
    alt: "Warmly Lit Courtyard Bungalow at Night at Nirva The Cottage & Resort",
  },
];

function WeddingCarousel({ badge, title }: { badge: string; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = WEDDING_IMAGES.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
    setTouchStartX(null);
  };

  const current = WEDDING_IMAGES[currentIndex];

  return (
    <div
      className="md:col-span-7 relative h-[250px] sm:h-[380px] md:h-[460px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-[#D8C6A8] group select-none focus:outline-none focus:ring-0 focus-visible:outline-none outline-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }}
      aria-label="Weddings and Celebrations image gallery carousel"
    >
      {/* Actual Photograph completely filling the fixed frame with object-cover */}
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        className="w-full h-full object-cover object-center select-none"
        loading="eager"
        decoding="async"
      />

      {/* Subtle bottom gradient only for caption text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Top Bar: Slide Counter & Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold shadow-md">
          {badge}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#F7F3EA] font-semibold tracking-wider shadow-md">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous wedding photograph"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next wedding photograph"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-10 pointer-events-auto pb-1">
        {WEDDING_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to wedding slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-6 bg-[#C99A4A] shadow-[0_0_8px_#C99A4A]"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function WellnessCarousel({ badge, title }: { badge: string; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = WELLNESS_IMAGES.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
    setTouchStartX(null);
  };

  const current = WELLNESS_IMAGES[currentIndex];

  return (
    <div
      className="md:col-span-7 relative h-[250px] sm:h-[380px] md:h-[460px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-[#D8C6A8] group select-none order-1 md:order-2 focus:outline-none focus:ring-0 focus-visible:outline-none outline-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }}
      aria-label="Nightlife and Wellness image gallery carousel"
    >
      {/* Actual Photograph completely filling the fixed frame with object-cover */}
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        className="w-full h-full object-cover object-center select-none"
        loading="eager"
        decoding="async"
      />

      {/* Subtle bottom gradient only for caption text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Top Bar: Slide Counter & Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold shadow-md">
          {badge}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#F7F3EA] font-semibold tracking-wider shadow-md">
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous wellness photograph"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next wellness photograph"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-10 pointer-events-auto pb-1">
        {WELLNESS_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to wellness slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-6 bg-[#C99A4A] shadow-[0_0_8px_#C99A4A]"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Experiences() {
  const exp1 = EXPERIENCES_DATA[0]; // Weddings & Celebrations
  const exp2 = EXPERIENCES_DATA[1]; // Nightlife & Wellness

  return (
    <section id="experiences" className="py-16 sm:py-24 md:py-32 bg-[#F7F3EA] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Curated Escapes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Curated Experiences
          </h2>
          <div className="w-20 h-0.5 bg-[#C99A4A] mx-auto mt-3" />
        </div>

        {/* Experience 1: Weddings & Events */}
        <div className="space-y-14 sm:space-y-24 md:space-y-32">
          <div className="grid md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <WeddingCarousel badge={exp1.badge} title={exp1.title} />

            <div className="md:col-span-5 md:pl-6 lg:pl-10 space-y-6">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                {exp1.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3E2F24] font-bold">
                {exp1.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
                {exp1.description}
              </p>

              <ul className="space-y-3 pt-2">
                {exp1.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[#3E2F24] text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#C99A4A]/15 border border-[#C99A4A]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C99A4A]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C99A4A] hover:text-[#9B7028] font-semibold border-b border-[#C99A4A] pb-1 transition-colors"
                >
                  Plan An Event With Us →
                </a>
              </div>
            </div>
          </div>

          {/* Experience 2: Nightlife & Wellness */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-5 md:pr-6 lg:pr-10 space-y-6 order-2 md:order-1">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                {exp2.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3E2F24] font-bold">
                {exp2.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
                {exp2.description}
              </p>

              <ul className="space-y-3 pt-2">
                {exp2.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[#3E2F24] text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#C99A4A]/15 border border-[#C99A4A]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C99A4A]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C99A4A] hover:text-[#9B7028] font-semibold border-b border-[#C99A4A] pb-1 transition-colors"
                >
                  Join The Weekend Vibe →
                </a>
              </div>
            </div>

            <WellnessCarousel badge={exp2.badge} title={exp2.title} />
          </div>
        </div>
      </div>
    </section>
  );
}

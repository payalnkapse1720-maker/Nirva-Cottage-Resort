"use client";

import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1A1612]">
      {/* Background Image with Ken Burns animation (Responsive: Portrait on mobile, Landscape on tablet/desktop) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop & Tablet View (Landscape, >= 768px) */}
        <Image
          src="/images/nirva-hero.jpg"
          alt="Nirva The Cottage & Resort Meditative Sculpture and Serene Nature Landscape"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 0vw"
          className="object-cover object-center ken-burns hidden md:block"
        />
        {/* Mobile View (Portrait, < 768px below tablet size) */}
        <Image
          src="/images/nirva-hero-mobile.jpg"
          alt="Nirva The Cottage & Resort Meditative Sculpture Mobile View"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0vw"
          className="object-cover object-center ken-burns block md:hidden"
        />
        {/* Subtle, soft cinematic gradient to preserve text legibility while keeping the photograph bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 pointer-events-none" />
      </div>

      {/* Hero Content - Stretched between Top Text Section and Bottom Action/Highlights */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-10">
        {/* Top Section: Eyebrow Badge, Main Headline & Supporting Paragraph */}
        <div className="max-w-2xl text-left flex flex-col items-start">
          {/* Subtle Luxury Badge / Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-3 sm:mb-6 shadow-md animate-fade-in">
            <div className="relative w-4 h-4 shrink-0">
              <Image
                src="/nirva-emblem.png"
                alt="Nirva Crest"
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8D7B8] font-semibold font-sans">
              NATURE • COMFORT • UNWIND
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[2.5rem] min-[390px]:text-[2.75rem] sm:text-6xl md:text-7xl text-white font-bold tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 drop-shadow-md">
            Escape to<br />
            <span className="text-[#E0B86C] italic font-normal">Infinite Serenity</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-sans text-sm min-[390px]:text-base sm:text-lg md:text-xl text-[#F3EDE2]/90 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Experience peaceful luxury surrounded by the natural beauty of Kondeshwar Valley.
          </p>
        </div>

        {/* Bottom Section: Explore Resort CTA & Floating Highlights Strip */}
        <div className="max-w-2xl text-left flex flex-col items-start w-full space-y-4 sm:space-y-6 pt-8 sm:pt-12">
          {/* CTA - Explore Resort only */}
          <div className="flex items-center w-full sm:w-auto">
            <a
              href="#about"
              className="bg-white/15 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] hover:border-[#C99A4A] font-semibold text-xs uppercase tracking-[0.2em] px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-white/30 backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 font-sans group shadow-md"
            >
              Explore Resort
              <ArrowDown className="w-3.5 h-3.5 text-[#E0B86C] group-hover:text-[#2F241C] transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Floating Highlights Strip - Clean 2x2 on mobile, 4-col on tablet/desktop */}
          <div className="py-3.5 sm:py-5 px-4 sm:px-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-left w-full">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E0B86C] font-bold">20</span>
              <span className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold leading-tight">
                Luxury Cottages & Villas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E0B86C] font-bold">Horizon</span>
              <span className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold leading-tight">
                Valley Infinity Pool
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E0B86C] font-bold">Bliss Cafe</span>
              <span className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold leading-tight">
                Multi-Cuisine Dining
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#E0B86C] font-bold flex items-center gap-1">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0B86C] shrink-0" /> Badlapur
              </span>
              <span className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold leading-tight">
                Kondeshwar Foothills
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

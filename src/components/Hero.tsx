"use client";

import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#1A1612]">
      {/* Background Image with Ken Burns animation */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://res.cloudinary.com/cx2wca8r/image/upload/v1789246056/Nirvaa_Hero_Bg_2.png"
          alt="Nirva The Cottage & Resort Infinity Pool and Sunset Hills Aerial View"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover ken-burns"
        />
        {/* Subtle localized dark cinematic gradient behind left-side Hero content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent sm:via-black/45 md:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 md:hidden pointer-events-none" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-28 pb-16">
        <div className="max-w-2xl text-left flex flex-col items-start">
          {/* Subtle Luxury Badge / Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-6 shadow-md animate-fade-in">
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
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-bold tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            Escape to<br />
            <span className="text-[#E0B86C] italic font-normal">Infinite Serenity</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#F3EDE2]/90 max-w-xl mb-8 font-medium leading-relaxed drop-shadow-sm">
            Discover a sanctuary where quiet luxury meets the breathtaking stillness of nature.
            Experience boutique hospitality redefined along the pristine Kondeshwar valley.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <a
              href="#stay"
              className="bg-[#C99A4A] text-[#2F241C] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-[#b88939] hover:shadow-[0_4px_25px_rgba(201,154,74,0.45)] transition-all duration-300 text-center font-sans border border-[#C99A4A]"
            >
              Book Your Stay
            </a>
            <a
              href="#about"
              className="bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg border border-white/30 backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 font-sans group shadow-sm"
            >
              Explore Resort
              <ArrowDown className="w-3.5 h-3.5 text-[#E0B86C] transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Floating Highlights Strip */}
          <div className="mt-12 sm:mt-16 pt-5 pb-5 px-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full max-w-2xl">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-[#E0B86C] font-bold">20</span>
              <span className="text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold">
                Luxury Cottages & Villas
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-[#E0B86C] font-bold">Horizon</span>
              <span className="text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold">
                Valley Infinity Pool
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-[#E0B86C] font-bold">Bliss Cafe</span>
              <span className="text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold">
                Multi-Cuisine Dining
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-[#E0B86C] font-bold flex items-center gap-1">
                <MapPin className="w-5 h-5 text-[#E0B86C]" /> Badlapur
              </span>
              <span className="text-xs text-white/90 uppercase tracking-wider font-sans mt-0.5 font-semibold">
                Kondeshwar Foothills
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

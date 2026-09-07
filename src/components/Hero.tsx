"use client";

import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F7F3EA]">
      {/* Background Image with Ken Burns animation */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxvJb4m7duXvd_HsPV_nKEjpBMlc3FrFizI5LqzxbZH8p5MHB2GTmVhVCjNJIVAgzWM20E9LOpX0zbjQBjvI5Y0CsKsVOMy18oIjDvrrG9XxrHuOJb81cePcYILYjdOqwcZ-VB53_0tTHzFHd40bGfs8wJvXTigxbPjJ4IpX68IMyAzCCjgmuoyiF45oX2tJ-6ElxF4LkKp1FLfX1Luib1Ih7nueOFjeeAEdEh11fWkqv5a7oi5tdLg"
          alt="Nirva The Cottage & Resort Infinity Pool and Sunset Hills Aerial View"
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        {/* Pure Center Radiant Glow with Higher Opacity (fades smoothly to transparent corners) */}
        <div className="absolute inset-0 bg-radial-[ellipse_65%_58%_at_50%_48%,_rgba(255,255,255,0.85)_0%,_rgba(251,248,241,0.65)_38%,_rgba(247,243,234,0.25)_68%,_transparent_100%]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Luxury Badge with Official Crest */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FBF8F1]/95 border border-[#D8C6A8] backdrop-blur-md mb-8 shadow-[0_4px_20px_rgba(62,47,36,0.08)] animate-fade-in">
          <div className="relative w-4 h-4 shrink-0">
            <Image
              src="/nirva-emblem.png"
              alt="Nirva Crest"
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5C4939] font-semibold font-sans">
            Boutique Luxury • Badlapur East
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#3E2F24] font-bold tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
          Escape to Infinite{" "}
          <span className="text-[#C99A4A] italic font-normal">Serenity</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#4F3D30] max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Discover a sanctuary where quiet luxury meets the breathtaking stillness of nature.
          Experience boutique hospitality redefined along the pristine Kondeshwar valley.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#stay"
            className="w-full sm:w-auto bg-[#C99A4A] text-[#2F241C] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-[#b88939] hover:shadow-[0_4px_25px_rgba(201,154,74,0.35)] transition-all duration-300 text-center font-sans border border-[#C99A4A]"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto bg-[#FBF8F1]/94 text-[#3E2F24] hover:bg-[#F1E9DA] hover:text-[#2F241C] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg border border-[#C9AA78] backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 font-sans group shadow-sm"
          >
            Explore Resort
            <ArrowDown className="w-3.5 h-3.5 text-[#C99A4A] transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>

        {/* Floating Highlights Strip */}
        <div className="mt-16 sm:mt-20 pt-6 pb-6 px-6 sm:px-8 rounded-2xl bg-[#FBF8F1]/94 backdrop-blur-md border border-[#D8C6A8] shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-4xl">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#C99A4A] font-bold">20</span>
            <span className="text-xs text-[#3E2F24] uppercase tracking-wider font-sans mt-0.5 font-semibold">
              Luxury Cottages & Villas
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#C99A4A] font-bold">Horizon</span>
            <span className="text-xs text-[#3E2F24] uppercase tracking-wider font-sans mt-0.5 font-semibold">
              Valley Infinity Pool
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#C99A4A] font-bold">Bliss Cafe</span>
            <span className="text-xs text-[#3E2F24] uppercase tracking-wider font-sans mt-0.5 font-semibold">
              Multi-Cuisine Dining
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#C99A4A] font-bold flex items-center gap-1">
              <MapPin className="w-5 h-5 text-[#C99A4A]" /> Badlapur
            </span>
            <span className="text-xs text-[#3E2F24] uppercase tracking-wider font-sans mt-0.5 font-semibold">
              Kondeshwar Foothills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

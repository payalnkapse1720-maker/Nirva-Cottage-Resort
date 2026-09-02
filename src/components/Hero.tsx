"use client";

import Image from "next/image";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
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
        {/* Cinematic Multi-layered Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.8)_100%]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121411]/80 border border-[#d4af37]/30 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E5E4E2] font-medium font-sans">
            Boutique Luxury • Badlapur East
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-[1.08] mb-6 drop-shadow-2xl">
          Escape to Infinite{" "}
          <span className="gold-gradient-text italic font-normal">Serenity</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#E5E4E2]/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Discover a sanctuary where quiet luxury meets the breathtaking stillness of nature.
          Experience boutique hospitality redefined along the pristine Kondeshwar valley.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <a
            href="#stay"
            className="w-full sm:w-auto bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#f2ca50] hover:to-[#C5A028] hover:shadow-[0_0_30px_rgba(242,202,80,0.35)] transition-all duration-300 text-center font-sans border border-[#f2ca50]"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto text-[#E5E4E2] hover:text-[#f2ca50] font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-white/5 backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2 font-sans group"
          >
            Explore Resort
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>

        {/* Floating Highlights Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-4xl">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#f2ca50] font-semibold">20</span>
            <span className="text-xs text-[#E5E4E2]/70 uppercase tracking-wider font-sans mt-0.5">
              Luxury Cottages & Villas
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#f2ca50] font-semibold">Horizon</span>
            <span className="text-xs text-[#E5E4E2]/70 uppercase tracking-wider font-sans mt-0.5">
              Valley Infinity Pool
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#f2ca50] font-semibold">Bliss Cafe</span>
            <span className="text-xs text-[#E5E4E2]/70 uppercase tracking-wider font-sans mt-0.5">
              Multi-Cuisine Dining
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl text-[#f2ca50] font-semibold flex items-center gap-1">
              <MapPin className="w-5 h-5 text-[#f2ca50]" /> Badlapur
            </span>
            <span className="text-xs text-[#E5E4E2]/70 uppercase tracking-wider font-sans mt-0.5">
              Kondeshwar Foothills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

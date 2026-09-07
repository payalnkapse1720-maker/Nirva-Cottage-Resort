"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Utensils,
  Music,
  Waves,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
  Check,
  Coffee,
  Info,
} from "lucide-react";
import {
  RESORT_INFO,
  STAY_WITH_FOOD_PACKAGES,
  SINGLE_COTTAGE_FOOD_PACKAGE,
  FLOATING_BREAKFAST,
  BUFFET_TIMINGS,
} from "@/data/resort-data";

export default function AboutBlissCafe() {
  const [activeMealId, setActiveMealId] = useState<string>("lunch");

  return (
    <section id="about" className="py-24 md:py-32 bg-[#121411] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 space-y-20">
        {/* Top Split: Intro & Feature Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
              <Utensils className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
                The Dining Experience
              </span>
            </div>

            <h2
              id="bliss-cafe"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-medium"
            >
              Savor the Stillness at <br />
              <span className="gold-gradient-text font-bold">Bliss Cafe</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#E5E4E2]/75 leading-relaxed font-light">
              Indulge in culinary artistry while overlooking our magnificent infinity pool.{" "}
              <strong className="text-[#f2ca50] font-medium">Bliss Cafe</strong> offers a curated
              multi-cuisine menu set against the backdrop of serene valley views, accompanied by
              ambient, soulful music that perfectly complements the golden hour.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">01</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-[#f2ca50]" /> Infinity Pool
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Seamlessly blending with the misty valley horizon.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">02</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#f2ca50]" /> Gourmet Dining
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Multi-cuisine delights freshly prepared by artisan chefs.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">03</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-[#f2ca50]" /> Soulful Music
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Curated soundscapes that flow as twilight descends.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">04</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#f2ca50]" /> {RESORT_INFO.restaurantCapacity}
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Intimate indoor & poolside seating for private dining.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image with Offset Frame */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 border border-[#d4af37]/25 rounded-2xl transform translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/20 group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7GE-tbuLhkRuJM8DBNWIxrHx12UPQvkMOEq5Ron8qFgWqNLw-imeXE03oKhYCkc3e5aWLyCHwe7lWJvC2-jH4Tjud791FDdbIA6TYnD-3GZ1K05W6Rs53Lc-o5QBo3DhFJw_BREzvtN83qTgBwq8n46jlIoRhz0zuDLiskCTFsM-xHhSlfLF_rWcfvMMin_xQR33Gfap_8_DVlJHe7wySKyQwWpzmg8Di64zSVfhnoZGU4UomTiauNg"
                alt="Bliss Cafe by the infinity pool at dusk at Nirva The Cottage & Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-medium">
                  Bliss Cafe Lounge
                </span>
                <p className="font-serif text-xl text-white">Twilight at the Infinity Deck</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Stay With Food Packages & Single Cottage Special Package */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-0.5">
              <Sparkles className="w-3 h-3 text-[#f2ca50]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                Curated Packages
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              Stay With Food Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#E5E4E2]/70 font-light">
              Elevate your retreat with all-inclusive dining packages crafted by our chef.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Package 1: One Night Food Package */}
            <div className="p-6 rounded-2xl bg-[#161714] border border-[#d4af37]/30 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f2ca50]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold block">
                  Overnight Dining Package
                </span>
                <h4 className="font-serif text-xl text-white font-bold">
                  {STAY_WITH_FOOD_PACKAGES[0].title}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold text-[#f2ca50]">
                    {STAY_WITH_FOOD_PACKAGES[0].priceDisplay}
                  </span>
                  <span className="text-xs text-[#E5E4E2]/60 font-light">
                    {STAY_WITH_FOOD_PACKAGES[0].period}
                  </span>
                </div>
                <ul className="space-y-2.5 pt-3 border-t border-white/5 text-xs text-[#E5E4E2]/85">
                  {STAY_WITH_FOOD_PACKAGES[0].includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] text-[#E5E4E2]/60 flex items-center justify-between">
                <span>Stay + 2 Meals + Breakfast + Snacks</span>
                <span className="text-[#f2ca50]">Excl. GST</span>
              </div>
            </div>

            {/* Package 2: One Day Food Package */}
            <div className="p-6 rounded-2xl bg-[#161714] border border-[#d4af37]/30 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d0c5af] font-semibold block">
                  Day Outing Dining Package
                </span>
                <h4 className="font-serif text-xl text-white font-bold">
                  {STAY_WITH_FOOD_PACKAGES[1].title}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold text-white">
                    {STAY_WITH_FOOD_PACKAGES[1].priceDisplay}
                  </span>
                  <span className="text-xs text-[#E5E4E2]/60 font-light">
                    {STAY_WITH_FOOD_PACKAGES[1].period}
                  </span>
                </div>
                <ul className="space-y-2.5 pt-3 border-t border-white/5 text-xs text-[#E5E4E2]/85">
                  {STAY_WITH_FOOD_PACKAGES[1].includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] text-[#E5E4E2]/60 flex items-center justify-between">
                <span>Stay + 1 Meal + Breakfast + Snacks</span>
                <span className="text-[#f2ca50]">Excl. GST</span>
              </div>
            </div>

            {/* Package 3: Single Cottage Food Package & Kids Rate */}
            <div className="p-6 rounded-2xl bg-[#161714] border border-[#d4af37]/30 flex flex-col justify-between space-y-5 md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold block">
                  Dedicated Cottage Package
                </span>
                <h4 className="font-serif text-xl text-white font-bold">
                  {SINGLE_COTTAGE_FOOD_PACKAGE.title}
                </h4>
                <p className="text-xs text-[#E5E4E2]/70 font-light">
                  {SINGLE_COTTAGE_FOOD_PACKAGE.subtitle}
                </p>

                {/* Rates Table */}
                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white font-medium">
                      Adults ({SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.capacity})
                    </span>
                    <span className="text-[#f2ca50] font-semibold font-serif">
                      Day {SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.dayPrice} • Night{" "}
                      {SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.nightPrice}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white/80 font-medium">
                      {SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.ageRange}
                    </span>
                    <span className="text-[#E5E4E2]/90 font-medium font-serif">
                      Day {SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.dayPrice} • Night{" "}
                      {SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.nightPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Breakfast Callout */}
              <div className="p-3.5 rounded-xl bg-[#f2ca50]/10 border border-[#f2ca50]/25 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs text-white font-bold flex items-center gap-1.5">
                    <Waves className="w-3.5 h-3.5 text-[#f2ca50]" /> {FLOATING_BREAKFAST.title}
                  </span>
                  <span className="text-[10px] text-[#E5E4E2]/70 block font-light">
                    {FLOATING_BREAKFAST.note}
                  </span>
                </div>
                <span className="font-serif text-sm font-bold text-[#f2ca50]">
                  {FLOATING_BREAKFAST.priceDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Buffet Timings & Menu Accordions */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-0.5">
              <Clock className="w-3 h-3 text-[#f2ca50]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                Daily Schedule
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              Buffet Timings & Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#E5E4E2]/70 font-light">
              Tap any meal slot to review the freshly curated buffet menu.
            </p>
          </div>

          {/* 4 Compact Cards / Tabs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUFFET_TIMINGS.map((meal) => {
              const isOpen = activeMealId === meal.id;
              return (
                <div
                  key={meal.id}
                  onClick={() => setActiveMealId(isOpen ? "" : meal.id)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isOpen
                      ? "bg-[#1f201d] border-[#f2ca50] shadow-lg shadow-[#d4af37]/10"
                      : "bg-[#161714] border-[#d4af37]/20 hover:border-[#f2ca50]/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-[#f2ca50]" />
                      <h4 className="font-serif text-lg text-white font-bold">{meal.name}</h4>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#f2ca50] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div className="inline-block text-xs font-mono text-[#f2ca50] bg-black/40 px-2.5 py-1 rounded-md mb-3 border border-white/5 self-start">
                    {meal.time}
                  </div>

                  {/* Menu Items Preview / Expanded */}
                  <div className="space-y-2">
                    {isOpen ? (
                      <ul className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-[#E5E4E2]/85">
                        {meal.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#f2ca50] leading-none mt-1">•</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-[#E5E4E2]/60 italic">
                        Tap to reveal buffet items →
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle GST & Pricing Disclaimer */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center gap-2 text-center text-xs text-[#E5E4E2]/60 max-w-xl mx-auto">
            <Info className="w-4 h-4 text-[#f2ca50] shrink-0" />
            <span>All buffet packages and stay pricing are exclusive of GST charges.</span>
          </div>
        </div>
      </div>
    </section>
  );
}


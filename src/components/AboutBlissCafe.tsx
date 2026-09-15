"use client";

import { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  RESORT_INFO,
  STAY_WITH_FOOD_PACKAGES,
  SINGLE_COTTAGE_FOOD_PACKAGE,
  FLOATING_BREAKFAST,
  BUFFET_TIMINGS,
} from "@/data/resort-data";

const BLISS_CAFE_IMAGES = [
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789315203/Bliss_Cafe_1.jpg",
    alt: "Bliss Cafe by the infinity pool at dusk at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789314862/Bliss_Cafe_2.jpg",
    alt: "Bliss Cafe dining ambiance at Nirva The Cottage & Resort",
  },
  {
    src: "https://res.cloudinary.com/cx2wca8r/image/upload/v1789314301/Bliss_Cafe_3.jpg",
    alt: "Bliss Cafe poolside dining experience at Nirva The Cottage & Resort",
  },
];

export default function AboutBlissCafe() {
  const [activeMealId, setActiveMealId] = useState<string>("lunch");
  const [currentBlissIndex, setCurrentBlissIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalBlissImages = BLISS_CAFE_IMAGES.length;

  const handleNextBlissImage = () => {
    setCurrentBlissIndex((prev) => (prev + 1) % totalBlissImages);
  };

  const handlePrevBlissImage = () => {
    setCurrentBlissIndex((prev) => (prev - 1 + totalBlissImages) % totalBlissImages);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) handleNextBlissImage();
    else if (diff < -40) handlePrevBlissImage();
    setTouchStartX(null);
  };

  const currentBliss = BLISS_CAFE_IMAGES[currentBlissIndex];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F3EA] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C99A4A]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 space-y-20">
        {/* Top Split: Intro & Feature Image Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
              <Utensils className="w-4 h-4 text-[#C99A4A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
                The Dining Experience
              </span>
            </div>

            <h2
              id="bliss-cafe"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] leading-tight font-medium"
            >
              Savor the Stillness at <br />
              <span className="gold-gradient-text font-bold">Bliss Cafe</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6B5540] leading-relaxed font-light">
              Indulge in culinary artistry while overlooking our magnificent infinity pool.{" "}
              <strong className="text-[#3E2F24] font-medium">Bliss Cafe</strong> offers a curated
              multi-cuisine menu set against the backdrop of serene valley views, accompanied by
              ambient, soulful music that perfectly complements the golden hour.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#C99A4A] font-bold">01</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-[#3E2F24] tracking-wide flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-[#C99A4A]" /> Infinity Pool
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5540] font-light leading-snug">
                  Seamlessly blending with the misty valley horizon.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#C99A4A] font-bold">02</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-[#3E2F24] tracking-wide flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#C99A4A]" /> Gourmet Dining
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5540] font-light leading-snug">
                  Multi-cuisine delights freshly prepared by artisan chefs.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#C99A4A] font-bold">03</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-[#3E2F24] tracking-wide flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-[#C99A4A]" /> Soulful Music
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5540] font-light leading-snug">
                  Curated soundscapes that flow as twilight descends.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#C99A4A] font-bold">04</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-[#3E2F24] tracking-wide flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C99A4A]" /> {RESORT_INFO.restaurantCapacity}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5540] font-light leading-snug">
                  Intimate indoor & poolside seating for private dining.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bliss Cafe Carousel */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 sm:-inset-4 border border-[#D8C6A8] rounded-2xl transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 pointer-events-none -z-10" />
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C6A8] group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") handlePrevBlissImage();
                if (e.key === "ArrowRight") handleNextBlissImage();
              }}
              aria-label="Bliss Cafe dining experience image carousel"
            >
              {/* Actual Photograph filling 100% of the fixed carousel card directly */}
              <img
                key={currentBliss.src}
                src={currentBliss.src}
                alt={currentBliss.alt}
                className="w-full h-full object-cover object-center block select-none"
                loading="eager"
                decoding="async"
              />

              {/* Subtle bottom gradient only for caption text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Top Bar: Slide Counter & Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold shadow-md">
                  Bliss Cafe Lounge
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#F7F3EA] font-semibold tracking-wider shadow-md">
                  {String(currentBlissIndex + 1).padStart(2, "0")} / {String(totalBlissImages).padStart(2, "0")}
                </span>
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevBlissImage}
                aria-label="Previous Bliss Cafe photograph"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C99A4A]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNextBlissImage}
                aria-label="Next Bliss Cafe photograph"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C99A4A]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Content & Dots */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none">
                <div>
                  <p className="font-serif text-lg sm:text-xl text-white font-bold drop-shadow-md">
                    Twilight at the Infinity Deck
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 pointer-events-auto pb-1">
                  {BLISS_CAFE_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentBlissIndex(idx)}
                      aria-label={`Go to Bliss Cafe slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentBlissIndex
                          ? "w-6 bg-[#C99A4A] shadow-[0_0_8px_#C99A4A]"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Stay With Food Packages & Single Cottage Special Package */}
        <div className="space-y-8 pt-8 border-t border-[#D8C6A8]">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-0.5">
              <Sparkles className="w-3 h-3 text-[#C99A4A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                Curated Packages
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-bold">
              Stay With Food Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5540] font-light">
              Elevate your retreat with all-inclusive dining packages crafted by our chef.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Package 1: One Day Food Package */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B5540] font-semibold block">
                  Day Outing Dining Package
                </span>
                <h4 className="font-serif text-xl text-[#3E2F24] font-bold">
                  {STAY_WITH_FOOD_PACKAGES[0].title}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-3xl font-bold text-[#3E2F24]">
                    {STAY_WITH_FOOD_PACKAGES[0].priceDisplay}
                  </span>
                  <span className="text-xs text-[#6B5540] font-light">
                    {STAY_WITH_FOOD_PACKAGES[0].period}
                  </span>
                </div>
                <ul className="space-y-2.5 pt-3 border-t border-[#D8C6A8]/40 text-xs text-[#3E2F24]">
                  {STAY_WITH_FOOD_PACKAGES[0].includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-[#D8C6A8]/40 text-[10px] text-[#6B5540] flex items-center justify-between">
                <span>Stay + 1 Meal + Breakfast + Snacks</span>
                <span className="text-[#C99A4A] font-semibold">Excl. GST</span>
              </div>
            </div>

            {/* Package 2: One Night Food Package */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C99A4A]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold block">
                  Overnight Dining Package
                </span>
                <h4 className="font-serif text-xl text-[#3E2F24] font-bold">
                  {STAY_WITH_FOOD_PACKAGES[1].title}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-3xl font-bold text-[#C99A4A]">
                    {STAY_WITH_FOOD_PACKAGES[1].priceDisplay}
                  </span>
                  <span className="text-xs text-[#6B5540] font-light">
                    {STAY_WITH_FOOD_PACKAGES[1].period}
                  </span>
                </div>
                {STAY_WITH_FOOD_PACKAGES[1].note && (
                  <p className="text-[11px] text-[#6B5540] font-light">
                    {STAY_WITH_FOOD_PACKAGES[1].note}
                  </p>
                )}
                <ul className="space-y-2.5 pt-3 border-t border-[#D8C6A8]/40 text-xs text-[#3E2F24]">
                  {STAY_WITH_FOOD_PACKAGES[1].includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-[#D8C6A8]/40 text-[10px] text-[#6B5540] flex items-center justify-between">
                <span>Stay + 2 Meals + Breakfast + Snacks</span>
                <span className="text-[#C99A4A] font-semibold">Excl. GST</span>
              </div>
            </div>

            {/* Package 3: Single Cottage Food Package & Kids Rate */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-5 md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold block">
                  Dedicated Cottage Package
                </span>
                <h4 className="font-serif text-xl text-[#3E2F24] font-bold">
                  {SINGLE_COTTAGE_FOOD_PACKAGE.title}
                </h4>
                <p className="text-xs text-[#6B5540] font-light">
                  {SINGLE_COTTAGE_FOOD_PACKAGE.subtitle}
                </p>

                {/* Rates Table */}
                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-between text-xs">
                    <span className="text-[#3E2F24] font-medium">
                      Adults ({SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.capacity})
                    </span>
                    <span className="text-[#C99A4A] font-semibold">
                      Day <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.dayPrice}</span> • Night{" "}
                      <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.nightPrice}</span>
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-between text-xs">
                    <span className="text-[#6B5540] font-medium">
                      {SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.ageRange}
                    </span>
                    <span className="text-[#3E2F24] font-medium">
                      Day <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.dayPrice}</span> • Night{" "}
                      <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.nightPrice}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Breakfast Callout */}
              <div className="p-3.5 rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs text-[#3E2F24] font-bold flex items-center gap-1.5">
                    <Waves className="w-3.5 h-3.5 text-[#C99A4A]" /> {FLOATING_BREAKFAST.title}
                  </span>
                  <span className="text-[10px] text-[#6B5540] block font-light">
                    {FLOATING_BREAKFAST.note}
                  </span>
                </div>
                <span className="font-sans text-sm font-bold text-[#C99A4A]">
                  {FLOATING_BREAKFAST.priceDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Buffet Timings & Menu Accordions */}
        <div className="space-y-8 pt-8 border-t border-[#D8C6A8]">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-0.5">
              <Clock className="w-3 h-3 text-[#C99A4A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                Daily Schedule
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-bold">
              Buffet Timings & Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5540] font-light">
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
                      ? "bg-[#FBF8F1] border-[#C99A4A] shadow-lg shadow-[#C99A4A]/10"
                      : "bg-[#FBF8F1] border-[#D8C6A8] hover:border-[#C99A4A]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-[#C99A4A]" />
                      <h4 className="font-serif text-lg text-[#3E2F24] font-bold">{meal.name}</h4>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C99A4A] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div className="inline-block text-xs font-mono text-[#6B5540] bg-[#F1E9DA] px-2.5 py-1 rounded-md mb-3 border border-[#D8C6A8] self-start font-medium">
                    {meal.time}
                  </div>

                  {/* Menu Items Preview / Expanded */}
                  <div className="space-y-2">
                    {isOpen ? (
                      <ul className="space-y-1.5 pt-2 border-t border-[#D8C6A8]/40 text-xs text-[#3E2F24]">
                        {meal.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#C99A4A] leading-none mt-1">•</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-[#6B5540] italic">
                        Tap to reveal buffet items →
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtle GST & Pricing Disclaimer */}
          <div className="p-4 rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center gap-2 text-center text-xs text-[#6B5540] max-w-xl mx-auto">
            <Info className="w-4 h-4 text-[#C99A4A] shrink-0" />
            <span>All buffet packages and stay pricing are exclusive of GST charges.</span>
          </div>
        </div>
      </div>
    </section>
  );
}


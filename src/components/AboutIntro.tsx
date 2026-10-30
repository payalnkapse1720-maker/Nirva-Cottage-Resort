"use client";

import Image from "next/image";
import {
  Sparkles,
  BedDouble,
  Utensils,
  Compass,
  Waves,
  MapPin,
  ArrowRight,
  ShieldCheck,
  TreePine,
  SunMedium,
} from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function AboutIntro() {
  const guideChapters = [
    {
      num: "01",
      title: "Sanctuaries of Comfort",
      subtitle: "Accommodations & Packages",
      description: "7 boutique stay categories from private cottages and duplexes to the sunset suite and curated dining packages.",
      href: "#stay",
      icon: <BedDouble className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Explore Stays",
    },
    {
      num: "02",
      title: "Café & Restaurant",
      subtitle: "Bliss Cafe & Daily Schedules",
      description: "Artisan multi-cuisine dining overlooking our valley infinity pool, with chef-curated buffet schedules.",
      href: "#dining",
      icon: <Utensils className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "View Dining",
    },
    {
      num: "03",
      title: "Curated Escapes",
      subtitle: "Weddings, Nightlife & Nature",
      description: "Grand wedding celebrations, tranquil weekend nightlife vibes, and guided Kondeshwar wilderness trails.",
      href: "#escapes",
      icon: <Compass className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Discover Escapes",
    },
    {
      num: "04",
      title: "Resort Features",
      subtitle: "Amenities & Visual Moments",
      description: "Valley infinity pool, games, rooftop dining, high-speed Wi-Fi, and moments captured across our grounds.",
      href: "#features",
      icon: <Waves className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "View Amenities",
    },
    {
      num: "05",
      title: "Destination & Access",
      subtitle: "Reach Nirva & Concierge Desk",
      description: "Convenient travel routes from Mumbai & Pune, official stay schedules, and direct booking assistance.",
      href: "#access",
      icon: <MapPin className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Plan Your Visit",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 bg-[#F7F3EA] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A4A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8C6A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Top Story Split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
                Introduction • Welcome to Nirva
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] leading-tight font-medium">
              Where Quiet Luxury Meets <br />
              <span className="gold-gradient-text font-bold">Untouched Nature</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#6B5540] leading-relaxed font-light">
              Tucked away in the serene foothills of Kondeshwar Valley, <strong className="text-[#3E2F24] font-medium">{RESORT_INFO.name}</strong> is a boutique sanctuary designed for travellers seeking solace, celebration, and unhurried luxury. Just minutes from Badlapur yet blissfully secluded from city commotion, Nirva offers an intimate retreat where misty hill horizons greet you every sunrise.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
              Whether you are gathering for an unforgettable destination wedding, indulging in poolside multi-cuisine flavours at Bliss Cafe, trekking scenic waterfall trails, or unwinding in vibrant private cottages, every corner of Nirva is thoughtfully curated to restore harmony and inspire wonder.
            </p>

            {/* Quick Core Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#D8C6A8]/60">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C99A4A]">
                  <TreePine className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#3E2F24]">Secluded</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#6B5540] font-light">Kondeshwar Foothills</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C99A4A]">
                  <Waves className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#3E2F24]">Horizon</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#6B5540] font-light">Valley Infinity Pool</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C99A4A]">
                  <SunMedium className="w-4 h-4 shrink-0" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#3E2F24]">Artisan</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#6B5540] font-light">Boutique Hospitality</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 sm:-inset-4 border border-[#D8C6A8] rounded-2xl transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 pointer-events-none -z-10" />
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C6A8]">
              <Image
                src="https://res.cloudinary.com/cx2wca8r/image/upload/v1793133954/Misty_Mountain_Poolside_Retreat.png"
                alt="Nirva The Cottage & Resort Valley View and Infinity Pool"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FBF8F1]/90 backdrop-blur-md border border-[#D8C6A8] shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C99A4A] font-bold block">
                      The Sanctuary
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E2F24]">
                      A World Within Nature
                    </h3>
                  </div>
                  <a
                    href="#stay"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C99A4A] text-[#2F241C] text-xs font-semibold hover:bg-[#b88939] transition-colors shrink-0"
                  >
                    Explore <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Website Experience Guide / Chapters */}
        <div className="pt-8 border-t border-[#D8C6A8]">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
              Curated Navigation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Explore Nirva Through Our Five Chapters
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] max-w-xl mx-auto font-light">
              Follow the journey through our sanctuaries, dining, experiences, features, and travel routes.
            </p>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {guideChapters.map((chapter) => (
              <a
                key={chapter.num}
                href={chapter.href}
                className="group p-5 sm:p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#C99A4A]">
                      {chapter.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7F3EA] border border-[#D8C6A8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {chapter.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#3E2F24] group-hover:text-[#C99A4A] transition-colors leading-snug">
                      {chapter.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B5540] font-medium block mt-0.5">
                      {chapter.subtitle}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#6B5540] leading-relaxed font-light">
                    {chapter.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8C6A8]/40 flex items-center justify-between text-xs font-semibold text-[#C99A4A] group-hover:text-[#9B7028] transition-colors">
                  <span>{chapter.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  BedDouble,
  Utensils,
  Compass,
  Waves,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function AboutIntro() {
  const guideChapters = [
    {
      num: "01",
      title: "Sanctuaries of Comfort",
      subtitle: "Accommodations & Packages",
      description:
        "7 boutique stay categories from private cottages and duplexes to the sunset suite and curated dining packages.",
      href: "#stay",
      icon: <BedDouble className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Explore Stays",
    },
    {
      num: "02",
      title: "Café & Restaurant",
      subtitle: "Bliss Cafe & Daily Schedules",
      description:
        "Artisan multi-cuisine dining overlooking our valley infinity pool, with chef-curated buffet schedules.",
      href: "#dining",
      icon: <Utensils className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "View Dining",
    },
    {
      num: "03",
      title: "Curated Escapes",
      subtitle: "Weddings, Nightlife & Nature",
      description:
        "Grand wedding celebrations, tranquil weekend nightlife vibes, and guided Kondeshwar wilderness trails.",
      href: "#escapes",
      icon: <Compass className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Discover Escapes",
    },
    {
      num: "04",
      title: "Resort Features",
      subtitle: "Amenities & Visual Moments",
      description:
        "Valley infinity pool, games, rooftop dining, high-speed Wi-Fi, and moments captured across our grounds.",
      href: "#features",
      icon: <Waves className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "View Amenities",
    },
    {
      num: "05",
      title: "Destination & Access",
      subtitle: "Reach Nirva & Concierge Desk",
      description:
        "Convenient travel routes from Mumbai & Pune, official stay schedules, and direct booking assistance.",
      href: "#access",
      icon: <MapPin className="w-4 h-4 text-[#C99A4A]" />,
      actionText: "Plan Your Visit",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#F7F3EA] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A4A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8C6A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Website Experience Guide / Chapters */}
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
    </section>
  );
}
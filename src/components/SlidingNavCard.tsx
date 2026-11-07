"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ChevronLeft,
  ChevronRight,
  X,
  BedDouble,
  Utensils,
  Waves,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface GuideChapter {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  actionText: string;
}

export default function SlidingNavCard() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive mobile screen check
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const guideChapters: GuideChapter[] = [
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Coordinate with Left Introduction Card (close nav if intro opens)
  useEffect(() => {
    const handleCloseNav = () => setIsOpen(false);
    window.addEventListener("nirva-close-nav", handleCloseNav);
    return () => window.removeEventListener("nirva-close-nav", handleCloseNav);
  }, []);

  // Listen for open requests from mobile/tablet pill controls or section triggers
  useEffect(() => {
    const handleOpenNav = () => openCard();
    window.addEventListener("nirva-open-nav", handleOpenNav);
    return () => window.removeEventListener("nirva-open-nav", handleOpenNav);
  }, []);

  // Lock body scroll gently when opened on mobile/tablet
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Open this card and close left card
  const openCard = () => {
    window.dispatchEvent(new CustomEvent("nirva-close-intro"));
    setIsOpen(true);
  };

  // Handle smooth scroll when a chapter CTA is selected, then close panel smoothly
  const handleChapterNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHref: string
  ) => {
    e.preventDefault();
    const cleanId = targetHref.replace("#", "");
    const elem = document.getElementById(cleanId);

    // Close panel
    setIsOpen(false);

    if (elem) {
      const topOffset = elem.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Normalized SVG Clip Path for Right Panel (Curved Inward Left Edge) */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="right-panel-inward-clip" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 0.04,0 C 0.015,0 0,0.02 0.005,0.06 C 0.10,0.28 0.10,0.72 0.005,0.94 C 0,0.98 0.015,1 0.04,1 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* 1. Slim Elegant Vertical Tab (Active on Desktop >= 1200px)    */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden min-[1200px]:flex absolute right-0 top-36 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={openCard}
          aria-label="Explore Nirva - Open Curated Navigation Card"
          aria-expanded={isOpen}
          className="group flex flex-col items-center justify-between py-4 sm:py-5 px-2 sm:px-2.5 bg-[#FBF8F1]/85 hover:bg-[#FBF8F1]/95 backdrop-blur-md border-y border-l border-[#C99A4A]/30 rounded-l-2xl shadow-[0_8px_30px_rgba(62,47,36,0.10)] hover:shadow-[0_12px_35px_rgba(62,47,36,0.16)] transition-all duration-300 cursor-pointer select-none ring-1 ring-white/60 ring-inset"
        >
          {/* Subtle Navigation Icon */}
          <div className="w-5 h-5 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
            <Compass className="w-5 h-5 text-[#C99A4A]" strokeWidth={2.2} />
          </div>

          {/* Vertical Text */}
          <span className="font-serif text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#3E2F24] group-hover:text-[#C99A4A] transition-colors [writing-mode:vertical-rl] py-1.5 whitespace-nowrap">
            Explore Nirva
          </span>

          {/* Subtle Pull Indicator Arrow */}
          <div className="mt-2.5 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-[#C99A4A] transform group-hover:-translate-x-1 transition-transform animate-pulse" />
          </div>
        </button>
      </div>

      {/* Slide-out Curated Navigation Panel with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end md:items-stretch justify-center md:justify-end p-2.5 sm:p-4 md:p-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {/* Backdrop Blur Overlay (Click outside to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#251A12]/35 backdrop-blur-[2px] transition-opacity"
              aria-hidden="true"
            />

            {/* Sliding Editorial Frosted Glass Panel: Bottom-sheet on mobile, Right-drawer on desktop */}
            <motion.div
              ref={cardRef}
              initial={isMobile ? { y: "100%", opacity: 0 } : { x: "100%", opacity: 0.8 }}
              animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
              exit={isMobile ? { y: "100%", opacity: 0 } : { x: "100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              {...(!isMobile && {
                drag: "x",
                dragConstraints: { left: 0, right: 300 },
                dragElastic: 0.1,
                onDragEnd: (_e: any, info: any) => {
                  if (info.offset.x > 70 || info.velocity.x > 200) {
                    setIsOpen(false);
                  }
                },
              })}
              style={{
                filter:
                  "drop-shadow(0 12px 35px rgba(62, 47, 36, 0.08)) drop-shadow(0 2px 8px rgba(62, 47, 36, 0.04))",
              }}
              className="relative z-10 w-full max-w-[calc(100vw-20px)] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] max-h-[90vh] md:max-h-none md:h-full flex flex-col justify-between"
            >
              {/* The Actual Translucent Frosted Glass Surface */}
              <div
                style={{
                  backgroundColor: "rgba(251, 248, 241, 0.88)",
                  backdropFilter: "blur(14px) saturate(110%)",
                  WebkitBackdropFilter: "blur(14px) saturate(110%)",
                  clipPath: isMobile ? "none" : "url(#right-panel-inward-clip)",
                  WebkitClipPath: isMobile ? "none" : "url(#right-panel-inward-clip)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.65)",
                }}
                className={`relative w-full h-full flex flex-col justify-between overflow-hidden ${
                  isMobile
                    ? "rounded-3xl border border-[#C99A4A]/35 shadow-2xl"
                    : "rounded-none"
                }`}
              >
                {/* SVG Champagne-Gold Border & Glass Highlight (Active on tablet & desktop) */}
                {!isMobile && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    viewBox="0 0 1 1"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    {/* Curved Left Champagne Gold Border */}
                    <path
                      d="M 0.04,0 C 0.015,0 0,0.02 0.005,0.06 C 0.10,0.28 0.10,0.72 0.005,0.94 C 0,0.98 0.015,1 0.04,1"
                      fill="none"
                      stroke="rgba(201, 154, 74, 0.30)"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Curved Left Specular White Highlight */}
                    <path
                      d="M 0.04,0 C 0.015,0 0,0.02 0.005,0.06 C 0.10,0.28 0.10,0.72 0.005,0.94 C 0,0.98 0.015,1 0.04,1"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.65)"
                      strokeWidth="0.8"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Top Glass Edge Highlight */}
                    <line
                      x1="0.04"
                      y1="0"
                      x2="1"
                      y2="0"
                      stroke="rgba(255, 255, 255, 0.65)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Bottom Warm Subtle Edge */}
                    <line
                      x1="0.04"
                      y1="1"
                      x2="1"
                      y2="1"
                      stroke="rgba(201, 154, 74, 0.25)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                )}

                {/* Faint Ambient Glass Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none z-10" />

                {/* Card Header & Close Control */}
                <div className="relative z-20 p-4 sm:p-5 md:p-6 pb-3 md:pb-4 md:pl-16 border-b border-[#C99A4A]/25 flex flex-col shrink-0 bg-transparent">
                  {/* Mobile Grab Handle Indicator */}
                  <div className="w-10 h-1 rounded-full bg-[#C99A4A]/30 mx-auto mb-2.5 md:hidden shrink-0" />

                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#C99A4A]" />
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#C99A4A] font-semibold font-sans">
                        Curated Navigation • Explore Nirva
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-[10px] text-[#A89887] uppercase tracking-wider">
                        Press ESC to close
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Navigation Card"
                        className="w-8 h-8 rounded-full bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-[#C99A4A]/40 hover:border-[#C99A4A] flex items-center justify-center text-[#3E2F24] hover:text-[#C99A4A] transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Scrollable Card Body with Five Chapters */}
                <div className="relative z-20 overflow-y-auto px-4 sm:px-6 md:pl-16 md:pr-8 py-5 sm:py-6 space-y-5 sm:space-y-6 flex-1 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {/* Main Heading & Intro */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] leading-tight font-medium">
                      Explore Nirva Through Our <br />
                      <span className="gold-gradient-text font-bold">Five Chapters</span>
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-[#6B5540] leading-relaxed font-light">
                      Follow the journey through our sanctuaries, dining, experiences, features, and
                      travel routes.
                    </p>
                  </div>

                  {/* 5 Chapters List Cards with Translucent Warm Glass Surfaces */}
                  <div className="space-y-3.5 pt-1">
                    {guideChapters.map((chapter) => (
                      <a
                        key={chapter.num}
                        href={chapter.href}
                        onClick={(e) => handleChapterNavigation(e, chapter.href)}
                        className="group block p-4 sm:p-5 rounded-2xl bg-white/40 hover:bg-white/60 border border-[#C99A4A]/25 hover:border-[#C99A4A]/50 shadow-xs hover:shadow-sm transition-all duration-300 ring-1 ring-white/50 ring-inset"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="font-serif text-lg sm:text-xl font-bold text-[#C99A4A]">
                              {chapter.num}
                            </span>
                            <div>
                              <h4 className="font-serif text-base sm:text-lg font-bold text-[#3E2F24] group-hover:text-[#C99A4A] transition-colors leading-snug">
                                {chapter.title}
                              </h4>
                              <span className="text-[10px] uppercase tracking-wider text-[#6B5540] font-semibold block mt-0.5">
                                {chapter.subtitle}
                              </span>
                            </div>
                          </div>

                          <div className="w-8 h-8 rounded-full bg-white/40 border border-[#C99A4A]/30 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                            {chapter.icon}
                          </div>
                        </div>

                        <p className="font-sans text-xs text-[#6B5540] leading-relaxed font-light pl-7 sm:pl-8 mb-3">
                          {chapter.description}
                        </p>

                        <div className="pt-2.5 border-t border-[#C99A4A]/20 flex items-center justify-between text-xs font-semibold text-[#C99A4A] group-hover:text-[#9B7028] transition-colors pl-7 sm:pl-8">
                          <span>{chapter.actionText}</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Quick Close Action */}
                <div className="relative z-20 p-3.5 sm:p-4 md:px-6 md:pl-16 border-t border-[#C99A4A]/25 flex items-center justify-between text-xs text-[#6B5540] shrink-0 bg-transparent">
                  <span className="flex items-center gap-1.5 font-light text-[11px]">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C99A4A]" />
                    <span>{isMobile ? "Tap outside to dismiss" : "Swipe right or click outside to dismiss"}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-1.5 rounded-full border border-[#C99A4A]/40 bg-white/50 hover:bg-white/80 backdrop-blur-sm text-xs font-semibold text-[#3E2F24] transition-colors cursor-pointer shadow-xs"
                  >
                    Close Navigation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
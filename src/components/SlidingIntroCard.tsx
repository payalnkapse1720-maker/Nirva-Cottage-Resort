"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  TreePine,
  Waves,
  SunMedium,
  ArrowRight,
} from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function SlidingIntroCard() {
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

  // Coordinate with Right Navigation Card (close intro if nav opens)
  useEffect(() => {
    const handleCloseIntro = () => setIsOpen(false);
    window.addEventListener("nirva-close-intro", handleCloseIntro);
    return () => window.removeEventListener("nirva-close-intro", handleCloseIntro);
  }, []);

  // Listen for open requests from mobile/tablet pill controls or section triggers
  useEffect(() => {
    const handleOpenIntro = () => openCard();
    window.addEventListener("nirva-open-intro", handleOpenIntro);
    return () => window.removeEventListener("nirva-open-intro", handleOpenIntro);
  }, []);

  // Open this card and close right card
  const openCard = () => {
    window.dispatchEvent(new CustomEvent("nirva-close-nav"));
    setIsOpen(true);
  };

  // Close card when "Explore" CTA inside is clicked
  const handleExploreClick = () => {
    setIsOpen(false);
    const stayElem = document.getElementById("stay");
    if (stayElem) {
      const topOffset = stayElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Normalized SVG Clip Path for Left Panel (Curved Inward Right Edge) */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="left-panel-inward-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.96,0 C 0.985,0 1,0.02 0.995,0.06 C 0.90,0.28 0.90,0.72 0.995,0.94 C 1,0.98 0.985,1 0.96,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* 1. Slim Elegant Vertical Tab (Active on Desktop >= 1200px)    */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden min-[1200px]:flex absolute left-0 top-36 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={openCard}
          aria-label="Discover Nirva - Open Introduction Card"
          aria-expanded={isOpen}
          className="group flex flex-col items-center justify-between py-4 sm:py-5 px-2 sm:px-2.5 bg-[#FBF8F1]/85 hover:bg-[#FBF8F1]/95 backdrop-blur-md border-y border-r border-[#C99A4A]/30 rounded-r-2xl shadow-[0_8px_30px_rgba(62,47,36,0.10)] hover:shadow-[0_12px_35px_rgba(62,47,36,0.16)] transition-all duration-300 cursor-pointer select-none ring-1 ring-white/60 ring-inset"
        >
          {/* Nirva Brand Emblem */}
          <div className="relative w-5 h-5 shrink-0 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
            <Image
              src="/nirva-emblem.png"
              alt="Nirva Emblem"
              fill
              sizes="20px"
              className="object-contain"
            />
          </div>

          {/* Vertical Text */}
          <span className="font-serif text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#3E2F24] group-hover:text-[#C99A4A] transition-colors [writing-mode:vertical-rl] rotate-180 py-1.5 whitespace-nowrap">
            Discover Nirva
          </span>

          {/* Subtle Pull Indicator Arrow */}
          <div className="mt-2.5 flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform animate-pulse" />
          </div>
        </button>
      </div>

      {/* Slide-out Luxury Information Card with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end md:items-stretch justify-center md:justify-start p-2.5 sm:p-4 md:p-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
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

            {/* Sliding Editorial Frosted Glass Panel: Bottom-sheet on mobile, Left-drawer on desktop */}
            <motion.div
              ref={cardRef}
              initial={isMobile ? { y: "100%", opacity: 0 } : { x: "-100%", opacity: 0.8 }}
              animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
              exit={isMobile ? { y: "100%", opacity: 0 } : { x: "-100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              {...(!isMobile && {
                drag: "x",
                dragConstraints: { left: -300, right: 0 },
                dragElastic: 0.1,
                onDragEnd: (_e: any, info: any) => {
                  if (info.offset.x < -70 || info.velocity.x < -200) {
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
                  clipPath: isMobile ? "none" : "url(#left-panel-inward-clip)",
                  WebkitClipPath: isMobile ? "none" : "url(#left-panel-inward-clip)",
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
                    {/* Curved Right Champagne Gold Border */}
                    <path
                      d="M 0.96,0 C 0.985,0 1,0.02 0.995,0.06 C 0.90,0.28 0.90,0.72 0.995,0.94 C 1,0.98 0.985,1 0.96,1"
                      fill="none"
                      stroke="rgba(201, 154, 74, 0.30)"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Curved Right Specular White Highlight */}
                    <path
                      d="M 0.96,0 C 0.985,0 1,0.02 0.995,0.06 C 0.90,0.28 0.90,0.72 0.995,0.94 C 1,0.98 0.985,1 0.96,1"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.65)"
                      strokeWidth="0.8"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Top Glass Edge Highlight */}
                    <line
                      x1="0"
                      y1="0"
                      x2="0.96"
                      y2="0"
                      stroke="rgba(255, 255, 255, 0.65)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Bottom Warm Subtle Edge */}
                    <line
                      x1="0"
                      y1="1"
                      x2="0.96"
                      y2="1"
                      stroke="rgba(201, 154, 74, 0.25)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                )}

                {/* Faint Ambient Glass Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10" />

                {/* Card Header & Close Control */}
                <div className="relative z-20 p-4 sm:p-5 md:p-6 pb-3 md:pb-4 md:pr-16 border-b border-[#C99A4A]/25 flex flex-col shrink-0 bg-transparent">
                  {/* Mobile Grab Handle Indicator */}
                  <div className="w-10 h-1 rounded-full bg-[#C99A4A]/30 mx-auto mb-2.5 md:hidden shrink-0" />

                  <div className="flex items-center justify-between w-full">
                    <div className="inline-flex items-center gap-2">
                      <div className="relative w-4 h-4 shrink-0">
                        <Image
                          src="/nirva-emblem.png"
                          alt="Nirva Emblem"
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#C99A4A] font-semibold font-sans">
                        Introduction • Welcome to Nirva
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-[10px] text-[#A89887] uppercase tracking-wider">
                        Press ESC to close
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Introduction Card"
                        className="w-8 h-8 rounded-full bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-[#C99A4A]/40 hover:border-[#C99A4A] flex items-center justify-center text-[#3E2F24] hover:text-[#C99A4A] transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Scrollable Card Body with Preserved Content */}
                <div className="relative z-20 overflow-y-auto px-4 sm:px-6 md:pl-8 md:pr-16 py-5 sm:py-6 space-y-5 sm:space-y-6 flex-1 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {/* Main Heading */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3E2F24] leading-tight font-medium">
                      Where Quiet Luxury Meets <br />
                      <span className="gold-gradient-text font-bold">Untouched Nature</span>
                    </h2>
                  </div>

                  {/* Preserved Narrative Text */}
                  <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
                    Tucked away in the serene foothills of Kondeshwar Valley,{" "}
                    <strong className="text-[#3E2F24] font-medium">{RESORT_INFO.name}</strong> is a
                    boutique sanctuary designed for travellers seeking solace, celebration, and
                    unhurried luxury. Just minutes from Badlapur yet blissfully secluded from city
                    commotion, Nirva offers an intimate retreat where misty hill horizons greet you
                    every sunrise.
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#6B5540] leading-relaxed font-light">
                    Whether you are gathering for an unforgettable destination wedding, indulging in
                    poolside multi-cuisine flavours at Bliss Cafe, trekking scenic waterfall trails, or
                    unwinding in vibrant private cottages, every corner of Nirva is thoughtfully
                    curated to restore harmony and inspire wonder.
                  </p>

                  {/* Preserved Three Highlights */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-4 py-4 border-y border-[#C99A4A]/25 bg-white/40 backdrop-blur-sm rounded-2xl px-3 sm:px-4 shadow-xs ring-1 ring-white/60 ring-inset">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <TreePine className="w-4 h-4 shrink-0" />
                        <span className="font-serif text-xs sm:text-sm font-bold text-[#3E2F24]">
                          Secluded
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#6B5540] font-light">
                        Kondeshwar Foothills
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <Waves className="w-4 h-4 shrink-0" />
                        <span className="font-serif text-xs sm:text-sm font-bold text-[#3E2F24]">
                          Horizon
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#6B5540] font-light">
                        Valley Infinity Pool
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <SunMedium className="w-4 h-4 shrink-0" />
                        <span className="font-serif text-xs sm:text-sm font-bold text-[#3E2F24]">
                          Artisan
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-[#6B5540] font-light">
                        Boutique Hospitality
                      </p>
                    </div>
                  </div>

                  {/* Preserved Visual Showcase Image Card Frame */}
                  <div className="relative pt-2">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-[#D8C6A8]/70">
                      <Image
                        src="https://res.cloudinary.com/cx2wca8r/image/upload/v1793133954/Misty_Mountain_Poolside_Retreat.png"
                        alt="Nirva The Cottage & Resort Valley View and Infinity Pool"
                        fill
                        sizes="(max-width: 768px) 90vw, 550px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-[#FBF8F1]/80 backdrop-blur-md border border-[#C99A4A]/30 shadow-lg ring-1 ring-white/60 ring-inset">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-[#C99A4A] font-bold block">
                              The Sanctuary
                            </span>
                            <h3 className="font-serif text-sm sm:text-base font-bold text-[#3E2F24]">
                              A World Within Nature
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={handleExploreClick}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C99A4A] text-[#2F241C] text-xs font-semibold hover:bg-[#b88939] transition-colors shrink-0 shadow-sm"
                          >
                            Explore <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Quick Close Action */}
                <div className="relative z-20 p-3.5 sm:p-4 md:px-6 md:pr-16 border-t border-[#C99A4A]/25 flex items-center justify-between text-xs text-[#6B5540] shrink-0 bg-transparent">
                  <span className="flex items-center gap-1.5 font-light text-[11px]">
                    <ChevronLeft className="w-3.5 h-3.5 text-[#C99A4A]" />
                    <span>{isMobile ? "Tap outside to dismiss" : "Swipe left or click outside to dismiss"}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-1.5 rounded-full border border-[#C99A4A]/40 bg-white/50 hover:bg-white/80 backdrop-blur-sm text-xs font-semibold text-[#3E2F24] transition-colors cursor-pointer shadow-xs"
                  >
                    Close Card
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
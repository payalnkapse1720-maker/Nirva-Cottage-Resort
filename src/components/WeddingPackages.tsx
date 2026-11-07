"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  CheckCircle2,
  ChevronDown,
  FileText,
  MessageCircle,
  ShieldAlert,
  Info,
  UtensilsCrossed,
  Bed,
  Sparkle,
  BadgeCheck,
  Building,
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  WEDDING_PACKAGES_24H,
  WEDDING_PACKAGES_36H,
  WEDDING_VENUES,
  FOOD_PACKAGES,
  BUFFET_MENU_CHOICES,
  ADDITIONAL_FOOD_MENU,
  ACCOMMODATION_SCHEDULE,
  WEDDING_TERMS,
  DECORATION_LINKS,
  WeddingPackage,
  BuffetCategory,
  AdditionalMenuSection,
} from "@/data/wedding-data";
import { RESORT_INFO } from "@/data/resort-data";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function WeddingPackages() {
  // Main Tab states
  const [selectedDuration, setSelectedDuration] = useState<"24 Hours" | "36 Hours">("24 Hours");
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [expandedVenue, setExpandedVenue] = useState<string | null>(null);

  // Food Section Sub-Tabs & Filters
  const [foodSectionTab, setFoodSectionTab] = useState<"packages" | "buffet" | "addons">("packages");
  const [foodTypeFilter, setFoodTypeFilter] = useState<"All" | "Veg" | "Non-Veg">("All");
  const [expandedBuffetCategory, setExpandedBuffetCategory] = useState<string | null>(null);
  const [expandedAddonCategory, setExpandedAddonCategory] = useState<string | null>(null);

  // Accommodation & Terms toggles
  const [showAccommodationDetails, setShowAccommodationDetails] = useState(false);
  const [showAllTerms, setShowAllTerms] = useState(false);

  const packagesToDisplay: WeddingPackage[] =
    selectedDuration === "24 Hours" ? WEDDING_PACKAGES_24H : WEDDING_PACKAGES_36H;

  const filteredFoodPackages =
    foodTypeFilter === "All"
      ? FOOD_PACKAGES
      : FOOD_PACKAGES.filter((p) => p.type === foodTypeFilter);

  const generateWhatsAppLink = (text: string) => {
    return `https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="wedding-packages" className="py-20 sm:py-24 md:py-28 bg-[#F7F3EA] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#C99A4A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-[#D8C6A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-4 h-4 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Destination Celebrations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] leading-tight font-medium">
            Wedding Packages at <span className="gold-gradient-text font-bold">Nirva</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
            Celebrate your sacred vows amidst the enchanting mist of the Kondeshwar foothills. From
            intimate family ceremonies to grand 500-guest starlit receptions, explore our curated
            all-inclusive packages, scenic venues, banquet menus, and guest lodging.
          </p>

          {/* Quick Section Jump Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <a
              href="#pkg-bundles"
              className="px-3.5 py-1.5 rounded-full bg-[#FBF8F1] hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[#3E2F24] font-medium transition-colors shadow-2xs"
            >
              Stay & Packages
            </a>
            <a
              href="#pkg-venues"
              className="px-3.5 py-1.5 rounded-full bg-[#FBF8F1] hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[#3E2F24] font-medium transition-colors shadow-2xs"
            >
              Wedding Venues
            </a>
            <a
              href="#pkg-banquets"
              className="px-3.5 py-1.5 rounded-full bg-[#FBF8F1] hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[#3E2F24] font-medium transition-colors shadow-2xs"
            >
              Food & Menus
            </a>
            <a
              href="#pkg-lodging"
              className="px-3.5 py-1.5 rounded-full bg-[#FBF8F1] hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[#3E2F24] font-medium transition-colors shadow-2xs"
            >
              Accommodations
            </a>
            <a
              href="#pkg-terms"
              className="px-3.5 py-1.5 rounded-full bg-[#FBF8F1] hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[#3E2F24] font-medium transition-colors shadow-2xs"
            >
              Terms & Policies
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 1. ALL-INCLUSIVE WEDDING PACKAGES (24H & 36H)                 */}
        {/* ------------------------------------------------------------- */}
        <div id="pkg-bundles" className="space-y-6 pt-2 scroll-mt-24 sm:scroll-mt-28">
          {/* Subsection Title & Header (Centered) */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C99A4A] font-bold block">
              All-Inclusive Bundles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Curated Wedding Packages
            </h3>
          </div>

          {/* Duration Switcher (Centered) */}
          <div className="flex justify-center border-b border-[#D8C6A8] pb-4">
            <div className="inline-flex p-1 rounded-full bg-[#F1E9DA] border border-[#D8C6A8] shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setSelectedDuration("24 Hours");
                  setExpandedPackage(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDuration === "24 Hours"
                    ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-bold"
                    : "text-[#6B5540] hover:text-[#3E2F24]"
                }`}
              >
                24-Hour Celebrations
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedDuration("36 Hours");
                  setExpandedPackage(null);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDuration === "36 Hours"
                    ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-bold"
                    : "text-[#6B5540] hover:text-[#3E2F24]"
                }`}
              >
                36-Hour Grand Weddings
              </button>
            </div>
          </div>

          {/* Compact Package Grid (2x2 on tablet/mobile where applicable, 3-col on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {packagesToDisplay.map((pkg, idx) => {
              const packageId = `${pkg.duration}-${pkg.guests}`;
              const isExpanded = expandedPackage === packageId;

              // Key summary inclusions (first 3)
              const primaryInclusions = pkg.inclusions.slice(0, 3);
              const remainingInclusions = pkg.inclusions.slice(3);

              return (
                <motion.div
                  key={packageId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.25 }}
                  className="rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs"
                >
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Header: Guest Badge & Duration */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#3E2F24] font-bold">
                        <Users className="w-3.5 h-3.5 text-[#C99A4A]" />
                        <span>{pkg.guests}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C99A4A]/15 text-[#9B7028] border border-[#C99A4A]/30">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Pricing Box */}
                    <div className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8]/60 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#6B5540] block font-medium">
                        Special Package Rate
                      </span>
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2F24]">
                          {pkg.specialPrice}
                        </span>
                        <span className="text-xs font-sans text-[#A89887] line-through decoration-red-400">
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#A89887] block font-light">
                        + 18% GST Applicable
                      </span>
                    </div>

                    {/* Key Inclusions (Compact Summary) */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                        Core Inclusions:
                      </span>
                      <ul className="space-y-1.5">
                        {primaryInclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-[#3E2F24]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A4A] shrink-0 mt-0.5" />
                            <span className="font-light leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Complimentary Add-ons Summary Badges */}
                    <div className="pt-2 border-t border-[#D8C6A8]/50">
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.addOns.map((addon) => (
                          <span
                            key={addon}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F1E9DA] text-[10px] text-[#6B5540] font-light"
                          >
                            <Sparkle className="w-2 h-2 text-[#C99A4A] shrink-0" />
                            <span>{addon}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progressive Disclosure: View Complete Details */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setExpandedPackage(isExpanded ? null : packageId)}
                        className="w-full flex items-center justify-between p-2 rounded-lg bg-[#F1E9DA]/70 hover:bg-[#F1E9DA] border border-[#D8C6A8] text-[11px] font-semibold text-[#3E2F24] transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>
                          {isExpanded
                            ? "Hide Complete Details"
                            : `View All ${pkg.inclusions.length} Inclusions & Notes`}
                        </span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5 text-[#C99A4A]" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pt-3 space-y-2.5 overflow-hidden"
                          >
                            {remainingInclusions.length > 0 && (
                              <ul className="space-y-1.5 border-t border-[#D8C6A8]/50 pt-2">
                                {remainingInclusions.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-xs text-[#3E2F24]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A4A] shrink-0 mt-0.5" />
                                    <span className="font-light leading-snug">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            <div className="p-2.5 rounded-lg bg-[#F7F3EA] border border-[#D8C6A8]/50 text-[10px] text-[#6B5540] leading-relaxed font-light">
                              {pkg.note}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="p-3.5 sm:p-4 bg-[#F7F3EA] border-t border-[#D8C6A8]">
                    <a
                      href={generateWhatsAppLink(
                        `Hello Nirva Resort, I want to inquire about the ${pkg.duration} Wedding Package for ${pkg.guests} (${pkg.specialPrice}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire for {pkg.guests}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. WEDDING VENUES & DECOR (COMPACT EXPANDABLE CARDS)          */}
        {/* ------------------------------------------------------------- */}
        <div id="pkg-venues" className="space-y-6 pt-6 border-t border-[#D8C6A8] scroll-mt-24 sm:scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C99A4A] font-bold">
              Celebration Grounds
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Signature Wedding Venues
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] font-light">
              Outdoor and poolside celebration spaces complete with stages, sound systems, lighting,
              and dedicated cottages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {WEDDING_VENUES.map((venue) => {
              const isExpanded = expandedVenue === venue.id;

              return (
                <div
                  key={venue.id}
                  className="rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md"
                >
                  <div>
                    {/* Venue Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#FBF8F1]/90 backdrop-blur-md text-[#3E2F24] border border-[#D8C6A8]">
                          Venue & Decor
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                          {venue.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-white/90 font-light mt-0.5">
                          <span>{venue.capacity}</span>
                          <span>•</span>
                          <span>{venue.timing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Venue Body */}
                    <div className="p-4 sm:p-5 space-y-3">
                      {/* Price & Timing */}
                      <div className="flex items-baseline justify-between pb-2 border-b border-[#D8C6A8]/60">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-[#6B5540] block">
                            Special Venue Rate
                          </span>
                          <span className="font-serif text-xl font-bold text-[#3E2F24]">
                            {venue.specialPrice}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#A89887] font-light">
                          {venue.timing}
                        </span>
                      </div>

                      {/* Tarpaulin Note */}
                      <div className="p-2 rounded-lg bg-[#F7F3EA] border border-[#D8C6A8]/50 flex items-start gap-1.5 text-[10px] text-[#6B5540] leading-snug">
                        <Info className="w-3 h-3 text-[#C99A4A] shrink-0 mt-0.5" />
                        <span>{venue.tarpaulinNote}</span>
                      </div>

                      {/* Inclusions Summary & Accordion Toggle */}
                      <div>
                        <button
                          type="button"
                          onClick={() => setExpandedVenue(isExpanded ? null : venue.id)}
                          className="w-full flex items-center justify-between p-2 rounded-lg bg-[#F1E9DA]/70 hover:bg-[#F1E9DA] border border-[#D8C6A8] text-xs font-semibold text-[#3E2F24] transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex items-center gap-1.5">
                            <BadgeCheck className="w-3.5 h-3.5 text-[#C99A4A]" />
                            <span>
                              {isExpanded ? "Hide Decor Items" : `View Full Details (${venue.inclusions.length})`}
                            </span>
                          </span>
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-3.5 h-3.5 text-[#C99A4A]" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="pt-2.5 space-y-1.5 overflow-hidden border-t border-[#D8C6A8]/50 mt-2"
                            >
                              {venue.inclusions.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-2 text-[11px] text-[#6B5540] font-light"
                                >
                                  <CheckCircle2 className="w-3 h-3 text-[#C99A4A] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Venue WhatsApp Action */}
                  <div className="p-3.5 sm:px-5 bg-[#F7F3EA] border-t border-[#D8C6A8]">
                    <a
                      href={generateWhatsAppLink(
                        `Hello Nirva Resort, I am interested in booking the ${venue.name} wedding venue (${venue.specialPrice}, ${venue.capacity}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A4A] bg-[#FBF8F1] hover:bg-[#C99A4A] text-[#3E2F24] hover:text-[#2F241C] text-xs font-bold transition-all shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book {venue.name}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. FOOD PACKAGES & DETAILED MENUS (UNIFIED TABBED HUB)        */}
        {/* ------------------------------------------------------------- */}
        <div id="pkg-banquets" className="space-y-6 pt-6 border-t border-[#D8C6A8] scroll-mt-24 sm:scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C99A4A] font-bold">
              Banquets & Catering
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Wedding Menus & Culinary Packages
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] font-light">
              From gourmet wedding packages to 12 course-by-course buffet selections and live
              specialty food counters.
            </p>
          </div>

          {/* Unified Food Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#F1E9DA] border border-[#D8C6A8] max-w-xl mx-auto">
            <button
              type="button"
              onClick={() => setFoodSectionTab("packages")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                foodSectionTab === "packages"
                  ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-bold"
                  : "text-[#6B5540] hover:text-[#3E2F24]"
              }`}
            >
              1. Food Packages
            </button>
            <button
              type="button"
              onClick={() => setFoodSectionTab("buffet")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                foodSectionTab === "buffet"
                  ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-bold"
                  : "text-[#6B5540] hover:text-[#3E2F24]"
              }`}
            >
              2. Buffet Menu Courses
            </button>
            <button
              type="button"
              onClick={() => setFoodSectionTab("addons")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                foodSectionTab === "addons"
                  ? "bg-[#C99A4A] text-[#2F241C] shadow-sm font-bold"
                  : "text-[#6B5540] hover:text-[#3E2F24]"
              }`}
            >
              3. Live Counters & Services
            </button>
          </div>

          {/* TAB 1: Food Packages (Brochure Page 13) */}
          {foodSectionTab === "packages" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Type Filter */}
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs text-[#6B5540]">
                  Showing <strong>{filteredFoodPackages.length}</strong> dining tiers:
                </span>
                <div className="inline-flex p-1 rounded-full bg-[#F1E9DA] border border-[#D8C6A8]">
                  {(["All", "Veg", "Non-Veg"] as const).map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setFoodTypeFilter(filter)}
                      className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                        foodTypeFilter === filter
                          ? "bg-[#C99A4A] text-[#2F241C] font-bold shadow-2xs"
                          : "text-[#6B5540] hover:text-[#3E2F24]"
                      }`}
                    >
                      {filter === "All" ? "All" : filter === "Veg" ? "Pure Veg" : "Non-Veg"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Grid (2x2 on mobile, 4-col on desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                {filteredFoodPackages.map((pkg) => (
                  <div
                    key={`${pkg.name}-${pkg.type}`}
                    className="p-3 sm:p-5 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] transition-all flex flex-col justify-between space-y-2.5 sm:space-y-3 shadow-2xs"
                  >
                    <div className="space-y-2 sm:space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                        <span
                          className={`self-start px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold tracking-wider uppercase border ${
                            pkg.type === "Veg"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : "bg-red-50 text-red-800 border-red-200"
                          }`}
                        >
                          {pkg.type}
                        </span>
                        <span className="font-serif text-base sm:text-xl font-bold text-[#3E2F24]">
                          ₹{pkg.price}{" "}
                          <span className="text-[10px] sm:text-[11px] font-sans text-[#6B5540] font-normal block sm:inline">
                            / person
                          </span>
                        </span>
                      </div>

                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#3E2F24] leading-tight">
                        {pkg.name}
                      </h4>

                      <ul className="space-y-1 sm:space-y-1.5 pt-1.5 sm:pt-2 border-t border-[#D8C6A8]/50">
                        {pkg.menuInclusions.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#6B5540] leading-tight"
                          >
                            <UtensilsCrossed className="w-3 h-3 text-[#C99A4A] shrink-0 mt-0.5" />
                            <span className="break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 sm:pt-2.5 border-t border-[#D8C6A8]/50 text-[9px] sm:text-[10px] text-[#A89887] font-light leading-snug">
                      * Min. 35 guests. 18% GST extra.
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: Buffet Menu Courses (Brochure Page 14) */}
          {foodSectionTab === "buffet" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <p className="text-center text-xs text-[#6B5540] font-light">
                Click any course below to preview all chef-prepared dishes available in your custom banquet menu.
              </p>

              {/* Menu Categories Grid (2x2 on mobile, 3-col on desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {BUFFET_MENU_CHOICES.map((cat: BuffetCategory) => {
                  const isExpanded = expandedBuffetCategory === cat.category;

                  return (
                    <div
                      key={cat.category}
                      className="rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] transition-all overflow-hidden shadow-2xs"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedBuffetCategory(isExpanded ? null : cat.category)
                        }
                        className="w-full p-2.5 sm:p-3.5 flex items-center justify-between text-left cursor-pointer hover:bg-[#F7F3EA] transition-colors gap-1.5"
                        aria-expanded={isExpanded}
                      >
                        <div className="min-w-0 pr-1">
                          <h5 className="font-serif text-xs sm:text-sm font-bold text-[#3E2F24] leading-tight truncate">
                            {cat.category}
                          </h5>
                          <span className="text-[9px] sm:text-[10px] text-[#6B5540] block mt-0.5">
                            {cat.items.length} choices
                          </span>
                        </div>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A4A]" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-2.5 sm:px-3.5 pb-2.5 sm:pb-3 border-t border-[#D8C6A8]/50 pt-2 space-y-1 overflow-hidden"
                          >
                            {cat.items.map((item: string) => (
                              <div
                                key={item}
                                className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#6B5540] font-light leading-tight"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C99A4A] shrink-0 mt-1" />
                                <span className="break-words">{item}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Counters & Event Services (Pages 15–20) */}
          {foodSectionTab === "addons" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 max-w-4xl mx-auto"
            >
              <p className="text-center text-xs text-[#6B5540] font-light pb-2">
                Specialized live stalls, mocktail setups, barbecue, diesel generator backup, and sound equipment.
              </p>

              {ADDITIONAL_FOOD_MENU.map((sec: AdditionalMenuSection) => {
                const isExpanded = expandedAddonCategory === sec.title;

                return (
                  <div
                    key={sec.title}
                    className="rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedAddonCategory(isExpanded ? null : sec.title)
                      }
                      className="w-full p-3.5 sm:px-5 flex items-center justify-between text-left cursor-pointer hover:bg-[#F7F3EA] transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <h5 className="font-serif text-sm sm:text-base font-bold text-[#3E2F24]">
                          {sec.title}
                        </h5>
                        <span className="text-[11px] text-[#C99A4A] font-medium">{sec.rateInfo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[#6B5540] hidden sm:inline">
                          {sec.items.length} items
                        </span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-[#C99A4A]" />
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#D8C6A8]/60 space-y-2 overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                            {sec.items.map((it: { name: string; price?: string; note?: string }) => (
                              <div
                                key={it.name}
                                className="p-1.5 sm:p-2 rounded-lg bg-[#F7F3EA] border border-[#D8C6A8]/50 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs gap-0.5 sm:gap-2"
                              >
                                <span className="text-[#3E2F24] font-medium leading-tight">{it.name}</span>
                                {it.price && (
                                  <span className="font-bold text-[#C99A4A] shrink-0 text-[10px] sm:text-xs">
                                    {it.price}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. ACCOMMODATION SCHEDULE (COMPACT SUMMARY + EXPANDABLE)      */}
        {/* ------------------------------------------------------------- */}
        <div id="pkg-lodging" className="space-y-5 pt-6 border-t border-[#D8C6A8] scroll-mt-24 sm:scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C99A4A] font-bold">
              Guest Capacity & Lodging
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Accommodation Schedule
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] font-light">
              Boutique cottages, suites, and group dormitory capacity allocated across your wedding party.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] overflow-hidden shadow-2xs">
            {/* 3 Metric Cards Header (2-col grid on mobile) */}
            <div className="p-3 sm:p-5 bg-[#F1E9DA] border-b border-[#D8C6A8] grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2 sm:p-2.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#3E2F24]">
                <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A4A] shrink-0" />
                <span>20 Units / Rooms</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#3E2F24]">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A4A] shrink-0" />
                <span>120 Guests Capacity</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-2 sm:p-2.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#3E2F24]">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C99A4A] shrink-0" />
                <span>26 Extra Mattresses Allocated</span>
              </div>
            </div>

            {/* Expandable Schedule Toggle */}
            <div className="p-4 text-center">
              <button
                type="button"
                onClick={() => setShowAccommodationDetails(!showAccommodationDetails)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C99A4A] bg-[#F7F3EA] hover:bg-[#F1E9DA] text-xs font-semibold text-[#3E2F24] transition-all cursor-pointer shadow-2xs"
                aria-expanded={showAccommodationDetails}
              >
                <span>
                  {showAccommodationDetails
                    ? "Hide Room-by-Room Schedule"
                    : "View Room-by-Room Schedule (Units 1 to 20)"}
                </span>
                <motion.span
                  animate={{ rotate: showAccommodationDetails ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5 text-[#C99A4A]" />
                </motion.span>
              </button>
            </div>

            {/* Expandable Table */}
            <AnimatePresence>
              {showAccommodationDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-x-auto max-h-[380px] overflow-y-auto border-t border-[#D8C6A8]"
                >
                  <table className="w-full text-left text-xs">
                    <thead className="sticky top-0 bg-[#F7F3EA] border-b border-[#D8C6A8] text-[#3E2F24] font-bold">
                      <tr>
                        <th className="p-2.5 pl-4">Room No.</th>
                        <th className="p-2.5">Room Type</th>
                        <th className="p-2.5">Extra Mattress</th>
                        <th className="p-2.5 pr-4 text-right">Total Occupancy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D8C6A8]/50 text-[#6B5540]">
                      {ACCOMMODATION_SCHEDULE.map((row) => (
                        <tr key={row.roomNo} className="hover:bg-[#F7F3EA]/60 transition-colors">
                          <td className="p-2.5 pl-4 font-semibold text-[#3E2F24]">
                            Unit {row.roomNo}
                          </td>
                          <td className="p-2.5">{row.roomType}</td>
                          <td className="p-2.5">{row.extraMattress}</td>
                          <td className="p-2.5 pr-4 text-right font-bold text-[#C99A4A]">
                            {row.occupancy} Guests
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. TERMS & CONDITIONS (COMPACT HIGHLIGHTS + EXPANDABLE)       */}
        {/* ------------------------------------------------------------- */}
        <div id="pkg-terms" className="space-y-5 pt-6 border-t border-[#D8C6A8] scroll-mt-24 sm:scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C99A4A] font-bold">
              Guest Guidelines
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-medium">
              Terms & Conditions
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6B5540] font-light">
              Official reservation policies, payment schedules, and resort conduct guidelines.
            </p>
          </div>

          {/* 3 Quick Highlight Cards (2-col grid on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                Advance Deposit
              </span>
              <p className="text-[11px] sm:text-xs text-[#3E2F24] font-medium leading-snug">
                50% advance to confirm booking. Remaining balance settled on check-in. Non-refundable.
              </p>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                Food Timings
              </span>
              <p className="text-[11px] sm:text-xs text-[#3E2F24] font-medium leading-snug">
                Breakfast: 8:30–10:30 AM | Lunch: 1–3 PM | High Tea: 5–6:30 PM | Dinner: 8:30–11 PM.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                Decor Authorization
              </span>
              <p className="text-[11px] sm:text-xs text-[#3E2F24] font-medium leading-snug">
                Decorations require prior management approval. Unauthorized decor attracts a ₹10,000 fine.
              </p>
            </div>
          </div>

          {/* Complete 26 Terms Accordion */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3E2F24]">
                <ShieldAlert className="w-4 h-4 text-[#C99A4A]" />
                <span>Official Booking Terms & Conditions (All 26 Policies)</span>
              </div>
              <button
                type="button"
                onClick={() => setShowAllTerms(!showAllTerms)}
                className="text-xs font-semibold text-[#C99A4A] hover:text-[#9B7028] transition-colors cursor-pointer"
                aria-expanded={showAllTerms}
              >
                {showAllTerms ? "Collapse Terms" : "Expand All 26 Terms"}
              </button>
            </div>

            {/* Upfront 4 key terms */}
            <ul className="space-y-1.5 text-xs text-[#6B5540] font-light leading-relaxed">
              {(showAllTerms ? WEDDING_TERMS : WEDDING_TERMS.slice(0, 4)).map((term, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C99A4A] shrink-0 mt-1.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>

            {!showAllTerms && (
              <button
                type="button"
                onClick={() => setShowAllTerms(true)}
                className="w-full py-2 rounded-lg bg-[#F7F3EA] border border-[#D8C6A8] text-xs font-semibold text-[#C99A4A] hover:bg-[#F1E9DA] transition-colors cursor-pointer"
              >
                + View Remaining {WEDDING_TERMS.length - 4} Terms & Policies
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 6. DECORATION SHOWCASE & APPROVED PDF CTA                     */}
        {/* ------------------------------------------------------------- */}
        <div className="rounded-3xl bg-gradient-to-br from-[#3E2F24] via-[#2F241C] to-[#251A12] text-white p-7 sm:p-10 border border-[#C99A4A]/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C99A4A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C99A4A]/20 border border-[#C99A4A]/40 text-[#E5BF77] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Event Styling</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-[#FBF8F1]">
              Explore Wedding Decoration Designs
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#D8C6A8] leading-relaxed font-light">
              From ethereal floral mandaps over the valley infinity pool to starlit lawn canopies,
              fairy-lit pathways, and regal stage backdrops—browse our full brochure portfolio and
              live Instagram showcase to visualize your celebration.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* PDF Brochure Button */}
              <a
                href={DECORATION_LINKS.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Explore Wedding Decoration Designs (PDF)</span>
              </a>

              {/* Instagram Showcase Link */}
              <a
                href={DECORATION_LINKS.instagramDecor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all active:scale-95"
              >
                <InstagramIcon className="w-4 h-4 text-[#E5BF77]" />
                <span>Instagram Showcase</span>
              </a>

              {/* WhatsApp Specialist */}
              <a
                href={generateWhatsAppLink(
                  "Hello Nirva Resort, I would like to consult with your wedding specialist regarding decor themes and packages."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#E5BF77] hover:text-white transition-colors underline underline-offset-4"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Wedding Concierge →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  Tag,
  Wind,
  Wifi,
  Waves,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  ROOMS_DATA,
  Room,
  STAY_WITH_FOOD_PACKAGES,
  SINGLE_COTTAGE_FOOD_PACKAGE,
  FLOATING_BREAKFAST,
} from "@/data/resort-data";
import RoomModal from "./RoomModal";

function RoomCard({
  room,
  onSelect,
}: {
  room: Room;
  onSelect: (room: Room, color?: string) => void;
}) {
  const [selectedColor, setSelectedColor] = useState<string>(
    () => room.colorVariants?.[0]?.name || "Blue"
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const hasVariants = Boolean(room.colorVariants && room.colorVariants.length > 0);
  const activeVariant = hasVariants
    ? room.colorVariants?.find((v) => v.name === selectedColor) || room.colorVariants?.[0]
    : null;

  const roomImages: readonly string[] = hasVariants
    ? activeVariant?.images || []
    : room.images && room.images.length > 0
    ? room.images
    : room.image
    ? [room.image]
    : [];

  const displayDayPrice = activeVariant?.dayPriceDisplay || room.dayPriceDisplay;
  const displayNightPrice = activeVariant?.nightPriceDisplay || room.nightPriceDisplay;

  const totalImages = roomImages.length;
  const currentImage = totalImages > 0 ? roomImages[currentImageIndex % totalImages] : "";

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (totalImages > 1) setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || totalImages <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      onClick={() => onSelect(room, hasVariants ? selectedColor : undefined)}
      className="group relative bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(62,47,36,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Card Top: Fixed 16:9 Image Frame */}
      <div
        className="relative w-full aspect-[16/9] overflow-hidden shrink-0 bg-[#231A13] border-0 select-none focus:outline-none focus:ring-0 outline-none"
        onTouchStart={totalImages > 1 ? handleTouchStart : undefined}
        onTouchEnd={totalImages > 1 ? handleTouchEnd : undefined}
      >
        {currentImage ? (
          <Image
            key={currentImage}
            src={currentImage}
            alt={`${room.name}${activeVariant ? ` - ${activeVariant.name}` : ""}`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            priority={hasVariants}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#3E2F24] to-[#231A13] flex items-center justify-center text-[#E6D8C2]/60 z-0">
            <span className="text-xs uppercase tracking-widest font-medium">{room.name}</span>
          </div>
        )}

        {/* Background preloading for remaining images in active collection */}
        {totalImages > 1 && (
          <div className="hidden" aria-hidden="true">
            {roomImages.map((src) => (
              src ? <img key={src} src={src} alt="" loading="eager" decoding="async" /> : null
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#231A13]/80 via-transparent via-40% to-black/20 pointer-events-none z-[2]" />

        {/* Top Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between gap-1 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#3E2F24]/85 backdrop-blur-md border border-[#D8C6A8]/40 text-[9px] sm:text-[10px] uppercase tracking-wider text-[#F7F3EA] font-semibold">
            <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C99A4A]" /> {room.capacity}
          </span>
          <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#C99A4A] text-[#2F241C] text-[8px] sm:text-[10px] uppercase tracking-wider font-bold shadow-md">
            <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> 10% OFF
          </span>
        </div>

        {/* Navigation Controls */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1.5 sm:left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1.5 sm:right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-[#3E2F24] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Subtle Image Counter Badge */}
            <div className="absolute top-9 sm:top-12 right-2 sm:right-3 z-10 flex items-center gap-1 bg-black/55 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full border border-white/15 text-[9px] sm:text-[10px] font-sans text-white/95 pointer-events-none">
              <span>
                {currentImageIndex + 1}/{totalImages}
              </span>
            </div>
          </>
        )}

        {/* Bottom Category on Image */}
        <div className="absolute bottom-2 sm:bottom-3 left-2.5 sm:left-4 right-2.5 sm:right-4 z-10 pointer-events-none">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#E6D8C2] font-semibold block mb-0.5 truncate">
            {room.category}
          </span>
          <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-white font-bold group-hover:text-[#DFB76C] transition-colors leading-tight truncate">
            {room.name}
          </h3>
        </div>
      </div>

      {/* Card Body: Info, Pricing & Amenities */}
      <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
        {/* Subtle Variant Controls for Single Cottage & Sunset Suite */}
        {hasVariants && (
          <div
            className="p-1.5 sm:p-2.5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
              <span className="uppercase tracking-wider text-[#6B5540] font-semibold text-[9px] sm:text-[10px]">
                {room.id === "single-cottage" ? "Color:" : "Variant:"}
              </span>
              <span className="font-semibold text-[#3E2F24] flex items-center gap-1 truncate text-[9px] sm:text-xs">
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full inline-block shrink-0"
                  style={{ backgroundColor: activeVariant?.colorCode }}
                />
                <span className="truncate">{selectedColor}</span>
              </span>
            </div>
            <div
              className={`grid gap-1 ${
                room.colorVariants!.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"
              }`}
            >
              {room.colorVariants!.map((variant) => {
                const isActive = selectedColor === variant.name;
                return (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(variant.name);
                      setCurrentImageIndex(0);
                    }}
                    className={`py-1 px-1 sm:py-1.5 sm:px-2 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-sans font-medium flex items-center justify-center gap-1 transition-all cursor-pointer border truncate ${
                      isActive
                        ? "bg-[#3E2F24] text-[#F7F3EA] border-[#3E2F24] shadow-sm font-semibold"
                        : "bg-[#FBF8F1] text-[#6B5540] hover:text-[#3E2F24] hover:bg-[#F1E9DA] border-[#D8C6A8]"
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0"
                      style={{ backgroundColor: variant.colorCode }}
                    />
                    <span className="truncate">{variant.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tagline */}
        <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-[#6B5540] font-light line-clamp-2 leading-snug sm:leading-relaxed">
          {room.tagline}
        </p>

        {/* Sunset Suite Optional Add-on Callout */}
        {room.optionalAddOns && room.optionalAddOns.length > 0 && (
          <div className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] text-[9px] sm:text-[11px] text-[#3E2F24] font-medium flex items-center justify-between gap-1">
            <span className="text-[#6B5540] truncate">Bathtub Add-on</span>
            <span className="font-sans font-bold text-[#C99A4A] shrink-0">{room.optionalAddOns[0].priceDisplay}</span>
          </div>
        )}

        {/* Dual Pricing Display */}
        <div className="p-2 sm:p-3.5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1.5 sm:space-y-2">
          <div className="flex items-center justify-between gap-1">
            <div className="text-left">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#6B5540] block font-medium">
                Day
              </span>
              <span className="font-sans text-xs sm:text-base lg:text-lg font-bold text-[#3E2F24]">
                {displayDayPrice}
              </span>
            </div>
            <div className="h-5 sm:h-7 w-px bg-[#D8C6A8]" />
            <div className="text-right">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-[#C99A4A] font-semibold block">
                Night
              </span>
              <span className="font-sans text-xs sm:text-base lg:text-lg font-bold text-[#C99A4A]">
                {displayNightPrice}
              </span>
            </div>
          </div>
          <div className="pt-1 border-t border-[#D8C6A8]/40 flex items-center justify-between text-[8px] sm:text-[10px] text-[#6B5540]">
            <span className="truncate">Room-only</span>
            <span className="text-[#C99A4A] font-semibold shrink-0">Excl. GST</span>
          </div>
        </div>

        {/* Amenities Quick Row */}
        <div className="pt-1.5 sm:pt-2 border-t border-[#D8C6A8]/40 flex items-center justify-between text-[10px] sm:text-[11px] text-[#6B5540]">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <span className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px]" title="Air Conditioning">
              <Wind className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A4A]" /> <span className="hidden xs:inline">AC</span>
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px]" title="High-Speed Wi-Fi">
              <Wifi className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A4A]" /> <span className="hidden xs:inline">Wi-Fi</span>
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px]" title="Pool Access">
              <Waves className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C99A4A]" /> <span className="hidden xs:inline">Pool</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[11px]" title="Bliss Cafe Restaurant">
              <Utensils className="w-3.5 h-3.5 text-[#C99A4A]" /> Dining
            </span>
          </div>

          {/* View Details Action */}
          <div className="inline-flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C99A4A] group-hover:text-[#9B7028] transition-colors shrink-0">
            Details <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Blue");

  const handleSelectRoom = (room: Room, color?: string) => {
    setSelectedRoom(room);
    if (color) setSelectedColor(color);
  };

  return (
    <section id="stay" className="py-24 md:py-32 bg-[#F1E9DA] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Accommodations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Sanctuaries of Comfort
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6B5540] max-w-2xl mx-auto font-light leading-relaxed">
            From colourful cottages and spacious villas to our Sunset Suite and group-friendly
            accommodations, choose the stay that fits your escape.
          </p>
        </div>

        {/* Category Quick Selector */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B5540] mb-3 md:mb-4 font-semibold">
            Quick View — 7 Official Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 sm:gap-2.5 justify-center">
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                onClick={() =>
                  handleSelectRoom(
                    room,
                    room.colorVariants && room.colorVariants.length > 0
                      ? room.colorVariants[0].name
                      : undefined
                  )
                }
                className="px-2.5 sm:px-4 py-2 rounded-xl sm:rounded-full border border-[#D8C6A8] bg-[#FBF8F1] text-[#3E2F24] text-[11px] sm:text-xs font-sans hover:border-[#C99A4A] hover:text-[#C99A4A] hover:bg-[#F7F3EA] transition-all duration-200 cursor-pointer text-center truncate shadow-sm active:scale-95"
                title={`${room.name} (${room.nightPriceDisplay}/night)`}
              >
                <span className="font-semibold block sm:inline">{room.name}</span>
                <span className="text-[10px] text-[#C99A4A] block sm:inline sm:ml-1">
                  ({room.nightPriceDisplay})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Cards Grid (All 7 Official Categories) - Clean 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {ROOMS_DATA.map((room) => (
            <RoomCard key={room.id} room={room} onSelect={handleSelectRoom} />
          ))}
        </div>

        {/* Curated Packages: Stay With Food Packages & Single Cottage Special Package */}
        <div id="packages" className="space-y-8 pt-16 mt-16 border-t border-[#D8C6A8]">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-0.5">
              <Sparkles className="w-3 h-3 text-[#C99A4A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                Curated Packages
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3E2F24] font-medium">
              Stay With Food Packages
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5540] font-light">
              Elevate your retreat with all-inclusive dining packages crafted by our chef.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Package 1: One Day Food Package */}
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-sm">
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
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-sm">
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
            <div className="p-6 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] flex flex-col justify-between space-y-5 md:col-span-2 lg:col-span-1 shadow-sm">
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
                    <span className="font-semibold text-[#6B5540]">
                      <span className="text-[#3E2F24]">
                        Day <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.dayPrice}</span>
                      </span>{" "}
                      •{" "}
                      <span className="text-[#C99A4A]">
                        Night{" "}
                        <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.adultRates.nightPrice}</span>
                      </span>
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-between text-xs">
                    <span className="text-[#6B5540] font-medium">
                      {SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.ageRange}
                    </span>
                    <span className="font-medium text-[#6B5540]">
                      <span className="text-[#3E2F24]">
                        Day <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.dayPrice}</span>
                      </span>{" "}
                      •{" "}
                      <span className="text-[#C99A4A]">
                        Night{" "}
                        <span className="font-sans font-bold">{SINGLE_COTTAGE_FOOD_PACKAGE.kidsRates.nightPrice}</span>
                      </span>
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
      </div>

      {/* Detail Modal */}
      <RoomModal
        room={selectedRoom}
        initialColor={selectedColor}
        onClose={() => setSelectedRoom(null)}
      />
    </section>
  );
}


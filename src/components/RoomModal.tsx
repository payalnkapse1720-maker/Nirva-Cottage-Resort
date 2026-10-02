"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Check,
  Users,
  Sparkles,
  MessageSquare,
  Tag,
  Bath,
  Info,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Room, RESORT_INFO } from "@/data/resort-data";

interface RoomModalProps {
  room: Room | null;
  initialColor?: string;
  onClose: () => void;
}

export default function RoomModal({ room, initialColor = "Blue", onClose }: RoomModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [fullscreenView, setFullscreenView] = useState<boolean>(false);

  useEffect(() => {
    setSelectedColor(initialColor || "Blue");
    setCurrentImageIndex(0);
    setFullscreenView(false);
  }, [room, initialColor]);

  const hasVariants = Boolean(room?.colorVariants && room.colorVariants.length > 0);
  const activeVariant = hasVariants
    ? room?.colorVariants?.find((v) => v.name === selectedColor) || room?.colorVariants?.[0]
    : null;

  const roomImages: readonly string[] = hasVariants
    ? activeVariant?.images || []
    : room?.images && room.images.length > 0
    ? room.images
    : room?.image
    ? [room.image]
    : [];

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

  useEffect(() => {
    if (!room) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenView) {
          setFullscreenView(false);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [room, fullscreenView, totalImages, onClose]);

  if (!room) return null;

  const whatsappMessage = hasVariants
    ? `Hello Nirva Resort, I would like to check availability for *${room.name} (${selectedColor} Cottage)* (Capacity: ${room.capacity}).`
    : `Hello Nirva Resort, I would like to check availability for *${room.name}* (Capacity: ${room.capacity}).`;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/65 backdrop-blur-md animate-in fade-in duration-200 select-none"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl lg:max-w-5xl bg-[#FBF8F1] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] focus:outline-none focus:ring-0 outline-none border-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image: 16:9 Cinematic Proportional Frame */}
          <div
            className="relative w-full aspect-[16/9] shrink-0 overflow-hidden bg-[#231A13] border-0 cursor-zoom-in group select-none focus:outline-none focus:ring-0 outline-none"
            onTouchStart={totalImages > 1 ? handleTouchStart : undefined}
            onTouchEnd={totalImages > 1 ? handleTouchEnd : undefined}
            onClick={() => setFullscreenView(true)}
            title="Click or tap to view photo enlarged"
          >
            {currentImage ? (
              <>
                {/* Background Layer: Same Image Strongly Blurred to Fill 16:9 Frame */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
                  <Image
                    src={currentImage}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover object-center blur-2xl scale-125 opacity-70 brightness-[0.7]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#231A13]/25 backdrop-blur-sm" />
                </div>

                {/* Foreground Layer: Full Original Image (object-contain, never cropped or distorted) */}
                <div className="absolute inset-0 flex items-center justify-center z-[1] p-1 pointer-events-none">
                  <Image
                    key={currentImage}
                    src={currentImage}
                    alt={`${room.name}${activeVariant ? ` - ${activeVariant.name}` : ""}`}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-contain object-center drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                </div>
              </>
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#231A13]/85 via-transparent via-40% to-black/25 pointer-events-none z-[2]" />

            {/* Navigation Controls */}
            {totalImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#3E2F24] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#3E2F24] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg active:scale-95 focus:outline-none focus:ring-0 outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Subtle Image Counter Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-sans text-white/95 pointer-events-none">
                  <span>
                    {hasVariants ? `${selectedColor}: ` : ""}{currentImageIndex + 1} / {totalImages}
                  </span>
                </div>
              </>
            )}

            {/* Expand / Maximize Hint Badge */}
            <div className="absolute top-4 right-16 z-10 hidden sm:flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[11px] font-sans text-white/90 pointer-events-none group-hover:bg-[#C99A4A] group-hover:text-[#2F241C] transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Tap to Enlarge</span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FBF8F1]/90 text-[#3E2F24] hover:text-black hover:bg-[#F1E9DA] transition-colors cursor-pointer shadow-md z-20 focus:outline-none focus:ring-0 outline-none border-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Room Title on Image */}
            <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold">
                  {room.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F3EA]/90 font-medium">
                  {room.capacity}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                {room.name}
                {hasVariants && (
                  <span className="text-base sm:text-lg lg:text-xl font-sans font-normal text-[#DFB76C] ml-2">
                    ({selectedColor})
                  </span>
                )}
              </h3>
            </div>
          </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Colour Variant Controls for Single Cottage */}
          {hasVariants && (
            <div className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider text-[#6B5540] font-semibold text-[10px]">
                  Cottage Shade / Colour Variant:
                </span>
                <span className="font-semibold text-[#3E2F24] flex items-center gap-1.5 text-xs">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: activeVariant?.colorCode }}
                  />
                  {selectedColor} Cottage ({totalImages} photos)
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {room.colorVariants!.map((variant) => {
                  const isActive = selectedColor === variant.name;
                  return (
                    <button
                      key={variant.name}
                      type="button"
                      onClick={() => {
                        setSelectedColor(variant.name);
                        setCurrentImageIndex(0);
                      }}
                      className={`py-2 px-2.5 rounded-lg text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                        isActive
                          ? "bg-[#3E2F24] text-[#F7F3EA] border-[#3E2F24] shadow-sm font-semibold"
                          : "bg-[#FBF8F1] text-[#6B5540] hover:text-[#3E2F24] hover:bg-[#F1E9DA] border-[#D8C6A8]"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: variant.colorCode }}
                      />
                      <span>{variant.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="font-sans text-[#6B5540] leading-relaxed font-light">
            {room.description}
          </p>

          {/* Pricing Blocks (Day Stay & One Night) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Room-Only Tariff
              </h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#2F241C] bg-[#C99A4A] px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                <Tag className="w-3 h-3" /> 10% OFF MON–FRI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Day Stay Block */}
              <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B5540] font-semibold block">
                    DAY STAY
                  </span>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-[#3E2F24] mt-1">
                    {room.dayPriceDisplay}
                  </div>
                </div>
                <span className="text-[11px] text-[#6B5540] mt-2 font-light">
                  9:00 AM – 7:00 PM • Without food
                </span>
              </div>

              {/* One Night Block */}
              <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C99A4A]/10 rounded-bl-full pointer-events-none" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C99A4A] font-semibold block">
                    ONE NIGHT
                  </span>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-[#C99A4A] mt-1">
                    {room.nightPriceDisplay}
                  </div>
                </div>
                <span className="text-[11px] text-[#6B5540] mt-2 font-light">
                  Overnight stay • Without food
                </span>
              </div>
            </div>

            {/* Room Tariff Notes */}
            <div className="p-3 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-start gap-2.5 text-xs text-[#6B5540]">
              <Info className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong className="text-[#3E2F24] font-medium">Room-only pricing:</strong> Prices shown
                are without food. Food packages are available separately. 10% discount applies on
                weekdays (Monday–Friday). All prices exclusive of GST.
              </p>
            </div>
          </div>

          {/* Optional Add-on (for Sunset Suite only) */}
          {room.optionalAddOns && room.optionalAddOns.length > 0 && (
            <div className="p-4 rounded-xl bg-[#F1E9DA] border border-[#C99A4A]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-[#C99A4A] font-semibold flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-[#C99A4A]" /> Optional Upgrade
                </span>
                <span className="text-xs font-sans font-bold text-[#3E2F24] bg-[#C99A4A]/20 px-2.5 py-1 rounded-md border border-[#C99A4A]/40">
                  {room.optionalAddOns[0].priceDisplay}
                </span>
              </div>
              <p className="text-xs text-[#6B5540] font-light">
                {room.optionalAddOns[0].description}
              </p>
            </div>
          )}

          {/* Capacity and Official Amenities */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                Complimentary Amenities
              </h4>
              <span className="text-xs text-[#6B5540] flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-[#C99A4A]" /> Suitable for up to{" "}
                {room.capacityNumber} people
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {room.amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 rounded-lg bg-[#F7F3EA] border border-[#D8C6A8] text-xs text-[#3E2F24]"
                >
                  <Check className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-[#D8C6A8] bg-[#F1E9DA] flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#6B5540] hover:text-[#3E2F24] px-3 py-2 transition-colors cursor-pointer font-medium focus:outline-none focus:ring-0 outline-none"
          >
            Close
          </button>
          <a
            href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C99A4A] text-[#2F241C] font-semibold text-xs uppercase tracking-[0.15em] px-5 py-3 rounded-lg hover:bg-[#b88939] transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(201,154,74,0.25)] cursor-pointer focus:outline-none focus:ring-0 outline-none"
          >
            <MessageSquare className="w-4 h-4" /> Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* Fullscreen Enlarged Room Image Lightbox */}
    {fullscreenView && currentImage && (
      <div
        onClick={() => setFullscreenView(false)}
        onTouchStart={totalImages > 1 ? handleTouchStart : undefined}
        onTouchEnd={totalImages > 1 ? handleTouchEnd : undefined}
        className="fixed inset-0 z-[70] bg-black/94 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 select-none"
      >
        {/* Top Bar: Counter Badge */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-white/90 font-sans pointer-events-none">
          <span>
            {hasVariants ? `${selectedColor}: ` : ""}{currentImageIndex + 1} / {totalImages}
          </span>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setFullscreenView(false)}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/15 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-colors z-20 cursor-pointer border border-white/20 shadow-lg focus:outline-none focus:ring-0 outline-none"
          aria-label="Close enlarged photo"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation controls */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/50 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-all z-20 cursor-pointer border border-white/20 shadow-xl focus:outline-none focus:ring-0 outline-none active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/50 text-white hover:bg-[#C99A4A] hover:text-[#2F241C] transition-all z-20 cursor-pointer border border-white/20 shadow-xl focus:outline-none focus:ring-0 outline-none active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Image Container - Expanded wide view */}
        <div
          className="relative max-w-7xl w-full max-h-[88vh] h-[78vh] sm:h-[84vh] flex items-center justify-center pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentImage}
            alt={`${room.name}${activeVariant ? ` - ${activeVariant.name}` : ""}`}
            fill
            unoptimized
            className="object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            priority
          />
          <div className="absolute bottom-3 bg-[#3E2F24]/85 backdrop-blur-md px-6 py-2 rounded-full border border-[#D8C6A8]/40 text-center pointer-events-auto shadow-lg">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E6D8C2] block">
              {room.category} • {room.capacity}
            </span>
            <p className="font-serif text-sm sm:text-base text-white">
              {room.name}{hasVariants ? ` (${selectedColor})` : ""}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
  );
}


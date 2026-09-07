"use client";

import Image from "next/image";
import { X, Check, Users, Sparkles, MessageSquare, Tag, Bath, Info } from "lucide-react";
import { Room, RESORT_INFO } from "@/data/resort-data";

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  if (!room) return null;

  const whatsappMessage = `Hello Nirva Resort, I would like to check availability for *${room.name}* (Capacity: ${room.capacity}).`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FBF8F1] border border-[#D8C6A8] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative w-full h-56 sm:h-64 shrink-0">
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/90 via-[#3E2F24]/40 to-black/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FBF8F1]/90 text-[#3E2F24] hover:text-black hover:bg-[#F1E9DA] transition-colors border border-[#D8C6A8] cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Room Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold">
                {room.category}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[11px] uppercase tracking-wider text-[#F7F3EA]/90 font-medium">
                {room.capacity}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
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
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2F24] mt-1">
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
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C99A4A] mt-1">
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
                <span className="text-xs font-serif font-bold text-[#3E2F24] bg-[#C99A4A]/20 px-2.5 py-1 rounded-md border border-[#C99A4A]/40">
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
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#6B5540] hover:text-[#3E2F24] px-3 py-2 transition-colors cursor-pointer font-medium"
          >
            Close
          </button>
          <a
            href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C99A4A] text-[#2F241C] font-semibold text-xs uppercase tracking-[0.15em] px-5 py-3 rounded-lg hover:bg-[#b88939] transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(201,154,74,0.25)] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}


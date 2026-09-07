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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#161714] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#161714] via-black/30 to-black/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black transition-colors border border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Room Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                {room.category}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[11px] uppercase tracking-wider text-[#E5E4E2]/80">
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
          <p className="font-sans text-[#E5E4E2]/85 leading-relaxed font-light">
            {room.description}
          </p>

          {/* Pricing Blocks (Day Stay & One Night) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#f2ca50] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Room-Only Tariff
              </h4>
              <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#f2ca50] bg-[#f2ca50]/10 border border-[#f2ca50]/30 px-2.5 py-0.5 rounded-full font-medium">
                <Tag className="w-3 h-3" /> 10% OFF MON–FRI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Day Stay Block */}
              <div className="p-4 rounded-xl bg-black/50 border border-[#d4af37]/25 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d0c5af] font-medium block">
                    DAY STAY
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    {room.dayPriceDisplay}
                  </div>
                </div>
                <span className="text-[11px] text-[#E5E4E2]/60 mt-2 font-light">
                  9:00 AM – 7:00 PM • Without food
                </span>
              </div>

              {/* One Night Block */}
              <div className="p-4 rounded-xl bg-black/50 border border-[#d4af37]/35 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f2ca50]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold block">
                    ONE NIGHT
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#f2ca50] mt-1">
                    {room.nightPriceDisplay}
                  </div>
                </div>
                <span className="text-[11px] text-[#E5E4E2]/60 mt-2 font-light">
                  Overnight stay • Without food
                </span>
              </div>
            </div>

            {/* Room Tariff Notes */}
            <div className="p-3 rounded-lg bg-[#121411] border border-white/5 flex items-start gap-2.5 text-xs text-[#E5E4E2]/70">
              <Info className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
              <p className="leading-snug">
                <strong className="text-white font-medium">Room-only pricing:</strong> Prices shown
                are without food. Food packages are available separately. 10% discount applies on
                weekdays (Monday–Friday). All prices exclusive of GST.
              </p>
            </div>
          </div>

          {/* Optional Add-on (for Sunset Suite only) */}
          {room.optionalAddOns && room.optionalAddOns.length > 0 && (
            <div className="p-4 rounded-xl bg-[#1f201d]/90 border border-[#f2ca50]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-[#f2ca50] font-semibold flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-[#f2ca50]" /> Optional Upgrade
                </span>
                <span className="text-xs font-serif font-bold text-white bg-[#f2ca50]/15 px-2.5 py-1 rounded-md border border-[#f2ca50]/40">
                  {room.optionalAddOns[0].priceDisplay}
                </span>
              </div>
              <p className="text-xs text-[#E5E4E2]/85 font-light">
                {room.optionalAddOns[0].description}
              </p>
            </div>
          )}

          {/* Capacity and Official Amenities */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                Complimentary Amenities
              </h4>
              <span className="text-xs text-[#E5E4E2]/70 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#f2ca50]" /> Suitable for up to{" "}
                {room.capacityNumber} people
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {room.amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5 text-xs text-[#E5E4E2]/85"
                >
                  <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-black/70 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#E5E4E2]/70 hover:text-white px-3 py-2 transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.15em] px-5 py-3 rounded-lg hover:bg-[#ffe088] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.25)] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}


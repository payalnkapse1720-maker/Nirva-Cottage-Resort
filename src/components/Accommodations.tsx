"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Users, Tag, Wind, Wifi, Waves, Utensils } from "lucide-react";
import { ROOMS_DATA, Room } from "@/data/resort-data";
import RoomModal from "./RoomModal";

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="stay" className="py-24 md:py-32 bg-[#F1E9DA] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
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

        {/* Accommodation Cards Grid (All 7 Official Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ROOMS_DATA.map((room) => {
            return (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group relative bg-[#FBF8F1] border border-[#D8C6A8] hover:border-[#C99A4A] rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(62,47,36,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Card Top: Image & Overlay Badges */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/85 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E2F24]/85 backdrop-blur-md border border-[#D8C6A8]/40 text-[10px] uppercase tracking-wider text-[#F7F3EA] font-semibold">
                      <Users className="w-3 h-3 text-[#C99A4A]" /> {room.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C99A4A] text-[#2F241C] text-[10px] uppercase tracking-wider font-bold shadow-md">
                      <Tag className="w-3 h-3" /> 10% OFF MON–FRI
                    </span>
                  </div>

                  {/* Bottom Category on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6D8C2] font-semibold block mb-0.5">
                      {room.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold group-hover:text-[#DFB76C] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: Info, Pricing & Amenities */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Tagline */}
                  <p className="font-sans text-xs sm:text-sm text-[#6B5540] font-light line-clamp-2 leading-relaxed">
                    {room.tagline}
                  </p>

                  {/* Sunset Suite Optional Add-on Callout */}
                  {room.optionalAddOns && room.optionalAddOns.length > 0 && (
                    <div className="px-3 py-2 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] text-[11px] text-[#3E2F24] font-medium flex items-center justify-between">
                      <span className="text-[#6B5540]">Bathtub Suite Add-on</span>
                      <span className="font-sans font-bold text-[#C99A4A]">{room.optionalAddOns[0].priceDisplay}</span>
                    </div>
                  )}

                  {/* Dual Pricing Display */}
                  <div className="p-3.5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] uppercase tracking-wider text-[#6B5540] block font-medium">
                          One Day
                        </span>
                        <span className="font-sans text-base sm:text-lg font-bold text-[#3E2F24]">
                          {room.dayPriceDisplay}
                        </span>
                      </div>
                      <div className="h-7 w-px bg-[#D8C6A8]" />
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#C99A4A] font-semibold block">
                          One Night
                        </span>
                        <span className="font-sans text-base sm:text-lg font-bold text-[#C99A4A]">
                          {room.nightPriceDisplay}
                        </span>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-[#D8C6A8]/40 flex items-center justify-between text-[10px] text-[#6B5540]">
                      <span>Room-only tariff (without food)</span>
                      <span className="text-[#C99A4A] font-semibold">Excl. GST</span>
                    </div>
                  </div>

                  {/* Amenities Quick Row */}
                  <div className="pt-2 border-t border-[#D8C6A8]/40 flex items-center justify-between text-[11px] text-[#6B5540]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1" title="Air Conditioning">
                        <Wind className="w-3.5 h-3.5 text-[#C99A4A]" /> AC
                      </span>
                      <span className="flex items-center gap-1" title="High-Speed Wi-Fi">
                        <Wifi className="w-3.5 h-3.5 text-[#C99A4A]" /> Wi-Fi
                      </span>
                      <span className="flex items-center gap-1" title="Infinity Pool Access">
                        <Waves className="w-3.5 h-3.5 text-[#C99A4A]" /> Pool
                      </span>
                      <span className="flex items-center gap-1" title="Bliss Cafe Restaurant">
                        <Utensils className="w-3.5 h-3.5 text-[#C99A4A]" /> Dining
                      </span>
                    </div>

                    {/* View Details Action */}
                    <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C99A4A] group-hover:text-[#9B7028] transition-colors">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Quick Selector Pills */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B5540] mb-4 font-semibold">
            Quick View — 7 Official Categories
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="px-4 py-2 rounded-full border border-[#D8C6A8] bg-[#FBF8F1] text-[#3E2F24] text-xs font-sans hover:border-[#C99A4A] hover:text-[#C99A4A] hover:bg-[#F7F3EA] transition-all duration-200 cursor-pointer"
              >
                {room.name} ({room.nightPriceDisplay}/night)
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
}


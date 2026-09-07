"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Users, Tag, Wind, Wifi, Waves, Utensils } from "lucide-react";
import { ROOMS_DATA, Room } from "@/data/resort-data";
import RoomModal from "./RoomModal";

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="stay" className="py-24 md:py-32 bg-[#111111] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
              Accommodations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">
            Sanctuaries of Comfort
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#E5E4E2]/75 max-w-2xl mx-auto font-light leading-relaxed">
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
                className="group relative bg-[#161714] border border-[#d4af37]/25 hover:border-[#f2ca50]/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161714] via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/30 text-[10px] uppercase tracking-wider text-[#f2ca50] font-semibold">
                      <Users className="w-3 h-3" /> {room.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2ca50] text-[#121411] text-[10px] uppercase tracking-wider font-bold shadow-md">
                      <Tag className="w-3 h-3" /> 10% OFF MON–FRI
                    </span>
                  </div>

                  {/* Bottom Category on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold block mb-0.5">
                      {room.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold group-hover:text-[#f2ca50] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: Info, Pricing & Amenities */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Tagline */}
                  <p className="font-sans text-xs sm:text-sm text-[#E5E4E2]/75 font-light line-clamp-2 leading-relaxed">
                    {room.tagline}
                  </p>

                  {/* Sunset Suite Optional Add-on Callout */}
                  {room.optionalAddOns && room.optionalAddOns.length > 0 && (
                    <div className="px-3 py-2 rounded-lg bg-[#f2ca50]/10 border border-[#f2ca50]/25 text-[11px] text-[#f2ca50] font-medium flex items-center justify-between">
                      <span>Bathtub Suite Add-on</span>
                      <span className="font-bold">{room.optionalAddOns[0].priceDisplay}</span>
                    </div>
                  )}

                  {/* Dual Pricing Display */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] uppercase tracking-wider text-[#d0c5af] block">
                          One Day
                        </span>
                        <span className="font-serif text-base sm:text-lg font-bold text-white">
                          {room.dayPriceDisplay}
                        </span>
                      </div>
                      <div className="h-7 w-px bg-white/10" />
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#f2ca50] font-medium block">
                          One Night
                        </span>
                        <span className="font-serif text-base sm:text-lg font-bold text-[#f2ca50]">
                          {room.nightPriceDisplay}
                        </span>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-white/5 flex items-center justify-between text-[10px] text-[#E5E4E2]/60">
                      <span>Room-only tariff (without food)</span>
                      <span className="text-[#f2ca50]/80 font-medium">Excl. GST</span>
                    </div>
                  </div>

                  {/* Amenities Quick Row */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#E5E4E2]/70">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1" title="Air Conditioning">
                        <Wind className="w-3.5 h-3.5 text-[#f2ca50]" /> AC
                      </span>
                      <span className="flex items-center gap-1" title="High-Speed Wi-Fi">
                        <Wifi className="w-3.5 h-3.5 text-[#f2ca50]" /> Wi-Fi
                      </span>
                      <span className="flex items-center gap-1" title="Infinity Pool Access">
                        <Waves className="w-3.5 h-3.5 text-[#f2ca50]" /> Pool
                      </span>
                      <span className="flex items-center gap-1" title="Bliss Cafe Restaurant">
                        <Utensils className="w-3.5 h-3.5 text-[#f2ca50]" /> Dining
                      </span>
                    </div>

                    {/* View Details Action */}
                    <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#f2ca50] group-hover:text-[#ffe088] transition-colors">
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#d0c5af] mb-4 font-medium">
            Quick View — 7 Official Categories
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#161714]/80 text-[#E5E4E2]/85 text-xs font-sans hover:border-[#f2ca50] hover:text-[#f2ca50] hover:bg-[#1f201d] transition-all duration-200 cursor-pointer"
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


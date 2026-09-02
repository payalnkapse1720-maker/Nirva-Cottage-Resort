"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ROOMS_DATA, Room } from "@/data/resort-data";
import RoomModal from "./RoomModal";

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const mainRoom = ROOMS_DATA[0]; // Sunset Suite Rooms
  const bathtubRoom = ROOMS_DATA[1]; // Sunset Suite with Bathtub
  const colourfulCottage = ROOMS_DATA[2]; // Colourful Cottages
  const villa = ROOMS_DATA[3]; // 3BHK Villa

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
          <p className="font-sans text-base sm:text-lg text-[#E5E4E2]/70 max-w-2xl mx-auto font-light">
            Choose from our diverse collection of 20 thoughtfully designed rooms, cottages, and
            villas, each crafted to provide an intimate connection with nature.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Feature Room: Sunset Suite (Span 2 cols, 2 rows) */}
          <div
            onClick={() => setSelectedRoom(mainRoom)}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl glass-panel border border-[#d4af37]/20 cursor-pointer min-h-[440px] sm:min-h-[500px]"
          >
            <Image
              src={mainRoom.image}
              alt={mainRoom.name}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex justify-between items-end gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                    {mainRoom.category} • {mainRoom.capacity}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                    {mainRoom.name}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#E5E4E2]/80 max-w-md font-light">
                    {mainRoom.tagline}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#f2ca50] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#121411] transition-all duration-300 shrink-0 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Room 1: Sunset Suite with Bathtub */}
          <div
            onClick={() => setSelectedRoom(bathtubRoom)}
            className="relative overflow-hidden rounded-2xl glass-panel border border-[#d4af37]/20 group cursor-pointer aspect-square sm:aspect-auto sm:min-h-[240px]"
          >
            <Image
              src={bathtubRoom.image}
              alt={bathtubRoom.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-medium">
                {bathtubRoom.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-1">
                {bathtubRoom.name}
              </h3>
              <p className="font-sans text-xs text-[#E5E4E2]/70 line-clamp-1 font-light">
                {bathtubRoom.tagline}
              </p>
            </div>
          </div>

          {/* Secondary Room 2: Colourful Cottages */}
          <div
            onClick={() => setSelectedRoom(colourfulCottage)}
            className="relative overflow-hidden rounded-2xl glass-panel border border-[#d4af37]/20 group cursor-pointer aspect-square sm:aspect-auto sm:min-h-[240px]"
          >
            <Image
              src={colourfulCottage.image}
              alt={colourfulCottage.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-medium">
                {colourfulCottage.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-1">
                {colourfulCottage.name}
              </h3>
              <p className="font-sans text-xs text-[#E5E4E2]/70 line-clamp-1 font-light">
                {colourfulCottage.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Third Featured Card: 3BHK Villa Banner */}
        <div
          onClick={() => setSelectedRoom(villa)}
          className="mt-6 relative overflow-hidden rounded-2xl glass-panel border border-[#d4af37]/20 group cursor-pointer min-h-[220px] sm:min-h-[260px] flex items-end p-6 sm:p-8"
        >
          <Image
            src={villa.image}
            alt={villa.name}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-semibold">
                {villa.category} • {villa.capacity}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                {villa.name}
              </h3>
              <p className="font-sans text-sm text-[#E5E4E2]/80 max-w-xl font-light">
                {villa.tagline}
              </p>
            </div>
            <button className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#f2ca50] text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#121411] transition-all duration-300 text-xs uppercase tracking-wider font-semibold">
              Explore Villa <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Room Types Pills (Quick access to all 7 categories) */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d0c5af] mb-4 font-medium">
            Explore All 7 Accommodation Categories
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {ROOMS_DATA.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="px-5 py-2.5 rounded-full border border-[#d4af37]/30 bg-[#161714]/80 text-[#E5E4E2]/85 text-xs font-sans hover:border-[#f2ca50] hover:text-[#f2ca50] hover:bg-[#1f201d] transition-all duration-200 cursor-pointer"
              >
                {room.name}
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

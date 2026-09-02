"use client";

import Image from "next/image";
import { X, Check, Users, Eye, Bed, MessageSquare } from "lucide-react";
import { Room, RESORT_INFO } from "@/data/resort-data";

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  if (!room) return null;

  const whatsappMessage = `Hello Nirva Resort, I would like to check availability for *${room.name}* (${room.category}).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#161714] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative w-full h-64 sm:h-72 shrink-0">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161714] via-transparent to-black/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Room Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#f2ca50] font-semibold block mb-1">
              {room.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="font-sans text-sm text-[#E5E4E2]/80 leading-relaxed font-light">
            {room.description}
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-[#d4af37]/15 text-xs">
            <div className="flex flex-col items-center text-center gap-1">
              <Users className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-[#E5E4E2]/60">Capacity</span>
              <span className="font-medium text-white">{room.capacity}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 border-x border-white/10 px-2">
              <Eye className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-[#E5E4E2]/60">Outlook</span>
              <span className="font-medium text-white">{room.view}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Bed className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-[#E5E4E2]/60">Bed Type</span>
              <span className="font-medium text-white">{room.bed}</span>
            </div>
          </div>

          {/* Amenities Checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#f2ca50] font-semibold mb-3">
              Room Amenities & Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#E5E4E2]/85">
                  <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-black/60 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#E5E4E2]/70 hover:text-white px-4 py-2.5 transition-colors"
          >
            Close
          </button>
          <a
            href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-lg hover:bg-[#ffe088] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.25)]"
          >
            <MessageSquare className="w-4 h-4" /> Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

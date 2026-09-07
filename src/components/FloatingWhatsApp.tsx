"use client";

import { MessageSquare } from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
          "Hello Nirva Resort, I would like to enquire about booking a stay."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-[#C99A4A]/60"
        aria-label="Direct WhatsApp Reservation"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>

      {/* Hover Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#FBF8F1] border border-[#D8C6A8] text-xs font-sans text-[#3E2F24] font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Book on WhatsApp
      </div>
    </div>
  );
}

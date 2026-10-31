import {
  Waves,
  UtensilsCrossed,
  Music,
  Sparkles,
  Wifi,
  Compass,
  Clock,
  CalendarCheck,
  Gamepad2,
} from "lucide-react";
import { AMENITIES_LIST } from "@/data/resort-data";

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-[#C99A4A]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#C99A4A]" />,
  Music: <Music className="w-6 h-6 text-[#C99A4A]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C99A4A]" />,
  Wifi: <Wifi className="w-6 h-6 text-[#C99A4A]" />,
  Compass: <Compass className="w-6 h-6 text-[#C99A4A]" />,
  Clock: <Clock className="w-6 h-6 text-[#C99A4A]" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-[#C99A4A]" />,
  Gamepad2: <Gamepad2 className="w-6 h-6 text-[#C99A4A]" />,
};

export default function AmenitiesGrid() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#F7F3EA] relative border-t border-b border-[#D8C6A8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Resort Features
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Amenities & Privileges
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-xl mx-auto font-light">
            Every facility is crafted to evoke effortless indulgence and intimate quietude during your
            stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {AMENITIES_LIST.map((amenity) => (
            <div
              key={amenity.title}
              className="glass-panel p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#D8C6A8] hover:border-[#C99A4A] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center mb-2.5 sm:mb-4 group-hover:scale-105 transition-transform">
                  <div className="scale-75 sm:scale-100 flex items-center justify-center">
                    {iconMap[amenity.icon]}
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-lg text-[#3E2F24] font-semibold mb-1 sm:mb-2 group-hover:text-[#C99A4A] transition-colors leading-tight">
                  {amenity.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-[#6B5540] leading-snug sm:leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

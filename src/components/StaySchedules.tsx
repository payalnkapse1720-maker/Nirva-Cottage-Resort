import { Clock } from "lucide-react";
import { CHECKIN_TIMINGS } from "@/data/resort-data";

export default function StaySchedules() {
  return (
    <section className="bg-[#F7F3EA] pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] space-y-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#D8C6A8]/60 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-bold flex items-center gap-2">
              <Clock className="w-4 h-4" /> Official Stay Schedules
            </span>
            <span className="text-xs text-[#6B5540] font-light">
              Standard Check-in & Check-out Timings
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
            {CHECKIN_TIMINGS.map((t) => (
              <div
                key={t.badge}
                className="p-4 sm:p-5 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] flex flex-col justify-between space-y-2.5 hover:border-[#C99A4A] transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                    {t.badge}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#3E2F24] block mt-1">
                    {t.display}
                  </span>
                  <span className="text-xs text-[#3E2F24] block mt-1 font-medium leading-snug">
                    {t.hours}
                  </span>
                </div>
                {t.description && (
                  <p className="text-[11px] sm:text-xs text-[#6B5540] font-light leading-relaxed pt-2.5 border-t border-[#D8C6A8]/40">
                    {t.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


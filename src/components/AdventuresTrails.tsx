import Image from "next/image";
import { Clock, Compass, ArrowRight, Mountain } from "lucide-react";
import { TRAILS_DATA, RESORT_INFO } from "@/data/resort-data";

export default function AdventuresTrails() {
  return (
    <section id="trails" className="py-24 md:py-32 bg-[#F1E9DA] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
              <Compass className="w-3.5 h-3.5 text-[#C99A4A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
                Wilderness & Nature
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
              Adventures & Trails
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B5540] font-light">
              Discover the secluded wilderness surrounding Nirva along the Kondeshwar hills.
              Unplug and explore our curated scenic treks and golden hour pathways.
            </p>
          </div>

          <a
            href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Nirva Resort, could you share more details about the guided nature trails and waterfall visits?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C99A4A] text-[#C99A4A] hover:bg-[#C99A4A]/10 transition-colors text-xs uppercase tracking-wider font-semibold"
          >
            Ask Concierge About Trails <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Trail Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TRAILS_DATA.map((trail) => (
            <div
              key={trail.id}
              className="bg-[#FBF8F1] border border-[#D8C6A8] rounded-2xl p-5 sm:p-6 flex flex-col gap-5 group hover:border-[#C99A4A] transition-all duration-300 shadow-xl"
            >
              {/* Image with Duration Overlay */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src={trail.image}
                  alt={trail.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                <div className="absolute top-4 left-4 bg-[#FBF8F1]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D8C6A8] flex items-center gap-1.5 text-xs text-[#3E2F24]">
                  <Clock className="w-3.5 h-3.5 text-[#C99A4A]" />
                  <span className="font-medium">{trail.duration}</span>
                  <span className="text-[#6B5540]/40">•</span>
                  <span className="text-[#C99A4A] font-semibold">{trail.difficulty}</span>
                </div>
              </div>

              {/* Trail Info */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-[#3E2F24] font-bold group-hover:text-[#C99A4A] transition-colors">
                  {trail.title}
                </h3>
                <p className="font-sans text-sm text-[#6B5540] font-light leading-relaxed">
                  {trail.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {trail.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 text-[11px] px-3 py-1 rounded-full bg-[#F7F3EA] border border-[#D8C6A8] text-[#6B5540]"
                    >
                      <Mountain className="w-3 h-3 text-[#C99A4A]" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

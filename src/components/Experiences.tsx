import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { EXPERIENCES_DATA } from "@/data/resort-data";

export default function Experiences() {
  const exp1 = EXPERIENCES_DATA[0]; // Weddings & Celebrations
  const exp2 = EXPERIENCES_DATA[1]; // Nightlife & Wellness

  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#F7F3EA] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Curated Escapes
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Curated Experiences
          </h2>
          <div className="w-20 h-0.5 bg-[#C99A4A] mx-auto mt-3" />
        </div>

        {/* Experience 1: Weddings & Events */}
        <div className="space-y-24 md:space-y-32">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-7 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C6A8] group">
              <Image
                src={exp1.image}
                alt={exp1.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E6D8C2] font-semibold">
                  {exp1.badge}
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-bold">{exp1.title}</p>
              </div>
            </div>

            <div className="md:col-span-5 md:pl-6 lg:pl-10 space-y-6">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                {exp1.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3E2F24] font-bold">
                {exp1.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
                {exp1.description}
              </p>

              <ul className="space-y-3 pt-2">
                {exp1.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[#3E2F24] text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#C99A4A]/15 border border-[#C99A4A]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C99A4A]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C99A4A] hover:text-[#9B7028] font-semibold border-b border-[#C99A4A] pb-1 transition-colors"
                >
                  Plan An Event With Us →
                </a>
              </div>
            </div>
          </div>

          {/* Experience 2: Nightlife & Wellness */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-5 md:pr-6 lg:pr-10 space-y-6 order-2 md:order-1">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
                {exp2.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3E2F24] font-bold">
                {exp2.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#6B5540] leading-relaxed font-light">
                {exp2.description}
              </p>

              <ul className="space-y-3 pt-2">
                {exp2.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[#3E2F24] text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#C99A4A]/15 border border-[#C99A4A]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C99A4A]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C99A4A] hover:text-[#9B7028] font-semibold border-b border-[#C99A4A] pb-1 transition-colors"
                >
                  Join The Weekend Vibe →
                </a>
              </div>
            </div>

            <div className="md:col-span-7 relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#D8C6A8] group order-1 md:order-2">
              <Image
                src={exp2.image}
                alt={exp2.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F24]/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E6D8C2] font-semibold">
                  {exp2.badge}
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-bold">{exp2.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

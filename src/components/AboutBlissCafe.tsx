import Image from "next/image";
import { Utensils, Music, Waves, Users } from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function AboutBlissCafe() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#121411] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
              <Utensils className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
                The Experience
              </span>
            </div>

            <h2 id="bliss-cafe" className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-medium">
              Savor the Stillness at <br />
              <span className="gold-gradient-text font-bold">Bliss Cafe</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#E5E4E2]/75 leading-relaxed font-light">
              Indulge in culinary artistry while overlooking our magnificent infinity pool.{" "}
              <strong className="text-[#f2ca50] font-medium">Bliss Cafe</strong> offers a curated
              multi-cuisine menu set against the backdrop of serene valley views, accompanied by
              ambient, soulful music that perfectly complements the golden hour.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-2">
              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">01</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-[#f2ca50]" /> Infinity Pool
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Seamlessly blending with the misty valley horizon.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">02</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#f2ca50]" /> Gourmet Dining
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Multi-cuisine delights freshly prepared by artisan chefs.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">03</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-[#f2ca50]" /> Soulful Music
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Curated soundscapes that flow as twilight descends.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-3xl text-[#f2ca50] font-bold">04</div>
                <h3 className="font-sans text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#f2ca50]" /> {RESORT_INFO.restaurantCapacity}
                </h3>
                <p className="text-xs sm:text-sm text-[#E5E4E2]/60 font-light leading-snug">
                  Intimate indoor & poolside seating for private dining.
                </p>
              </div>
            </div>

            {/* Timings Strip */}
            <div className="glass-panel p-5 rounded-xl border border-[#d4af37]/20 flex flex-wrap gap-4 items-center justify-between text-xs">
              <div>
                <span className="text-[#f2ca50] font-semibold uppercase tracking-wider block">
                  Day Outing
                </span>
                <span className="text-[#E5E4E2]/70">9:00 AM – 7:00 PM (Weekdays)</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#d4af37]/20" />
              <div>
                <span className="text-[#f2ca50] font-semibold uppercase tracking-wider block">
                  Overnight Retreat
                </span>
                <span className="text-[#E5E4E2]/70">12:00 PM – 10:00 AM / 6:00 PM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Image with Offset Frame */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 border border-[#d4af37]/25 rounded-2xl transform translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/20 group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7GE-tbuLhkRuJM8DBNWIxrHx12UPQvkMOEq5Ron8qFgWqNLw-imeXE03oKhYCkc3e5aWLyCHwe7lWJvC2-jH4Tjud791FDdbIA6TYnD-3GZ1K05W6Rs53Lc-o5QBo3DhFJw_BREzvtN83qTgBwq8n46jlIoRhz0zuDLiskCTFsM-xHhSlfLF_rWcfvMMin_xQR33Gfap_8_DVlJHe7wySKyQwWpzmg8Di64zSVfhnoZGU4UomTiauNg"
                alt="Bliss Cafe by the infinity pool at dusk at Nirva The Cottage & Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#f2ca50] font-medium">
                  Bliss Cafe Lounge
                </span>
                <p className="font-serif text-xl text-white">Twilight at the Infinity Deck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

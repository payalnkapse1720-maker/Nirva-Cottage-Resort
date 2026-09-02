import { MapPin, Navigation, Car, Train, Clock, ExternalLink } from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#121411] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
            <Navigation className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
              Destination & Access
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">
            How to Reach Nirva
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#E5E4E2]/70 max-w-xl mx-auto font-light">
            Conveniently situated in the green tranquil foothills of Badlapur East, easily accessible
            from Mumbai, Thane, Navi Mumbai, and Pune.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-[#d4af37]/20 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-bold mb-1">Resort Address</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#E5E4E2]/75 leading-relaxed font-light">
                    {RESORT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-[#f2ca50] font-semibold">
                  Approximate Travel Time
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#f2ca50]">
                      <Train className="w-3.5 h-3.5" />
                      <span className="font-semibold">Badlapur Station</span>
                    </div>
                    <p className="text-[#E5E4E2]/60">15 mins (6.5 km)</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#f2ca50]">
                      <Car className="w-3.5 h-3.5" />
                      <span className="font-semibold">Navi Mumbai / Vashi</span>
                    </div>
                    <p className="text-[#E5E4E2]/60">~55 mins drive</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#f2ca50]">
                      <Car className="w-3.5 h-3.5" />
                      <span className="font-semibold">Thane City</span>
                    </div>
                    <p className="text-[#E5E4E2]/60">~50 mins drive</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#f2ca50]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-semibold">Pune Expressway</span>
                    </div>
                    <p className="text-[#E5E4E2]/60">~2 hrs 15 mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-2">
              <a
                href={RESORT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.15em] py-3.5 rounded-lg hover:bg-gradient-to-r hover:from-[#f2ca50] hover:to-[#C5A028] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.25)] font-sans"
              >
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-auto rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-2xl relative">
            <iframe
              title="Nirva The Cottage & Resort Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.029870020163!2d73.2505505!3d19.1293026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed668c2f1ea9%3A0x88c227ad68d90471!2sKondeshwar%20Road%2C%20Badlapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725200000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#d4af37]/30 text-xs text-[#E5E4E2] pointer-events-none">
              <span className="text-[#f2ca50] font-semibold block">Nirva Resort</span>
              <span className="text-white/70">Near Dahiwali Gaon Bridge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

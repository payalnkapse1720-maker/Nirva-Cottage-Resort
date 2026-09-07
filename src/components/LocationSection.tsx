import { MapPin, Navigation, Car, Train, Clock, ExternalLink } from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#F7F3EA] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Navigation className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Destination & Access
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            How to Reach Nirva
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-xl mx-auto font-light">
            Conveniently situated in the green tranquil foothills of Badlapur East, easily accessible
            from Mumbai, Thane, Navi Mumbai, and Pune.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-[#D8C6A8] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3E2F24] font-bold mb-1">Resort Address</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B5540] leading-relaxed font-light">
                    {RESORT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Transit Distances */}
              <div className="space-y-4 pt-4 border-t border-[#D8C6A8]/40">
                <h4 className="text-xs uppercase tracking-widest text-[#C99A4A] font-semibold">
                  Approximate Travel Time
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#C99A4A]">
                      <Train className="w-3.5 h-3.5" />
                      <span className="font-semibold text-[#3E2F24]">Badlapur Station</span>
                    </div>
                    <p className="text-[#6B5540]">15 mins (6.5 km)</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#C99A4A]">
                      <Car className="w-3.5 h-3.5" />
                      <span className="font-semibold text-[#3E2F24]">Navi Mumbai / Vashi</span>
                    </div>
                    <p className="text-[#6B5540]">~55 mins drive</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#C99A4A]">
                      <Car className="w-3.5 h-3.5" />
                      <span className="font-semibold text-[#3E2F24]">Thane City</span>
                    </div>
                    <p className="text-[#6B5540]">~50 mins drive</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#C99A4A]">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-semibold text-[#3E2F24]">Pune Expressway</span>
                    </div>
                    <p className="text-[#6B5540]">~2 hrs 15 mins</p>
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
                className="w-full bg-[#C99A4A] text-[#2F241C] font-semibold text-xs uppercase tracking-[0.15em] py-3.5 rounded-lg hover:bg-[#b88939] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(201,154,74,0.25)] font-sans"
              >
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-auto rounded-2xl overflow-hidden border border-[#D8C6A8] shadow-2xl relative">
            <iframe
              title="Nirva The Cottage & Resort Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.029870020163!2d73.2505505!3d19.1293026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed668c2f1ea9%3A0x88c227ad68d90471!2sKondeshwar%20Road%2C%20Badlapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725200000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-[#FBF8F1]/95 backdrop-blur-md px-4 py-2 rounded-lg border border-[#D8C6A8] text-xs text-[#3E2F24] pointer-events-none shadow-md">
              <span className="text-[#C99A4A] font-semibold block">Nirva Resort</span>
              <span className="text-[#6B5540]">Near Dahiwali Gaon Bridge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

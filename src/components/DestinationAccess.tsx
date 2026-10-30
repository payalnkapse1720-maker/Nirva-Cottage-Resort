"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Car,
  Train,
  Clock,
  ExternalLink,
  Phone,
  MessageSquare,
  Mail,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Bath,
} from "lucide-react";
import {
  RESORT_INFO,
  ROOMS_DATA,
  CHECKIN_TIMINGS,
  BOOKING_POLICIES,
} from "@/data/resort-data";

export default function DestinationAccess() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    stayType: "One Night (12:00 PM – 10:00 AM)",
    guests: "2 Guests",
    roomType: "Sunset Suite",
    bathtubAddon: false,
    message: "",
  });

  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bathtubText =
      formData.roomType === "Sunset Suite" && formData.bathtubAddon
        ? "Yes (+₹500 Bathtub Add-on)"
        : formData.roomType === "Sunset Suite"
        ? "Standard (Without Bathtub)"
        : "N/A";

    const waText = `*New Booking Enquiry - Nirva The Cottage & Resort*
---------------------------------------
👤 *Guest Name:* ${formData.name || "Guest"}
📞 *Contact Phone:* ${formData.phone || "Not specified"}
📅 *Check-in:* ${formData.checkIn || "To be confirmed"}
📅 *Check-out:* ${formData.checkOut || "To be confirmed"}
🕒 *Stay Schedule / Package:* ${formData.stayType}
👥 *Number of Guests:* ${formData.guests}
🏡 *Selected Room:* ${formData.roomType}
🛁 *Bathtub Add-on:* ${bathtubText}
💬 *Special Requests:* ${formData.message || "None"}
---------------------------------------
Sent via Nirva Resort Official Website.`;

    const waUrl = `https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="access" className="py-20 sm:py-28 md:py-32 bg-[#F1E9DA] relative overflow-hidden">
      {/* Target anchors for older links */}
      <div id="location" className="absolute -top-24 left-0" />
      <div id="contact" className="absolute top-[48%] left-0" />

      {/* Background ambient lighting */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C99A4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-20 sm:space-y-28">
        {/* Main Section Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Navigation className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Destination & Access
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            How to Reach & Reserve Your Stay
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-xl mx-auto font-light leading-relaxed">
            Conveniently situated in the green tranquil foothills of Badlapur East, easily accessible from Mumbai, Thane, Navi Mumbai, and Pune.
          </p>
          <div className="w-20 h-0.5 bg-[#C99A4A] mx-auto mt-3" />
        </div>

        {/* Subcategory 1: How to Reach Nirva */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-semibold">
              Travel Routes
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E2F24] font-bold">
              How to Reach Nirva
            </h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Location Info Card */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-[#D8C6A8] flex flex-col justify-between space-y-8 bg-[#FBF8F1]">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#3E2F24] font-bold mb-1">Resort Address</h4>
                    <p className="font-sans text-xs sm:text-sm text-[#6B5540] leading-relaxed font-light">
                      {RESORT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Transit Distances */}
                <div className="space-y-4 pt-4 border-t border-[#D8C6A8]/40">
                  <span className="text-xs uppercase tracking-widest text-[#C99A4A] font-semibold block">
                    Approximate Travel Time
                  </span>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <Train className="w-3.5 h-3.5" />
                        <span className="font-semibold text-[#3E2F24]">Badlapur Station</span>
                      </div>
                      <p className="text-[#6B5540]">15 mins (4 km)</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <Car className="w-3.5 h-3.5" />
                        <span className="font-semibold text-[#3E2F24]">Navi Mumbai / Vashi</span>
                      </div>
                      <p className="text-[#6B5540]">60 mins (45 km)</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <Car className="w-3.5 h-3.5" />
                        <span className="font-semibold text-[#3E2F24]">Mumbai (CST)</span>
                      </div>
                      <p className="text-[#6B5540]">90 mins (65 km)</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8] space-y-1">
                      <div className="flex items-center gap-1.5 text-[#C99A4A]">
                        <Car className="w-3.5 h-3.5" />
                        <span className="font-semibold text-[#3E2F24]">Pune City</span>
                      </div>
                      <p className="text-[#6B5540]">2.5 hrs (110 km)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#D8C6A8]/40">
                <a
                  href={RESORT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 font-sans transition-colors shadow-md"
                >
                  <span>Open In Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D8C6A8] shadow-xl min-h-[350px] sm:min-h-[420px] relative bg-[#FBF8F1]">
              <iframe
                title="Nirva The Cottage & Resort Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.754321098765!2d73.238478!3d19.141512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f3d2f2d9e6e1%3A0x6b4c3e8e2c8a1b2c!2sNirva%20The%20Cottage%20%26%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px] sm:min-h-[420px]"
              />
            </div>
          </div>
        </div>

        {/* Subcategory 2: Reservation & Concierge */}
        <div className="space-y-12 pt-12 border-t border-[#D8C6A8]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Timings & Direct Channels */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
                    Reservations & Concierge
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
                  Plan Your Escape
                </h3>

                <p className="font-sans text-base sm:text-lg text-[#3E2F24] leading-relaxed font-normal">
                  Connect with our concierge to book your cottage, sunset suite with optional bathtub,
                  spacious villa retreat, or curated food package.
                </p>
              </div>

              {/* Official Stay Schedules */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FBF8F1] border border-[#D8C6A8] space-y-2.5 sm:space-y-3 shadow-sm">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C99A4A] font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Official Stay Schedules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                  {CHECKIN_TIMINGS.map((t) => (
                    <div key={t.badge} className="p-2.5 sm:p-3 rounded-xl bg-[#F7F3EA] border border-[#D8C6A8]">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C99A4A] font-bold block">
                        {t.badge}
                      </span>
                      <span className="font-serif text-sm font-bold text-[#3E2F24] block mt-0.5">
                        {t.display}
                      </span>
                      <span className="text-[10px] text-[#3E2F24] block mt-0.5 sm:mt-1 font-medium leading-snug">
                        {t.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8]">
                  <div className="w-10 h-10 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#3E2F24] font-bold">Call Concierge</h5>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-[#6B5540]">
                      <a href={`tel:${RESORT_INFO.phonePrimaryRaw}`} className="hover:text-[#C99A4A] font-medium">
                        {RESORT_INFO.phonePrimary} (Primary)
                      </a>
                      <a href={`tel:${RESORT_INFO.phoneSecondaryRaw}`} className="hover:text-[#C99A4A]">
                        {RESORT_INFO.phoneSecondary} (Secondary)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8]">
                  <div className="w-10 h-10 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#3E2F24] font-bold">Email Us</h5>
                    <a href={`mailto:${RESORT_INFO.email}`} className="text-xs text-[#6B5540] hover:text-[#C99A4A] block mt-0.5">
                      {RESORT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Resort Booking Policies Accordion */}
              <div className="border border-[#D8C6A8] rounded-xl bg-[#FBF8F1] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setPoliciesOpen(!policiesOpen)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left text-xs uppercase tracking-wider text-[#3E2F24] font-semibold hover:bg-[#F7F3EA] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C99A4A]" />
                    Resort Policies & Guidelines
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#C99A4A] transition-transform duration-300 ${policiesOpen ? "rotate-180" : ""}`} />
                </button>
                {policiesOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#D8C6A8]/40 space-y-2.5 text-xs text-[#6B5540] leading-relaxed">
                    {BOOKING_POLICIES.map((policy) => (
                      <div key={policy.title} className="flex items-start gap-2">
                        <span className="text-[#C99A4A] font-bold mt-0.5">•</span>
                        <p>
                          <strong className="text-[#3E2F24] font-semibold">{policy.title}: </strong>
                          <span>{policy.rule}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: WhatsApp Direct Booking Form */}
            <div className="bg-[#FBF8F1] p-6 sm:p-8 rounded-2xl border border-[#D8C6A8] shadow-xl relative">
              <h4 className="font-serif text-xl sm:text-2xl text-[#3E2F24] font-bold mb-2">
                Direct Booking Inquiry
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#6B5540] mb-6 font-light">
                Fill in your preferences below. Submitting will open WhatsApp with your customized booking details pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Check-in Date</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Check-out Date</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Stay Schedule / Package</label>
                    <select
                      value={formData.stayType}
                      onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    >
                      <option>One Night (12:00 PM – 10:00 AM)</option>
                      <option>Evening Stay (06:00 PM – 04:00 PM)</option>
                      <option>Day Outing (09:00 AM – 07:00 PM)</option>
                      <option>Stay + Food Package (One Night ₹2,200/p)</option>
                      <option>Stay + Food Package (Day Outing ₹1,500/p)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Number of Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                    >
                      <option>2 Guests</option>
                      <option>3 to 4 Guests</option>
                      <option>5 to 6 Guests</option>
                      <option>7 to 10 Guests</option>
                      <option>More than 10 Guests (Group / Event)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Select Accommodation Category</label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} — {r.nightPriceDisplay}/night ({r.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sunset Suite Bathtub Add-on */}
                {formData.roomType === "Sunset Suite" && (
                  <div className="p-3 rounded-xl bg-[#F7F3EA] border border-[#C99A4A]/50 flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3E2F24] font-medium">
                      <input
                        type="checkbox"
                        checked={formData.bathtubAddon}
                        onChange={(e) => setFormData({ ...formData, bathtubAddon: e.target.checked })}
                        className="rounded border-[#D8C6A8] text-[#C99A4A] focus:ring-[#C99A4A]"
                      />
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-[#C99A4A]" /> Include Sunset Suite Bathtub
                      </span>
                    </label>
                    <span className="text-[11px] font-bold text-[#C99A4A]">+₹500 / night</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-[#6B5540] font-semibold">Special Notes or Food Preferences</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Anniversary celebration, pure veg food, early check-in enquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C6A8] bg-[#F7F3EA] text-[#3E2F24] text-xs font-sans focus:outline-none focus:border-[#C99A4A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 font-sans transition-all duration-200 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry On WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-[#6B5540] flex items-center justify-center gap-1 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A4A]" />
                    WhatsApp launched. Our concierge will respond shortly!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

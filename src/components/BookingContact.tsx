"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronDown,
  Bath,
} from "lucide-react";
import { RESORT_INFO, ROOMS_DATA, CHECKIN_TIMINGS, BOOKING_POLICIES } from "@/data/resort-data";

export default function BookingContact() {
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

    // Construct structured WhatsApp message
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

    // Open WhatsApp
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#161616] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Information, Timings & Direct Channels */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-b border-[#f2ca50] pb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f2ca50] font-semibold font-sans">
                Reservations & Concierge
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium">
              Plan Your Escape
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#E5E4E2]/75 leading-relaxed font-light">
              Connect with our concierge to book your cottage, sunset suite with optional bathtub,
              spacious villa retreat, or curated food package.
            </p>

            {/* Official Check-in/Check-out Timings Strip */}
            <div className="p-5 rounded-2xl bg-[#121411] border border-[#d4af37]/25 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#f2ca50] font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" /> Official Stay Schedules
              </span>
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                {CHECKIN_TIMINGS.map((t) => (
                  <div key={t.badge} className="p-3 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-[#f2ca50] font-bold block">
                      {t.badge}
                    </span>
                    <span className="font-serif text-sm font-bold text-white block mt-0.5">
                      {t.display}
                    </span>
                    <span className="text-[10px] text-[#E5E4E2]/60 block mt-1 font-light leading-snug">
                      {t.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-0.5">
                    Resort Location
                  </h4>
                  <a
                    href={RESORT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs sm:text-sm text-[#E5E4E2]/75 hover:text-[#f2ca50] transition-colors leading-relaxed font-light block"
                  >
                    {RESORT_INFO.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-0.5">
                    WhatsApp Reservations (Instant Reply)
                  </h4>
                  <a
                    href={`https://wa.me/${RESORT_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white hover:text-[#f2ca50] transition-colors font-medium"
                  >
                    {RESORT_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-0.5">
                    Direct Reception Lines
                  </h4>
                  <p className="font-sans text-sm text-white space-x-2">
                    <a
                      href={`tel:${RESORT_INFO.phonePrimaryRaw}`}
                      className="hover:text-[#f2ca50] transition-colors font-medium"
                    >
                      {RESORT_INFO.phonePrimary}
                    </a>
                    <span className="text-white/40">/</span>
                    <a
                      href={`tel:${RESORT_INFO.phoneSecondaryRaw}`}
                      className="hover:text-[#f2ca50] transition-colors font-medium"
                    >
                      {RESORT_INFO.phoneSecondary}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-0.5">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${RESORT_INFO.email}`}
                    className="font-sans text-xs sm:text-sm text-[#E5E4E2]/85 hover:text-[#f2ca50] transition-colors"
                  >
                    {RESORT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-[#d4af37]/25 shadow-2xl relative">
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Book Your Experience
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#E5E4E2]/70 mb-8 font-light">
              Submit details below to generate your personalized booking enquiry via WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#121411] border border-[#f2ca50]/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#f2ca50] mx-auto" />
                <h4 className="font-serif text-xl text-white font-bold">Enquiry Prepared!</h4>
                <p className="text-xs text-[#E5E4E2]/75 leading-relaxed">
                  WhatsApp has opened in a new tab with your pre-filled reservation details. Our
                  concierge will confirm your booking immediately.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider text-[#f2ca50] border-b border-[#f2ca50] pb-0.5 pt-2 cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Guest Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors placeholder:text-white/25"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors placeholder:text-white/25"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Stay Type & Guests */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Stay Schedule / Package
                    </label>
                    <select
                      value={formData.stayType}
                      onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                      className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                    >
                      <option>One Night (12:00 PM – 10:00 AM)</option>
                      <option>Evening Stay (6:00 PM – 4:00 PM)</option>
                      <option>Day Outing (9:00 AM – 7:00 PM)</option>
                      <option>Stay With Food Package (One Night - ₹2,800/person)</option>
                      <option>Stay With Food Package (One Day - ₹1,900/person)</option>
                      <option>Wedding & Event Celebration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                    >
                      <option>1-2 Guests</option>
                      <option>3-5 Guests</option>
                      <option>6-7 Guests</option>
                      <option>8-10 Guests</option>
                      <option>11-12 Guests (Villa)</option>
                      <option>12+ Guests (Large Group/Event)</option>
                    </select>
                  </div>
                </div>

                {/* Room Preference (Official 7 Categories Only) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                    Room Preference (7 Categories)
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.capacity} • {r.nightPriceDisplay}/night)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sunset Suite Bathtub Add-on Checkbox */}
                {formData.roomType === "Sunset Suite" && (
                  <div className="p-3.5 rounded-xl bg-[#1f201d] border border-[#f2ca50]/30 flex items-center justify-between">
                    <label
                      htmlFor="bathtub-addon"
                      className="flex items-center gap-2.5 cursor-pointer text-xs text-white"
                    >
                      <input
                        type="checkbox"
                        id="bathtub-addon"
                        checked={formData.bathtubAddon}
                        onChange={(e) =>
                          setFormData({ ...formData, bathtubAddon: e.target.checked })
                        }
                        className="rounded border-[#d4af37]/40 bg-black text-[#f2ca50] focus:ring-[#f2ca50] w-4 h-4 cursor-pointer"
                      />
                      <span className="flex items-center gap-1.5 font-medium">
                        <Bath className="w-3.5 h-3.5 text-[#f2ca50]" /> Bathtub Suite Add-on
                      </span>
                    </label>
                    <span className="text-xs font-serif font-bold text-[#f2ca50]">+₹500</span>
                  </div>
                )}

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                    Special Requests / Event Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Occasion (anniversary, birthday, pool party, dining preference)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-1.5 text-sm transition-colors resize-none placeholder:text-white/25"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.18em] py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-[#f2ca50] hover:to-[#C5A028] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(242,202,80,0.3)] mt-4 font-sans cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Booking Request via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Official Booking & Reservation Policies Compact Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121411] border border-[#d4af37]/25 space-y-4">
          <div
            onClick={() => setPoliciesOpen(!policiesOpen)}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#f2ca50]" />
              <h3 className="font-serif text-lg sm:text-xl text-white font-bold group-hover:text-[#f2ca50] transition-colors">
                Official Reservation Policies & Guidelines
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#f2ca50] font-sans uppercase tracking-wider">
              <span>{policiesOpen ? "Hide" : "View Policies"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  policiesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {policiesOpen && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
              {BOOKING_POLICIES.map((p) => (
                <div key={p.title} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <h4 className="font-sans font-semibold text-[#f2ca50] uppercase tracking-wider text-[11px]">
                    {p.title}
                  </h4>
                  <p className="text-[#E5E4E2]/75 font-light leading-relaxed">{p.rule}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


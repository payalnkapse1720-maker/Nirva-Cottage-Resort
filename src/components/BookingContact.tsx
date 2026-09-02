"use client";

import { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { RESORT_INFO } from "@/data/resort-data";

export default function BookingContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    stayType: "Overnight Stay (12:00 PM – 10:00 AM)",
    guests: "1-2 Guests",
    roomType: "Sunset Suite Rooms",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp message
    const waText = `*New Booking Enquiry - Nirva The Cottage & Resort*
---------------------------------------
👤 *Guest Name:* ${formData.name || "Guest"}
📞 *Contact Phone:* ${formData.phone || "Not specified"}
📅 *Check-in:* ${formData.checkIn || "To be confirmed"}
📅 *Check-out:* ${formData.checkOut || "To be confirmed"}
🕒 *Stay Type:* ${formData.stayType}
👥 *Number of Guests:* ${formData.guests}
🏡 *Selected Room:* ${formData.roomType}
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

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Information & Direct Channels */}
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
              Connect with our concierge to tailor your perfect staycation, poolside party, private
              villa retreat, or grand wedding celebration.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-1">
                    Resort Location
                  </h4>
                  <p className="font-sans text-sm text-[#E5E4E2]/75 leading-relaxed font-light">
                    {RESORT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-1">
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
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-1">
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
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] font-semibold mb-1">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${RESORT_INFO.email}`}
                    className="font-sans text-sm text-[#E5E4E2]/85 hover:text-[#f2ca50] transition-colors"
                  >
                    {RESORT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Check-in/Check-out info badge */}
            <div className="p-4 rounded-xl bg-black/40 border border-[#d4af37]/20 text-xs text-[#E5E4E2]/75 space-y-1">
              <span className="text-[#f2ca50] font-semibold uppercase tracking-wider block">
                Flexible Check-In Options:
              </span>
              <p>• Day Outing (Weekdays): 9:00 AM – 7:00 PM</p>
              <p>• Leisure Night Stay: 12:00 PM – 10:00 AM</p>
              <p>• Late Evening Stay: 6:00 PM – 4:00 PM</p>
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
                  className="text-xs uppercase tracking-wider text-[#f2ca50] border-b border-[#f2ca50] pb-0.5 pt-2"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2.5 text-sm transition-colors placeholder:text-white/25"
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
                      className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2.5 text-sm transition-colors placeholder:text-white/25"
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

                {/* Package & Guests */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                      Stay Package
                    </label>
                    <select
                      value={formData.stayType}
                      onChange={(e) => setFormData({ ...formData, stayType: e.target.value })}
                      className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2.5 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                    >
                      <option>Day Outing (9:00 AM – 7:00 PM)</option>
                      <option>Overnight Stay (12:00 PM – 10:00 AM)</option>
                      <option>Overnight Stay (6:00 PM – 4:00 PM)</option>
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
                      className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2.5 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                    >
                      <option>1-2 Guests</option>
                      <option>3-4 Guests</option>
                      <option>5-10 Guests</option>
                      <option>10+ Guests (Group/Event)</option>
                    </select>
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                    Room Preference
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full bg-[#161616] border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2.5 text-sm transition-colors cursor-pointer [&>option]:bg-[#161616]"
                  >
                    <option>Sunset Suite Rooms</option>
                    <option>Sunset Suite with Bathtub</option>
                    <option>Single Colourful Cottages</option>
                    <option>3BHK Luxury Villa</option>
                    <option>Duplex Cottage</option>
                    <option>Bunked Bed Cottage</option>
                    <option>Suite Cottages</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E5E4E2]/70 mb-2">
                    Special Requests / Event Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about special occasions (anniversary, birthday, pool party, dining preference)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#d4af37]/30 focus:border-[#f2ca50] focus:ring-0 text-white font-sans px-0 py-2 text-sm transition-colors resize-none placeholder:text-white/25"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#f2ca50] text-[#121411] font-semibold text-xs uppercase tracking-[0.18em] py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#f2ca50] hover:to-[#C5A028] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(242,202,80,0.3)] mt-6 font-sans cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Booking Request via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

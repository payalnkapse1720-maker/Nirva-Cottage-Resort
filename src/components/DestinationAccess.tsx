"use client";

import { useState } from "react";
import {
  Phone,
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

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Main Section Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 border-b border-[#C99A4A] pb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C99A4A] font-semibold font-sans">
              Reservations & Concierge
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3E2F24] font-medium">
            Plan Your Escape
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B5540] max-w-xl mx-auto font-light leading-relaxed">
            Connect with our concierge to book your cottage, sunset suite with optional bathtub,
            spacious villa retreat, or curated food package.
          </p>
          <div className="w-20 h-0.5 bg-[#C99A4A] mx-auto mt-3" />
        </div>

        {/* Reservation & Concierge Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Policies */}
          <div className="space-y-4 sm:space-y-5">

              {/* Direct Contact Cards & Policies Stack - tightened spacing across all layouts */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#3E2F24] font-bold">Call Concierge</h5>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5 text-xs text-[#6B5540]">
                      <a href={`tel:${RESORT_INFO.phonePrimaryRaw}`} className="hover:text-[#C99A4A] font-medium">
                        {RESORT_INFO.phonePrimary} (Primary)
                      </a>
                      <a href={`tel:${RESORT_INFO.phoneSecondaryRaw}`} className="hover:text-[#C99A4A]">
                        {RESORT_INFO.phoneSecondary} (Secondary)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#FBF8F1] border border-[#D8C6A8] shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#F1E9DA] border border-[#D8C6A8] flex items-center justify-center text-[#C99A4A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm text-[#3E2F24] font-bold">Email Us</h5>
                    <a href={`mailto:${RESORT_INFO.email}`} className="text-xs text-[#6B5540] hover:text-[#C99A4A] block mt-0.5">
                      {RESORT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Resort Booking Policies Accordion */}
                <div className="border border-[#D8C6A8] rounded-xl bg-[#FBF8F1] overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setPoliciesOpen(!policiesOpen)}
                    className="w-full px-4 py-3 sm:py-3.5 flex items-center justify-between text-left text-xs uppercase tracking-wider text-[#3E2F24] font-semibold hover:bg-[#F7F3EA] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C99A4A]" />
                      Resort Policies & Guidelines
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#C99A4A] transition-transform duration-300 ${policiesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {policiesOpen && (
                    <div className="px-4 pb-4 pt-2 border-t border-[#D8C6A8]/40 space-y-2 text-xs text-[#6B5540] leading-relaxed">
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
                      <option>Stay + Food Package (Day Outing ₹1,900/p)</option>
                      <option>Stay + Food Package (One Night ₹2,800/p)</option>
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
                    <span className="text-[11px] font-bold text-[#C99A4A]">+₹500 (Day / Night)</span>
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
      </section>
    );
  }

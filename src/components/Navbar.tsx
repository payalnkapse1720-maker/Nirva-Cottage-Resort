"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RESORT_INFO } from "@/data/resort-data";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("experiences");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav links matching the exact screenshot
  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Stay", href: "#stay", id: "stay" },
    { label: "Experiences", href: "#experiences", id: "experiences" },
    { label: "Trails", href: "#trails", id: "trails" },
    { label: "Amenities", href: "#amenities", id: "amenities" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Pill Header Container */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1240px] z-50 transition-all duration-300">
        <div className="w-full rounded-full bg-[#FBF8F1]/92 backdrop-blur-xl border border-[#D8C6A8] shadow-[0_10px_35px_-5px_rgba(62,47,36,0.12)] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Nirva The Cottage & Resort Home"
          >
            {/* Circular Gold Badge Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C99A4A]/80 p-0.5 bg-[#FBF8F1] overflow-hidden shrink-0 shadow-[0_0_15px_rgba(201,154,74,0.2)] flex items-center justify-center">
              <Image
                src="/nirva-emblem.png"
                alt="Nirva The Cottage & Resort Emblem"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>

            {/* Brand Names (Dark Brown Serif + Tracked Subtitle) */}
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3E2F24] leading-none">
                Nirva
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#6B5540] font-sans font-medium mt-1">
                THE COTTAGE & RESORT
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className="flex flex-col items-center py-1 group transition-colors"
                >
                  <span
                    className={`text-[13px] font-sans transition-colors duration-200 ${
                      isActive ? "text-[#3E2F24] font-semibold" : "text-[#6B5540] hover:text-[#3E2F24] font-normal"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Active gold underline bar */}
                  <span
                    className={`h-[2px] bg-[#C99A4A] rounded-full transition-all duration-300 mt-1 ${
                      isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Call Us Button */}
            <a
              href={`tel:${RESORT_INFO.phonePrimaryRaw}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#D8C6A8] bg-[#F7F3EA] hover:border-[#C99A4A] hover:text-[#C99A4A] px-4 py-2 text-[#3E2F24] text-xs font-sans transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#6B5540]" />
              <span>Call Us</span>
            </a>

            {/* Book Now Button */}
            <a
              href="#contact"
              className="rounded-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] font-semibold text-xs font-sans px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(201,154,74,0.3)] transition-all duration-200 shrink-0"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Circular Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F7F3EA] border border-[#D8C6A8] hover:border-[#C99A4A] flex items-center justify-center text-[#3E2F24] transition-colors cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide/Fade Drawer for Hamburger Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F7F3EA]/98 backdrop-blur-2xl flex flex-col pt-28 px-6 pb-8 animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-md mx-auto flex flex-col h-full justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Brand Header */}
            <div className="flex flex-col items-center justify-center text-center pt-2 pb-2">
              <div className="relative w-20 h-20 mb-2">
                <Image
                  src="/nirva-logo-tight.png"
                  alt="Nirva The Cottage & Resort"
                  fill
                  sizes="80px"
                  className="object-contain drop-shadow-[0_4px_15px_rgba(201,154,74,0.25)]"
                />
              </div>
            </div>

            <nav className="flex flex-col space-y-3 my-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-serif text-2xl py-2.5 border-b border-[#D8C6A8]/50 transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? "text-[#C99A4A] font-bold"
                      : "text-[#3E2F24] hover:text-[#C99A4A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#C99A4A]" />
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#D8C6A8] space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#C99A4A] text-[#2F241C] font-semibold text-center text-xs uppercase tracking-widest py-3.5 rounded-full block font-sans shadow-lg"
              >
                Book Your Stay
              </a>
              <div className="flex gap-3">
                <a
                  href={`tel:${RESORT_INFO.phonePrimaryRaw}`}
                  className="flex-1 rounded-full border border-[#D8C6A8] text-[#3E2F24] py-2.5 flex items-center justify-center gap-2 text-xs font-sans hover:border-[#C99A4A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C99A4A]" /> Call Reception
                </a>
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Nirva Resort, I would like to enquire about room availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-[#D8C6A8] text-[#3E2F24] py-2.5 flex items-center justify-center gap-2 text-xs font-sans hover:border-[#C99A4A] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

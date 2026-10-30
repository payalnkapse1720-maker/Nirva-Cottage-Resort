"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RESORT_INFO } from "@/data/resort-data";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nav links matching the client's 6-section homepage structure
  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Stay", href: "#stay", id: "stay" },
    { label: "Dining", href: "#dining", id: "dining" },
    { label: "Escapes", href: "#escapes", id: "escapes" },
    { label: "Features", href: "#features", id: "features" },
    { label: "Access", href: "#access", id: "access" },
  ];

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      let currentSection = "";
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Floating Pill Header Container */}
      <header className="fixed top-2.5 min-[360px]:top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] min-[360px]:w-[calc(100%-1.25rem)] sm:w-[94%] lg:w-[95%] max-w-[1240px] z-50 transition-all duration-300">
        <div className="w-full rounded-full bg-[#FBF8F1]/92 backdrop-blur-xl border border-[#D8C6A8] shadow-[0_10px_35px_-5px_rgba(62,47,36,0.12)] px-2.5 min-[360px]:px-3 min-[400px]:px-4 sm:px-6 py-1.5 min-[360px]:py-2 sm:py-2.5 md:py-3 flex items-center justify-between gap-1.5 min-[360px]:gap-2 sm:gap-4">
          {/* Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 shrink-0 group transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Nirva The Cottage & Resort Home"
          >
            {/* Gold Emblem Logo */}
            <div className="relative w-[34px] h-[34px] min-[360px]:w-9 min-[360px]:h-9 min-[420px]:w-10 min-[420px]:h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
              <Image
                src="/nirva-emblem.png"
                alt="Nirva The Cottage & Resort Emblem"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain"
                priority
              />
            </div>

            {/* Brand Names (Dark Brown Serif + Tracked Subtitle) */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-[17px] min-[360px]:text-lg min-[420px]:text-xl sm:text-2xl font-bold tracking-tight text-[#3E2F24] leading-none">
                Nirva
              </span>
              <span className="text-[6.5px] min-[340px]:text-[7px] min-[380px]:text-[8px] sm:text-[9px] uppercase tracking-[0.14em] min-[360px]:tracking-[0.18em] sm:tracking-[0.22em] text-[#6B5540] font-sans font-medium mt-0.5 sm:mt-1 whitespace-nowrap">
                THE COTTAGE & RESORT
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-8">
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
                    className={`text-xs xl:text-[13px] font-sans transition-colors duration-200 whitespace-nowrap ${
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
          <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 shrink-0">
            {/* Call Us Button */}
            <a
              href={`tel:${RESORT_INFO.phonePrimaryRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#D8C6A8] bg-[#F7F3EA] hover:border-[#C99A4A] hover:text-[#C99A4A] px-3 sm:px-4 py-1.5 sm:py-2 text-[#3E2F24] text-xs font-sans transition-all duration-200 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#6B5540]" />
              <span>Call Us</span>
            </a>

            {/* Book Now Button */}
            <a
              href="#contact"
              className="h-[34px] min-[360px]:h-9 sm:h-auto rounded-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] font-semibold text-[11px] min-[360px]:text-xs font-sans px-2.5 min-[360px]:px-3.5 sm:px-5 py-1.5 min-[360px]:py-2 sm:py-2.5 flex items-center justify-center gap-1 min-[360px]:gap-1.5 shadow-[0_4px_20px_rgba(201,154,74,0.3)] transition-all duration-200 shrink-0 whitespace-nowrap"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 stroke-[2.5]" />
            </a>

            {/* Circular Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[34px] h-[34px] min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-full bg-[#F7F3EA] border border-[#D8C6A8] hover:border-[#C99A4A] flex items-center justify-center text-[#3E2F24] transition-colors cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4" />
              ) : (
                <Menu className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide/Fade Drawer for Hamburger Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F7F3EA]/98 backdrop-blur-2xl flex flex-col pt-24 sm:pt-28 px-5 sm:px-6 pb-6 sm:pb-8 overflow-y-auto animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-md mx-auto flex flex-col min-h-full justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Brand Header */}
            <div className="flex flex-col items-center justify-center text-center pt-2 pb-2">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
                <Image
                  src="/nirva-logo-tight.png"
                  alt="Nirva The Cottage & Resort"
                  fill
                  sizes="80px"
                  className="object-contain drop-shadow-[0_4px_15px_rgba(201,154,74,0.25)]"
                />
              </div>
            </div>

            <nav className="flex flex-col space-y-2 sm:space-y-3 my-auto py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-serif text-xl sm:text-2xl py-2 sm:py-2.5 border-b border-[#D8C6A8]/50 transition-colors flex items-center justify-between ${
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

            <div className="pt-4 sm:pt-6 border-t border-[#D8C6A8] space-y-2.5 sm:space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#C99A4A] hover:bg-[#b88939] text-[#2F241C] font-semibold text-center text-xs uppercase tracking-widest py-3 sm:py-3.5 rounded-full block font-sans shadow-lg transition-colors"
              >
                Book Your Stay
              </a>
              <div className="flex gap-2.5 sm:gap-3">
                <a
                  href={`tel:${RESORT_INFO.phonePrimaryRaw}`}
                  className="flex-1 rounded-full border border-[#D8C6A8] text-[#3E2F24] py-2 sm:py-2.5 flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-sans hover:border-[#C99A4A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C99A4A]" /> Call Reception
                </a>
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Nirva Resort, I would like to enquire about room availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-[#D8C6A8] text-[#3E2F24] py-2 sm:py-2.5 flex items-center justify-center gap-1.5 sm:gap-2 text-xs font-sans hover:border-[#C99A4A] transition-colors"
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

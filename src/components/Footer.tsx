import Image from "next/image";
import { RESORT_INFO } from "@/data/resort-data";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090a08] border-t border-[#d4af37]/20 pt-20 pb-12 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/40 bg-[#121411]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt5mI_5NjwB85kPAZk7Rt124ayWp0RWp8-JSAAm1XsYXvG0fN-0uLUp0szxvQC6jxWLH_tkOpKEyGGMS_DR9QFFb3cgNiW__RMSLw9kAxRKVtXDro6T8z35jVZ2fzXmkrXr3MR0FMUYhqlPL0_ajz3cZHwYTnXO26SLA59O6xPUHs9pLvXoA4XPKv4oj21PuMNgHcOxwudjkKK8t6rn6lY4NCwe-p6-g67Q7USJhNAkUdLefMByl3D_g"
                  alt="Nirva Resort Emblem"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-[#f2ca50]">
                {RESORT_INFO.shortName}
              </span>
            </div>
            <p className="font-sans text-xs text-[#E5E4E2]/70 leading-relaxed font-light">
              An intimate sanctuary nestled amidst the rolling foothills of Badlapur East. Where quiet
              luxury, infinity pool vistas, and boutique warmth create lifelong memories.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESORT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] hover:bg-[#f2ca50] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={RESORT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] hover:bg-[#f2ca50] hover:text-black transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center text-[#f2ca50] hover:bg-[#f2ca50] hover:text-black transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-base text-white font-semibold tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E5E4E2]/70 font-sans">
              <li>
                <a href="#about" className="hover:text-[#f2ca50] transition-colors">
                  About the Resort
                </a>
              </li>
              <li>
                <a href="#stay" className="hover:text-[#f2ca50] transition-colors">
                  Rooms, Cottages & Villas
                </a>
              </li>
              <li>
                <a href="#bliss-cafe" className="hover:text-[#f2ca50] transition-colors">
                  Bliss Cafe Dining
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#f2ca50] transition-colors">
                  Weddings & Events
                </a>
              </li>
              <li>
                <a href="#trails" className="hover:text-[#f2ca50] transition-colors">
                  Adventures & Trails
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f2ca50] transition-colors">
                  Visual Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Accommodation Types */}
          <div className="space-y-4">
            <h4 className="font-serif text-base text-white font-semibold tracking-wide">
              Stay Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E4E2]/70 font-sans">
              <li>Sunset Suite Rooms</li>
              <li>Sunset Suite with Bathtub</li>
              <li>Single Colourful Cottages</li>
              <li>3BHK Luxury Villa</li>
              <li>Duplex Cottage</li>
              <li>Bunked Bed Cottage</li>
              <li>Suite Cottages</li>
            </ul>
          </div>

          {/* Col 4: Contact Recap */}
          <div className="space-y-4">
            <h4 className="font-serif text-base text-white font-semibold tracking-wide">
              Concierge Desk
            </h4>
            <div className="space-y-3 text-xs text-[#E5E4E2]/75 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                <span>Near Dahiwali Gaon Bridge, Kondeshwar Road, Badlapur East</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <a href={`tel:${RESORT_INFO.phonePrimaryRaw}`} className="hover:text-[#f2ca50]">
                  {RESORT_INFO.phonePrimary} / {RESORT_INFO.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#f2ca50]">
                  {RESORT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E4E2]/50 font-sans text-center sm:text-left">
          <p>© {new Date().getFullYear()} Nirva The Cottage & Resort. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#f2ca50] transition-colors">
              Privacy Policy
            </a>
            <a href="#stay" className="hover:text-[#f2ca50] transition-colors">
              Terms & Conditions
            </a>
            <a href="#contact" className="hover:text-[#f2ca50] transition-colors">
              Enquire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

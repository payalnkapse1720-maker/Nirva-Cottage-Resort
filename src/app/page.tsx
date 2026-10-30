import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Accommodations from "@/components/Accommodations";
import DiningCafe from "@/components/DiningCafe";
import CuratedEscapes from "@/components/CuratedEscapes";
import ResortFeatures from "@/components/ResortFeatures";
import DestinationAccess from "@/components/DestinationAccess";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F3EA] text-[#3E2F24] selection:bg-[#C99A4A]/25 selection:text-[#3E2F24] overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Showcase */}
      <Hero />

      {/* 1. Introduction / About */}
      <AboutIntro />

      {/* 2. Accommodations – Sanctuaries of Comfort (Includes Rooms & Curated Packages) */}
      <Accommodations />

      {/* 3. Café & Restaurant (Bliss Cafe Dining Experience & Daily Schedule) */}
      <DiningCafe />

      {/* 4. Curated Escapes (Weddings, Nightlife & Nature Trails) */}
      <CuratedEscapes />

      {/* 5. Resort Features (Amenities & Visual Moments Gallery) */}
      <ResortFeatures />

      {/* 6. Destination & Access (How to Reach Nirva & Reservations Concierge) */}
      <DestinationAccess />

      {/* Resort Footer */}
      <Footer />

      {/* Sticky Quick-Book WhatsApp Action */}
      <FloatingWhatsApp />
    </main>
  );
}

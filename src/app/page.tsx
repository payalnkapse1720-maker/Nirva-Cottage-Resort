import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBlissCafe from "@/components/AboutBlissCafe";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import AdventuresTrails from "@/components/AdventuresTrails";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7F3EA] text-[#3E2F24] selection:bg-[#C99A4A]/25 selection:text-[#3E2F24] overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Showcase */}
      <Hero />

      {/* About & Bliss Cafe Dining Overlooking Infinity Pool */}
      <AboutBlissCafe />

      {/* Accommodations Bento Grid (Sunset Suites, Villas, Cottages) */}
      <Accommodations />

      {/* Curated Experiences (Weddings, Pool Parties, Celebrations) */}
      <Experiences />

      {/* Adventures & Trails (Kondeshwar Falls & Sunset Ridge) */}
      <AdventuresTrails />

      {/* Amenities & Privileges Grid */}
      <AmenitiesGrid />

      {/* Visual Journey / Filterable Gallery */}
      <GallerySection />

      {/* Location, Distances & Google Maps */}
      <LocationSection />

      {/* Reservation & Direct WhatsApp Booking Form */}
      <BookingContact />

      {/* Resort Footer */}
      <Footer />

      {/* Sticky Quick-Book WhatsApp Action */}
      <FloatingWhatsApp />
    </main>
  );
}

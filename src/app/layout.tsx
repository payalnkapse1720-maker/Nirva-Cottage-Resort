import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { RESORT_INFO } from "@/data/resort-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#121411",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${RESORT_INFO.name} | Luxury Boutique Sanctuary in Badlapur`,
  description: `${RESORT_INFO.tagline} — Nestled near Kondeshwar Road, Badlapur East. Featuring a magnificent infinity pool overlooking lush valley vistas, Bliss Cafe multi-cuisine dining, luxury sunset suites with bathtubs, private villas, and wedding venues.`,
  keywords: [
    "Nirva Resort",
    "Nirva The Cottage and Resort",
    "Resort in Badlapur",
    "Infinity Pool Resort near Mumbai",
    "Kondeshwar Road Resort",
    "Luxury Resort Pune Mumbai",
    "Bliss Cafe Badlapur",
    "Weekend Staycation Badlapur",
    "Cottage with Bathtub Mumbai",
    "Destination Wedding Venue Badlapur",
  ],
  authors: [{ name: RESORT_INFO.name }],
  openGraph: {
    title: `${RESORT_INFO.name} | Luxury Boutique Sanctuary`,
    description: RESORT_INFO.subtagline,
    url: "https://nirvaresort.com",
    siteName: RESORT_INFO.name,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTxvJb4m7duXvd_HsPV_nKEjpBMlc3FrFizI5LqzxbZH8p5MHB2GTmVhVCjNJIVAgzWM20E9LOpX0zbjQBjvI5Y0CsKsVOMy18oIjDvrrG9XxrHuOJb81cePcYILYjdOqwcZ-VB53_0tTHzFHd40bGfs8wJvXTigxbPjJ4IpX68IMyAzCCjgmuoyiF45oX2tJ-6ElxF4LkKp1FLfX1Luib1Ih7nueOFjeeAEdEh11fWkqv5a7oi5tdLg",
        width: 1200,
        height: 630,
        alt: `${RESORT_INFO.name} Infinity Pool Aerial View`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-black text-[#E5E4E2] antialiased selection:bg-[#f2ca50]/30 selection:text-[#f2ca50]">
        {children}
      </body>
    </html>
  );
}

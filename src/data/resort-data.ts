export interface RoomAddOn {
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
}

export interface RoomColorVariant {
  name: string;
  colorCode?: string;
  images: string[];
}

export interface Room {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  colorVariants?: RoomColorVariant[];
  capacity: string;
  capacityNumber: number;
  dayPrice: number;
  nightPrice: number;
  dayPriceDisplay: string;
  nightPriceDisplay: string;
  weekdayDiscount: string;
  foodIncluded: boolean;
  amenities: string[];
  optionalAddOns?: RoomAddOn[];
  featured?: boolean;
}

export interface BuffetMeal {
  id: string;
  name: string;
  time: string;
  items: string[];
}

export interface FoodPackage {
  title: string;
  pricePerPerson: number;
  priceDisplay: string;
  period: string;
  note?: string;
  includes: string[];
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  badge: string;
}

export interface Trail {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "dining" | "pool" | "nature" | "events";
  categoryLabel: string;
  image: string;
  span?: string;
  aspect?: string;
}

export const RESORT_INFO = {
  name: "Nirva The Cottage & Resort",
  shortName: "Nirva",
  tagline: "Escape to Infinite Serenity",
  subtagline: "Where quiet luxury meets the breathtaking stillness of nature.",
  address: "Nirva Resort, Near Dahiwali Gaon Bridge, Kondeshwar Road, Kulgaon, Badlapur East, Maharashtra 421503",
  locationDisplay: "Kondeshwar Road, Badlapur East, Maharashtra",
  phonePrimary: "+91 7770041011",
  phonePrimaryRaw: "+917770041011",
  phoneSecondary: "+91 7770031011",
  phoneSecondaryRaw: "+917770031011",
  whatsapp: "7770041011",
  whatsappRaw: "917770041011",
  email: "nirva.thecottageresort@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/yz8dgavP9kBHSr7RA?g_st=ic",
  instagramUrl: "https://www.instagram.com/nirva_resort?igsi=MW43a3J5bWJoOHI4cQ%3D%3D&utm_source=qr",
  facebookUrl: "https://www.facebook.com/NirvaResort",
  restaurantName: "Bliss Cafe",
  restaurantCapacity: "40 Guests",
};

export const CHECKIN_TIMINGS = [
  {
    type: "One Night",
    badge: "ONE NIGHT",
    hours: "Check-in: 12:00 PM • Check-out: 10:00 AM",
    display: "12 PM → 10 AM",
    description: "Standard overnight retreat with sunset and morning valley views.",
  },
  {
    type: "Evening Stay",
    badge: "EVENING STAY",
    hours: "Check-in: 06:00 PM • Check-out: 04:00 PM",
    display: "6 PM → 4 PM",
    description: "Evening check-in ideal for after-work weekend escapes.",
  },
  {
    type: "One Day",
    badge: "DAY OUTING",
    hours: "Check-in: 09:00 AM • Check-out: 07:00 PM",
    display: "9 AM → 7 PM",
    description: "Full day leisure outing with pool access and resort grounds.",
  },
];

export const OFFICIAL_AMENITIES = [
  "AC",
  "Games",
  "Free Parking",
  "Room Service",
  "Restaurant",
  "Infinity Pool",
  "Rooftop Restaurant",
  "Wi-Fi",
];

export const ROOMS_DATA: Room[] = [
  {
    id: "single-cottage",
    name: "Single Cottage",
    category: "Cottage",
    tagline: "Vibrant standalone retreat in cheerful lilac, yellow, orange and blue hues.",
    description:
      "Experience the charm of our colourful single cottages, available in vibrant hues of yellow, orange, lilac, and blue. Each cottage is designed to provide a cosy and unique retreat.",
    image: "/images/rooms/single-cottage/blue/Blue Cottage 1.JPG",
    colorVariants: [
      {
        name: "Blue",
        colorCode: "#3B82F6",
        images: [
          "/images/rooms/single-cottage/blue/Blue Cottage 1.JPG",
          "/images/rooms/single-cottage/blue/Blue Cottage 2.JPG",
          "/images/rooms/single-cottage/blue/Blue Cottage 3.JPG",
          "/images/rooms/single-cottage/blue/Blue Cottage 4.JPG",
        ],
      },
      {
        name: "Lilac",
        colorCode: "#A855F7",
        images: [
          "/images/rooms/single-cottage/lilac/Lilac Cottage 1.JPG",
          "/images/rooms/single-cottage/lilac/Lilac Cottage 2.JPG",
          "/images/rooms/single-cottage/lilac/Lilac Cottage 3.JPG",
          "/images/rooms/single-cottage/lilac/Lilac Cottage 4.jpg",
        ],
      },
      {
        name: "Orange",
        colorCode: "#F97316",
        images: [
          "/images/rooms/single-cottage/orange/Orange Cottage 1.JPG",
          "/images/rooms/single-cottage/orange/Orange Cottage 2.JPG",
          "/images/rooms/single-cottage/orange/Orange Cottage 3.JPG",
        ],
      },
      {
        name: "Yellow",
        colorCode: "#EAB308",
        images: [
          "/images/rooms/single-cottage/yellow/Yellow Cottage 1.JPG",
          "/images/rooms/single-cottage/yellow/Yellow Cottage 2.JPG",
          "/images/rooms/single-cottage/yellow/Yellow Cottage 3.JPG",
        ],
      },
    ],
    capacity: "For 2 people",
    capacityNumber: 2,
    dayPrice: 2500,
    nightPrice: 4500,
    dayPriceDisplay: "₹2,500",
    nightPriceDisplay: "₹4,500",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
    featured: true,
  },
  {
    id: "duplex-cottage",
    name: "Duplex Cottage",
    category: "Duplex Cottage",
    tagline: "Spacious split-level comfort balancing luxury with practicality for families.",
    description:
      "Enjoy the ample space and comfort of our duplex cottage, ideal for families and groups. These well-appointed cottages provide a perfect balance of luxury and practicality.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHDMoxZrHmA_FKLP-DjEPA6iXplMT0hE7VfUfIVKPx9-28-u7aN_5HXYn63TEWA4bKHgqAK2fUpJJEM0B8iv6J_-bvZI9I4aMyGua-syP8NFopOHH9nCybKcjtKo9xOtpkLyT_hVDGEZpeDoZZtl36wyxP1rAZHJXcM9-Vl6Ityvu98i0cI2zGAYfFDxM8rssTVUPwYJrXI2xDGvf1-HB3toMbfXygedlA5mZ-cSKKnPR6bVxXt1xfX1vC",
    capacity: "For 5 people",
    capacityNumber: 5,
    dayPrice: 5000,
    nightPrice: 9000,
    dayPriceDisplay: "₹5,000",
    nightPriceDisplay: "₹9,000",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
    featured: true,
  },
  {
    id: "suite-cottage",
    name: "Suite Cottage",
    category: "Suite Cottage",
    tagline: "Step into the lap of luxury with elegant interiors and indulgent relaxation.",
    description:
      "Step into the lap of luxury with our suite cottage, designed for ultimate relaxation. Enjoy elegant interiors and premium amenities for a truly indulgent stay.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLe7cIPOgeM3xyzXaePjdIdXc6n8qQH2nm_fylm-C-riYUZFw_eMyP6N4iMpImKX23HvEJR2GBJU5z1gFdniqi48aB1IJWQxQjP7r9RNkjwjocILBqRB5K_fdu8Vav4TbyzkyHi-nVMxH39hl5yw51erwYQAS6SthPErbCeF6bBjJKIT-NWL8eUT6_bVtbbOVCSnv11mbo0snCDUMcMNsI8dZ6NXcXy6mtJaSoYHrhhMF3HBUnnLu5g",
    capacity: "For 6 people",
    capacityNumber: 6,
    dayPrice: 6000,
    nightPrice: 10000,
    dayPriceDisplay: "₹6,000",
    nightPriceDisplay: "₹10,000",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
    featured: true,
  },
  {
    id: "bunk-bed-cottage",
    name: "Bunk Bed Cottage",
    category: "Group Cottage",
    tagline: "Playful and practical communal cottage crafted for large group adventures.",
    description:
      "Perfect for large groups, our bunk bed cottage combines fun with comfort. These cottages provide a playful and practical accommodation option.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5caNXPlhp70d_0swwBQbfrQ33XZtZW2RfImAT3seK8NemVg-Hb_zOHc3v7nBhCMJ0iHS72i_9uACZG4J1Rs6CIOf7B4E18bUIlrU3ICS3nd2t1itCwFAkhu42nC6Y-ybqbjAWHlRb3GDUW8c4ewu0K1qO4iFm3aZni6wZjmEAThGIi66UTNxM1vqJJSTTQoZdR6R74SSc3RMtFthXJWdH2bz2UurLDk8n5Fvww8xiQrpZjHKxbrrZBw",
    capacity: "For 10 people",
    capacityNumber: 10,
    dayPrice: 10000,
    nightPrice: 14000,
    dayPriceDisplay: "₹10,000",
    nightPriceDisplay: "₹14,000",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
  },
  {
    id: "villa",
    name: "Villa",
    category: "Private Villa",
    tagline: "Spacious private sanctuary with exclusive elegance and premium comforts.",
    description:
      "Our villa offers a luxurious escape with spacious interiors and premium amenities. Enjoy exclusive comfort and elegance in a private setting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHF4eVG3_7tb4BSb_REZxWwluqg09QB6WcN_c274ayPJrskv_oYXaEoCrogA7uapfA4KgCO8zB--JQLBua3NM2bTn-7uYgM5SkqXWW_2Xhbveb7oyF8WA8BaZkCKJOx0n7-sQINzFj5dXOdkzVVi2t8ghqvd6hCss_HKNX01fO6HGLUD13RIIntQW96cvSHAIs5kHUc57shcwvVO_NwASiZ9ESqH1Udq6fggiL-7bebDHSMXMVIQQ3vw",
    capacity: "For 12 people",
    capacityNumber: 12,
    dayPrice: 11000,
    nightPrice: 16000,
    dayPriceDisplay: "₹11,000",
    nightPriceDisplay: "₹16,000",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
    featured: true,
  },
  {
    id: "sunset-suite",
    name: "Sunset Suite",
    category: "Signature Suite",
    tagline: "Breathtaking twilight vistas and deluxe comfort with optional bathtub upgrade.",
    description:
      "Experience stunning sunsets and deluxe comfort in our beautifully appointed Sunset Suite. Enjoy a luxurious bathtub and premium room with breathtaking sunset views.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHDMoxZrHmA_FKLP-DjEPA6iXplMT0hE7VfUfIVKPx9-28-u7aN_5HXYn63TEWA4bKHgqAK2fUpJJEM0B8iv6J_-bvZI9I4aMyGua-syP8NFopOHH9nCybKcjtKo9xOtpkLyT_hVDGEZpeDoZZtl36wyxP1rAZHJXcM9-Vl6Ityvu98i0cI2zGAYfFDxM8rssTVUPwYJrXI2xDGvf1-HB3toMbfXygedlA5mZ-cSKKnPR6bVxXt1xfX1vC",
    capacity: "For 2 people",
    capacityNumber: 2,
    dayPrice: 3500,
    nightPrice: 6500,
    dayPriceDisplay: "₹3,500",
    nightPriceDisplay: "₹6,500",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    optionalAddOns: [
      {
        name: "Bathtub Suite Add-on",
        price: 500,
        priceDisplay: "+₹500",
        description: "Bathtub available as an optional ₹500 add-on",
      },
    ],
    amenities: OFFICIAL_AMENITIES,
    featured: true,
  },
  {
    id: "dormitory-rooms",
    name: "Dormitory Rooms",
    category: "Group Stay",
    tagline: "Comfortable and convenient group sanctuary for gatherings and squad retreats.",
    description:
      "Ideal for large groups, our dormitory rooms offer comfort and convenience. These spacious accommodations are perfect for gatherings and group stays.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLe7cIPOgeM3xyzXaePjdIdXc6n8qQH2nm_fylm-C-riYUZFw_eMyP6N4iMpImKX23HvEJR2GBJU5z1gFdniqi48aB1IJWQxQjP7r9RNkjwjocILBqRB5K_fdu8Vav4TbyzkyHi-nVMxH39hl5yw51erwYQAS6SthPErbCeF6bBjJKIT-NWL8eUT6_bVtbbOVCSnv11mbo0snCDUMcMNsI8dZ6NXcXy6mtJaSoYHrhhMF3HBUnnLu5g",
    capacity: "For 7 people",
    capacityNumber: 7,
    dayPrice: 6500,
    nightPrice: 11000,
    dayPriceDisplay: "₹6,500",
    nightPriceDisplay: "₹11,000",
    weekdayDiscount: "10% off on weekdays — Monday to Friday.",
    foodIncluded: false,
    amenities: OFFICIAL_AMENITIES,
  },
];

export const STAY_WITH_FOOD_PACKAGES: FoodPackage[] = [
  {
    title: "One Day Food Package",
    pricePerPerson: 1900,
    priceDisplay: "₹1,900",
    period: "per person / day",
    includes: [
      "01 Meal",
      "01 Breakfast",
      "Lunch",
      "High Tea (or) Snacks",
      "Veg & Non-Veg Multi-Cuisine Options",
    ],
  },
  {
    title: "One Night Food Package",
    pricePerPerson: 2800,
    priceDisplay: "₹2,800",
    period: "per person / night",
    note: "(Group Booking — Minimum 03 people required to apply for ₹2,800 rate)",
    includes: [
      "Overnight Stay in Chosen Category",
      "2 Main Meals (Lunch & Dinner)",
      "Morning Breakfast",
      "Evening High-Tea & Snacks",
      "Veg & Non-Veg Multi-Cuisine Options",
    ],
  },
];

export const SINGLE_COTTAGE_FOOD_PACKAGE = {
  title: "Single Cottage Food Package",
  subtitle: "Inclusive of cottage stay, meals, breakfast and snacks for 2 guests",
  adultRates: {
    dayPrice: "₹4,500",
    nightPrice: "₹6,500",
    capacity: "2 People",
  },
  kidsRates: {
    ageRange: "Kids (5 – 12 Years)",
    dayPrice: "₹1,300",
    nightPrice: "₹1,700",
  },
};

export const FLOATING_BREAKFAST = {
  title: "Floating Breakfast",
  price: 1199,
  priceDisplay: "₹1,199",
  description: "Wake up to a serene morning at our infinity pool with a luxurious floating breakfast.",
  note: "Advance booking required.",
};

export const BUFFET_TIMINGS: BuffetMeal[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    time: "8:30 AM – 10:30 AM",
    items: [
      "Misal Pav / Kanda Poha / Upma (Any One Daily Specialty)",
      "Egg Bhurji",
      "Bread, Butter & Jam",
      "Freshly Brewed Tea & Coffee",
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    time: "1:00 PM – 3:00 PM",
    items: [
      "Veg Starter",
      "Chicken Gravy (Non-Veg Specialty)",
      "Vegetable Sabji",
      "Dal Fry & Steamed Rice",
      "Fresh Tawa Roti",
      "Green Salad, Crispy Papad & Pickle",
      "Traditional Sweet Dish",
    ],
  },
  {
    id: "snacks",
    name: "Evening Snacks",
    time: "5:00 PM – 6:30 PM",
    items: [
      "Vada Pav / Mix Pakoda / Pav Bhaji (Any One Daily Specialty)",
      "Bread, Butter & Jam",
      "Hot Masala Tea & Filter Coffee",
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    time: "8:30 PM – 11:00 PM",
    items: [
      "Veg Starter",
      "Chicken Gravy (Non-Veg Specialty)",
      "Vegetable Sabji",
      "Dal Fry & Steamed Rice",
      "Fresh Tawa Roti",
      "Green Salad, Crispy Papad & Pickle",
      "Traditional Sweet Dish",
    ],
  },
];

export const BOOKING_POLICIES = [
  {
    title: "Advance Payment",
    rule: "A minimum advance of ₹3,000 or 50% of the total booking amount is required to secure the reservation.",
  },
  {
    title: "Booking Confirmation",
    rule: "Booking is considered confirmed on payment of 50% of the total amount. The remaining amount is payable on the day of check-in through cash or UPI.",
  },
  {
    title: "Cancellation Policy",
    rule: "The booking amount is non-refundable.",
  },
  {
    title: "Outside Food & Beverages",
    rule: "Outside food and beverages are strictly prohibited on the resort premises.",
  },
  {
    title: "Pet Policy",
    rule: "Pets are strictly prohibited within the resort premises.",
  },
  {
    title: "Swimming Pool Timings",
    rule: "Swimming pool timing is strictly 8:30 AM – 7:00 PM.",
  },
  {
    title: "Smoking Restriction",
    rule: "Smoking is strictly prohibited inside cottages and restaurant dining areas.",
  },
  {
    title: "Taxes & GST",
    rule: "All prices mentioned across accommodations and packages are exclusive of GST.",
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "weddings-events",
    title: "Weddings & Celebrations",
    subtitle: "Magical Milestones",
    description:
      "From intimate engagement ceremonies to grand birthday bashes and retirement celebrations, our open-air event lawns and dedicated team craft bespoke decor, gourmet multi-cuisine catering, and unforgettable ambiance against dramatic valley backdrops.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFs7Mf_VFSgMtoU85e6o9n2ddRujyqLDyT1Z_IVQS5YZmx1DE9A7k7-CrIPxSupcaujDRWyT3FkZW9aWnIjdyVcvkiuLXMmYvJzfdYNXcMpjD8uqAVgUMF5BJJlvDl5qDXts0L0XTh0GtRMQQOJ5DjjSvof0F0Dig6CDCqyB-KtmrVIqVkUWQy3uzxlyy5XD1Hm1G6TgKLah0WuewWiAb2NC4mi1AD-owPpGfvqEzufnW-CxIOFZZjjA",
    highlights: [
      "Customized Floral & Fairy Light Decor",
      "Multi-Cuisine Buffet by Bliss Cafe",
      "Scenic Valley-View Lawns & Stage",
      "Seamless Event Coordination Staff",
    ],
    badge: "Celebrations",
  },
  {
    id: "nightlife-wellness",
    title: "Nightlife & Wellness",
    subtitle: "Balance & Rhythm",
    description:
      "Find your equilibrium. Transition seamlessly from high-energy DJ nights and curated pool parties by the illuminated infinity edge, to quiet sunrise yoga sessions and meditative walks through mist-kissed forests.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q9rJOGgO-GClZ3Q8zZ_4ISO9G9Os4xN9PTmdU4Iw3rDxR5UH1ookNbPC0XEs1nlk9tV3ZqpjjU0fLK7tto-Rz0Stv3PIUkyCW5B3au2-oMRW0H4TPocSPwNwdxy3_Zhr9F_CaouEoq1wFVco7P2qv1EiizRJN22rughqTLk14pU1zhl-sWuLr8fRmtGAaGqHcoQE9b0JNbeK3pDcl_AxPYiJroA_tVREaLedkzuWL6zxVIsrIbtw6A",
    highlights: [
      "Exclusive Infinity Pool Parties",
      "Ambient Lighting & Soulful Soundscapes",
      "Cozy Twilight Fire Pit Lounges",
      "Guided Morning Nature Rejuvenation",
    ],
    badge: "Vibe & Rejuvenate",
  },
];

export const TRAILS_DATA: Trail[] = [
  {
    id: "kondeshwar-trail",
    title: "Kondeshwar Waterfall Trail",
    duration: "2 Hours",
    difficulty: "Moderate",
    description:
      "A scenic trek through ancient forested hills and seasonal streams, culminating at the revered Kondeshwar temple and breathtaking cascade pools.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxeyz6v5oMGOfsOEOkYa95_TsAizp9rWPnv_RE7xowy4hZLRH8vbQCF62ABG7pFrXWTQ7x8ugyKEkRRcuCLcABKxgbHSaRE04TFcWhNuw-83v-_j96kjWLKePfen-XAjT7GxDyGvOWaZFJlHq2dmcxz0ao4s27uva1ZKn-K4Ycrnf6tQ_u_6lnEx4dFvvmkN_Lr3qO_BAClzrynTtmADZrU-zLvaRucoFLt-NjxnYfpzI2oA1Xqfveaw",
    highlights: ["Misty Forest Canopy", "Natural Waterfall Pool", "Historical Heritage Site"],
  },
  {
    id: "sunset-ridge",
    title: "Sunset Ridge Walk",
    duration: "45 Mins",
    difficulty: "Easy",
    description:
      "A gentle, elevated stroll directly accessible from the resort perimeter. Offers sweeping panoramic views of the entire valley during the golden hour.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXzsjZR_Wmms8rjxbltRhOV8f5ybSzb_PsuikeUAYKItj_LlwbESPS9jTMwxZqWQ6MCP2u10aEYIMMBZmvOCcxNUjI5s1Xfnatzd89jDj2KW0hdEZtEz7UnVAE6YJqWjjTyBxibAy_psBl9mAGYcLsVxjT7BQLpJ-nCXWwm_BjVcxAzYjcEs5KfgqkhxBe8s014-40xgVZsKiGQLBVn5zv-FeAmaXtxQEOlnaQ-g_GPKTQOl-9uil9PQ",
    highlights: ["Golden Hour Vistas", "Birdwatching Haven", "Gentle Slopes for All Ages"],
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g-1",
    title: "Infinity Pool at Twilight",
    category: "pool",
    categoryLabel: "Pool & Horizon",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XKgs689rI0ekkvS8WkU4oZ7mso-Uy9kisj5_053go_3C6CMNKdKSnfx6zBwg2lFOMkILHEci5piCdWj0aUi0uDvCcjcduhIRT3u2zyGSegAARHyHTYXikfes61HDQrZm9rbGz-5wVE05Bt3dMJ3EJN3XoQVLeqAQUw2dNG-BpIQpQcUpa3ob1cafQnSF7iMTnFsggTjnXZJYTdgVNVgtUm7FdGGbFwcNYmIddBnNOQze0cvWY0aCtuVFw",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "g-2",
    title: "Bliss Cafe Twilight Dining",
    category: "dining",
    categoryLabel: "Dining & Cafe",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VyhmmeDjBrohzInW_nEYWWKJIuGFwfL9UcTJxPDKUXuokWhy5Lve6yuz0IY09-LMHgqR23-oUobeiQ-cFblDAdU0oeBU_eDRK2Wi3opNwPq83G3gGMYdxRMWRvd7nCTPw9FbRzu3zKPdv62reX2u-OdZTZclwbo0T37yTXf4xq7koCFj2ZCwF6igqeuf5_iFoai-9-14aS1Nm9hifPdXNNEDWWQzterm1i_r5UefDLtP435ogoG1CLZNc",
  },
  {
    id: "g-3",
    title: "Sunset Suite Fireplace & Ridge",
    category: "rooms",
    categoryLabel: "Suites",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHDMoxZrHmA_FKLP-DjEPA6iXplMT0hE7VfUfIVKPx9-28-u7aN_5HXYn63TEWA4bKHgqAK2fUpJJEM0B8iv6J_-bvZI9I4aMyGua-syP8NFopOHH9nCybKcjtKo9xOtpkLyT_hVDGEZpeDoZZtl36wyxP1rAZHJXcM9-Vl6Ityvu98i0cI2zGAYfFDxM8rssTVUPwYJrXI2xDGvf1-HB3toMbfXygedlA5mZ-cSKKnPR6bVxXt1xfX1vC",
  },
  {
    id: "g-4",
    title: "Tropical Sanctuary Foliage",
    category: "nature",
    categoryLabel: "Nature & Flora",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcaC-Xl04e_2_GSak57gUmOulqBoVrdKYhey72luJRtSTlHaRpL96QzzI4p2bmKqnbCxAox_XQARGHzGZi7eaDT4E8yz1UI3N5icd0gkF63h2zNqguDAOUOx7Qti3EX9SGYQTkzKl3QjHkvSqE5hxOT9r9UN8lUeh42SqUC8sfqp6BgWqYiJHGYP-6KvT-tvtiDSyhNyyUy88Bhwptpt2OkZU5vlCzCESq1b8erBrWcNQFcRMzdM8EWg",
  },
  {
    id: "g-5",
    title: "Celebration Venue Setup",
    category: "events",
    categoryLabel: "Events & Lawn",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFs7Mf_VFSgMtoU85e6o9n2ddRujyqLDyT1Z_IVQS5YZmx1DE9A7k7-CrIPxSupcaujDRWyT3FkZW9aWnIjdyVcvkiuLXMmYvJzfdYNXcMpjD8uqAVgUMF5BJJlvDl5qDXts0L0XTh0GtRMQQOJ5DjjSvof0F0Dig6CDCqyB-KtmrVIqVkUWQy3uzxlyy5XD1Hm1G6TgKLah0WuewWiAb2NC4mi1AD-owPpGfvqEzufnW-CxIOFZZjjA",
  },
  {
    id: "g-6",
    title: "Contemporary Dusk Architecture",
    category: "nature",
    categoryLabel: "Resort Architecture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_7_E68MmkYu5EF8CwCIvv7HQT2CW990dSCVW8JoMpFOVh6DjjP4wP9z9iqkDtfqilzXML1BEGrMQp0F9Uwywtoppj__gPy4Ts9mQijh-ffjhYeyOGPZ4i2ttA7LHWSfOC_k_TNgohieDBVwfqELgBKfew2TrAs8ZKkDAvuN3zqSNVnSH5wFGI4dFNP0FQcL4V-jABG7w1ccxIYsOnF3xxyLfu81kPRcX2xxQl_smFnfLw2w2jDNO4VA",
  },
  {
    id: "g-7",
    title: "Colourful Garden Cottages",
    category: "rooms",
    categoryLabel: "Cottages",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5caNXPlhp70d_0swwBQbfrQ33XZtZW2RfImAT3seK8NemVg-Hb_zOHc3v7nBhCMJ0iHS72i_9uACZG4J1Rs6CIOf7B4E18bUIlrU3ICS3nd2t1itCwFAkhu42nC6Y-ybqbjAWHlRb3GDUW8c4ewu0K1qO4iFm3aZni6wZjmEAThGIi66UTNxM1vqJJSTTQoZdR6R74SSc3RMtFthXJWdH2bz2UurLDk8n5Fvww8xiQrpZjHKxbrrZBw",
  },
  {
    id: "g-8",
    title: "3BHK Villa Living Space",
    category: "rooms",
    categoryLabel: "Private Villa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHF4eVG3_7tb4BSb_REZxWwluqg09QB6WcN_c274ayPJrskv_oYXaEoCrogA7uapfA4KgCO8zB--JQLBua3NM2bTn-7uYgM5SkqXWW_2Xhbveb7oyF8WA8BaZkCKJOx0n7-sQINzFj5dXOdkzVVi2t8ghqvd6hCss_HKNX01fO6HGLUD13RIIntQW96cvSHAIs5kHUc57shcwvVO_NwASiZ9ESqH1Udq6fggiL-7bebDHSMXMVIQQ3vw",
  },
  {
    id: "g-9",
    title: "Nighttime Poolside Gathering",
    category: "pool",
    categoryLabel: "Nightlife",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q9rJOGgO-GClZ3Q8zZ_4ISO9G9Os4xN9PTmdU4Iw3rDxR5UH1ookNbPC0XEs1nlk9tV3ZqpjjU0fLK7tto-Rz0Stv3PIUkyCW5B3au2-oMRW0H4TPocSPwNwdxy3_Zhr9F_CaouEoq1wFVco7P2qv1EiizRJN22rughqTLk14pU1zhl-sWuLr8fRmtGAaGqHcoQE9b0JNbeK3pDcl_AxPYiJroA_tVREaLedkzuWL6zxVIsrIbtw6A",
  },
];

export const AMENITIES_LIST = [
  {
    title: "Infinity Pool with Valley View",
    description: "Horizon water mirror with submerged underwater lighting and tranquil music.",
    icon: "Waves",
  },
  {
    title: "Bliss Cafe Multi-Cuisine",
    description: "40-seat gourmet dining lounge serving Indian, Continental, and local specialties.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Ambient Music Atmosphere",
    description: "Curated acoustic and chillout soundscapes flowing across the pool deck.",
    icon: "Music",
  },
  {
    title: "Grand Event & Wedding Lawns",
    description: "Perfect for intimate weddings, engagements, birthday bashes, and corporate getaways.",
    icon: "Sparkles",
  },
  {
    title: "High-Speed Resort Wi-Fi",
    description: "Seamless wireless internet throughout all cottages, suites, and public areas.",
    icon: "Wifi",
  },
  {
    title: "Nature Trails & Waterfall Treks",
    description: "Direct proximity to Kondeshwar Falls and breathtaking sunset ridge viewpoints.",
    icon: "Compass",
  },
  {
    title: "24/7 Hospitality & Housekeeping",
    description: "Warm, attentive staff catering to your every request with utmost care.",
    icon: "Clock",
  },
  {
    title: "Flexible Stay & Day Packages",
    description: "Day outings (9am-7pm), leisurely weekend nights, and late-checkin options.",
    icon: "CalendarCheck",
  },
];

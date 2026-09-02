export interface Room {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  view: string;
  bed: string;
  amenities: string[];
  featured?: boolean;
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
  mapsUrl: "https://maps.app.goo.gl/b2uxNp2NcHsWmQvR9?g_st=ic",
  instagramUrl: "https://www.instagram.com/nirva_resort?igsi=MW43a3J5bWJoOHI4cQ%3D%3D&utm_source=qr",
  facebookUrl: "https://www.facebook.com/NirvaResort",
  totalRooms: 20,
  restaurantName: "Bliss Cafe",
  restaurantCapacity: "40 Guests",
  timings: [
    {
      type: "Day Outing (Weekdays Only)",
      hours: "9:00 AM – 7:00 PM",
      description: "Full day access to pool, Bliss Cafe, and lush lawns.",
    },
    {
      type: "Overnight Stay (Option 1)",
      hours: "12:00 PM – 10:00 AM",
      description: "Standard 22-hour leisurely retreat with evening sunset.",
    },
    {
      type: "Overnight Stay (Option 2)",
      hours: "6:00 PM – 4:00 PM",
      description: "Late check-in ideal for after-work weekend escapes.",
    },
  ],
};

export const ROOMS_DATA: Room[] = [
  {
    id: "sunset-suite",
    name: "Sunset Suite Rooms",
    category: "Signature Suite",
    tagline: "Unobstructed views of the valley painted in twilight hues.",
    description:
      "Our most sought-after accommodation, perched with expansive glass vistas overlooking the rolling Kondeshwar hills. Features rich teakwood finishes, plush king bedding, private sunset deck, and tailored lighting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLe7cIPOgeM3xyzXaePjdIdXc6n8qQH2nm_fylm-C-riYUZFw_eMyP6N4iMpImKX23HvEJR2GBJU5z1gFdniqi48aB1IJWQxQjP7r9RNkjwjocILBqRB5K_fdu8Vav4TbyzkyHi-nVMxH39hl5yw51erwYQAS6SthPErbCeF6bBjJKIT-NWL8eUT6_bVtbbOVCSnv11mbo0snCDUMcMNsI8dZ6NXcXy6mtJaSoYHrhhMF3HBUnnLu5g",
    capacity: "2 Adults + 1 Child",
    view: "Panoramic Valley & Sunset",
    bed: "King Size Plush",
    amenities: [
      "Private Sunset Balcony",
      "Panoramic Glass Facade",
      "Air Conditioning & Climate Control",
      "Smart HD TV & High-Speed Wi-Fi",
      "Artisan Bath Amenities",
      "Complimentary Tea & Coffee Bar",
    ],
    featured: true,
  },
  {
    id: "sunset-suite-bathtub",
    name: "Sunset Suite with Bathtub",
    category: "Ultra Luxury",
    tagline: "Indulgent deep-soaking bathtub overlooking serene green ridges.",
    description:
      "An upgraded edition of our signature suite featuring an artisanal standalone bathtub placed before panoramic picture windows. Designed for couples seeking unmatched intimacy and restorative peace.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHDMoxZrHmA_FKLP-DjEPA6iXplMT0hE7VfUfIVKPx9-28-u7aN_5HXYn63TEWA4bKHgqAK2fUpJJEM0B8iv6J_-bvZI9I4aMyGua-syP8NFopOHH9nCybKcjtKo9xOtpkLyT_hVDGEZpeDoZZtl36wyxP1rAZHJXcM9-Vl6Ityvu98i0cI2zGAYfFDxM8rssTVUPwYJrXI2xDGvf1-HB3toMbfXygedlA5mZ-cSKKnPR6bVxXt1xfX1vC",
    capacity: "2 Adults",
    view: "Valley & Sunset Overlook",
    bed: "Royal King Size",
    amenities: [
      "Designer Deep-Soak Bathtub",
      "Panoramic Valley Window",
      "Warm Amber Mood Lighting",
      "Complimentary Bath Salts & Robes",
      "Private Viewing Lounge",
      "In-Room Dining Service",
    ],
    featured: true,
  },
  {
    id: "colourful-cottages",
    name: "Single Colourful Cottages",
    category: "Boutique Cottage",
    tagline: "Vibrant standalone retreats nestled amidst blooming flora.",
    description:
      "Charming, independent cottages with joyful contemporary color palettes and rustic timber textures. Each cottage offers absolute privacy, direct garden pathways, and a welcoming covered sit-out.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5caNXPlhp70d_0swwBQbfrQ33XZtZW2RfImAT3seK8NemVg-Hb_zOHc3v7nBhCMJ0iHS72i_9uACZG4J1Rs6CIOf7B4E18bUIlrU3ICS3nd2t1itCwFAkhu42nC6Y-ybqbjAWHlRb3GDUW8c4ewu0K1qO4iFm3aZni6wZjmEAThGIi66UTNxM1vqJJSTTQoZdR6R74SSc3RMtFthXJWdH2bz2UurLDk8n5Fvww8xiQrpZjHKxbrrZBw",
    capacity: "2 Adults",
    view: "Tropical Gardens",
    bed: "Queen Size Comfort",
    amenities: [
      "Private Covered Porch",
      "Direct Garden Access",
      "Air Conditioning",
      "En-suite Modern Bathroom",
      "Dedicated Room Service",
      "High-Speed Wi-Fi",
    ],
    featured: true,
  },
  {
    id: "3bhk-villa",
    name: "3BHK Luxury Villa",
    category: "Private Estate",
    tagline: "Spacious luxury sanctuary designed for family gatherings & groups.",
    description:
      "A grand multi-bedroom residence boasting high ceilings, an expansive living and dining hall, private terrace, and lush garden vistas. Perfect for reunions, bridal parties, or private weekend get-togethers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHF4eVG3_7tb4BSb_REZxWwluqg09QB6WcN_c274ayPJrskv_oYXaEoCrogA7uapfA4KgCO8zB--JQLBua3NM2bTn-7uYgM5SkqXWW_2Xhbveb7oyF8WA8BaZkCKJOx0n7-sQINzFj5dXOdkzVVi2t8ghqvd6hCss_HKNX01fO6HGLUD13RIIntQW96cvSHAIs5kHUc57shcwvVO_NwASiZ9ESqH1Udq6fggiL-7bebDHSMXMVIQQ3vw",
    capacity: "6 to 10 Guests",
    view: "Private Estate & Hills",
    bed: "3 Master King Bedrooms",
    amenities: [
      "3 Private En-suite Bedrooms",
      "Expansive Living & Dining Hall",
      "Floor-to-Ceiling Windows",
      "Private Terrace Balcony",
      "Personal Butler Assistance",
      "Kitchenette & Fridge",
    ],
    featured: true,
  },
  {
    id: "duplex-cottage",
    name: "Duplex Cottage",
    category: "Split-Level Suite",
    tagline: "Two-level architectural charm with elevated master bedroom loft.",
    description:
      "Featuring a distinctive mezzanine layout with high wood-beamed ceilings, ground-floor living space, and an airy upper sleeping sanctuary. Ideal for small families and long weekends.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHDMoxZrHmA_FKLP-DjEPA6iXplMT0hE7VfUfIVKPx9-28-u7aN_5HXYn63TEWA4bKHgqAK2fUpJJEM0B8iv6J_-bvZI9I4aMyGua-syP8NFopOHH9nCybKcjtKo9xOtpkLyT_hVDGEZpeDoZZtl36wyxP1rAZHJXcM9-Vl6Ityvu98i0cI2zGAYfFDxM8rssTVUPwYJrXI2xDGvf1-HB3toMbfXygedlA5mZ-cSKKnPR6bVxXt1xfX1vC",
    capacity: "4 Guests",
    view: "Garden & Ridge View",
    bed: "1 King + 2 Twin Beds",
    amenities: [
      "Split-Level Mezzanine Design",
      "Double Height Ceilings",
      "Dual Air Conditioning Units",
      "Spacious Living Lounge",
      "Premium Bathroom Fixtures",
      "Coffee & Tea Maker",
    ],
  },
  {
    id: "bunked-bed-cottage",
    name: "Bunked Bed Cottage",
    category: "Group & Squad",
    tagline: "Cleverly crafted communal cottage for friendship adventures.",
    description:
      "Designed for youth gangs, trekkers, and close-knit friend circles visiting Kondeshwar trails. Features comfortable custom-built bunk beds, modern lockers, and vibrant lounge spaces.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5caNXPlhp70d_0swwBQbfrQ33XZtZW2RfImAT3seK8NemVg-Hb_zOHc3v7nBhCMJ0iHS72i_9uACZG4J1Rs6CIOf7B4E18bUIlrU3ICS3nd2t1itCwFAkhu42nC6Y-ybqbjAWHlRb3GDUW8c4ewu0K1qO4iFm3aZni6wZjmEAThGIi66UTNxM1vqJJSTTQoZdR6R74SSc3RMtFthXJWdH2bz2UurLDk8n5Fvww8xiQrpZjHKxbrrZBw",
    capacity: "4 to 6 Guests",
    view: "Courtyard & Hills",
    bed: "Custom Quad Bunk Beds",
    amenities: [
      "Sturdy Ergonomic Bunk Setup",
      "Individual Charging Stations",
      "Spacious Luggage Storage",
      "Air Conditioning",
      "Dedicated Social Corner",
      "Fast Wi-Fi for Streaming",
    ],
  },
  {
    id: "suite-cottages",
    name: "Suite Cottages",
    category: "Executive Cottage",
    tagline: "Quiet sophistication with private veranda and plush amenities.",
    description:
      "A serene standalone cottage pairing clean modern aesthetics with warm local stone and timber touches. Features an intimate living nook and secluded outdoor sit-out.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLe7cIPOgeM3xyzXaePjdIdXc6n8qQH2nm_fylm-C-riYUZFw_eMyP6N4iMpImKX23HvEJR2GBJU5z1gFdniqi48aB1IJWQxQjP7r9RNkjwjocILBqRB5K_fdu8Vav4TbyzkyHi-nVMxH39hl5yw51erwYQAS6SthPErbCeF6bBjJKIT-NWL8eUT6_bVtbbOVCSnv11mbo0snCDUMcMNsI8dZ6NXcXy6mtJaSoYHrhhMF3HBUnnLu5g",
    capacity: "2 to 3 Guests",
    view: "Lush Valley Greenery",
    bed: "King Bed + Daybed",
    amenities: [
      "Private Sit-Out Veranda",
      "Daybed Reading Nook",
      "Air Conditioning",
      "Rain Shower En-suite",
      "Complimentary Mineral Water",
      "Daily Housekeeping",
    ],
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

/**
 * Nirva The Cottage & Resort - Centralized Room Image Configuration
 *
 * SINGLE SOURCE OF TRUTH for all room / gallery images.
 * Paste full Cloudinary image URLs manually into the respective room arrays below.
 */

export const ROOM_IMAGES = {
  "single-cottage": {
    blue: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058769/Blue_Cottage_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058903/Blue_Cottage_2_2.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059066/Blue_Cottage_3_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059173/Blue_Cottage_4_1.jpg",

    ],
    lilac: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059316/Lilac_Cottage_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059581/Lilac_Cottage_2_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059686/Lilac_Cottage_3_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789059722/Lilac_Cottage_4_1.jpg",
    ],
    orange: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241017/Orange_Cottage_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241169/Orange_Cottage_3_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241148/Orange_Cottage_2_1.jpg",
    ],
    yellow: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241587/Yellow_Cottage_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241549/Yellow_Cottage_3_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1789241571/Yellow_Cottage_2_1.jpg",
    ],
  },

  "duplex-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058424/Duplex_Room_1_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058334/Duplex_Room_2.jpg",
  ],

  "suite-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789056540/Suite-Cottage_1_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789056711/Suite-Cottage_2_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057277/Suite-Cottage_3_1.jpg",
  ],

  "bunk-bed-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789047618/Bunk-Bed_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789047618/Bunk-Bed_2.jpg",
  ],

  "villa": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057325/Villa_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057498/Villa_2.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057941/Villa_3_1.jpg",
  ],

  "sunset-suite": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058092/Sunset_Suite_1_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789055380/Sunset_Suite_2.png",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058252/Sunset_Suite_3_1.jpg",
  ],

  "dormitory-rooms": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789055027/Dormitory_Room_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789055028/Dormitory_Room_2.jpg",
  ],
} as const;

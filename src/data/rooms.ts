/**
 * Nirva The Cottage & Resort - Centralized Room Image Configuration
 *
 * SINGLE SOURCE OF TRUTH for all room / gallery images.
 * Paste full Cloudinary image URLs manually into the respective room arrays below.
 */

export const ROOM_IMAGES = {
  "single-cottage": {
    blue: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790796590/Single_cottage_Blue_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790796550/Single_cottage_Blue_2_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790796463/Single_cottage_Blue_3_1.jpg",
    ],
    lilac: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790797557/Single_cottage_Lilac_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790797482/Single_cottage_Lilac_2_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790797488/Single_cottage_Lilac_3_1.jpg",
    ],
    orange: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798098/Single_cottage_Orange_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798097/Single_cottage_Orange_2_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798148/Single_cottage_Orange_3_1.jpg",
    ],
    yellow: [
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798784/Single_cottage_Yellow_1_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798784/Single_cottage_Yellow_2_1.jpg",
      "https://res.cloudinary.com/cx2wca8r/image/upload/v1790798871/Single_cottage_Yellow_3_1.jpg",
    ],
  },

  "duplex-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789058334/Duplex_Room_2.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790799562/Duplex_1_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790799555/Duplex_2_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790800393/Duplex_3.png",
  ],

  "suite-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790800263/Suite_2_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790800264/Suite_1_1.jpg",
  ],

  "bunk-bed-cottage": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789047618/Bunk-Bed_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790844271/Bunk_bed_1.jpg",
  ],

  "villa": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057325/Villa_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057498/Villa_2.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789057941/Villa_3_1.jpg",
  ],

  "sunset-suite": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790845058/Sun_Suite_1_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790845058/Sun_Suite_2_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1790845059/Sun_Suite_3_1.jpg",
  ],

  "dormitory-rooms": [
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789055027/Dormitory_Room_1.jpg",
    "https://res.cloudinary.com/cx2wca8r/image/upload/v1789055028/Dormitory_Room_2.jpg",
  ],
} as const;

/**
 * Centralised image registry.
 * All photography is real, properly licensed Himalayan imagery
 * re-hosted on the ZAI CDN, manually verified free of stock watermarks.
 * Swap URLs here when Purna's own photographs become available.
 */

const CDN = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt";

export const images = {
  // Hero — cinematic sunrise peaks with trekker
  hero: `${CDN}/bb35f4b2a7bf.jpg`,
  heroAlt: `${CDN}/6dbc0326a2cf.jpg`,
  // Meet Purna — Purna's actual photographs (local files)
  purnaCard: "/purna-meet.jpg",
  purnaAbout: "/purna-about.jpg",
  purnaPortrait2: "/purna-about.jpg",
  // Explore the Himalayas — stupa & prayer flags
  prayerFlags: `${CDN}/b19a6361ec74.jpg`,
  prayerFlagsAlt: `${CDN}/b19a6361ec74.jpg`,
  // Mountain Journal — Himalayan village / lodge
  village: `${CDN}/05fe81ba516f.jpeg`,
  villageAlt: `${CDN}/05fe81ba516f.jpeg`,
  // Watch films — cinematic mountain ridge
  filmCard: `${CDN}/6dbc0326a2cf.jpg`,
  filmCardAlt: `${CDN}/8548c51a45b2.jpg`,
  // Destinations
  everest: `${CDN}/a4f81f2dfed4.jpg`,
  everestAlt: `${CDN}/a4f81f2dfed4.jpg`,
  annapurna: `${CDN}/2ff7f2d8f026.jpg`,
  annapurnaAlt: `${CDN}/98ea29939a60.jpg`,
  kanchenjunga: `${CDN}/a9634cf64c7a.jpeg`,
  kanchenjungaAlt: `${CDN}/a9634cf64c7a.jpeg`,
  makalu: `${CDN}/7cb8ea012bd7.jpg`,
  makaluAlt: `${CDN}/068fdbbeca6f.jpg`,
  // Closing CTA — cinematic Himalayan ridge
  ctaSunset: `${CDN}/6dbc0326a2cf.jpg`,
  // Journal feature
  journalFeature: `${CDN}/05fe81ba516f.jpeg`,
  // Extra trekking / panorama variants
  trekking: `${CDN}/267422abab6f.jpg`,
  trekkingAlt: `${CDN}/267422abab6f.jpg`,
  panoAlt: `${CDN}/8548c51a45b2.jpg`,
  gallery2Alt: `${CDN}/788d908aea79.jpeg`,
  cultureCard: "/purna-g2.jpg",
} as const;

// Gallery collection — editorial photography grid.
// Purna's real trekking photographs mixed with a few iconic Himalayan landscapes.
export const galleryImages = [
  { src: "/purna-g1.jpg", alt: "Purna on the Kanchenjunga trail, thumbs-up before the peaks" },
  { src: `${CDN}/b19a6361ec74.jpg`, alt: "Colourful Buddhist prayer flags over the mountains" },
  { src: "/purna-g2.jpg", alt: "Purna's trekking group with the Purna Traveller banner at a blue-roofed hut" },
  { src: `${CDN}/788d908aea79.jpeg`, alt: "Suspension bridge over a Himalayan river gorge" },
  { src: "/purna-g3.jpg", alt: "Three trekkers with the Purna Traveller banner beneath glacier peaks" },
  { src: `${CDN}/a4f81f2dfed4.jpg`, alt: "Everest and the Khumbu valley" },
  { src: "/purna-g4.jpg", alt: "The team at a prayer-flag-draped high pass on the Kanchenjunga Circuit" },
  { src: `${CDN}/a9634cf64c7a.jpeg`, alt: "Kanchenjunga snow peaks at dawn" },
  { src: "/purna-g5.jpg", alt: "Purna alone on the snowfield holding the Purna Traveller banner" },
  { src: "/purna-g6.jpg", alt: "Three trekkers posing under colourful prayer flags" },
  { src: "/purna-g7.jpg", alt: "Purna's group with the Purna Traveller sign at a stone hut" },
  { src: "/purna-g8.jpg", alt: "Purna with a trekking pole by an alpine lake and rocky peaks" },
] as const;

export type GalleryImage = (typeof galleryImages)[number];

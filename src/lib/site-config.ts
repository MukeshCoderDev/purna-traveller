/**
 * Purna Traveller — Central Site Configuration
 * --------------------------------------------------
 * Single source of truth for brand info, social links,
 * WhatsApp number and licence details.
 * Update values here to reflect across the whole site.
 */

export const siteConfig = {
  brand: "Purna Traveller",
  brandTagline: "Nepal · Trekking · Adventure",
  location: "Nepal",
  experienceYears: "10 Years of Trekking Experience",
  licenceNumber: "22043",
  licenceLabel: "Trekking Guide Licence No.",
  // WhatsApp — international format, no "+" (wa.me expects digits only).
  whatsappNumber: "9779842652465",
  whatsappPrefill:
    "Hello Purna, I visited your website and would like to discuss a trekking experience in Nepal.",
  youtubeChannel: "https://www.youtube.com/@purnatraveller",
  youtubeHandle: "@purnatraveller",
  social: {
    youtube: "https://www.youtube.com/@purnatraveller",
    instagram: "https://www.instagram.com/purnatraveller",
    facebook: "https://www.facebook.com/purnatraveller",
    tiktok: "https://www.tiktok.com/@purnatraveller",
  },
} as const;

/**
 * Build a WhatsApp deep link using the central config.
 * Returns null when no real number is configured yet so
 * callers can render a graceful fallback.
 */
export function whatsappLink(message?: string): string | null {
  const num = siteConfig.whatsappNumber.replace(/\D/g, "");
  // A real number must be longer than the placeholder mask.
  if (!num || num.includes("X") || num.length < 8) return null;
  const text = encodeURIComponent(message ?? siteConfig.whatsappPrefill);
  return `https://wa.me/${num}?text=${text}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Purna", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Mountain Journal", href: "#journal" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

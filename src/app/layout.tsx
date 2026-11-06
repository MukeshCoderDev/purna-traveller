import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://purnatraveller.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Purna Traveller — Independent Himalayan Trekking Guide | Nepal",
    template: "%s · Purna Traveller",
  },
  description:
    "Purna Traveller is an independent Himalayan trekking guide in Nepal with 10 years of experience (Licence No. 22043). Discover Everest, Annapurna, Kanchenjunga and Makalu — and plan your trek directly with Purna.",
  keywords: [
    "Nepal trekking guide",
    "independent trekking guide Nepal",
    "Everest trekking guide",
    "Annapurna trekking guide",
    "Himalayan trekking Nepal",
    "Purna Traveller",
    "Kanchenjunga trek",
    "Makalu trek",
    "Nepal mountain guide",
  ],
  authors: [{ name: "Purna Traveller" }],
  creator: "Purna Traveller",
  publisher: "Purna Traveller",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Purna Traveller — Independent Himalayan Trekking Guide",
    description:
      "Trekking. Exploring. Sharing the real Nepal. 10 years of guiding experience in the Himalayas. Licence No. 22043.",
    url: SITE_URL,
    siteName: "Purna Traveller",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Purna Traveller — Himalayan Trekking Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purna Traveller — Himalayan Trekking Guide",
    description:
      "Independent Himalayan trekking guide in Nepal. 10 years of experience. Licence No. 22043.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Purna Traveller",
  description:
    "Independent Himalayan trekking guide in Nepal with 10 years of experience.",
  url: SITE_URL,
  areaServed: "Nepal",
  knowsAbout: [
    "Everest Trekking",
    "Annapurna Trekking",
    "Kanchenjunga Trekking",
    "Makalu Trekking",
    "Himalayan Trekking",
  ],
  sameAs: [
    siteConfig.social.youtube,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { FeatureCards } from "@/components/site/feature-cards";
import { About } from "@/components/site/about";
import { Destinations } from "@/components/site/destinations";
import { Journal } from "@/components/site/journal";
import { Videos } from "@/components/site/videos";
import { Gallery } from "@/components/site/gallery";
import { CtaSection } from "@/components/site/cta-section";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-button";

export const metadata: Metadata = {
  title: "Purna Traveller — Independent Himalayan Trekking Guide | Nepal",
  description:
    "Purna Traveller is an independent Himalayan trekking guide in Nepal with 10 years of experience (Licence No. 22043). Discover Everest, Annapurna, Kanchenjunga and Makalu and plan your trek directly with Purna.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <About />
        <Destinations />
        <Journal />
        <Videos />
        <Gallery />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

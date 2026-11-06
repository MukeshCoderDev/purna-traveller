"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-charcoal"
    >
      {/* Cinematic background */}
      <Image
        src={images.hero}
        alt="Snow-capped Himalayan peaks glowing at sunrise with a lone trekker on the ridge"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Left-to-right cinematic scrim for headline + branding legibility */}
      <div className="absolute inset-0 overlay-hero" />
      {/* Top scrim so the transparent navbar stays readable over bright sky */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-charcoal/85 via-charcoal/40 to-transparent" />
      {/* Bottom fade into the cards section */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-start px-5 pb-36 pt-28 md:justify-center md:px-8 md:pt-32">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left — headline */}
          <div className="w-full max-w-2xl animate-fade-rise lg:max-w-3xl">
            <p className="eyebrow mb-5 text-gold [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
              Independent Himalayan Trekking Guide
            </p>
            <h1 className="display-hero text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)]">
              <span className="block text-[clamp(2.4rem,6vw,4.75rem)] whitespace-nowrap">
                THE HIMALAYAS
              </span>
              <span className="block text-[clamp(2.4rem,6vw,4.75rem)]">
                ARE MY{" "}
                <span className="text-gold italic">BACKYARD.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-white/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] md:text-lg">
              Trekking. Exploring. Sharing the real Nepal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton className="px-7 py-3.5 text-sm">
                Book a Trek on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </WhatsAppButton>
              <button
                type="button"
                onClick={() => scrollTo("videos")}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-charcoal/55 px-7 py-3.5 font-sans text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-charcoal/70"
              >
                <Play className="h-4 w-4 fill-white" />
                Watch My Films
              </button>
            </div>
          </div>

          {/* Right — branding card */}
          <div
            className="animate-fade-rise delay-200 mb-20 w-full max-w-xs rounded-sm border border-gold/25 bg-charcoal p-6 shadow-2xl shadow-black/50 md:mb-0 md:p-7"
          >
            <div className="flex items-baseline justify-between border-b border-white/20 pb-4">
              <span className="eyebrow text-gold/90">The Guide</span>
              <span className="font-serif text-xs italic text-white/75">
                est. Nepal
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-medium text-white">
              {siteConfig.brand}
            </h2>
            <dl className="mt-5 space-y-3 font-sans">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-xs uppercase tracking-[0.14em] text-white/70">
                  Experience
                </dt>
                <dd className="text-right text-sm font-medium text-white">
                  {siteConfig.experienceYears}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3 border-t border-white/15 pt-3">
                <dt className="text-xs uppercase tracking-[0.14em] text-white/70">
                  Licence
                </dt>
                <dd className="text-right text-sm font-medium text-white">
                  {siteConfig.licenceLabel}{" "}
                  <span className="text-gold">
                    {siteConfig.licenceNumber}
                  </span>
                </dd>
              </div>
            </dl>
            <p className="mt-5 border-t border-white/15 pt-4 font-serif text-sm italic leading-relaxed text-white/85">
              “I walk these mountains so you can walk them with me.”
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

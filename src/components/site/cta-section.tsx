import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { SocialLinks } from "@/components/site/social";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image
        src={images.ctaSunset}
        alt="Himalayan sunset casting golden alpenglow across snow peaks"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center gap-10 px-5 py-24 text-center md:px-8 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 text-gold/90">Your adventure begins here</p>
          <h2 className="display-hero text-white">
            <span className="block text-[clamp(2.4rem,7vw,5rem)]">
              START YOUR
            </span>
            <span className="block text-[clamp(2.4rem,7vw,5rem)]">
              <span className="text-gold italic">JOURNEY.</span>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-base font-light text-white/80 md:text-lg">
            Let&apos;s explore the Himalayas together.
          </p>
        </div>

        <WhatsAppButton className="px-8 py-4 text-sm md:text-base">
          Chat on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </WhatsAppButton>

        <div className="flex flex-col items-center gap-3 border-t border-white/15 pt-8 md:flex-row md:gap-8">
          <p className="eyebrow text-white/50">Follow Purna Traveller</p>
          <span className="hidden h-px w-10 bg-white/20 md:block" />
          <SocialLinks iconClassName="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}

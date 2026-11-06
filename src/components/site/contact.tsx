import { MapPin, BadgeCheck, Mountain } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { SocialLinks } from "@/components/site/social";

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Talk directly <br /> with Purna.
                </>
              }
              description="No forms, no booking systems, no middlemen. The simplest way to arrange your Himalayan trek is a direct message. Tell Purna where you dream of walking — he'll take it from there."
            />

            <div className="mt-9">
              <WhatsAppButton className="px-8 py-4 text-sm md:text-base">
                Contact Purna on WhatsApp
              </WhatsAppButton>
              <p className="mt-3 font-sans text-xs text-stone/70">
                Prefer social? Reach Purna on any platform below — he replies
                personally.
              </p>
            </div>

            <div className="mt-8 border-t border-stone/25 pt-6">
              <p className="eyebrow mb-4 text-stone">Follow & message</p>
              <SocialLinks onDark={false} iconClassName="h-6 w-6" />
            </div>
          </div>

          {/* Right — details card */}
          <div className="relative overflow-hidden rounded-sm border border-stone/25 bg-charcoal p-8 text-ivory md:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-10 translate-x-10 rounded-full bg-gold/15 blur-3xl" />
            <p className="eyebrow text-gold/90">The Guide</p>
            <h3 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">
              {siteConfig.brand}
            </h3>
            <p className="mt-2 font-sans text-sm font-light text-white/60">
              Independent Himalayan Trekking Guide
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <dt className="eyebrow text-white/50">Location</dt>
                  <dd className="mt-1 font-serif text-xl text-white">
                    {siteConfig.location}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Mountain className="h-4 w-4" />
                </span>
                <div>
                  <dt className="eyebrow text-white/50">Experience</dt>
                  <dd className="mt-1 font-serif text-xl text-white">
                    {siteConfig.experienceYears}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div>
                  <dt className="eyebrow text-white/50">Licence</dt>
                  <dd className="mt-1 font-serif text-xl text-white">
                    {siteConfig.licenceLabel}{" "}
                    <span className="text-gold">{siteConfig.licenceNumber}</span>
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-8 border-t border-white/10 pt-6 font-serif text-lg italic leading-relaxed text-white/70">
              “The mountains are always there. The right guide makes sure you
              are too.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

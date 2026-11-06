import Image from "next/image";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-charcoal">
              <Image
                src={images.purnaAbout}
                alt="Purna, an independent Himalayan trekking guide from Nepal"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-stone/30 pt-5">
              <p className="font-serif text-xl italic text-charcoal">
                {siteConfig.brand}
              </p>
              <p className="eyebrow text-stone">
                Lic. No. {siteConfig.licenceNumber}
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 lg:pt-8">
            <SectionHeading
              eyebrow="About Purna"
              title={
                <>
                  Meet the person <br />
                  behind the journey.
                </>
              }
            />

            <div className="mt-8 space-y-6 font-sans text-base font-light leading-relaxed text-charcoal/75 md:text-[1.05rem]">
              <p>
                I am Purna — an independent, licensed trekking guide born and
                raised in the shadow of the Nepal Himalaya. For{" "}
                <span className="font-medium text-charcoal">
                  {siteConfig.experienceYears.toLowerCase()}
                </span>
                , I have led travellers from around the world into the very
                mountains I call home.
              </p>
              <p>
                I am not a large trekking agency. Every journey I lead is
                personal — planned together with you, paced for your pace, and
                shaped around what you most want to see. The routes I know best
                are the ones I have walked a hundred times: Everest, Annapurna,
                Kanchenjunga and the remote eastern valleys few guides ever
                reach.
              </p>
              <p>
                My promise is simple. Honest advice, real safety, and a genuine
                introduction to the people, culture and silence of the
                Himalaya. When you trek with me, you walk with a friend — not a
                brochure.
              </p>
            </div>

            {/* Stats row */}
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-stone/25 bg-stone/25">
              <div className="bg-cream px-4 py-5 text-center">
                <dt className="eyebrow text-stone">Experience</dt>
                <dd className="mt-2 font-serif text-3xl text-charcoal">
                  10
                </dd>
                <p className="mt-1 font-sans text-xs text-stone">Years</p>
              </div>
              <div className="bg-cream px-4 py-5 text-center">
                <dt className="eyebrow text-stone">Licence</dt>
                <dd className="mt-2 font-serif text-3xl text-charcoal">
                  {siteConfig.licenceNumber}
                </dd>
                <p className="mt-1 font-sans text-xs text-stone">
                  Trekking Guide
                </p>
              </div>
              <div className="bg-cream px-4 py-5 text-center">
                <dt className="eyebrow text-stone">Based in</dt>
                <dd className="mt-2 font-serif text-3xl text-charcoal">
                  Nepal
                </dd>
                <p className="mt-1 font-sans text-xs text-stone">Himalaya</p>
              </div>
            </dl>

            <div className="mt-9">
              <WhatsAppButton className="px-7 py-3.5 text-sm">
                Plan a Trek with Purna
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

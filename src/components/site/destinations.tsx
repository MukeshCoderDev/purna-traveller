"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mountain, Clock, Gauge, Calendar, MapPin } from "lucide-react";
import { destinations, type Destination } from "@/lib/content";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const difficultyColor: Record<Destination["difficulty"], string> = {
  Moderate: "text-moss bg-moss/10",
  Challenging: "text-gold bg-gold/10",
  Strenuous: "text-red-700 bg-red-50",
};

function DestCard({
  d,
  onOpen,
}: {
  d: Destination;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block h-[520px] w-full overflow-hidden rounded-sm bg-charcoal text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <Image
        src={d.cardImage}
        alt={`${d.name} — ${d.tagline}`}
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 24vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 overlay-dark" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow mb-2 text-gold">{d.tagline}</p>
        <h3 className="font-serif text-3xl font-medium text-white md:text-4xl">
          {d.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm font-light text-white/85">
          {d.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-white">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal">
        <Mountain className="h-4 w-4 text-white transition-colors duration-500 group-hover:text-charcoal" />
      </span>
    </button>
  );
}

function DestDetail({ d }: { d: Destination }) {
  return (
    <div className="space-y-8">
      {/* Hero image */}
      <div className="relative -mx-1 h-64 w-full overflow-hidden rounded-sm md:h-80">
        <Image
          src={d.heroImage}
          alt={`${d.name} Himalaya`}
          fill
          sizes="(max-width: 768px) 90vw, 720px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="eyebrow text-gold/90">{d.tagline}</p>
          <h3 className="font-serif text-4xl text-white">{d.name}</h3>
        </div>
      </div>

      {/* Overview */}
      <div>
        <p className="eyebrow mb-3 text-gold">Overview</p>
        <p className="font-sans text-base font-light leading-relaxed text-stone">
          {d.description}
        </p>
      </div>

      {/* Facts grid */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-stone/25 bg-stone/25">
        <Fact icon={<Mountain className="h-4 w-4" />} label="Altitude" value={d.elevation} />
        <Fact icon={<Clock className="h-4 w-4" />} label="Duration" value={d.duration} />
        <Fact icon={<Gauge className="h-4 w-4" />} label="Difficulty" value={d.difficulty} />
        <Fact icon={<Calendar className="h-4 w-4" />} label="Best Season" value={d.bestSeason} />
      </div>

      {/* Highlights */}
      <div>
        <p className="eyebrow mb-4 text-gold">Highlights</p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {d.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 font-sans text-sm text-charcoal"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Routes */}
      <div>
        <p className="eyebrow mb-4 text-gold">Trekking Routes</p>
        <div className="space-y-3">
          {d.routes.map((r) => (
            <div
              key={r.name}
              className="rounded-sm border border-stone/20 bg-cream p-4"
            >
              <p className="font-serif text-lg text-charcoal">{r.name}</p>
              <p className="mt-1 font-sans text-sm font-light leading-relaxed text-stone">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-sans text-xs italic text-stone/70">
          Route notes are indicative. Final itineraries are planned personally
          with Purna based on season, acclimatisation and your experience.
        </p>
      </div>

      {/* Gallery */}
      <div>
        <p className="eyebrow mb-4 text-gold">Gallery</p>
        <div className="grid grid-cols-3 gap-2">
          {d.gallery.map((g, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-sm bg-charcoal"
            >
              <Image
                src={g}
                alt={`${d.name} photograph ${i + 1}`}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry CTA */}
      <div className="rounded-sm bg-charcoal p-6 text-center">
        <p className="font-serif text-xl text-white">
          Want to trek {d.name} with Purna?
        </p>
        <p className="mt-1 font-sans text-sm text-white/60">
          Message directly to discuss dates, route and group size.
        </p>
        <div className="mt-4 flex justify-center">
          <WhatsAppButton
            message={`Hello Purna, I visited your website and would like to discuss a ${d.name} trekking experience in Nepal.`}
            className="px-6 py-3 text-sm"
          >
            Enquire about {d.name}
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-cream p-4">
      <div className="flex items-center gap-2 text-gold">
        {icon}
        <span className="eyebrow text-stone">{label}</span>
      </div>
      <p className="mt-2 font-serif text-base text-charcoal">{value}</p>
    </div>
  );
}

export function Destinations() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = destinations.find((d) => d.id === openId) ?? null;

  return (
    <section id="destinations" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="Destinations"
            title={
              <>
                Where the journeys <br /> begin.
              </>
            }
            description="Four of the great ranges I guide through — each a world of its own. Open any to explore routes, season, altitude and highlights."
          />
          <p className="hidden font-sans text-sm text-white/50 md:block">
            {destinations.length} signature ranges
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((d) => (
            <DestCard key={d.id} d={d} onOpen={() => setOpenId(d.id)} />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[92svh] w-[94vw] max-w-3xl overflow-y-auto scroll-area-ivory rounded-sm border-stone/30 bg-cream p-6 md:p-8"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{active?.name}</DialogTitle>
          </DialogHeader>
          {active && <DestDetail d={active} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

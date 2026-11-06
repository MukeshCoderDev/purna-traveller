"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

type CardProps = {
  eyebrow: string;
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
  onClick?: () => void;
  variant?: "default" | "play";
};

function FeatureCard({
  eyebrow,
  title,
  description,
  link,
  image,
  alt,
  onClick,
  variant = "default",
}: CardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block h-[440px] w-full overflow-hidden rounded-sm bg-charcoal text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 25vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 overlay-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Play button for films card */}
      {variant === "play" && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-white">
            <Play className="h-6 w-6 fill-white text-white" />
          </span>
        </div>
      )}

      {/* Text block */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow mb-2 text-gold/90">{eyebrow}</p>
        <h3 className="font-serif text-2xl font-medium text-white md:text-[1.6rem]">
          {title}
        </h3>
        <p className="mt-1.5 font-sans text-sm font-light text-white/75">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.16em] text-white/80">
          {link}
        </div>
      </div>

      {/* Circular arrow */}
      <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal">
        <ArrowUpRight className="h-4 w-4 text-white transition-colors duration-500 group-hover:text-charcoal" />
      </span>
    </button>
  );
}

export function FeatureCards() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="feature-cards"
      aria-label="Explore Purna Traveller"
      className="relative z-20 -mt-32 px-5 md:px-8"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <FeatureCard
          eyebrow="01 — The Guide"
          title="Meet Purna"
          description="A local guide with a global heart."
          link="Discover My Story"
          image={images.purnaCard}
          alt="Purna, an independent Himalayan trekking guide, in the mountains"
          onClick={() => scrollTo("about")}
        />
        <FeatureCard
          eyebrow="02 — The Mountains"
          title="Explore the Himalayas"
          description="Everest, Annapurna, Kanchenjunga & more."
          link="Explore Destinations"
          image={images.prayerFlags}
          alt="Buddhist stupa with colourful prayer flags in the Nepal Himalaya"
          onClick={() => scrollTo("destinations")}
        />
        <FeatureCard
          eyebrow="03 — The Stories"
          title="Purna's Mountain Journal"
          description="Stories, guides and real experiences."
          link="Read the Journal"
          image={images.village}
          alt="A Himalayan mountain village and lodge in Nepal"
          onClick={() => scrollTo("journal")}
        />
        <FeatureCard
          eyebrow="04 — The Films"
          title="Watch Purna's Films"
          description="Real mountain experiences on YouTube."
          link="Watch Videos"
          image={images.filmCard}
          alt="Cinematic Himalayan mountain ridge at golden hour"
          variant="play"
          onClick={() => scrollTo("videos")}
        />
      </div>
    </section>
  );
}

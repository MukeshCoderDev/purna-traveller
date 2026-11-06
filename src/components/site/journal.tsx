"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import {
  journalArticles,
  journalCategories,
  type JournalArticle,
} from "@/lib/content";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function ArticleCard({
  article,
  onOpen,
}: {
  article: JournalArticle;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full flex-col overflow-hidden rounded-sm border border-stone/20 bg-cream text-left transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-charcoal">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 32vw, 30vw"
          className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 font-sans text-[0.62rem] uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 font-sans text-[0.68rem] uppercase tracking-[0.12em] text-charcoal/55">
          <span>{article.date}</span>
          <span className="h-1 w-1 rounded-full bg-charcoal/40" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingTime}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-charcoal transition-colors group-hover:text-gold">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm font-light leading-relaxed text-charcoal/70">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.16em] text-gold">
          Read article
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </button>
  );
}

function ArticleDetail({
  article,
  related,
  onOpenRelated,
}: {
  article: JournalArticle;
  related: JournalArticle[];
  onOpenRelated: (slug: string) => void;
}) {
  return (
    <article>
      <div className="relative -mx-1 h-56 w-full overflow-hidden rounded-sm md:h-72">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 90vw, 720px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="rounded-full bg-gold px-3 py-1 font-sans text-[0.62rem] uppercase tracking-[0.14em] text-white">
            {article.category}
          </span>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            {article.title}
          </h2>
          <div className="mt-3 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.12em] text-white/70">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-7 space-y-5 font-serif text-lg leading-relaxed text-charcoal">
        <p className="font-sans text-base font-light leading-relaxed text-stone first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:leading-[0.8] first-letter:text-gold">
          {article.body[0]}
        </p>
        {article.body.slice(1).map((p, i) => (
          <p key={i} className="font-sans text-base font-light leading-relaxed text-stone">
            {p}
          </p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-9 border-t border-stone/20 pt-6">
          <p className="eyebrow mb-4 text-gold">Related articles</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => onOpenRelated(r.slug)}
                className="group flex items-center gap-3 rounded-sm border border-stone/20 p-3 text-left transition-colors hover:border-gold/50"
              >
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-sm bg-charcoal">
                  <Image
                    src={r.cover}
                    alt={r.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <span className="font-serif text-base leading-tight text-charcoal group-hover:text-gold">
                  {r.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col items-center gap-3 rounded-sm bg-charcoal p-6 text-center">
        <p className="font-serif text-lg italic text-white">
          Want to live these stories?
        </p>
        <WhatsAppButton className="px-6 py-3 text-sm">
          Talk to Purna about a trek
        </WhatsAppButton>
      </div>
    </article>
  );
}

export function Journal() {
  const [category, setCategory] = useState<string>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list =
      category === "All"
        ? journalArticles
        : journalArticles.filter((a) => a.category === category);
    return list;
  }, [category]);

  const [featured, ...rest] = filtered;
  const active = journalArticles.find((a) => a.slug === openSlug) ?? null;
  const related = active
    ? journalArticles
        .filter((a) => a.slug !== active.slug)
        .filter(
          (a) => a.category === active.category || true,
        )
        .slice(0, 2)
    : [];

  const categories = ["All", ...journalCategories];

  return (
    <section id="journal" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Mountain Journal"
            title={
              <>
                Stories from the <br /> high country.
              </>
            }
            description="Guides, mountain experiences and real life on the trail — written from a decade of walking the Nepal Himalaya."
          />
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-sans text-xs tracking-wide transition-all duration-300",
                  category === c
                    ? "border-gold bg-gold text-white"
                    : "border-stone/30 text-stone hover:border-gold/60 hover:text-charcoal",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {featured && (
          <button
            type="button"
            onClick={() => setOpenSlug(featured.slug)}
            className="group mt-12 grid w-full grid-cols-1 overflow-hidden rounded-sm border border-stone/20 bg-cream text-left transition-all duration-300 hover:shadow-xl hover:shadow-charcoal/10 lg:grid-cols-2"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-charcoal lg:aspect-auto lg:h-full">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-charcoal/80 px-3 py-1 font-sans text-[0.62rem] uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
                Featured · {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 font-sans text-[0.68rem] uppercase tracking-[0.12em] text-stone">
                <span>{featured.date}</span>
                <span className="h-1 w-1 rounded-full bg-stone/50" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readingTime}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal transition-colors group-hover:text-gold md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-stone">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-gold">
                Read the story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </button>
        )}

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} onOpen={() => setOpenSlug(a.slug)} />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[92svh] w-[94vw] max-w-3xl overflow-y-auto scroll-area-ivory rounded-sm border-stone/30 bg-cream p-6 md:p-8"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{active?.title}</DialogTitle>
          </DialogHeader>
          {active && (
            <ArticleDetail
              article={active}
              related={related}
              onOpenRelated={(slug) => setOpenSlug(slug)}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

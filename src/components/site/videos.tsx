"use client";

import { useState } from "react";
import { Play, ArrowUpRight, Youtube, ExternalLink } from "lucide-react";
import {
  videos,
  featuredVideo,
  ytWatchUrl,
  ytEmbedUrl,
  type Video,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/site/section-heading";
import { SocialLinks } from "@/components/site/social";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

function VideoGridCard({
  video,
  onPlay,
}: {
  video: Video;
  onPlay: () => void;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-dark-charcoal transition-colors duration-300 hover:border-gold/40">
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play: ${video.title}`}
        className="group/card relative aspect-video w-full overflow-hidden bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {/* Plain img — YouTube thumbnails are already optimised by YouTube's CDN */}
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-charcoal/40 backdrop-blur-md transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-[#FF0000] group-hover/card:border-[#FF0000] md:h-14 md:w-14">
          <Play className="h-4 w-4 fill-white text-white transition-colors duration-500 md:h-5 md:w-5" />
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-charcoal/70 px-2 py-0.5 text-[0.6rem] font-medium text-white backdrop-blur-sm">
          <Youtube className="h-3 w-3 text-[#FF0000]" />
          YouTube
        </span>
      </button>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-serif text-base font-medium leading-snug text-white transition-colors group-hover:text-gold">
          {video.title}
        </h3>
        <a
          href={ytWatchUrl(video.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 self-start font-sans text-[0.7rem] uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-gold"
        >
          Watch on YouTube
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function Videos() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active =
    [featuredVideo, ...videos].find((v) => v.youtubeId === activeId) ?? null;

  return (
    <section id="videos" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="Videos"
            title={
              <>
                The Himalaya, <br /> in motion.
              </>
            }
            description="Real trekking films from Purna's YouTube channel — Kanchenjunga, Makalu and the remote east of Nepal. Tap any film to play."
          />
          <a
            href={siteConfig.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.14em] text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            <Youtube className="h-4 w-4 text-[#FF0000]" />
            {siteConfig.youtubeHandle}
          </a>
        </div>

        {/* Featured */}
        <button
          type="button"
          onClick={() => setActiveId(featuredVideo.youtubeId)}
          className="group relative mt-12 block h-[44svh] min-h-[320px] w-full overflow-hidden rounded-sm bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:h-[56svh]"
        >
          <img
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
          {/* Play button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-charcoal/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF0000] group-hover:bg-[#FF0000] md:h-24 md:w-24">
              <Play className="h-7 w-7 fill-white text-white md:h-9 md:w-9" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-center md:p-10">
            <p className="eyebrow text-gold/90">Featured film</p>
            <h3 className="mx-auto mt-3 max-w-2xl font-serif text-2xl text-white md:text-4xl">
              {featuredVideo.title}
            </h3>
            <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-white">
              <Play className="h-3.5 w-3.5 fill-white" />
              Play film
            </span>
          </div>
        </button>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoGridCard key={v.id} video={v} onPlay={() => setActiveId(v.youtubeId)} />
          ))}
        </div>

        {/* Channel CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-10 text-center">
          <p className="font-serif text-2xl text-white md:text-3xl">
            Subscribe to the journey.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={siteConfig.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#cc0000]"
            >
              <Youtube className="h-5 w-5" />
              Visit {siteConfig.youtubeHandle}
            </a>
            <SocialLinks iconClassName="h-5 w-5" />
          </div>
          <p className="font-sans text-xs text-white/40">
            All films are Purna&apos;s real uploads on his official channel.
          </p>
        </div>
      </div>

      {/* Video player modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActiveId(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="w-[94vw] max-w-4xl overflow-hidden rounded-sm border-white/10 bg-charcoal p-0"
        >
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
            <p className="line-clamp-1 font-serif text-sm text-white/90">
              {active?.title}
            </p>
            <a
              href={active ? ytWatchUrl(active.youtubeId) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 font-sans text-[0.7rem] uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-gold"
            >
              YouTube
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative aspect-video w-full bg-black">
            {active && (
              <iframe
                src={ytEmbedUrl(active.youtubeId)}
                title={active.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerated-sender; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
          <div className="px-5 py-3 text-center">
            <a
              href={active ? ytWatchUrl(active.youtubeId) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-gold"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Watch on YouTube
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

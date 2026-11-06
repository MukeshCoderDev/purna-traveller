# Purna Traveller — Himalayan Trekking Guide Website

A premium, cinematic editorial website for **Purna Traveller**, an independent
Himalayan trekking guide in Nepal (10 years of experience, Licence No. 22043).

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui**.

---

## Quick start (VS Code)

1. **Unzip** this folder and open it in VS Code (`File → Open Folder`).
2. Open the integrated terminal (`Ctrl + ` `` ` `` ` or `View → Terminal`).
3. Install dependencies (use **either**):
   ```bash
   npm install        # recommended if you use Node
   # or
   bun install        # faster, if you have Bun installed
   ```
4. Start the dev server:
   ```bash
   npm run dev        # or: bun run dev
   ```
5. Open **http://localhost:3000** in your browser.

> Requires Node.js 18.18+ (or Bun). The dev server runs on port 3000.

---

## What's wired in (all real)

- **Purna's real photos** — 10 photographs in `public/` (card, About portrait, gallery).
- **Real YouTube videos** — 7 films from the `@purnatraveller` channel with a modal player.
- **Live WhatsApp** — all CTAs open `wa.me/9779842652465` with a pre-filled message.
- **Social links** — YouTube, Instagram, Facebook, TikTok (all `@purnatraveller`).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts (Cormorant Garamond + Inter), SEO
│   ├── page.tsx          # Homepage — all sections assembled here
│   ├── globals.css       # Design system: brand colours, typography
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── site/             # Purna-specific components
│   │   ├── navbar.tsx          # Sticky nav + mobile drawer
│   │   ├── hero.tsx            # Cinematic hero
│   │   ├── feature-cards.tsx   # 4 editorial cards
│   │   ├── about.tsx           # Meet Purna biography
│   │   ├── destinations.tsx    # 4 destinations + detail dialogs
│   │   ├── journal.tsx         # Blog: featured + grid + article dialogs
│   │   ├── videos.tsx          # Real YouTube videos + modal player
│   │   ├── gallery.tsx         # Masonry gallery + lightbox
│   │   ├── cta-section.tsx     # "Start Your Journey" closing CTA
│   │   ├── contact.tsx         # Contact section
│   │   ├── footer.tsx          # Footer
│   │   ├── whatsapp-button.tsx # Central WhatsApp CTA + floating button
│   │   ├── social.tsx          # Social media icons
│   │   └── section-heading.tsx # Reusable editorial heading
│   └── ui/               # shadcn/ui component library
└── lib/
    ├── site-config.ts    # Brand info, WhatsApp number, social links, licence
    ├── content.ts        # Destinations, journal articles, YouTube videos
    ├── images.ts         # All photography (Purna photos + Himalayan stock)
    └── utils.ts          # cn() helper

public/
├── purna-meet.jpg        # Purna photo — "Meet Purna" card
├── purna-about.jpg       # Purna photo — About section portrait
├── purna-g1.jpg … purna-g8.jpg   # 8 Purna photos — Gallery
├── logo.svg
└── robots.txt
```

---

## Where to edit things (the 3 files that matter)

### 1. `src/lib/site-config.ts` — brand & contact info
- **WhatsApp number** (`whatsappNumber`) — currently `9779842652465` (+977 9842652465)
- Social links (YouTube, Instagram, Facebook, TikTok)
- Licence number, experience years, brand name

### 2. `src/lib/content.ts` — all editable content
- **Destinations** (Everest, Annapurna, Kanchenjunga, Makalu)
- **Journal articles** — titles, excerpts, body text, categories
- **YouTube videos** — video IDs, titles (thumbnails auto-pulled from YouTube)

### 3. `src/lib/images.ts` — all photography
- Purna's photos (`/purna-meet.jpg`, `/purna-about.jpg`, `/purna-g1…g8.jpg`)
- Himalayan stock photos (CDN URLs)
- Gallery image collection

To swap a Purna photo: replace the file in `public/` (keep the same name) or
update the path in `images.ts`.

---

## Updating YouTube videos

Videos are in `src/lib/content.ts` under the `videos` array. Each entry needs a
`youtubeId` (from the video URL `?v=...`). Titles/thumbnails come from YouTube.

## Tech notes
- **Fonts**: Cormorant Garamond (display serif) + Inter (body) via `next/font/google`.
- **Colours**: brand palette as Tailwind theme tokens in `globals.css`
  (`charcoal`, `gold`, `ivory`, `cream`, `stone`, `moss`).
- **SEO**: per-page metadata, Open Graph, JSON-LD, sitemap, robots.txt.
- **No backend required** — the site is fully static content.

---

© Purna Traveller. Trekking Guide Licence No. 22043 · Nepal.
# purna-traveller

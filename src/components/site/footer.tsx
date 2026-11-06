"use client";

import { NAV_LINKS, siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/site/social";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

function MountainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 36L16 10l8 13 6-9 16 22H2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.5 14.5l2.5-4 3 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="36" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <MountainLogo className="h-8 w-9 text-gold" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-[0.16em] text-white">
                  {siteConfig.brand.toUpperCase()}
                </span>
                <span className="eyebrow mt-1 text-[0.55rem] text-white/45">
                  {siteConfig.brandTagline}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-white/60">
              An independent, licensed Himalayan trekking guide sharing the real
              Nepal — one mountain, one traveller, one journey at a time.
            </p>
            <div className="mt-6">
              <WhatsAppButton className="text-xs">Chat on WhatsApp</WhatsAppButton>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-gold/80">Explore</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="font-sans text-sm text-white/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5 text-gold/80">The Guide</p>
            <dl className="space-y-3 font-sans text-sm text-white/65">
              <div className="flex justify-between border-b border-white/8 pb-3">
                <dt className="text-white/45">Location</dt>
                <dd className="text-white">{siteConfig.location}</dd>
              </div>
              <div className="flex justify-between border-b border-white/8 pb-3">
                <dt className="text-white/45">Experience</dt>
                <dd className="text-white">{siteConfig.experienceYears}</dd>
              </div>
              <div className="flex justify-between border-b border-white/8 pb-3">
                <dt className="text-white/45">Licence</dt>
                <dd className="text-white">{siteConfig.licenceNumber}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <p className="eyebrow mb-3 text-gold/80">Follow</p>
              <SocialLinks iconClassName="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.brand}. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            Trekking Guide Licence No.{" "}
            <span className="text-gold/80">{siteConfig.licenceNumber}</span> ·
            Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/site/social";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { cn } from "@/lib/utils";

function MountainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 36L16 10l8 13 6-9 16 22H2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14.5l2.5-4 3 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // track active section
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      const y = window.scrollY + 120;
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-gradient-to-b from-charcoal/60 to-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 md:px-8">
        {/* Left — logo + brand */}
        <a
          href="#home"
          onClick={(e) => onNavClick(e, "#home")}
          className="flex shrink-0 items-center gap-3 text-white"
        >
          <MountainLogo className="h-8 w-9 text-gold" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-[0.16em] md:text-xl">
              {siteConfig.brand.toUpperCase()}
            </span>
            <span className="eyebrow mt-1 text-[0.55rem] text-white/70 md:text-[0.6rem]">
              {siteConfig.brandTagline}
            </span>
          </span>
        </a>

        {/* Centre — links (desktop) */}
        <ul className="hidden flex-1 items-center justify-center gap-5 whitespace-nowrap lg:flex xl:gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className={cn(
                    "group relative whitespace-nowrap font-sans text-[0.8rem] font-medium tracking-wide transition-colors duration-300 xl:text-[0.82rem]",
                    isActive ? "text-white" : "text-white/85 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right — socials + WhatsApp */}
        <div className="flex shrink-0 items-center gap-4">
          <SocialLinks
            className="hidden xl:flex"
            iconClassName="h-[1.05rem] w-[1.05rem]"
          />
          <WhatsAppButton className="hidden text-[0.78rem] sm:inline-flex">
            Chat on WhatsApp
          </WhatsAppButton>
          {/* Mobile trigger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-charcoal px-7 py-7 shadow-2xl transition-transform duration-400 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <MountainLogo className="h-7 w-8 text-gold" />
              <span className="font-serif text-base font-semibold tracking-[0.16em]">
                {siteConfig.brand.toUpperCase()}
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className="block border-b border-white/8 py-4 font-serif text-2xl text-white/85 transition-colors hover:text-gold"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  <span className="mr-3 text-xs text-gold/70">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6">
            <SocialLinks iconClassName="h-5 w-5" />
            <WhatsAppButton className="w-full justify-center">
              Chat on WhatsApp
            </WhatsAppButton>
            <p className="eyebrow text-[0.55rem] text-white/40">
              {siteConfig.experienceYears} · Lic. No. {siteConfig.licenceNumber}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

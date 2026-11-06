"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site-config";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Variant = "solid" | "ghost-dark" | "outline-light";

type Props = {
  message?: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  label?: string;
};

/**
 * Centralised WhatsApp CTA.
 * Uses the single WHATSAPP_NUMBER config. When no real number is
 * configured yet, it shows an honest toast instead of inventing one.
 */
export function WhatsAppButton({
  message,
  variant = "solid",
  className,
  children,
  label,
}: Props) {
  const href = whatsappLink(message);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      e.preventDefault();
      toast.info("WhatsApp number coming soon", {
        description:
          "Purna's direct number will be added shortly. Reach him on YouTube, Instagram or Facebook in the meantime.",
      });
    }
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";
  const styles: Record<Variant, string> = {
    solid:
      "bg-[#25D366] text-white px-6 py-3 text-sm hover:bg-[#1ebe5a] shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:shadow-[#25D366]/30",
    "ghost-dark":
      "bg-charcoal/40 backdrop-blur-md text-white border border-white/25 px-6 py-3 text-sm hover:bg-charcoal/60 hover:border-white/40",
    "outline-light":
      "bg-transparent text-white border border-white/40 px-6 py-3 text-sm hover:bg-white/10 hover:border-white/70",
  };

  return (
    <a
      href={href ?? "#"}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={label ?? "Chat with Purna on WhatsApp"}
      className={cn(base, styles[variant], className)}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.821 9.821 0 001.595 5.392l-.999 3.648 3.893-1.739zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      {children}
    </a>
  );
}

/** Floating WhatsApp action button, always accessible.
 * Hides near the very top so it never overlaps hero content on mobile. */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const href = whatsappLink();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href) {
      e.preventDefault();
      toast.info("WhatsApp number coming soon", {
        description:
          "Purna's direct number will be added shortly. Reach him on YouTube, Instagram or Facebook in the meantime.",
      });
    }
  };
  return (
    <a
      href={href ?? "#"}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with Purna on WhatsApp"
      style={{ opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none" }}
      className="wa-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-all duration-500 hover:scale-105 md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.821 9.821 0 001.595 5.392l-.999 3.648 3.893-1.739zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
}

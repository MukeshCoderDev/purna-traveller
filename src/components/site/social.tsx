import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.07-1.09-2.02-1.33-3.33-3.64-3.42-6.06-.02-.25-.02-.5-.02-.74.05-1.03.31-2.06.81-2.96 1.02-1.84 2.96-3.16 5.06-3.39.23-.03.46-.04.69-.04v4.03c-.46-.16-.94-.26-1.43-.26-1.14-.02-2.24.65-2.79 1.65-.34.61-.46 1.33-.39 2.03.1 1.04.69 2.01 1.58 2.58.97.62 2.26.69 3.3.24.92-.39 1.59-1.25 1.86-2.21.1-.32.13-.65.13-.98.02-4.09 0-8.17.01-12.26 0-.1.01-.2.02-.3z" />
    </svg>
  );
}

export const socialIcons = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
};

export const socialLinks = [
  { key: "youtube" as const, href: siteConfig.social.youtube, label: "YouTube" },
  { key: "instagram" as const, href: siteConfig.social.instagram, label: "Instagram" },
  { key: "facebook" as const, href: siteConfig.social.facebook, label: "Facebook" },
  { key: "tiktok" as const, href: siteConfig.social.tiktok, label: "TikTok" },
];

export function SocialLinks({
  className,
  iconClassName = "h-4 w-4",
  onDark = true,
}: {
  className?: string;
  iconClassName?: string;
  onDark?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map(({ key, href, label }) => {
        const Icon = socialIcons[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "transition-colors duration-300 hover:text-gold",
              onDark ? "text-white/80" : "text-stone hover:text-gold",
            )}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}

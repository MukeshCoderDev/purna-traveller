import type { MetadataRoute } from "next";

const SITE_URL = "https://purnatraveller.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = [
    "",
    "#about",
    "#destinations",
    "#journal",
    "#videos",
    "#gallery",
    "#contact",
  ];
  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: s === "" ? 1 : 0.7,
  }));
}

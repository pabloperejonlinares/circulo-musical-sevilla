import type { MetadataRoute } from "next";
import { CLASES } from "@/data";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = getSiteUrl();
  const now = new Date();
  const home = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };
  const classPages = CLASES.map(({ href }) => ({
    url: `${SITE_URL}${href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const contactPage = {
    url: `${SITE_URL}/acerca-de`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  };
  return [home, contactPage, ...classPages];
}

import type { MetadataRoute } from "next";
import { CLASES } from "@/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tu-dominio.com";

export default function sitemap(): MetadataRoute.Sitemap {
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
  return [home, ...classPages];
}

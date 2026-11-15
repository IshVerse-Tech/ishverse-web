/**
 * Module: Sitemap
 * Context: SEO — sitemap.xml for search engine crawlers.
 *
 * One sitemap for the company site and every product subdomain (the same
 * file is served on each host; middleware skips paths with a dot). Localized
 * pages list their es/fr/pt alternates; pages whose canonical URL is
 * locale-free (legal, Gospel and Rize pages) are listed once.
 * Daily verse pages (/gospel/verse/[date]) are unbounded and not listed.
 *
 * Exports:
 *   default — sitemap entries
 */

import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

type Entry = {
  host: string;
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  localized: boolean;
};

const ENTRIES: Entry[] = [
  { host: "ishverse.com", path: "", changeFrequency: "monthly", priority: 1, localized: true },
  {
    host: "ishverse.com",
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },
  {
    host: "ishverse.com",
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },

  {
    host: "gospel.ishverse.com",
    path: "",
    changeFrequency: "weekly",
    priority: 1,
    localized: false,
  },
  {
    host: "gospel.ishverse.com",
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.5,
    localized: false,
  },
  {
    host: "gospel.ishverse.com",
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },
  {
    host: "gospel.ishverse.com",
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },

  { host: "rize.ishverse.com", path: "", changeFrequency: "weekly", priority: 1, localized: false },
  {
    host: "rize.ishverse.com",
    path: "/pricing",
    changeFrequency: "monthly",
    priority: 0.8,
    localized: false,
  },
  {
    host: "rize.ishverse.com",
    path: "/changelog",
    changeFrequency: "weekly",
    priority: 0.6,
    localized: false,
  },
  {
    host: "rize.ishverse.com",
    path: "/case-study",
    changeFrequency: "monthly",
    priority: 0.7,
    localized: false,
  },
  {
    host: "rize.ishverse.com",
    path: "/support",
    changeFrequency: "monthly",
    priority: 0.5,
    localized: false,
  },

  {
    host: "workout.ishverse.com",
    path: "",
    changeFrequency: "monthly",
    priority: 0.9,
    localized: true,
  },
  {
    host: "workout.ishverse.com",
    path: "/support",
    changeFrequency: "monthly",
    priority: 0.5,
    localized: true,
  },
  {
    host: "workout.ishverse.com",
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },

  {
    host: "bloom.ishverse.com",
    path: "",
    changeFrequency: "monthly",
    priority: 0.9,
    localized: true,
  },
  {
    host: "bloom.ishverse.com",
    path: "/support",
    changeFrequency: "monthly",
    priority: 0.5,
    localized: true,
  },
  {
    host: "bloom.ishverse.com",
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
    localized: false,
  },
];

const url = (host: string, locale: string, path: string) =>
  `https://${host}${locale === routing.defaultLocale ? "" : `/${locale}`}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return ENTRIES.map(({ host, path, changeFrequency, priority, localized }) => ({
    url: url(host, routing.defaultLocale, path),
    lastModified: now,
    changeFrequency,
    priority,
    ...(localized && {
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, url(host, l, path)])),
      },
    }),
  }));
}

/**
 * Module: Social metadata
 * Context: SEO — every page shares with its own title, description, URL and
 * product image instead of inheriting the company card from the root layout.
 *
 * Next.js merges metadata shallowly: a page without `openGraph`/`twitter`
 * inherits the root layout's company values, and a page that sets
 * `openGraph` but not `twitter` still inherits the company `twitter` card.
 * `withSocial` fills both from the page's own title, description and
 * canonical URL, keeping any fields the page already sets.
 *
 * Exports:
 *   ProductKey  — which site's preset to use
 *   withSocial  — page metadata + complete openGraph/twitter
 */

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { bloomConfig } from "@/lib/bloom";
import { workoutConfig } from "@/lib/workout";
import { gospelConfig } from "@/lib/gospel";
import { rizeConfig } from "@/lib/rize";

export type ProductKey = "company" | "bloom" | "workout" | "gospel" | "rize";

type Preset = {
  siteName: string;
  origin: string;
  image: { url: string; width: number; height: number };
  card: "summary" | "summary_large_image";
};

const PRESETS: Record<ProductKey, Preset> = {
  company: {
    siteName: siteConfig.name,
    origin: siteConfig.url,
    image: { url: `${siteConfig.url}/api/og/company`, width: 1200, height: 630 },
    card: "summary_large_image",
  },
  bloom: {
    siteName: bloomConfig.name,
    origin: bloomConfig.url,
    image: { url: `${bloomConfig.url}/bloom/og.jpg`, width: 1200, height: 630 },
    card: "summary_large_image",
  },
  workout: {
    siteName: workoutConfig.name,
    origin: workoutConfig.url,
    image: { url: `${workoutConfig.url}/workout/icon.png`, width: 1024, height: 1024 },
    card: "summary",
  },
  gospel: {
    siteName: gospelConfig.name,
    origin: gospelConfig.url,
    image: { url: `${gospelConfig.url}/api/og/gospel`, width: 1200, height: 630 },
    card: "summary_large_image",
  },
  rize: {
    siteName: rizeConfig.name,
    origin: rizeConfig.url,
    // Served from the company host: rize.ishverse.com forwards /api/* to the
    // IshRize app (next.config.ts), so the image would 404 there.
    image: { url: `${siteConfig.url}/api/og/rize`, width: 1200, height: 630 },
    card: "summary_large_image",
  },
};

const text = (v: unknown): string | undefined => {
  if (typeof v === "string") return v;
  if (v && typeof v === "object") {
    const o = v as { absolute?: string; default?: string };
    return o.absolute ?? o.default;
  }
  return undefined;
};

export function withSocial(
  product: ProductKey,
  meta: Metadata,
  options: { locale?: string; type?: "website" | "article" } = {},
): Metadata {
  const p = PRESETS[product];
  const title = text(meta.title);
  const description = meta.description ?? undefined;
  const canonical = meta.alternates?.canonical;
  const rawUrl = typeof canonical === "string" ? canonical : (canonical?.toString() ?? p.origin);
  const url = rawUrl.startsWith("/") ? `${p.origin}${rawUrl === "/" ? "" : rawUrl}` : rawUrl;

  const og = {
    type: options.type ?? "website",
    title,
    description,
    url,
    siteName: p.siteName,
    ...(options.locale ? { locale: options.locale } : {}),
    images: [{ ...p.image, alt: p.siteName }],
    ...(meta.openGraph ?? {}),
  } as NonNullable<Metadata["openGraph"]>;

  const ogImages = (og as { images?: unknown }).images;
  const first = Array.isArray(ogImages) ? ogImages[0] : ogImages;
  const imageUrl =
    typeof first === "string"
      ? first
      : ((first as { url?: string } | undefined)?.url ?? p.image.url);

  return {
    ...meta,
    openGraph: og,
    twitter: {
      card: p.card,
      title: (og as { title?: string }).title ?? title,
      description: (og as { description?: string }).description ?? description,
      images: [imageUrl],
      ...(meta.twitter ?? {}),
    } as NonNullable<Metadata["twitter"]>,
  };
}

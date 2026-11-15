/**
 * Module: Site Configuration
 * Context: See DESIGN.md §1 (brand essence) + §9 (voice & copy).
 *
 * Central constants for site metadata, the product ecosystem, and contact
 * addresses. Keeping these in one place avoids scattering brand strings across
 * components and makes SEO/metadata edits a single-file change.
 *
 * Exports:
 *   siteConfig — name, wordmark, tagline, description, url, contact, products
 *   Product    — the shape of one ecosystem product entry
 */

/** `id` keys this product's copy in `company.products` (`<id>Domain`, …). */
export type Product = {
  id: "gospel" | "rize" | "workout" | "bloom";
  name: string;
  wordmark: { strong: string; light: string };
  domain: string;
  oneLiner: string;
  href: string;
  path: string;
  status: "live" | "soon";
};

export const siteConfig = {
  name: "IshVerse",
  wordmark: { strong: "ISH", light: "VERSE" },
  tagline: "Systems for Intentional Growth.",
  description:
    "IshVerse builds discipline systems — one for each domain of life. A man, in command of his world.",
  url: "https://ishverse.com",
  contactEmail: "support@ishverse.com",
  supportEmail: "support@ishverse.com",
  products: [
    {
      id: "gospel",
      name: "IshGospel",
      wordmark: { strong: "ISH", light: "GOSPEL" },
      domain: "Spiritual discipline",
      oneLiner: "A structured system for spiritual formation.",
      href: "https://gospel.ishverse.com",
      path: "/gospel",
      status: "live",
    },
    {
      id: "rize",
      name: "IshRize",
      wordmark: { strong: "ISH", light: "RIZE" },
      domain: "Scheduling & attendance",
      oneLiner: "Live, clash-free timetables and QR attendance for institutions.",
      href: "https://rize.ishverse.com",
      path: "/rize",
      status: "live",
    },
    {
      id: "workout",
      name: "ISH Workout",
      wordmark: { strong: "ISH", light: "WORKOUT" },
      domain: "Physical discipline",
      oneLiner: "A daily system for movement, fitness, and personal habits.",
      href: "https://workout.ishverse.com",
      path: "/workout",
      status: "soon",
    },
    {
      id: "bloom",
      name: "IshBloom",
      wordmark: { strong: "ISH", light: "BLOOM" },
      domain: "Calm puzzle play",
      oneLiner: "A hexagonal puzzle game for focus and calm.",
      href: "https://bloom.ishverse.com",
      path: "/bloom",
      status: "live",
    },
  ] as Product[],
} as const;

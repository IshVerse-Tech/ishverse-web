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

export type Product = {
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
      name: "IshGospel",
      wordmark: { strong: "ISH", light: "GOSPEL" },
      domain: "Spiritual discipline",
      oneLiner: "A structured system for spiritual formation.",
      href: "https://gospel.ishverse.com",
      path: "/gospel",
      status: "live",
    },
    {
      name: "IshRize",
      wordmark: { strong: "ISH", light: "RIZE" },
      domain: "Scheduling & attendance",
      oneLiner: "Live, clash-free timetables and QR attendance for institutions.",
      href: "https://rize.ishverse.com",
      path: "/rize",
      status: "live",
    },
    {
      name: "ISH Workout",
      wordmark: { strong: "ISH", light: "WORKOUT" },
      domain: "Physical discipline",
      oneLiner: "A daily system for movement, fitness, and personal habits.",
      href: "https://workout.ishverse.com",
      path: "/workout",
      status: "soon",
    },
  ] as Product[],
} as const;

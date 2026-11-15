/**
 * Module: Home
 * Context: See DESIGN.md §10 — page blueprint. Localized (Phase 4).
 *
 * Composes the full company landing page: Hero (VerseGlobe) · Ecosystem ·
 * Philosophy (dark story band) · Principles · Contact, between the shared
 * header and footer, plus Organization structured data (logo for search).
 *
 * Exports:
 *   default — Home page (server component)
 */

import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Philosophy } from "@/components/sections/philosophy";
import { Principles } from "@/components/sections/principles";
import { Contact } from "@/components/sections/contact";
import { siteConfig } from "@/lib/site";

// Organization data so search engines associate the ribbon mark with
// IshVerse (logo) and list each product site as part of the company.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/ishverse-logo-512.png`,
  email: siteConfig.supportEmail,
  sameAs: siteConfig.products.map((p) => p.href),
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Ecosystem />
        <Philosophy />
        <Principles />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

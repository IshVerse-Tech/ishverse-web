/**
 * Module: RizeSupportPage
 * Context: See AGENTS.md — product support/contact page for rize.ishverse.com.
 *
 * A simple form (name, email, message) that posts to /api/support. The API
 * route forwards the submission to support@ishverse.com via Resend.
 *
 * Exports:
 *   generateMetadata — localized SEO metadata (per-locale canonical)
 *   default          — page component
 */

import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RizeSiteHeader } from "@/components/rize/site-header";
import { RizeSiteFooter } from "@/components/rize/site-footer";
import { RizeSupportForm } from "@/components/rize/sections/support-form";
import { rizeConfig } from "@/lib/rize";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rize.support" });
  return withSocial(
    "rize",
    {
      title: `${t("metaTitle")} — ${rizeConfig.name}`,
      description: t("description"),
      alternates: {
        canonical: `${rizeConfig.url}${locale === "en" ? "" : `/${locale}`}/support`,
      },
    },
    { locale: locale },
  );
}

export default async function RizeSupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <RizeSiteHeader />
      <main id="main" className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
        <RizeSupportForm />
      </main>
      <RizeSiteFooter />
    </>
  );
}

/**
 * Module: RizeSupportPage
 * Context: See DESIGN.md §13 — product support pages (same pattern as
 * Workout and Bloom). Localized help topics and a mailto action; no form or
 * email service, so nothing is sent from the site itself.
 *
 * Exports:
 *   generateMetadata — localized SEO metadata
 *   default          — RizeSupportPage
 */
import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { RizeSiteHeader } from "@/components/rize/site-header";
import { RizeSiteFooter } from "@/components/rize/site-footer";
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
      title: `${t("eyebrow")} — ${rizeConfig.name}`,
      description: t("intro"),
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
  const t = await getTranslations({ locale, namespace: "rize.support" });
  return (
    <>
      <RizeSiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm text-accent-text">{rizeConfig.name}</p>
        <h1 className="mt-4 text-4xl font-bold">{t("title")}</h1>
        <p className="mt-6 text-lg text-fg-secondary">{t("intro")}</p>
        <a
          href={`mailto:${rizeConfig.contact}?subject=IshRize%20support`}
          className="mt-8 inline-block rounded-xl bg-accent px-6 py-4 text-accent-on hover:bg-accent-dark"
        >
          {t("emailAction")}
        </a>
        <p className="mt-4 text-sm">{rizeConfig.contact}</p>
        <p className="mt-6 leading-relaxed text-fg-secondary">{t("include")}</p>
        <div className="mt-12 space-y-8">
          {[0, 1, 2].map((i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold">{t(`help.${i}.title`)}</h2>
              <p className="mt-3 leading-relaxed text-fg-secondary">{t(`help.${i}.body`)}</p>
            </section>
          ))}
        </div>
      </main>
      <RizeSiteFooter />
    </>
  );
}

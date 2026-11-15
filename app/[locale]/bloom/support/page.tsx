/**
 * Module: BloomSupport
 * Context: See DESIGN.md §13 — product pages.
 * Localized help and contact details for IshBloom players.
 * Exports: generateMetadata, BloomSupport
 */
import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { bloomConfig } from "@/lib/bloom";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bloom" });
  return withSocial(
    "bloom",
    {
      title: `IshBloom — ${t("support")}`,
      description: t("supportIntro"),
      alternates: {
        canonical: `${bloomConfig.url}${locale === "en" ? "" : `/${locale}`}/support`,
      },
    },
    { locale: locale },
  );
}

export default async function BloomSupport({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bloom");
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm text-accent-text">IshBloom</p>
      <h1 className="mt-4 text-4xl font-bold">{t("supportTitle")}</h1>
      <p className="mt-6 text-lg text-fg-secondary">{t("supportIntro")}</p>
      <a
        href={`mailto:${bloomConfig.support}?subject=IshBloom%20support`}
        className="mt-8 inline-block rounded-xl bg-accent px-6 py-4 text-accent-on hover:bg-accent-dark"
      >
        {t("emailAction")}
      </a>
      <p className="mt-4 text-sm">{bloomConfig.support}</p>
      <p className="mt-6 leading-relaxed text-fg-secondary">{t("include")}</p>
      <div className="mt-12 space-y-8">
        {[0, 1, 2, 3].map((i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold">{t(`help.${i}.title`)}</h2>
            <p className="mt-3 leading-relaxed text-fg-secondary">{t(`help.${i}.body`)}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

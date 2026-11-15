/**
 * Module: BloomHome
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — product pages.
 * Localized marketing page, canonical on the Bloom subdomain.
 * Exports: generateMetadata, BloomHome
 */
import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BloomLanding } from "@/components/bloom/landing";
import { bloomConfig } from "@/lib/bloom";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bloom" });
  const url = bloomConfig.url + (locale === "en" ? "/" : `/${locale}`);
  const image = `${bloomConfig.url}/bloom/og.jpg`;
  return withSocial(
    "bloom",
    {
      title: `IshBloom — ${t("title")}`,
      description: t("description"),
      alternates: {
        canonical: url,
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, bloomConfig.url + (l === "en" ? "/" : `/${l}`)]),
          ),
          "x-default": `${bloomConfig.url}/`,
        },
      },
      openGraph: {
        title: "IshBloom",
        description: t("description"),
        url,
        siteName: "IshBloom",
        images: [{ url: image, width: 1200, height: 630, alt: "IshBloom" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "IshBloom",
        description: t("description"),
        images: [image],
      },
    },
    { locale: locale },
  );
}

export default async function BloomHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BloomLanding />;
}

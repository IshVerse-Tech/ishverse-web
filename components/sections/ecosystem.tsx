/**
 * Module: Ecosystem
 * Context: See DESIGN.md §10 — products section: one card per product.
 * Localized (Phase 4): builds the card strings from the message catalog.
 *
 * Exports:
 *   Ecosystem — server component
 */

import { useTranslations } from "next-intl";
import { Section } from "../ui/section";
import { Reveal } from "../reveal";
import { ProductCard, type LocalizedProduct } from "../product-card";
import { siteConfig } from "@/lib/site";

export function Ecosystem() {
  const t = useTranslations("company.products");

  const products: LocalizedProduct[] = siteConfig.products.map((p) => ({
    name: p.name,
    href: p.href,
    path: p.path,
    availability: t(
      p.name === "ISH Workout"
        ? "workoutAvailability"
        : p.name === "IshGospel"
          ? "gospelAvailability"
          : "rizeAvailability",
    ),
    visit: t("visit", { name: p.name }),
    domain:
      p.name === "ISH Workout"
        ? t("workoutDomain")
        : p.name === "IshGospel"
          ? t("gospelDomain")
          : t("rizeDomain"),
    oneLiner:
      p.name === "ISH Workout"
        ? t("workoutLine")
        : p.name === "IshGospel"
          ? t("gospelLine")
          : t("rizeLine"),
  }));

  return (
    <Section id="products" className="scroll-mt-24 py-14 sm:py-24 md:py-32">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wider text-fg-secondary">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-fg-secondary">{t("sub")}</p>
      </Reveal>
      <div className="mt-8 grid auto-rows-fr gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/**
 * Module: SiteHeader
 * Context: See DESIGN.md §14 — all products are reachable from the company header.
 * Compact mobile navigation keeps preferences inside the disclosure.
 * Exports: SiteHeader
 */
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { ProductDestination } from "./product-destination";
import { siteConfig } from "@/lib/site";
export function SiteHeader() {
  const t = useTranslations("company.nav");
  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-bg/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <Link href="/" aria-label={siteConfig.name}>
          <Logo />
        </Link>
        <nav aria-label={t("menu")} className="hidden items-center gap-6 md:flex">
          <a href="#products">{t("products")}</a>
          <a href="#story">{t("story")}</a>
          <a href="#contact">{t("contact")}</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-xl bg-fg px-4 py-3 text-sm font-medium text-bg"
          >
            {t("explore")}
            <ArrowDown size={16} aria-hidden />
          </a>
        </div>
        <MobileMenu label={t("menu")}>
          <nav aria-label={t("products")} className="grid gap-2">
            <a href="#products" className="py-2 font-semibold">
              {t("explore")}
            </a>
            {siteConfig.products.map((p) => (
              <ProductDestination
                key={p.name}
                href={p.href}
                path={p.path}
                className="rounded-xl border border-divider px-4 py-3"
              >
                {p.name}
              </ProductDestination>
            ))}
            <a href="#story" className="py-2">
              {t("story")}
            </a>
            <a href="mailto:support@ishverse.com" className="break-words py-2">
              support@ishverse.com
            </a>
          </nav>
          <div className="mt-5 flex items-center justify-between border-t border-divider pt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}

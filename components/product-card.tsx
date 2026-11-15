/**
 * Module: ProductCard
 * Context: See docs/design/DESIGN-SYSTEM.md (Mobile navigation) — equal product discovery cards with explicit availability.
 * Every product has a working landing-page link, independently of app release status.
 * Exports: LocalizedProduct, ProductCard
 */
import { ArrowUpRight, BookOpen, CalendarDays, Dumbbell, Hexagon } from "lucide-react";
import type { Product } from "@/lib/site";
import { ProductDestination } from "./product-destination";
export type LocalizedProduct = {
  id: Product["id"];
  name: string;
  domain: string;
  oneLiner: string;
  href: string;
  path: string;
  availability: string;
  visit: string;
};
const icons = { gospel: BookOpen, rize: CalendarDays, workout: Dumbbell, bloom: Hexagon };

export function ProductCard({ product }: { product: LocalizedProduct }) {
  const Icon = icons[product.id];
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-divider bg-surface p-5 sm:p-8">
      <Icon size={26} className="text-accent-text" aria-hidden />
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-fg-secondary">
        {product.domain}
      </p>
      <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
      <p className="mt-4 flex-1 leading-relaxed text-fg">{product.oneLiner}</p>
      <p className="mt-6 border-t border-divider pt-4 text-sm text-gold-text">
        {product.availability}
      </p>
      <ProductDestination
        href={product.href}
        path={product.path}
        className="mt-4 inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-divider bg-bg px-4 py-3 text-sm font-medium text-accent-text"
      >
        {product.visit}
        <ArrowUpRight size={18} className="shrink-0" aria-hidden />
      </ProductDestination>
    </article>
  );
}

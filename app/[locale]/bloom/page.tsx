/**
 * Module: BloomHome
 * Context: See DESIGN.md §9 for product copy.
 * Landing page for the IshBloom iPhone game.
 * Exports: BloomHome
 */
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IshBloom for iPhone",
  description: "A hex puzzle with seven-cell Blooms, an endless mode and gem levels.",
  alternates: { canonical: "https://bloom.ishverse.com/" },
};

export default function BloomHome() {
  return (
    <>
      <Image src="/bloom/symbol.svg" alt="" width={144} height={144} />
      <p className="mt-4 text-sm text-accent-text">iPhone puzzle by IshVerse</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight">IshBloom</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-secondary">
        Fit clusters into a 61-cell garden. Fill a hex and its six neighbours to make a Bloom, clear
        space and keep playing.
      </p>
      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-divider bg-surface p-5">
          <dt className="font-semibold">Marathon</dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg-secondary">
            Play an endless run and try to beat your best score.
          </dd>
        </div>
        <div className="rounded-2xl border border-divider bg-surface p-5">
          <dt className="font-semibold">Journey</dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg-secondary">
            Collect gems through Blooms across 12 levels.
          </dd>
        </div>
      </dl>
    </>
  );
}

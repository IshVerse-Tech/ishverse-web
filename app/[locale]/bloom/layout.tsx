/**
 * Module: BloomLayout
 * Context: See DESIGN.md §3 and §4 for theme and typography.
 * Shared shell for the IshBloom product, support and legal pages.
 * Exports: BloomLayout
 */
import type { ReactNode } from "react";
import Image from "next/image";

export default function BloomLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en" className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
      <header className="flex items-center justify-between gap-4 border-b border-divider py-5">
        <a href="https://bloom.ishverse.com/" className="flex items-center gap-2 font-semibold">
          <Image src="/bloom/symbol.svg" alt="" width={38} height={38} />
          IshBloom
        </a>
        <a
          href="https://ishverse.com"
          className="text-sm text-accent-text underline underline-offset-4"
        >
          IshVerse
        </a>
      </header>
      <main id="main" className="flex-1 py-14 sm:py-20">
        {children}
      </main>
      <footer className="flex flex-wrap gap-x-6 gap-y-3 border-t border-divider py-6 text-sm text-accent-text">
        <a className="underline underline-offset-4" href="https://bloom.ishverse.com/privacy">
          Privacy policy
        </a>
        <a className="underline underline-offset-4" href="https://bloom.ishverse.com/support">
          Support
        </a>
      </footer>
    </div>
  );
}

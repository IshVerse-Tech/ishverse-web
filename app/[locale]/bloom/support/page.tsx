/**
 * Module: BloomSupport
 * Context: See DESIGN.md §9 and §10 for support and legal copy.
 * Public contact and help page for IshBloom players.
 * Exports: BloomSupport
 */
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IshBloom support",
  description: "Get help with IshBloom gameplay, settings and saved progress.",
  alternates: { canonical: "https://bloom.ishverse.com/support" },
};

export default function BloomSupport() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">IshBloom support</h1>
      <p className="mt-5 leading-relaxed">
        For gameplay questions or a bug report, email{" "}
        <a
          className="break-all text-accent-text underline"
          href={`mailto:${siteConfig.supportEmail}?subject=IshBloom%20support`}
        >
          {siteConfig.supportEmail}
        </a>
        . If reporting a bug, include your iPhone model, iOS version, and what happened.
      </p>
      <dl className="mt-9 space-y-6 leading-relaxed">
        <div>
          <dt className="font-semibold">How do I make a Bloom?</dt>
          <dd className="mt-1">
            Fill one hex and all six adjacent hexes. In Journey, clearing a gem tile counts it
            toward the level goal.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">What does Lightning do?</dt>
          <dd className="mt-1">
            When your Journey hand is blocked and there is a safe way to make room, Lightning clears
            ordinary tiles once per attempt. Your gems and score stay intact.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Where is my progress saved?</dt>
          <dd className="mt-1">
            Best scores and Journey records are saved on this iPhone. Deleting the app removes its
            local records.
          </dd>
        </div>
      </dl>
    </>
  );
}

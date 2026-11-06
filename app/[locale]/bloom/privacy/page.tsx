/**
 * Module: BloomPrivacy
 * Context: See DESIGN.md §10 for legal pages.
 * Privacy policy for the ad-free IshBloom iPhone release.
 * Exports: BloomPrivacy
 */
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IshBloom privacy policy",
  description: "How IshBloom handles game progress, app preferences and support correspondence.",
  alternates: { canonical: "https://bloom.ishverse.com/privacy" },
};

export default function BloomPrivacy() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">Privacy policy</h1>
      <p className="mt-3 text-sm text-fg-secondary">Last updated November 6, 2026</p>
      <div className="mt-9 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">The iPhone app</h2>
          <p className="mt-2">
            IshBloom is an offline puzzle game from IshVerse. Version 1.0 requires no account and
            includes no advertising, tracking, or third-party analytics SDKs. IshBloom does not send
            gameplay data to IshVerse or to advertising partners.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">On-device storage</h2>
          <p className="mt-2">
            The app keeps your Marathon best score, Journey progress, and game preferences on your
            device. These records persist while the app is installed and may be included in device
            backups depending on your Apple settings. Delete the app to remove its local records.
            Manage any device backups separately in your Apple settings.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Website and support</h2>
          <p className="mt-2">
            This product website is hosted on Vercel. The host processes requests and technical
            connection information to deliver the pages. If you email support, IshVerse receives
            your email address and the information you choose to send. We use it to respond and keep
            it as needed to handle the request and meet applicable obligations.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Questions and requests</h2>
          <p className="mt-2">
            For privacy questions or to request deletion of support correspondence, email{" "}
            <a
              className="break-all text-accent-text underline"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>
            . We will update this page when the app’s data practices change.
          </p>
        </section>
      </div>
    </>
  );
}

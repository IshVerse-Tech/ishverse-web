/**
 * Module: BloomPrivacy
 * Context: docs/design/DESIGN-SYSTEM.md and CONTENT-AND-COPY.md — legal content.
 * Public policy for IshBloom's local data, ads, consent, Apple services and website.
 * Legal text stays English in every locale (AGENTS.md); the shell is localized.
 * Exports: metadata — stable privacy URL and SEO; BloomPrivacy — policy page.
 */
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IshBloom privacy policy — app, ads and privacy choices",
  description:
    "How IshBloom handles local game data, Google AdMob ads, consent, Game Center, reminders, website analytics and privacy requests.",
  alternates: { canonical: "https://bloom.ishverse.com/privacy" },
};

export default function BloomPrivacy() {
  return (
    <main id="main" lang="en" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm text-accent-text">IshBloom · iOS</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Privacy policy</h1>
      <p className="mt-3 text-sm text-fg-secondary">
        Last updated <time dateTime="2026-11-14">November 14, 2026</time> · This policy is provided
        in English.
      </p>
      <div className="mt-9 space-y-8 leading-relaxed">
        <section aria-labelledby="introduction">
          <h2 id="introduction" className="text-xl font-semibold">
            Introduction
          </h2>
          <p className="mt-3">
            IshBloom is a hexagonal puzzle game for iPhone and iPad, published by Ishmael Affum
            Kwakye under IshVerse. This policy covers the app, the IshBloom website, and support
            communications. It explains the advertising features introduced in the 1.1 releases,
            including version 1.1.0. Version 1.0 does not include the Google advertising and consent
            SDKs described below.
          </p>
          <p className="mt-3">
            You do not need an IshVerse account to play. Core gameplay and locally saved progress
            work without an internet connection. Advertising, Game Center, this website, and email
            support depend on external services.
          </p>
        </section>
        <section aria-labelledby="information-collected">
          <h2 id="information-collected" className="text-xl font-semibold">
            Information collected
          </h2>
          <p className="mt-3">
            IshBloom stores game records and preferences locally. When its advertising or consent
            services connect to the internet, Google may process technical information such as:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              IP address and connection information, including a general region derived from that
              information.
            </li>
            <li>App, device, and app- or developer-scoped identifiers.</li>
            <li>App launches and interactions with advertisements or privacy forms.</li>
            <li>
              Advertising data, such as ads requested, displayed, or viewed, and related
              interactions.
            </li>
            <li>
              Crash reports, diagnostic information, and performance information such as launch time
              or responsiveness.
            </li>
          </ul>
          <p className="mt-3">
            These services may use this information to provide and measure advertising, operate
            privacy choices, maintain performance, and prevent fraud. Local puzzle boards,
            high-score records, and Journey progress are not sent to IshVerse or supplied by the app
            to Google as advertising parameters. The advertising SDK can still observe its own
            technical and interaction data.
          </p>
          <p className="mt-3">
            If you contact support, IshVerse receives your email address, message, and any
            attachments or other information you choose to provide. Website processing is described
            below.
          </p>
        </section>
        <section aria-labelledby="local-game-data-and-reminders">
          <h2 id="local-game-data-and-reminders" className="text-xl font-semibold">
            Local game data and reminders
          </h2>
          <p className="mt-3">
            The app stores Marathon high scores, Journey progress, level results, earned and bonus
            stars, unlocked gardens, saved Journey runs, and settings on your device. Settings
            include sound, music, haptics, and visual effects. These records support offline play
            and do not require an IshVerse server or account.
          </p>
          <p className="mt-3">
            If you enable local reminders, the app also stores your chosen days and time, quiet
            hours, and reminder preferences. Optional return and progress reminders use the last
            recorded app activity and unlocked garden. iOS schedules these notifications locally
            after you allow them. There is no remote notification service or push token for IshBloom
            reminders. Manage them in Settings → Notification or in iOS Settings.
          </p>
          <p className="mt-3">
            Delete the app to remove its local game records and preferences. Offloading the app may
            retain its documents and data. Device or cloud backups may contain copies depending on
            your Apple settings; manage backups separately. The app does not provide an IshVerse
            account-deletion or cloud-save control because it does not create those accounts or
            saves.
          </p>
        </section>
        <section aria-labelledby="advertising-through-google-admob">
          <h2 id="advertising-through-google-admob" className="text-xl font-semibold">
            Advertising through Google AdMob
          </h2>
          <p className="mt-3">
            IshBloom 1.1 introduces Google AdMob banner ads on the modes screen and below the
            gameplay tray where space permits, occasional full-screen interstitials at game
            transitions, and optional rewarded ads for an extra chance or an eligible Journey bonus
            star. You can decline rewarded ads and use the normal retry or continuation options
            available in the game.
          </p>
          <p className="mt-3">
            Ads require an internet connection; core gameplay and saving remain available offline.
            An ad may not appear when it cannot load or the applicable privacy requirements are not
            met.
          </p>
          <p className="mt-3">
            The app requests non-personalized ads. It disables Google&#x27;s publisher first-party
            identifier feature and the Mobile Ads SDK&#x27;s coarse-location collection setting. It
            does not request access to your device location. These settings do not eliminate all
            technical data processing: Google and its advertising services may still process
            information described above, including network information and scoped identifiers, for
            ad delivery, measurement, security, and related operations.
          </p>
          <p className="mt-3">
            Google&#x27;s handling of information is explained in the{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://policies.google.com/privacy"
            >
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://policies.google.com/technologies/partner-sites"
            >
              How Google uses information from apps and sites that use its services
            </a>
            .
          </p>
        </section>
        <section aria-labelledby="consent-tracking-permission-and-privacy-choices">
          <h2
            id="consent-tracking-permission-and-privacy-choices"
            className="text-xl font-semibold"
          >
            Consent, tracking permission, and privacy choices
          </h2>
          <p className="mt-3">
            Google&#x27;s User Messaging Platform checks which privacy messages and choices apply
            when the app starts. Where required, a consent form can appear on the modes screen or
            when you choose a rewarded ad. The app checks Google&#x27;s current permission to
            request ads before loading them.
          </p>
          <p className="mt-3">
            When Google requires a privacy-options entry point, you can reopen the form in Settings
            → About IshBloom → Ad privacy choices. Use the choices offered there to review or change
            applicable consent. This control is shown only when Google marks it as required; it is
            not a universal switch to turn off every advertisement. If the form is temporarily
            unavailable, you can try again later.
          </p>
          <p className="mt-3">
            This version does not display Apple&#x27;s App Tracking Transparency prompt or request
            permission to access the advertising identifier, IDFA. Non-personalized advertising is
            still data processing, and a Google privacy form is separate from Apple&#x27;s tracking
            permission. The information Google processes and its purposes are described in its
            policies linked above.
          </p>
          <p className="mt-3">
            Declining an applicable privacy choice does not prevent offline gameplay or local
            saving. Where permitted by your choices and applicable requirements, non-personalized
            ads may still appear. If Google does not permit ad requests, the app does not request
            those ads. To avoid network-dependent advertising while playing, you can use the
            game&#x27;s offline functionality.
          </p>
        </section>
        <section aria-labelledby="apple-game-center">
          <h2 id="apple-game-center" className="text-xl font-semibold">
            Apple Game Center
          </h2>
          <p className="mt-3">
            Game Center is optional. When the app opens, it may ask Apple to authenticate your Game
            Center session or show Apple&#x27;s sign-in interface. You can play without signing in.
            When authenticated, the app reads your display name and authentication status to show
            your Game Center connection in Settings. It can open Apple&#x27;s Game Center dashboard.
          </p>
          <p className="mt-3">
            Apple may process your Game Center account, the games you play, and game activity under
            its own settings and policies. The current IshBloom integration does not upload your
            local Marathon scores or Journey progress to a leaderboard. Review your Game Center
            settings on your device and{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://www.apple.com/legal/privacy/data/en/game-center/"
            >
              Apple&#x27;s Game Center privacy information
            </a>
            .
          </p>
        </section>
        <section aria-labelledby="services-website-data-and-sharing">
          <h2 id="services-website-data-and-sharing" className="text-xl font-semibold">
            Services, website data, and sharing
          </h2>
          <p className="mt-3">
            IshVerse uses the services described here for different purposes: Google provides
            advertising and consent services; Apple provides Game Center and device services; Vercel
            hosts the website and provides website traffic analytics where enabled. These services
            process information under their own policies. This does not mean IshVerse has access to
            all information those providers hold.
          </p>
          <p className="mt-3">
            Vercel processes website requests and technical connection information to serve and
            secure the pages. Where Vercel Web Analytics is enabled, it helps IshVerse understand
            website traffic, such as pages visited, referring sites, and general browser, device,
            and regional information. The site&#x27;s locale preference may be stored in a cookie.
            Website analytics is separate from local game records. See{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://vercel.com/legal/privacy-policy"
            >
              Vercel&#x27;s Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://vercel.com/docs/analytics/privacy-policy"
            >
              Web Analytics privacy information
            </a>
            .
          </p>
          <p className="mt-3">
            When you email support or report an ad, IshVerse uses the information you send to
            investigate and reply. Please include only information needed for your request.
            Information may also be handled when necessary to meet applicable legal obligations,
            protect security, or respond to a lawful request.
          </p>
        </section>
        <section aria-labelledby="retention-and-deletion">
          <h2 id="retention-and-deletion" className="text-xl font-semibold">
            Retention and deletion
          </h2>
          <p className="mt-3">
            Local records remain on your device while retained by the app, and backups may retain
            copies separately. Deleting IshBloom removes its local records; it does not
            automatically delete information held by Google, Apple, or other service providers.
          </p>
          <p className="mt-3">
            IshVerse retains support correspondence as needed to answer and manage the request and
            meet applicable obligations. To request access, correction, or deletion of
            correspondence or other information IshVerse actually holds, email support@ishverse.com.
            We may need enough information to verify and locate your request.
          </p>
          <p className="mt-3">
            For information controlled by Google, Apple, or Vercel, use the privacy settings and
            request methods described in their policies. IshVerse cannot promise deletion of records
            it does not control. We do not set a single retention period for all third-party
            processing.
          </p>
        </section>
        <section aria-labelledby="children-and-families">
          <h2 id="children-and-families" className="text-xl font-semibold">
            Children and families
          </h2>
          <p className="mt-3">
            IshBloom is intended for children and the general public. It does not require account
            registration or ask players for their date of birth. Advertising services can process
            the technical information described in this policy when the app connects to them.
          </p>
          <p className="mt-3">
            Parents and guardians should review the current App Store age rating, device controls,
            advertising information, and privacy choices when deciding how a child uses the app. If
            you believe a child has provided personal information to IshVerse through support,
            contact support@ishverse.com so we can investigate and address information under our
            control. Requests concerning Google&#x27;s or Apple&#x27;s records must also use those
            providers&#x27; privacy channels.
          </p>
        </section>
        <section aria-labelledby="international-users-and-privacy-rights">
          <h2 id="international-users-and-privacy-rights" className="text-xl font-semibold">
            International users and privacy rights
          </h2>
          <p className="mt-3">
            The app and website can be accessed in different countries, and service providers may
            process information in countries other than yours. Their policies explain their handling
            of international transfers and related protections.
          </p>
          <p className="mt-3">
            Depending on where you live, you may have rights to access, correct, delete, or obtain a
            copy of personal information, object to or restrict certain processing, withdraw
            applicable consent, or contact a privacy regulator. Contact IshVerse about information
            we control and use the relevant provider&#x27;s channels for information it controls.
            Available rights and any exceptions depend on the applicable rules and circumstances;
            this policy does not promise that every right applies everywhere.
          </p>
        </section>
        <section aria-labelledby="policy-updates">
          <h2 id="policy-updates" className="text-xl font-semibold">
            Policy updates
          </h2>
          <p className="mt-3">
            We will update this page and its last-updated date when our practices change. Where
            applicable, additional notices or privacy choices may be presented through the app.
            Check this page for the current policy; older app versions may not include every feature
            described here.
          </p>
        </section>
        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold">
            Contact
          </h2>
          <p className="mt-3">
            For privacy questions or requests, contact Ishmael Affum Kwakye / IshVerse at{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>
            , or visit{" "}
            <a
              className="break-words text-accent-text underline underline-offset-4"
              href="https://bloom.ishverse.com/support"
            >
              IshBloom support
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

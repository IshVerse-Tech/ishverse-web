/**
 * Module: WorkoutPrivacy
 * Context: See DESIGN.md §13 — Workout product pages.
 * English policy for the native iOS app; web app is explicitly outside this scope.
 * Exports: WorkoutPrivacy
 */
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ISH Workout — Privacy policy",
  description:
    "How the ISH Workout iOS app handles local records, permissions and support requests.",
  alternates: {
    canonical: "https://workout.ishverse.com/privacy",
    languages: { en: "https://workout.ishverse.com/privacy" },
  },
};
const sections = [
  [
    "Scope",
    "This policy describes the ISH Workout native iOS app provided under the IshVerse brand. This marketing website is hosted on Vercel, which processes requests and technical connection information to deliver the site.",
  ],
  [
    "Records on your device",
    "The iOS app stores weight entries, push-up sets, water entries, meal logs, tasks, preferences, recent run summaries and run goals locally on your device. No account is required. The current app does not send these records to an IshVerse server and does not include advertising or third-party analytics SDKs. Device backups may include app data according to your Apple settings.",
  ],
  [
    "Location and motion",
    "With your permission, the app uses location to measure runs and show your position on a map. Motion information supports activity tracking. Maps are supplied by Apple services. You can manage permissions in iPhone Settings; disabling them may limit the corresponding features.",
  ],
  [
    "Apple Health",
    "Apple Health integration is optional. With your authorization, the app can save supported entries such as body weight, water consumption and workouts to Apple Health. Health information is not used for advertising or sold. You can manage the app’s access in the Health app. Revoking access does not remove records already saved to Health.",
  ],
  [
    "Exports and deletion",
    "You can export supported habit records as a JSON file and import them using the app’s settings. Run summaries are stored separately and are not included in that habit export. Exported files may contain personal information; you control where you save or share them. Deleting the iOS app removes its local app data. Remove exported files separately and manage saved Health records in Apple Health. The app’s Clear all data control clears habit records, but does not clear the separately stored run summaries.",
  ],
  [
    "Contacting support",
    "If you email support@ishverse.com, we receive your email address, message and any attachments you choose to send. We use that information to respond to your request. Please do not send health records or precise routes. You may contact us to request deletion of support correspondence, subject to any applicable retention requirements.",
  ],
  [
    "Changes and questions",
    "We will update this page when the app’s data practices change. For questions about this policy, contact support@ishverse.com.",
  ],
];
export default function WorkoutPrivacy() {
  return (
    <main id="main" lang="en" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-accent-text">ISH Workout · iOS</p>
      <h1 className="mt-4 text-4xl font-bold">Privacy policy</h1>
      <p className="mt-4 text-sm text-fg-secondary">
        Last updated: September 26, 2026 · This policy is provided in English.
      </p>
      <div className="mt-12 space-y-10">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 leading-relaxed text-fg-secondary">{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

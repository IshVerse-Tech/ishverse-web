/**
 * Module: WorkoutPrivacy
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — Workout product pages.
 * English policy for the native iOS and Apple Watch app; web app is explicitly outside this scope.
 * Exports: WorkoutPrivacy
 */
import type { Metadata } from "next";
import { withSocial } from "@/lib/seo";
export const metadata: Metadata = withSocial("workout", {
  title: "ISH Workout — Privacy policy",
  description:
    "How the ISH Workout iOS and Apple Watch app handles local records, permissions, subscriptions and support requests.",
  alternates: {
    canonical: "https://workout.ishverse.com/privacy",
    languages: {
      en: "https://workout.ishverse.com/privacy",
      "x-default": "https://workout.ishverse.com/privacy",
    },
  },
});
const sections = [
  [
    "Scope",
    "This policy describes the ISH Workout native iOS and Apple Watch app provided under the IshVerse brand, including its widgets. This marketing website is hosted on Vercel, which processes requests and technical connection information to deliver the site.",
  ],
  [
    "Records on your device",
    "The app stores your profile (name, optional photo and preferences), weight entries, push-up sets, water entries, meal logs, tasks, reminders, step goals, saved runs with their routes and summaries, and run goals locally on your device. Widgets show summaries of these records on your device. No account is required. The app does not send these records to an IshVerse server and does not include advertising or third-party analytics SDKs. Device backups may include app data according to your Apple settings.",
  ],
  [
    "Location, motion and weather",
    "With your permission, the app uses location to measure runs, record their routes and show your position on a map. Motion information supports activity tracking. Maps are supplied by Apple services. When a run ends, the app may send that run’s end location to Apple’s WeatherKit service to save the weather conditions with the run. You can manage permissions in iPhone Settings; disabling them may limit the corresponding features.",
  ],
  [
    "Apple Health",
    "Apple Health integration is optional. With your authorization, the app can save body weight, water consumption and workouts to Apple Health, and read body weight, water, steps, walking and running distance, flights climbed and active energy to show your activity. The Apple Watch app can also read heart rate, distance and active energy during a workout. Health information is not used for advertising or sold. You can manage the app’s access in the Health app. Revoking access does not remove records already saved to Health.",
  ],
  [
    "Apple Watch",
    "If you use the Apple Watch app, your iPhone and Apple Watch exchange workout, habit and summary information directly using Apple’s device connection. This information is not sent to an IshVerse server.",
  ],
  [
    "Reminders and notifications",
    "Reminders, alarms and run updates are scheduled on your device. You can manage notification permissions in iPhone Settings.",
  ],
  [
    "Sharing",
    "Share images, such as run summaries, are created on your device. They may include details you choose, such as a route map, a photo or a message. Nothing is shared unless you choose to share it, and you control where it goes.",
  ],
  [
    "Subscriptions",
    "Optional ISH Pro subscriptions are processed by Apple through the App Store. The app uses StoreKit purchase and subscription information to determine access to Pro features. We do not receive your card details. Subscription access belongs to your Apple Account and is separate from your local profile and fitness records. Manage or cancel subscriptions in Apple’s subscription settings.",
  ],
  [
    "Exports and deletion",
    "You can export and import supported records using the app’s Data & backups settings. Backups can include your profile, habit records and workout history, including saved runs, and may contain personal information; you control where you save or share them. Clear all data removes the app’s local fitness records, including saved runs, your profile photo, reminders and step goals. Removing local records does not automatically remove records already saved to Apple Health. Deleting the app removes its local app data. Manage exported files and Apple Health records separately.",
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
        Last updated: November 15, 2026 · This policy is provided in English.
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

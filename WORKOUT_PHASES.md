# Workout landing page

Phase 2: local implementation for review. Not deployed.

- Routes: `/workout`, `/workout/support`, `/workout/privacy`; product subdomain exposes `/`, `/support`, `/privacy`.
- Marketing and support: en/es/fr/pt. Privacy: English, explicitly scoped to iOS.
- Shared site themes and tokens; original app images preserve product identity.
- iOS availability remains “in testing”; web app is a separate external link.
- Company entry remains “soon” until the product subdomain is deployed.
- Support: support@ishverse.com.

Phase 3 (requires user instruction): responsive/theme/browser checks, accessibility/performance audit, full build and routing regression checks. Review privacy wording and actual release status before publication.

Phase 4 (requires user instruction): deploy through the existing repository workflow, attach workout.ishverse.com to the existing Vercel project, configure DNS using Vercel’s supplied record, verify HTTPS and all locales, then set App Store URLs. Add an in-app privacy link in the native project before submission. No DNS or production settings changed in Phase 2.

## Phase 3 results — September 26, 2026

- Removed the detached hero box; introduced a consistent fitted screenshot frame preserving original proportions. Paired screens now align in equal columns.
- Checked phone-width and desktop previews, light/dark themes, and mobile horizontal overflow (390px content fits 390px viewport).
- Production build, full ESLint, and TypeScript checks passed. Workout pages now prerender statically.
- Fixed missing company.hero.live translations in es/fr/pt discovered during the production build.
- Local Host-header routing checks returned 200 for Workout home in all four languages, support/privacy paths, and existing Gospel/Rize/company home routes.
- Final mobile Lighthouse: performance 96, accessibility 100, best practices 100, SEO 92. SEO canonical warning is due to the localhost preview versus the intended public subdomain; repeat on the deployed domain before launch. First run performance was 77; final run after rebuilding was 96, so treat this as a local measurement, not a production guarantee.
- Existing Next.js middleware naming deprecation remains; no unrelated router migration performed.
- No deployment, DNS updates, or App Store changes made.

## Review refinements

- Compact labeled menus across company/product headers; tested at 320px.
- Workout/company fit 320, 375, 768 and 1440px without horizontal overflow. Workout translations and Gospel/Rize also fit at 320px.
- Contact links standardized to support@ishverse.com. Gospel benefits use blue Lucide checks.
- Company cards, menu and footer ordered IshGospel → IshRize → ISH Workout. Links resolve to canonical product subdomains in production, internal routes on localhost.
- Workout is marketed as mobile-only. All conversion buttons point to https://apps.apple.com/app/id6815882456; removed the web app destination and promotion. Public App Store availability could not be verified, so release-pending copy remains.
- Production build and lint passed before the final mobile-only copy refinement; final verification follows. Nothing deployed.

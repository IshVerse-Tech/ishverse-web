# IshVerse Corporate Web Design System

This document replaces old company-site positioning that framed IshVerse only around "intentional growth." The corporate site now represents the broader global technology company while remaining honest about what is currently built.

## Visual direction

- Primary logo: founder-selected blue/gold IshVerse ribbon mark.
- UI surfaces: primarily black, white, and neutral grays.
- Blue is the primary interactive/system accent.
- Gold is rare earned emphasis, not a default button/background color.
- No random accent colors or decorative gradient soup.
- Dimensional logo does not imply dimensional UI everywhere.

## Experience principles

1. Clarity before spectacle.
2. One visual hierarchy per screen.
3. Reusable components before one-off styling.
4. Responsive from 320px through large desktop displays.
5. Keyboard, focus, contrast, reduced-motion, and semantic structure are release requirements.
6. Animation explains state or hierarchy; it is not decoration.
7. Empty/loading/error states are designed, not improvised.
8. Product status and availability are explicit.

## Typography

Use one system family across products unless the design-system repo approves a change. Favor high legibility, restrained weight variation, and consistent line lengths.

## Components

Headers, navigation, buttons, links, form controls, cards, callouts, dialogs, tables, feedback states, and footer patterns should consume the shared design-system contract. Product-specific novelty must not fragment basic controls.

## Responsive behavior

Design mobile first, then tablet, laptop, desktop, and large display. Avoid layouts that merely stretch to 4K. Use max-width content regions, data-density variants, and adaptive navigation.

## Product pages (ISH Workout, IshBloom)

`workout.ishverse.com` and `bloom.ishverse.com` share the existing pure black/white themes, Inter, blue actions, gold emphasis and spacing. Keep each app's own colours (Workout lime, Bloom violet) inside its actual icon and screenshots; do not introduce a third site accent. Use actual iOS screenshots, clearly distinguish web and iOS capabilities, and only advertise an App Store download once the app is publicly released. Pages: landing, localized support, and an English iOS privacy policy inside the localized shell. Both products use the same shell (nav, language switcher, theme toggle, mobile menu, footer with the IshVerse mark) and the same section order: hero → features → how it works → privacy/FAQ → CTA. The hero uses a single 256–288px screenshot for readability. Product-local links retain the selected locale and work on local previews.

Screenshots use a fitted device frame (2.4rem outer / 1.9rem inner radius, matching Gospel), 8px padding, original image aspect ratio, and no detached background box. Paired screens align at the top in equal columns, capped at 240px each.

## Mobile navigation and product discovery

At 320px, use 16px gutters, 36px hero text, compact vertical spacing, and a single-row wordmark plus labeled menu. The mobile disclosure contains navigation and theme/language controls; desktop retains visible links. Screenshots stack below 400px so each remains readable; wider layouts use aligned equal columns. Product cards are one column on phones and two from medium sizes up (four products form a 2×2 grid). Every product has a landing-page link and a separate availability statement; never infer destinations from array positions — product copy is keyed by product id. Company CTAs open the product directory instead of favoring one product. Gospel benefit lists use blue Lucide checks, matching existing feature lists; no red/green comparison marks. Public contact email: support@ishverse.com.

The primary IshVerse logo is the founder-selected blue/gold ribbon mark (`public/brand/ishverse-mark.png`, favicon `app/icon.png`), shown beside the ISH/VERSE wordmark and in every product footer.

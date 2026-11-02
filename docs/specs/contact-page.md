# Feature: Contact Page

## Goal

Build `/contact`: a page that lists the ways to reach Varun (email and LinkedIn) instead of sending visitors straight to LinkedIn from the navbar.

## Scope

In scope:

- `src/app/contact/page.tsx` with its own `metadata` (title "Contact", description).
- Page header: "Get in Touch" pill, single `h1`, short intro, and availability notice.
- Contact channel cards for email (`mailto:`) and LinkedIn (opens in a new tab).
- All content lives in `src/data/contact.ts`, typed in `src/types/content.ts`.
- Components live in `src/components/contact/`.
- Primary and footer nav "Contact" links point to `/contact` instead of the LinkedIn URL.

Out of scope:

- A contact form and any submission service.
- Extra pages, new dependencies, or design token changes.

## Acceptance criteria

- `/contact` renders exactly one `h1` and is statically generated.
- The navbar "Contact" link opens the contact page, not LinkedIn.
- Email and LinkedIn are presented as distinct, clearly labeled links.
- `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` pass.

## Accessibility checks

- One `h1`; the channel list uses an `sr-only` `h2`.
- Each card is a single link with a descriptive accessible name and a 44px+ target.
- External links open in a new tab with `rel="noreferrer noopener"` and an `sr-only` new-tab hint.
- Icons are decorative and `aria-hidden`; focus is visible and motion uses `motion-safe:`.

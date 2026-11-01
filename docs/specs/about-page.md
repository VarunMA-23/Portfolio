# Feature: About Page

## Goal

Build the `/about` route: a page header with portrait, bio, and calls to action, followed by an at-a-glance stat row, a grouped skills list, selected focus areas, and a "currently exploring" panel. Content is sourced from Varun's public GitHub profile and the existing site data.

## Scope

In scope:

- `src/app/about/page.tsx` with its own `metadata` (title "About", description).
- Page header: "About Me" pill, single `h1` with an accent-text phrase, two intro paragraphs, location/education/focus meta list, contact and GitHub CTAs, social links, availability status, and portrait in an organic shape.
- At-a-glance stat row: national hackathon wins, public repositories, flagship AI systems.
- Skills section: four grouped skill lists (languages, AI/ML, systems, data/tooling) on pastel cards inside a rounded panel.
- Selected focus areas: four cards with title, description, and tag list.
- Currently exploring panel with a short list of learning topics.
- All content lives in `src/data/about.ts`, typed in `src/types/content.ts`.
- Components live in `src/components/about/` and compose shared `ui/` and `layout/` pieces.

Out of scope:

- Dedicated About portrait (reuses the hero portrait for now).
- Projects, experience, achievements, blog, and contact pages.
- Any new dependencies or design tokens.

## Acceptance criteria

- `/about` renders exactly one `h1`, and the section order is header, stats, skills, focus, learning.
- All copy comes from `aboutContent`; no inline strings except labels and `sr-only` headings.
- Header nav marks About with `aria-current="page"` (existing behavior).
- Resume CTA downloads `public/pdf/New Resume (2).pdf`; it is data-driven and hidden if `aboutContent.resume` is removed.
- `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` pass.

## Accessibility checks

- One `h1`, sections use `h2` via `aria-labelledby`, cards and skill groups use `h3`.
- Stats are a list with visible values and labels; no meaning conveyed by icon or color alone.
- Skill items and focus tags are real list items; group cards are sections with accessible names.
- Portrait has descriptive `alt`; decorative blobs, sparkles, and script accents are `aria-hidden`.
- All interactive elements keep the shared 44px minimum target and visible focus ring.
- Motion uses `motion-safe:` only; layout stacks on mobile and uses two columns from `md`/`lg`.

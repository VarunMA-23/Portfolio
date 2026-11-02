# Feature: Internship Interests Page

## Goal

Build `/internships`: a page that presents Varun's internship interests and career goals instead of a work-experience timeline. It states that he is currently seeking an internship, lists the four role areas he wants to work in, explains what he wants from an internship, and closes with his broader career goal.

## Scope

In scope:

- `src/app/internships/page.tsx` with its own `metadata` (title "Internships", description).
- Page header: "Open to Internships" pill, single `h1` ("Internship Interests & Career Goals"), intro paragraph, availability notice, and CTAs (email and projects).
- "Areas of Interest" section: four cards, one per internship track, each with a title and a bulleted list.
- "What I'm Looking For" section: a checklist of the hands-on engineering outcomes the internship should provide.
- Career goal closing panel with the long-term goal statement.
- All content lives in `src/data/internships.ts`, typed in `src/types/content.ts`.
- Components live in `src/components/internships/` and compose shared `ui/` and `layout/` pieces.
- Footer nav link changes from "Experience" (`/experience`) to "Internships" (`/internships`).

Out of scope:

- Any work-experience timeline, roles, companies, or dates.
- A `/experience` route.
- Header/primary nav changes; the footer link is the only entry point for now.
- Achievements, blog, and contact pages.
- Any new dependencies or design tokens.

## Acceptance criteria

- `/internships` renders exactly one `h1` and is statically generated.
- The page states plainly that there is no current employment and that an internship is being sought.
- All four internship tracks and every goal item come from `internshipContent`; no inline copy except labels and `sr-only` headings.
- Footer no longer links to a missing `/experience` route.
- `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` pass.

## Accessibility checks

- One `h1`; each section uses `h2` via `aria-labelledby`; each interest card uses an `h3`.
- Interest cards are `article` elements with real list items; icons are decorative and `aria-hidden`.
- The availability notice is plain text, not color-only.
- CTAs keep the shared 44px minimum target and visible focus ring; link text is descriptive.
- Motion uses `motion-safe:` only; the card grid stacks on mobile and expands from `sm`/`lg`.

# Feature: Projects Page and Project Detail

## Goal

Build `/projects` and `/projects/[slug]`: a filterable grid of flagship AI/ML projects, plus a statically generated detail page for each project with overview, highlights, stack, and previous/next navigation. Content reuses the flagship systems already described on the About page.

## Scope

In scope:

- `src/app/projects/page.tsx` with its own `metadata` (title "Projects", description).
- `src/app/projects/[slug]/page.tsx` with `generateStaticParams` and `generateMetadata`; unknown slugs call `notFound()`.
- Projects list: page header, category filter chips (client-side, `aria-pressed`), responsive project card grid.
- Project card: tinted visual with icon, title, category, summary, tag list, and one whole-card link with a circular arrow.
- Project detail: back link, single `h1`, summary, category/tag list, overview paragraphs, highlights, stack sidebar, previous/next project links, and a non-interactive "Feature yet to be built" contact note until `/contact` exists.
- All content lives in `src/data/projects.ts`, typed in `src/types/content.ts`.
- Components live in `src/components/projects/` and compose shared `ui/` and `layout/` pieces.

Out of scope:

- Dedicated project screenshots (tinted icon visuals stand in until images are supplied).
- External repository or demo links (hidden until real URLs are provided).
- Experience, achievements, blog, and contact pages.
- Any new dependencies or design tokens.

## Acceptance criteria

- `/projects` renders exactly one `h1`; filter chips start with "All" selected and filtering updates the grid.
- `/projects/[slug]` renders exactly one `h1` and is statically generated for every project slug.
- Each project has a unique `slug`.
- Card titles, summaries, tags, and detail content all come from `projectContent`; no inline copy except labels.
- Header nav marks `/projects` with `aria-current="page"`; detail routes keep the section active.
- `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` pass.

## Accessibility checks

- One `h1` per page, no skipped heading levels; cards are `article` elements with `h2`/`h3` as appropriate.
- Filter chips are buttons inside a labelled group, expose `aria-pressed`, keep 44px minimum targets, and announce the visible count in a polite live region.
- Card links have a single descriptive accessible name and a visible focus ring.
- Tinted visual icons are `aria-hidden`; information is never conveyed by color alone.
- Previous/next links use descriptive link text and wrap on mobile.
- Motion uses `motion-safe:` only; grids stack on mobile and expand to two or three columns.

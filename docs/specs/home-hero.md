# Feature: Home Hero + Shared Shell

## Goal

Scaffold the portfolio app (Next.js App Router, TypeScript, Tailwind, Redux Toolkit, Vitest) and build the home page hero only, wrapped in the shared header/footer shell, matching `specs/design-docs/*`.

## Scope

In scope:

- Project tooling: Next.js, TypeScript strict, Tailwind (class dark mode), ESLint, Prettier, Vitest + React Testing Library, Redux Toolkit.
- Root layout: fonts, metadata, skip link, theme no-flash script, StoreProvider, header, footer.
- Theme toggle backed by `themeSlice`, persisted to `localStorage` key `theme`.
- Header nav matching the mockup: Home, About, Services (`/#services`), Work (`/projects`), Testimonials (`/#testimonials`), Contact. Mobile menu with `aria-expanded`.
- Hero section: "Hello, I'm" pill, h1 name, accent-text headline phrase, paragraph, primary CTA to `/projects`, secondary "View GitHub" link, social links, availability status, portrait with organic shape, "3x Hackathon Wins" and "24 Public Repos" cards.
- Content sourced from the owner's GitHub profile (`VarunMA-23`) and stored in `src/data/`.
- Root metadata, hero copy, CTA links, social links, and the portrait use Varun's real details.
  Out of scope:

- Other routes/pages, remaining home sections, real content, image assets, contact form wiring, commits/pushes.

## Acceptance criteria

- `/` renders the hero with exactly one `h1`, all hero copy, and CTAs.
- Header shows mockup nav, active pill for the current route, working keyboard-operable mobile menu, theme toggle with accessible name and `aria-pressed`.
- Theme choice persists and applies before first paint; no hydration errors.
- Layout uses design tokens from `specs/design-docs/01-colors.md`, 1200px container, 24/48px padding, 64/96px section padding, 32px panel radius.
- `npm test`, `npm run lint`, `npm run typecheck`, `npm run build` pass.

## Accessibility checks

- Skip link first focusable element; `main` landmark with `id="main-content"`.
- Focus ring 2px ink with 2px offset in both themes.
- Touch targets at least 44px for nav links, buttons, social links, theme toggle.
- Availability status has a text label, not color alone.
- Decorative shapes are `aria-hidden` and hidden below `md`.
- All motion wrapped in `motion-safe:`; portraits have descriptive `alt`.

## Notes / open items

- Hero copy and links use Varun Manjunatha Ankanahalli's real profile details (GitHub, LinkedIn, X).
- The portrait is `public/images/Varun_insta_560x640.jpg`.
- Services/Testimonials anchors point to home sections not built yet.

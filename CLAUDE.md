# CLAUDE.md — Portfolio Website

## 1. Project Overview
Personal portfolio website built with Next.js (App Router), TypeScript, Redux Toolkit, and Tailwind CSS. Deployed on Vercel. Content is hardcoded for now. No backend or database.

## 2. Tech Stack (Locked)
- Framework: Next.js (latest stable, App Router, `src/app/`)
- Language: TypeScript (strict mode, no `any`)
- State: Redux Toolkit (required for shared state; use `react-redux` hooks)
- Styling: Tailwind CSS (responsive, mobile-first)
- Testing: Vitest + React Testing Library
- Linting/Formatting: ESLint + Prettier
- Package manager: npm (do not use pnpm or yarn; do not commit other lockfiles)
- Deployment: Vercel
- Contact form: service not yet chosen (see Section 10)

## 3. Routes (Hybrid Multipage)

src/app/
├── layout.tsx # Root layout: html, body, theme script, StoreProvider, skip link, header, footer
├── page.tsx # Home
├── about/page.tsx
├── projects/page.tsx
├── projects/[slug]/page.tsx
├── experience/page.tsx
├── achievements/page.tsx
├── blog/page.tsx
├── blog/[slug]/page.tsx
└── contact/page.tsx

- Default to Server Components. Add `"use client"` only where state, effects, or browser APIs are needed (theme toggle, contact form, store provider, interactive filters).
- Dynamic routes (`[slug]`) must use `generateStaticParams` so pages are statically generated at build time.
- Each route `page.tsx` is thin: it imports and composes components. No business logic or large JSX blocks inside route files.
- Each route exports its own `metadata` (title, description). Do not repeat global metadata per page.

## 4. Modular Code Structure (Strictly Enforced)
Type-based folders under `src/`:

src/
├── app/ # Routes only (see Section 3). No reusable components here.
├── components/
│ ├── ui/ # Generic primitives: Button, Link, Card, Tag, Input, Textarea
│ ├── layout/ # Header, Footer, Nav, SkipLink, Container
│ ├── home/ # Components used only on the home page
│ ├── projects/ # ProjectCard, ProjectGrid, ProjectDetail, etc.
│ ├── blog/
│ ├── contact/ # ContactForm and its subparts
│ └── theme/ # ThemeToggle
├── store/
│ ├── index.ts # configureStore, RootState, AppDispatch types
│ ├── hooks.ts # Typed useAppDispatch, useAppSelector
│ ├── StoreProvider.tsx
│ └── slices/
│ └── themeSlice.ts
├── data/ # Hardcoded content, typed (projects.ts, experience.ts, blog.ts, etc.)
├── types/ # Shared TypeScript types (Project, BlogPost, Experience, etc.)
├── lib/ # Pure utilities (formatDate, slugify, cn helper). No React.
└── hooks/ # Custom React hooks (not Redux hooks; those live in store/hooks.ts)


Rules:
- One component per file. File name matches the export name (`ProjectCard.tsx` exports `ProjectCard`).
- A component file should stay under ~150 lines. If it grows past that, split it into subcomponents in the same folder.
- A component must not import from `app/`. Dependencies flow one way: `app/` → `components/` → `store/`, `data/`, `lib/`, `types/`.
- Components in `components/home/`, `components/projects/`, etc. must not import from each other's folders. Move shared pieces to `components/ui/` or `lib/`.
- Data lives in `data/`, never inline in components.
- Types live in `types/`, never duplicated across files.
- Tests sit next to the file they test: `ProjectCard.tsx` and `ProjectCard.test.tsx`.
- No barrel `index.ts` files except `store/index.ts`. Import from the file path directly.
- No circular imports.

## 5. Redux Toolkit Rules
- Use `createSlice` for all state. Do not write reducers by hand.
- Only the theme is global state right now. Do not add slices for things that can be local `useState` unless they are shared across components.
- Use typed hooks (`useAppSelector`, `useAppDispatch`) from `store/hooks.ts`. Never use the untyped `useSelector` or `useDispatch`.
- Keep selectors in the slice file and export them.
- Theme state shape: `{ mode: "light" | "dark" }`. Persist to `localStorage` under the key `theme`.
- `StoreProvider` is a client component wrapping `children` in `layout.tsx`.
- Do not store derived data in Redux. Compute it in selectors or components.

## 6. Theme (Light/Dark)
- Theme is controlled by a `dark` class on `<html>` (Tailwind `darkMode: "class"`).
- To prevent a flash of the wrong theme on load, add an inline script in `layout.tsx` `<head>` that reads `localStorage` and sets the class before first paint. Do this via a small, fixed string constant in `lib/`, not inline logic in JSX.
- If no saved preference exists, follow `prefers-color-scheme`.
- Every color used in the UI must work in both modes. Use Tailwind `dark:` variants or CSS variables defined in `globals.css`.
- The `ThemeToggle` must be keyboard accessible, have an accessible name (for example "Switch to dark mode"), and expose its state with `aria-pressed` or an updated label.

## 7. Styling Rules (Tailwind)
- Mobile-first: write base styles for small screens, then add `sm:`, `md:`, `lg:`, `xl:` overrides.
- Use the design tokens defined in `tailwind.config.ts` and `globals.css`. Do not hardcode hex colors in components.
- Do not use arbitrary values (`w-[317px]`) unless there is no reasonable token. Explain why when you do.
- Use the `cn()` helper from `lib/` to merge class names. Do not concatenate strings manually for conditional classes.
- No inline `style={{}}` except for truly dynamic values.
- Respect `prefers-reduced-motion`: wrap animations in `motion-safe:` or disable them under `motion-reduce:`.

## 8. Accessibility (WCAG 2.2 Level AA, Mandatory)
Every feature must meet these before it is considered done:
- Semantic HTML first: `header`, `nav`, `main`, `footer`, `section` with headings, `article` for blog posts and project cards. Use one `h1` per page and no skipped heading levels.
- Include a skip-to-content link as the first focusable element in `layout.tsx`.
- All interactive elements must be reachable and operable by keyboard, with a visible focus indicator (WCAG 2.4.7, 2.4.11). Never remove focus outlines without a visible replacement.
- Touch and click targets must be at least 24x24 CSS pixels (WCAG 2.5.8). Prefer 44x44 where practical.
- Text contrast must be at least 4.5:1 for normal text and 3:1 for large text, in both light and dark themes (WCAG 1.4.3).
- Non-text content (images, icons) needs `alt` text. Decorative images use `alt=""`. Icon-only buttons need `aria-label`.
- Form fields need visible labels, `aria-describedby` for hints and errors, and error messages announced to screen readers. Do not rely on color alone to show errors (WCAG 1.4.1).
- Do not require dragging for any function (WCAG 2.5.7). Do not rely on hover alone to reveal content.
- Do not use `tabindex` values greater than 0.
- Links must have descriptive text. Avoid "click here" or "read more" without context.
- Language is set on `<html lang="en">`.
- Test with keyboard-only navigation and check with an automated tool (axe via browser extension or `@axe-core/react` in dev) before marking a feature complete.

## 9. Testing Rules (Vitest + React Testing Library)
- Every component with logic, every slice, every utility in `lib/`, and every form must have tests.
- Test behavior, not implementation. Query by role, label, or text (`getByRole`, `getByLabelText`), not by class names or test IDs unless unavoidable.
- Redux slices: test reducers and selectors directly.
- Theme toggle: test that clicking updates the store and the `dark` class.
- Run `npm test` before every push. All tests must pass.
- Run `npm run lint` and `npm run build` before every push. Both must succeed with zero errors.
- Do not write snapshot tests for large components.

## 10. Contact Form
- Build the form UI and validation now: name, email, message. Client-side validation with accessible error messages.
- Do not wire up a submission service until the user chooses one. Use a clearly marked placeholder handler and ask the user which service to use (Formspree, Web3Forms, EmailJS, or a Next.js route handler).
- Never commit API keys or secrets. Use `.env.local` and document required variables in `.env.example`.

## 11. Content Rules
- All content is hardcoded in `src/data/` as typed TypeScript objects.
- Each project in `projects.ts` must have a unique `slug`. Each blog post must have a unique `slug`.
- Do not add a CMS, database, or API calls for content unless the user asks.
- Placeholder text should be clearly marked (for example `"TODO: replace"`) so it is easy to find.

## 12. Git Workflow (Mandatory)
Never run any of these commands without the user's explicit permission:
- Creating a branch
- Pushing to any remote
- Switching branches or merging
- Installing new dependencies or changing config files (ask first, describe the change, then wait)

Workflow for each feature, in order:
1. Write a short spec for the feature in `docs/specs/<feature-name>.md` (goal, pages/components involved, acceptance criteria, accessibility checks).
2. Ask permission to create a branch `feat/<feature-name>` from an up-to-date `main`. Wait for approval.
3. On the feature branch, write the code following Sections 3 to 9.
4. Run `npm test`, `npm run lint`, and `npm run build`. Fix all failures.
5. Ask permission to push. Wait for approval, then push.
6. Stop and report what was built, what was tested, and any open questions. Ask the user to review.
7. After the user approves, ask permission to switch to `main`, pull the latest changes, and then ask again before creating the next feature branch.

Commits:
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
- Keep commits small and focused. One logical change per commit.
- Never commit `.env.local`, `node_modules`, or build output.

## 13. Feature Build Order (Suggested)
1. Project setup: Next.js, TypeScript, Tailwind, ESLint, Prettier, Vitest, Redux store, root layout, skip link, header, footer
2. Theme toggle (light/dark with Redux and no-flash script)
3. Home page
4. About page
5. Projects list and project detail
6. Experience page
7. Achievements page
8. Blog list and blog post
9. Contact page and form
Each step follows the workflow in Section 12. Do not start the next step without approval.

## 14. Never Do
- Never add a dependency without asking first.
- Never delete files or folders without asking first.
- Never change design tokens in `tailwind.config.ts` or `globals.css` without asking first.
- Never add a backend, database, or API route for content.
- Never skip tests, lint, or build to make a push succeed. Report the failure instead.
- Never use `any`, `@ts-ignore`, or `eslint-disable` without a comment explaining why.
- Never put secrets in code or commit them.
- Never use `dangerouslySetInnerHTML` unless the user asks.
- Never mark a feature done if it fails any check in Section 8.
- Never start a new feature without the user's approval.
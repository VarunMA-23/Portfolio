# Other Pages and Navigation

## Nav mapping (needs a decision)
The mockup nav shows Home, About, Services, Work, Testimonials, Contact. The site's routes are different. Services and Testimonials exist only as home sections, not as pages.

Suggested primary nav: Home, About, Projects, Blog, Contact. Experience and Achievements go under About or a "More" menu. Ask the user before building the header.

## Page structures
- **About (`/about`):** Page header with portrait, bio, skills list, stat row, and a link to download the resume.
- **Projects (`/projects`):** Page h1, filter chips (client-side, keyboard operable with `aria-pressed`), grid of project cards.
- **Project detail (`/projects/[slug]`):** Back link to Projects, h1 title, hero image, summary, tag list, two-column content, next and previous project links.
- **Experience (`/experience`):** Vertical timeline. Each entry shows role, company, date range, and bullet points. Use an ordered list with clear headings.
- **Achievements (`/achievements`):** Grid of cards, each with an icon, title, year, and issuer.
- **Blog (`/blog`):** List of article cards with date, reading time, title, and excerpt.
- **Blog post (`/blog/[slug]`):** Narrow reading column (about 680px). Title, date, reading time, body text, back link.
- **Contact (`/contact`):** Two columns. Left: heading, short text, email, social links. Right: form with name, email, and message fields. Error messages sit under each field.

## Shared layout
Header and footer come from `src/app/layout.tsx` and appear on every page with the same styling.

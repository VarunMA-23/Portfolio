# Design Reference: Overview

Source: one mockup image supplied by the owner. The coding agent cannot view images, so these files describe it in text. Treat them as the source of truth for visuals.

## Files
- 01-colors.md: palette, light and dark tokens
- 02-typography.md: fonts and type scale
- 03-layout-and-spacing.md: containers, grids, radii, shadows
- 04-components.md: buttons, nav, cards, footer
- 05-page-home.md: home page, section by section
- 06-other-pages.md: remaining routes and nav mapping
- 07-motion-and-decor.md: decorative elements, motion, design-specific accessibility

## Rules for the agent
- Use these values exactly. Do not invent new colors, fonts, or radii.
- Names, numbers, testimonials, and project titles in the mockup are placeholders. Take real content from `src/data/`.
- The mockup shows light mode only. Dark mode tokens are in 01-colors.md and were derived, not copied from the image.
- The mockup's nav does not match the site's routes. See 06-other-pages.md before building the header.
- If these files conflict with CLAUDE.md, stop and ask the user.

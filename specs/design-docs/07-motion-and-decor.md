# Decoration, Motion, and Design Accessibility

## Decorative elements
- Handwritten annotations, curved arrows, sparkle marks, and soft blob shapes behind photos.
- All are `aria-hidden="true"`. Removing them must not remove information.
- Hide or reposition them below the md breakpoint so they never overlap text.

## Motion
- Subtle fade-up on scroll for home page sections only.
- Card hover: lift 2px to 4px with a short transition.
- Wrap all motion in `motion-safe:` classes. Under `prefers-reduced-motion`, disable transforms and fades.
- Do not add auto-advancing carousels. If a testimonial slider is added later, it needs visible pause controls (WCAG 2.2.2).

## Images
- Portraits and project images need descriptive `alt` text.
- Use `next/image` with a `sizes` attribute.
- Decorative images use `alt=""`.

## Design-specific accessibility checks
- Focus ring: 2px ink outline with 2px offset, visible on both themes.
- Accent words must use accent-text, not the light accent, to pass contrast.
- Touch targets: at least 44px for buttons and nav links.
- Do not convey meaning by color alone. Status dots (such as "Available") need a text label.
- Check all text pairs against WCAG 1.4.3 in both themes before marking a page done.

# Layout and Spacing

## Containers
- Max content width: 1200px, centered.
- Horizontal padding: 24px on mobile, 48px on desktop.
- Section vertical padding: 64px on mobile, 96px on desktop.

## Section framing
Each major section sits in a large rounded panel (radius 32px) on the cream background, and panels overlap slightly with the section above. Keep panel backgrounds in the background or surface tokens.

## Grids
| Content | Mobile | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| Services | 1 column | 2 columns | 4 columns |
| Projects | 1 column | 2 columns | 3 columns |
| Testimonials | 1 column | 1 column | 3 columns |
| About | stacked | 2 columns | 2 columns |
| Hero | stacked | stacked | 2 columns (text left, image right) |

Use Tailwind default breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px.

## Radius
- Cards: 24px
- Images inside cards: 20px
- Section panels: 32px
- Buttons, pills, tags, avatars: fully rounded (9999px)

## Shadows
Use very soft shadows only, such as `0 8px 30px rgba(20, 22, 28, 0.06)`. Cards use a 1px border from the border token. Do not use hard shadows.

## Spacing
Use the Tailwind 4px-based scale. Keep gaps between cards at 24px on desktop and 16px on mobile.

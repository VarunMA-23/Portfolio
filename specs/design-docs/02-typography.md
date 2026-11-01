# Typography

## Font families
- **Headings:** a high-contrast bold serif (similar to Fraunces or Playfair Display). Used for the hero name, section titles, and CTA headline.
- **Body and UI:** a clean sans-serif (similar to Inter). Used for paragraphs, nav, buttons, labels.
- **Script accents:** a handwritten font (similar to Caveat). Used only for short decorative phrases such as "Good Design Brighter Tomorrow" and "Great Ideas Start with a Conversation."

Load fonts with `next/font/google`. Give every font a fallback stack.

## Type scale
| Role | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero name (h1) | 72px / 80px | 44px / 52px | 700 serif |
| Section title (h2) | 40px / 48px | 30px / 36px | 700 serif |
| Card title (h3) | 20px / 28px | 20px / 28px | 600 sans |
| Body | 18px / 28px | 16px / 26px | 400 sans |
| Caption, labels | 14px / 20px | 14px / 20px | 500 sans |
| Eyebrow | 12px / 16px, uppercase, 0.15em tracking | same | 600 sans, muted color |
| Script accent | 24px to 32px | 20px to 24px | handwritten |

## Rules
- Body text never drops below 16px.
- Paragraphs stay between 60 and 75 characters per line.
- Eyebrow labels (for example "WHAT I DO") sit above each section title.
- Script accents are `aria-hidden="true"`. Their meaning must also exist in normal text elsewhere.

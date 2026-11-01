# Colors

Hex values are estimated from the mockup. Confirm before changing `tailwind.config.ts`, since CLAUDE.md requires asking first.

## Light theme
| Token | Hex | Use |
|---|---|---|
| background | #FBF8F4 | Page background (warm off-white) |
| surface | #FFFFFF | Cards, nav pill |
| ink | #14161C | Headings, body text, primary buttons |
| muted | #5B6070 | Captions, secondary text |
| accent | #F2A07B | Decorative highlights, active nav pill border |
| accent-text | #B5582F | Accent used for text (see note) |
| accent-soft | #FCE6DA | "Hello, I'm" pill, active nav background |
| peach | #FBEBDD | Service card 1 |
| sky | #DDEBFA | Service card 2 |
| mint | #DFF1E3 | Service card 3, CTA banner |
| blush | #F6EEEC | Service card 4 |
| success | #34C759 | "Available" dot |
| star | #F5A623 | Rating stars |
| border | #EDE7E0 | Card and divider borders |

Note: the light accent (#F2A07B) on the background is about 2:1 contrast, which fails WCAG AA for text. Use accent-text for any accent-colored words.

## Dark theme (derived, not in mockup)
- background #121316, surface #1C1E23, ink #F5F3EF, muted #A3A8B5
- accent #F5B894 for decoration; accent-text on dark must be checked to reach 4.5:1
- Pastel cards become low-opacity tints of their light hue on dark backgrounds.
- Verify every text pair with a contrast checker in both themes.

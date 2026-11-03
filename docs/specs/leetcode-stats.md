# LeetCode Stats Section

## Goal

Show Varun's LeetCode progress on the home page: total questions solved plus the Easy / Medium / Hard breakdown.

## Data

Hardcoded in `src/data/leetcode.ts` with a snapshot from `https://leetcode.com/u/Varun_M_A/`:

- Total: 94
- Easy: 59
- Medium: 33
- Hard: 2

Update the `updatedLabel` whenever the numbers are refreshed.

## Components

- `src/components/home/LeetCodeStats.tsx` — section wrapper, heading, profile link, card shell.
- `src/components/home/LeetCodeProgress.tsx` — segmented donut chart + difficulty bars.

## Placement

Rendered on the home page between `Hero` and `FeaturedProjects` (above the hackathon wins).

## Acceptance criteria

- Displays the total solved count and Easy / Medium / Hard counts.
- Breakdown is readable as text, not color alone.
- Links to the public LeetCode profile in a new tab.
- Numbers match `src/data/leetcode.ts`.
- Responsive: stacks on mobile, two columns on large screens.
- Both light and dark themes use existing design tokens.

## Accessibility checks

- Section has a labelled `h2`.
- Donut chart is decorative (`aria-hidden`); all values are present as text.
- Progress bars are decorative; counts and percentages are announced as text.
- External link is keyboard focusable with a visible focus indicator.
- Touch targets meet the 44px minimum via `ButtonLink`.

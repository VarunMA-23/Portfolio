import { cn } from "@/lib/cn";
import type { LeetCodeContent, LeetCodeDifficultyKey } from "@/types/content";

const segmentColors = {
  easy: "stroke-success",
  medium: "stroke-star",
  hard: "stroke-accent",
} satisfies Record<LeetCodeDifficultyKey, string>;

const dotColors = {
  easy: "bg-success",
  medium: "bg-star",
  hard: "bg-accent",
} satisfies Record<LeetCodeDifficultyKey, string>;

const radius = 52;
const circumference = 2 * Math.PI * radius;
const segmentGap = 4;

export function LeetCodeProgress({ content }: { content: LeetCodeContent }) {
  const total = content.difficulties.reduce((sum, difficulty) => sum + difficulty.solved, 0);

  const segments = content.difficulties.reduce<
    { difficulty: (typeof content.difficulties)[number]; offset: number; length: number }[]
  >((acc, difficulty) => {
    const previous = acc[acc.length - 1];
    const offset = previous ? previous.offset + previous.length : 0;
    const length = (difficulty.solved / total) * circumference;
    return [...acc, { difficulty, offset, length }];
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
      <div className="relative shrink-0">
        <svg viewBox="0 0 120 120" aria-hidden="true" className="size-40 -rotate-90">
          <circle cx="60" cy="60" r={radius} className="fill-none stroke-border" strokeWidth={12} />
          {segments.map(({ difficulty, offset, length }) => {
            const dash = Math.max(length - segmentGap, 0);

            return (
              <circle
                key={difficulty.key}
                cx="60"
                cy="60"
                r={radius}
                className={cn("fill-none", segmentColors[difficulty.key])}
                strokeWidth={12}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-4xl font-bold leading-none text-ink">{total}</span>
          <span className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Solved
          </span>
        </div>
      </div>

      <ul className="w-full space-y-4">
        {content.difficulties.map((difficulty) => {
          const percent = Math.round((difficulty.solved / total) * 100);

          return (
            <li key={difficulty.key}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 font-semibold text-ink">
                  <span
                    className={cn("size-2.5 shrink-0 rounded-full", dotColors[difficulty.key])}
                    aria-hidden="true"
                  />
                  {difficulty.label}
                </span>
                <span className="text-muted">
                  <span className="font-semibold text-ink">{difficulty.solved}</span> solved ·{" "}
                  {percent}%
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border" aria-hidden="true">
                <div
                  className={cn("h-full rounded-full", dotColors[difficulty.key])}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

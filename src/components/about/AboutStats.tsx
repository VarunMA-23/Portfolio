import { Target, Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { AboutStat } from "@/types/content";

const statIcons = {
  trophy: Trophy,
  impact: Target,
} as const;

export function AboutStats({ stats }: { stats: AboutStat[] }) {
  return (
    <section aria-labelledby="about-stats-heading" className="pb-16 lg:pb-24">
      <Container>
        <h2 id="about-stats-heading" className="sr-only">
          At a glance
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <li
                key={stat.label}
                className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-soft"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <span className="flex flex-col">
                  <span className="font-serif text-3xl font-bold leading-9 text-ink">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

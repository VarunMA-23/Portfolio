import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { leetcodeContent } from "@/data/leetcode";
import { LeetCodeProgress } from "./LeetCodeProgress";

export function LeetCodeStats() {
  const content = leetcodeContent;

  return (
    <section
      aria-labelledby="leetcode-heading"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Pill>{content.eyebrow}</Pill>
            <h2
              id="leetcode-heading"
              className="mt-4 font-serif text-4xl font-bold tracking-tight text-ink lg:text-[3.25rem] lg:leading-[3.75rem]"
            >
              {content.headline.before}
              <span className="text-accent-text">{content.headline.accent}</span>
              {content.headline.after}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted lg:text-lg lg:leading-8">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={content.profileUrl}
                variant="secondary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SocialIcon name="leetcode" />
                {content.profileLabel}
              </ButtonLink>
              <span className="text-sm font-medium text-muted">{content.updatedLabel}</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-panel border border-border bg-surface p-6 shadow-soft md:p-10">
            <span
              className="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full bg-accent-soft"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-16 -left-12 size-44 rounded-full bg-sky"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Problem breakdown
              </p>
              <LeetCodeProgress content={content} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

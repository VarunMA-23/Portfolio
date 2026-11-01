import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";
import type { AboutContent } from "@/types/content";

const tints = ["bg-peach", "bg-sky", "bg-mint", "bg-blush"] as const;

export function SkillsSection({ content }: { content: AboutContent["skills"] }) {
  return (
    <section aria-labelledby="skills-heading" className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-panel border border-border bg-surface p-6 md:p-10">
          <Pill>{content.eyebrow}</Pill>
          <h2
            id="skills-heading"
            className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
          >
            {content.title}
          </h2>
          <p className="mt-3 max-w-prose text-base leading-7 text-muted">{content.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.groups.map((group, index) => {
              const headingId = `skill-group-${index}`;

              return (
                <section
                  key={group.title}
                  aria-labelledby={headingId}
                  className={cn("rounded-card p-5", tints[index % tints.length])}
                >
                  <h3 id={headingId} className="text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-surface/80 px-3 py-1 text-sm font-medium text-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

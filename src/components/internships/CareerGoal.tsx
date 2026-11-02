import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { InternshipContent } from "@/types/content";

export function CareerGoal({ content }: { content: InternshipContent["goal"] }) {
  return (
    <section aria-labelledby="goal-heading" className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-panel border border-border bg-surface p-6 md:p-10">
          <Pill>{content.eyebrow}</Pill>
          <h2
            id="goal-heading"
            className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
          >
            {content.title}
          </h2>
          <div className="mt-3 max-w-prose space-y-3">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

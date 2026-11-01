import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { AboutContent } from "@/types/content";

export function LearningSection({ content }: { content: AboutContent["learning"] }) {
  return (
    <section aria-labelledby="learning-heading" className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-panel bg-mint p-6 md:p-10">
          <Pill>{content.eyebrow}</Pill>
          <h2
            id="learning-heading"
            className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
          >
            {content.title}
          </h2>
          <p className="mt-3 max-w-prose text-base leading-7 text-muted">{content.description}</p>

          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {content.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-card bg-surface/70 p-4 text-sm font-medium leading-6 text-ink"
              >
                <Sparkles aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-text" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

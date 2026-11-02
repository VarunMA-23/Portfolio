import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { InternshipContent } from "@/types/content";

export function LookingForSection({ content }: { content: InternshipContent["lookingFor"] }) {
  return (
    <section aria-labelledby="looking-for-heading" className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-panel border border-border bg-surface p-6 md:p-10">
          <Pill>{content.eyebrow}</Pill>
          <h2
            id="looking-for-heading"
            className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
          >
            {content.title}
          </h2>
          <p className="mt-3 max-w-prose text-base leading-7 text-muted">{content.description}</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-card bg-accent-soft/60 p-4 text-base leading-7 text-ink"
              >
                <Check aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-accent-text" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

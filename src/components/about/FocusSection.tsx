import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { AboutContent } from "@/types/content";

export function FocusSection({ content }: { content: AboutContent["focus"] }) {
  return (
    <section aria-labelledby="focus-heading" className="pb-16 lg:pb-24">
      <Container>
        <Pill>{content.eyebrow}</Pill>
        <h2
          id="focus-heading"
          className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
        >
          {content.title}
        </h2>
        <p className="mt-3 max-w-prose text-base leading-7 text-muted">{content.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {content.areas.map((area) => (
            <article
              key={area.title}
              className="rounded-card border border-border bg-surface p-6 shadow-soft transition-colors hover:bg-surface"
            >
              <h3 className="text-lg font-semibold leading-7 text-ink">{area.title}</h3>
              <p className="mt-2 text-base leading-7 text-muted">{area.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { ContactContent } from "@/types/content";

export function ContactHeader({ content }: { content: ContactContent }) {
  return (
    <section aria-labelledby="contact-heading" className="relative overflow-hidden py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <Pill>{content.eyebrow}</Pill>
          <h1
            id="contact-heading"
            className="mt-6 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
          >
            {content.title}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
            {content.description}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-success" />
            {content.availability}
          </p>
        </div>
      </Container>
    </section>
  );
}

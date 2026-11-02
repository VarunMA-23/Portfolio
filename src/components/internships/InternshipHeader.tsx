import { Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { buttonBase, buttonVariants } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/cn";
import type { InternshipContent } from "@/types/content";

export function InternshipHeader({ content }: { content: InternshipContent }) {
  return (
    <section
      aria-labelledby="internships-heading"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <Pill>{content.eyebrow}</Pill>
          <h1
            id="internships-heading"
            className="mt-6 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
          >
            {content.title}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
            {content.intro}
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink">
            <span aria-hidden="true" className="size-2 rounded-full bg-success" />
            {content.availability}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={content.primaryCta.href} className={cn(buttonBase, buttonVariants.primary)}>
              <Mail aria-hidden="true" className="size-5" />
              {content.primaryCta.label}
            </a>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

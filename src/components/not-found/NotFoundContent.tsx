import { ArrowLeft, Compass, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";

export function NotFoundContent() {
  return (
    <section aria-labelledby="not-found-heading" className="relative overflow-hidden py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <Pill>404 — Page not found</Pill>

          <p
            aria-hidden="true"
            className="mt-6 font-serif text-6xl font-bold leading-none tracking-tight text-accent-text lg:text-8xl"
          >
            404
          </p>

          <h1
            id="not-found-heading"
            className="mt-4 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
          >
            This page is missing or still being built.
          </h1>

          <p className="mt-4 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
            The address may be mistyped, or the page has not shipped yet. Everything below is
            live — pick a direction and keep exploring.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/">
              <ArrowLeft aria-hidden="true" className="size-5" />
              Back to Home
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              <Compass aria-hidden="true" className="size-5" />
              Browse Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              <Mail aria-hidden="true" className="size-5" />
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

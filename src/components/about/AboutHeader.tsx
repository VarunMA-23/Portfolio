import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";
import type { AboutContent } from "@/types/content";
import { AboutPortrait } from "./AboutPortrait";

export function AboutHeader({ content }: { content: AboutContent }) {
  return (
    <section aria-labelledby="about-heading" className="relative overflow-hidden py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
        <div className="motion-safe:animate-fade-up">
          <Pill>{content.eyebrow}</Pill>

          <h1
            id="about-heading"
            className="mt-6 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
          >
            {content.headline.before}
            <span className="text-accent-text">{content.headline.accent}</span>
            {content.headline.after}
          </h1>

          <div className="mt-6 space-y-4">
            {content.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-medium leading-6 text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact">
              Get in Touch
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </ButtonLink>
            <ButtonLink
              href={siteConfig.social[0]?.href ?? "https://github.com/VarunMA-23"}
              variant="secondary"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SocialIcon name="github" />
              View GitHub
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <SocialLinks links={siteConfig.social} />
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <span className="size-2.5 rounded-full bg-success" aria-hidden="true" />
              {content.availability}
            </p>
          </div>
        </div>

        <AboutPortrait content={content} />
      </Container>
    </section>
  );
}

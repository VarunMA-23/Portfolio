import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/data/site";
import type { HeroContent as HeroContentData } from "@/types/content";

export function HeroContent({ content }: { content: HeroContentData }) {
  return (
    <div className="motion-safe:animate-fade-up">
      <Pill>{content.eyebrow}</Pill>

      <h1
        id="hero-heading"
        className="mt-6 font-serif text-[2.75rem] font-bold leading-[3.25rem] tracking-tight text-ink lg:text-[4.5rem] lg:leading-[5rem]"
      >
        {content.name}
      </h1>

      <p className="mt-4 max-w-xl font-serif text-2xl leading-9 text-ink lg:text-3xl lg:leading-10">
        {content.headline.before}
        <span className="text-accent-text">{content.headline.accent}</span>
        {content.headline.after}
      </p>

      <p className="mt-6 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
        {content.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink href={content.primaryCta.href}>
          {content.primaryCta.label}
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </ButtonLink>
        <ButtonLink
          href={content.secondaryCta.href}
          variant="secondary"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SocialIcon name="github" />
          {content.secondaryCta.label}
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
  );
}

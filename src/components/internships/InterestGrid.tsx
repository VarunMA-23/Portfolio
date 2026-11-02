import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { InternshipContent } from "@/types/content";
import { InterestCard } from "./InterestCard";

export function InterestGrid({ content }: { content: InternshipContent["interests"] }) {
  return (
    <section aria-labelledby="interest-heading" className="pb-16 lg:pb-24">
      <Container>
        <Pill>{content.eyebrow}</Pill>
        <h2
          id="interest-heading"
          className="mt-4 font-serif text-3xl font-bold leading-9 text-ink lg:text-4xl lg:leading-[3rem]"
        >
          {content.title}
        </h2>
        <p className="mt-3 max-w-prose text-base leading-7 text-muted">{content.description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.tracks.map((track, index) => (
            <InterestCard key={track.title} track={track} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

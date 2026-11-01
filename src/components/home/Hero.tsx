import { Container } from "@/components/layout/Container";
import { heroContent } from "@/data/hero";
import { HeroContent } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <HeroContent content={heroContent} />
        <HeroPortrait content={heroContent} />
      </Container>
    </section>
  );
}

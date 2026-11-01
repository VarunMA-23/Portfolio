import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </ButtonLink>
          <MobileMenu items={siteConfig.nav} />
        </div>
      </Container>
    </header>
  );
}

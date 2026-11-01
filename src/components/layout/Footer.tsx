import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-6 text-muted">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <nav aria-label="Footer">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Explore
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-x-8 sm:grid-cols-1">
                {siteConfig.footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm text-ink underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Follow</p>
              <SocialLinks links={siteConfig.social} className="mt-3" />
            </div>
          </div>
        </div>

        <p className="border-t border-border pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

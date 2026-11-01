export type NavItem = {
  label: string;
  href: string;
};

export type SocialIconName = "x" | "instagram" | "linkedin" | "dribbble" | "github";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  name: string;
  headline: {
    before: string;
    accent: string;
    after: string;
  };
  description: string;
  availability: string;
  scriptAccent: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stats: HeroStat[];
};

export type SiteConfig = {
  name: string;
  logo: string;
  tagline: string;
  email: string;
  nav: NavItem[];
  footerNav: NavItem[];
  social: SocialLink[];
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialIconName =
  | "x"
  | "instagram"
  | "linkedin"
  | "dribbble"
  | "github"
  | "leetcode";

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
  resume?: {
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

export type LeetCodeDifficultyKey = "easy" | "medium" | "hard";

export type LeetCodeDifficulty = {
  key: LeetCodeDifficultyKey;
  label: string;
  solved: number;
};

export type LeetCodeContent = {
  eyebrow: string;
  headline: {
    before: string;
    accent: string;
    after: string;
  };
  description: string;
  profileUrl: string;
  profileLabel: string;
  updatedLabel: string;
  difficulties: LeetCodeDifficulty[];
};

export type AboutMetaItem = {
  label: string;
  value: string;
};

export type AboutStatIcon = "trophy" | "impact";

export type AboutStat = {
  value: string;
  label: string;
  icon: AboutStatIcon;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type FocusArea = {
  title: string;
  description: string;
  tags: string[];
};

export type AboutContent = {
  eyebrow: string;
  headline: {
    before: string;
    accent: string;
    after: string;
  };
  intro: string[];
  meta: AboutMetaItem[];
  availability: string;
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stats: AboutStat[];
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  focus: {
    eyebrow: string;
    title: string;
    description: string;
    areas: FocusArea[];
  };
  learning: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
};

export type ProjectCategory = "AI/ML" | "FinTech" | "Healthcare" | "Systems";

export type ProjectIconName = "brain" | "shield" | "network" | "scan" | "heart";

export type ProjectTint = "peach" | "sky" | "mint" | "blush";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  icon: ProjectIconName;
  tint: ProjectTint;
  tags: string[];
  metrics: ProjectMetric[];
  overview: string[];
  highlights: string[];
  stack: string[];
  links?: ProjectLink[];
  /** Short achievement badge shown on the home page featured card, e.g. "🏆 National Hackathon Winner" */
  achievement?: string;
  /** When true the project appears in the home-page featured strip */
  featured?: boolean;
  /** Optional real photo for the card header (path relative to /public) */
  photo?: { src: string; alt: string };
};

export type ProjectContent = {
  eyebrow: string;
  title: string;
  description: string;
  detail: {
    backLabel: string;
    overviewTitle: string;
    highlightsTitle: string;
    stackTitle: string;
    nextLabel: string;
    previousLabel: string;
    ctaNote: string;
  };
  projects: Project[];
};

export type InternshipTrackIcon = "code" | "layers" | "brain" | "server";

export type InternshipTrack = {
  title: string;
  icon: InternshipTrackIcon;
  tint: ProjectTint;
  bullets: string[];
};

export type InternshipLink = {
  label: string;
  href: string;
};

export type InternshipContent = {
  eyebrow: string;
  title: string;
  intro: string;
  availability: string;
  primaryCta: InternshipLink;
  secondaryCta: InternshipLink;
  interests: {
    eyebrow: string;
    title: string;
    description: string;
    tracks: InternshipTrack[];
  };
  lookingFor: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  goal: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
};

export type ContactIconName = "mail" | "linkedin" | "leetcode";

export type ContactChannel = {
  icon: ContactIconName;
  label: string;
  value: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  availability: string;
  channels: ContactChannel[];
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

import type { SiteConfig } from "@/types/content";

export const linkedinUrl = "https://www.linkedin.com/in/varun-ankanahalli-6512a03a9/";

export const siteConfig: SiteConfig = {
  name: "Varun",
  logo: "Varun",
  tagline: "AI/ML engineer building autonomous systems and high-throughput backends.",
  email: "v66581770@gmail.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Internships", href: "/internships" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Internships", href: "/internships" },
    { label: "Achievements", href: "/achievements" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Varun on GitHub", href: "https://github.com/VarunMA-23", icon: "github" },
    {
      label: "Varun on LinkedIn",
      href: linkedinUrl,
      icon: "linkedin",
    },
    { label: "Varun on X", href: "https://x.com/VarunMA_23", icon: "x" },
  ],
};

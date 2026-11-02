import type { ContactContent } from "@/types/content";
import { linkedinUrl, siteConfig } from "./site";

export const contactContent: ContactContent = {
  eyebrow: "Get in Touch",
  title: "Let's build something together.",
  description:
    "I'm open to AI/ML roles, internships, collaborations, and ambitious hackathons. Reach out through whichever channel works best for you.",
  availability: "Open to AI/ML roles, internships, and collaborations",
  channels: [
    {
      icon: "mail",
      label: "Email",
      value: siteConfig.email,
      description: "Best for detailed questions, role opportunities, and project ideas.",
      href: `mailto:${siteConfig.email}`,
      cta: "Send an email",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "Varun Manjunatha Ankanahalli",
      description: "Connect with me, send a direct message, or follow what I'm building.",
      href: linkedinUrl,
      cta: "View LinkedIn profile",
      external: true,
    },
  ],
};

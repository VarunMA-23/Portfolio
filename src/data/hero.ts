import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Hello, I'm",
  name: "Varun",
  headline: {
    before: "Building intelligent systems with ",
    accent: "real-world impact",
    after: ".",
  },
  description:
    "AI/ML engineer and CSE Data Science student at CMRIT, Bengaluru. I build autonomous agents, scalable backends, and computer vision systems for healthcare, fintech, and trust and safety.",
  availability: "Open to AI/ML roles and collaborations",
  scriptAccent: "Always learning, always shipping",
  primaryCta: {
    label: "View My Work",
    href: "/projects",
  },
  secondaryCta: {
    label: "View GitHub",
    href: "https://github.com/VarunMA-23",
  },
  portrait: {
    src: "/images/Varun_insta_560x640.jpg",
    alt: "Portrait of Varun Manjunatha Ankanahalli",
    width: 560,
    height: 640,
  },
  stats: [
    { value: "3x", label: "Hackathon Wins" },
    { value: "24", label: "Public Repos" },
  ],
};

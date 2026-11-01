import type { Metadata } from "next";
import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutStats } from "@/components/about/AboutStats";
import { FocusSection } from "@/components/about/FocusSection";
import { LearningSection } from "@/components/about/LearningSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Varun Manjunatha Ankanahalli is an AI/ML engineer in Bengaluru building autonomous agents, real-time ML systems, and distributed backends.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader content={aboutContent} />
      <AboutStats stats={aboutContent.stats} />
      <SkillsSection content={aboutContent.skills} />
      <FocusSection content={aboutContent.focus} />
      <LearningSection content={aboutContent.learning} />
    </>
  );
}

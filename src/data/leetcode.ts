import type { LeetCodeContent } from "@/types/content";
import { leetcodeUrl } from "./site";

export const leetcodeContent: LeetCodeContent = {
  eyebrow: "LeetCode",
  headline: {
    before: "Consistency compounds, ",
    accent: "one problem at a time.",
    after: "",
  },
  description:
    "A snapshot of my ongoing LeetCode practice across data structures, algorithms, and the patterns that keep showing up in real interviews.",
  profileUrl: leetcodeUrl,
  profileLabel: "View LeetCode profile",
  updatedLabel: "Updated November 2026",
  difficulties: [
    { key: "easy", label: "Easy", solved: 59 },
    { key: "medium", label: "Medium", solved: 33 },
    { key: "hard", label: "Hard", solved: 2 },
  ],
};

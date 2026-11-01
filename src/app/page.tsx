import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Varun Manjunatha Ankanahalli is an AI/ML engineer building autonomous systems, scalable backends, and computer vision products.",
};

export default function HomePage() {
  return <Hero />;
}

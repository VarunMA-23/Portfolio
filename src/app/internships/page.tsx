import type { Metadata } from "next";
import { CareerGoal } from "@/components/internships/CareerGoal";
import { InterestGrid } from "@/components/internships/InterestGrid";
import { InternshipHeader } from "@/components/internships/InternshipHeader";
import { LookingForSection } from "@/components/internships/LookingForSection";
import { internshipContent } from "@/data/internships";

export const metadata: Metadata = {
  title: "Internships",
  description:
    "Varun Manjunatha Ankanahalli is seeking software engineering internships in backend, full-stack, and AI/ML development.",
};

export default function InternshipsPage() {
  return (
    <>
      <InternshipHeader content={internshipContent} />
      <InterestGrid content={internshipContent.interests} />
      <LookingForSection content={internshipContent.lookingFor} />
      <CareerGoal content={internshipContent.goal} />
    </>
  );
}

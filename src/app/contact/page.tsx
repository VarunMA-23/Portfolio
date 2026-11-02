import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { contactContent } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Varun Manjunatha Ankanahalli by email or LinkedIn for AI/ML roles, internships, and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader content={contactContent} />
      <ContactChannels channels={contactContent.channels} />
    </>
  );
}

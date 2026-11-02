import { Container } from "@/components/layout/Container";
import type { ContactChannel } from "@/types/content";
import { ContactCard } from "./ContactCard";

export function ContactChannels({ channels }: { channels: ContactChannel[] }) {
  return (
    <section aria-labelledby="contact-channels-heading" className="pb-16 lg:pb-24">
      <Container>
        <h2 id="contact-channels-heading" className="sr-only">
          Ways to reach Varun
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <ContactCard channel={channel} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

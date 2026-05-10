import type { Metadata } from "next";
import { contact } from "@/content/copy";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="container-x pt-40 pb-section">
      <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
        {contact.hero.eyebrow}
      </p>
      <h1 className="mt-6 font-display text-display-lg text-balance">
        {contact.hero.headline}
      </h1>
      <p className="mt-8 max-w-prose text-lg leading-relaxed text-gray">
        Phase 2 contact-builder fills in the form, contact info, and stylized
        location map.
      </p>
    </section>
  );
}

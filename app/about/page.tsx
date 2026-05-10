import type { Metadata } from "next";
import { about } from "@/content/copy";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="container-x pt-40 pb-section">
      <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
        {about.hero.eyebrow}
      </p>
      <h1 className="mt-6 font-display text-display-lg text-balance">
        {about.hero.headline}
      </h1>
      <p className="mt-8 max-w-prose text-lg leading-relaxed text-gray">
        Phase 2 about-builder fills in the full company story, leadership
        detail, values, and coverage.
      </p>
    </section>
  );
}

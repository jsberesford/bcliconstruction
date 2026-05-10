"use client";

import { about } from "@/content/copy";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BlueprintGrid } from "@/components/decorative/BlueprintGrid";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-section">
      <BlueprintGrid opacity={0.1} />

      <div className="container-x relative z-10">
        <ScrollReveal delay={0}>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {about.hero.eyebrow}
          </p>
        </ScrollReveal>

        <AnimatedHeadline
          as="h1"
          text={about.hero.headline}
          highlightWord="work"
          className="mt-6 text-display-lg max-w-3xl"
        />

        <ScrollReveal delay={0.15}>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-gray">
            {about.hero.sub}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

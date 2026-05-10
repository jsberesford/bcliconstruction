import { contact } from "@/content/copy";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { BlueprintGrid } from "@/components/decorative/BlueprintGrid";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-section">
      <BlueprintGrid opacity={0.1} />
      <div className="container-x relative">
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {contact.hero.eyebrow}
          </p>
        </ScrollReveal>
        <div className="mt-6">
          <AnimatedHeadline
            as="h1"
            text={contact.hero.headline}
            className="text-display-lg"
            highlightWord="project."
          />
        </div>
        <ScrollReveal delay={0.15}>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-gray">
            {contact.hero.sub}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

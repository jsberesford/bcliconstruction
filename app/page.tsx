import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { BlueprintGrid } from "@/components/decorative/BlueprintGrid";
import { home } from "@/content/copy";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-40 pb-section">
        <BlueprintGrid className="opacity-[0.12]" />
        <div className="container-x relative">
          <ScrollReveal>
            <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
              {home.hero.eyebrow}
            </p>
          </ScrollReveal>
          <AnimatedHeadline
            as="h1"
            text={home.hero.headline}
            highlightWord="ground"
            className="mt-6 text-display-xl text-balance"
          />
          <ScrollReveal delay={0.2} className="mt-8 max-w-prose">
            <p className="text-lg leading-relaxed text-gray">{home.hero.sub}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.35} className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticCTA href={home.hero.primaryCta.href} tone="accent">
              {home.hero.primaryCta.label}
            </MagneticCTA>
            <MagneticCTA
              href={home.hero.secondaryCta.href}
              tone="ghost"
              showArrow={false}
            >
              {home.hero.secondaryCta.label}
            </MagneticCTA>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x pb-section">
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            Phase 2 builds the rest of this page
          </p>
          <p className="mt-4 max-w-prose text-base text-gray">
            Home page sections (About, Services, Equipment Rentals, Leadership,
            Closing CTA) are assigned to the home builder agent and will be
            rendered here.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}

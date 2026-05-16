import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { LineIllustration } from "@/components/decorative/LineIllustration";
import { EquipmentMarquee } from "@/components/sections/EquipmentMarquee";
import { rentals } from "@/content/rentals";
import { equipment } from "@/content/equipment";

export function EquipmentRentals() {
  return (
    <section id="rentals" className="py-section bg-beige relative overflow-hidden">
      {/* Mixer illustration, decorative, no accent on this one */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-[0.12] hidden md:block"
        aria-hidden
      >
        <LineIllustration variant="mixer" accent={false} />
      </div>

      <div className="container-x relative">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {rentals.eyebrow}
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <AnimatedHeadline
            as="h2"
            text={rentals.headline}
            className="mt-4 text-display-md text-balance max-w-xl"
          />
        </ScrollReveal>

        {/* Body */}
        <ScrollReveal delay={0.15} className="mt-6 max-w-prose">
          <p className="text-base leading-relaxed text-ink">{rentals.body}</p>
        </ScrollReveal>
      </div>

      {/* Full bleed equipment marquee, sits between body and CTA */}
      <ScrollReveal delay={0.2} className="mt-10">
        <EquipmentMarquee items={equipment} />
      </ScrollReveal>

      <div className="container-x relative">
        {/* Yellow CTA (one of the 4 allowed yellow moments) */}
        <ScrollReveal delay={0.25} className="mt-10">
          <MagneticCTA href={rentals.ctaHref} tone="accent">
            {rentals.ctaLabel}
          </MagneticCTA>
        </ScrollReveal>
      </div>
    </section>
  );
}

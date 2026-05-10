import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { LineIllustration } from "@/components/decorative/LineIllustration";
import { rentals } from "@/content/rentals";

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
        {/* Eyebrow + status chip */}
        <ScrollReveal className="flex items-center gap-3">
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {rentals.eyebrow}
          </p>
          <span className="inline-flex items-center rounded-full border border-rule bg-cream px-3 py-1 text-eyebrow uppercase tracking-eyebrow text-gray">
            {rentals.status}
          </span>
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

        {/* Equipment list */}
        <ScrollReveal delay={0.2} className="mt-8">
          <ul className="space-y-2">
            {rentals.equipment.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray">
                <span
                  className="h-px w-6 bg-rule shrink-0"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

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

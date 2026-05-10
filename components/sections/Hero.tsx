"use client";

import { BlueprintGrid } from "@/components/decorative/BlueprintGrid";
import { LineIllustration } from "@/components/decorative/LineIllustration";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { home } from "@/content/copy";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[90vh] flex flex-col justify-center pt-40 pb-section"
    >
      {/* Blueprint grid backdrop at ~12% opacity */}
      <BlueprintGrid className="opacity-[0.12]" />

      {/* Plumb line illustration, decorative, low opacity, no accent yellow here */}
      <div
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 w-20 opacity-[0.18] hidden lg:block"
        aria-hidden
      >
        <LineIllustration variant="plumb" accent={false} />
      </div>

      <div className="container-x relative flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {home.hero.eyebrow}
          </p>
        </ScrollReveal>

        {/* H1 with yellow underline on "ground" */}
        <AnimatedHeadline
          as="h1"
          text={home.hero.headline}
          highlightWord="ground"
          className="mt-6 text-display-xl text-balance max-w-4xl"
        />

        {/* Subhead */}
        <ScrollReveal delay={0.2} className="mt-8 max-w-prose">
          <p className="text-lg leading-relaxed text-gray">{home.hero.sub}</p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal
          delay={0.35}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
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

      {/* Scroll cue */}
      <div className="container-x relative mt-16">
        <div className="flex items-center gap-2 text-gray opacity-60">
          <ChevronDown size={16} aria-hidden />
          <span className="text-eyebrow uppercase tracking-eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { VideoBackground } from "@/components/shared/VideoBackground";
import { home } from "@/content/copy";
import { ChevronDown } from "lucide-react";

const HERO_VIDEOS = [
  "/videos/construction-1.mp4",
  "/videos/construction-2.mp4",
  "/videos/construction-3.mp4",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[100vh] flex flex-col justify-center pt-40 pb-section text-cream"
    >
      {/* Full-bleed construction footage. Sequences three clips with a soft
          crossfade between them and falls back to a still poster when
          prefers-reduced-motion is set. */}
      <VideoBackground
        sources={HERO_VIDEOS}
        poster="/videos/poster.jpg"
        ariaLabel="BCLI construction work across Guyana: excavation, drainage, and roadworks in progress."
      />

      {/* Legibility overlay. Darker at the bottom where the copy and CTAs
          sit so the headline reads even against bright cloudy footage. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink/65"
      />

      <div className="container-x relative flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-cream/70">
            {home.hero.eyebrow}
          </p>
        </ScrollReveal>

        {/* H1 with yellow underline on "ground" */}
        <AnimatedHeadline
          as="h1"
          text={home.hero.headline}
          highlightWord="ground"
          className="mt-6 text-display-xl text-balance max-w-4xl text-cream drop-shadow-[0_2px_24px_rgba(15,15,15,0.45)]"
        />

        {/* Subhead */}
        <ScrollReveal delay={0.2} className="mt-8 max-w-prose">
          <p className="text-lg leading-relaxed text-cream/85">
            {home.hero.sub}
          </p>
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
            className="text-cream ring-cream/40 hover:ring-cream/80"
          >
            {home.hero.secondaryCta.label}
          </MagneticCTA>
        </ScrollReveal>
      </div>

      {/* Scroll cue */}
      <div className="container-x relative mt-16">
        <div className="flex items-center gap-2 text-cream/70">
          <ChevronDown size={16} aria-hidden />
          <span className="text-eyebrow uppercase tracking-eyebrow">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

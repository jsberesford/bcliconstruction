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
      className="relative isolate overflow-hidden min-h-[100vh] flex flex-col justify-center pt-40 pb-section text-white"
    >
      {/* Full-bleed construction footage. Sequences three clips with a soft
          crossfade between them and falls back to a still poster when
          prefers-reduced-motion is set. */}
      <VideoBackground
        sources={HERO_VIDEOS}
        poster="/videos/poster.jpg"
        ariaLabel="BCLI construction work across Guyana: excavation, drainage, and roadworks in progress."
      />

      {/* Top scrim: protects the navigation against bright frames of the
          video. Fades to transparent before the headline begins. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-ink/70 via-ink/40 to-transparent"
      />

      {/* Body legibility overlay. Darker at the bottom where the copy and
          CTAs sit so they read even against bright cloudy footage. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/70"
      />

      <div className="container-x relative flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
            {home.hero.eyebrow}
          </p>
        </ScrollReveal>

        {/* H1 with yellow underline on "ground" */}
        <AnimatedHeadline
          as="h1"
          text={home.hero.headline}
          highlightWord="ground"
          className="mt-6 text-display-xl text-balance max-w-5xl text-white font-bold [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
        />

        {/* Subhead */}
        <ScrollReveal delay={0.2} className="mt-8 max-w-prose">
          <p className="text-lg md:text-xl leading-relaxed text-white/95 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)]">
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
            className="text-white ring-white/50 hover:ring-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
          >
            {home.hero.secondaryCta.label}
          </MagneticCTA>
        </ScrollReveal>
      </div>

      {/* Scroll cue */}
      <div className="container-x relative mt-16">
        <div className="flex items-center gap-2 text-white/80 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
          <ChevronDown size={16} aria-hidden />
          <span className="text-eyebrow uppercase tracking-eyebrow">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

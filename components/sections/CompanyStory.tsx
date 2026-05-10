"use client";

import { about } from "@/content/copy";
import { company } from "@/content/company";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CountUp } from "@/components/shared/CountUp";
import { LineIllustration } from "@/components/decorative/LineIllustration";

export function CompanyStory() {
  return (
    <section className="bg-beige py-section">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto]">
          {/* Main content */}
          <div className="max-w-2xl">
            <ScrollReveal delay={0}>
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                {about.story.eyebrow}
              </p>
            </ScrollReveal>

            <AnimatedHeadline
              as="h2"
              text={about.story.headline}
              className="mt-4 text-display-md"
            />

            <div className="mt-10 space-y-6">
              {about.story.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <p className="text-base leading-relaxed text-ink/80">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* CountUp stat */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex items-baseline gap-3 border-t border-rule pt-8">
                <CountUp
                  to={company.yearsOfExperience}
                  suffix="+"
                  className="font-display text-display-md text-ink"
                />
                <span className="text-sm text-gray">
                  Years of civil construction experience across Guyana
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Decorative illustration */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
            <LineIllustration
              variant="bridge"
              accent={true}
              className="w-56 opacity-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

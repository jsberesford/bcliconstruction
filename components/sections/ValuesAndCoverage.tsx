"use client";

import { about } from "@/content/copy";
import { company } from "@/content/company";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ValuesAndCoverage() {
  return (
    <>
      {/* Values sub-section */}
      <section className="bg-beige py-section">
        <div className="container-x">
          <ScrollReveal delay={0}>
            <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
              {about.values.eyebrow}
            </p>
          </ScrollReveal>

          <AnimatedHeadline
            as="h2"
            text={about.values.headline}
            highlightWord="Quality"
            className="mt-4 text-display-md max-w-2xl"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {about.values.items.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="group rounded-sm border border-rule bg-cream p-8 transition-colors duration-200 hover:border-rule/0 hover:bg-white hover:shadow-sm">
                  <h3 className="font-display text-display-sm text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage sub-section */}
      <section className="bg-cream py-section">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal delay={0}>
                <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                  {about.coverage.eyebrow}
                </p>
              </ScrollReveal>

              <AnimatedHeadline
                as="h3"
                text={about.coverage.headline}
                className="mt-4 text-display-sm"
              />

              <ScrollReveal delay={0.15}>
                <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/80">
                  {about.coverage.body}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                  Regions served
                </p>
                <ul className="mt-6 space-y-3">
                  {company.regions.map((region) => (
                    <li
                      key={region}
                      className="flex items-start gap-3 text-base text-ink/80"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink/30"
                        aria-hidden
                      />
                      {region}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

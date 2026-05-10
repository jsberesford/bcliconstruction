import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { CountUp } from "@/components/shared/CountUp";
import { home } from "@/content/copy";

export function HomeAbout() {
  return (
    <section id="about" className="py-section bg-cream">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left column: eyebrow + headline */}
          <div>
            <ScrollReveal>
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                {home.about.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <AnimatedHeadline
                as="h2"
                text={home.about.headline}
                highlightWord="done"
                className="mt-4 text-display-md text-balance"
              />
            </ScrollReveal>
          </div>

          {/* Right column: body + stat */}
          <ScrollReveal delay={0.2}>
            <p className="text-base leading-relaxed text-ink max-w-prose">
              {home.about.body}
            </p>

            {/* Stat block */}
            <div className="mt-12 border-t border-rule pt-8">
              <p className="font-display text-display-lg text-ink leading-none">
                <CountUp
                  to={home.about.stat.value}
                  suffix={home.about.stat.suffix}
                  duration={1.6}
                />
              </p>
              <p className="mt-2 text-sm text-gray tracking-wide">
                {home.about.stat.label}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

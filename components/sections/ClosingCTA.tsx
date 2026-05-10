import Link from "next/link";
import { ContourLines } from "@/components/decorative/ContourLines";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { MagneticCTA } from "@/components/shared/MagneticCTA";
import { home } from "@/content/copy";
import { company } from "@/content/company";

export function ClosingCTA() {
  return (
    <section id="contact-cta" className="py-section bg-beige relative overflow-hidden">
      {/* ContourLines background with accent on one stroke (4th yellow moment) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden
      >
        <ContourLines accent={true} />
      </div>

      <div className="container-x relative">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {home.closing.eyebrow}
          </p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <AnimatedHeadline
            as="h2"
            text={home.closing.headline}
            className="mt-4 text-display-md text-balance max-w-xl"
          />
        </ScrollReveal>

        {/* Sub */}
        <ScrollReveal delay={0.15} className="mt-6 max-w-prose">
          <p className="text-base text-gray leading-relaxed">
            {home.closing.sub}
          </p>
        </ScrollReveal>

        {/* Contact details */}
        <ScrollReveal delay={0.2} className="mt-8 flex flex-col gap-2">
          <a
            href={company.contact.phoneHref}
            className="text-base text-ink font-medium hover:text-gray transition-colors"
          >
            {company.contact.phone}
          </a>
          <a
            href={company.contact.emailHref}
            className="text-base text-ink font-medium hover:text-gray transition-colors"
          >
            {company.contact.email}
          </a>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal
          delay={0.25}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Yellow CTA (3rd yellow moment) */}
          <MagneticCTA href={home.closing.primaryCta.href} tone="accent">
            {home.closing.primaryCta.label}
          </MagneticCTA>

          {/* Secondary as plain underlined link */}
          <Link
            href={home.closing.secondaryCta.href}
            className="text-sm font-medium text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors"
          >
            {home.closing.secondaryCta.label}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

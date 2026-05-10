import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { home } from "@/content/copy";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="py-section bg-beige">
      <div className="container-x">
        {/* Section header */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {home.services.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AnimatedHeadline
            as="h2"
            text={home.services.headline}
            className="mt-4 text-display-md text-balance max-w-2xl"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="mt-6 max-w-prose">
          <p className="text-base leading-relaxed text-gray">
            {home.services.intro}
          </p>
        </ScrollReveal>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.id}
              delay={0.08 * i}
              className="group relative flex flex-col rounded-sm border border-rule bg-cream p-8 transition-transform duration-300 ease-out-expo hover:-translate-y-1 hover:border-ink/20 hover:shadow-sm"
            >
              {/* Index eyebrow */}
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                {service.index}
              </p>

              {/* Title */}
              <h3 className="mt-4 font-display text-display-sm text-ink">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-sm font-medium text-ink leading-snug">
                {service.summary}
              </p>

              {/* Body */}
              <p className="mt-4 text-sm leading-relaxed text-gray flex-1">
                {service.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

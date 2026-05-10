import { contact } from "@/content/copy";
import { company } from "@/content/company";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactInfo() {
  return (
    <section className="bg-cream py-section">
      <div className="container-x">
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {contact.info.eyebrow}
          </p>
        </ScrollReveal>
        <div className="mt-6">
          <AnimatedHeadline
            as="h2"
            text={contact.info.headline}
            className="text-display-md"
          />
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray mb-3">
                Phone
              </p>
              <a
                href={company.contact.phoneHref}
                className="text-lg font-medium text-ink hover:text-gray transition-colors"
              >
                {company.contact.phone}
              </a>
            </div>

            <div>
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray mb-3">
                Email
              </p>
              <a
                href={company.contact.emailHref}
                className="text-base font-medium text-ink hover:text-gray transition-colors break-all"
              >
                {company.contact.email}
              </a>
            </div>

            <div>
              <p className="text-eyebrow uppercase tracking-eyebrow text-gray mb-3">
                Address
              </p>
              <address className="not-italic text-base font-medium text-ink leading-relaxed">
                {company.contact.address.line1}
                <br />
                {company.contact.address.line2}
              </address>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

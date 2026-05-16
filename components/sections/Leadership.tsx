import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { home } from "@/content/copy";
import { leaders } from "@/content/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-section bg-cream">
      <div className="container-x">
        {/* Section header */}
        <ScrollReveal>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {home.leadership.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AnimatedHeadline
            as="h2"
            text={home.leadership.headline}
            className="mt-4 text-display-md text-balance max-w-xl"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="mt-4 max-w-prose">
          <p className="text-base text-gray leading-relaxed">
            {home.leadership.intro}
          </p>
        </ScrollReveal>

        {/* Leader cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.id} delay={0.1 * i}>
              <article className="flex flex-col gap-6">
                {/* Portrait. Real photo when leader.photo is set, otherwise
                    a person-icon placeholder that reads as intentional. */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-beige ring-1 ring-rule/60 flex items-center justify-center">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <User
                      aria-hidden
                      strokeWidth={1.25}
                      className="h-[42%] w-[42%] text-gray"
                    />
                  )}
                </div>

                {/* Role */}
                <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
                  {leader.role}
                </p>

                {/* Name */}
                <h3 className="font-display text-display-sm text-ink leading-tight -mt-3">
                  {leader.name}
                  {leader.knownAs ? (
                    <span className="font-sans text-base font-normal text-gray ml-2">
                      ({leader.knownAs})
                    </span>
                  ) : null}
                </h3>

                {/* Short bio, rendered as-is from content */}
                <p className="text-sm leading-relaxed text-ink -mt-2">
                  {leader.shortBio}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Detail link */}
        <ScrollReveal delay={0.2} className="mt-12">
          <Link
            href={home.leadership.detailLink.href}
            className="text-sm font-medium text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors"
          >
            {home.leadership.detailLink.label}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

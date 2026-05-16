"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { about } from "@/content/copy";
import { leaders } from "@/content/leadership";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function LeadershipDetail() {
  return (
    <section className="bg-cream py-section">
      <div className="container-x">
        <ScrollReveal delay={0}>
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {about.leadership.eyebrow}
          </p>
        </ScrollReveal>

        <AnimatedHeadline
          as="h2"
          text={about.leadership.headline}
          className="mt-4 text-display-md max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {leaders.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={index * 0.12}>
              <div className="flex flex-col gap-8 sm:flex-row lg:flex-col xl:flex-row">
                {/* Portrait. Real photo when leader.photo is set, otherwise
                    a person-icon placeholder that reads as intentional. */}
                <div className="relative aspect-[3/4] w-full max-w-[220px] flex-shrink-0 overflow-hidden rounded-sm bg-beige ring-1 ring-rule/60 sm:w-44 lg:w-full lg:max-w-[200px] xl:w-44 flex items-center justify-center">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      sizes="(min-width: 1024px) 200px, 220px"
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

                {/* Bio content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-display-sm text-ink">
                    {leader.name}
                    {leader.knownAs ? (
                      <span className="ml-2 text-base font-normal text-gray">
                        ({leader.knownAs})
                      </span>
                    ) : null}
                  </h3>

                  <p className="mt-1 text-eyebrow uppercase tracking-eyebrow text-gray">
                    {leader.role}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-ink/80">
                    {leader.fullBio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";
import type { EquipmentItem } from "@/content/equipment";

type Props = {
  items: EquipmentItem[];
  className?: string;
};

function Card({
  item,
  ariaHidden = false,
}: {
  item: EquipmentItem;
  ariaHidden?: boolean;
}) {
  const hasImage = !item.placeholder && item.src;

  return (
    <div
      className="relative shrink-0 w-[220px] md:w-[280px] aspect-[4/5] rounded-lg shadow-sm overflow-hidden bg-beige"
      aria-hidden={ariaHidden || undefined}
    >
      {hasImage ? (
        <Image
          src={item.src as string}
          alt={ariaHidden ? "" : item.alt}
          fill
          sizes="(min-width: 768px) 280px, 220px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-beige">
          <span
            aria-hidden
            className="font-display text-ink/10 text-[7rem] leading-none tracking-tight select-none"
          >
            {item.label.charAt(0)}
          </span>
          <span
            aria-hidden
            className="absolute top-3 right-3 inline-block h-1.5 w-1.5 rounded-full bg-ink/20"
          />
          <span
            aria-hidden
            className="absolute bottom-12 left-3 right-3 h-px bg-ink/10"
          />
        </div>
      )}

      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center bg-accent text-ink font-medium text-xs px-3 py-1.5 rounded-full">
          {item.label}
        </span>
      </div>
    </div>
  );
}

export function EquipmentMarquee({ items, className }: Props) {
  const reduced = useReducedMotionFlag();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const fadeLeft = {
    background:
      "linear-gradient(to right, #E8E2D5 0%, rgba(232,226,213,0) 100%)",
  } as const;
  const fadeRight = {
    background:
      "linear-gradient(to left, #E8E2D5 0%, rgba(232,226,213,0) 100%)",
  } as const;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Equipment fleet"
      className={cn(
        "relative w-screen left-1/2 -translate-x-1/2 overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20"
        style={fadeLeft}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20"
        style={fadeRight}
      />

      {reduced ? (
        <div
          className="overflow-x-auto"
          tabIndex={0}
          aria-label="Scroll equipment fleet"
        >
          <div className="flex gap-4 px-gutter py-6 w-max">
            {items.map((item, i) => (
              <Card key={`eq-${i}`} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="py-6">
          <div
            className={cn(
              "flex w-max gap-4",
              "hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]",
              active && "animate-marquee",
            )}
            style={active ? { willChange: "transform" } : undefined}
          >
            {items.map((item, i) => (
              <Card key={`eq-a-${i}`} item={item} />
            ))}
            {items.map((item, i) => (
              <Card key={`eq-b-${i}`} item={item} ariaHidden />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

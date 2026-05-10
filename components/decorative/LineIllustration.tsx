"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";

type Variant = "excavator" | "mixer" | "bridge" | "level" | "plumb";

type Props = {
  variant: Variant;
  className?: string;
  accent?: boolean;
};

export function LineIllustration({ variant, className, accent = true }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotionFlag();
  const target = inView || reduced ? 1 : 0;
  const duration = reduced ? 0 : 1.8;

  const renderPaths = (paths: { d: string; accent?: boolean; w?: number }[]) =>
    paths.map((p, i) => (
      <motion.path
        key={i}
        d={p.d}
        fill="none"
        stroke={p.accent && accent ? "#F5B800" : "#0F0F0F"}
        strokeOpacity={p.accent && accent ? 1 : 0.85}
        strokeWidth={p.w ?? 1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: target }}
        transition={{ duration, ease: [0.215, 0.61, 0.355, 1], delay: i * 0.06 }}
      />
    ));

  if (variant === "excavator") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 240 160"
        className={cn("h-auto w-full", className)}
        aria-hidden
      >
        {renderPaths([
          { d: "M 20 130 L 220 130" },
          { d: "M 40 130 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" },
          { d: "M 80 130 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" },
          { d: "M 130 130 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" },
          { d: "M 170 130 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" },
          { d: "M 35 116 L 200 116 L 205 100 L 35 100 Z" },
          { d: "M 90 100 L 90 70 L 150 70 L 150 100" },
          { d: "M 150 80 L 195 50", accent: true, w: 1.6 },
          { d: "M 195 50 L 220 75 L 210 90 L 188 65 Z" },
          { d: "M 100 78 L 140 78" },
          { d: "M 110 86 L 130 86" },
        ])}
      </svg>
    );
  }

  if (variant === "mixer") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 240 160"
        className={cn("h-auto w-full", className)}
        aria-hidden
      >
        {renderPaths([
          { d: "M 20 130 L 220 130" },
          { d: "M 35 130 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" },
          { d: "M 75 130 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" },
          { d: "M 165 130 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" },
          { d: "M 30 118 L 110 118 L 110 78 L 65 78 L 55 95 L 30 95 Z" },
          { d: "M 130 110 a 40 30 0 1 0 80 0 a 40 30 0 1 0 -80 0", accent: true, w: 1.6 },
          { d: "M 138 90 L 200 130" },
          { d: "M 138 130 L 200 90" },
          { d: "M 70 78 L 70 60 L 95 60 L 95 78" },
          { d: "M 75 70 L 90 70" },
        ])}
      </svg>
    );
  }

  if (variant === "bridge") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 320 160"
        className={cn("h-auto w-full", className)}
        aria-hidden
      >
        {renderPaths([
          { d: "M 10 140 L 310 140" },
          { d: "M 30 140 L 30 90 L 290 90 L 290 140" },
          { d: "M 50 90 L 50 60" },
          { d: "M 110 90 L 110 50" },
          { d: "M 160 90 L 160 40", accent: true, w: 1.6 },
          { d: "M 210 90 L 210 50" },
          { d: "M 270 90 L 270 60" },
          { d: "M 30 60 L 50 60 L 110 50 L 160 40 L 210 50 L 270 60 L 290 60" },
          { d: "M 40 90 L 280 90" },
          { d: "M 40 100 L 280 100" },
        ])}
      </svg>
    );
  }

  if (variant === "level") {
    return (
      <svg
        ref={ref}
        viewBox="0 0 240 80"
        className={cn("h-auto w-full", className)}
        aria-hidden
      >
        {renderPaths([
          { d: "M 10 40 L 230 40" },
          { d: "M 20 30 L 20 50" },
          { d: "M 60 30 L 60 50" },
          { d: "M 100 30 L 100 50" },
          { d: "M 140 30 L 140 50" },
          { d: "M 180 30 L 180 50" },
          { d: "M 220 30 L 220 50" },
          { d: "M 110 36 L 130 36 L 130 44 L 110 44 Z", accent: true, w: 1.6 },
        ])}
      </svg>
    );
  }

  // plumb
  return (
    <svg
      ref={ref}
      viewBox="0 0 80 240"
      className={cn("h-auto w-full", className)}
      aria-hidden
    >
      {renderPaths([
        { d: "M 40 10 L 40 200" },
        { d: "M 30 200 L 50 200 L 40 220 Z", accent: true, w: 1.6 },
        { d: "M 10 30 L 70 30" },
        { d: "M 10 60 L 70 60" },
        { d: "M 10 90 L 70 90" },
        { d: "M 10 120 L 70 120" },
        { d: "M 10 150 L 70 150" },
        { d: "M 10 180 L 70 180" },
      ])}
    </svg>
  );
}

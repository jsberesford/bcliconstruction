"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  accent?: boolean;
};

const paths = [
  "M 10 320 Q 200 240 420 290 T 820 250",
  "M 10 360 Q 220 280 440 320 T 820 290",
  "M 10 400 Q 240 320 460 360 T 820 330",
  "M 10 440 Q 260 360 480 400 T 820 370",
  "M 10 480 Q 280 400 500 440 T 820 420",
  "M 10 520 Q 300 440 520 480 T 820 470",
  "M 10 560 Q 320 480 540 520 T 820 520",
];

export function ContourLines({ className, accent = true }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotionFlag();

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 820 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none h-full w-full", className)}
    >
      {paths.map((d, i) => {
        const isAccent = accent && i === 3;
        const stroke = isAccent ? "#F5B800" : "#0F0F0F";
        const strokeOpacity = isAccent ? 1 : 0.18 + i * 0.04;
        const target = inView || reduced ? 1 : 0;
        const duration = reduced ? 0 : 1.6 + i * 0.1;
        return (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={stroke}
            strokeOpacity={strokeOpacity}
            strokeWidth={isAccent ? 1.4 : 1}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: target }}
            transition={{ duration, ease: [0.215, 0.61, 0.355, 1], delay: i * 0.08 }}
          />
        );
      })}
    </svg>
  );
}

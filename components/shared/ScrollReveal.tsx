"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeUp, reducedMotionVariants } from "@/lib/motion/variants";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  delay?: number;
  variants?: Variants;
  amount?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  as = "div",
  delay = 0,
  variants = fadeUp,
  amount = 0.35,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduced = useReducedMotionFlag();

  const MotionTag = motion[as] as typeof motion.div;
  const active = reduced ? reducedMotionVariants : variants;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={active}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

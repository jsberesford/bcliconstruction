"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { wordStagger, staggerParent, reducedMotionVariants } from "@/lib/motion/variants";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  highlightWord?: string;
};

export function AnimatedHeadline({
  text,
  as = "h2",
  className,
  highlightWord,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotionFlag();
  const words = text.split(" ");

  const Tag = as;
  const parentVariants = reduced ? reducedMotionVariants : staggerParent;
  const wordVariants = reduced ? reducedMotionVariants : wordStagger;

  return (
    <Tag
      ref={ref}
      className={cn(
        "font-display tracking-tight text-balance text-ink",
        className
      )}
      aria-label={text}
    >
      <motion.span
        aria-hidden
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={parentVariants}
        className="inline"
      >
        {words.map((word, i) => {
          const isHighlight =
            highlightWord !== undefined &&
            word.replace(/[.,;:!?]+$/, "").toLowerCase() ===
              highlightWord.toLowerCase();
          return (
            <Fragment key={`${word}-${i}`}>
              <span className="inline-block overflow-hidden align-baseline">
                <motion.span
                  variants={wordVariants}
                  className={cn(
                    "inline-block",
                    isHighlight && "heading-underline"
                  )}
                >
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </Fragment>
          );
        })}
      </motion.span>
    </Tag>
  );
}

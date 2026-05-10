"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";

type Tone = "accent" | "ink" | "ghost";

type Props = {
  children: ReactNode;
  href: string;
  tone?: Tone;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const toneStyles: Record<Tone, string> = {
  accent:
    "bg-accent text-ink hover:bg-accent/90 ring-1 ring-inset ring-ink/10",
  ink: "bg-ink text-cream hover:bg-ink/90",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/15 hover:ring-ink/40",
};

export function MagneticCTA({
  children,
  href,
  tone = "accent",
  className,
  showArrow = true,
  external = false,
}: Props) {
  const reduced = useReducedMotionFlag();
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const strength = 0.18;
    setOffset({
      x: (event.clientX - cx) * strength,
      y: (event.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const props = external
    ? { rel: "noopener noreferrer", target: "_blank" as const }
    : {};

  return (
    <motion.span
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.4 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...props}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
          toneStyles[tone],
          className
        )}
      >
        <span>{children}</span>
        {showArrow ? (
          <span className="inline-flex h-4 w-4 items-center justify-center overflow-hidden">
            <motion.span
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              className="inline-flex"
              aria-hidden
            >
              <ArrowUpRight size={16} strokeWidth={2} />
            </motion.span>
          </span>
        ) : null}
      </Link>
    </motion.span>
  );
}

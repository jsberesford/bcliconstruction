"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export function MotionShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </MotionConfig>
  );
}

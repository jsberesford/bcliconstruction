---
name: motion-discipline
description: Apply motion-discipline rules whenever GSAP, Framer Motion, motion/react, CSS transitions, CSS keyframes, or any animation code is written or modified in this project. Enforces easing defaults, purpose check, reduced-motion fallbacks, and unmount cleanup.
---

# Motion Discipline

Use this skill whenever animation code is being written or modified: GSAP timelines and tweens, Framer Motion / `motion/react` components, CSS `transition`, CSS `@keyframes`, `requestAnimationFrame` loops, scroll-linked motion, or any interactive transform.

## Brand context

BCLI is a civil construction and engineering brand. Motion exists in service of **confidence**, not flash. Heavy machinery moves with weight and intent. The site's motion should feel the same: deliberate, settled, with mass behind it.

## Easing defaults

- **Entrances**: `power3.out` (GSAP) or the cubic-bezier equivalent `cubic-bezier(0.215, 0.61, 0.355, 1)`.
- **Transitions between states**: `power2.inOut` or `cubic-bezier(0.645, 0.045, 0.355, 1)`.
- **Interactive feedback** (hover, press, drag release): spring physics. In Framer Motion use a spring transition with sensible stiffness/damping; in GSAP use the spring-like inertia plugin or a tuned `back.out`.
- **Never use `linear`** easing. The only exception is genuinely continuous motion like a marquee or an infinite background drift, and even those should be reconsidered before being kept.

## The purpose test

Before keeping any animation, it must answer **yes** to at least one of these three:

1. Does it direct the user's attention to something important?
2. Does it provide feedback for a user action?
3. Does it express the brand personality in a way that supports the section's intent?

If it answers no to all three, remove the animation.

## Reduced motion is mandatory

Every animation must respect `prefers-reduced-motion: reduce`.

- The reduced-motion path degrades to **opacity-only** (a soft fade) or to **no motion at all**, never to a slower version of the same transform.
- Wrap every animation in a check. In React, prefer a `useReducedMotion` hook. In plain JS/GSAP, check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before constructing the timeline.
- In CSS, gate keyframe animations inside `@media (prefers-reduced-motion: no-preference)` so the default is no motion.

## Cleanup is mandatory

- Every GSAP timeline, ScrollTrigger, observer, and event listener cleans up on unmount. In React, return a cleanup function from `useEffect` (or `useGSAP` with a scope) that calls `timeline.kill()` and `ScrollTrigger.getAll().forEach(t => t.kill())` for triggers created inside that component.
- Never leave a timeline running after the component that owns it has unmounted.

## Performance budget

- The site must hold **60fps on mid-tier hardware**. This is non-negotiable.
- Animate `transform` and `opacity`. Avoid animating `width`, `height`, `top`, `left`, `box-shadow`, or `filter` on anything in a scroll-linked or per-frame path.
- If a section needs many simultaneous animations, stagger them or move them to GPU-accelerated layers (`will-change: transform` used sparingly).

## Before committing motion code

Re-check: easing is not linear, reduced-motion path exists, unmount cleanup exists, the animation passes the purpose test. If any are missing, fix before shipping.

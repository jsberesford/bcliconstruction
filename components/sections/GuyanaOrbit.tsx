"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { home } from "@/content/copy";

// Geometry constants. viewBox is 1000 x 800.
const CX = 500;
const CY = 400;

// Three concentric, tilted orbits. The transform on the parent group adds
// the perspective rotation. The ellipses themselves are flatter than wide.
const ORBITS = [
  { rx: 410, ry: 138, label: "Roads", labelAngle: 28, speed: 38, w: 1.6, accent: true },
  { rx: 305, ry: 102, label: "Bridges", labelAngle: 200, speed: 46, w: 1.1, accent: false },
  { rx: 205, ry: 68, label: "Drains", labelAngle: 112, speed: 55, w: 1.1, accent: false },
];

// Simplified silhouette of Guyana. Wider at the top (Atlantic coast), narrower
// at the south, slight notches on the east and west borders. Centered on (CX, CY)
// inside a ~110 wide by ~150 tall envelope.
const GUYANA_PATH = [
  "M 458 332",
  "L 478 326",
  "L 498 330",
  "L 520 326",
  "L 540 330",
  "L 552 342",
  "L 548 360",
  "L 556 378",
  "L 552 398",
  "L 546 420",
  "L 540 440",
  "L 530 458",
  "L 520 472",
  "L 508 478",
  "L 496 472",
  "L 484 460",
  "L 472 444",
  "L 462 426",
  "L 456 406",
  "L 452 384",
  "L 450 362",
  "L 452 346",
  "Z",
].join(" ");

// Bath Settlement marker, placed on the upper-left of the silhouette
// (north-coast, west of center). Stays inside the silhouette.
const BATH_X = 478;
const BATH_Y = 344;

// Label offset distance from the orbit ring, in SVG units.
const LABEL_OFFSET = 22;

function pointOnEllipse(rx: number, ry: number, angleDeg: number) {
  const t = (angleDeg * Math.PI) / 180;
  return { x: CX + rx * Math.cos(t), y: CY + ry * Math.sin(t) };
}

export function GuyanaOrbit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionFlag();
  const inView = useInView(sectionRef, { amount: 0.25 });

  // Refs to the rotating groups, one per orbit.
  const ringRefs = useRef<Array<SVGGElement | null>>([]);
  // Refs to the label text nodes, used for hover scale.
  const labelRefs = useRef<Array<SVGTextElement | null>>([]);

  // GSAP context + tween refs for cleanup.
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  // Start (and stop) the continuous rotations when in view. Draw-in is handled
  // by framer-motion below; this effect only governs the perpetual spin.
  useEffect(() => {
    if (reduced) return;
    if (!inView) return;

    const ctx = gsap.context(() => {
      tweensRef.current = ringRefs.current
        .map((g, i) => {
          if (!g) return null;
          const dir = i === 1 ? -1 : 1; // middle ring spins opposite for life
          return gsap.to(g, {
            rotation: 360 * dir,
            transformOrigin: `${CX}px ${CY}px`,
            duration: ORBITS[i].speed,
            repeat: -1,
            ease: "none",
          });
        })
        .filter((t): t is gsap.core.Tween => t !== null);
    });

    return () => {
      tweensRef.current.forEach((t) => t.kill());
      tweensRef.current = [];
      ctx.revert();
    };
  }, [inView, reduced]);

  // Hover slowdown + label scale. Independent from the rotation effect so it
  // works as soon as tweens exist.
  const onPointerEnter = () => {
    if (reduced) return;
    tweensRef.current.forEach((t) => t.timeScale(0.5));
    labelRefs.current.forEach((node) => {
      if (!node) return;
      gsap.to(node, { scale: 1.05, duration: 0.4, ease: "power2.out", transformOrigin: "center center" });
    });
  };

  const onPointerLeave = () => {
    if (reduced) return;
    tweensRef.current.forEach((t) => t.timeScale(1));
    labelRefs.current.forEach((node) => {
      if (!node) return;
      gsap.to(node, { scale: 1, duration: 0.4, ease: "power2.out", transformOrigin: "center center" });
    });
  };

  // pathLength target for draw-in. Framer handles the once-on-enter draw.
  const drawTarget = reduced ? 1 : undefined;
  const drawDuration = reduced ? 0 : 1.4;

  return (
    <section
      id="orbit"
      ref={sectionRef}
      className="relative py-section bg-cream overflow-hidden"
    >
      <div className="container-x">
        <div className="max-w-prose">
          <ScrollReveal>
            <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
              {home.orbit.eyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 font-display text-display-sm text-ink text-balance">
              {home.orbit.sub}
            </p>
          </ScrollReveal>
        </div>

        <div
          className="mt-16 flex items-center justify-center"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <svg
            viewBox="0 0 1000 800"
            className="block h-[60vh] w-full max-w-[1100px] md:h-[80vh]"
            role="img"
            aria-label={home.orbit.diagramLabel}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Whole orbit system, tilted for perspective */}
            <g transform={`rotate(-12 ${CX} ${CY})`}>
              {ORBITS.map((o, i) => {
                const p = pointOnEllipse(o.rx, o.ry, o.labelAngle);
                // Label offset, pushed outward along the same radial direction.
                const t = (o.labelAngle * Math.PI) / 180;
                const lx = p.x + Math.cos(t) * LABEL_OFFSET;
                const ly = p.y + Math.sin(t) * LABEL_OFFSET;

                const stroke = o.accent ? "#F5B800" : "#0F0F0F";
                const strokeOpacity = o.accent ? 1 : 0.6;

                return (
                  <g
                    key={o.label}
                    ref={(el) => {
                      ringRefs.current[i] = el;
                    }}
                  >
                    <motion.ellipse
                      cx={CX}
                      cy={CY}
                      rx={o.rx}
                      ry={o.ry}
                      fill="none"
                      stroke={stroke}
                      strokeOpacity={strokeOpacity}
                      strokeWidth={o.w}
                      strokeLinecap="round"
                      initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={
                        reduced ? undefined : { pathLength: drawTarget ?? 1 }
                      }
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: drawDuration,
                        ease: [0.215, 0.61, 0.355, 1],
                        delay: i * 0.2,
                      }}
                    />
                    {/* Marker dot riding the ring */}
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={5}
                      fill="#0F0F0F"
                      initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: reduced ? 0 : 0.4,
                        ease: [0.215, 0.61, 0.355, 1],
                        delay: reduced ? 0 : 0.4 + i * 0.2,
                      }}
                    />
                    {/* Counter-rotated label so the text stays upright while the
                        parent group spins. The wrapper rotates with the orbit;
                        the inner text is kept readable through CSS transform-box. */}
                    <motion.text
                      ref={(el) => {
                        labelRefs.current[i] = el;
                      }}
                      x={lx}
                      y={ly}
                      fill="#0F0F0F"
                      fontSize={16}
                      fontFamily="var(--font-body), ui-sans-serif, system-ui, sans-serif"
                      letterSpacing="0.04em"
                      textAnchor={lx >= CX ? "start" : "end"}
                      dominantBaseline="middle"
                      initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: reduced ? 0 : 0.5,
                        ease: [0.215, 0.61, 0.355, 1],
                        delay: reduced ? 0 : 0.5 + i * 0.2,
                      }}
                    >
                      {o.label}
                    </motion.text>
                  </g>
                );
              })}
            </g>

            {/* Guyana silhouette. Sits dead center and does not rotate. */}
            <g>
              <motion.path
                d={GUYANA_PATH}
                fill="#0F0F0F"
                fillOpacity={0.92}
                initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduced ? 0 : 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: reduced ? 0 : 0.2,
                }}
              />
              {/* Bath Settlement marker. Ink, since the yellow moment is the outer orbit. */}
              <motion.circle
                cx={BATH_X}
                cy={BATH_Y}
                r={3}
                fill="#F5F2EC"
                stroke="#F5F2EC"
                strokeWidth={1}
                initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: reduced ? 0 : 0.8,
                }}
              />
            </g>
          </svg>
        </div>

        <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
          <p className="text-sm text-gray tracking-wide max-w-prose text-center">
            Bath Settlement, West Coast Berbice. The yard the rings turn around.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

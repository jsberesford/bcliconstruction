"use client";

import { useEffect, useRef } from "react";
import { useReducedMotionFlag } from "@/lib/motion/useReducedMotionFlag";
import { cn } from "@/lib/utils";

type Props = {
  sources: string[];
  poster: string;
  ariaLabel: string;
  className?: string;
};

// Two stacked <video> elements that crossfade between clips. One is the
// active slot (opacity 1, playing), the other is the on-deck slot (opacity
// 0, preloaded with the next clip). When the active video ends, the on-deck
// video starts playing and we swap opacities. The just-finished element then
// loads the clip after the new active one, so it is ready for the next turn.
//
// Under prefers-reduced-motion we render the poster image directly: no
// autoplay, no transition, no continuous motion.
export function VideoBackground({
  sources,
  poster,
  ariaLabel,
  className,
}: Props) {
  const reduced = useReducedMotionFlag();
  const rootRef = useRef<HTMLDivElement>(null);
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  // Live mirror of which slot is playing, used by handlers that close over
  // stale state. activeKey flips on every transition; idx tracks which
  // source index is currently in the active slot.
  const stateRef = useRef<{ activeKey: "a" | "b"; idx: number }>({
    activeKey: "a",
    idx: 0,
  });

  useEffect(() => {
    if (reduced) return;
    if (sources.length === 0) return;
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    stateRef.current = { activeKey: "a", idx: 0 };

    a.src = sources[0];
    a.style.opacity = "1";
    if (sources.length > 1) {
      b.src = sources[1 % sources.length];
    }
    b.style.opacity = "0";

    const tryPlay = (v: HTMLVideoElement) => {
      const promise = v.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          // Autoplay may be blocked in rare configurations. The poster
          // attribute keeps the hero visually grounded in that case.
        });
      }
    };

    const startA = () => tryPlay(a);
    if (a.readyState >= 2) startA();
    else a.addEventListener("loadeddata", startA, { once: true });

    const timers: number[] = [];

    const handleEnded = (whichKey: "a" | "b") => () => {
      if (stateRef.current.activeKey !== whichKey) return;
      const current = whichKey === "a" ? a : b;
      const next = whichKey === "a" ? b : a;
      const nextIdx = (stateRef.current.idx + 1) % sources.length;

      next.currentTime = 0;
      tryPlay(next);
      next.style.opacity = "1";
      current.style.opacity = "0";

      stateRef.current = {
        activeKey: whichKey === "a" ? "b" : "a",
        idx: nextIdx,
      };

      // After the crossfade settles, queue the clip after the new active one
      // into the now-hidden slot. This keeps the on-deck video preloaded.
      const t = window.setTimeout(() => {
        current.pause();
        if (sources.length > 2) {
          const futureIdx = (nextIdx + 1) % sources.length;
          const futureSrc = sources[futureIdx];
          // setAttribute keeps the comparison stable across resolved URLs.
          if (!current.src.endsWith(futureSrc)) {
            current.src = futureSrc;
            current.load();
          } else {
            current.currentTime = 0;
          }
        } else {
          current.currentTime = 0;
        }
      }, 600);
      timers.push(t);
    };

    const onEndedA = handleEnded("a");
    const onEndedB = handleEnded("b");
    a.addEventListener("ended", onEndedA);
    b.addEventListener("ended", onEndedB);

    return () => {
      a.removeEventListener("loadeddata", startA);
      a.removeEventListener("ended", onEndedA);
      b.removeEventListener("ended", onEndedB);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [sources, reduced]);

  // Pause when the hero scrolls out of view; resume when it returns. Saves
  // decode cycles and keeps mobile devices from heating up if the user
  // parks on a long scroll.
  useEffect(() => {
    if (reduced) return;
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const a = refA.current;
        const b = refB.current;
        if (!a || !b) return;
        if (entry.isIntersecting) {
          const active = stateRef.current.activeKey === "a" ? a : b;
          const promise = active.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(() => {});
          }
        } else {
          a.pause();
          b.pause();
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  if (reduced || sources.length === 0) {
    return (
      <div
        ref={rootRef}
        className={cn("absolute inset-0 overflow-hidden", className)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={ariaLabel}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      role="img"
      aria-label={ariaLabel}
    >
      <video
        ref={refA}
        muted
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
      />
      <video
        ref={refB}
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
      />
    </div>
  );
}

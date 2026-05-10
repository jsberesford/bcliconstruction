"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navCopy } from "@/content/copy";
import { company } from "@/content/company";

export function Navigation() {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[padding,background-color,backdrop-filter] duration-300 ease-out-expo",
        condensed
          ? "bg-cream/85 py-3 backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-x flex items-center justify-between">
        <Link
          href="/"
          aria-label={`${company.name} home`}
          className="group flex items-center gap-2 text-ink"
        >
          <Wordmark condensed={condensed} />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {navCopy.links.map((link) => {
            const isActive =
              link.href.startsWith("/")
                ? pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative text-sm uppercase tracking-eyebrow text-ink/80 transition-colors hover:text-ink",
                  isActive && "text-ink"
                )}
              >
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out-expo group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
          <Link
            href={navCopy.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform duration-200 ease-out-expo hover:-translate-y-0.5"
          >
            {navCopy.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-ink/15 bg-cream/70 p-2.5 text-ink backdrop-blur md:hidden"
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="container-x mt-3 rounded-2xl border border-rule/60 bg-cream/95 p-4 backdrop-blur">
              <ul className="flex flex-col divide-y divide-rule/60">
                {navCopy.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-3 text-base text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={navCopy.cta.href}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
              >
                {navCopy.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Wordmark({ condensed }: { condensed: boolean }) {
  return (
    <span className="flex items-baseline gap-2">
      <span
        className={cn(
          "font-display text-lg font-semibold leading-none tracking-tight text-ink transition-all duration-300",
          condensed ? "text-base" : "text-lg"
        )}
      >
        BCLI
      </span>
      <span className="hidden text-[10px] uppercase tracking-eyebrow text-gray sm:inline-block">
        Construction & Engineering
      </span>
    </span>
  );
}

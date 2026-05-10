# BCLI Construction & Engineering

Marketing-only website for BCLI Construction & Engineering, a Guyana-based civil construction firm. Visual language translated from wgb.agency. Factual content sourced from bcliconstruction.com. The site must read as a national-scale operator with two decades of work behind it, not a Squarespace template.

## Stack (fixed)

- Next.js 14, App Router, TypeScript
- Tailwind CSS 3
- GSAP + @gsap/react for scroll-driven motion
- Framer Motion (`motion/react`) for component transitions
- Lenis for smooth scroll
- shadcn/ui for contact-form primitives only
- Lucide React for icons
- All content lives in `/content/*.ts`
- No backend, no CMS, static deploy to Vercel

## Iron rules

These never bend.

- **Tagline: "Building Guyana from the Ground Up."** Never "Shaping."
- **No em dashes.** Anywhere. Code, comments, copy, commits. ESLint enforces this on source files.
- **Leta's bio is sacred.** Lilawati Ahmed's bio must always retain: New York garment industry, global sourcing, NY Women Chamber of Commerce. No abridgement, no generalization. Source text lives in `/content/leadership.ts`.
- **Yellow cap.** Accent yellow `#F5B800` appears at most 3 to 4 moments per page. Only on: primary CTAs, one underline per major section heading, the equipment rentals CTA, single accent strokes on decorative line illustrations. Never on body text, card backgrounds, or section backgrounds.
- **Banned vocabulary in copy:** delve, dive into, navigate, landscape, in today's, ultimately, in conclusion, it's important to note, let's explore, unlock, elevate, transform, revolutionize, pinnacle, paramount, cutting-edge, seamless, robust, leverage, holistic, synergy, world-class, best-in-class, pinnacle, bespoke, tailored solution, personalized consultation.
- **No tricolons.** Avoid lists of three balanced clauses. Break the rhythm.
- **No polished closers.** The last sentence of a section carries information, not vibe.
- **Reduced motion is mandatory.** Every animation degrades to opacity-only or no motion under `prefers-reduced-motion: reduce`.
- **Easing defaults:** `power3.out` for entrances, `power2.inOut` for transitions, spring physics for interactive responses. Never `linear`.
- **Hold 60fps on mid-tier hardware.** Animate `transform` and `opacity` only.

## Palette (canonical hex values)

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#F5F2EC` | Default page background |
| `ink` | `#0F0F0F` | Primary text |
| `accent` (yellow) | `#F5B800` | CTAs, section heading underline, decorative accent stroke |
| `beige` | `#E8E2D5` | Alternating section backgrounds |
| `gray` | `#7A7A7A` | Supporting text, metadata |
| `rule` | `#D9D3C7` | Hairline rules, low opacity |

## Typography

- Headlines: **Bricolage Grotesque** (variable, distinctive, architectural feel)
- Body: **Manrope** (clean utilitarian sans)
- Both loaded via `next/font/google`
- Sentence-case headlines, not all caps
- Generous line-height on body copy

## Project layout

```
/app          home, about, contact pages + root layout
/components/sections    page-specific sections (Phase 2 agents own these)
/components/shared      Navigation, Footer, ScrollReveal, AnimatedHeadline, CountUp, MagneticCTA
/components/decorative  LineIllustrations, BlueprintGrid, ContourMap
/components/ui          shadcn primitives (contact form only)
/content      company.ts, services.ts, rentals.ts, leadership.ts, copy.ts
/lib/motion   GSAP timelines + Framer variants
/lib/scroll   Lenis setup
/lib/utils.ts cn() helper for shadcn
```

## Multi-agent flow

Phase 1 (orchestrator, Opus): scaffold + theme + primitives + content. Commit before Phase 2.

Phase 2 (three Sonnet subagents in parallel):
- `bcli-home-builder` owns `/app/page.tsx` + `/components/sections/{Hero,HomeAbout,Services,EquipmentRentals,Leadership,ClosingCTA}.tsx`
- `bcli-about-builder` owns `/app/about/page.tsx` + `/components/sections/{AboutHero,CompanyStory,LeadershipDetail,ValuesAndCoverage}.tsx`
- `bcli-contact-builder` owns `/app/contact/page.tsx` + `/components/sections/{ContactHero,ContactForm,ContactInfo,LocationMap}.tsx`

Phase 2.5 (two Sonnet subagents in parallel):
- `bcli-design-critic` reads all three pages, returns a numbered findings report. No code edits.
- `bcli-copy-humanizer` rewrites AI-flavored copy in place, preserves Leta's bio specifics.

Phase 3 (orchestrator, Opus): em-dash grep, Lighthouse, reduced-motion walk, README, final commit.

## Coordination

- File ownership in Phase 2 is exclusive. No agent edits another agent's files.
- Shared primitives in `/components/shared/`, `/components/decorative/`, `/lib/`, and `/content/` are read-only for Phase 2 agents. If a primitive needs extension, the agent flags it and stops; the orchestrator handles the change.
- Every agent runs `npm run build` before declaring done.
- Every agent runs the ai-copy-detector skill on copy they wrote.
- Every commit is scoped to that agent's owned files.

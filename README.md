# BCLI Construction & Engineering

Marketing site for BCLI Construction & Engineering, a civil construction firm based in West Coast Berbice, Guyana.

Tagline: **Building Guyana from the Ground Up.**

## Stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS 3
- GSAP and `@gsap/react` (for the easing tokens and decorative SVG draw-ons that need imperative control)
- Framer Motion for component-level transitions and reveals
- Lenis for smooth scroll, wrapped in a client `LenisProvider` that defers to `prefers-reduced-motion`
- shadcn/ui for the contact form primitives only (Button, Input, Textarea, Label, Select)
- Lucide React for icons
- Fonts via `next/font/google`: Bricolage Grotesque (display) paired with Manrope (body)

No backend. No CMS. Static deploy.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # ESLint with the no-em-dash rule
npm run lhci         # Lighthouse CI against a running local server
```

## Project layout

```
app/
  layout.tsx         Root layout: fonts, Lenis, MotionConfig, Navigation, Footer
  page.tsx           Home (six sections composed)
  about/page.tsx     About (four sections composed)
  contact/page.tsx   Contact (four sections composed)
  globals.css        Tailwind layers, Lenis baseline, the .heading-underline accent
components/
  shared/            Navigation, Footer, ScrollReveal, AnimatedHeadline, CountUp, MagneticCTA, MotionShell
  sections/          Home, About, and Contact section components (one file per section)
  decorative/        BlueprintGrid, ContourLines, LineIllustration (excavator, mixer, bridge, level, plumb)
  ui/                shadcn primitives used by the contact form
content/
  company.ts         Name, tagline, contact info, regions
  services.ts        The four services
  rentals.ts         Equipment rentals coming-soon copy
  leadership.ts      Bickram and Leta bios (short and full)
  copy.ts            Headlines, intros, sub copy for every page
lib/
  motion/            Easing tokens, Framer variants, useReducedMotionFlag hook
  scroll/            LenisProvider
  utils.ts           cn() helper
```

## Updating content

Every user-facing string lives in `/content/*.ts`. Section components import these and never inline copy.

To change a headline, subhead, value statement, or contact line, edit the relevant file:

- Hero headline / subhead, section intros, closing CTA copy: `content/copy.ts`
- Service names and descriptions: `content/services.ts`
- Equipment rentals body and CTA label: `content/rentals.ts`
- Founder bios (short and full): `content/leadership.ts`
- Company name, tagline, phone, email, address, regions: `content/company.ts`

The contact form labels live inside `contact.form` in `content/copy.ts`. To add a project type to the select, append to `contact.form.projectTypeOptions`.

To replace the founder photo placeholders, swap the placeholder `div`s inside `components/sections/Leadership.tsx` (home) and `components/sections/LeadershipDetail.tsx` (about) with real `Image` components pointing at files in `/public/leadership/`.

## Motion philosophy

The brand is civil construction, so motion is in service of confidence, not flash.

- Defaults: `power3.out` (or `cubic-bezier(0.215, 0.61, 0.355, 1)`) for entrances. `power2.inOut` for transitions. Spring physics for interactive responses. Never `linear`.
- Every section heading enters via `ScrollReveal`. Hero and major section H2s use `AnimatedHeadline` with a tight word stagger.
- Stat numbers use `CountUp`, which animates the value with an ease-out cubic.
- `MagneticCTA` applies a small spring-driven offset on pointer move (skipped when reduced motion is requested).
- Decorative SVGs (`LineIllustration`, `ContourLines`) draw themselves in on scroll via Framer Motion `pathLength`.
- The global `MotionShell` wraps the app with `MotionConfig reducedMotion="user"`, so any `motion.*` component without an explicit check still respects `prefers-reduced-motion`.
- The Lenis smooth-scroll provider opts out entirely when reduced motion is requested.

## Color discipline

The accent yellow `#F5B800` is the brand's voice on screen and is rationed.

- Backgrounds: cream `#F5F2EC` and beige `#E8E2D5`. Never yellow.
- Body text: ink `#0F0F0F`. Never yellow.
- Supporting text: gray `#7A7A7A`.
- Hairline rules: `#D9D3C7`.

Yellow appears at most three to four times per page, only on:

1. The primary CTA per major section (most pages have one or two).
2. One word underline per major section heading (via `AnimatedHeadline highlightWord`).
3. The equipment rentals coming-soon CTA.
4. A single accent stroke on one decorative line illustration per page.

Tokens live in `tailwind.config.ts` (`accent`, `cream`, `ink`, `beige`, `gray`, `rule`). Update them there if the brand palette ever shifts.

## Voice and copy rules

The brand voice is grounded, specific, declarative.

- No em dashes. ESLint enforces this on JS/TS via `eslint-plugin-no-em-dash`. The pre-launch QA pass also greps the repo for the character directly.
- No tricolons (three balanced rhetorical clauses).
- No banned vocabulary: delve, dive into, navigate, in today's, ultimately, pinnacle, paramount, cutting-edge, seamless, robust, leverage, holistic, world-class, etc.
- No closing sentences that restate the obvious or add motivational flourish.

The skill files under `.claude/skills/` (bcli-brand-voice, bcli-color-discipline, motion-discipline, wgb-reference-patterns, ai-copy-detector) hold the full rule set used during the multi-agent build.

## The Leta rule

Lilawati Ahmed's bio in `content/leadership.ts` must always retain:

- Born in Guyana, South America
- Currently residing in New York, USA
- Guyanese-American entrepreneur for three plus decades
- Founded and operated two garment manufacturing companies in the heart of the New York City garment industry
- Enriched experience in global sourcing
- Traveled extensively for business opportunities outside garment manufacturing
- Active member of the New York Women Chamber of Commerce

These specifics are what make Leta credible as a principal of the firm. Do not abridge them. Do not generalize them.

## Multi-agent build (history, for reference)

The site was built in three phases by an orchestrator and a set of subagent specialists.

- Phase 1 (orchestrator): scaffolding, shared primitives, content extraction, decorative components, theme. Committed before parallelization.
- Phase 2 (three Sonnet subagents in parallel): home, about, and contact page builders, each with exclusive ownership over their section files. Defined in `.claude/agents/bcli-{home,about,contact}-builder.md`.
- Phase 2.5 (two Sonnet subagents in parallel): a design consistency critic that produces a read-only findings report, and a copy humanizer that rewrites AI-flavored prose in place. Defined in `.claude/agents/bcli-{design-critic,copy-humanizer}.md`.
- Phase 3 (orchestrator): apply critic findings, run the full build, em-dash grep, README, final commit.

The skill files and agent definitions stay in the repo so the same pipeline can be re-run when content or sections evolve.

## Deploying

This is a static Next.js app. Deploy to Vercel by connecting the repository. No environment variables required. No backend secrets. The contact form is client-state only and does not currently make a network call; wire it to a real endpoint when the operations team is ready to receive submissions.

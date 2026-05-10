---
name: bcli-color-discipline
description: Enforce the BCLI color palette and yellow-accent rationing every time a Tailwind color class, CSS color value, hex code, or design token is written for this project. Triggers on bg-*, text-*, border-*, ring-*, fill-*, stroke-*, and any inline color decision.
---

# BCLI Color Discipline

Use this skill any time a color is being applied to the BCLI Construction site, whether through Tailwind classes (bg-, text-, border-, ring-, from-, to-, fill-, stroke-), CSS custom properties, inline styles, SVG attributes, or design tokens.

## The palette

| Role | Value | Tailwind token name (suggested) |
| --- | --- | --- |
| Background base (cream) | `#F5F2EC` | `cream` |
| Primary text (near-black) | `#0F0F0F` | `ink` |
| Accent yellow | `#F5B800` | `accent` |
| Section alt background (beige) | `#E8E2D5` | `beige` |
| Supporting text / metadata (gray) | `#7A7A7A` | `gray` |

## The yellow rules (hardest constraints)

Accent yellow `#F5B800` is reserved for high-signal moments only. It may appear in these places, and nowhere else:

1. **Primary CTAs.** The main call-to-action button per section gets the yellow fill.
2. **One underline per major section heading.** A single hand-set underline on the section H2, drawn as a short bar under one or two words. Not the whole heading.
3. **The equipment rentals CTA.** This is one of the allowed yellow CTAs by name.
4. **A single accent stroke on decorative line illustrations.** One line, one accent. Never the whole illustration.

**Hard cap: yellow appears no more than 3 to 4 times per page.** Count it before shipping. If a fifth use creeps in, remove an earlier use before adding the new one.

## Forbidden uses of yellow

- Body text is **never** yellow.
- Card backgrounds are **never** yellow.
- Section backgrounds are **never** yellow.
- Yellow gradients, yellow ring borders on inputs, yellow icon fills outside the cases above, and yellow hover states on non-primary elements are all forbidden.

## Background and text usage

- The default page background is cream. Beige is for alternating section backgrounds when the layout calls for a break in rhythm. Do not stack two beige sections in a row.
- Primary text uses ink (`#0F0F0F`). Body copy is never a pure black (`#000`) and never yellow.
- Gray (`#7A7A7A`) is reserved for supporting text: captions, metadata, timestamps, image credits, secondary detail under a primary line. Do not use gray for main body paragraphs.

## Before writing the class

Ask: is this color in the palette above? If not, do not introduce it. If it is yellow, ask: which of the four allowed uses is this? If none, pick a different color.

# Equipment photos

This directory holds photography for the equipment marquee on the home page.

## Current state

The marquee currently renders typographic placeholder cards. No real photos
are required for the site to build or run. Each entry in
`/content/equipment.ts` carries `placeholder: true`, which tells the card
component to draw a beige card with a large display letter in place of a
photo.

## Swapping in real photos

1. Drop a photo into this directory using a kebab-case filename that matches
   the equipment, for example `hydraulic-excavator.webp` or
   `concrete-mixer-truck.jpg`.
2. Open `/content/equipment.ts` and update the corresponding item:
   - Set `src` to the public path, for example
     `/equipment/hydraulic-excavator.webp`.
   - Remove the `placeholder: true` flag (or set it to `false`).
   - Keep the existing `alt` text or rewrite it to match the actual photo.
3. The `<EquipmentMarquee />` component will pick up the change with no
   further code edits.

## Recommended photo specs

- Portrait crop, 4:5 aspect ratio.
- Around 800px wide is plenty. The card renders at 280px on desktop, 220px
  on mobile, so a 2x asset is enough.
- Warm color grading. The site palette leans cream, beige, and ink. Cold,
  blue construction site photos will fight the surrounding section.
- Avoid heavy text overlays on the image. The yellow pill label already
  carries the equipment name.

## File format

WebP is preferred. JPG is fine. SVG is acceptable for stylized silhouettes
but real photography reads stronger on this section.

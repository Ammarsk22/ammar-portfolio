# Ammar.dev — Hero Section

A full-screen, award-style hero built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. Signature interaction: an ultra-smooth cursor spotlight that reveals a second portrait through a soft cinematic circular mask.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build     # type-checks + production build to dist/
npm run preview   # serve the production build locally
```

This project has already been installed, type-checked, linted, and built once in the sandbox that produced it — all three passed clean.

## What's inside

```
src/
  components/
    Hero.tsx            – composes everything below
    Navbar.tsx           – fixed glass pill nav, drops in on load, mobile menu
    AnimatedText.tsx     – letter-by-letter blur/fade/slide-up reveal
    ParticleField.tsx    – ~34 near-invisible floating particles
    SocialLinks.tsx      – GitHub / LinkedIn / Instagram / Email, lift + glow
    ScrollIndicator.tsx  – floating mouse icon + "Scroll to Explore"
  hooks/
    useSpotlightMask.ts  – generates the radial-gradient canvas texture and
                            drives the rAF + lerp(0.1) cursor-follow mask
  lib/utils.ts            – cn() helper + shared easing curve
public/images/
  Base_image.png          – black blazer portrait (always visible)
  Reveal_image.png        – white blazer + sunglasses portrait (revealed
                             only inside the 280px cursor spotlight)
```

## How the spotlight works

1. On mount, `useSpotlightMask` paints a radial gradient onto an off-DOM `<canvas>` using the exact stops from the brief (0 / .35 / .55 / .72 / .88 / 1 → 100% / 100% / 75% / 40% / 15% / 0%), then converts it to a PNG data URL.
2. The gradient is rendered in **grayscale**, not alpha — white fades to black. That's a deliberate cross-browser choice: `-webkit-mask-image` defaults to luminance in some engines, so baking the fade into RGB (rather than relying on alpha) keeps the reveal identical across Chrome, Safari, and Firefox.
3. That data URL is set as `mask-image` / `-webkit-mask-image` on a layer holding the second portrait, positioned exactly over the first.
4. A `requestAnimationFrame` loop lerps the tracked cursor position toward the real pointer position at a factor of `0.1` per frame, and writes `mask-position` directly via a ref (no React re-renders — this is the part that has to stay silky at 60fps).
5. The reveal layer sits in its own non-transformed wrapper so the "slow cinematic zoom-out" scale animation (applied to an inner child) never fights with the mask's coordinate space.

Tune the effect in `Hero.tsx`:
```tsx
useSpotlightMask({ radius: 280, lerp: 0.1 })
```

## Before you ship

- **Resume**: the navbar's "Download Resume" button links to `/resume.pdf` — drop your actual resume into `public/resume.pdf` (or update the `href`).
- **Social links**: `SocialLinks.tsx` has placeholder GitHub/LinkedIn/Instagram/email URLs — swap in your real profile links.
- **Nav anchors**: `Home / About / Projects / Skills / Experience / Contact` link to `#about`, `#projects`, etc. Add those sections below `<Hero />` in `App.tsx` with matching `id`s as you build out the rest of the site.
- **Portrait framing**: both portraits are cropped with `object-[50%_18%]`. If you swap in different photos with a different aspect ratio or framing, nudge that value so faces stay centered on very tall (mobile) viewports.
- **Favicon / OG image**: `index.html` has SEO meta tags in place; add a favicon and social preview image when you're ready.

## Accessibility & performance notes

- Respects `prefers-reduced-motion`: the letter-stagger, zoom, particle float, and scroll-indicator loop are all skipped or snapped instantly for users who've asked for reduced motion.
- The visible headline is decorative and `aria-hidden`; a real `<h1>` (visually hidden) carries the actual heading text for screen readers.
- Images are `loading="eager"` / `fetchPriority="high"` since this is the LCP element of the page — everything below the fold in the rest of your site should lazy-load as normal.

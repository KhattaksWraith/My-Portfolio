# Design Specification — waleeds.tech portfolio
Primary reference: **Inexa — Creative Personal Portfolio** (Envato Elements, alithemes).
Rebuilt from scratch with original code. No template files, stylesheets, or assets copied.

## 1. Layout
- Single-page narrative with anchored sections + a "credentials" view (brief §15: two paths — Explore my story / View my credentials).
- Section rhythm (from Inexa): alternate white / pale-tint bands, generous vertical padding (~120px desktop), hairline rules inside components, one full-bleed dark block as the high-contrast break (used for the thesis case study).
- Max content width ~1200px, 12-col grid collapsing to single column on mobile.
- Section order: Hero → Journey (2005→2025+ scrollytelling) → About → Research/Thesis → Projects → Experience → Entrepreneurship (DawgDeals) → Leadership & Awards → Skills → Future/MS interests → Contact → Footer.

## 2. Typography
- Display: heavy neo-grotesque sans, tight leading. Google Fonts (free): **Archivo** (Expanded/Black weights) for giant display + outline text.
- Body: clean neutral sans — **Inter**.
- Scale (desktop): hero display fluid ~200px; section H1 ~48–56px bold; quote ~28–32px; body 16–18px; eyebrow labels 13–14px uppercase with underline accent.
- Signature effect (from Inexa): giant outlined text (transparent fill, thin stroke) layered behind solid filled type, drifting horizontally on scroll.

## 3. Colors
Light mode (sampled from Inexa demo, approximate):
- Page bg: pale sage-cream `#F1F5E9`; alt section bg `#EDF1E3`
- Cards: white `#FFFFFF`; hairline dividers `#E2E6D8`
- Headings: warm near-black `#1B1E19`; body muted `#6D7368`
- Accent: vivid violet `#7C5CFA` (buttons, eyebrows, badges)
- Dark CTA: `#181818`; outline display stroke `#D9DDD2`
Dark mode:
- Page bg `#121210`; navbar `#1E1E1C`; cards `#1D1D1B`; headings `#B2B2B0`; muted `#8B8B89`; accent unchanged `#7C5CFA`
- Awards/thesis break block: near-black `#131311` with white hairlines (both modes)

## 4. Spacing
- Section padding ~120px desktop / ~64px mobile. Card radius large (rounded-4 ≈ 24px). Buttons: pill, padding ~14px 32px.

## 5. Navigation
- Floating rounded pill navbar (Inexa signature), logo left, center links, theme toggle + "Let's Talk" pill right.
- Deviation from Inexa: Inexa's pill is NOT sticky; ours WILL be sticky with a subtle shadow on scroll, because this is a long narrative page and the brief requires accessible, unobtrusive navigation.
- Links: Journey, Projects, Experience, Research, About, Contact (brief §15). Mobile: hamburger → off-canvas panel.
- Theme toggle: circular button, sun/moon swap, instant switch, persisted in localStorage.

## 6. Motion (GSAP + ScrollTrigger)
- Scroll reveals: fade-up / curtain image reveals on section entry.
- Hero: 3 parallax layers drifting at different rates (outline text, illustration, solid name) — all scroll away normally, no pinning traps.
- Journey: scroll-linked progress line + scene crossfades between eras (school → college → NUST → lab → digital workspace → open future).
- Marquee strip: giant outline text drifting horizontally.
- Rotating circular text badges (CSS animation).
- Hover: lift on buttons/pills, zoom inside rounded image containers.
- Hard rules (brief §3): natural browser scrolling, no scroll hijacking, no queued animations after fast scroll, `prefers-reduced-motion` disables all non-essential motion, no essential info hidden behind animation.

## 7. Illustration style
- Cohesive flat 2D character + environments, original SVG scenes (not copied from any template): kindergarten 2005 → school 2017 → college 2019 → NUST 2020 → graduation 2025 → research lab → digital workspace → open-ended future.
- Real portrait photo introduces the actual person in About (photo awaited from client). No invented full-body photos.

## 8. Mobile adaptation
- Single-column stacking, hamburger off-canvas nav, fluid type via clamp(), touch-friendly targets (≥44px), parallax reduced on small screens, images optimized.

## 9. Content rules (from brief)
- No invented content: school/college names unconfirmed → omitted; NCNDT details unverified → excluded until verified.
- Thesis figures attributed to the thesis; no implication of clinical efficacy.
- CV/thesis download buttons wired ONLY when real PDFs are supplied (`/assets/Waleed-Ahmed-CV.pdf`, `/assets/Waleed-Ahmed-Final-Year-Thesis.pdf`). Until then, buttons are omitted, not linked to dead files.
- Skills: neutral labels, no percentage bars. No invented metrics anywhere.

## 10. Tech + deployment
- React + TypeScript + Vite, GSAP + ScrollTrigger. Build: `npm run build`, output `dist`.
- SEO: meta, canonical (https://waleeds.tech/), OG tags, sitemap, robots.txt, Person + WebSite JSON-LD.
- Deploy target: Cloudflare Pages (docs/deployment-cloudflare-pages.md to be written). No DNS changes, no deploy without explicit approval.

# Deploying the portfolio to Cloudflare Pages

Target domain: **https://waleeds.tech/** (decided 2026-10-14; Cloudflare zone already created).

## Prerequisites
- Cloudflare account: Waleedgaming85@gmail.com (already has the waleeds.tech zone, pending nameserver cutover).
- GitHub repo for the portfolio site (create when ready; the myovertimetax.com repo pattern can be reused).
- The `waleeds.tech` nameservers must be pointed to Cloudflare at the registrar before the domain can serve traffic:
  - `aitana.ns.cloudflare.com`
  - `arvind.ns.cloudflare.com`
- DNSSEC: after the zone shows Active in Cloudflare, add the DS record at the registrar
  (key tag 2371, algorithm 13, digest type 2 SHA-256,
  digest `7EE2D0BD6DACF40880F487083C10D85E2763447269AEE8A823EFB40291534D90`).

## Build settings (Cloudflare Pages)
| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` (repo root) |
| Node version | 22 (set via `NODE_VERSION` env var or `.nvmrc`) |

## Steps
1. Push the `~/workspace/portfolio/` project to a new GitHub repo (e.g. `KhattaksWraith/waleeds-tech`).
2. In Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git → select the repo.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Deploy. Cloudflare assigns a `*.pages.dev` URL for preview.
5. Pages → Custom domains → add `waleeds.tech` and `www.waleeds.tech`.
   - Cloudflare adds the DNS records automatically once the zone is active.
6. Decide the canonical host: `waleeds.tech` apex (recommended) with `www` redirecting, or vice versa. Set the redirect with a Cloudflare redirect rule.
7. Verify: HTTPS loads, canonical/OG tags point at `https://waleeds.tech/`, sitemap and robots resolve.

## Still to add before/after first deploy
- `public/sitemap.xml` — generate after the final URL structure is fixed.
- `public/robots.txt` — allow all + sitemap reference.
- OG image (`/assets/og-image.jpg`, 1200×630) referenced in `index.html`.
- Favicon: replace the default Vite SVG with a "W" mark.

## Notes
- Never enable Rocket Loader on this site (it breaks deferred scripts; lesson learned on myovertimetax.com).
- Keep Cloudflare Web Analytics off unless explicitly requested (GA4 is the analytics source of truth elsewhere).
- No DNS changes and no production deploy without the owner's explicit approval.

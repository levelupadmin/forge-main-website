// scripts/ensure-conversion-pages.mjs
// Guarantees the X-pixel conversion pages exist in the build output.
//
// Why this exists: the /ai app is dropped into public/ai/ as pre-built static
// assets. A `deploy:` recopy of that folder (e.g. 2026-06-21) silently wiped the
// hand-added /ai/thank-you and /ai/payment-confirmed pages, 404ing them for ~10
// days and killing every X Ads Lead + Purchase conversion. This postbuild step
// re-writes them into dist/ on every deploy from a canonical copy kept OUTSIDE
// public/ai/, so no future recopy can remove them.
//
// Defensive by design: never throws, always exits 0 — a tracking-page copy must
// never be able to fail the main site build.
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const pages = [
  { src: 'conversion-pages/thank-you.html',         dest: 'dist/ai/thank-you/index.html' },
  { src: 'conversion-pages/payment-confirmed.html', dest: 'dist/ai/payment-confirmed/index.html' },
];

for (const { src, dest } of pages) {
  try {
    const s = resolve(root, src);
    const d = resolve(root, dest);
    if (!existsSync(s)) { console.warn(`[ensure-conversion-pages] source missing: ${src} — skipping`); continue; }
    mkdirSync(dirname(d), { recursive: true });
    copyFileSync(s, d);
    console.log(`[ensure-conversion-pages] restored ${dest}`);
  } catch (e) {
    console.warn(`[ensure-conversion-pages] could not write ${dest}: ${e && e.message}`);
  }
}

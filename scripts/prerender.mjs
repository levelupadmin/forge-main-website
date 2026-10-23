// scripts/prerender.mjs
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
//
// Why this exists: the site is a client-rendered React app, so crawlers that
// do not run JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Google's first
// pass) saw an empty <div id="root"></div>. This renders "/" to HTML at build
// time and writes it into dist/index.html, with JSON-LD built from the same
// data the page shows. The browser hydrates that HTML (src/main.tsx).
//
// /community and /careers stay client-rendered. They get their own copy of the
// empty shell with the right canonical URL, so they no longer depend on the
// prerendered home page HTML.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://www.forgebylevelup.com";
const root = process.cwd();
const dist = resolve(root, "dist");
const ssrEntry = resolve(root, "dist-ssr/entry-server.js");

const template = readFileSync(resolve(dist, "index.html"), "utf8");
const { render, programs, faqs } = await import(pathToFileURL(ssrEntry).href);

// ---------- JSON-LD (only facts the home page states) ----------
const ORG_ID = `${SITE}/#organization`;
// Must match src/lib/structuredData.ts in levelupadmin/levelupnewsite.
const PARENT = {
  "@type": "Organization",
  "@id": "https://www.leveluplearning.in/#organization",
  name: "LevelUp Learning",
  legalName: "LevelUp Edu Pvt Ltd",
  url: "https://www.leveluplearning.in",
};

// Program links on the page use the bare domain for /ai; the bare domain
// redirects to www, so point structured data at the final URL.
const absolute = (href) => href.replace(/^https:\/\/forgebylevelup\.com/, SITE);

// Creator Residency length and fee, confirmed by Rahul on 23 Oct 2026. The
// home page does not show the fee. Filmmaking and Writing fees vary by
// edition, so they get no Offer.
const courseExtras = {
  "Content Creation": {
    timeRequired: "P12D",
    offers: { "@type": "Offer", category: "Paid", price: "85000", priceCurrency: "INR" },
  },
};

const graph = [
  {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "the Forge",
    alternateName: ["The Forge by LevelUp", "the Forge by LevelUp Learning"],
    url: `${SITE}/`,
    logo: `${SITE}/images/forge-logo-transparent.png`,
    email: "forge@leveluplearning.in",
    sameAs: ["https://www.instagram.com/forgebylevelup/"],
    parentOrganization: PARENT,
  },
  {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "the Forge by LevelUp",
    url: `${SITE}/`,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  },
  ...programs.map((p) => ({
    "@type": "Course",
    name: p.title,
    description: p.description,
    url: absolute(p.href),
    provider: { "@id": ORG_ID },
    ...courseExtras[p.tabLabel],
  })),
  {
    "@type": "FAQPage",
    "@id": `${SITE}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

// Escape "<" so no string in the data can close the script tag early.
const jsonLd = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": graph,
}).replace(/</g, "\\u003c")}</script>`;

// ---------- write pages ----------
const EMPTY_ROOT = '<div id="root"></div>';
if (!template.includes(EMPTY_ROOT)) throw new Error("prerender: empty #root not found in dist/index.html");

const html = render("/");
if (!html.includes("Frequently Asked Questions")) throw new Error("prerender: home page render looks wrong");

const home = template
  .replace("</head>", `  ${jsonLd}\n  </head>`)
  .replace(EMPTY_ROOT, `<div id="root" data-prerendered="/">${html}</div>`);
writeFileSync(resolve(dist, "index.html"), home);
console.log(`[prerender] wrote dist/index.html (${Math.round(home.length / 1024)} KB)`);

// Client-rendered pages: same empty shell, own title and canonical.
const shells = [
  { path: "/community", file: "community.html", title: "Community | the Forge by LevelUp" },
  { path: "/careers", file: "careers.html", title: "Careers | the Forge by LevelUp" },
];
const TITLE_RX = /<title>[^<]*<\/title>/;
for (const s of shells) {
  const url = `${SITE}${s.path}`;
  const out = template
    .replace(TITLE_RX, `<title>${s.title}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${s.title}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${s.title}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`);
  writeFileSync(resolve(dist, s.file), out);
  console.log(`[prerender] wrote dist/${s.file}`);
}

rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });

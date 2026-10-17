// Build-time prerender entry. scripts/prerender.mjs imports the SSR build of
// this file and writes the HTML for "/" into dist/index.html, so crawlers that
// do not run JavaScript still get the page text. The browser then hydrates it.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

export function render(url: string): string {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
}

// The structured data in the page head is built from the same data the page
// renders, so the two cannot drift apart.
export { programs } from "./data/programs";
export { faqs } from "./data/faqs";

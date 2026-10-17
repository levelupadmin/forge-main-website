import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/forge.css";

const root = document.getElementById("root")!;

// The home page ships prerendered HTML (scripts/prerender.mjs) for crawlers.
// Hydrate it when it matches this URL; otherwise render from scratch.
if (root.hasChildNodes() && root.dataset.prerendered === window.location.pathname) {
  hydrateRoot(root, <App />);
} else {
  root.textContent = "";
  createRoot(root).render(<App />);
}

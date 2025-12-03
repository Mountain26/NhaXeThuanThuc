import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import footerLogo from "./components/assets/footer-logo.png";
import "./index.css";

const basename = import.meta.env.BASE_URL.replace(/\/+$/, "") || undefined;

const faviconLink = document.querySelector<HTMLLinkElement>("#app-favicon") ??
  document.querySelector<HTMLLinkElement>("link[rel~='icon']") ??
  document.createElement("link");

if (!faviconLink.parentNode) {
  faviconLink.rel = "icon";
  document.head.appendChild(faviconLink);
}

faviconLink.type = "image/png";
faviconLink.href = footerLogo;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
);

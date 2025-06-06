import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  const fallback = document.createElement("div");
  fallback.innerText =
    "Error: No se encontró el elemento root. Verifica tu archivo index.html.";
  document.body.appendChild(fallback);
}

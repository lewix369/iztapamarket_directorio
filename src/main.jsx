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

// Eliminando cualquier Service Worker activo y limpiando la caché
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      if (registrations.length === 0) {
        console.log("ℹ️ No se encontraron Service Workers registrados.");
      }

      registrations.forEach((registration) => {
        registration.unregister().then((success) => {
          console.log("✅ Service Worker eliminado:", success);
        });
      });
    })
    .catch((err) => {
      console.error("❌ Error al obtener registros de Service Workers:", err);
    });
}

if ("caches" in window) {
  caches
    .keys()
    .then((names) => {
      if (names.length === 0) {
        console.log("ℹ️ No se encontraron entradas en caché.");
      }

      Promise.all(names.map((name) => caches.delete(name))).then(() => {
        console.log("🧹 Caché completamente limpiada.");
        // Forzamos recarga tras limpieza
        window.location.reload(true);
      });
    })
    .catch((err) => {
      console.error("❌ Error al limpiar la caché:", err);
    });
}

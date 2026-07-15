"use client";

import { useEffect } from "react";

/**
 * Neutralise l'ancien service worker de la PWA.
 *
 * L'ancienne version mettait en cache les chunks JS de Next.js et pouvait servir
 * des scripts périmés → hydratation React cassée (cartes qui ne se retournent
 * plus, choix du bilan non sélectionnables). Ce composant désenregistre tout
 * service worker existant et vide les caches, de façon à réparer les navigateurs
 * déjà affectés. La PWA reste installable via le manifest, sans cache hors-ligne.
 */
export default function RegisterSW() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => {
        regs.forEach((reg) => reg.unregister());
      })
      .catch(() => {
        /* silencieux */
      });

    if (typeof caches !== "undefined") {
      caches
        .keys()
        .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
        .catch(() => {
          /* silencieux */
        });
    }
  }, []);

  return null;
}

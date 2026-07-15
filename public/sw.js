/* =============================================================================
   SERVICE WORKER — KILL SWITCH (neutralisé)
   =============================================================================
   L'ancien service worker mettait en cache les chunks JS de Next.js (dont les
   noms changent à chaque build), ce qui pouvait servir des scripts périmés et
   CASSER l'hydratation React (interactivité morte). Ce SW ne met plus rien en
   cache : il se désenregistre, vide tous les caches, et recharge les onglets
   pour que les navigateurs qui avaient l'ancien SW récupèrent une version saine.
   ============================================================================= */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Vider tous les caches créés par l'ancien SW.
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      // Se désenregistrer définitivement.
      await self.registration.unregister();
      // Recharger les onglets ouverts pour repartir sur des assets frais.
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});

/* Pas de handler 'fetch' : le SW n'intercepte plus aucune requête. */

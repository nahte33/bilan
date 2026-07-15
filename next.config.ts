import type { NextConfig } from "next";

/**
 * En-têtes de sécurité HTTP appliqués à toutes les routes.
 * Note : ces en-têtes sont servis par Next en hébergement Node/Vercel. En export
 * statique pur (`output: 'export'`), ils devront être répliqués côté hébergeur
 * (vercel.json / configuration CDN).
 */
const securityHeaders = [
  // Empêche le chargement du site dans une iframe tierce (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Empêche le MIME-sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ne fuite pas l'URL complète vers les sites externes.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Coupe l'accès aux capteurs/API sensibles par défaut.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS pendant 2 ans (préchargeable).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Politique de contenu : n'autorise que nos propres ressources + Google Fonts.
  // Aucune donnée patient n'est envoyée : connect-src est volontairement restreint.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      // Next injecte des styles inline ; les polices viennent de Google Fonts.
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      // 'unsafe-inline' requis par le runtime Next ; à durcir via nonce si backend.
      "script-src 'self' 'unsafe-inline'",
      "connect-src 'self'",
      "manifest-src 'self'",
      "worker-src 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ne divulgue pas la version de Next dans l'en-tête `X-Powered-By`.
  poweredByHeader: false,
  async headers() {
    // ⚠️ NE PAS appliquer la CSP en développement : Next.js/webpack utilise
    // `eval()` en mode dev, qu'une CSP sans `'unsafe-eval'` bloque — ce qui
    // empêche l'hydratation React (interactivité morte en local). Les en-têtes
    // de sécurité ne concernent que le site déployé (production).
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

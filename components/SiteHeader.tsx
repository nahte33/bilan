"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header minimal : tout se fait depuis les cartes de l'accueil.
 * Logo = retour à l'accueil ; loupe = recherche globale.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const surAccueil = pathname === "/";

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label="Accueil — Kiné Ressources">
          <span className="mark" aria-hidden="true">K</span>
          <span className="word">
            Kiné Ressources
            <small>Base de référence</small>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {!surAccueil && (
            <Link href="/" className="hdr-btn" aria-label="Retour aux cartes">
              <span aria-hidden="true">▦</span>
              <span className="hdr-btn-lbl">Accueil</span>
            </Link>
          )}
          <Link href="/recherche" className="hdr-btn" aria-label="Recherche globale">
            <span aria-hidden="true">⌕</span>
            <span className="hdr-btn-lbl">Rechercher</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

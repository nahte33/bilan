"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LIENS = [
  { href: "/", label: "Accueil" },
  { href: "/outil", label: "L'outil" },
  { href: "/methode", label: "Méthode & sources" },
  { href: "/mentions", label: "Mentions" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  const estActif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => {
    setOuvert(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label="Accueil — Bilan MSK">
          <span className="mark" aria-hidden="true">B</span>
          <span className="word">
            Bilan MSK
            <small>Raisonnement clinique</small>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="nav nav-desktop" aria-label="Navigation principale">
          {LIENS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${estActif(l.href) ? " actif" : ""}`}
              aria-current={estActif(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/outil" className="btn btn-primary nav-cta">
            Ouvrir l&apos;outil
          </Link>
        </nav>

        {/* Bouton burger (mobile) */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          onClick={() => setOuvert((v) => !v)}
        >
          <span className={`burger${ouvert ? " ouvert" : ""}`} aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      <nav
        id="menu-mobile"
        className={`mobile-menu${ouvert ? " open" : ""}`}
        aria-label="Navigation mobile"
      >
        <div className="container">
          {LIENS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`mobile-link${estActif(l.href) ? " actif" : ""}`}
              aria-current={estActif(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/outil" className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>
            Ouvrir l&apos;outil
          </Link>
        </div>
      </nav>
    </header>
  );
}

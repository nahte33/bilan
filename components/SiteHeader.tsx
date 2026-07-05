"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LIENS = [
  { href: "/outil", label: "Bilan" },
  { href: "/protocoles", label: "Protocoles" },
  { href: "/questionnaires", label: "Questionnaires" },
  { href: "/tests", label: "Tests" },
  { href: "/ressources", label: "Ressources" },
];

const LIENS_MOBILE = [
  { href: "/", label: "Accueil" },
  ...LIENS,
  { href: "/recherche", label: "Recherche" },
  { href: "/methode", label: "Méthode & sources" },
  { href: "/mentions", label: "Mentions" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [ouvert, setOuvert] = useState(false);
  const [q, setQ] = useState("");

  const estActif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setOuvert(false);
  }, [pathname]);

  function lancerRecherche(e: React.FormEvent) {
    e.preventDefault();
    const t = q.trim();
    router.push(t ? `/recherche?q=${encodeURIComponent(t)}` : "/recherche");
  }

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
          <form className="nav-search" onSubmit={lancerRecherche} role="search">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher…"
              aria-label="Recherche globale"
            />
          </form>
        </nav>

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

      <nav
        id="menu-mobile"
        className={`mobile-menu${ouvert ? " open" : ""}`}
        aria-label="Navigation mobile"
      >
        <div className="container">
          {LIENS_MOBILE.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`mobile-link${estActif(l.href) ? " actif" : ""}`}
              aria-current={estActif(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

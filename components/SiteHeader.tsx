"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LIENS = [
  { href: "/", label: "Accueil", secondaire: false },
  { href: "/outil", label: "L'outil", secondaire: false },
  { href: "/methode", label: "Méthode & sources", secondaire: true },
  { href: "/mentions", label: "Mentions", secondaire: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const estActif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

        <nav className="nav" aria-label="Navigation principale">
          {LIENS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${l.secondaire ? " secondaire" : ""}${estActif(l.href) ? " actif" : ""}`}
              aria-current={estActif(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/outil" className="btn btn-primary nav-cta">
            Ouvrir l&apos;outil
          </Link>
        </nav>
      </div>
    </header>
  );
}

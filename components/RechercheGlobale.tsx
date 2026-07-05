"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { SearchDoc } from "@/lib/recherche";

function normaliser(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export default function RechercheGlobale({ docs }: { docs: SearchDoc[] }) {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");

  const resultats = useMemo(() => {
    const nq = normaliser(q.trim());
    if (nq.length < 2) return [];
    return docs
      .filter((d) => normaliser(d.titre + " " + (d.sousTitre ?? "") + " " + d.recherche).includes(nq))
      .slice(0, 60);
  }, [docs, q]);

  return (
    <div className="wrap">
      <div className="eyebrow">Recherche</div>
      <h1 className="h-display" style={{ fontSize: 32, margin: "8px 0 14px" }}>
        Rechercher dans toute la plateforme
      </h1>

      <input
        type="search"
        className="recherche-input"
        style={{ width: "100%", fontSize: 17, padding: "14px 18px" }}
        placeholder="Test, questionnaire, protocole, drapeau rouge, terme EBP…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Recherche globale"
        autoFocus
      />

      <div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--soft)" }}>
        {q.trim().length < 2
          ? `${docs.length} fiches indexées`
          : `${resultats.length} résultat${resultats.length > 1 ? "s" : ""}`}
      </div>

      <div className="fiches" style={{ marginTop: 18 }}>
        {q.trim().length >= 2 && resultats.length === 0 && (
          <div className="empty">Aucun résultat. Essayez un autre terme.</div>
        )}
        {resultats.map((d) => (
          <Link key={d.id} href={d.href} className="module-card" style={{ display: "block" }}>
            <span className="badge badge-grey" style={{ marginBottom: 6, display: "inline-block" }}>
              {d.type}
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, margin: "2px 0 2px" }}>
              {d.titre}
            </h3>
            {d.sousTitre && <p style={{ fontSize: 13, color: "var(--soft)", margin: 0 }}>{d.sousTitre}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { Facette, FicheVM } from "@/lib/contenu/vm";

interface ListePageProps {
  eyebrow: string;
  titre: string;
  lede: string;
  entries: FicheVM[];
  facettes?: Facette[];
  placeholder?: string;
  /** Note d'avertissement affichée sous l'intro (sourçage, légalité…). */
  avertissement?: string;
}

function normaliser(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function ListePage({
  eyebrow,
  titre,
  lede,
  entries,
  facettes = [],
  placeholder = "Rechercher…",
  avertissement,
}: ListePageProps) {
  const [q, setQ] = useState("");
  const [facette, setFacette] = useState<string | null>(null);

  const filtres = useMemo(() => {
    const nq = normaliser(q.trim());
    return entries.filter((e) => {
      if (facette && !(e.facetIds ?? []).includes(facette)) return false;
      if (!nq) return true;
      return normaliser(e.recherche).includes(nq);
    });
  }, [entries, q, facette]);

  return (
    <div className="wrap">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="h-display" style={{ fontSize: 32, margin: "8px 0 10px" }}>
        {titre}
      </h1>
      <p className="lede" style={{ marginBottom: avertissement ? 12 : 20 }}>
        {lede}
      </p>
      {avertissement && (
        <div className="callout" style={{ marginBottom: 20 }}>
          {avertissement}
        </div>
      )}

      <div className="filtre-bar">
        <input
          type="search"
          className="recherche-input"
          placeholder={placeholder}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label={placeholder}
        />
        <span className="filtre-count">
          {filtres.length} / {entries.length}
        </span>
      </div>

      {facettes.length > 0 && (
        <div className="facettes" role="group" aria-label="Filtres">
          <button
            type="button"
            className={`facette${facette === null ? " actif" : ""}`}
            onClick={() => setFacette(null)}
          >
            Tous
          </button>
          {facettes.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`facette${facette === f.id ? " actif" : ""}`}
              onClick={() => setFacette(facette === f.id ? null : f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="fiches">
        {filtres.length === 0 ? (
          <div className="empty">Aucun résultat pour cette recherche.</div>
        ) : (
          filtres.map((e) => <Fiche key={e.id} e={e} />)
        )}
      </div>
    </div>
  );
}

function Fiche({ e }: { e: FicheVM }) {
  return (
    <article className="fiche" id={e.id}>
      <div className="fiche-head">
        <div>
          <h2 className="fiche-titre">{e.titre}</h2>
          {e.sousTitre && <div className="fiche-sous">{e.sousTitre}</div>}
        </div>
        {e.aValider && <span className="badge badge-brass">à valider</span>}
      </div>

      {e.badges && e.badges.length > 0 && (
        <div className="fiche-badges">
          {e.badges.map((b, i) => (
            <span key={i} className={`badge badge-${b.tone ?? "grey"}`}>
              {b.label}
            </span>
          ))}
        </div>
      )}

      {e.texte && <p className="fiche-texte">{e.texte}</p>}

      {e.meta && e.meta.length > 0 && (
        <dl className="fiche-meta">
          {e.meta.map((m, i) => (
            <div key={i}>
              <dt>{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>
      )}

      {e.blocs?.map((bloc, i) => (
        <div key={i} className="fiche-bloc">
          {bloc.titre && <div className="fiche-bloc-titre">{bloc.titre}</div>}
          <ul>
            {bloc.items.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>
        </div>
      ))}

      {e.alerte && <div className="fiche-alerte">{e.alerte}</div>}

      {e.sources && e.sources.length > 0 && (
        <div className="fiche-sources">
          <span className="fiche-sources-lbl">Sources</span>
          {e.sources.map((s, i) => (
            <span key={i} className="src-item">
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

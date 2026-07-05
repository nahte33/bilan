"use client";

import { useEffect, useMemo, useState } from "react";
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
  // Fiche ouverte (une seule à la fois — pattern "carte retournée").
  const [ouverte, setOuverte] = useState<string | null>(null);

  // Deep-link : /module#id (recherche globale) → la carte s'ouvre d'elle-même.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && entries.some((e) => e.id === id)) {
      setOuverte(id);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <div className="fgrid">
        {filtres.length === 0 ? (
          <div className="empty" style={{ gridColumn: "1 / -1" }}>
            Aucun résultat pour cette recherche.
          </div>
        ) : (
          filtres.map((e) => (
            <CarteFlip
              key={e.id}
              e={e}
              ouverte={ouverte === e.id}
              onToggle={() => setOuverte(ouverte === e.id ? null : e.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Carte "flip" : recto = titre seul ; clic = retournement (rotation 3D) et la
 * carte s'étend sur toute la largeur avec le détail complet.
 */
function CarteFlip({
  e,
  ouverte,
  onToggle,
}: {
  e: FicheVM;
  ouverte: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`fcard${ouverte ? " ouverte" : ""}`} id={e.id}>
      {/* key force le navigateur à rejouer l'animation de rotation à chaque bascule */}
      <div key={ouverte ? "verso" : "recto"} className="fcard-face">
        {!ouverte ? (
          <button type="button" className="fcard-recto" onClick={onToggle} aria-expanded={false}>
            <span className="fcard-titre">{e.titre}</span>
            {e.sousTitre && <span className="fcard-sous">{e.sousTitre}</span>}
            <span className="fcard-hint" aria-hidden="true">
              Voir le détail ⟳
            </span>
          </button>
        ) : (
          <div className="fcard-verso">
            <div className="fiche-head">
              <div>
                <h2 className="fiche-titre">{e.titre}</h2>
                {e.sousTitre && <div className="fiche-sous">{e.sousTitre}</div>}
              </div>
              <button type="button" className="fcard-close" onClick={onToggle} aria-label="Refermer la carte">
                ✕
              </button>
            </div>

            {(e.badges?.length || e.aValider) && (
              <div className="fiche-badges">
                {e.aValider && <span className="badge badge-brass">à valider</span>}
                {e.badges?.map((b, i) => (
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

            {e.lien && (
              <a
                className="fcard-lien"
                href={e.lien.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {e.lien.label} ↗
              </a>
            )}

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
          </div>
        )}
      </div>
    </article>
  );
}

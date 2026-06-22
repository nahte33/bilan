"use client";

import type { Question, Region, ReponseValeur, Reponses } from "@/lib/moteur/types";
import { estVisible } from "@/lib/moteur/engine";

interface QuestionnaireProps {
  region: Region;
  rep: Reponses;
  onToggle: (q: Question, valeur: ReponseValeur) => void;
}

/** Options affichées (oui/non générés à la volée comme dans le prototype). */
function optionsAffichees(q: Question): { valeur: ReponseValeur; label: string }[] {
  if (q.type === "oui_non") {
    return [
      { valeur: true, label: "Oui" },
      { valeur: false, label: "Non" },
    ];
  }
  return (q.options ?? []).map((o) => ({ valeur: o.valeur, label: o.label }));
}

function estActif(q: Question, valeur: ReponseValeur, cur: ReponseValeur | undefined): boolean {
  if (q.type === "choix_multiple") return Array.isArray(cur) && cur.includes(valeur as string);
  if (q.type === "oui_non") return cur === valeur;
  return cur === valeur;
}

export default function Questionnaire({ region, rep, onToggle }: QuestionnaireProps) {
  const visibles = region.QUESTIONS.filter((q) => estVisible(q, rep));
  const repondues = visibles.filter((q) => {
    const v = rep[q.id];
    return v !== undefined && (!Array.isArray(v) || v.length > 0);
  }).length;

  return (
    <section className="panel">
      <div className="panel-h">
        <h2>Anamnèse</h2>
        <span className="progress">
          {repondues} / {visibles.length} renseignées
        </span>
      </div>
      <div className="panel-body">
        {visibles.map((q) => {
          const cur = rep[q.id];
          return (
            <div className="q" key={q.id}>
              <div className="q-txt">
                {q.texte}
                {q.aide && <div className="q-aide">{q.aide}</div>}
              </div>
              <div className="opts">
                {optionsAffichees(q).map((o) => {
                  const actif = estActif(q, o.valeur, cur);
                  const noClass = q.type === "oui_non" && o.valeur === false && actif ? " no" : "";
                  return (
                    <button
                      type="button"
                      key={String(o.valeur)}
                      className={`pill${actif ? " actif" : ""}${noClass}`}
                      aria-pressed={actif}
                      onClick={() => onToggle(q, o.valeur)}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

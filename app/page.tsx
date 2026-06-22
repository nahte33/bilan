"use client";

import { useState } from "react";
import type { Question, ReponseValeur, Reponses } from "@/lib/moteur/types";
import { toggleReponse } from "@/lib/moteur/engine";
import { REGIONS, REGIONS_MENU, REGION_DEFAUT } from "@/data/regions";
import Questionnaire from "@/components/Questionnaire";
import Bilan from "@/components/Bilan";

export default function Page() {
  const [regionId, setRegionId] = useState<string>(REGION_DEFAUT);
  const [rep, setRep] = useState<Reponses>({});

  const region = REGIONS[regionId];

  function handleToggle(q: Question, valeur: ReponseValeur) {
    setRep((prev) => toggleReponse(region, prev, q, valeur));
  }

  function handleReset() {
    setRep({});
  }

  function handleRegionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (!value || !REGIONS[value]) return;
    setRegionId(value);
    setRep({});
  }

  return (
    <div className="wrap">
      <header>
        <div className="eyebrow">Aide au raisonnement clinique</div>
        <h1>Bilan orienté — douleurs musculosquelettiques du sportif</h1>
        <p className="lede">
          L&apos;anamnèse fait apparaître les questions pertinentes au fur et à mesure,
          classe les hypothèses par cohérence et propose les tests qui les départagent.
          Le clinicien interprète et décide.
        </p>
        <div className="topbar">
          <div className="region">
            <label htmlFor="sel">Région</label>
            <select id="sel" value={regionId} onChange={handleRegionChange}>
              {REGIONS_MENU.map((m) => (
                <option key={m.id} value={m.aVenir ? "" : m.id} disabled={m.aVenir}>
                  {m.nom}
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="reset" onClick={handleReset}>
            Réinitialiser
          </button>
        </div>
      </header>

      <div className="grid">
        <Questionnaire region={region} rep={rep} onToggle={handleToggle} />
        <Bilan region={region} rep={rep} />
      </div>

      <footer>
        Prototype à but de démonstration. Les bandes de cohérence reposent sur des seuils
        de jugement clinique (non validés) ; les sensibilités/spécificités citées varient
        selon les études. Cet outil n&apos;établit pas de diagnostic et ne remplace pas
        l&apos;examen ni la décision du clinicien.
      </footer>
    </div>
  );
}

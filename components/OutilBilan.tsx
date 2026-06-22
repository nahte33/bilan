"use client";

import { useState } from "react";
import type { Question, ReponseValeur, Reponses } from "@/lib/moteur/types";
import { toggleReponse } from "@/lib/moteur/engine";
import { REGIONS, REGIONS_MENU, REGION_DEFAUT } from "@/data/regions";
import Questionnaire from "@/components/Questionnaire";
import Bilan from "@/components/Bilan";

/**
 * Outil d'aide au raisonnement — comportement strictement identique au prototype.
 * (Sélecteur de région, anamnèse adaptative, bilan en direct.)
 */
export default function OutilBilan() {
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
    <>
      <div className="topbar">
        <div className="region-select">
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

      <div className="grid">
        <Questionnaire region={region} rep={rep} onToggle={handleToggle} />
        <Bilan region={region} rep={rep} />
      </div>
    </>
  );
}

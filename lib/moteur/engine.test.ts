/* =============================================================================
   TESTS UNITAIRES DU MOTEUR
   =============================================================================
   Reproduisent les scénarios de référence (déjà validés) de la section 9 du
   brief, sur la région hanche/aine portée. Le moteur étant générique, ces tests
   exercent aussi indirectement le portage des données.
   ============================================================================= */

import { describe, expect, it } from "vitest";
import {
  bandePour,
  classement,
  condOK,
  drapeauxActifs,
  estVisible,
  matchVal,
  testsProposes,
  toggleReponse,
} from "./engine";
import type { Question, Reponses } from "./types";
import { hancheAine as R } from "@/data/regions/hanche-aine";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("primitives du moteur", () => {
  it("matchVal gère string, booléen et tableaux", () => {
    expect(matchVal("a", "a")).toBe(true);
    expect(matchVal("a", "b")).toBe(false);
    expect(matchVal(undefined, "a")).toBe(false);
    expect(matchVal(true, true)).toBe(true);
    expect(matchVal(["x", "y"], "y")).toBe(true); // réponse multiple contient l'attendu
    expect(matchVal("x", ["x", "y"])).toBe(true); // attendu liste => OU logique
    expect(matchVal("z", ["x", "y"])).toBe(false);
  });

  it("condOK applique un ET logique sur toutes les clés", () => {
    const rep: Reponses = { age: "adolescent", localisation: "profond_intra" };
    expect(condOK({ age: "adolescent" }, rep)).toBe(true);
    expect(condOK({ age: "adolescent", localisation: "profond_intra" }, rep)).toBe(true);
    expect(condOK({ age: "adolescent", localisation: "pubis_adducteurs" }, rep)).toBe(false);
  });

  it("bandePour applique les seuils (forte>=4, modérée>=2, faible>=1, sinon écartée)", () => {
    expect(bandePour(6, R.BANDES)).toBe("forte");
    expect(bandePour(4, R.BANDES)).toBe("forte");
    expect(bandePour(3, R.BANDES)).toBe("moderee");
    expect(bandePour(2, R.BANDES)).toBe("moderee");
    expect(bandePour(1, R.BANDES)).toBe("faible");
    expect(bandePour(0, R.BANDES)).toBeNull();
  });
});

describe("scénario 1 — adducteurs en cohérence forte", () => {
  // douleur au pubis/adducteurs + frappe + début aigu
  const rep: Reponses = {
    localisation: "pubis_adducteurs",
    geste_declenchant: ["frappe"],
    installation: "aigu_traumatique",
  };

  it("classe les adducteurs en tête, en cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("adducteurs");
    expect(rang[0].bande).toBe("forte");
    // 3 (pubis) + 2 (frappe) + 1 (aigu) = 6
    expect(rang[0].score).toBe(6);
  });
});

describe("scénario 2 — drapeau fracture de fatigue du col + test de dépistage", () => {
  // douleur à l'appui/impact + RED-S + pic de charge
  const rep: Reponses = {
    douleur_appui_impact: true,
    facteurs_red_s: true,
    pic_charge: true,
  };

  it("affiche le drapeau rouge fracture du col fémoral", () => {
    const flags = drapeauxActifs(R, rep);
    expect(flags.map((f) => f.id)).toContain("fracture_col_femoral");
  });

  it("propose le test de dépistage (fulcrum/hop)", () => {
    const rang = classement(R, rep);
    const tests = testsProposes(R, rang, rep);
    const screen = tests.find((t) => t.screen);
    expect(screen?.id).toBe("fulcrum_hop");
  });
});

describe("scénario 3 — atteinte intra-articulaire (FAI/labrum) en tête, FADIR + FABER proposés", () => {
  // douleur profonde (signe du C) + accrochage + flexion assise
  const rep: Reponses = {
    localisation: "profond_intra",
    accrochage_blocage: true,
    geste_declenchant: ["flexion_assise"],
  };

  it("classe l'atteinte intra-articulaire en tête", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("fai_labral");
    // 3 (profond) + 2 (accrochage) + 2 (flexion assise) = 7
    expect(rang[0].score).toBe(7);
  });

  it("propose FADIR et FABER", () => {
    const rang = classement(R, rep);
    const ids = testsProposes(R, rang, rep).map((t) => t.id);
    expect(ids).toContain("fadir");
    expect(ids).toContain("faber");
  });
});

describe("scénario 4 — affichage conditionnel de la localisation du ressaut", () => {
  const qRessautLoc = qById("ressaut_localisation");

  it("la question n'apparaît pas tant que ressaut n'est pas à oui", () => {
    expect(estVisible(qRessautLoc, {})).toBe(false);
    expect(estVisible(qRessautLoc, { ressaut: false })).toBe(false);
  });

  it("la question apparaît quand ressaut = oui", () => {
    expect(estVisible(qRessautLoc, { ressaut: true })).toBe(true);
  });

  it("la réponse au ressaut est oubliée si ressaut redevient non (nettoyage)", () => {
    let rep: Reponses = {};
    // ressaut = oui, puis on précise la localisation
    rep = toggleReponse(R, rep, qById("ressaut"), true);
    rep = toggleReponse(R, rep, qRessautLoc, "anterieur_profond");
    expect(rep.ressaut_localisation).toBe("anterieur_profond");
    // re-clic sur "oui" => ressaut désélectionné => la question devient invisible
    rep = toggleReponse(R, rep, qById("ressaut"), true);
    expect(rep.ressaut).toBeUndefined();
    expect(rep.ressaut_localisation).toBeUndefined();
  });
});

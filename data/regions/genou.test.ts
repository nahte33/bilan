/* =============================================================================
   TESTS — RÉGION GENOU (sur le moteur générique)
   =============================================================================
   Scénarios de cohérence interne du module (pas une validation clinique : la
   validation rétrospective sur cas connus reste à faire par un humain).
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Question, Reponses } from "@/lib/moteur/types";
import { genou as R } from "./genou";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("genou — scénario LCA", () => {
  // pivot sans contact + pop audible + hémarthrose immédiate + dérobement
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme_trauma: ["pivot_sans_contact"],
    pop_audible: true,
    epanchement_delai: "immediat",
    derobement: true,
  };

  it("classe la rupture du LCA en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("acl");
    expect(rang[0].bande).toBe("forte");
    expect(rang[0].score).toBe(9); // 3 + 2 + 2 + 2
  });

  it("propose Lachman, pivot shift et Lever sign", () => {
    const rang = classement(R, rep);
    const ids = testsProposes(R, rang, rep).map((t) => t.id);
    expect(ids).toContain("lachman");
    expect(ids).toContain("pivot_shift");
    expect(ids).toContain("lever_sign");
  });
});

describe("genou — scénario lésion méniscale", () => {
  // torsion pied fixé + interligne médial + épanchement retardé + blocage vrai
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme_trauma: ["torsion_pied_fixe"],
    localisation: "interligne_medial",
    epanchement_delai: "retarde",
    blocage_vrai: true,
  };

  it("classe la lésion méniscale en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("meniscus");
    expect(rang[0].bande).toBe("forte");
    expect(rang[0].score).toBe(9); // 3 (blocage) + 2 (interligne) + 2 (retardé) + 2 (torsion)
  });

  it("propose McMurray, Thessaly et palpation de l'interligne", () => {
    const rang = classement(R, rep);
    const ids = testsProposes(R, rang, rep).map((t) => t.id);
    expect(ids).toContain("mcmurray");
    expect(ids).toContain("thessaly");
    expect(ids).toContain("joint_line_tenderness");
  });
});

describe("genou — scénario douleur fémoro-patellaire", () => {
  const rep: Reponses = {
    localisation: "anterieur_rotule",
    douleur_anterieure_flexion_charge: true,
    gestes_aggravants: ["escaliers_descente", "accroupissement"],
    installation: "progressif",
  };

  it("classe la PFP en tête", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("pfp");
    expect(rang[0].bande).toBe("forte");
  });
});

describe("genou — drapeau fracture (règle d'Ottawa) et dépistage", () => {
  const rep: Reponses = { impossible_appui_4pas: true };

  it("affiche le drapeau fracture", () => {
    expect(drapeauxActifs(R, rep).map((f) => f.id)).toContain("fracture_genou");
  });

  it("propose le dépistage Ottawa", () => {
    const tests = testsProposes(R, classement(R, rep), rep);
    expect(tests.find((t) => t.screen)?.id).toBe("ottawa_knee_rule");
  });
});

describe("genou — affichage conditionnel (Osgood réservé à l'adolescent)", () => {
  const qOsgood = qById("douleur_tta_ado");

  it("la question n'apparaît pas hors adolescent", () => {
    expect(estVisible(qOsgood, {})).toBe(false);
    expect(estVisible(qOsgood, { age: "adulte" })).toBe(false);
  });

  it("la question apparaît chez l'adolescent", () => {
    expect(estVisible(qOsgood, { age: "adolescent" })).toBe(true);
  });
});

describe("genou — drapeau rupture de l'appareil extenseur", () => {
  it("se déclenche sur déficit d'extension active", () => {
    const flags = drapeauxActifs(R, { extension_active_impossible: true });
    expect(flags.map((f) => f.id)).toContain("rupture_appareil_extenseur");
  });
});

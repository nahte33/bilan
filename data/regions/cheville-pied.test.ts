/* =============================================================================
   TESTS — RÉGION CHEVILLE / PIED (cohérence interne sur le moteur générique)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Question, Reponses } from "@/lib/moteur/types";
import { chevillePied as R } from "./cheville-pied";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("cheville — entorse latérale", () => {
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme: ["inversion"],
    localisation: "malleole_laterale",
    gonflement_ecchymose: true,
  };

  it("classe l'entorse latérale en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("lateral_ankle_sprain");
    expect(rang[0].bande).toBe("forte");
    expect(rang[0].score).toBe(6); // 3 + 2 + 1
  });

  it("propose palpation LTFA et tiroir antérieur", () => {
    const ids = testsProposes(R, classement(R, rep), rep).map((t) => t.id);
    expect(ids).toContain("atfl_palpation");
    expect(ids).toContain("anterior_drawer_ankle");
  });
});

describe("cheville — rupture du tendon d'Achille", () => {
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme: ["contraction_brutale_mollet"],
    pop_claquement: true,
    incapacite_pointe: true,
    localisation: "tendon_achille",
  };

  it("classe la rupture d'Achille en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("achilles_rupture");
    expect(rang[0].score).toBe(8); // 2 + 2 + 2 + 2
  });

  it("propose Thompson et Matles, et affiche le drapeau rupture", () => {
    const ids = testsProposes(R, classement(R, rep), rep).map((t) => t.id);
    expect(ids).toContain("calf_squeeze_thompson");
    expect(ids).toContain("matles_test");
    expect(drapeauxActifs(R, rep).map((f) => f.id)).toContain("rupture_achille");
  });
});

describe("cheville — aponévrosite plantaire", () => {
  const rep: Reponses = {
    douleur_matin_premiers_pas_talon: true,
    localisation: "talon_plantaire",
    installation: "progressif",
  };

  it("classe l'aponévrosite plantaire en tête", () => {
    expect(classement(R, rep)[0].id).toBe("plantar_fasciitis");
  });
});

describe("cheville — drapeau fracture (Ottawa) + dépistage", () => {
  const rep: Reponses = { impossible_appui_4pas: true };

  it("affiche le drapeau fracture et propose le dépistage Ottawa", () => {
    expect(drapeauxActifs(R, rep).map((f) => f.id)).toContain("fracture_ottawa");
    const screen = testsProposes(R, classement(R, rep), rep).find((t) => t.screen);
    expect(screen?.id).toBe("ottawa_ankle_rule");
  });
});

describe("cheville — affichage conditionnel du mécanisme", () => {
  it("le mécanisme ne s'affiche que si l'installation est aiguë", () => {
    const q = qById("mecanisme");
    expect(estVisible(q, {})).toBe(false);
    expect(estVisible(q, { installation: "progressif" })).toBe(false);
    expect(estVisible(q, { installation: "aigu_traumatique" })).toBe(true);
  });
});

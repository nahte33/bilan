/* =============================================================================
   TESTS — RÉGION ÉPAULE (cohérence interne)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Question, Reponses } from "@/lib/moteur/types";
import { epaule as R } from "./epaule";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("épaule — rupture de coiffe", () => {
  const rep: Reponses = {
    faiblesse_elevation_RE: true,
    age: "plus_60",
    pseudoparalysie: true,
    douleur_nocturne_couche_epaule: true,
  };

  it("classe la rupture de coiffe en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("rotator_cuff_tear");
    expect(rang[0].score).toBe(8); // 3 + 2 + 2 + 1
  });

  it("propose le test du supra-épineux et affiche le drapeau pseudoparalysie", () => {
    const ids = testsProposes(R, classement(R, rep), rep).map((t) => t.id);
    expect(ids).toContain("supraspinatus_test");
    expect(drapeauxActifs(R, rep).map((f) => f.id)).toContain("rupture_massive_coiffe");
  });
});

describe("épaule — douleur sous-acromiale", () => {
  const rep: Reponses = {
    douleur_overhead_armer: true,
    douleur_arc_douloureux: true,
    localisation: "anterolateral_moignon",
    installation: "progressif",
  };

  it("classe la douleur sous-acromiale en tête", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("subacromial_pain");
    expect(rang[0].bande).toBe("forte");
  });

  it("propose Hawkins, Neer et arc douloureux", () => {
    const ids = testsProposes(R, classement(R, rep), rep).map((t) => t.id);
    expect(ids).toContain("hawkins_kennedy");
    expect(ids).toContain("neer_test");
    expect(ids).toContain("painful_arc");
  });
});

describe("épaule — instabilité antérieure", () => {
  const rep: Reponses = {
    apprehension_abduction_RE: true,
    atcd_luxation_epaule: true,
    age: "jeune",
  };

  it("classe l'instabilité antérieure en tête et propose relocation/anterior release", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("anterior_instability");
    const ids = testsProposes(R, rang, rep).map((t) => t.id);
    expect(ids).toContain("relocation_anterior_release");
  });
});

describe("épaule — drapeaux nerveux et cervical", () => {
  it("déficit post-luxation déclenche le drapeau nerveux", () => {
    expect(drapeauxActifs(R, { deficit_sensitivomoteur_post_luxation: true }).map((f) => f.id)).toContain(
      "atteinte_nerveuse_post_luxation",
    );
  });

  it("irradiation cervicale déclenche le drapeau cervical", () => {
    expect(drapeauxActifs(R, { irradiation_cou_bras: true }).map((f) => f.id)).toContain("origine_cervicale");
  });
});

describe("épaule — affichage conditionnel du mécanisme", () => {
  it("le mécanisme ne s'affiche que si l'installation est aiguë", () => {
    const q = qById("mecanisme");
    expect(estVisible(q, { installation: "progressif" })).toBe(false);
    expect(estVisible(q, { installation: "aigu_traumatique" })).toBe(true);
  });
});

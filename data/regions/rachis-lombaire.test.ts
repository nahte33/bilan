/* =============================================================================
   TESTS — RÉGION RACHIS LOMBAIRE (cohérence interne)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Question, Reponses } from "@/lib/moteur/types";
import { rachisLombaire as R } from "./rachis-lombaire";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("lombaire — radiculopathie", () => {
  const rep: Reponses = {
    douleur_jambe_sous_genou: true,
    irradiation: "irradiation_sous_genou",
    paresthesies_dermatomale: true,
    douleur_flexion: true,
  };

  it("classe la radiculopathie en tête et propose le SLR", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("lumbar_radiculopathy");
    expect(rang[0].score).toBe(8); // 3 + 2 + 2 + 1
    expect(testsProposes(R, rang, rep).map((t) => t.id)).toContain("slr_test");
  });
});

describe("lombaire — canal lombaire étroit", () => {
  const rep: Reponses = {
    claudication_neurogene: true,
    irradiation: "jambes_a_la_marche",
    age: "plus_50",
  };

  it("classe la sténose en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("spinal_stenosis");
    expect(rang[0].bande).toBe("forte");
  });
});

describe("lombaire — spondylolyse de l'adolescent", () => {
  it("la question spécifique n'apparaît que chez l'adolescent", () => {
    const q = qById("ado_sport_extension");
    expect(estVisible(q, { age: "adulte" })).toBe(false);
    expect(estVisible(q, { age: "adolescent" })).toBe(true);
  });

  it("classe la spondylolyse en tête chez l'ado sportif en extension", () => {
    const rep: Reponses = { age: "adolescent", ado_sport_extension: true, douleur_extension: true };
    expect(classement(R, rep)[0].id).toBe("spondylolysis");
  });
});

describe("lombaire — drapeaux rouges majeurs", () => {
  it("troubles sphinctériens → queue de cheval", () => {
    expect(drapeauxActifs(R, { troubles_sphincteriens: true }).map((f) => f.id)).toContain("cauda_equina_sphincter");
  });

  it("anesthésie en selle → queue de cheval", () => {
    expect(drapeauxActifs(R, { anesthesie_selle: true }).map((f) => f.id)).toContain("cauda_equina_selle");
  });

  it("antécédent de cancer → drapeau malignité", () => {
    expect(drapeauxActifs(R, { atcd_cancer: true }).map((f) => f.id)).toContain("malignite");
  });

  it("profil inflammatoire (raideur matinale + réveils nocturnes) → rachialgie inflammatoire", () => {
    const flags = drapeauxActifs(R, { raideur_matinale_prolongee: true, reveil_2e_partie_nuit: true });
    expect(flags.map((f) => f.id)).toContain("rachialgie_inflammatoire");
  });
});

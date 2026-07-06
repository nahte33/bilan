/* =============================================================================
   TESTS — RÉGIONS vestibulaire / ATM / rachis thoracique (cohérence interne)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, testsProposes } from "@/lib/moteur/engine";
import type { Reponses } from "@/lib/moteur/types";
import { vestibulaire } from "./vestibulaire";
import { atm } from "./atm";
import { rachisThoracique } from "./rachis-thoracique";

describe("vestibulaire — VPPB postérieur", () => {
  const rep: Reponses = {
    declencheur: "changement_position",
    duree_crise: "secondes",
    type_sensation: "rotatoire",
  };
  it("classe le VPPB postérieur en tête, cohérence forte, et propose Dix-Hallpike", () => {
    const rang = classement(vestibulaire, rep);
    expect(rang[0].id).toBe("vppb_posterieur");
    expect(rang[0].bande).toBe("forte"); // 3 + 3 + 1 = 7
    expect(testsProposes(vestibulaire, rang, rep).map((t) => t.id)).toContain("dix_hallpike");
  });
  it("signes neuro centraux → drapeau vertige central", () => {
    expect(drapeauxActifs(vestibulaire, { signes_neuro_centraux: true }).map((f) => f.id)).toContain("vertige_central");
  });
});

describe("vestibulaire — névrite vestibulaire", () => {
  it("épisode viral + vertige continu plusieurs jours en tête", () => {
    const rep: Reponses = { post_viral: true, duree_crise: "jours", declencheur: "spontane" };
    expect(classement(vestibulaire, rep)[0].id).toBe("nevrite_vestibulaire");
  });
});

describe("ATM — déplacement discal avec réduction", () => {
  const rep: Reponses = { bruit_articulaire: "clic", deviation_ouverture: true, localisation: "preauriculaire" };
  it("classe le déplacement discal avec réduction en tête", () => {
    const rang = classement(atm, rep);
    expect(rang[0].id).toBe("deplacement_discal_reduction");
    expect(rang[0].score).toBe(6); // 3 + 2 + 1
  });
  it("céphalée temporale de l'aîné → drapeau artérite temporale", () => {
    expect(drapeauxActifs(atm, { cephalee_temporale_agee: true }).map((f) => f.id)).toContain("arterite_temporale");
  });
});

describe("ATM — myalgie masticatrice", () => {
  it("douleur musculaire + mastication + bruxisme en tête", () => {
    const rep: Reponses = { localisation: "muscle_masticateur", douleur_mastication: true, bruxisme: true };
    expect(classement(atm, rep)[0].id).toBe("myalgie_masticatrice");
  });
});

describe("rachis thoracique — drapeaux rouges viscéraux priment", () => {
  it("douleur d'effort constrictive → drapeau cardiaque", () => {
    expect(drapeauxActifs(rachisThoracique, { douleur_thoracique_effort: true }).map((f) => f.id)).toContain("origine_cardiaque_thoracique");
  });
  it("douleur brutale déchirante → drapeau dissection aortique", () => {
    expect(drapeauxActifs(rachisThoracique, { douleur_dechirure_dos: true }).map((f) => f.id)).toContain("dissection_aortique");
  });
  it("éruption vésiculeuse en bande → drapeau zona", () => {
    expect(drapeauxActifs(rachisThoracique, { eruption_vesiculeuse: true }).map((f) => f.id)).toContain("zona_thoracique");
  });
});

describe("rachis thoracique — dysfonction costo-vertébrale", () => {
  it("douleur costale latérale majorée par la respiration en tête", () => {
    const rep: Reponses = {
      localisation: "costale_laterale",
      aggravation_respiration: true,
      reproduction_palpation: true,
      installation: "aigu_geste",
    };
    const rang = classement(rachisThoracique, rep);
    expect(rang[0].id).toBe("dysfonction_costovertebrale");
    expect(rang[0].bande).toBe("forte"); // 3 + 2 + 1 + 1 = 7
  });
});

/* =============================================================================
   TESTS — RÉGIONS COUDE, POIGNET/MAIN, RACHIS CERVICAL (cohérence interne)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Reponses } from "@/lib/moteur/types";
import { coude } from "./coude";
import { poignetMain } from "./poignet-main";
import { rachisCervical } from "./rachis-cervical";

describe("coude — épicondylalgie latérale", () => {
  const rep: Reponses = {
    douleur_extension_poignet_resistee: true,
    localisation: "epicondyle_lateral",
    installation: "progressif",
  };
  it("classe l'épicondylalgie latérale en tête, cohérence forte", () => {
    const rang = classement(coude, rep);
    expect(rang[0].id).toBe("lateral_epicondylalgia");
    expect(rang[0].bande).toBe("forte");
  });
});

describe("coude — rupture du biceps distal", () => {
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme: ["contraction_excentrique_biceps"],
    pop_ecchymose_pli_coude: true,
    deficit_force_flexion_supination: true,
    localisation: "anterieur_pli_coude",
  };
  it("propose le hook test et affiche le drapeau rupture", () => {
    const rang = classement(coude, rep);
    expect(rang[0].id).toBe("distal_biceps_rupture");
    expect(testsProposes(coude, rang, rep).map((t) => t.id)).toContain("hook_test");
    expect(drapeauxActifs(coude, rep).map((f) => f.id)).toContain("rupture_biceps_distal");
  });
});

describe("poignet — fracture du scaphoïde + dépistage", () => {
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme: ["chute_main_tendue"],
    douleur_tabatiere: true,
    localisation: "tabatiere_radial",
  };
  it("classe la fracture du scaphoïde en tête, propose le dépistage et affiche le drapeau", () => {
    const rang = classement(poignetMain, rep);
    expect(rang[0].id).toBe("scaphoid_fracture");
    expect(testsProposes(poignetMain, rang, rep).find((t) => t.screen)?.id).toBe("scaphoid_screen");
    expect(drapeauxActifs(poignetMain, rep).map((f) => f.id)).toContain("fracture_scaphoide");
  });
});

describe("poignet — canal carpien", () => {
  const rep: Reponses = {
    paresthesies_3_doigts_nocturnes: true,
    localisation: "face_palmaire_doigts",
    installation: "progressif",
  };
  it("classe le canal carpien en tête", () => {
    expect(classement(poignetMain, rep)[0].id).toBe("carpal_tunnel");
  });
});

describe("cervical — radiculopathie + Spurling", () => {
  const rep: Reponses = {
    douleur_bras_dermatomale: true,
    paresthesies_bras: true,
    aggravation_extension_rotation: true,
    irradiation: "bras_dermatomale",
  };
  it("classe la radiculopathie en tête et propose le cluster de Spurling", () => {
    const rang = classement(rachisCervical, rep);
    expect(rang[0].id).toBe("cervical_radiculopathy");
    expect(testsProposes(rachisCervical, rang, rep).map((t) => t.id)).toContain("spurling_cluster");
  });
});

describe("cervical — myélopathie et drapeaux", () => {
  it("troubles de la marche → drapeau myélopathie", () => {
    expect(drapeauxActifs(rachisCervical, { troubles_marche_equilibre: true }).map((f) => f.id)).toContain(
      "myelopathie_marche",
    );
  });
  it("traumatisme du cou → dépistage règle canadienne", () => {
    const rep: Reponses = { trauma_cou_recent: true };
    expect(testsProposes(rachisCervical, classement(rachisCervical, rep), rep).find((t) => t.screen)?.id).toBe(
      "canadian_cspine_rule",
    );
  });
});

describe("conditions d'affichage (mécanismes aigus des 3 régions)", () => {
  it("coude/poignet/cervical : le mécanisme ne s'affiche qu'en aigu", () => {
    for (const R of [coude, poignetMain, rachisCervical]) {
      const q = R.QUESTIONS.find((x) => x.id === "mecanisme")!;
      expect(estVisible(q, { installation: "progressif" })).toBe(false);
      expect(estVisible(q, { installation: "aigu_traumatique" })).toBe(true);
    }
  });
});

/* =============================================================================
   TESTS — RÉGION CUISSE / ISCHIO-JAMBIERS (cohérence interne)
   ============================================================================= */

import { describe, expect, it } from "vitest";
import { classement, drapeauxActifs, estVisible, testsProposes } from "@/lib/moteur/engine";
import type { Question, Reponses } from "@/lib/moteur/types";
import { cuisse as R } from "./cuisse";

const qById = (id: string): Question => {
  const q = R.QUESTIONS.find((x) => x.id === id);
  if (!q) throw new Error(`Question introuvable: ${id}`);
  return q;
};

describe("cuisse — lésion des ischio-jambiers (sprint)", () => {
  const rep: Reponses = {
    installation: "aigu_traumatique",
    mecanisme: ["sprint_vitesse"],
    localisation: "ischio_corps",
    pop_dechirure: true,
    douleur_etirement_ischio: true,
  };

  it("classe la lésion des ischio-jambiers en tête, cohérence forte", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("hamstring_strain");
    expect(rang[0].score).toBe(7); // 3 + 2 + 1 + 1
  });
});

describe("cuisse — tendinopathie proximale des ischio-jambiers", () => {
  const rep: Reponses = {
    localisation: "ischio_proximal",
    douleur_assise_prolongee: true,
    installation: "progressif",
    douleur_course_acceleration: true,
  };

  it("classe la tendinopathie proximale en tête", () => {
    const rang = classement(R, rep);
    expect(rang[0].id).toBe("proximal_hamstring_tendinopathy");
    expect(rang[0].bande).toBe("forte");
  });

  it("propose les tests de provocation (bent-knee)", () => {
    const ids = testsProposes(R, classement(R, rep), rep).map((t) => t.id);
    expect(ids).toContain("bent_knee_stretch_tests");
  });
});

describe("cuisse — drapeau avulsion/rupture proximale", () => {
  it("se déclenche sur encoche + déficit de force", () => {
    const flags = drapeauxActifs(R, { ecchymose_palpable_gap: true, deficit_force_flexion_genou: true });
    expect(flags.map((f) => f.id)).toContain("avulsion_rupture_proximale_ischio");
  });
});

describe("cuisse — avulsion ischiatique réservée à l'adolescent", () => {
  const q = qById("ado_douleur_ischion");

  it("la question n'apparaît que chez l'adolescent", () => {
    expect(estVisible(q, {})).toBe(false);
    expect(estVisible(q, { age: "adulte" })).toBe(false);
    expect(estVisible(q, { age: "adolescent" })).toBe(true);
  });

  it("le drapeau avulsion ischion se déclenche chez l'adolescent", () => {
    const flags = drapeauxActifs(R, { age: "adolescent", ado_douleur_ischion: true });
    expect(flags.map((f) => f.id)).toContain("avulsion_ischion_ado");
  });
});

describe("cuisse — drapeau myosite ossifiante", () => {
  it("se déclenche sur perte de flexion après contusion", () => {
    const flags = drapeauxActifs(R, { raideur_perte_flexion_apres_contusion: true });
    expect(flags.map((f) => f.id)).toContain("myosite_ossifiante");
  });
});

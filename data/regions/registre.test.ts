/* =============================================================================
   TEST D'INTÉGRITÉ DU REGISTRE — s'applique à TOUTES les régions, présentes
   et futures. Garantit qu'aucun module de données ne référence une question
   ou une hypothèse inexistante (les fautes de frappe cassent silencieusement
   le raisonnement sinon).
   ============================================================================= */
import { describe, expect, it } from "vitest";
import { REGIONS, REGIONS_MENU, REGION_DEFAUT } from "./index";
import type { Condition, Region } from "@/lib/moteur/types";

function clesCondition(cond: Condition): string[] {
  return Object.keys(cond);
}

function valeursAttendues(region: Region, questionId: string): Set<string> | null {
  const q = region.QUESTIONS.find((x) => x.id === questionId);
  if (!q || !q.options) return null; // oui_non ou question inconnue (testée à part)
  return new Set(q.options.map((o) => o.valeur));
}

describe("registre des régions", () => {
  it("expose une région par entrée de menu et une région par défaut valide", () => {
    expect(REGIONS[REGION_DEFAUT]).toBeDefined();
    for (const m of REGIONS_MENU.filter((x) => !x.aVenir)) {
      expect(REGIONS[m.id], `région du menu absente du registre : ${m.id}`).toBeDefined();
    }
  });

  for (const [regionId, region] of Object.entries(REGIONS)) {
    describe(`région « ${region.nom} » (${regionId})`, () => {
      const questionIds = new Set(region.QUESTIONS.map((q) => q.id));
      const hypotheseIds = new Set(region.HYPOTHESES.map((h) => h.id));

      it("a des identifiants de questions uniques", () => {
        expect(questionIds.size).toBe(region.QUESTIONS.length);
      });

      it("a des identifiants d'hypothèses uniques", () => {
        expect(hypotheseIds.size).toBe(region.HYPOTHESES.length);
      });

      it("a des seuils de bandes cohérents (forte > modérée ≥ 1)", () => {
        expect(region.BANDES.forte).toBeGreaterThan(region.BANDES.moderee);
        expect(region.BANDES.moderee).toBeGreaterThanOrEqual(1);
      });

      it("conditions des questions → questions existantes", () => {
        for (const q of region.QUESTIONS) {
          if (!q.condition) continue;
          for (const cle of clesCondition(q.condition)) {
            expect(questionIds.has(cle), `question « ${q.id} » : condition sur « ${cle} » inconnue`).toBe(true);
          }
        }
      });

      it("indices des hypothèses → questions existantes et valeurs valides", () => {
        for (const h of region.HYPOTHESES) {
          for (const indice of h.indices) {
            for (const [cle, attendu] of Object.entries(indice.si)) {
              expect(questionIds.has(cle), `hypothèse « ${h.id} » : indice sur question inconnue « ${cle} »`).toBe(true);
              const valeurs = valeursAttendues(region, cle);
              if (valeurs) {
                for (const v of Array.isArray(attendu) ? attendu : [attendu]) {
                  if (typeof v === "string") {
                    expect(valeurs.has(v), `hypothèse « ${h.id} » : valeur « ${v} » absente des options de « ${cle} »`).toBe(true);
                  }
                }
              }
            }
            expect(indice.poids, `hypothèse « ${h.id} » : poids nul`).not.toBe(0);
          }
        }
      });

      it("tests → hypothèses existantes", () => {
        for (const t of region.TESTS) {
          for (const cible of t.discrimine) {
            expect(hypotheseIds.has(cible), `test « ${t.id} » : cible inconnue « ${cible} »`).toBe(true);
          }
        }
      });

      it("drapeaux rouges → questions existantes et valeurs valides", () => {
        for (const d of region.DRAPEAUX_ROUGES) {
          for (const [cle, attendu] of Object.entries(d.si)) {
            expect(questionIds.has(cle), `drapeau « ${d.id} » : condition sur question inconnue « ${cle} »`).toBe(true);
            const valeurs = valeursAttendues(region, cle);
            if (valeurs && typeof attendu === "string") {
              expect(valeurs.has(attendu), `drapeau « ${d.id} » : valeur « ${attendu} » absente des options de « ${cle} »`).toBe(true);
            }
          }
        }
        expect(region.DRAPEAUX_ROUGES.length, "au moins un drapeau rouge par région").toBeGreaterThan(0);
      });

      it("dépistage éventuel → question existante", () => {
        if (region.TEST_SCREEN) {
          expect(questionIds.has(region.TEST_SCREEN.siRep), `TEST_SCREEN : question inconnue « ${region.TEST_SCREEN.siRep} »`).toBe(true);
        }
      });
    });
  }
});

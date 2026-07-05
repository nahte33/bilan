/* =============================================================================
   BIBLIOTHÈQUE DE TESTS CLINIQUES
   =============================================================================
   Dérivée des modules du bilan (data/regions/*) — source de vérité unique,
   déjà sourcée — puis consultable indépendamment. Pas de duplication.
   ============================================================================= */
import type { RegionCorporelle, Source, TestClinique } from "@/lib/contenu/types";
import { REGIONS } from "@/data/regions";

/** Correspondance id de région du bilan → région corporelle typée. */
const REGION_MAP: Record<string, RegionCorporelle> = {
  hanche_aine: "hanche_aine",
  genou: "genou",
  cheville_pied: "cheville_pied",
  cuisse: "cuisse",
  epaule: "epaule",
  rachis_lombaire: "rachis_lombaire",
  coude: "coude",
  poignet_main: "poignet_main",
  rachis_cervical: "rachis_cervical",
};

function toSources(source?: string): Source[] {
  if (!source) return [];
  return source.split(";").map((s) => ({ label: s.trim() }));
}

/** Construit la bibliothèque à partir des tests de chaque région. */
export function bibliothequeTests(): TestClinique[] {
  const out: TestClinique[] = [];
  for (const [regionId, region] of Object.entries(REGIONS)) {
    const reg = REGION_MAP[regionId] ?? "global";
    const nomParHypo = new Map(region.HYPOTHESES.map((h) => [h.id, h.nom]));
    for (const t of region.TESTS) {
      const cibles = t.discrimine
        .map((id) => nomParHypo.get(id))
        .filter(Boolean)
        .join(", ");
      out.push({
        id: `${regionId}__${t.id}`,
        nom: t.nom,
        regions: [reg],
        cible: cibles || region.nom,
        technique: t.technique,
        precision: t.precision,
        sources: toSources(t.source),
        aValider: !t.precision && !t.source,
      });
    }
    if (region.TEST_SCREEN) {
      const ts = region.TEST_SCREEN;
      out.push({
        id: `${regionId}__${ts.id}`,
        nom: ts.nom,
        regions: [reg],
        cible: "Dépistage (drapeau rouge)",
        technique: ts.technique,
        precision: ts.precision,
        sources: toSources(ts.source),
      });
    }
  }
  return out;
}

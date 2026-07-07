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
  rachis_thoracique: "rachis_thoracique",
  atm: "atm",
  vestibulaire: "vestibulaire",
};

function toSources(source?: string): Source[] {
  if (!source) return [];
  return source.split(";").map((s) => ({ label: s.trim() }));
}

/* -----------------------------------------------------------------------------
   Tests cliniques "manuels" — règles de décision & tests validés, non rattachés
   au moteur du bilan. Se/Sp vérifiées via PubMed (PMID/DOI cités).
   --------------------------------------------------------------------------- */
export const TESTS_MANUELS: TestClinique[] = [
  {
    id: "ottawa_cheville",
    nom: "Règles d'Ottawa (cheville / médio-pied)",
    regions: ["cheville_pied"],
    cible: "Exclure une fracture (indication de radiographie)",
    technique:
      "Radiographie indiquée s'il existe une douleur malléolaire/médio-pied AVEC douleur à la palpation osseuse des zones définies OU incapacité de faire 4 pas.",
    precision:
      "Sensibilité proche de 100 % pour exclure une fracture (LR− ≈ 0,08) ; spécificité modeste. Réduit de 30–40 % les radiographies inutiles.",
    interpretation: "Excellent test d'exclusion (rule-out) : si négatif, fracture très improbable.",
    sources: [{ label: "Bachmann LM et al. BMJ 2003 (méta-analyse) · DOI 10.1136/bmj.326.7386.417 · PMID 12595378" }],
  },
  {
    id: "canadian_cspine",
    nom: "Canadian C-Spine Rule (rachis cervical, traumatisme)",
    regions: ["rachis_cervical"],
    cible: "Exclure une lésion cervicale cliniquement importante",
    technique:
      "Algorithme : facteurs à haut risque (âge ≥ 65, mécanisme dangereux, paresthésies) → imagerie ; sinon facteurs à bas risque permettant d'évaluer la mobilité ; puis rotation active 45° G/D.",
    precision: "Sensibilité 100 % (IC 98–100 %), spécificité 42,5 % chez le patient traumatisé alerte et stable.",
    interpretation: "Règle de décision très sensible pour sélectionner les radiographies (rule-out).",
    sources: [{ label: "Stiell IG et al. JAMA 2001 · DOI 10.1001/jama.286.15.1841 · PMID 11597285" }],
  },
  {
    id: "ultt_a",
    nom: "Test de tension neurale du membre supérieur A (ULTT A / ULNT médian)",
    regions: ["rachis_cervical", "poignet_main"],
    cible: "Radiculopathie cervicale (composante neurale)",
    technique: "Mise en tension séquentielle du nerf médian ; reproduction des symptômes du membre supérieur.",
    precision:
      "Meilleur test isolé pour ÉLIMINER une radiculopathie cervicale (haute sensibilité). Un cluster de 4 items (ULTT A, rotation < 60°, Spurling, distraction) donne un LR+ ≈ 30.",
    interpretation: "Négatif → rend la radiculopathie improbable (rule-out). Cluster positif → fort argument rule-in.",
    sources: [{ label: "Wainner RS et al. Spine 2003 · DOI 10.1097/00007632-200301010-00014 · PMID 12544957" }],
  },
  {
    id: "slr_lasegue",
    nom: "Signe de Lasègue / Straight Leg Raise (SLR)",
    regions: ["rachis_lombaire"],
    cible: "Hernie discale / radiculopathie lombaire",
    technique: "Élévation passive du membre inférieur tendu ; reproduction d'une douleur radiculaire.",
    precision: "Sensibilité ≈ 0,91, spécificité ≈ 0,26 (méta-analyse, chirurgie comme référence).",
    interpretation: "Sensible mais peu spécifique → bon pour ÉLIMINER (rule-out) une hernie symptomatique.",
    sources: [{ label: "Devillé WL et al. Spine 2000 (méta-analyse) · DOI 10.1097/00007632-200005010-00016 · PMID 10788860" }],
  },
  {
    id: "cross_slr",
    nom: "SLR croisé (crossed straight leg raise)",
    regions: ["rachis_lombaire"],
    cible: "Hernie discale lombaire",
    technique: "L'élévation du membre sain reproduit la douleur du côté atteint.",
    precision: "Sensibilité ≈ 0,29, spécificité ≈ 0,88 (méta-analyse).",
    interpretation: "Peu sensible mais spécifique → bon pour CONFIRMER (rule-in) une hernie.",
    sources: [{ label: "Devillé WL et al. Spine 2000 · DOI 10.1097/00007632-200005010-00016 · PMID 10788860" }],
  },
  {
    id: "ottawa_genou",
    nom: "Règle d'Ottawa (genou)",
    regions: ["genou"],
    cible: "Exclure une fracture du genou (indication de radiographie)",
    technique:
      "Radiographie si l'un des critères : âge ≥ 55 ans, douleur isolée de la patella, douleur de la tête fibulaire, flexion impossible à 90°, incapacité de faire 4 pas (immédiatement et aux urgences).",
    precision:
      "Sensibilité groupée ≈ 99 % (IC 93–100 %) pour les fractures cliniquement significatives ; spécificité ≈ 49 % (méta-analyse, 6 études, > 4 000 patients).",
    interpretation: "Règle négative → fracture très improbable (rule-out) ; évite des radiographies inutiles.",
    sources: [{ label: "Bachmann LM et al. Ann Intern Med 2004 (méta-analyse) · DOI 10.7326/0003-4819-140-2-200401200-00013 · PMID 14734335" }],
  },
  {
    id: "thessaly",
    nom: "Test de Thessaly (20° de flexion)",
    regions: ["genou"],
    cible: "Lésion méniscale",
    technique: "Appui monopodal, genou fléchi à 20°, rotations internes/externes du tronc ; reproduction d'une gêne/blocage sur l'interligne.",
    precision: "Exactitude diagnostique ≈ 94 % (ménisque médial) et ≈ 96 % (ménisque latéral) dans l'étude princeps.",
    interpretation: "Test de débrouillage de première ligne pour les lésions méniscales (valeurs à confirmer, une étude princeps).",
    sources: [{ label: "Karachalios T et al. J Bone Joint Surg Am 2005 · DOI 10.2106/JBJS.D.02338 · PMID 15866956" }],
  },
  {
    id: "lachman",
    nom: "Test de Lachman",
    regions: ["genou"],
    cible: "Rupture du ligament croisé antérieur (LCA)",
    technique: "Genou à ≈ 20-30° de flexion, tiroir antérieur du tibia par rapport au fémur ; évaluer l'arrêt dur/mou et le déplacement.",
    precision: "Test le plus valide pour le LCA : Se ≈ 85 % (IC 83-87), Sp ≈ 94 % (IC 92-95) — méta-analyse.",
    interpretation: "Bon test pour CONFIRMER et pour évaluer (Se et Sp élevées).",
    sources: [{ label: "Benjaminse A et al. J Orthop Sports Phys Ther 2006 (méta-analyse) · DOI 10.2519/jospt.2006.2011 · PMID 16715828" }],
  },
  {
    id: "pivot_shift",
    nom: "Test du ressaut rotatoire (pivot shift)",
    regions: ["genou"],
    cible: "Rupture du LCA (instabilité rotatoire)",
    technique: "En extension, valgus + rotation interne + flexion progressive ; ressaut de réduction du plateau tibial.",
    precision: "Se ≈ 24 % (IC 21-27), Sp ≈ 98 % (IC 96-99) — méta-analyse. Très spécifique, peu sensible (souvent gêné par la défense en phase aiguë).",
    interpretation: "Positif = fort argument rule-in ; un test négatif n'élimine pas.",
    sources: [{ label: "Benjaminse A et al. J Orthop Sports Phys Ther 2006 · DOI 10.2519/jospt.2006.2011 · PMID 16715828" }],
  },
  {
    id: "tiroir_anterieur_genou",
    nom: "Tiroir antérieur du genou",
    regions: ["genou"],
    cible: "Rupture du LCA (surtout chronique)",
    technique: "Genou à 90° de flexion, traction antérieure du tibia.",
    precision: "En conditions chroniques : Se ≈ 92 % (IC 88-95), Sp ≈ 91 % (IC 87-94). Moins fiable en phase aiguë.",
    interpretation: "Utile surtout à distance du traumatisme ; préférer le Lachman en aigu.",
    sources: [{ label: "Benjaminse A et al. J Orthop Sports Phys Ther 2006 · DOI 10.2519/jospt.2006.2011 · PMID 16715828" }],
  },
  {
    id: "lever_sign",
    nom: "Signe du levier (lever sign / test de Lelli)",
    regions: ["genou"],
    cible: "Rupture du LCA (y compris partielle et aiguë)",
    technique: "Patient en décubitus, poing de l'examinateur sous le mollet ; pression vers le bas sur la cuisse ; le talon se soulève si le LCA est intact.",
    precision: "Dans l'étude princeps : Se 100 % pour les ruptures partielles ET aiguës, là où Lachman (0,42), tiroir (0,29) et pivot shift (0,11) étaient peu sensibles. ⚠️ Une seule étude — valeurs à confirmer.",
    interpretation: "Prometteur pour les ruptures partielles/aiguës difficiles à détecter ; à confirmer par d'autres études.",
    sources: [{ label: "Lelli A et al. Knee Surg Sports Traumatol Arthrosc 2016 · DOI 10.1007/s00167-014-3490-7 · PMID 25536951" }],
  },
  {
    id: "mcmurray",
    nom: "Test de McMurray",
    regions: ["genou"],
    cible: "Lésion méniscale",
    technique: "Flexion-extension du genou avec rotation, recherche d'un clic douloureux sur l'interligne.",
    precision: "Se ≈ 70 %, Sp ≈ 71 % (méta-analyse). Aucun test isolé ne diagnostique une lésion méniscale à lui seul.",
    interpretation: "À combiner à l'interligne douloureux et à l'histoire clinique.",
    sources: [{ label: "Hegedus EJ et al. J Orthop Sports Phys Ther 2007 (méta-analyse) · DOI 10.2519/jospt.2007.2560 · PMID 17939613" }],
  },
  {
    id: "neer",
    nom: "Test de Neer (conflit sous-acromial)",
    regions: ["epaule"],
    cible: "Conflit sous-acromial",
    technique: "Élévation passive du bras en rotation interne ; reproduction de la douleur.",
    precision: "Se ≈ 72 %, Sp ≈ 60 % (méta-analyse). Peu discriminant isolément.",
    interpretation: "Aucun test d'épaule isolé n'est pathognomonique : combiner les tests et l'examen complet.",
    sources: [{ label: "Hegedus EJ et al. Br J Sports Med 2012 (méta-analyse) · DOI 10.1136/bjsports-2012-091066 · PMID 22773322" }],
  },
  {
    id: "hawkins_kennedy",
    nom: "Test de Hawkins-Kennedy (conflit sous-acromial)",
    regions: ["epaule"],
    cible: "Conflit sous-acromial",
    technique: "Bras à 90° d'antépulsion, rotation interne forcée ; reproduction de la douleur.",
    precision: "Se ≈ 79 %, Sp ≈ 59 % (méta-analyse). Sensible mais peu spécifique.",
    interpretation: "Plutôt utile pour orienter (rule-out relatif) ; à combiner.",
    sources: [{ label: "Hegedus EJ et al. Br J Sports Med 2012 · DOI 10.1136/bjsports-2012-091066 · PMID 22773322" }],
  },
  {
    id: "arc_douloureux",
    nom: "Arc douloureux (painful arc)",
    regions: ["epaule"],
    cible: "Conflit sous-acromial / atteinte de coiffe",
    technique: "Abduction active ; douleur entre ≈ 60° et 120°.",
    precision: "Se ≈ 53 %, Sp ≈ 76 % (méta-analyse).",
    interpretation: "Modérément spécifique ; contribue au faisceau d'arguments.",
    sources: [{ label: "Hegedus EJ et al. Br J Sports Med 2012 · DOI 10.1136/bjsports-2012-091066 · PMID 22773322" }],
  },
  {
    id: "yergason",
    nom: "Test de Yergason",
    regions: ["epaule"],
    cible: "Lésion labrale (SLAP) / longue portion du biceps",
    technique: "Supination résistée coude fléchi à 90° ; douleur bicipitale.",
    precision: "Pour les lésions SLAP : spécificité élevée ≈ 95 % (méta-analyse), sensibilité faible → bon pour CONFIRMER.",
    interpretation: "Positif = argument rule-in ; peu utile pour éliminer.",
    sources: [{ label: "Hegedus EJ et al. Br J Sports Med 2012 · DOI 10.1136/bjsports-2012-091066 · PMID 22773322" }],
  },
];

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
  return [...TESTS_MANUELS, ...out];
}

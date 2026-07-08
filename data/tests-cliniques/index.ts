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
  {
    id: "lift_off_gerber",
    nom: "Lift-off test de Gerber (subscapulaire)",
    regions: ["epaule"],
    cible: "Rupture du tendon subscapulaire",
    technique: "Main au dos (dos de la main sur le rachis lombaire) ; le patient décolle activement la main du dos. Impossibilité = positif.",
    precision: "Décrit par Gerber & Krushell (série princeps de 16 ruptures isolées) : le test « diagnostiquait ou excluait de façon fiable » une rupture cliniquement significative. Pas de Se/Sp chiffrées dans l'étude princeps ; les ruptures partielles peuvent lui échapper (Hertel 1996).",
    interpretation: "Positif = fort argument pour une atteinte du subscapulaire ; compléter par l'internal rotation lag sign (plus sensible).",
    sources: [
      { label: "Gerber C, Krushell RJ. J Bone Joint Surg Br 1991 · DOI 10.1302/0301-620X.73B3.1670434 · PMID 1670434" },
      { label: "Hertel R et al. J Shoulder Elbow Surg 1996 · DOI 10.1016/s1058-2746(96)80058-9 · PMID 8872929" },
    ],
  },
  {
    id: "lag_signs_coiffe",
    nom: "Lag signs de la coiffe (ERLS, drop sign, IRLS)",
    regions: ["epaule"],
    cible: "Ruptures de la coiffe des rotateurs (supra/infra-épineux, subscapulaire)",
    technique: "ERLS : maintien impossible de la rotation externe placée passivement (coude au corps). Drop sign : idem à 90° d'abduction (infra-épineux). IRLS : maintien impossible de la main décollée du dos (subscapulaire).",
    precision: "Étude prospective (100 épaules) : l'ERLS est moins sensible mais PLUS spécifique que le Jobe ; le drop sign est le moins sensible mais aussi spécifique que l'ERLS ; l'IRLS est aussi spécifique mais PLUS sensible que le lift-off (détecte des ruptures partielles du subscapulaire). L'amplitude du lag corrèle à la taille de la rupture.",
    interpretation: "Lag présent = fort argument de rupture transfixiante ; l'importance du lag renseigne sur l'étendue.",
    sources: [{ label: "Hertel R et al. J Shoulder Elbow Surg 1996 · DOI 10.1016/s1058-2746(96)80058-9 · PMID 8872929" }],
  },
  {
    id: "full_can_empty_can",
    nom: "Full can / Empty can (Jobe) — supra-épineux",
    regions: ["epaule"],
    cible: "Rupture du tendon supra-épineux",
    technique: "Élévation résistée dans le plan de la scapula, pouce vers le haut (full can) ou vers le bas (empty can) ; coter douleur ET faiblesse.",
    precision: "Étude princeps (143 épaules, IRM comme référence) : exactitude maximale quand la FAIBLESSE est le critère — full can ≈ 75 %, empty can ≈ 70 % (différence non significative). Le full can provoque moins de douleur.",
    interpretation: "Interpréter la faiblesse (plutôt que la seule douleur) comme indicateur de rupture ; le full can est mieux toléré.",
    sources: [{ label: "Itoi E et al. Am J Sports Med 1999 · DOI 10.1177/03635465990270011901 · PMID 9934421" }],
  },
  {
    id: "tos_provocation",
    nom: "Tests provocatifs du défilé thoraco-brachial (Adson, Wright, hyperabduction)",
    regions: ["rachis_cervical", "epaule"],
    cible: "Syndrome du défilé thoraco-brachial (TOS)",
    technique: "Manœuvres positionnelles (Adson : rotation/extension de tête en inspiration ; Wright/hyperabduction : abduction-rotation externe) avec surveillance du pouls et reproduction des symptômes.",
    precision: "Série prospective (48 patients) : Se moyenne 72 %, Sp 53 % pour les tests pris isolément ; VPP jusqu'à 85 % (Adson) et 92 % (hyperabduction). COMBINER plusieurs tests améliore la spécificité.",
    interpretation: "Aucun test isolé ne suffit ; un faisceau de tests positifs oriente, l'imagerie/électrophysiologie complète.",
    sources: [{ label: "Gillard J et al. Joint Bone Spine 2001 · DOI 10.1016/s1297-319x(01)00298-6 · PMID 11707008" }],
  },
  {
    id: "cluster_si_laslett",
    nom: "Cluster de tests de provocation sacro-iliaque (Laslett)",
    regions: ["tronc_bassin", "rachis_lombaire"],
    cible: "Douleur d'origine sacro-iliaque",
    technique: "Batterie de tests de provocation : distraction, compression, thigh thrust, Gaenslen, sacral thrust. Interpréter le nombre de tests reproduisant la douleur familière.",
    precision: "≥ 3 tests positifs sur 6 : Se ≈ 94 %, Sp ≈ 78 % (bloc anesthésique intra-articulaire comme référence). Si AUCUN des 6 tests ne reproduit la douleur → la SI peut être écartée (rule-out).",
    interpretation: "Un test isolé n'a pas de valeur ; c'est le CLUSTER qui oriente. Aucun test positif = SI improbable.",
    sources: [{ label: "Laslett M et al. Man Ther 2005 · DOI 10.1016/j.math.2005.01.003 · PMID 16038856" }],
  },
  {
    id: "east_roos",
    nom: "EAST / test de Roos (défilé thoraco-brachial)",
    regions: ["rachis_cervical", "epaule"],
    cible: "Syndrome du défilé thoraco-brachial (neurogène)",
    technique: "Bras en abduction-rotation externe 90° (« stick-up »), ouverture-fermeture lente des mains pendant 3 minutes ; reproduction des symptômes (lourdeur, paresthésies, lâchage).",
    precision: "Test provocatif d'endurance décrit par Roos ; sensible mais peu spécifique (des sujets sains peuvent le reproduire). À intégrer à un faisceau d'arguments, jamais isolément.",
    interpretation: "Reproduction des symptômes habituels = argument ; ne confirme pas à lui seul.",
    sources: [{ label: "Roos DB. Am J Surg 1976 · PMID 998867" }],
  },
  {
    id: "scapular_assistance",
    nom: "Scapular Assistance Test & Scapular Retraction Test",
    regions: ["epaule"],
    cible: "Contribution de la dyskinésie scapulaire aux symptômes d'épaule",
    technique: "SAT : l'examinateur assiste la rotation/bascule de la scapula pendant l'élévation. SRT : stabilisation de la scapula rétractée pendant un test de force. Amélioration des symptômes = test positif.",
    precision: "Tests d'orientation (modificateurs de symptômes) recommandés par le consensus « Scapular Summit ». Servent à guider le traitement plutôt qu'à poser un diagnostic ; propriétés diagnostiques limitées // TODO à sourcer précisément.",
    interpretation: "Une réduction de la douleur oriente la rééducation vers le contrôle scapulaire.",
    sources: [{ label: "Kibler WB et al. Br J Sports Med 2013 (consensus dyskinésie scapulaire) · PMID 23580420" }],
  },
  {
    id: "beighton",
    nom: "Score de Beighton (hypermobilité articulaire généralisée)",
    regions: ["global"],
    cible: "Hypermobilité articulaire généralisée",
    technique: "9 manœuvres : dorsiflexion des 5es doigts > 90° (2), apposition des pouces à l'avant-bras (2), hyperextension des coudes > 10° (2), des genoux > 10° (2), paumes au sol genoux tendus (1).",
    precision: "Score 0–9 ; seuil usuel d'hypermobilité ≥ 5/9 chez l'adulte (variable selon l'âge et le sexe ; seuils plus élevés chez l'enfant). Outil de dépistage, non diagnostique d'un trouble du tissu conjonctif.",
    interpretation: "Un score élevé oriente vers une hypermobilité ; à replacer dans le contexte clinique (critères d'Ehlers-Danlos hypermobile si besoin).",
    sources: [{ label: "Beighton P et al. Ann Rheum Dis 1973 · DOI 10.1136/ard.32.5.413 · PMID 4751776" }],
  },
  {
    id: "aslr",
    nom: "Active Straight Leg Raise (ASLR) — ceinture pelvienne",
    regions: ["tronc_bassin", "rachis_lombaire"],
    cible: "Douleur pelvienne postérieure liée à la grossesse (pelvic girdle pain)",
    technique: "En décubitus, élévation active de la jambe tendue (20 cm) ; coter la difficulté 0–5 de chaque côté (score 0–10). Amélioration avec compression pelvienne = argument supplémentaire.",
    precision: "Se 0,87 et Sp 0,94 (seuil ≥ 1/10) chez 200 patientes avec douleur pelvienne post-grossesse vs 50 témoins ; test-retest r = 0,87.",
    interpretation: "Test simple, fiable et discriminant pour la douleur de ceinture pelvienne ; recommandé par les guidelines européennes.",
    sources: [
      { label: "Mens JM et al. Spine 2001 · DOI 10.1097/00007632-200105150-00015 · PMID 11413432" },
      { label: "Vleeming A et al. Eur Spine J 2008 (guidelines pelvic girdle pain) · DOI 10.1007/s00586-008-0602-4 · PMID 18259783" },
    ],
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

/* =============================================================================
   MODULE CLINIQUE — RÉGION GENOU  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids et seuils = jugements
   cliniques PROVISOIRES. Se/Sp = INDICATIVES, issues d'articles réels (PubMed),
   variables selon le standard de référence et le recrutement. Module NON ENCORE
   relu par un confrère et NON testé sur cas connus (étapes 7-8 du brief) : à faire
   avant tout usage.

   PÉRIMÈTRE
     DANS  : douleurs du genou du sportif —
       - Antérieur : douleur fémoro-patellaire (PFP), tendinopathie rotulienne,
         instabilité fémoro-patellaire, Osgood-Schlatter (ado).
       - Pivot central : rupture du LCA, rupture du LCP.
       - Interligne : lésion méniscale.
       - Médial / latéral : entorse du LLI (collatéral médial), du LLE / coin
         postéro-externe, syndrome de la bandelette ilio-tibiale (latéral).
       - Chronique dégénératif : gonarthrose.
     HORS  : pathologies non traumatiques médicales (arthrites inflammatoires
       systémiques), tumeurs (couvertes par les drapeaux rouges seulement),
       pathologies de la hanche projetées (signalées en drapeau chez l'ado),
       atteintes vasculaires/nerveuses hors dépistage (drapeau TVP).

   CADRES DE RÉFÉRENCE / SOURCES (PubMed, avec DOI) :
     - LCA : Benjaminse 2006 (méta-analyse, JOSPT) DOI 10.2519/jospt.2006.2011 ;
       van Eck 2012 (méta-analyse) DOI 10.1007/s00167-012-2250-9 ;
       Sokal 2022 (revue systématique + méta-analyse bivariée, KSSTA)
       DOI 10.1007/s00167-022-06898-4.
     - Ménisque : Smith 2015 (revue systématique + méta-analyse, Evid Based Med)
       DOI 10.1136/ebmed-2014-110160.
     - Règle d'Ottawa du genou (dépistage fracture) : Kazemi 2023 (revue
       systématique + méta-analyse) DOI 10.22037/aaem.v11i1.1934.
     - Douleur fémoro-patellaire : Crossley 2016 (consensus international, BJSM)
       DOI 10.1136/bjsports-2016-096384.
     - Tendinopathie rotulienne : single-leg decline squat utilisé comme test de
       provocation de référence — de Vries 2015 (RCT) DOI 10.1111/sms.12556.
     - Tests ligamentaires collatéraux / LCP : PAS de consensus établi sur leur
       exactitude — Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3.
       => Se/Sp marquées "à sourcer/valider".

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : à relire (confrère) +
   test rétrospectif sur cas connus avant usage.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const genou: Region = {
  nom: "Genou",
  BANDES: { forte: 4, moderee: 2 },

  // ===========================================================================
  // 1) QUESTIONS D'ANAMNÈSE
  // ===========================================================================
  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "anterieur_rotule", label: "Antérieure / rotulienne" },
        { valeur: "interligne_medial", label: "Interligne interne (médial)" },
        { valeur: "interligne_lateral", label: "Interligne externe (latéral)" },
        { valeur: "lateral_condyle", label: "Latérale, sur le condyle externe" },
        { valeur: "posterieur", label: "Postérieure (creux poplité)" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_traumatique", label: "Aiguë, traumatique" },
        { valeur: "progressif", label: "Progressive / sans traumatisme" },
      ],
    },
    {
      id: "mecanisme_trauma",
      texte: "Mécanisme du traumatisme ?",
      type: "choix_multiple",
      condition: { installation: "aigu_traumatique" },
      options: [
        { valeur: "pivot_sans_contact", label: "Pivot / réception sans contact (valgus-rotation)" },
        { valeur: "choc_valgus", label: "Choc direct en valgus (sur la face externe)" },
        { valeur: "choc_varus", label: "Choc direct en varus (sur la face interne)" },
        { valeur: "choc_anterieur_tibia", label: "Choc antérieur sur tibia fléchi (tableau de bord)" },
        { valeur: "hyperextension", label: "Hyperextension" },
        { valeur: "torsion_pied_fixe", label: "Torsion sur pied fixé" },
      ],
    },
    {
      id: "gestes_aggravants",
      texte: "Gestes / situations qui reproduisent la douleur ?",
      type: "choix_multiple",
      options: [
        { valeur: "accroupissement", label: "Accroupissement / squat" },
        { valeur: "escaliers_descente", label: "Descente d'escaliers / de pente" },
        { valeur: "assise_prolongee", label: "Position assise prolongée, genou fléchi" },
        { valeur: "saut_reception", label: "Sauts répétés / réception" },
        { valeur: "course", label: "Course (surtout en descente)" },
        { valeur: "flexion_charge", label: "Flexion profonde en charge" },
      ],
    },
    {
      id: "pop_audible",
      texte: "Craquement audible (« pop ») au moment de la blessure ?",
      type: "oui_non",
      condition: { installation: "aigu_traumatique" },
      aide: "Évoque une rupture du LCA.",
    },
    {
      id: "epanchement_delai",
      texte: "Délai d'apparition du gonflement ?",
      type: "choix_unique",
      options: [
        { valeur: "immediat", label: "Immédiat (< 2-4 h → hémarthrose)" },
        { valeur: "retarde", label: "Retardé (le lendemain)" },
        { valeur: "aucun", label: "Pas de gonflement" },
      ],
      aide: "Hémarthrose immédiate : LCA, fracture, luxation rotule. Retardé : ménisque.",
    },
    {
      id: "blocage_vrai",
      texte: "Blocage vrai (genou bloqué, extension impossible) ?",
      type: "oui_non",
      aide: "Évoque une anse de seau méniscale (ou un corps étranger).",
    },
    {
      id: "derobement",
      texte: "Sensation d'instabilité / dérobement (giving way) ?",
      type: "oui_non",
      aide: "Insuffisance du LCA ou instabilité fémoro-patellaire.",
    },
    {
      id: "douleur_anterieure_flexion_charge",
      texte: "Douleur antérieure à l'accroupissement, en descente d'escaliers, ou à l'assise prolongée ?",
      type: "oui_non",
      aide: "Caractéristique de la douleur fémoro-patellaire (PFP).",
    },
    {
      id: "douleur_pole_inferieur_rotule",
      texte: "Douleur localisée au pôle inférieur de la rotule, liée à la charge (sauts) ?",
      type: "oui_non",
      aide: "Évoque une tendinopathie rotulienne (jumper's knee).",
    },
    {
      id: "apprehension_rotule",
      texte: "Appréhension à la poussée latérale de la rotule (genou en légère flexion) ?",
      type: "oui_non",
      aide: "Évoque une instabilité fémoro-patellaire.",
    },
    {
      id: "atcd_luxation_rotule",
      texte: "Antécédent de luxation / subluxation de rotule ?",
      type: "oui_non",
    },
    {
      id: "raideur_demarrage",
      texte: "Raideur de démarrage / dérouillage, douleur mécanique chronique ?",
      type: "oui_non",
      aide: "Évoque une gonarthrose.",
    },
    {
      id: "age",
      texte: "Tranche d'âge ?",
      type: "choix_unique",
      options: [
        { valeur: "adolescent", label: "Adolescent (squelette en croissance)" },
        { valeur: "adulte", label: "Adulte" },
        { valeur: "plus_50", label: "Plus de 50 ans" },
      ],
    },
    {
      id: "douleur_tta_ado",
      texte: "Douleur + tuméfaction de la tubérosité tibiale antérieure (sportif en croissance) ?",
      type: "oui_non",
      condition: { age: "adolescent" },
      aide: "Évoque une maladie d'Osgood-Schlatter (apophysite de croissance).",
    },
    {
      id: "impossible_appui_4pas",
      texte: "Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) ?",
      type: "oui_non",
      aide: "DRAPEAU (critère d'Ottawa) : impose une radiographie.",
    },
    {
      id: "flexion_90_impossible",
      texte: "Impossibilité de fléchir le genou à 90° ?",
      type: "oui_non",
      aide: "Critère d'Ottawa pour la radiographie.",
    },
    {
      id: "extension_active_impossible",
      texte: "Déficit d'extension active (incapacité à tenir la jambe tendue / à la relever) ?",
      type: "oui_non",
      aide: "DRAPEAU : rupture de l'appareil extenseur (tendon rotulien/quadricipital) ou fracture de rotule.",
    },
    {
      id: "genou_chaud_rouge_fievre",
      texte: "Genou chaud, rouge, très douloureux avec fièvre ?",
      type: "oui_non",
      aide: "DRAPEAU : arthrite septique.",
    },
    {
      id: "mollet_douloureux_oedeme",
      texte: "Mollet douloureux, œdématié, chaud ?",
      type: "oui_non",
      aide: "DRAPEAU : suspicion de thrombose veineuse profonde.",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne ou de repos (non mécanique) ?",
      type: "oui_non",
    },
    {
      id: "signes_systemiques",
      texte: "Fièvre, altération de l'état général, perte de poids inexpliquée ?",
      type: "oui_non",
    },
  ],

  // ===========================================================================
  // 2) HYPOTHÈSES
  // ===========================================================================
  HYPOTHESES: [
    {
      id: "pfp",
      nom: "Douleur fémoro-patellaire (PFP)",
      quadrant: "Antérieur",
      indices: [
        { si: { localisation: "anterieur_rotule" }, poids: 3, source: "Crossley 2016 (consensus, BJSM) DOI 10.1136/bjsports-2016-096384" },
        { si: { douleur_anterieure_flexion_charge: true }, poids: 3, source: "Crossley 2016 (douleur aggravée par la mise en charge du genou fléchi)" },
        { si: { gestes_aggravants: "escaliers_descente" }, poids: 1 },
        { si: { gestes_aggravants: "accroupissement" }, poids: 1 },
        { si: { gestes_aggravants: "assise_prolongee" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "patellar_tendinopathy",
      nom: "Tendinopathie rotulienne (jumper's knee)",
      quadrant: "Antérieur",
      indices: [
        { si: { douleur_pole_inferieur_rotule: true }, poids: 3 },
        { si: { gestes_aggravants: "saut_reception" }, poids: 2 },
        { si: { localisation: "anterieur_rotule" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "acl",
      nom: "Rupture du ligament croisé antérieur (LCA)",
      quadrant: "Pivot central",
      indices: [
        { si: { mecanisme_trauma: "pivot_sans_contact" }, poids: 3 },
        { si: { pop_audible: true }, poids: 2 },
        { si: { epanchement_delai: "immediat" }, poids: 2 },
        { si: { derobement: true }, poids: 2 },
      ],
    },
    {
      id: "meniscus",
      nom: "Lésion méniscale",
      quadrant: "Interligne",
      indices: [
        { si: { blocage_vrai: true }, poids: 3 },
        { si: { localisation: ["interligne_medial", "interligne_lateral"] }, poids: 2 },
        { si: { epanchement_delai: "retarde" }, poids: 2 },
        { si: { mecanisme_trauma: "torsion_pied_fixe" }, poids: 2 },
        { si: { gestes_aggravants: "flexion_charge" }, poids: 1 },
      ],
    },
    {
      id: "mcl",
      nom: "Entorse du ligament collatéral médial (LLI)",
      quadrant: "Médial",
      indices: [
        { si: { mecanisme_trauma: "choc_valgus" }, poids: 3 },
        { si: { localisation: "interligne_medial" }, poids: 1 },
        { si: { installation: "aigu_traumatique" }, poids: 1 },
      ],
    },
    {
      id: "lcl_plc",
      nom: "Entorse du ligament collatéral latéral / coin postéro-externe",
      quadrant: "Latéral",
      indices: [
        { si: { mecanisme_trauma: "choc_varus" }, poids: 3 },
        { si: { mecanisme_trauma: "hyperextension" }, poids: 1 },
        { si: { localisation: "interligne_lateral" }, poids: 1 },
      ],
    },
    {
      id: "pcl",
      nom: "Rupture du ligament croisé postérieur (LCP)",
      quadrant: "Pivot central",
      indices: [
        { si: { mecanisme_trauma: "choc_anterieur_tibia" }, poids: 3 },
        { si: { mecanisme_trauma: "hyperextension" }, poids: 1 },
        { si: { localisation: "posterieur" }, poids: 1 },
      ],
    },
    {
      id: "itbs",
      nom: "Syndrome de la bandelette ilio-tibiale (essuie-glace)",
      quadrant: "Latéral",
      indices: [
        { si: { localisation: "lateral_condyle" }, poids: 3 },
        { si: { gestes_aggravants: "course" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "patellar_instability",
      nom: "Instabilité fémoro-patellaire",
      quadrant: "Antérieur",
      indices: [
        { si: { apprehension_rotule: true }, poids: 3 },
        { si: { atcd_luxation_rotule: true }, poids: 3 },
        { si: { derobement: true }, poids: 1 },
      ],
    },
    {
      id: "knee_oa",
      nom: "Gonarthrose (arthrose fémoro-tibiale / fémoro-patellaire)",
      quadrant: "Intra-articulaire",
      indices: [
        { si: { raideur_demarrage: true }, poids: 3 },
        { si: { age: "plus_50" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "osgood_schlatter",
      nom: "Maladie d'Osgood-Schlatter (apophysite tibiale antérieure)",
      quadrant: "Antérieur",
      indices: [
        { si: { douleur_tta_ado: true }, poids: 3 },
        { si: { age: "adolescent" }, poids: 1 },
        { si: { gestes_aggravants: "saut_reception" }, poids: 1 },
      ],
    },
  ],

  // ===========================================================================
  // 3) TESTS PROPOSÉS
  // ===========================================================================
  TESTS: [
    {
      id: "lachman",
      nom: "Test de Lachman",
      technique: "Tiroir antérieur à ~20-30° de flexion ; apprécier l'arrêt (dur/mou) et le déplacement.",
      discrimine: ["acl"],
      precision: "Se ≈85% / Sp ≈94% (Benjaminse 2006). Méta-analyse bivariée plus récente : Se ≈81% / Sp ≈85%, et Se plus basse pour les ruptures complètes/post-aiguës (Sokal 2022). Reste le test de référence en pratique.",
      source: "Benjaminse 2006 (JOSPT) DOI 10.2519/jospt.2006.2011 ; Sokal 2022 (KSSTA) DOI 10.1007/s00167-022-06898-4",
    },
    {
      id: "pivot_shift",
      nom: "Test du ressaut rotatoire (pivot shift)",
      technique: "Reproduction de la subluxation-réduction du plateau tibial externe en valgus-rotation interne.",
      discrimine: ["acl"],
      precision: "Très spécifique mais peu sensible : Se ≈24% / Sp ≈98% (Benjaminse 2006) ; Se ≈55% / Sp ≈94% (Sokal 2022). => bon pour CONFIRMER (rule-in). Sensibilité nettement meilleure sous anesthésie.",
      source: "Benjaminse 2006 DOI 10.2519/jospt.2006.2011 ; Sokal 2022 DOI 10.1007/s00167-022-06898-4",
    },
    {
      id: "anterior_drawer",
      nom: "Tiroir antérieur (90° de flexion)",
      discrimine: ["acl"],
      precision: "Bonne valeur en conditions chroniques (Se ≈92% / Sp ≈91%) mais médiocre en aigu (Se ≈38% en complète aiguë) (Benjaminse 2006 ; van Eck 2012).",
      source: "Benjaminse 2006 DOI 10.2519/jospt.2006.2011 ; van Eck 2012 (KSSTA) DOI 10.1007/s00167-012-2250-9",
    },
    {
      id: "lever_sign",
      nom: "Lever sign (test de Lelli)",
      discrimine: ["acl"],
      precision: "Se ≈83% / Sp ≈91% (méta-analyse bivariée, Sokal 2022) ; identifié comme le meilleur test pour ÉLIMINER (rule-out). Données encore limitées.",
      source: "Sokal 2022 (KSSTA) DOI 10.1007/s00167-022-06898-4",
    },
    {
      id: "mcmurray",
      nom: "Test de McMurray",
      discrimine: ["meniscus"],
      precision: "Se ≈61% / Sp ≈84% (Smith 2015). Plutôt utile pour confirmer que pour éliminer. ⚠️ Qualité des études faible, forte hétérogénéité.",
      source: "Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160",
    },
    {
      id: "thessaly",
      nom: "Test de Thessaly (à 20° de flexion)",
      discrimine: ["meniscus"],
      precision: "Se ≈75% / Sp ≈87% (Smith 2015). ⚠️ Qualité des études faible ; performances initialement surestimées par les études d'origine.",
      source: "Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160",
    },
    {
      id: "joint_line_tenderness",
      nom: "Douleur à la palpation de l'interligne",
      discrimine: ["meniscus"],
      precision: "Se ≈83% / Sp ≈83% (Smith 2015) : test le plus sensible des trois, utile en première intention. ⚠️ Peu spécifique d'une lésion méniscale isolée.",
      source: "Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160",
    },
    {
      id: "valgus_stress",
      nom: "Test de contrainte en valgus (0° et 30°)",
      technique: "Laxité / douleur médiale en valgus forcé ; comparer au côté sain.",
      discrimine: ["mcl"],
      precision: "Reproduction de la douleur/laxité médiale. ⚠️ Pas de consensus établi sur la Se/Sp des tests cliniques des ligaments collatéraux (Mabrouk 2023). Se/Sp // TODO à sourcer/valider.",
      source: "Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3",
    },
    {
      id: "varus_stress",
      nom: "Test de contrainte en varus (0° et 30°) + bilan coin postéro-externe",
      discrimine: ["lcl_plc"],
      precision: "⚠️ Pas de consensus établi sur la Se/Sp des tests cliniques du compartiment latéral (Mabrouk 2023). Évaluer aussi dial test / recurvatum. Se/Sp // TODO à sourcer/valider.",
      source: "Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3",
    },
    {
      id: "posterior_drawer_sag",
      nom: "Tiroir postérieur + signe de l'affaissement (posterior sag)",
      discrimine: ["pcl"],
      precision: "Affaissement postérieur du tibia à 90° + tiroir postérieur. ⚠️ Pas de consensus établi sur la Se/Sp (Mabrouk 2023). Se/Sp // TODO à sourcer/valider.",
      source: "Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3",
    },
    {
      id: "noble_renne_itb",
      nom: "Test de Noble (compression) / test de Renne",
      discrimine: ["itbs"],
      precision: "Reproduction de la douleur latérale vers 30° de flexion au condyle externe. // TODO à sourcer/valider (Se/Sp non établies dans la littérature consultée).",
    },
    {
      id: "single_leg_decline_squat",
      nom: "Squat unipodal en décliné (single-leg decline squat)",
      discrimine: ["patellar_tendinopathy"],
      precision: "Test de provocation de la douleur du tendon rotulien, utilisé comme standard de provocation dans les études (de Vries 2015). // TODO à sourcer/valider (Se/Sp diagnostiques non établies).",
      source: "de Vries 2015 (Scand J Med Sci Sports) DOI 10.1111/sms.12556",
    },
    {
      id: "patellar_apprehension",
      nom: "Test d'appréhension rotulienne (et moving patellar apprehension test)",
      discrimine: ["patellar_instability"],
      precision: "Appréhension à la translation latérale de la rotule. // TODO à sourcer/valider (Se/Sp non établies dans la littérature consultée).",
    },
  ],

  // Test de dépistage non rattaché à une entité : règle d'Ottawa du genou.
  TEST_SCREEN: {
    id: "ottawa_knee_rule",
    nom: "Règle d'Ottawa du genou (DÉPISTAGE FRACTURE)",
    siRep: "impossible_appui_4pas",
    technique: "Radiographie si ≥1 critère : âge ≥55 ans, douleur isolée de la rotule, douleur de la tête de la fibula, flexion < 90°, incapacité de faire 4 pas en appui.",
    precision: "Se ≈98% / Sp ≈43% (Kazemi 2023) : excellent pour ÉLIMINER une fracture (rule-out) et réduire les radiographies inutiles ; peu spécifique.",
    source: "Kazemi 2023 (revue systématique + méta-analyse) DOI 10.22037/aaem.v11i1.1934",
  },

  // ===========================================================================
  // 4) DRAPEAUX ROUGES
  // ===========================================================================
  DRAPEAUX_ROUGES: [
    {
      id: "fracture_genou",
      libelle: "Suspicion de fracture (critère d'Ottawa positif)",
      si: { impossible_appui_4pas: true },
      conduite: "Radiographie selon la règle d'Ottawa du genou. NE PAS charger tant que la fracture n'est pas éliminée.",
      source: "Kazemi 2023 DOI 10.22037/aaem.v11i1.1934",
    },
    {
      id: "rupture_appareil_extenseur",
      libelle: "Suspicion de rupture de l'appareil extenseur / fracture de rotule",
      si: { extension_active_impossible: true },
      conduite: "Déficit d'extension active = avis chirurgical + imagerie (rupture du tendon rotulien ou quadricipital, fracture de rotule).",
    },
    {
      id: "arthrite_septique_genou",
      libelle: "Suspicion d'arthrite septique",
      si: { genou_chaud_rouge_fievre: true },
      conduite: "Urgence : avis médical immédiat, ponction articulaire avant toute antibiothérapie.",
    },
    {
      id: "tvp",
      libelle: "Suspicion de thrombose veineuse profonde",
      si: { mollet_douloureux_oedeme: true },
      conduite: "Évaluation urgente (score de Wells, écho-doppler veineux). Ne pas mobiliser/masser avant d'éliminer une TVP.",
    },
    {
      id: "tumeur_genou",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale (l'ostéosarcome touche fréquemment le genou de l'adolescent/jeune adulte) ou inflammatoire.",
    },
    {
      id: "hanche_projetee_ado",
      libelle: "Chez l'adolescent : penser à la hanche (douleur projetée)",
      si: { age: "adolescent" },
      conduite: "Toute gonalgie de l'enfant/adolescent impose d'examiner la hanche (épiphysiolyse fémorale supérieure, Legg-Calvé-Perthes peuvent se projeter au genou).",
    },
  ],
};

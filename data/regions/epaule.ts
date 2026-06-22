/* =============================================================================
   MODULE CLINIQUE — RÉGION ÉPAULE  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed). RAPPEL des revues : AUCUN test isolé de l'épaule
   n'est pathognomonique ; la combinaison interrogatoire + examen prime. Module
   NON relu / NON testé sur cas connus : à faire avant usage.

   PÉRIMÈTRE
     DANS : douleur sous-acromiale (conflit / tendinopathie de coiffe), rupture
       transfixiante de la coiffe, lésion du labrum / SLAP, instabilité antérieure,
       pathologie acromio-claviculaire, capsulite rétractile, atteinte du long
       biceps, omarthrose.
     HORS : douleurs cervicales projetées (drapeau + module cervical à venir),
       causes viscérales/cardiaques (drapeau), polyarthrites systémiques.

   CADRES DE RÉFÉRENCE / SOURCES (PubMed + DOI) :
     - Hegedus 2012 (revue systématique + méta-analyse, BJSM)
       DOI 10.1136/bjsports-2012-091066.
     - Gismervik 2017 (méta-analyse, DOR des tests, BMC Musculoskelet Disord)
       DOI 10.1186/s12891-017-1400-0.
     - Luime 2004 (revue, JAMA — instabilité / labrum) DOI 10.1001/jama.292.16.1989.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const epaule: Region = {
  nom: "Épaule",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "anterolateral_moignon", label: "Antéro-latérale / moignon, face externe du bras" },
        { valeur: "anterieur_biceps", label: "Antérieure (gouttière bicipitale)" },
        { valeur: "sommet_acj", label: "Au sommet de l'épaule (articulation acromio-claviculaire)" },
        { valeur: "profond_diffus", label: "Profonde / diffuse" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_traumatique", label: "Aiguë, traumatique" },
        { valeur: "progressif", label: "Progressive / insidieuse" },
      ],
    },
    {
      id: "mecanisme",
      texte: "Mécanisme du traumatisme ?",
      type: "choix_multiple",
      condition: { installation: "aigu_traumatique" },
      options: [
        { valeur: "chute_bras_tendu", label: "Chute sur le bras tendu / l'épaule" },
        { valeur: "armer_lancer", label: "Armer / lancer (bras en abduction-rotation externe)" },
        { valeur: "luxation_anterieure", label: "Sensation de déboîtement (luxation/subluxation)" },
        { valeur: "choc_direct_moignon", label: "Choc direct sur le moignon de l'épaule" },
        { valeur: "soulevement_traction", label: "Soulèvement / traction brusque" },
      ],
    },
    {
      id: "age",
      texte: "Tranche d'âge ?",
      type: "choix_unique",
      options: [
        { valeur: "jeune", label: "Jeune (< 30 ans)" },
        { valeur: "adulte", label: "Adulte (30-60 ans)" },
        { valeur: "plus_60", label: "Plus de 60 ans" },
      ],
    },
    {
      id: "douleur_overhead_armer",
      texte: "Douleur lors des mouvements au-dessus de la tête / à l'armer ?",
      type: "oui_non",
    },
    {
      id: "douleur_arc_douloureux",
      texte: "Douleur dans un arc moyen d'élévation (≈ 60-120°) ?",
      type: "oui_non",
      aide: "Arc douloureux : oriente vers un conflit sous-acromial.",
    },
    {
      id: "douleur_nocturne_couche_epaule",
      texte: "Douleur la nuit, surtout couché sur l'épaule atteinte ?",
      type: "oui_non",
      aide: "Fréquent dans les atteintes de coiffe.",
    },
    {
      id: "faiblesse_elevation_RE",
      texte: "Faiblesse à l'élévation et/ou à la rotation externe ?",
      type: "oui_non",
      aide: "Évoque une rupture de la coiffe des rotateurs.",
    },
    {
      id: "pseudoparalysie",
      texte: "Incapacité d'élever activement le bras alors que le mouvement passif est possible (pseudoparalysie) ?",
      type: "oui_non",
      aide: "DRAPEAU : rupture massive de coiffe (surtout après traumatisme).",
    },
    {
      id: "apprehension_abduction_RE",
      texte: "Appréhension / douleur bras en abduction-rotation externe (position d'armer) ?",
      type: "oui_non",
      aide: "Évoque une instabilité antérieure.",
    },
    {
      id: "atcd_luxation_epaule",
      texte: "Antécédent de luxation / subluxation de l'épaule ?",
      type: "oui_non",
    },
    {
      id: "sensation_instabilite_lancer",
      texte: "Sensation d'instabilité / « bras mort » au lancer ?",
      type: "oui_non",
    },
    {
      id: "douleur_sommet_adduction",
      texte: "Douleur au sommet de l'épaule à l'adduction horizontale forcée (bras croisé) ?",
      type: "oui_non",
      aide: "Oriente vers l'articulation acromio-claviculaire.",
    },
    {
      id: "raideur_globale_active_passive",
      texte: "Raideur globale avec perte d'amplitude ACTIVE ET PASSIVE (surtout rotation externe) ?",
      type: "oui_non",
      aide: "Évoque une capsulite rétractile (ou une omarthrose).",
    },
    {
      id: "deficit_sensitivomoteur_post_luxation",
      texte: "Déficit de sensibilité (moignon) ou de motricité après un épisode de luxation ?",
      type: "oui_non",
      aide: "DRAPEAU : atteinte du nerf axillaire / du plexus.",
    },
    {
      id: "irradiation_cou_bras",
      texte: "Douleur irradiant du cou vers le bras / aggravée par les mouvements du cou ?",
      type: "oui_non",
      aide: "DRAPEAU : possible origine cervicale (radiculopathie).",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne ou de repos permanente (non mécanique) ?",
      type: "oui_non",
    },
    {
      id: "signes_systemiques",
      texte: "Fièvre, altération de l'état général, perte de poids inexpliquée ?",
      type: "oui_non",
    },
  ],

  HYPOTHESES: [
    {
      id: "subacromial_pain",
      nom: "Douleur sous-acromiale (conflit / tendinopathie de coiffe)",
      quadrant: "Antéro-latéral",
      indices: [
        { si: { douleur_overhead_armer: true }, poids: 2 },
        { si: { douleur_arc_douloureux: true }, poids: 2, source: "Hegedus 2012 (arc douloureux Sp ≈76%) DOI 10.1136/bjsports-2012-091066" },
        { si: { localisation: "anterolateral_moignon" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "rotator_cuff_tear",
      nom: "Rupture transfixiante de la coiffe des rotateurs",
      quadrant: "Antéro-latéral",
      indices: [
        { si: { faiblesse_elevation_RE: true }, poids: 3, source: "Gismervik 2017 (supraspinatus test DOR 9.24) DOI 10.1186/s12891-017-1400-0" },
        { si: { age: "plus_60" }, poids: 2 },
        { si: { pseudoparalysie: true }, poids: 2 },
        { si: { douleur_nocturne_couche_epaule: true }, poids: 1 },
      ],
    },
    {
      id: "slap_labral",
      nom: "Lésion du labrum / SLAP",
      quadrant: "Profond",
      indices: [
        { si: { mecanisme: "armer_lancer" }, poids: 2 },
        { si: { sensation_instabilite_lancer: true }, poids: 2 },
        { si: { localisation: "profond_diffus" }, poids: 1 },
        { si: { douleur_overhead_armer: true }, poids: 1 },
      ],
    },
    {
      id: "anterior_instability",
      nom: "Instabilité antérieure de l'épaule",
      quadrant: "Antérieur",
      indices: [
        { si: { apprehension_abduction_RE: true }, poids: 3 },
        { si: { atcd_luxation_epaule: true }, poids: 3 },
        { si: { mecanisme: "luxation_anterieure" }, poids: 1 },
        { si: { age: "jeune" }, poids: 1 },
      ],
    },
    {
      id: "ac_joint",
      nom: "Pathologie acromio-claviculaire",
      quadrant: "Sommet",
      indices: [
        { si: { localisation: "sommet_acj" }, poids: 3 },
        { si: { douleur_sommet_adduction: true }, poids: 2 },
        { si: { mecanisme: "choc_direct_moignon" }, poids: 1 },
      ],
    },
    {
      id: "adhesive_capsulitis",
      nom: "Capsulite rétractile (épaule gelée)",
      quadrant: "Global",
      indices: [
        { si: { raideur_globale_active_passive: true }, poids: 3 },
        { si: { installation: "progressif" }, poids: 1 },
        { si: { douleur_nocturne_couche_epaule: true }, poids: 1 },
      ],
    },
    {
      id: "biceps_long_head",
      nom: "Atteinte du long biceps (tendinopathie / instabilité)",
      quadrant: "Antérieur",
      indices: [
        { si: { localisation: "anterieur_biceps" }, poids: 3 },
        { si: { douleur_overhead_armer: true }, poids: 1 },
      ],
    },
    {
      id: "glenohumeral_oa",
      nom: "Omarthrose (arthrose gléno-humérale)",
      quadrant: "Profond",
      indices: [
        { si: { age: "plus_60" }, poids: 2 },
        { si: { raideur_globale_active_passive: true }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "hawkins_kennedy",
      nom: "Test de Hawkins-Kennedy",
      discrimine: ["subacromial_pain"],
      precision: "Se ≈79% / Sp ≈59% (Hegedus 2012) ; meilleur DOR pour le conflit (Se ≈58% / Sp ≈67%, Gismervik 2017). Sensible : aide à ÉLIMINER quand négatif.",
      source: "Hegedus 2012 DOI 10.1136/bjsports-2012-091066 ; Gismervik 2017 DOI 10.1186/s12891-017-1400-0",
    },
    {
      id: "neer_test",
      nom: "Test de Neer",
      discrimine: ["subacromial_pain"],
      precision: "Se ≈72% / Sp ≈60% (Hegedus 2012).",
      source: "Hegedus 2012 DOI 10.1136/bjsports-2012-091066",
    },
    {
      id: "painful_arc",
      nom: "Arc douloureux (60-120°)",
      discrimine: ["subacromial_pain"],
      precision: "Se ≈53% / Sp ≈76% (Hegedus 2012) : plutôt pour CONFIRMER (rule-in).",
      source: "Hegedus 2012 DOI 10.1136/bjsports-2012-091066",
    },
    {
      id: "supraspinatus_test",
      nom: "Test du supra-épineux (Jobe / empty can)",
      discrimine: ["rotator_cuff_tear"],
      precision: "Meilleur DOR (9.24) pour une rupture transfixiante (Se ≈0,74 / Sp ≈0,77, Gismervik 2017).",
      source: "Gismervik 2017 DOI 10.1186/s12891-017-1400-0",
    },
    {
      id: "lag_signs_drop_arm",
      nom: "Signes de rappel (lag signs) + drop arm",
      discrimine: ["rotator_cuff_tear"],
      precision: "Un déficit de maintien (RE lag, drop arm) est spécifique d'une rupture. Se/Sp précises // TODO à sourcer/valider. À combiner avec la force et l'âge.",
    },
    {
      id: "relocation_anterior_release",
      nom: "Test de recentrage (relocation) + test de relâchement antérieur",
      discrimine: ["anterior_instability"],
      precision: "Meilleur niveau de preuve pour l'instabilité : relocation LR+ ≈6,5 ; anterior release LR+ ≈8,3 (Luime 2004). Le test d'appréhension seul est moins utile.",
      source: "Luime 2004 (JAMA) DOI 10.1001/jama.292.16.1989",
    },
    {
      id: "compression_rotation_biceps_load",
      nom: "Compression-rotation / biceps load II (labrum-SLAP)",
      discrimine: ["slap_labral"],
      precision: "Aucun test de SLAP n'est fiable isolément. Compression-rotation : meilleur DOR pour SLAP (Se ≈0,43 / Sp ≈0,89, Gismervik 2017) ; biceps load II LR+ ≈26 (Luime 2004, étude unique — prudence).",
      source: "Gismervik 2017 DOI 10.1186/s12891-017-1400-0 ; Luime 2004 DOI 10.1001/jama.292.16.1989",
    },
    {
      id: "yergason_speed",
      nom: "Yergason / Speed (long biceps)",
      discrimine: ["biceps_long_head", "slap_labral"],
      precision: "Yergason : spécificité élevée (≈95%) pour le SLAP dans la méta-analyse (Hegedus 2012). Pour la tendinopathie isolée du long biceps, Se/Sp // TODO à sourcer/valider.",
      source: "Hegedus 2012 DOI 10.1136/bjsports-2012-091066",
    },
    {
      id: "ac_crossbody_palpation",
      nom: "Adduction horizontale forcée (cross-body) + palpation acromio-claviculaire",
      discrimine: ["ac_joint"],
      precision: "Reproduction de la douleur au sommet de l'épaule. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "passive_er_loss_shrug",
      nom: "Perte de rotation externe passive + shoulder shrug sign",
      discrimine: ["adhesive_capsulitis", "glenohumeral_oa"],
      precision: "Perte d'amplitude PASSIVE (surtout RE) en faveur d'une capsulite/omarthrose ; le shoulder shrug sign est sensible pour les pathologies « raides » (Hegedus 2012).",
      source: "Hegedus 2012 DOI 10.1136/bjsports-2012-091066",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "rupture_massive_coiffe",
      libelle: "Suspicion de rupture massive de coiffe (pseudoparalysie)",
      si: { pseudoparalysie: true },
      conduite: "Incapacité d'élévation active avec passif conservé, surtout après traumatisme : imagerie + avis spécialisé rapide (une réparation peut être temps-dépendante).",
    },
    {
      id: "atteinte_nerveuse_post_luxation",
      libelle: "Atteinte nerveuse après luxation (nerf axillaire / plexus)",
      si: { deficit_sensitivomoteur_post_luxation: true },
      conduite: "Déficit sensitivomoteur après luxation : examen neurologique + avis urgent. Vérifier la réduction et l'état vasculo-nerveux.",
    },
    {
      id: "origine_cervicale",
      libelle: "Possible origine cervicale (radiculopathie)",
      si: { irradiation_cou_bras: true },
      conduite: "Examiner le rachis cervical (Spurling, ROT, force) : une cervicobrachialgie peut mimer une douleur d'épaule.",
    },
    {
      id: "tumeur_epaule",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical : éliminer une cause tumorale (dont tumeur de l'apex pulmonaire / Pancoast projetée à l'épaule) ou systémique.",
    },
    {
      id: "infection_epaule",
      libelle: "Suspicion d'infection / cause systémique",
      si: { signes_systemiques: true },
      conduite: "Fièvre/AEG avec épaule très douloureuse : avis médical urgent (arthrite septique).",
    },
  ],
};

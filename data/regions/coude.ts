/* =============================================================================
   MODULE CLINIQUE — RÉGION COUDE  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed) ou marquées TODO. NON relu / NON testé : à valider.

   PÉRIMÈTRE : épicondylalgie latérale et médiale, insuffisance du ligament
   collatéral ulnaire (lanceurs), rupture du biceps distal, bursite olécrânienne,
   ostéochondrite disséquante du condyle (adolescent lanceur). HORS : douleurs
   cervicales projetées (drapeau), neuropathies hors dépistage.

   SOURCES (PubMed + DOI) :
     - Hook test (rupture du biceps distal) : O'Driscoll 2007 (Am J Sports Med,
       Se 100% / Sp 100% sur cohorte chirurgicale) DOI 10.1177/0363546507305016.
     - La plupart des tests d'épicondylalgie et du LCU manquent de données
       d'exactitude robustes → Se/Sp marquées TODO.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const coude: Region = {
  nom: "Coude",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "epicondyle_lateral", label: "Épicondyle latéral (face externe)" },
        { valeur: "epicondyle_medial", label: "Épicondyle médial (face interne)" },
        { valeur: "anterieur_pli_coude", label: "Pli du coude (antérieur, biceps)" },
        { valeur: "posterieur_olecrane", label: "Postérieure (olécrâne)" },
        { valeur: "lateral_radiocapitellaire", label: "Latérale, radio-capitellaire (profonde)" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_traumatique", label: "Aiguë, traumatique" },
        { valeur: "progressif", label: "Progressive / surmenage" },
      ],
    },
    {
      id: "mecanisme",
      texte: "Mécanisme du traumatisme ?",
      type: "choix_multiple",
      condition: { installation: "aigu_traumatique" },
      options: [
        { valeur: "contraction_excentrique_biceps", label: "Effort en flexion-supination contrariée (soulèvement brusque)" },
        { valeur: "valgus_lancer", label: "Contrainte en valgus au lancer (armer)" },
        { valeur: "choc_olecrane", label: "Choc direct sur l'olécrâne" },
        { valeur: "chute_appui", label: "Chute sur la main / le coude" },
      ],
    },
    {
      id: "douleur_extension_poignet_resistee",
      texte: "Douleur reproduite à l'extension résistée du poignet / la préhension ?",
      type: "oui_non",
      aide: "Évoque une épicondylalgie latérale (tennis elbow).",
    },
    {
      id: "douleur_flexion_pronation_resistee",
      texte: "Douleur reproduite à la flexion-pronation résistée du poignet ?",
      type: "oui_non",
      aide: "Évoque une épicondylalgie médiale (golfer's elbow).",
    },
    {
      id: "douleur_valgus_lancer",
      texte: "Douleur médiale du coude à l'armer / accélération du lancer ?",
      type: "oui_non",
      aide: "Évoque une atteinte du ligament collatéral ulnaire.",
    },
    {
      id: "pop_ecchymose_pli_coude",
      texte: "Claquement + ecchymose au pli du coude, avec rétraction du muscle (signe de Popeye inversé) ?",
      type: "oui_non",
      aide: "Évoque une rupture du biceps distal.",
    },
    {
      id: "deficit_force_flexion_supination",
      texte: "Déficit de force en flexion du coude et surtout en supination ?",
      type: "oui_non",
      aide: "DRAPEAU possible : rupture du biceps distal.",
    },
    {
      id: "tumefaction_posterieure_olecrane",
      texte: "Tuméfaction molle, postérieure, sur l'olécrâne ?",
      type: "oui_non",
      aide: "Évoque une bursite olécrânienne.",
    },
    {
      id: "blocage_accrochage",
      texte: "Accrochage / blocage / craquements douloureux (corps étranger) ?",
      type: "oui_non",
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
      id: "ado_lanceur_lateral",
      texte: "Douleur latérale profonde chez un jeune lanceur / gymnaste, avec perte d'extension ?",
      type: "oui_non",
      condition: { age: "adolescent" },
      aide: "Évoque une ostéochondrite disséquante du condyle (capitellum).",
    },
    {
      id: "bourse_chaude_fievre",
      texte: "Bourse rouge, chaude, fébrile ?",
      type: "oui_non",
      aide: "DRAPEAU : bursite septique.",
    },
    {
      id: "deficit_nerf_ulnaire",
      texte: "Fourmillements / déficit dans les 4e-5e doigts (nerf ulnaire) ?",
      type: "oui_non",
      aide: "DRAPEAU : atteinte du nerf ulnaire au coude.",
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

  HYPOTHESES: [
    {
      id: "lateral_epicondylalgia",
      nom: "Épicondylalgie latérale (tennis elbow)",
      quadrant: "Latéral",
      indices: [
        { si: { douleur_extension_poignet_resistee: true }, poids: 3 },
        { si: { localisation: "epicondyle_lateral" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "medial_epicondylalgia",
      nom: "Épicondylalgie médiale (golfer's elbow)",
      quadrant: "Médial",
      indices: [
        { si: { douleur_flexion_pronation_resistee: true }, poids: 3 },
        { si: { localisation: "epicondyle_medial" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "ucl_injury",
      nom: "Atteinte du ligament collatéral ulnaire (lanceurs)",
      quadrant: "Médial",
      indices: [
        { si: { douleur_valgus_lancer: true }, poids: 3 },
        { si: { mecanisme: "valgus_lancer" }, poids: 2 },
        { si: { localisation: "epicondyle_medial" }, poids: 1 },
      ],
    },
    {
      id: "distal_biceps_rupture",
      nom: "Rupture du tendon distal du biceps",
      quadrant: "Antérieur",
      indices: [
        { si: { pop_ecchymose_pli_coude: true }, poids: 2 },
        { si: { deficit_force_flexion_supination: true }, poids: 2 },
        { si: { localisation: "anterieur_pli_coude" }, poids: 2 },
        { si: { mecanisme: "contraction_excentrique_biceps" }, poids: 2 },
      ],
    },
    {
      id: "olecranon_bursitis",
      nom: "Bursite olécrânienne",
      quadrant: "Postérieur",
      indices: [
        { si: { tumefaction_posterieure_olecrane: true }, poids: 3 },
        { si: { localisation: "posterieur_olecrane" }, poids: 2 },
      ],
    },
    {
      id: "ocd_capitellum",
      nom: "Ostéochondrite disséquante du condyle (capitellum)",
      quadrant: "Latéral",
      indices: [
        { si: { ado_lanceur_lateral: true }, poids: 3 },
        { si: { localisation: "lateral_radiocapitellaire" }, poids: 2 },
        { si: { blocage_accrochage: true }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "resisted_wrist_extension",
      nom: "Extension résistée du poignet (Cozen / Mill) + palpation épicondyle latéral",
      discrimine: ["lateral_epicondylalgia"],
      precision: "Reproduction de la douleur épicondylienne latérale. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "resisted_wrist_flexion_pronation",
      nom: "Flexion-pronation résistée du poignet + palpation épicondyle médial",
      discrimine: ["medial_epicondylalgia"],
      precision: "Reproduction de la douleur épicondylienne médiale. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "moving_valgus_stress",
      nom: "Moving valgus stress test + contrainte en valgus",
      discrimine: ["ucl_injury"],
      precision: "Reproduction de la douleur médiale dans l'arc d'armer (≈ 70-120°). Décrit comme sensible (étude initiale de petite taille) ; Se/Sp robustes // TODO à sourcer/valider. À confronter à l'imagerie chez le lanceur.",
    },
    {
      id: "hook_test",
      nom: "Hook test (rupture du biceps distal)",
      technique: "Coude fléchi à 90° en supination active ; l'index ne peut pas crocheter le tendon par le côté latéral si avulsion complète.",
      discrimine: ["distal_biceps_rupture"],
      precision: "Se ≈100% / Sp ≈100% pour l'avulsion complète dans la cohorte d'origine (supérieur à l'IRM). À combiner avec la force de supination.",
      source: "O'Driscoll 2007 (Am J Sports Med) DOI 10.1177/0363546507305016",
    },
    {
      id: "olecranon_palpation_aspiration",
      nom: "Inspection / palpation de la bourse olécrânienne",
      discrimine: ["olecranon_bursitis"],
      precision: "Bourse chaude/rouge/fébrile → suspecter une forme septique (ponction). Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "ocd_imaging",
      nom: "Imagerie (radiographie ± IRM) du condyle",
      discrimine: ["ocd_capitellum"],
      precision: "Confirme l'ostéochondrite et son stade (stabilité du fragment). Examen clinique : douleur latérale + perte d'extension chez le jeune lanceur.",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "rupture_biceps_distal",
      libelle: "Suspicion de rupture du biceps distal",
      si: { pop_ecchymose_pli_coude: true, deficit_force_flexion_supination: true },
      conduite: "Hook test + force de supination ; avis chirurgical précoce (la réparation des ruptures complètes est souvent temps-dépendante).",
      source: "O'Driscoll 2007 DOI 10.1177/0363546507305016",
    },
    {
      id: "bursite_septique",
      libelle: "Suspicion de bursite septique",
      si: { bourse_chaude_fievre: true },
      conduite: "Bourse chaude/rouge + fièvre : avis médical, ponction avant antibiothérapie.",
    },
    {
      id: "neuropathie_ulnaire",
      libelle: "Atteinte du nerf ulnaire au coude",
      si: { deficit_nerf_ulnaire: true },
      conduite: "Examen neurologique (territoire ulnaire) ; si déficit moteur/sensitif net, avis spécialisé.",
    },
    {
      id: "tumeur_coude",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale ou infectieuse.",
    },
  ],
};

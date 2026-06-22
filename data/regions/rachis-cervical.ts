/* =============================================================================
   MODULE CLINIQUE — RÉGION RACHIS CERVICAL  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed) ou marquées TODO. NON relu / NON testé : à valider.

   PÉRIMÈTRE : cervicalgie commune (mécanique), radiculopathie cervicale (NCB),
   entorse cervicale / whiplash (WAD), céphalée cervicogénique, myélopathie
   cervicale. HORS : pathologies viscérales/vasculaires (drapeaux), épaule
   (module dédié).

   SOURCES (PubMed + DOI) :
     - Radiculopathie cervicale : Thoomes 2017 (revue systématique, Spine J)
       DOI 10.1016/j.spinee.2017.08.241 — Spurling très spécifique (0,89-1,00),
       sensibilité variable (0,38-0,97) ; combiner Spurling + traction axiale +
       arm squeeze pour CONFIRMER ; 4 tests neurodynamiques négatifs + arm squeeze
       pour ÉLIMINER. Pas de données d'exactitude pour force/réflexes/sensibilité.
     - Traumatisme : la règle canadienne du rachis cervical est une règle de
       décision très sensible pour les fractures cliniquement significatives
       (Se/Sp précises // TODO à re-sourcer ici).

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const rachisCervical: Region = {
  nom: "Rachis cervical",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "irradiation",
      texte: "Topographie de la douleur ?",
      type: "choix_unique",
      options: [
        { valeur: "cervicale_pure", label: "Cervicale pure (cou / trapèzes)" },
        { valeur: "bras_dermatomale", label: "Irradiation dans le bras (trajet précis)" },
        { valeur: "occipitale_cephalee", label: "Occipitale / céphalée" },
        { valeur: "membres_marche", label: "Troubles des 4 membres / de la marche" },
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
        { valeur: "coup_lapin", label: "Accélération-décélération (coup du lapin)" },
        { valeur: "choc_axial_plongeon", label: "Choc axial (plongeon, mêlée, chute sur la tête)" },
        { valeur: "trauma_severe", label: "Traumatisme à haute énergie" },
      ],
    },
    {
      id: "douleur_bras_dermatomale",
      texte: "Douleur descendant dans le bras sur un trajet précis ?",
      type: "oui_non",
      aide: "Évoque une radiculopathie cervicale.",
    },
    {
      id: "aggravation_extension_rotation",
      texte: "Douleur du bras aggravée par l'extension-rotation du cou du côté atteint ?",
      type: "oui_non",
      aide: "Manœuvre de type Spurling.",
    },
    {
      id: "paresthesies_bras",
      texte: "Fourmillements / engourdissements dans le bras ou la main ?",
      type: "oui_non",
    },
    {
      id: "cephalee_unilaterale_mouvements_cou",
      texte: "Céphalée unilatérale partant de la nuque, reproduite par les mouvements du cou ?",
      type: "oui_non",
      aide: "Évoque une céphalée cervicogénique.",
    },
    {
      id: "troubles_marche_equilibre",
      texte: "Troubles de l'équilibre / de la marche récents ?",
      type: "oui_non",
      aide: "DRAPEAU : myélopathie cervicale.",
    },
    {
      id: "maladresse_mains",
      texte: "Maladresse des mains (boutons, écriture), perte de dextérité ?",
      type: "oui_non",
      aide: "DRAPEAU : myélopathie cervicale.",
    },
    {
      id: "vertiges_dysarthrie_diplopie",
      texte: "Vertiges, troubles de la parole, vision double, malaises (avec les mouvements du cou) ?",
      type: "oui_non",
      aide: "DRAPEAU : insuffisance vertébro-basilaire (contre-indique les manipulations).",
    },
    {
      id: "trauma_cou_recent",
      texte: "Traumatisme récent du cou (à évaluer pour une fracture) ?",
      type: "oui_non",
      aide: "DRAPEAU : appliquer la règle canadienne du rachis cervical.",
    },
    {
      id: "deficit_moteur_membre",
      texte: "Faiblesse motrice d'un membre ?",
      type: "oui_non",
      aide: "DRAPEAU : déficit neurologique.",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne / de repos permanente (non mécanique) ?",
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
      id: "mechanical_neck_pain",
      nom: "Cervicalgie commune (mécanique)",
      quadrant: "Cervical",
      indices: [
        { si: { irradiation: "cervicale_pure" }, poids: 3 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "cervical_radiculopathy",
      nom: "Radiculopathie cervicale (névralgie cervico-brachiale)",
      quadrant: "Radiculaire",
      indices: [
        { si: { douleur_bras_dermatomale: true }, poids: 3, source: "Thoomes 2017 DOI 10.1016/j.spinee.2017.08.241" },
        { si: { paresthesies_bras: true }, poids: 2 },
        { si: { aggravation_extension_rotation: true }, poids: 1 },
        { si: { irradiation: "bras_dermatomale" }, poids: 1 },
      ],
    },
    {
      id: "whiplash",
      nom: "Entorse cervicale / whiplash (WAD)",
      quadrant: "Cervical",
      indices: [
        { si: { mecanisme: "coup_lapin" }, poids: 3 },
        { si: { installation: "aigu_traumatique" }, poids: 1 },
        { si: { irradiation: "cervicale_pure" }, poids: 1 },
      ],
    },
    {
      id: "cervicogenic_headache",
      nom: "Céphalée cervicogénique",
      quadrant: "Haut cervical",
      indices: [
        { si: { cephalee_unilaterale_mouvements_cou: true }, poids: 3 },
        { si: { irradiation: "occipitale_cephalee" }, poids: 2 },
      ],
    },
    {
      id: "cervical_myelopathy",
      nom: "Myélopathie cervicale",
      quadrant: "Médullaire",
      indices: [
        { si: { troubles_marche_equilibre: true }, poids: 3 },
        { si: { maladresse_mains: true }, poids: 2 },
        { si: { irradiation: "membres_marche" }, poids: 2 },
      ],
    },
  ],

  TESTS: [
    {
      id: "spurling_cluster",
      nom: "Test de Spurling (+ traction axiale, arm squeeze, tests neurodynamiques)",
      technique: "Spurling : extension-inclinaison-rotation homolatérale + compression axiale reproduisant la douleur radiculaire.",
      discrimine: ["cervical_radiculopathy"],
      precision: "Spurling : spécificité élevée (0,89-1,00), sensibilité variable (0,38-0,97) → bon pour CONFIRMER. Combiner Spurling + traction axiale + arm squeeze pour augmenter la probabilité ; 4 tests neurodynamiques négatifs + arm squeeze pour ÉLIMINER.",
      source: "Thoomes 2017 (Spine J) DOI 10.1016/j.spinee.2017.08.241",
    },
    {
      id: "neuro_exam_cervical",
      nom: "Examen neurologique du membre supérieur (force, réflexes, sensibilité)",
      discrimine: ["cervical_radiculopathy"],
      precision: "Localise le niveau (C5 : deltoïde/biceps ; C6 : long supinateur/extenseurs poignet ; C7 : triceps ; C8 : fléchisseurs doigts). ⚠️ Pas de données d'exactitude pour ces signes pris isolément (Thoomes 2017).",
      source: "Thoomes 2017 (Spine J) DOI 10.1016/j.spinee.2017.08.241",
    },
    {
      id: "myelopathy_signs",
      nom: "Signes de myélopathie (Hoffmann, hyperréflexie, Babinski, marche)",
      discrimine: ["cervical_myelopathy"],
      precision: "Recherche de signes pyramidaux et de troubles de la marche. Toute suspicion → IRM + avis spécialisé. Se/Sp par signe // TODO à sourcer/valider.",
    },
    {
      id: "cervicogenic_cervical_exam",
      nom: "Reproduction de la céphalée par l'examen du rachis cervical haut",
      discrimine: ["cervicogenic_headache"],
      precision: "Reproduction de la céphalée à la mobilisation/palpation du rachis cervical supérieur (C0-C3). Se/Sp // TODO à sourcer/valider.",
    },
  ],

  // Dépistage : devant un traumatisme du cou, appliquer la règle canadienne.
  TEST_SCREEN: {
    id: "canadian_cspine_rule",
    nom: "Règle canadienne du rachis cervical (DÉPISTAGE FRACTURE)",
    siRep: "trauma_cou_recent",
    technique: "Imagerie si facteur à haut risque (≥65 ans, mécanisme dangereux, paresthésies des extrémités), absence de facteur à faible risque permettant l'évaluation des amplitudes, OU rotation active < 45° de chaque côté.",
    precision: "Règle de décision très sensible pour les lésions cervicales cliniquement importantes, conçue pour réduire les imageries inutiles. Valeurs précises de Se/Sp // TODO à sourcer/valider ici.",
  },

  DRAPEAUX_ROUGES: [
    {
      id: "myelopathie_marche",
      libelle: "Suspicion de myélopathie cervicale (troubles de la marche)",
      si: { troubles_marche_equilibre: true },
      conduite: "Signes médullaires (marche, équilibre) : IRM + avis spécialisé. Éviter les manipulations.",
    },
    {
      id: "myelopathie_mains",
      libelle: "Suspicion de myélopathie cervicale (maladresse des mains)",
      si: { maladresse_mains: true },
      conduite: "Perte de dextérité fine : rechercher signes pyramidaux (Hoffmann, hyperréflexie) → IRM + avis.",
    },
    {
      id: "insuffisance_vertebrobasilaire",
      libelle: "Signes d'insuffisance vertébro-basilaire",
      si: { vertiges_dysarthrie_diplopie: true },
      conduite: "Vertiges/dysarthrie/diplopie/drop attacks : CONTRE-INDIQUENT les manipulations cervicales ; avis médical.",
    },
    {
      id: "fracture_cervicale_trauma",
      libelle: "Suspicion de fracture cervicale (traumatisme)",
      si: { trauma_cou_recent: true },
      conduite: "Appliquer la règle canadienne du rachis cervical ; immobiliser et imager en cas de critère à haut risque.",
    },
    {
      id: "deficit_neuro_cervical",
      libelle: "Déficit neurologique d'un membre",
      si: { deficit_moteur_membre: true },
      conduite: "Faiblesse motrice : examen neurologique complet + avis (radiculopathie sévère ou atteinte médullaire).",
    },
    {
      id: "tumeur_infection_cervical",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale ou infectieuse (spondylodiscite).",
    },
  ],
};

/* =============================================================================
   MODULE CLINIQUE — RÉGION POIGNET / MAIN  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed) ou marquées TODO. NON relu / NON testé : à valider.

   PÉRIMÈTRE : fracture du scaphoïde, fracture de l'extrémité distale du radius,
   entorse du poignet (scapho-lunaire), lésion du TFCC / DRUJ, ténosynovite de
   De Quervain, syndrome du canal carpien, entorse du LCU du pouce (skier's thumb).
   HORS : douleurs cervicales/projetées (drapeau), pathologies systémiques.

   SOURCES (PubMed + DOI) :
     - Fracture du scaphoïde : Mallee 2014 (revue systématique + méta-analyse,
       J Hand Surg Am) DOI 10.1016/j.jhsa.2014.06.004 — la sensibilité de
       la douleur de la tabatière anatomique est élevée (0,87-1,00) mais la
       spécificité faible ; combiner les tests augmente la spécificité.
     - Autres tests (Finkelstein, TFCC, Phalen/Tinel, stress du pouce) : données
       d'exactitude limitées → Se/Sp marquées TODO.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const poignetMain: Region = {
  nom: "Poignet / main",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "tabatiere_radial", label: "Versant radial / tabatière anatomique" },
        { valeur: "dorsal_radius", label: "Dorsale, extrémité distale du radius" },
        { valeur: "ulnaire", label: "Versant ulnaire (bord du 5e doigt)" },
        { valeur: "styloide_radiale_pouce", label: "Styloïde radiale / base du pouce (tendons)" },
        { valeur: "face_palmaire_doigts", label: "Face palmaire / 3 premiers doigts" },
        { valeur: "mcp_pouce", label: "Articulation MCP du pouce" },
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
        { valeur: "chute_main_tendue", label: "Chute sur la main tendue (poignet en extension)" },
        { valeur: "torsion_poignet", label: "Torsion / charge en pronosupination" },
        { valeur: "hyperabduction_pouce", label: "Hyperabduction forcée du pouce (chute, sangle de ski)" },
        { valeur: "choc_direct_main", label: "Choc direct" },
      ],
    },
    {
      id: "douleur_tabatiere",
      texte: "Douleur à la palpation de la tabatière anatomique ?",
      type: "oui_non",
      aide: "DRAPEAU possible : fracture du scaphoïde (risque de pseudarthrose).",
    },
    {
      id: "deformation_visible",
      texte: "Déformation visible du poignet (« dos de fourchette ») ?",
      type: "oui_non",
      aide: "DRAPEAU : fracture de l'extrémité distale du radius.",
    },
    {
      id: "douleur_ulnaire_charge_pronosupination",
      texte: "Douleur ulnaire à la charge / en pronosupination (appui, vissage) ?",
      type: "oui_non",
      aide: "Évoque une lésion du TFCC / instabilité radio-ulnaire distale.",
    },
    {
      id: "douleur_radial_pouce_prehension",
      texte: "Douleur radiale à la prise du pouce / déviation ulnaire (Finkelstein) ?",
      type: "oui_non",
      aide: "Évoque une ténosynovite de De Quervain.",
    },
    {
      id: "paresthesies_3_doigts_nocturnes",
      texte: "Fourmillements des 3 premiers doigts, surtout la nuit / au réveil ?",
      type: "oui_non",
      aide: "Évoque un syndrome du canal carpien.",
    },
    {
      id: "instabilite_pince_pouce",
      texte: "Instabilité / perte de force de la pince du pouce après traumatisme ?",
      type: "oui_non",
      aide: "Évoque une entorse du ligament collatéral ulnaire du pouce.",
    },
    {
      id: "impotence_marquee",
      texte: "Impotence fonctionnelle marquée / gonflement important ?",
      type: "oui_non",
    },
    {
      id: "deficit_neurovasculaire_main",
      texte: "Main froide/pâle, douleur disproportionnée, déficit sensitivomoteur ?",
      type: "oui_non",
      aide: "DRAPEAU : atteinte neuro-vasculaire / syndrome de loge / canal carpien aigu.",
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
      id: "scaphoid_fracture",
      nom: "Fracture du scaphoïde",
      quadrant: "Radial",
      indices: [
        { si: { douleur_tabatiere: true }, poids: 3, source: "Mallee 2014 (Se élevée de la douleur de tabatière) DOI 10.1016/j.jhsa.2014.06.004" },
        { si: { mecanisme: "chute_main_tendue" }, poids: 2 },
        { si: { localisation: "tabatiere_radial" }, poids: 1 },
      ],
    },
    {
      id: "distal_radius_fracture",
      nom: "Fracture de l'extrémité distale du radius",
      quadrant: "Dorsal",
      indices: [
        { si: { deformation_visible: true }, poids: 3 },
        { si: { mecanisme: "chute_main_tendue" }, poids: 2 },
        { si: { localisation: "dorsal_radius" }, poids: 1 },
      ],
    },
    {
      id: "wrist_sprain",
      nom: "Entorse du poignet (scapho-lunaire)",
      quadrant: "Dorsal",
      indices: [
        { si: { mecanisme: "chute_main_tendue" }, poids: 1 },
        { si: { mecanisme: "torsion_poignet" }, poids: 2 },
        { si: { localisation: "dorsal_radius" }, poids: 1 },
      ],
    },
    {
      id: "tfcc_injury",
      nom: "Lésion du TFCC / instabilité radio-ulnaire distale",
      quadrant: "Ulnaire",
      indices: [
        { si: { localisation: "ulnaire" }, poids: 3 },
        { si: { douleur_ulnaire_charge_pronosupination: true }, poids: 2 },
        { si: { mecanisme: "torsion_poignet" }, poids: 1 },
      ],
    },
    {
      id: "de_quervain",
      nom: "Ténosynovite de De Quervain",
      quadrant: "Radial",
      indices: [
        { si: { douleur_radial_pouce_prehension: true }, poids: 3 },
        { si: { localisation: "styloide_radiale_pouce" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "carpal_tunnel",
      nom: "Syndrome du canal carpien",
      quadrant: "Palmaire",
      indices: [
        { si: { paresthesies_3_doigts_nocturnes: true }, poids: 3 },
        { si: { localisation: "face_palmaire_doigts" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "thumb_ucl",
      nom: "Entorse du LCU du pouce (skier's / gamekeeper's thumb)",
      quadrant: "Pouce",
      indices: [
        { si: { localisation: "mcp_pouce" }, poids: 3 },
        { si: { instabilite_pince_pouce: true }, poids: 2 },
        { si: { mecanisme: "hyperabduction_pouce" }, poids: 2 },
      ],
    },
  ],

  TESTS: [
    {
      id: "scaphoid_snuffbox_compression",
      nom: "Palpation de la tabatière + compression longitudinale du pouce + palpation du tubercule",
      discrimine: ["scaphoid_fracture"],
      precision: "Douleur de tabatière : test le plus sensible (Se 0,87-1,00) mais peu spécifique (Sp très variable). Combiner les tests augmente la spécificité. ⚠️ Traiter comme une fracture (immobilisation) malgré une radiographie initiale normale, puis réévaluer/IRM (risque de pseudarthrose).",
      source: "Mallee 2014 (J Hand Surg Am) DOI 10.1016/j.jhsa.2014.06.004",
    },
    {
      id: "distal_radius_imaging",
      nom: "Radiographie du poignet (face + profil)",
      discrimine: ["distal_radius_fracture"],
      precision: "Confirme la fracture et le déplacement. Rechercher une atteinte du nerf médian (canal carpien aigu) en cas de déplacement important.",
    },
    {
      id: "tfcc_loading_grind",
      nom: "Test de charge ulnaire / ulnar grind + stress radio-ulnaire distal",
      discrimine: ["tfcc_injury"],
      precision: "Reproduction de la douleur ulnaire en compression/rotation ; tester la stabilité de l'articulation radio-ulnaire distale. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "finkelstein",
      nom: "Test de Finkelstein",
      discrimine: ["de_quervain"],
      precision: "Mise en tension des tendons du 1er compartiment (long abducteur / court extenseur du pouce). Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "phalen_tinel",
      nom: "Tests de provocation (Phalen, Tinel) + territoire médian",
      discrimine: ["carpal_tunnel"],
      precision: "Tests de provocation des paresthésies du territoire médian. Se/Sp variables // TODO à sourcer/valider ; l'ENMG confirme si besoin.",
    },
    {
      id: "thumb_valgus_stress",
      nom: "Stress en valgus de la MCP du pouce (en extension et en flexion)",
      discrimine: ["thumb_ucl"],
      precision: "Une laxité nette (souvent > 30-35° ou asymétrie marquée) évoque une rupture complète (lésion de Stener possible → chirurgie). Se/Sp // TODO à sourcer/valider.",
    },
  ],

  // Dépistage : devant une douleur de tabatière, considérer la fracture du
  // scaphoïde même si la radiographie initiale est normale.
  TEST_SCREEN: {
    id: "scaphoid_screen",
    nom: "Conduite « scaphoïde » (DÉPISTAGE FRACTURE)",
    siRep: "douleur_tabatiere",
    technique: "Immobiliser comme une fracture, radiographies (incidences scaphoïde) ; si normales mais clinique persistante, réévaluation à 10-14 j ± IRM/TDM.",
    precision: "La douleur de tabatière est très sensible mais peu spécifique (Mallee 2014). Le risque de pseudarthrose justifie de ne pas écarter la fracture sur une seule radiographie normale.",
    source: "Mallee 2014 (J Hand Surg Am) DOI 10.1016/j.jhsa.2014.06.004",
  },

  DRAPEAUX_ROUGES: [
    {
      id: "fracture_scaphoide",
      libelle: "Suspicion de fracture du scaphoïde",
      si: { douleur_tabatiere: true },
      conduite: "Immobiliser et imager ; ne pas écarter sur une radiographie initiale normale (réévaluation/IRM). Risque de pseudarthrose et de nécrose.",
      source: "Mallee 2014 DOI 10.1016/j.jhsa.2014.06.004",
    },
    {
      id: "fracture_radius_distal",
      libelle: "Suspicion de fracture de l'extrémité distale du radius",
      si: { deformation_visible: true },
      conduite: "Radiographie ; rechercher une atteinte du nerf médian. Réduction selon le déplacement.",
    },
    {
      id: "atteinte_neurovasculaire_main",
      libelle: "Atteinte neuro-vasculaire / canal carpien aigu",
      si: { deficit_neurovasculaire_main: true },
      conduite: "Urgence : main froide/pâle, douleur disproportionnée ou déficit médian aigu (surtout après fracture déplacée) → avis immédiat.",
    },
    {
      id: "infection_tumeur_main",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une infection ou une cause tumorale.",
    },
  ],
};

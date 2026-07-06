/* =============================================================================
   MODULE CLINIQUE — RACHIS THORACIQUE / DORSALGIE  (v0.1 — À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.

   PÉRIMÈTRE : dorsalgie mécanique commune, dysfonction costo-vertébrale /
   costo-transversaire, cyphose de Scheuermann (adolescent), douleur pariétale
   (costochondrite). Forte couche DRAPEAUX ROUGES car le rachis thoracique est
   un site fréquent de douleurs référées viscérales et de fractures.

   ⚠️ La dorsalgie impose une vigilance particulière : origine cardiaque,
   aortique, pulmonaire, digestive, fracture ostéoporotique, zona, tumeur.

   SOURCES (PubMed + DOI) :
     - Downie 2013 (BMJ) DOI 10.1136/bmj.f7095 : performances des drapeaux
       rouges pour fracture et malignité rachidiennes.
     - Henschke 2009 (Arthritis Rheum) DOI 10.1002/art.24853 : combinaison de
       drapeaux (âge, corticoïdes, traumatisme, contusion) et fracture.

   Version : v0.1 — 2026-07-05 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const rachisThoracique: Region = {
  nom: "Rachis thoracique / dorsalgie",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur ?",
      type: "choix_unique",
      options: [
        { valeur: "para_vertebrale", label: "Para-vertébrale / entre les omoplates" },
        { valeur: "costale_laterale", label: "Sur une côte / le long d'un espace intercostal" },
        { valeur: "anterieure_sternale", label: "Antérieure, sternale / costo-sternale" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_geste", label: "Aiguë, sur un geste / faux mouvement" },
        { valeur: "progressif", label: "Progressive / posturale" },
      ],
    },
    {
      id: "aggravation_respiration",
      texte: "Douleur majorée par la respiration profonde / la toux ?",
      type: "oui_non",
      aide: "Oriente vers une atteinte costo-vertébrale ou pariétale (mais aussi pleuro-pulmonaire → drapeau).",
    },
    {
      id: "aggravation_rotation",
      texte: "Douleur reproduite par les rotations du tronc / la mise en charge du segment ?",
      type: "oui_non",
      aide: "Argument mécanique.",
    },
    {
      id: "reproduction_palpation",
      texte: "Douleur reproduite par la palpation / pression locale ?",
      type: "oui_non",
      aide: "Argument pour une origine musculosquelettique/pariétale.",
    },
    {
      id: "posture_travail",
      texte: "Contexte postural (poste de travail, port de charges, sédentarité) ?",
      type: "oui_non",
    },
    {
      id: "adolescent_cyphose",
      texte: "Adolescent avec cyphose dorsale rigide et douloureuse ?",
      type: "oui_non",
      aide: "Évoque une maladie de Scheuermann.",
    },
    {
      id: "douleur_thoracique_effort",
      texte: "Douleur thoracique/constrictive à l'effort, irradiant bras/mâchoire, avec dyspnée ou sueurs ?",
      type: "oui_non",
      aide: "DRAPEAU : origine cardiaque — urgence.",
    },
    {
      id: "douleur_dechirure_dos",
      texte: "Douleur brutale « en coup de poignard » dorsale/thoracique, très intense ?",
      type: "oui_non",
      aide: "DRAPEAU : dissection aortique — urgence.",
    },
    {
      id: "dyspnee_signes_respi",
      texte: "Dyspnée, toux fébrile, crachats, ou douleur pleurale associée ?",
      type: "oui_non",
      aide: "DRAPEAU : cause pleuro-pulmonaire (pneumonie, embolie, pneumothorax).",
    },
    {
      id: "eruption_vesiculeuse",
      texte: "Douleur en bande unilatérale précédant/accompagnant une éruption vésiculeuse ?",
      type: "oui_non",
      aide: "DRAPEAU : zona (herpès zoster).",
    },
    {
      id: "trauma_osteoporose",
      texte: "Traumatisme (même mineur), âge > 70 ans, corticothérapie ou ostéoporose connue ?",
      type: "oui_non",
      aide: "DRAPEAU : fracture vertébrale.",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne / de repos permanente (non mécanique) ?",
      type: "oui_non",
    },
    {
      id: "signes_systemiques",
      texte: "Fièvre, altération de l'état général, perte de poids, antécédent de cancer ?",
      type: "oui_non",
      aide: "DRAPEAU : cause tumorale ou infectieuse.",
    },
    {
      id: "signes_digestifs",
      texte: "Lien avec les repas, douleur épigastrique, nausées (douleur possiblement digestive) ?",
      type: "oui_non",
      aide: "DRAPEAU : cause digestive référée (biliaire, pancréatique, ulcère).",
    },
  ],

  HYPOTHESES: [
    {
      id: "dorsalgie_mecanique",
      nom: "Dorsalgie commune (mécanique / posturale)",
      quadrant: "Rachidien",
      indices: [
        { si: { localisation: "para_vertebrale" }, poids: 3 },
        { si: { aggravation_rotation: true }, poids: 2 },
        { si: { posture_travail: true }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "dysfonction_costovertebrale",
      nom: "Dysfonction costo-vertébrale / costo-transversaire",
      quadrant: "Costo-vertébral",
      indices: [
        { si: { localisation: "costale_laterale" }, poids: 3 },
        { si: { aggravation_respiration: true }, poids: 2 },
        { si: { reproduction_palpation: true }, poids: 1 },
        { si: { installation: "aigu_geste" }, poids: 1 },
      ],
    },
    {
      id: "douleur_parietale_costochondrale",
      nom: "Douleur pariétale antérieure (costochondrite / costo-sternale)",
      quadrant: "Pariétal antérieur",
      indices: [
        { si: { localisation: "anterieure_sternale" }, poids: 3 },
        { si: { reproduction_palpation: true }, poids: 2 },
      ],
    },
    {
      id: "scheuermann",
      nom: "Maladie de Scheuermann (dystrophie de croissance)",
      quadrant: "Rachidien",
      indices: [
        { si: { adolescent_cyphose: true }, poids: 3 },
        { si: { localisation: "para_vertebrale" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "exam_segmentaire_thoracique",
      nom: "Examen segmentaire thoracique + costo-vertébral",
      technique: "Reproduction de la douleur par pression postéro-antérieure sur les épineuses/articulations costo-vertébrales, tests de rotation/inclinaison segmentaires.",
      discrimine: ["dorsalgie_mecanique", "dysfonction_costovertebrale"],
      precision: "Reproduction d'une douleur familière locale → argument mécanique. Fiabilité/exactitude de la palpation segmentaire limitées // TODO à sourcer/valider.",
    },
    {
      id: "palpation_costochondrale",
      nom: "Palpation des jonctions costo-chondrales",
      technique: "Reproduction de la douleur à la palpation des articulations costo-sternales/costo-chondrales.",
      discrimine: ["douleur_parietale_costochondrale"],
      precision: "Une douleur reproduite à la palpation oriente vers une origine pariétale ; n'élimine PAS une cause viscérale associée. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "examen_neuro_thoracique",
      nom: "Examen neurologique (niveau sensitif, réflexes MI, signes médullaires)",
      technique: "Recherche d'un niveau sensitif, de signes pyramidaux aux membres inférieurs (la moelle se termine vers L1).",
      discrimine: [],
      precision: "Tout signe médullaire (niveau sensitif, troubles sphinctériens, syndrome pyramidal) impose un avis urgent : compression médullaire thoracique possible.",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "origine_cardiaque_thoracique",
      libelle: "Suspicion d'origine cardiaque (syndrome coronarien)",
      si: { douleur_thoracique_effort: true },
      conduite: "URGENCE : douleur d'effort constrictive, irradiation bras/mâchoire, dyspnée/sueurs → appeler le 15/112.",
    },
    {
      id: "dissection_aortique",
      libelle: "Suspicion de dissection aortique",
      si: { douleur_dechirure_dos: true },
      conduite: "URGENCE : douleur brutale, déchirante, très intense → appeler le 15/112.",
    },
    {
      id: "cause_pleuropulmonaire",
      libelle: "Suspicion de cause pleuro-pulmonaire",
      si: { dyspnee_signes_respi: true },
      conduite: "Dyspnée/fièvre/douleur pleurale : éliminer pneumonie, embolie pulmonaire, pneumothorax → avis médical rapide.",
    },
    {
      id: "zona_thoracique",
      libelle: "Suspicion de zona (herpès zoster)",
      si: { eruption_vesiculeuse: true },
      conduite: "Douleur en bande unilatérale + éruption vésiculeuse : avis médical (traitement antiviral précoce).",
    },
    {
      id: "fracture_vertebrale_thoracique",
      libelle: "Suspicion de fracture vertébrale",
      si: { trauma_osteoporose: true },
      conduite: "Traumatisme / âge élevé / corticoïdes / ostéoporose : imagerie + avis médical. Prudence à la mobilisation.",
      source: "Downie 2013 DOI 10.1136/bmj.f7095 ; Henschke 2009 DOI 10.1002/art.24853",
    },
    {
      id: "tumeur_infection_thoracique",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Douleur nocturne/de repos + fièvre/perte de poids/antécédent de cancer : imagerie + avis pour éliminer tumeur/infection.",
      source: "Downie 2013 DOI 10.1136/bmj.f7095",
    },
    {
      id: "cause_digestive_referee",
      libelle: "Possible cause digestive référée",
      si: { signes_digestifs: true },
      conduite: "Lien avec les repas, douleur épigastrique/nausées : orienter vers un avis médical (biliaire, pancréatique, ulcère).",
    },
  ],
};

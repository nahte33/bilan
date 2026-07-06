/* =============================================================================
   MODULE CLINIQUE — ARTICULATION TEMPOROMANDIBULAIRE (ATM)  (v0.1 — À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.

   PÉRIMÈTRE : troubles temporomandibulaires (DTM) douloureux d'origine
   musculaire (myalgie masticatrice), déplacement discal avec/ sans réduction,
   arthralgie/arthrose de l'ATM. HORS : causes dentaires, ORL, tumorales,
   artérite temporale (DRAPEAUX → avis médical/dentaire).

   SOURCES (PubMed + DOI) :
     - Schiffman 2014 (DC/TMD) DOI 10.11607/jop.1151 : critères diagnostiques
       validés. DTM douloureux (myalgie / arthralgie) : Se ≥ 0,86, Sp ≥ 0,98 ;
       déplacement discal avec réduction : Se 0,80, Sp 0,97. Les autres troubles
       intra-articulaires manquent de validité (usage de dépistage).
     - McNeely 2006 (Phys Ther) DOI 10.1093/ptj/86.5.710 : revue systématique
       de l'efficacité des interventions de kinésithérapie dans les DTM.

   Version : v0.1 — 2026-07-05 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const atm: Region = {
  nom: "ATM (mâchoire)",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Où siège la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "muscle_masticateur", label: "Sur les muscles (tempe, joue, masséter)" },
        { valeur: "preauriculaire", label: "Devant l'oreille (sur l'articulation)" },
        { valeur: "diffuse", label: "Diffuse / mal localisée" },
      ],
    },
    {
      id: "douleur_mastication",
      texte: "Douleur reproduite par la mastication ou le serrement des dents ?",
      type: "oui_non",
      aide: "Argument pour un trouble temporomandibulaire douloureux.",
    },
    {
      id: "bruit_articulaire",
      texte: "Bruit articulaire à l'ouverture / fermeture ?",
      type: "choix_unique",
      options: [
        { valeur: "clic", label: "Clic / claquement" },
        { valeur: "crepitement", label: "Craquement / crépitement (sable)" },
        { valeur: "aucun", label: "Aucun bruit" },
      ],
    },
    {
      id: "blocage_ouverture",
      texte: "Blocage ou limitation de l'ouverture de la bouche ?",
      type: "oui_non",
      aide: "Déplacement discal sans réduction si limitation marquée et brutale.",
    },
    {
      id: "deviation_ouverture",
      texte: "Déviation ou ressaut de la mâchoire pendant l'ouverture ?",
      type: "oui_non",
    },
    {
      id: "bruxisme",
      texte: "Serrement / grincement des dents (bruxisme), stress ?",
      type: "oui_non",
      aide: "Facteur contributif fréquent des myalgies masticatrices.",
    },
    {
      id: "cephalee_temporale",
      texte: "Céphalées temporales associées ?",
      type: "oui_non",
    },
    {
      id: "raideur_matinale",
      texte: "Raideur / douleur maximale au réveil ?",
      type: "oui_non",
    },
    {
      id: "douleur_dentaire",
      texte: "Douleur dentaire, dent cassée, soin dentaire récent ?",
      type: "oui_non",
      aide: "DRAPEAU : orienter vers un avis dentaire (cause odontogène).",
    },
    {
      id: "signes_orl",
      texte: "Otalgie avec écoulement / fièvre, ou signes ORL ?",
      type: "oui_non",
      aide: "DRAPEAU : cause ORL (otite…) → avis médical.",
    },
    {
      id: "cephalee_temporale_agee",
      texte: "Après 50 ans : céphalée temporale récente, artère temporale douloureuse, claudication de la mâchoire, troubles visuels ?",
      type: "oui_non",
      aide: "DRAPEAU : artérite à cellules géantes (urgence).",
    },
  ],

  HYPOTHESES: [
    {
      id: "myalgie_masticatrice",
      nom: "Myalgie des muscles masticateurs (DTM myogène)",
      quadrant: "Musculaire",
      indices: [
        { si: { localisation: "muscle_masticateur" }, poids: 3, source: "Schiffman 2014 (DC/TMD) DOI 10.11607/jop.1151" },
        { si: { douleur_mastication: true }, poids: 2 },
        { si: { bruxisme: true }, poids: 1 },
        { si: { raideur_matinale: true }, poids: 1 },
      ],
    },
    {
      id: "deplacement_discal_reduction",
      nom: "Déplacement discal avec réduction",
      quadrant: "Intra-articulaire",
      indices: [
        { si: { bruit_articulaire: "clic" }, poids: 3, source: "Schiffman 2014 (DC/TMD ; Se 0,80 / Sp 0,97) DOI 10.11607/jop.1151" },
        { si: { deviation_ouverture: true }, poids: 2 },
        { si: { localisation: "preauriculaire" }, poids: 1 },
      ],
    },
    {
      id: "deplacement_discal_sans_reduction",
      nom: "Déplacement discal sans réduction (blocage)",
      quadrant: "Intra-articulaire",
      indices: [
        { si: { blocage_ouverture: true }, poids: 3 },
        { si: { localisation: "preauriculaire" }, poids: 1 },
      ],
    },
    {
      id: "arthralgie_arthrose_atm",
      nom: "Arthralgie / arthrose de l'ATM",
      quadrant: "Intra-articulaire",
      indices: [
        { si: { bruit_articulaire: "crepitement" }, poids: 3, source: "Schiffman 2014 (DC/TMD) DOI 10.11607/jop.1151" },
        { si: { localisation: "preauriculaire" }, poids: 2 },
        { si: { douleur_mastication: true }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "dctmd_provocation",
      nom: "Examen DC/TMD : palpation musculaire/articulaire + provocation",
      technique: "Reproduction de la douleur familière à la palpation des masséters/temporaux et de l'ATM, et lors des mouvements mandibulaires (ouverture, latéralités, propulsion).",
      discrimine: ["myalgie_masticatrice", "arthralgie_arthrose_atm"],
      precision: "Critères DC/TMD pour les DTM douloureux : Se ≥ 0,86, Sp ≥ 0,98 (fiabilité inter-examinateur excellente, kappa ≥ 0,85).",
      source: "Schiffman 2014 (DC/TMD) DOI 10.11607/jop.1151",
    },
    {
      id: "amplitude_ouverture",
      nom: "Mesure de l'ouverture buccale + analyse des bruits",
      technique: "Ouverture inter-incisive (normale ≈ 40 mm) ; identification d'un clic reproductible (réduction discale) vs crépitement (arthrose) ; recherche d'un blocage.",
      discrimine: ["deplacement_discal_reduction", "deplacement_discal_sans_reduction"],
      precision: "Le clic reproductible à l'ouverture/fermeture oriente vers le déplacement discal avec réduction (DC/TMD : Se 0,80 / Sp 0,97). Une limitation marquée et un antécédent de blocage évoquent l'absence de réduction.",
      source: "Schiffman 2014 (DC/TMD) DOI 10.11607/jop.1151",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "cause_dentaire",
      libelle: "Possible cause dentaire (odontogène)",
      si: { douleur_dentaire: true },
      conduite: "Douleur/soin dentaire : orienter vers un avis dentaire avant d'attribuer la douleur à l'ATM.",
    },
    {
      id: "cause_orl",
      libelle: "Possible cause ORL",
      si: { signes_orl: true },
      conduite: "Otalgie avec fièvre/écoulement : orienter vers un avis médical (ORL).",
    },
    {
      id: "arterite_temporale",
      libelle: "Suspicion d'artérite à cellules géantes (Horton)",
      si: { cephalee_temporale_agee: true },
      conduite: "Urgence : après 50 ans, céphalée temporale + claudication mandibulaire + troubles visuels → avis médical immédiat (risque de cécité).",
    },
  ],
};

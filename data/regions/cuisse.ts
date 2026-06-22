/* =============================================================================
   MODULE CLINIQUE — RÉGION CUISSE / ISCHIO-JAMBIERS  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed). Beaucoup de lésions musculaires se diagnostiquent
   cliniquement + IRM ; les tests cliniques isolés ont peu de données d'exactitude
   (marqués TODO). Module NON relu / NON testé sur cas connus : à faire avant usage.

   PÉRIMÈTRE
     DANS : lésion myo-aponévrotique des ischio-jambiers, tendinopathie proximale
       des ischio-jambiers, avulsion apophysaire de l'ischion (adolescent), lésion
       du droit fémoral / quadriceps, contusion de cuisse, lésion proximale des
       adducteurs (versant cuisse).
     HORS : pathologies de hanche/aine (module dédié), du genou (module dédié),
       causes vasculaires/neuro hors dépistage (drapeaux).

   CADRES DE RÉFÉRENCE / SOURCES (PubMed + DOI) :
     - Classification des lésions musculaires (IRM, grades 0-4 + a/b/c) :
       Pollock 2014 (British Athletics Muscle Injury Classification, BJSM)
       DOI 10.1136/bjsports-2013-093302. Note : les systèmes cliniques en 3 grades
       manquent d'exactitude diagnostique.
     - Tendinopathie proximale des ischio-jambiers : Cacchio 2012 (BJSM,
       fiabilité/validité de 3 tests de provocation) DOI 10.1136/bjsports-2011-090325.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const cuisse: Region = {
  nom: "Cuisse / ischio-jambiers",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "ischio_proximal", label: "Haut de la cuisse postérieure / ischion (pli fessier)" },
        { valeur: "ischio_corps", label: "Corps de la cuisse postérieure" },
        { valeur: "anterieur_quadriceps", label: "Face antérieure (quadriceps)" },
        { valeur: "anteromedial_adducteurs", label: "Face interne haute (adducteurs)" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_traumatique", label: "Aiguë, sur un geste précis" },
        { valeur: "progressif", label: "Progressive / insidieuse" },
      ],
    },
    {
      id: "mecanisme",
      texte: "Geste déclenchant ?",
      type: "choix_multiple",
      condition: { installation: "aigu_traumatique" },
      options: [
        { valeur: "sprint_vitesse", label: "Course à haute vitesse / sprint" },
        { valeur: "etirement_brutal", label: "Étirement brutal (grand écart, fente, jambe lancée)" },
        { valeur: "frappe_armer", label: "Frappe / armer du tir (extension de hanche-flexion genou)" },
        { valeur: "choc_direct_anterieur", label: "Choc direct sur la cuisse" },
        { valeur: "demarrage_explosif", label: "Démarrage / changement de direction explosif" },
      ],
    },
    {
      id: "pop_dechirure",
      texte: "Sensation de déchirure / claquement au moment de la blessure ?",
      type: "oui_non",
      condition: { installation: "aigu_traumatique" },
    },
    {
      id: "ecchymose_palpable_gap",
      texte: "Ecchymose étendue et/ou encoche (gap) palpable dans le muscle ?",
      type: "oui_non",
      aide: "Évoque une lésion de haut grade / désinsertion.",
    },
    {
      id: "deficit_force_flexion_genou",
      texte: "Déficit de force marqué (flexion du genou / extension de hanche) ?",
      type: "oui_non",
      aide: "DRAPEAU possible (associé à une encoche) : avulsion / rupture proximale complète des ischio-jambiers.",
    },
    {
      id: "douleur_assise_prolongee",
      texte: "Douleur à la position assise prolongée (sur l'ischion) ?",
      type: "oui_non",
      aide: "Caractéristique de la tendinopathie proximale des ischio-jambiers.",
    },
    {
      id: "douleur_course_acceleration",
      texte: "Douleur à la course / aux accélérations, d'installation progressive ?",
      type: "oui_non",
    },
    {
      id: "douleur_etirement_ischio",
      texte: "Douleur reproduite à l'étirement des ischio-jambiers ?",
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
      id: "ado_douleur_ischion",
      texte: "Douleur aiguë de l'ischion sur contraction explosive (sprint, grand écart) chez le sportif en croissance ?",
      type: "oui_non",
      condition: { age: "adolescent" },
      aide: "DRAPEAU : avulsion apophysaire de la tubérosité ischiatique.",
    },
    {
      id: "raideur_perte_flexion_apres_contusion",
      texte: "Après un choc sur la cuisse : perte de flexion du genou / masse dure qui persiste ou s'aggrave ?",
      type: "oui_non",
      aide: "DRAPEAU : risque de myosite ossifiante.",
    },
    {
      id: "irradiation_jambe",
      texte: "Irradiation dans la fesse / l'arrière de la jambe (sciatalgie) ?",
      type: "oui_non",
      aide: "Possible origine lombaire/radiculaire référée.",
    },
    {
      id: "paresthesies",
      texte: "Engourdissements / fourmillements sur le trajet ?",
      type: "oui_non",
      condition: { irradiation_jambe: true },
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

  HYPOTHESES: [
    {
      id: "hamstring_strain",
      nom: "Lésion myo-aponévrotique des ischio-jambiers",
      quadrant: "Postérieur",
      indices: [
        { si: { mecanisme: "sprint_vitesse" }, poids: 3, source: "Pollock 2014 (mécanisme high-speed running) DOI 10.1136/bjsports-2013-093302" },
        { si: { localisation: ["ischio_corps", "ischio_proximal"] }, poids: 2 },
        { si: { pop_dechirure: true }, poids: 1 },
        { si: { douleur_etirement_ischio: true }, poids: 1 },
      ],
    },
    {
      id: "proximal_hamstring_tendinopathy",
      nom: "Tendinopathie proximale des ischio-jambiers",
      quadrant: "Postérieur proximal",
      indices: [
        { si: { localisation: "ischio_proximal" }, poids: 3, source: "Cacchio 2012 DOI 10.1136/bjsports-2011-090325" },
        { si: { douleur_assise_prolongee: true }, poids: 2 },
        { si: { installation: "progressif" }, poids: 2 },
        { si: { douleur_course_acceleration: true }, poids: 1 },
      ],
    },
    {
      id: "ischial_avulsion",
      nom: "Avulsion apophysaire de la tubérosité ischiatique (adolescent)",
      quadrant: "Postérieur proximal",
      indices: [
        { si: { ado_douleur_ischion: true }, poids: 3 },
        { si: { age: "adolescent" }, poids: 1 },
        { si: { mecanisme: "etirement_brutal" }, poids: 1 },
      ],
    },
    {
      id: "rectus_femoris_strain",
      nom: "Lésion du droit fémoral / quadriceps",
      quadrant: "Antérieur",
      indices: [
        { si: { mecanisme: "frappe_armer" }, poids: 3 },
        { si: { localisation: "anterieur_quadriceps" }, poids: 2 },
        { si: { mecanisme: "sprint_vitesse" }, poids: 1 },
        { si: { pop_dechirure: true }, poids: 1 },
      ],
    },
    {
      id: "quadriceps_contusion",
      nom: "Contusion de la cuisse (béquille)",
      quadrant: "Antérieur",
      indices: [
        { si: { mecanisme: "choc_direct_anterieur" }, poids: 3 },
        { si: { localisation: "anterieur_quadriceps" }, poids: 1 },
        { si: { ecchymose_palpable_gap: true }, poids: 1 },
      ],
    },
    {
      id: "adductor_proximal",
      nom: "Lésion proximale des adducteurs (versant cuisse)",
      quadrant: "Médial",
      indices: [
        { si: { localisation: "anteromedial_adducteurs" }, poids: 3 },
        { si: { mecanisme: "demarrage_explosif" }, poids: 1 },
        { si: { installation: "aigu_traumatique" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "hamstring_palpation_length_strength",
      nom: "Palpation + tests de longueur/force des ischio-jambiers",
      technique: "Localiser le site (longueur de douleur, distance à la tubérosité), longueur passive (AKE/SLR), force isométrique en flexion.",
      discrimine: ["hamstring_strain"],
      precision: "La sévérité/le pronostic reposent sur l'IRM (classification 0-4 + a/b/c) ; les systèmes cliniques en 3 grades manquent d'exactitude. Se/Sp d'un test clinique isolé // TODO à sourcer/valider.",
      source: "Pollock 2014 (BJSM) DOI 10.1136/bjsports-2013-093302",
    },
    {
      id: "bent_knee_stretch_tests",
      nom: "Tests de provocation : Puranen-Orava, bent-knee stretch, modified bent-knee stretch",
      discrimine: ["proximal_hamstring_tendinopathy"],
      precision: "Fiabilité élevée (ICC inter-examinateurs 0,82-0,88) et validité modérée-à-élevée, la meilleure étant le modified bent-knee stretch test. À combiner avec l'IRM. Valeurs exactes de Se/Sp // TODO à sourcer/valider (non détaillées dans le résumé).",
      source: "Cacchio 2012 (BJSM) DOI 10.1136/bjsports-2011-090325",
    },
    {
      id: "ischial_avulsion_imaging",
      nom: "Radiographie du bassin (± comparatif)",
      discrimine: ["ischial_avulsion"],
      precision: "Confirme l'avulsion apophysaire ischiatique et son déplacement (oriente conservateur vs chirurgical). Examen clinique : douleur élective de l'ischion + déficit en flexion résistée.",
    },
    {
      id: "rectus_femoris_resisted",
      nom: "Flexion de hanche / extension de genou résistées + palpation (droit fémoral)",
      discrimine: ["rectus_femoris_strain"],
      precision: "Douleur à la contraction résistée et à l'étirement (test de Thomas / Ely). Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "quadriceps_flexion_rom",
      nom: "Amplitude de flexion du genou (gradation de la contusion)",
      discrimine: ["quadriceps_contusion"],
      precision: "La flexion du genou disponible guide la sévérité (légère > 90°, sévère < 45°). Surveiller l'évolution (myosite ossifiante). Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "adductor_squeeze_thigh",
      nom: "Squeeze test des adducteurs + palpation de l'insertion",
      discrimine: ["adductor_proximal"],
      precision: "Adduction isométrique résistée reproduisant la douleur. (Voir aussi le module Hanche/aine pour les valeurs de Se/Sp du squeeze.) Se/Sp ici // TODO à sourcer/valider.",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "avulsion_rupture_proximale_ischio",
      libelle: "Suspicion d'avulsion / rupture proximale des ischio-jambiers",
      si: { ecchymose_palpable_gap: true, deficit_force_flexion_genou: true },
      conduite: "Encoche palpable + déficit de force = IRM + avis chirurgical rapide (les avulsions proximales à ≥2 tendons rétractées bénéficient souvent d'une réparation précoce).",
    },
    {
      id: "avulsion_ischion_ado",
      libelle: "Suspicion d'avulsion apophysaire de l'ischion (adolescent)",
      si: { ado_douleur_ischion: true },
      conduite: "Radiographie du bassin. Fréquent chez l'adolescent sportif sur contraction explosive ; un fragment déplacé peut relever d'un avis chirurgical.",
    },
    {
      id: "myosite_ossifiante",
      libelle: "Risque de myosite ossifiante (après contusion)",
      si: { raideur_perte_flexion_apres_contusion: true },
      conduite: "Perte de flexion / masse dure après contusion : PROSCRIRE massage profond et étirements agressifs ; glace, repos relatif, avis médical + imagerie si persistance.",
    },
    {
      id: "tvp_cuisse",
      libelle: "Suspicion de thrombose veineuse profonde",
      si: { mollet_douloureux_oedeme: true },
      conduite: "Évaluation urgente (score de Wells, écho-doppler). Ne pas masser/mobiliser avant d'éliminer une TVP.",
    },
    {
      id: "origine_lombaire_radiculaire",
      libelle: "Possible origine lombaire / radiculaire",
      si: { irradiation_jambe: true },
      conduite: "Examiner le rachis lombaire : une douleur postérieure de cuisse peut être référée/radiculaire (à distinguer d'une lésion musculaire).",
    },
    {
      id: "tumeur_cuisse",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale (sarcome des tissus mous / osseux) ou infectieuse.",
    },
  ],
};

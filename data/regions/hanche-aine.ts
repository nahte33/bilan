/* =============================================================================
   MODULE CLINIQUE — RÉGION HANCHE / AINE  (v0.2 — BROUILLON À VALIDER)
   =============================================================================
   Contenu clinique porté depuis le fichier de référence `reference/hanche-aine.ts`
   SANS modification du contenu (questions, hypothèses pondérées, tests Se/Sp,
   drapeaux rouges, seuils). Seule la STRUCTURE est transposée au format `Region`
   du moteur (ajout de `nom` ; `fulcrum_hop`, test de dépistage non rattaché à une
   entité de Doha, est porté en `TEST_SCREEN` afin de reproduire le comportement
   du prototype : proposé dès que la douleur à l'appui/impact est signalée).

   COUVERTURE : 4 quadrants
     - Médial / pubien : adducteurs, pubien-symphysaire, inguinal
     - Antérieur       : iliopsoas, intra-articulaire (FAI/labrum), coxa saltans interna
     - Latéral         : tendinopathie fessière (GTPS), coxa saltans externa
     - Postérieur      : syndrome du muscle piriforme / deep gluteal syndrome
     + couche DRAPEAUX_ROUGES transversale.

   CADRE DE RÉFÉRENCE :
     - Accord de Doha sur les douleurs inguinales de l'athlète (Weir et al.,
       Br J Sports Med 2015;49:768-774).
     - Accord de Warwick sur le FAI (2016).

   LÉGENDE DES POIDS (PROVISOIRES — à recalibrer cliniquement) :
       +3 argument fort   |  +2 modéré  |  +1 faible/contributif
   ⚠️ Ce ne sont PAS des probabilités validées. Les Se/Sp indiquées varient
      fortement d'une étude à l'autre : à confirmer.

   Version : v0.2 — Mise à jour : 2026-06-21 — Cycle de revue : à relire par un confrère.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const hancheAine: Region = {
  nom: "Hanche / aine",
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
        { valeur: "pubis_adducteurs", label: "Pubis / insertion des adducteurs" },
        { valeur: "pli_aine_anterieur", label: "Pli de l'aine / face antérieure" },
        { valeur: "profond_intra", label: "Profonde, en C autour de la hanche (signe du C)" },
        { valeur: "lateral_trochanter", label: "Latérale, sur le grand trochanter" },
        { valeur: "posterieur_fessier", label: "Postérieure / fessière" },
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
      id: "debut_contraction_explosive",
      texte: "Début sur une contraction explosive (sprint, frappe, départ) ?",
      type: "oui_non",
      condition: { installation: "aigu_traumatique" },
      aide: "Évoque une avulsion apophysaire chez l'adolescent.",
    },
    {
      id: "geste_declenchant",
      texte: "Gestes qui reproduisent la douleur ?",
      type: "choix_multiple",
      options: [
        { valeur: "frappe", label: "Frappe / shoot" },
        { valeur: "pivot", label: "Changements de direction" },
        { valeur: "sprint", label: "Sprint / accélération" },
        { valeur: "flexion_assise", label: "Flexion profonde / assise basse" },
        { valeur: "montee_genou", label: "Montée du genou / flexion de hanche active" },
        { valeur: "escaliers", label: "Montée d'escaliers" },
        { valeur: "appui_monopodal", label: "Appui monopodal / impact" },
      ],
    },
    {
      id: "ressaut",
      texte: "Sensation de ressaut / claquement de hanche ?",
      type: "oui_non",
    },
    {
      id: "ressaut_localisation",
      texte: "Le ressaut est plutôt...",
      type: "choix_unique",
      condition: { ressaut: true },
      options: [
        { valeur: "anterieur_profond", label: "Antérieur / profond (iliopsoas)" },
        { valeur: "lateral", label: "Latéral, sur le grand trochanter (bandelette)" },
      ],
    },
    {
      id: "accrochage_blocage",
      texte: "Accrochage, blocage ou dérobement ?",
      type: "oui_non",
      aide: "Évoque une atteinte intra-articulaire (labrum).",
    },
    {
      id: "aggravation_assis_prolonge",
      texte: "Aggravation par la position assise prolongée ?",
      type: "oui_non",
      aide: "FAI/labrum (antérieur) ou syndrome du piriforme (postérieur).",
    },
    {
      id: "aggravation_couche_cote",
      texte: "Douleur en position couchée sur le côté atteint / la nuit sur ce côté ?",
      type: "oui_non",
      aide: "Caractéristique de la tendinopathie fessière (GTPS).",
    },
    {
      id: "raideur_matinale_ri",
      texte: "Raideur matinale et/ou perte de rotation interne de hanche ?",
      type: "oui_non",
      aide: "Évoque une coxarthrose.",
    },
    {
      id: "aggravation_valsalva",
      texte: "Aggravation à la toux / éternuement / manœuvre de Valsalva ?",
      type: "oui_non",
      aide: "Évoque une atteinte inguinale ou une hernie vraie.",
    },
    {
      id: "tumefaction_inguinale",
      texte: "Tuméfaction inguinale palpable (visible à l'effort / Valsalva) ?",
      type: "oui_non",
      condition: { localisation: "pli_aine_anterieur" },
      aide: "DRAPEAU : oriente vers une hernie vraie (chirurgicale).",
    },
    {
      id: "irradiation_jambe",
      texte: "Irradiation dans la fesse / l'arrière de la cuisse / la jambe (sciatalgie) ?",
      type: "oui_non",
    },
    {
      id: "paresthesies",
      texte: "Engourdissements / fourmillements / brûlures sur le trajet ?",
      type: "oui_non",
      condition: { irradiation_jambe: true },
      aide: "Composante neurologique (atteinte du nerf sciatique).",
    },
    {
      id: "douleur_appui_impact",
      texte: "Douleur à l'appui monopodal, au saut ou à l'impact (hop) ?",
      type: "oui_non",
      aide: "DRAPEAU possible : fracture de fatigue du col fémoral.",
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
    {
      id: "pic_charge",
      texte: "Augmentation récente et marquée de la charge d'entraînement ?",
      type: "oui_non",
    },
    {
      id: "facteurs_red_s",
      texte: "Faible disponibilité énergétique (RED-S) : restriction, aménorrhée, antécédent de fracture de fatigue ?",
      type: "oui_non",
      aide: "Majore le risque de fracture de fatigue du col fémoral.",
    },
    {
      id: "douleur_cyclique_urogenital",
      texte: "Douleur cyclique ou signes urinaires / gynécologiques associés ?",
      type: "oui_non",
      aide: "Évoque une cause intrapelvienne (non musculosquelettique).",
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
      id: "irradiation_lombaire",
      texte: "Lombalgie associée ?",
      type: "oui_non",
      aide: "Possible origine rachidienne référée.",
    },
  ],

  // ===========================================================================
  // 2) HYPOTHÈSES (10 entités, 4 quadrants)
  // ===========================================================================
  HYPOTHESES: [
    {
      id: "adducteurs",
      nom: "Douleur liée aux adducteurs (tendinopathie / lésion de l'adducteur long)",
      quadrant: "Médial",
      indices: [
        { si: { localisation: "pubis_adducteurs" }, poids: 3, source: "Doha 2015 ; Hölmich 2004 (origine ADL = site principal, 94%)" },
        { si: { geste_declenchant: "frappe" }, poids: 2 },
        { si: { geste_declenchant: "pivot" }, poids: 1 },
        { si: { installation: "aigu_traumatique" }, poids: 1 },
      ],
    },
    {
      id: "pubien_symphyse",
      nom: "Douleur pubienne / symphysaire (pubalgie symphysaire)",
      quadrant: "Médial",
      indices: [
        { si: { localisation: "pubis_adducteurs" }, poids: 2, source: "Doha 2015" },
        { si: { installation: "progressif" }, poids: 2 },
        { si: { pic_charge: true }, poids: 1 },
      ],
    },
    {
      id: "inguinal",
      nom: "Douleur inguinale (paroi / canal inguinal)",
      quadrant: "Médial",
      indices: [
        { si: { localisation: "pli_aine_anterieur" }, poids: 2, source: "Doha 2015" },
        { si: { aggravation_valsalva: true }, poids: 2 },
        { si: { geste_declenchant: "sprint" }, poids: 1 },
      ],
    },
    {
      id: "psoas",
      nom: "Douleur liée à l'iliopsoas",
      quadrant: "Antérieur",
      indices: [
        { si: { localisation: "pli_aine_anterieur" }, poids: 2, source: "Doha 2015" },
        { si: { geste_declenchant: "montee_genou" }, poids: 3 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "fai_labral",
      nom: "Atteinte intra-articulaire (conflit fémoro-acétabulaire / lésion du labrum)",
      quadrant: "Antérieur",
      indices: [
        { si: { localisation: "profond_intra" }, poids: 3, source: "Accord de Warwick 2016 (FAI : effet came / effet pince)" },
        { si: { accrochage_blocage: true }, poids: 2 },
        { si: { geste_declenchant: "flexion_assise" }, poids: 2 },
        { si: { aggravation_assis_prolonge: true }, poids: 1 },
      ],
    },
    {
      id: "coxa_saltans_interna",
      nom: "Coxa saltans interna (ressaut interne de l'iliopsoas)",
      quadrant: "Antérieur",
      indices: [
        { si: { ressaut: true }, poids: 3 },
        { si: { ressaut_localisation: "anterieur_profond" }, poids: 2 },
        { si: { localisation: "pli_aine_anterieur" }, poids: 1 },
      ],
    },
    {
      id: "gluteal_tendinopathy",
      nom: "Tendinopathie fessière / GTPS (moyen et petit fessiers)",
      quadrant: "Latéral",
      indices: [
        { si: { localisation: "lateral_trochanter" }, poids: 3, source: "Grimaldi 2015 ; Mathew (GTPS = tendinopathie GMed/GMin, non bursite)" },
        { si: { aggravation_couche_cote: true }, poids: 2 },
        { si: { geste_declenchant: "escaliers" }, poids: 1 },
        { si: { geste_declenchant: "appui_monopodal" }, poids: 1 },
      ],
    },
    {
      id: "coxa_saltans_externa",
      nom: "Coxa saltans externa (ressaut externe, bandelette ilio-tibiale)",
      quadrant: "Latéral",
      indices: [
        { si: { ressaut: true }, poids: 2 },
        { si: { ressaut_localisation: "lateral" }, poids: 3 },
        { si: { localisation: "lateral_trochanter" }, poids: 1 },
      ],
    },
    {
      id: "deep_gluteal_piriforme",
      nom: "Syndrome glutéal profond / piriforme (compression non discale du nerf sciatique)",
      quadrant: "Postérieur",
      indices: [
        { si: { localisation: "posterieur_fessier" }, poids: 3, source: "Martin 2014 ; Carro 2016 (deep gluteal syndrome)" },
        { si: { aggravation_assis_prolonge: true }, poids: 2 },
        { si: { irradiation_jambe: true }, poids: 2 },
        { si: { paresthesies: true }, poids: 1 },
      ],
    },
    {
      id: "coxarthrose",
      nom: "Coxarthrose (arthrose de hanche)",
      quadrant: "Antérieur / intra-articulaire",
      indices: [
        { si: { raideur_matinale_ri: true }, poids: 3 },
        { si: { age: "plus_50" }, poids: 2 },
        { si: { localisation: "profond_intra" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
  ],

  // ===========================================================================
  // 3) TESTS PROPOSÉS (avec valeur diagnostique quand documentée)
  // ===========================================================================
  TESTS: [
    {
      id: "palpation_adducteur_long",
      nom: "Palpation de l'origine de l'adducteur long",
      discrimine: ["adducteurs"],
      precision: "Site de douleur le plus prévalent dans l'atteinte des adducteurs (94%). Fiabilité inter-examinateur seulement faible à modérée.",
      source: "Heijboer 2024 ; Hölmich 2004",
    },
    {
      id: "squeeze_test",
      nom: "Squeeze test des adducteurs (0° et 45°)",
      technique: "Adduction isométrique contre le poing/genou ; reproduction de la douleur inguinale.",
      discrimine: ["adducteurs", "pubien_symphyse"],
      precision: "Positif dans 62-70% des cas, reproductibilité modérée. Précision >90% pour localiser les atteintes AIGUËS des adducteurs.",
      source: "Verrall 2005 ; Serner 2016 ; Heijboer 2024",
    },
    {
      id: "adduction_resistee_abduction_max",
      nom: "Adduction résistée en abduction maximale",
      discrimine: ["adducteurs"],
      precision: "Test de résistance positif le plus prévalent (72%), fiabilité substantielle. À inclure pour ne pas manquer un test positif en flexion.",
      source: "Heijboer 2024",
    },
    {
      id: "flexion_hanche_resistee",
      nom: "Flexion de hanche résistée + étirement (Thomas)",
      technique: "Douleur à la flexion résistée et/ou à l'étirement de l'iliopsoas.",
      discrimine: ["psoas"],
      precision: "Difficulté connue à distinguer iliopsoas et droit fémoral proximal sur l'examen clinique seul.",
      source: "Doha 2015 ; Serner 2018 (JOSPT)",
    },
    {
      id: "crunch_resiste",
      nom: "Sit-up / crunch résisté + palpation pubienne",
      discrimine: ["inguinal", "pubien_symphyse"],
    },
    {
      id: "fadir",
      nom: "FADIR (flexion-adduction-rotation interne)",
      technique: "Reproduction d'une douleur antérieure profonde.",
      discrimine: ["fai_labral"],
      precision: "Sensibilité élevée (≈0,96 ; intervalles larges 0,43-1,0 selon les études), spécificité FAIBLE (≈0,11). => bon test pour ÉLIMINER (rule-out) une atteinte intra-articulaire, pas pour confirmer.",
      source: "Reiman 2013 (méta-analyse, BJSM) ; Shanmugaraj 2020",
    },
    {
      id: "faber",
      nom: "FABER (Patrick)",
      technique: "Flexion-abduction-rotation externe ; pied au-dessus du genou opposé.",
      discrimine: ["fai_labral"],
      precision: "Sensibilité FAIBLE (≈41%) mais spécificité ÉLEVÉE (jusqu'à 100% pour le labrum) => bon test pour CONFIRMER (rule-in). Douleur postérieure controlatérale -> orienter vers la sacro-iliaque.",
      source: "Dhillon 2025 (revue systématique) ; Tijssen 2012",
    },
    {
      id: "log_roll",
      nom: "Log roll (rotation passive en décubitus)",
      discrimine: ["fai_labral"],
      precision: "Un des tests les plus spécifiques de l'origine intra-articulaire (peu de sollicitation des tissus péri-articulaires).",
    },
    {
      id: "ressaut_actif",
      nom: "Reproduction active du ressaut",
      technique: "Passage flexion-abduction-RE vers extension-adduction-RI ; ressaut palpable/audible.",
      discrimine: ["coxa_saltans_interna", "coxa_saltans_externa"],
    },
    {
      id: "palpation_trochanter_sls",
      nom: "Palpation du grand trochanter + appui monopodal 30 s",
      discrimine: ["gluteal_tendinopathy"],
      precision: "Palpation : Se ≈80%, Sp ≈47% (sensible mais peu spécifique). Appui monopodal 30 s : plus spécifique.",
      source: "Grimaldi ; Ganderton ; physiotutors (synthèse)",
    },
    {
      id: "fader_r_add_r",
      nom: "FADER-R / ADD-R (résistés)",
      technique: "Mise en compression-tension des tendons fessiers en flexion-ADD-RE puis RI isométrique résistée.",
      discrimine: ["gluteal_tendinopathy"],
    },
    {
      id: "piriforme_actif",
      nom: "Test du piriforme actif / étirement assis (FAIR)",
      discrimine: ["deep_gluteal_piriforme"],
      precision: "Piriforme actif : Se ≈78%, Sp ≈80%. Étirement assis du piriforme : Se ≈52%, Sp ≈90%. (Données d'une seule étude => valeur clinique modérée.)",
      source: "Martin 2014 (KSSTA)",
    },
  ],

  // Test de dépistage non rattaché à une entité de Doha : sert le drapeau rouge
  // fracture. Proposé dès que la douleur à l'appui/impact est signalée.
  TEST_SCREEN: {
    id: "fulcrum_hop",
    nom: "Fulcrum test + appui/saut monopodal (DÉPISTAGE FRACTURE)",
    siRep: "douleur_appui_impact",
    technique: "Pression dorsale sur le genou, cuisse en bord de table ; douleur focale = suspect.",
    precision: "Fulcrum = test clinique le plus valide pour la fracture de fatigue du col ; hop sensible mais à manier avec prudence. ⚠️ Radiographie souvent NORMALE au début -> IRM si suspicion.",
    source: "Physiopedia (Femoral Stress Fracture) ; JOSPT 2018",
  },

  // ===========================================================================
  // 4) DRAPEAUX ROUGES (priment sur le classement)
  // ===========================================================================
  DRAPEAUX_ROUGES: [
    {
      id: "fracture_col_femoral",
      libelle: "Suspicion de fracture de fatigue du col fémoral",
      si: { douleur_appui_impact: true },
      conduite: "Mise en décharge + IRM (la radiographie est souvent normale au début). NE PAS charger. RED-S et pic de charge = facteurs aggravants. Risque d'ostéonécrose si déplacement.",
      source: "Bui & Papadakis ; JOSPT 2018 ; Nattiv 2013",
    },
    {
      id: "hernie_vraie",
      libelle: "Suspicion de hernie inguinale/fémorale vraie",
      si: { tumefaction_inguinale: true },
      conduite: "Examen ciblé + avis chirurgical. À distinguer de l'atteinte inguinale (Doha), qui n'a pas de hernie palpable.",
      source: "Doha 2015 (catégorie 'autres causes')",
    },
    {
      id: "avulsion_apophysaire",
      libelle: "Suspicion d'avulsion apophysaire",
      si: { debut_contraction_explosive: true, age: "adolescent" },
      conduite: "Radiographie. Fréquent chez l'adolescent sportif (EIAS/sartorius, EIAI/droit fémoral, petit trochanter/iliopsoas, ischion/ischio-jambiers).",
    },
    {
      id: "epiphysiolyse",
      libelle: "Suspicion d'épiphysiolyse fémorale supérieure (SCFE)",
      si: { age: "adolescent", localisation: "profond_intra" },
      conduite: "Urgence orthopédique. Radiographie hanche/bassin. Douleur de hanche OU de genou + boiterie chez l'adolescent.",
    },
    {
      id: "infection_articulaire",
      libelle: "Suspicion d'arthrite septique / infection",
      si: { signes_systemiques: true },
      conduite: "Avis médical urgent (urgences).",
    },
    {
      id: "tumeur_osseuse",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale ou inflammatoire.",
    },
    {
      id: "origine_lombaire_radiculaire",
      libelle: "Possible origine rachidienne / radiculaire",
      si: { irradiation_jambe: true },
      conduite: "Examiner le rachis lombaire et éliminer une sciatique discogène AVANT de conclure à une cause locale.",
      source: "Carro 2016 (DDx du deep gluteal syndrome)",
    },
    {
      id: "cause_intrapelvienne",
      libelle: "Possible cause intrapelvienne (non MSK)",
      si: { douleur_cyclique_urogenital: true },
      conduite: "Orienter vers un avis médical (urologique / gynécologique).",
    },
  ],
};

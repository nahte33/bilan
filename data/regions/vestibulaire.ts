/* =============================================================================
   MODULE CLINIQUE — VERTIGES & ÉQUILIBRE (VESTIBULAIRE)  (v0.1 — À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed) ou marquées TODO. NON relu / NON testé.

   PÉRIMÈTRE : vertige positionnel paroxystique bénin (VPPB canal postérieur et
   latéral), névrite vestibulaire, vertige d'origine cervicale, maladie de
   Ménière (orientation). HORS : vertige central (DRAPEAU → avis neuro urgent).

   SOURCES (PubMed + DOI) :
     - Halker 2008 (Neurologist) DOI 10.1097/NRL.0b013e31816f2820 : Dix-Hallpike
       pour le VPPB du canal postérieur — Se ≈ 79 % (IC 65-94), Sp ≈ 75 %,
       LR− ≈ 0,28 (méthodologie faible). Side-lying : Se ≈ 90 %, LR− ≈ 0,14.
     - Bhattacharyya 2017 (Otolaryngol Head Neck Surg, CPG VPPB)
       DOI 10.1177/0194599816689667 : VPPB canal postérieur = nystagmus
       torsionnel-vertical déclenché par Dix-Hallpike ; supine roll test si
       Dix-Hallpike horizontal/négatif ; manœuvre de repositionnement (Epley)
       en traitement ; pas d'imagerie si critères remplis.
     - Hilton 2014 (Cochrane) DOI 10.1002/14651858.CD003162.pub3 : la manœuvre
       d'Epley est efficace sur le VPPB du canal postérieur.

   Version : v0.1 — 2026-07-05 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const vestibulaire: Region = {
  nom: "Vertiges & équilibre",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "declencheur",
      texte: "Qu'est-ce qui déclenche le vertige ?",
      type: "choix_unique",
      options: [
        { valeur: "changement_position", label: "Changement de position de la tête (se retourner au lit, lever la tête)" },
        { valeur: "spontane", label: "Spontané, sans facteur positionnel" },
        { valeur: "mouvements_cou", label: "Mouvements soutenus du cou" },
      ],
    },
    {
      id: "duree_crise",
      texte: "Durée typique d'une crise ?",
      type: "choix_unique",
      options: [
        { valeur: "secondes", label: "Quelques secondes (< 1 min)" },
        { valeur: "minutes_heures", label: "Minutes à heures" },
        { valeur: "jours", label: "Continu, plusieurs jours" },
      ],
    },
    {
      id: "type_sensation",
      texte: "Type de sensation ?",
      type: "choix_unique",
      options: [
        { valeur: "rotatoire", label: "Rotatoire (l'environnement tourne)" },
        { valeur: "instabilite", label: "Instabilité / déséquilibre sans rotation" },
      ],
    },
    {
      id: "acouphenes_hypoacousie",
      texte: "Acouphènes et/ou baisse d'audition associés ?",
      type: "oui_non",
      aide: "Oriente vers une atteinte de l'oreille interne (Ménière, atteinte cochléo-vestibulaire).",
    },
    {
      id: "plenitude_auriculaire",
      texte: "Sensation de plénitude / pression dans l'oreille ?",
      type: "oui_non",
      aide: "Évoque une maladie de Ménière.",
    },
    {
      id: "post_viral",
      texte: "Épisode viral récent, puis vertige intense continu ?",
      type: "oui_non",
      aide: "Évoque une névrite vestibulaire.",
    },
    {
      id: "cervicalgie_associee",
      texte: "Cervicalgie / raideur du cou associée au vertige ?",
      type: "oui_non",
      aide: "Vertige cervicogénique (diagnostic d'élimination).",
    },
    {
      id: "signes_neuro_centraux",
      texte: "Signes neurologiques : diplopie, dysarthrie, trouble de la déglutition, faiblesse, céphalée brutale ?",
      type: "oui_non",
      aide: "DRAPEAU : vertige d'origine centrale (AVC/TIA) — avis urgent.",
    },
    {
      id: "nystagmus_atypique",
      texte: "Nystagmus vertical pur, non fatigable, ou ne suivant pas un schéma périphérique ?",
      type: "oui_non",
      aide: "DRAPEAU : évoque une cause centrale.",
    },
    {
      id: "instabilite_marche_severe",
      texte: "Impossibilité de tenir debout / de marcher sans aide pendant la crise ?",
      type: "oui_non",
      aide: "DRAPEAU : oriente vers une cause centrale plutôt que périphérique.",
    },
  ],

  HYPOTHESES: [
    {
      id: "vppb_posterieur",
      nom: "VPPB du canal postérieur",
      quadrant: "Périphérique",
      indices: [
        { si: { declencheur: "changement_position" }, poids: 3, source: "Bhattacharyya 2017 (CPG VPPB) DOI 10.1177/0194599816689667" },
        { si: { duree_crise: "secondes" }, poids: 3 },
        { si: { type_sensation: "rotatoire" }, poids: 1 },
      ],
    },
    {
      id: "vppb_lateral",
      nom: "VPPB du canal latéral (horizontal)",
      quadrant: "Périphérique",
      indices: [
        { si: { declencheur: "changement_position" }, poids: 2, source: "Bhattacharyya 2017 DOI 10.1177/0194599816689667" },
        { si: { duree_crise: "secondes" }, poids: 2 },
      ],
    },
    {
      id: "nevrite_vestibulaire",
      nom: "Névrite vestibulaire",
      quadrant: "Périphérique",
      indices: [
        { si: { post_viral: true }, poids: 3 },
        { si: { duree_crise: "jours" }, poids: 2 },
        { si: { declencheur: "spontane" }, poids: 1 },
      ],
    },
    {
      id: "meniere",
      nom: "Maladie de Ménière (orientation)",
      quadrant: "Périphérique",
      indices: [
        { si: { acouphenes_hypoacousie: true }, poids: 2 },
        { si: { plenitude_auriculaire: true }, poids: 2 },
        { si: { duree_crise: "minutes_heures" }, poids: 1 },
      ],
    },
    {
      id: "vertige_cervicogenique",
      nom: "Vertige cervicogénique (diagnostic d'élimination)",
      quadrant: "Cervical",
      indices: [
        { si: { cervicalgie_associee: true }, poids: 2 },
        { si: { declencheur: "mouvements_cou" }, poids: 2 },
        { si: { type_sensation: "instabilite" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "dix_hallpike",
      nom: "Manœuvre de Dix-Hallpike",
      technique: "Patient assis, tête tournée 45° d'un côté ; passage rapide en décubitus tête en légère extension, oreille atteinte vers le bas. Recherche d'un nystagmus torsionnel-vertical (upbeat) après brève latence, fatigable.",
      discrimine: ["vppb_posterieur"],
      precision: "Standard diagnostique du VPPB du canal postérieur. Se ≈ 79 % (IC 65-94), Sp ≈ 75 %, LR− ≈ 0,28 (Halker 2008 ; méthodologie faible). Un nystagmus torsionnel-vertical positionnel confirme le VPPB postérieur.",
      source: "Halker 2008 DOI 10.1097/NRL.0b013e31816f2820 ; Bhattacharyya 2017 DOI 10.1177/0194599816689667",
    },
    {
      id: "supine_roll_test",
      nom: "Supine roll test (test de McClure-Pagnini)",
      technique: "En décubitus dorsal, tête fléchie 20°, rotation rapide de la tête d'un côté puis de l'autre ; recherche d'un nystagmus horizontal.",
      discrimine: ["vppb_lateral"],
      precision: "Test de référence pour le VPPB du canal latéral, à réaliser si le Dix-Hallpike montre un nystagmus horizontal ou est négatif malgré une histoire compatible.",
      source: "Bhattacharyya 2017 (CPG VPPB) DOI 10.1177/0194599816689667",
    },
    {
      id: "epley_traitement",
      nom: "Manœuvre de repositionnement d'Epley (canal postérieur)",
      technique: "Séquence de repositionnement des otoconies pour le VPPB du canal postérieur.",
      discrimine: ["vppb_posterieur"],
      precision: "Traitement de 1re intention du VPPB postérieur ; efficacité démontrée (Cochrane). Pas de restriction posturale nécessaire après la manœuvre.",
      source: "Hilton 2014 (Cochrane) DOI 10.1002/14651858.CD003162.pub3 ; Bhattacharyya 2017 DOI 10.1177/0194599816689667",
    },
    {
      id: "hints_exam",
      nom: "Examen HINTS (Head Impulse, Nystagmus, Test of Skew)",
      technique: "Dans un vertige aigu continu : Head Impulse normal, nystagmus vertical/changeant de direction, ou skew deviation orientent vers une cause CENTRALE.",
      discrimine: ["nevrite_vestibulaire"],
      precision: "Aide à distinguer une atteinte périphérique (névrite) d'une cause centrale dans le syndrome vestibulaire aigu. Un HINTS « central » impose un avis urgent. Valeurs opérateur-dépendantes // TODO à re-sourcer précisément.",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "vertige_central",
      libelle: "Suspicion de vertige d'origine centrale (AVC/TIA)",
      si: { signes_neuro_centraux: true },
      conduite: "Signes neurologiques associés : urgence, avis neurologique immédiat (imagerie). Ne pas rééduquer avant élimination d'une cause centrale.",
      source: "Bhattacharyya 2017 (différencier VPPB des autres causes) DOI 10.1177/0194599816689667",
    },
    {
      id: "nystagmus_central",
      libelle: "Nystagmus de type central",
      si: { nystagmus_atypique: true },
      conduite: "Nystagmus vertical pur/non fatigable/atypique : orienter vers une cause centrale → avis spécialisé.",
    },
    {
      id: "instabilite_severe_centrale",
      libelle: "Instabilité majeure évoquant une cause centrale",
      si: { instabilite_marche_severe: true },
      conduite: "Impossibilité de tenir debout : évoque une atteinte centrale plutôt qu'un VPPB — avis médical.",
    },
  ],
};

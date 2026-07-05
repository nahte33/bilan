/* =============================================================================
   PROTOCOLES DE RÉÉDUCATION — synthèses de protocoles PUBLIÉS
   Version : v0.1 — 2026-07-05.
   ⚠️ Synthèses pédagogiques : appliquer selon le patient et l'avis médical.
   Les critères de progression priment sur les délais. Sources citées.
   ============================================================================= */
import type { Protocole } from "@/lib/contenu/types";

export const PROTOCOLES: Protocole[] = [
  {
    id: "alfredson_achille",
    nom: "Protocole excentrique d'Alfredson (tendinopathie corporéale du tendon d'Achille)",
    regions: ["cheville_pied"],
    pathologie: "Tendinopathie du corps du tendon d'Achille",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Programme d'exercices excentriques du triceps sural, 2 fois par jour, 7 j/7, pendant 12 semaines. Douleur modérée tolérée pendant l'exercice.",
    phases: [
      {
        nom: "Programme unique (12 semaines)",
        duree: "12 semaines",
        objectifs: ["Réduire la douleur", "Restaurer la capacité de charge du tendon"],
        contenu: [
          "3 × 15 répétitions genou tendu + 3 × 15 genou fléchi",
          "2 fois par jour, 7 jours sur 7 (soit 180 répétitions/jour)",
          "Phase excentrique : descente du talon sous le niveau de la marche, remontée avec le membre sain",
          "Progression par ajout de charge (sac à dos) quand l'exercice devient indolore",
        ],
        criteresProgression: ["Douleur devenue faible/absente à charge donnée → augmenter la charge"],
      },
    ],
    precautions: [
      "Distinguer atteinte corporéale (protocole validé) et insertionnelle (amplitude de descente à limiter).",
    ],
    sources: [
      { label: "Alfredson H et al. Am J Sports Med 1998", pubmedId: "9617396" },
    ],
  },
  {
    id: "hsr_tendinopathie",
    nom: "Heavy Slow Resistance (tendinopathie patellaire / achilléenne)",
    regions: ["genou", "cheville_pied"],
    pathologie: "Tendinopathie patellaire ou achilléenne",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Renforcement lourd et lent (3 s concentrique / 3 s excentrique), 3 séances/semaine, charges croissantes. Alternative efficace à l'excentrique isolé.",
    phases: [
      {
        nom: "Programme (≈ 12 semaines)",
        duree: "12 semaines",
        objectifs: ["Améliorer douleur et fonction", "Adaptation du tendon"],
        contenu: [
          "3 exercices (ex. squat, presse, hack squat) 3 fois/semaine",
          "Tempo lent : 3 s excentrique + 3 s concentrique",
          "Progression de charge : de 15RM (sem. 1) vers 6RM (sem. 9–12)",
          "Douleur ≤ 3/10 tolérée, doit se calmer au repos",
        ],
        criteresProgression: ["Tolérance à la charge sans exacerbation > 24 h"],
      },
    ],
    sources: [
      { label: "Kongsgaard M et al. Scand J Med Sci Sports 2009", pubmedId: "19793213" },
      { label: "Beyer R et al. Am J Sports Med 2015 (HSR vs excentrique, Achille)", pubmedId: "26018970" },
    ],
  },
  {
    id: "nordic_ischio",
    nom: "Nordic Hamstring (prévention des lésions ischio-jambières)",
    regions: ["cuisse"],
    pathologie: "Prévention primaire/secondaire des lésions des ischio-jambiers",
    populations: ["sportif"],
    resume:
      "Exercice excentrique nordique intégré à l'entraînement ; réduit d'environ moitié l'incidence des lésions ischio-jambières dans les sports de course.",
    phases: [
      {
        nom: "Programme de prévention",
        objectifs: ["Augmenter la force excentrique des ischio-jambiers", "Réduire l'incidence des lésions"],
        contenu: [
          "Progression sur ~10 semaines puis entretien",
          "Volume type : de 2×5 (sem. 1) à 3×12–10-8 (sem. 5+), 1–3 séances/semaine",
          "Contrôle de la descente le plus loin possible, retour aidé par les mains",
        ],
        criteresProgression: ["Augmenter volume/amplitude selon tolérance (courbatures)"],
      },
    ],
    precautions: ["Introduire progressivement (courbatures marquées au début)."],
    sources: [
      { label: "Petersen J et al. Am J Sports Med 2011", pubmedId: "21460189" },
      { label: "van Dyk N et al. Br J Sports Med 2019 (méta-analyse prévention)", pubmedId: "30846437" },
    ],
  },
  {
    id: "entorse_cheville",
    nom: "Rééducation fonctionnelle de l'entorse latérale de cheville",
    regions: ["cheville_pied"],
    pathologie: "Entorse latérale de cheville (LLE)",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Traitement fonctionnel (mobilisation précoce protégée + exercices), supérieur à l'immobilisation prolongée. Exercices neuromusculaires pour prévenir la récidive.",
    phases: [
      {
        nom: "Phase précoce (protection)",
        duree: "≈ J0–J7",
        objectifs: ["Contrôler douleur/œdème", "Charge protégée"],
        contenu: ["PEACE & LOVE / gestion de charge", "Mobilité active en dorsiflexion", "Appui selon douleur, aide de contention si besoin"],
      },
      {
        nom: "Phase de récupération",
        duree: "≈ S1–S3",
        objectifs: ["Restaurer amplitude et force", "Débuter proprioception"],
        contenu: ["Renforcement fibulaires/triceps", "Équilibre unipodal progressif", "Reprise marche normale"],
        criteresProgression: ["Appui complet indolore", "Amplitude symétrique"],
      },
      {
        nom: "Retour à l'activité",
        duree: "≈ S3+",
        objectifs: ["Réathlétisation", "Prévention de la récidive"],
        contenu: ["Exercices neuromusculaires/proprioceptifs", "Sauts, changements de direction progressifs", "Programme d'entretien"],
        criteresProgression: ["Hop tests symétriques", "Confiance et contrôle en pivot"],
      },
    ],
    sources: [
      { label: "Vuurberg G et al. Br J Sports Med 2018 (recommandations)", pubmedId: "29514819" },
    ],
  },
  {
    id: "lca_criteres",
    nom: "Rééducation du LCA basée sur des critères (retour au sport)",
    regions: ["genou"],
    pathologie: "Reconstruction / rupture du ligament croisé antérieur",
    populations: ["sportif", "post_operatoire"],
    resume:
      "Progression fondée sur l'atteinte de critères (force, hop tests, contrôle) plutôt que sur le seul délai. Retard du retour au sport et symétrie de force associés à moins de re-ruptures.",
    phases: [
      {
        nom: "Phase précoce",
        objectifs: ["Extension complète", "Contrôle de l'effusion", "Réveil quadricipital"],
        contenu: ["Mobilité, verrouillage quadricipital", "Marche sans boiterie", "Contrôle œdème/douleur"],
        criteresProgression: ["Extension symétrique, bon contrôle quadricipital"],
      },
      {
        nom: "Renforcement / neuromusculaire",
        objectifs: ["Restaurer force et contrôle", "Réintroduire la course"],
        contenu: ["Renforcement progressif", "Travail neuromusculaire/pliométrie de base"],
        criteresProgression: ["Symétrie de force quadriceps (LSI) en progression"],
      },
      {
        nom: "Retour au sport",
        objectifs: ["Réathlétisation complète", "Réduire le risque de récidive"],
        contenu: ["Pliométrie, agilité spécifiques", "Batterie de hop tests"],
        criteresProgression: [
          "LSI force quadriceps ≥ 90 %",
          "Hop tests ≥ 90 % du côté sain",
          "Retour au sport pivot différé (souvent ≥ 9 mois selon critères)",
        ],
      },
    ],
    precautions: ["Décision partagée avec le chirurgien ; les critères priment sur les délais."],
    sources: [
      { label: "van Melick N et al. Br J Sports Med 2016 (consensus rééducation LCA)", pubmedId: "27539507" },
      { label: "Grindem H et al. Br J Sports Med 2016 (retour au sport & re-rupture)", pubmedId: "27162233" },
    ],
  },
];

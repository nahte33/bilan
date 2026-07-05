/* =============================================================================
   BIBLIOTHÈQUE D'EXERCICES
   Version : v0.1 — 2026-07-05.
   ⚠️ Le dosage doit être individualisé. Références citées quand le protocole
   est publié ; sinon marqué à valider.
   ============================================================================= */
import type { Exercice } from "@/lib/contenu/types";

export const EXERCICES: Exercice[] = [
  {
    id: "heel_drop_excentrique",
    nom: "Heel-drop excentrique (triceps sural)",
    regions: ["cheville_pied"],
    objectif: "Charge du tendon d'Achille (tendinopathie corporéale)",
    phases: ["Renforcement"],
    description:
      "Sur une marche, montée bipodale puis descente lente unipodale du talon sous le niveau de la marche. Genou tendu puis fléchi.",
    dosage: "3 × 15 genou tendu + 3 × 15 genou fléchi, 2×/jour (protocole Alfredson).",
    progression: "Ajout de charge (sac à dos) quand indolore.",
    sources: [{ label: "Alfredson H et al. Am J Sports Med 1998", pubmedId: "9617396" }],
  },
  {
    id: "nordic_hamstring",
    nom: "Nordic hamstring curl",
    regions: ["cuisse"],
    objectif: "Force excentrique des ischio-jambiers (prévention)",
    phases: ["Prévention", "Renforcement"],
    description:
      "À genoux, chevilles maintenues, descente contrôlée du tronc vers l'avant le plus loin possible, retour aidé des mains.",
    dosage: "Progression de 2×5 à 3×12-10-8, 1–3×/semaine.",
    progression: "Augmenter amplitude/volume ; ralentir la descente.",
    sources: [{ label: "Petersen J et al. Am J Sports Med 2011", pubmedId: "21460189" }],
  },
  {
    id: "decline_squat",
    nom: "Decline squat (plan incliné)",
    regions: ["genou"],
    objectif: "Charge du tendon patellaire (tendinopathie)",
    phases: ["Renforcement"],
    description:
      "Squat unipodal sur plan incliné (~25°), contrôle de la descente.",
    dosage: "3 × 15, tempo lent ; douleur ≤ 3/10 tolérée.",
    progression: "Charge additionnelle progressive.",
    sources: [{ label: "Purdam CR et al. Br J Sports Med 2004 (excentrique decline)", pubmedId: "15039255" }],
  },
  {
    id: "equilibre_unipodal",
    nom: "Équilibre unipodal progressif",
    regions: ["cheville_pied", "genou"],
    objectif: "Contrôle neuromusculaire / prévention de la récidive d'entorse",
    phases: ["Proprioception", "Retour au sport"],
    description:
      "Appui unipodal, yeux ouverts puis fermés, sur surface stable puis instable, ajout de perturbations/tâches.",
    dosage: "Séries de 30 s, plusieurs répétitions ; progression par instabilité.",
    sources: [{ label: "Vuurberg G et al. Br J Sports Med 2018 (entorse de cheville)", pubmedId: "29514819" }],
  },
  {
    id: "copenhagen_adduction",
    nom: "Copenhagen adduction (adducteurs)",
    regions: ["hanche_aine"],
    objectif: "Renforcement excentrique des adducteurs / prévention des douleurs d'aine",
    phases: ["Prévention", "Renforcement"],
    description:
      "Planche latérale, jambe supérieure en appui sur un banc ou tenue par un partenaire : élévation-abaissement contrôlé du corps par les adducteurs.",
    dosage: "Intégré à l'échauffement (type FIFA 11+), progression de 2×6 à 3×15 selon le niveau ; le programme a réduit de 41 % les problèmes d'aine chez des footballeurs.",
    progression: "Augmenter le bras de levier (appui genou → appui cheville), puis le volume.",
    regression: "Version genou fléchi sur le banc (bras de levier court).",
    sources: [
      { label: "Harøy J et al. Br J Sports Med 2019 (essai randomisé en clusters)", pubmedId: "29891614", doi: "10.1136/bjsports-2017-098937" },
    ],
  },
  {
    id: "exercice_thoracique_ext",
    nom: "Mobilité thoracique en extension",
    regions: ["rachis_thoracique", "rachis_cervical"],
    objectif: "Mobilité thoracique (cervicalgie, posture)",
    phases: ["Mobilité"],
    description: "Extension thoracique sur rouleau/dossier, respiration ample.",
    dosage: "10–15 répétitions, plusieurs fois/jour.",
    sources: [{ label: "Exercice usuel de mobilité — à individualiser" }],
    aValider: true,
  },
];

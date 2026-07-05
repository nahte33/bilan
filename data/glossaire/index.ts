/* =============================================================================
   GLOSSAIRE EBP — définitions de lecture critique
   Version : v0.1 — 2026-07-05. Définitions standard d'épidémiologie clinique.
   ============================================================================= */
import type { TermeGlossaire } from "@/lib/contenu/types";

export const GLOSSAIRE: TermeGlossaire[] = [
  {
    id: "sensibilite",
    terme: "Sensibilité",
    sigle: "Se",
    definition:
      "Proportion de personnes réellement atteintes qui sont correctement détectées par le test (vrais positifs). Un test très sensible, s'il est négatif, aide à écarter (rule-out).",
    formule: "Se = VP / (VP + FN)",
    exemple: "SnNout : « Sensitive test, Negative, rules OUT ».",
  },
  {
    id: "specificite",
    terme: "Spécificité",
    sigle: "Sp",
    definition:
      "Proportion de personnes réellement indemnes qui sont correctement identifiées comme négatives (vrais négatifs). Un test très spécifique, s'il est positif, aide à confirmer (rule-in).",
    formule: "Sp = VN / (VN + FP)",
    exemple: "SpPin : « Specific test, Positive, rules IN ».",
  },
  {
    id: "vpp",
    terme: "Valeur prédictive positive",
    sigle: "VPP",
    definition:
      "Probabilité qu'une personne dont le test est positif soit réellement atteinte. Dépend fortement de la prévalence.",
    formule: "VPP = VP / (VP + FP)",
  },
  {
    id: "vpn",
    terme: "Valeur prédictive négative",
    sigle: "VPN",
    definition:
      "Probabilité qu'une personne dont le test est négatif soit réellement indemne. Dépend de la prévalence.",
    formule: "VPN = VN / (VN + FN)",
  },
  {
    id: "lr_plus",
    terme: "Rapport de vraisemblance positif",
    sigle: "LR+",
    definition:
      "De combien un résultat positif augmente la probabilité de la cible. LR+ > 10 = fort argument rule-in ; 5–10 modéré ; 2–5 faible.",
    formule: "LR+ = Se / (1 − Sp)",
  },
  {
    id: "lr_moins",
    terme: "Rapport de vraisemblance négatif",
    sigle: "LR−",
    definition:
      "De combien un résultat négatif diminue la probabilité de la cible. LR− < 0,1 = fort argument rule-out ; 0,1–0,2 modéré ; 0,2–0,5 faible.",
    formule: "LR− = (1 − Se) / Sp",
  },
  {
    id: "mcid",
    terme: "Différence minimale cliniquement importante",
    sigle: "MCID / MCII",
    definition:
      "Plus petite variation d'un score perçue comme bénéfique par le patient, justifiant un changement de prise en charge. Propre à chaque questionnaire et population.",
  },
  {
    id: "mdc",
    terme: "Différence minimale détectable",
    sigle: "MDC",
    definition:
      "Variation minimale d'un score qui dépasse l'erreur de mesure (au-delà du hasard), à un seuil de confiance donné (souvent 90 ou 95 %).",
  },
  {
    id: "nnt",
    terme: "Nombre de sujets à traiter",
    sigle: "NNT",
    definition:
      "Nombre de patients à traiter pour observer un événement favorable de plus qu'avec le comparateur. Plus il est petit, plus l'effet est important.",
    formule: "NNT = 1 / réduction absolue du risque",
  },
  {
    id: "mdt",
    terme: "Taille d'effet",
    sigle: "SMD / d",
    definition:
      "Ampleur standardisée d'un effet (ex. d de Cohen). Repères usuels : 0,2 faible, 0,5 modéré, 0,8 fort.",
  },
  {
    id: "icc",
    terme: "Coefficient de corrélation intraclasse",
    sigle: "ICC",
    definition:
      "Mesure la fiabilité/reproductibilité d'une mesure (test-retest, inter-examinateurs). > 0,75 bonne, > 0,90 excellente.",
  },
  {
    id: "prevalence",
    terme: "Prévalence",
    definition:
      "Proportion de personnes atteintes dans une population à un instant donné. Elle modifie les valeurs prédictives (VPP/VPN) sans changer Se/Sp.",
  },
];

/* =============================================================================
   CADRE LÉGAL — masseur-kinésithérapeute (France)
   Version : v0.1 — vérifié le 2026-07-05 (cadre général).
   ⚠️ Le droit évolue. Toujours vérifier la version EN VIGUEUR sur Légifrance /
   auprès de l'Ordre (CNOMK). Ce module est une synthèse d'orientation, pas un
   avis juridique.
   ============================================================================= */
import type { FicheLegale } from "@/lib/contenu/types";

export const LEGAL: FicheLegale[] = [
  {
    id: "competences",
    titre: "Champ de compétences",
    categorie: "Exercice professionnel",
    points: [
      "La profession et ses actes sont définis au Code de la santé publique (partie réglementaire, articles R.4321-1 et suivants).",
      "Le kinésithérapeute réalise un bilan-diagnostic kinésithérapique, choisit les actes et techniques appropriés.",
      "Certaines pratiques restent conditionnées à une prescription médicale ; d'autres relèvent de l'initiative du praticien.",
    ],
    sources: [
      { label: "Code de la santé publique — articles R.4321-1 et s. (Légifrance)", url: "https://www.legifrance.gouv.fr", verifie: "2026-07-05" },
    ],
  },
  {
    id: "acces_direct",
    titre: "Accès direct",
    categorie: "Parcours de soins",
    points: [
      "Des dispositifs d'accès direct (sans prescription médicale préalable, dans un cadre défini) ont été introduits et précisés par voie législative/réglementaire.",
      "Les conditions (structures d'exercice coordonné, compte rendu au médecin, situations éligibles) sont encadrées.",
      "⚠️ Vérifier le périmètre exact en vigueur (textes d'application) avant de s'en prévaloir.",
    ],
    sources: [
      { label: "Textes relatifs à l'accès direct en kinésithérapie (Légifrance)", url: "https://www.legifrance.gouv.fr", verifie: "2026-07-05" },
    ],
  },
  {
    id: "deontologie",
    titre: "Déontologie",
    categorie: "Ordre & déontologie",
    points: [
      "Le code de déontologie des masseurs-kinésithérapeutes figure au Code de la santé publique (articles R.4321-51 et suivants).",
      "Principes : information loyale, consentement, secret professionnel, non-compérage, interdiction de la publicité contraire à la dignité.",
      "L'Ordre (CNOMK) veille au respect de ces règles.",
    ],
    sources: [
      { label: "Code de déontologie MK — CSP (Légifrance)", url: "https://www.legifrance.gouv.fr", verifie: "2026-07-05" },
      { label: "Conseil national de l'Ordre des MK (CNOMK)", url: "https://www.ordremk.fr" },
    ],
  },
  {
    id: "rgpd_cabinet",
    titre: "Données personnelles au cabinet (RGPD)",
    categorie: "Protection des données",
    points: [
      "Les données de santé sont des données sensibles au sens du RGPD.",
      "Obligations : information des patients, sécurité/confidentialité, hébergement de données de santé (HDS) si externalisation, durée de conservation encadrée.",
      "Un registre des traitements et des mesures de sécurité proportionnées sont attendus.",
    ],
    sources: [
      { label: "CNIL — professionnels de santé", url: "https://www.cnil.fr", verifie: "2026-07-05" },
    ],
  },
];

/* =============================================================================
   COTATION NGAP — kinésithérapie (France)
   Version : v0.1 — vérifié le 2026-07-05 (cadre général).
   ⚠️ Les lettres-clés et coefficients ÉVOLUENT (avenants conventionnels).
   Toujours vérifier la valeur EN VIGUEUR sur ameli.fr / la NGAP officielle
   avant cotation. Ce module donne le cadre, pas les montants opposables.
   ============================================================================= */
import type { FicheNGAP } from "@/lib/contenu/types";

const SRC_NGAP = {
  label: "NGAP — dispositions générales et titre kinésithérapie (Assurance Maladie)",
  url: "https://www.ameli.fr/masseur-kinesitherapeute/exercice-liberal/facturation-remuneration/nomenclatures-cotation",
  verifie: "2026-07-05",
};

export const NGAP: FicheNGAP[] = [
  {
    id: "lettres_cles",
    acte: "Lettres-clés de kinésithérapie",
    lettreCle: "AMK / AMC / AMS",
    coefficient: "Selon acte et localisation (voir NGAP en vigueur)",
    regles: [
      "AMK : rééducation au cabinet ou au domicile du patient.",
      "AMC : rééducation en centre / structure de soins.",
      "AMS : rééducation d'un membre ou du rachis avec référence à une cotation spécifique.",
      "La lettre-clé est multipliée par un coefficient défini dans la nomenclature.",
      "⚠️ Coefficients exacts à lire dans la NGAP en vigueur — ils évoluent par avenant.",
    ],
    sources: [SRC_NGAP],
  },
  {
    id: "regles_cumul",
    acte: "Règles de cumul et de facturation",
    lettreCle: "—",
    regles: [
      "En principe, un seul acte de kinésithérapie par séance et par patient.",
      "Règles spécifiques d'association d'actes : se référer aux dispositions générales de la NGAP.",
      "Indemnités de déplacement (IFD/IK) selon les conditions prévues.",
      "Bilan-diagnostic kinésithérapique (BDK) : coté selon la nomenclature en vigueur.",
      "⚠️ Vérifier les conditions exactes (entente préalable éventuelle, plafonds) avant facturation.",
    ],
    sources: [SRC_NGAP],
  },
  {
    id: "prescription_bdk",
    acte: "Prescription et bilan",
    lettreCle: "—",
    regles: [
      "Le masseur-kinésithérapeute établit un bilan-diagnostic kinésithérapique et choisit les techniques.",
      "La prescription médicale peut être quantitative ou non ; l'accès direct encadré modifie certaines modalités (voir module Cadre légal).",
      "Transmission d'un compte rendu au médecin selon les cas.",
    ],
    sources: [SRC_NGAP],
  },
];

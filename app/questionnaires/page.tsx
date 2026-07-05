import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptQuestionnaires } from "@/lib/contenu/adapters";
import { QUESTIONNAIRES } from "@/data/questionnaires";

export const metadata: Metadata = {
  title: "Questionnaires & PROMs",
  description: "Fiches des questionnaires validés : indication, scoring, MCID/MDC, statut copyright, sources.",
};

export default function QuestionnairesPage() {
  const { entries, facettes } = adaptQuestionnaires(QUESTIONNAIRES);
  return (
    <ListePage
      eyebrow="Auto-évaluations"
      titre="Questionnaires & auto-questionnaires"
      lede="Fiches descriptives des PROMs validés : indication, population, scoring, différences cliniquement importantes et interprétation."
      avertissement="Respect du droit d'auteur : le texte intégral n'est reproduit que pour les instruments libres de droits. Pour les instruments protégés, la fiche renvoie à la source officielle. Les MCID/MDC sont indicatifs et dépendent de la population."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un questionnaire (nom, région, domaine)…"
    />
  );
}

import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptLegal } from "@/lib/contenu/adapters";
import { LEGAL } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cadre légal",
  description: "Compétences, accès direct, déontologie, RGPD au cabinet (France).",
};

export default function LegalPage() {
  const { entries, facettes } = adaptLegal(LEGAL);
  return (
    <ListePage
      eyebrow="Pratique — France"
      titre="Cadre légal & déontologie"
      lede="Repères sur le champ de compétences, l'accès direct, la déontologie et la protection des données au cabinet."
      avertissement="⚠️ Le droit évolue. Synthèse d'orientation, pas un avis juridique : vérifiez la version en vigueur sur Légifrance et auprès de l'Ordre (CNOMK)."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un thème légal…"
    />
  );
}

import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptDrapeaux } from "@/lib/contenu/adapters";
import { DRAPEAUX } from "@/data/drapeaux";

export const metadata: Metadata = {
  title: "Drapeaux rouges & orientation",
  description: "Signes d'alerte par région et population, conduite à tenir, quand référer.",
};

export default function DrapeauxPage() {
  const { entries, facettes } = adaptDrapeaux(DRAPEAUX);
  return (
    <ListePage
      eyebrow="Sécurité"
      titre="Drapeaux rouges & orientation"
      lede="Situations à ne pas manquer, par région et par population : signes d'alerte et conduite à tenir. En cas de doute, orienter vers un avis médical."
      avertissement="Cette liste n'est pas exhaustive et ne remplace pas le jugement clinique. Devant tout signe d'alerte, privilégier la sécurité et l'orientation médicale."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un drapeau, un signe…"
    />
  );
}

import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptTests } from "@/lib/contenu/adapters";
import { bibliothequeTests } from "@/data/tests-cliniques";

export const metadata: Metadata = {
  title: "Tests cliniques",
  description: "Bibliothèque de tests : technique, sensibilité/spécificité, interprétation rule-in / rule-out.",
};

export default function TestsPage() {
  const { entries, facettes } = adaptTests(bibliothequeTests());
  return (
    <ListePage
      eyebrow="Examen clinique"
      titre="Bibliothèque de tests cliniques"
      lede="Les tests des modules du bilan, consultables indépendamment : technique, valeur diagnostique (Se/Sp) et lecture rule-in / rule-out."
      avertissement="Les sensibilités/spécificités sont indicatives et varient selon les études. Un test isolé ne confirme ni n'écarte à lui seul : à combiner au raisonnement clinique."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un test, une région, une cible…"
    />
  );
}

import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptNGAP } from "@/lib/contenu/adapters";
import { NGAP } from "@/data/ngap";

export const metadata: Metadata = {
  title: "Cotation NGAP",
  description: "Lettres-clés, actes de kinésithérapie, règles de cumul (France).",
};

export default function NGAPPage() {
  const { entries } = adaptNGAP(NGAP);
  return (
    <ListePage
      eyebrow="Pratique — France"
      titre="Cotation NGAP"
      lede="Cadre de la cotation des actes de masso-kinésithérapie : lettres-clés, actes et règles de facturation."
      avertissement="⚠️ Les lettres-clés et coefficients évoluent par avenant conventionnel. Vérifiez toujours la valeur EN VIGUEUR sur ameli.fr avant cotation : ce module donne le cadre, pas les montants opposables."
      entries={entries}
      placeholder="Rechercher un acte, une règle…"
    />
  );
}

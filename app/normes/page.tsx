import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptNormes } from "@/lib/contenu/adapters";
import { NORMES } from "@/data/normes";

export const metadata: Metadata = {
  title: "Normes & valeurs de référence",
  description: "Goniométrie, vitesse de marche, équilibre, force : valeurs de référence sourcées.",
};

export default function NormesPage() {
  const { entries, facettes } = adaptNormes(NORMES);
  return (
    <ListePage
      eyebrow="Références"
      titre="Normes & valeurs de référence"
      lede="Repères d'amplitude articulaire, de marche, d'équilibre et de force pour situer une mesure."
      avertissement="Valeurs indicatives : elles varient selon l'âge, le sexe et la méthode de mesure. À confronter au côté sain et au contexte du patient."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher une norme, une articulation…"
    />
  );
}

import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptAnatomie } from "@/lib/contenu/adapters";
import { ANATOMIE } from "@/data/anatomie";

export const metadata: Metadata = {
  title: "Anatomie de référence",
  description: "Dermatomes, myotomes, réflexes ostéotendineux : repères d'examen neurologique.",
};

export default function AnatomiePage() {
  const { entries, facettes } = adaptAnatomie(ANATOMIE);
  return (
    <ListePage
      eyebrow="Repères"
      titre="Anatomie de référence"
      lede="Dermatomes, myotomes et réflexes pour l'examen neurologique de débrouillage."
      avertissement="Les cartes de dermatomes varient selon les auteurs ; ces repères usuels sont à confronter à un atlas de référence."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un niveau, un myotome…"
    />
  );
}

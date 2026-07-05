import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptProtocoles } from "@/lib/contenu/adapters";
import { PROTOCOLES } from "@/data/protocoles";

export const metadata: Metadata = {
  title: "Protocoles de rééducation",
  description: "Protocoles publiés : phases, critères de progression, dosage, sources.",
};

export default function ProtocolesPage() {
  const { entries, facettes } = adaptProtocoles(PROTOCOLES);
  return (
    <ListePage
      eyebrow="Rééducation"
      titre="Protocoles de rééducation"
      lede="Synthèses de protocoles publiés : phases, objectifs, critères de progression et dosage. Les critères priment sur les délais."
      avertissement="Synthèses pédagogiques à individualiser selon le patient et l'avis médical. Chaque protocole cite ses sources ; ce qui n'est pas établi est marqué « à valider »."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un protocole, une pathologie…"
    />
  );
}

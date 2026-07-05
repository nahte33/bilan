import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptGlossaire } from "@/lib/contenu/adapters";
import { GLOSSAIRE } from "@/data/glossaire";

export const metadata: Metadata = {
  title: "Glossaire EBP",
  description: "Sensibilité, spécificité, rapports de vraisemblance, MCID, NNT… en clair.",
};

export default function GlossairePage() {
  const { entries } = adaptGlossaire(GLOSSAIRE);
  return (
    <ListePage
      eyebrow="Lecture critique"
      titre="Glossaire EBP"
      lede="Les notions d'épidémiologie clinique utilisées partout dans la plateforme, définies simplement, avec leurs formules."
      entries={entries}
      placeholder="Rechercher un terme (Se, LR, MCID…)"
    />
  );
}

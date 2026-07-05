import type { Metadata } from "next";
import ListePage from "@/components/ListePage";
import { adaptExercices } from "@/lib/contenu/adapters";
import { EXERCICES } from "@/data/exercices";

export const metadata: Metadata = {
  title: "Bibliothèque d'exercices",
  description: "Exercices de rééducation par région et phase, avec dosage sourcé quand publié.",
};

export default function ExercicesPage() {
  const { entries, facettes } = adaptExercices(EXERCICES);
  return (
    <ListePage
      eyebrow="Rééducation"
      titre="Bibliothèque d'exercices"
      lede="Exercices par région, objectif et phase, avec progressions et dosage lorsqu'ils sont issus d'un protocole publié."
      avertissement="Le dosage doit être individualisé. Les exercices non rattachés à un protocole publié sont marqués « à valider »."
      entries={entries}
      facettes={facettes}
      placeholder="Rechercher un exercice, une région…"
    />
  );
}

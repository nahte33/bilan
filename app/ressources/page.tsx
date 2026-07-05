import type { Metadata } from "next";
import ModulesGrid from "@/components/ModulesGrid";
import { MODULES_CLINIQUES, MODULES_PRATIQUE } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Tous les modules de la plateforme : bilan, protocoles, questionnaires, tests, drapeaux rouges, normes, exercices, anatomie, cotation, cadre légal, glossaire.",
};

export default function RessourcesPage() {
  return (
    <div className="wrap">
      <div className="eyebrow">Tout au même endroit</div>
      <h1 className="h-display" style={{ fontSize: 32, margin: "8px 0 10px" }}>
        Ressources
      </h1>
      <p className="lede" style={{ marginBottom: 26 }}>
        L&apos;ensemble des modules de la plateforme. Chaque contenu est sourcé ou
        marqué à valider.
      </p>

      <h2 className="h-display" style={{ fontSize: 20, margin: "8px 0 14px" }}>Clinique</h2>
      <ModulesGrid modules={MODULES_CLINIQUES} />

      <h2 className="h-display" style={{ fontSize: 20, margin: "34px 0 14px" }}>
        Pratique professionnelle
      </h2>
      <ModulesGrid modules={MODULES_PRATIQUE} />
    </div>
  );
}

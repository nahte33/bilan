import type { Metadata } from "next";
import OutilBilan from "@/components/OutilBilan";

export const metadata: Metadata = {
  title: "L'outil — bilan orienté",
  description:
    "Anamnèse adaptative qui classe les hypothèses par cohérence, propose les tests à réaliser et fait remonter les drapeaux rouges.",
};

export default function OutilPage() {
  return (
    <div className="wrap">
      <div style={{ marginBottom: 18 }}>
        <div className="eyebrow">Bilan orienté</div>
        <h1 className="h-display" style={{ fontSize: 30, margin: "6px 0 6px" }}>
          Anamnèse adaptative &amp; hypothèses par cohérence
        </h1>
        <p className="lede" style={{ fontSize: 15 }}>
          Renseignez l&apos;anamnèse à gauche : les questions pertinentes
          apparaissent au fur et à mesure, le bilan se construit en direct à
          droite. Les drapeaux rouges s&apos;affichent toujours en tête.
        </p>
      </div>
      <OutilBilan />
    </div>
  );
}

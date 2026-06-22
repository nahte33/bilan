import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilan MSK — aide au raisonnement clinique",
  description:
    "Aide au raisonnement sur les douleurs musculosquelettiques du sportif. Classe des hypothèses par cohérence et propose les tests qui les départagent. N'établit pas de diagnostic.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

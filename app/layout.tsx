import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Bilan MSK — aide au raisonnement clinique",
    template: "%s — Bilan MSK",
  },
  description:
    "Aide au raisonnement sur les douleurs musculosquelettiques du sportif : classe des hypothèses par cohérence, propose les tests qui les départagent et signale les drapeaux rouges. N'établit pas de diagnostic.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2624",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <div className="disclaimer-strip">
          <div className="container">
            <span aria-hidden="true">ℹ️</span>
            <span>
              <b>Aide à la décision, pas un diagnostic.</b> Le professionnel de
              santé interprète et décide. <Link href="/mentions" style={{ color: "#5C4413", textDecoration: "underline" }}>En savoir plus</Link>.
            </span>
          </div>
        </div>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

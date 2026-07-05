import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RegisterSW from "@/components/RegisterSW";

export const metadata: Metadata = {
  metadataBase: new URL("https://kine-ressources.vercel.app"),
  applicationName: "Kiné Ressources",
  title: {
    default: "Kiné Ressources — base de référence pour kinésithérapeutes",
    template: "%s — Kiné Ressources",
  },
  description:
    "Aide au bilan, protocoles de rééducation, questionnaires validés, tests cliniques, drapeaux rouges et repères de pratique. Sourcé, déterministe, sans donnée patient. N'établit pas de diagnostic.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Kiné Ressources",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
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
        <RegisterSW />
        <SiteHeader />
        <div className="disclaimer-strip">
          <div className="container">
            <span aria-hidden="true">ℹ️</span>
            <span>
              <b>Aide à la décision, pas un diagnostic.</b> Le professionnel de
              santé interprète et décide.{" "}
              <Link href="/mentions" style={{ color: "#5C4413", textDecoration: "underline" }}>
                En savoir plus
              </Link>
              .
            </span>
          </div>
        </div>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

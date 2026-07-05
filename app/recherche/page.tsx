import type { Metadata } from "next";
import { Suspense } from "react";
import RechercheGlobale from "@/components/RechercheGlobale";
import { buildIndex } from "@/lib/recherche";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Recherche transversale dans tous les modules de la plateforme.",
};

export default function RecherchePage() {
  const docs = buildIndex();
  return (
    <Suspense fallback={<div className="wrap">Chargement…</div>}>
      <RechercheGlobale docs={docs} />
    </Suspense>
  );
}

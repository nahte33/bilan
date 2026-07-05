import Link from "next/link";
import Springboard from "@/components/Springboard";
import { MODULES } from "@/lib/modules";

export default function Accueil() {
  return (
    <div className="home">
      <header className="home-head">
        <p className="home-eyebrow">Base de référence · kinésithérapie</p>
        <h1 className="home-title">Choisissez un outil.</h1>
        <Link href="/recherche" className="home-search" aria-label="Rechercher dans toute la plateforme">
          <span className="hs-ic" aria-hidden="true">⌕</span>
          Rechercher un test, un questionnaire, un protocole…
        </Link>
      </header>

      <Springboard modules={MODULES} />
    </div>
  );
}

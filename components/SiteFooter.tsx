import Link from "next/link";

/** Footer minimal : l'accès aux modules se fait par les cartes de l'accueil. */
export default function SiteFooter() {
  const annee = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-note" style={{ maxWidth: "70ch" }}>
          Aide à la décision — n&apos;établit pas de diagnostic et ne remplace pas
          le jugement du professionnel de santé. En cas de signe d&apos;alerte,
          consultez un professionnel de santé.
        </p>
        <div className="footer-bottom">
          <span>© {annee} Kiné Ressources — usage professionnel et pédagogique.</span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link href="/methode">Méthode &amp; sources</Link>
            <Link href="/mentions">Mentions &amp; confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

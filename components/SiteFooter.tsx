import Link from "next/link";

export default function SiteFooter() {
  const annee = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ color: "#fff", marginBottom: 12 }}>
              <span className="mark" aria-hidden="true">B</span>
              <span className="word" style={{ color: "#fff" }}>Bilan MSK</span>
            </div>
            <p className="footer-note">
              Aide au raisonnement clinique sur les douleurs musculosquelettiques
              du sportif. Outil d&apos;orientation : il n&apos;établit pas de
              diagnostic et ne remplace ni l&apos;examen ni la décision du
              professionnel de santé.
            </p>
          </div>

          <div className="footer-col">
            <h4>Naviguer</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/outil">L&apos;outil</Link></li>
              <li><Link href="/methode">Méthode &amp; sources</Link></li>
              <li><Link href="/mentions">Mentions &amp; confidentialité</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Repères</h4>
            <ul>
              <li>Raisonnement déterministe, sans IA</li>
              <li>Indices et tests sourcés (PubMed, DOI)</li>
              <li>Aucune donnée de santé enregistrée</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {annee} Bilan MSK — usage professionnel et pédagogique.</span>
          <span>En cas de signe d&apos;alerte, consultez un professionnel de santé.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function SiteFooter() {
  const annee = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ color: "#fff", marginBottom: 12 }}>
              <span className="mark" aria-hidden="true">K</span>
              <span className="word" style={{ color: "#fff" }}>Kiné Ressources</span>
            </div>
            <p className="footer-note">
              Base de référence pour la pratique kinésithérapique : aide au bilan,
              protocoles, questionnaires, tests, drapeaux rouges et repères de
              pratique. Aide à la décision — n&apos;établit pas de diagnostic et ne
              remplace pas le jugement du professionnel de santé.
            </p>
          </div>

          <div className="footer-col">
            <h4>Clinique</h4>
            <ul>
              <li><Link href="/outil">Aide au bilan</Link></li>
              <li><Link href="/protocoles">Protocoles</Link></li>
              <li><Link href="/questionnaires">Questionnaires</Link></li>
              <li><Link href="/tests">Tests cliniques</Link></li>
              <li><Link href="/drapeaux">Drapeaux rouges</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Pratique & repères</h4>
            <ul>
              <li><Link href="/ngap">Cotation NGAP</Link></li>
              <li><Link href="/legal">Cadre légal</Link></li>
              <li><Link href="/glossaire">Glossaire EBP</Link></li>
              <li><Link href="/methode">Méthode &amp; sources</Link></li>
              <li><Link href="/mentions">Mentions &amp; confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {annee} Kiné Ressources — usage professionnel et pédagogique.</span>
          <span>En cas de signe d&apos;alerte, consultez un professionnel de santé.</span>
        </div>
      </div>
    </footer>
  );
}

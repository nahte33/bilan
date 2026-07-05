import Link from "next/link";
import ModulesGrid from "@/components/ModulesGrid";
import { MODULES, MODULES_PRINCIPAUX } from "@/lib/modules";

const totalFiches = MODULES.reduce((n, m) => n + m.count, 0);

export default function Accueil() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">La référence du kinésithérapeute</div>
              <h1>
                Tout votre <em>raisonnement clinique</em>, au même endroit.
              </h1>
              <p className="lede">
                Aide au bilan, protocoles de rééducation, questionnaires validés,
                tests cliniques, drapeaux rouges et repères de pratique — pour
                toutes les populations. Sourcé, déterministe, sans intelligence
                artificielle dans le raisonnement.
              </p>
              <div className="hero-actions">
                <Link href="/outil" className="btn btn-primary">Ouvrir l&apos;aide au bilan →</Link>
                <Link href="/ressources" className="btn btn-light">Explorer les ressources</Link>
              </div>
              <div className="hero-meta">
                <div className="m"><b>{MODULES.length}</b><span>modules</span></div>
                <div className="m"><b>{totalFiches}+</b><span>fiches sourcées</span></div>
                <div className="m"><b>0</b><span>donnée enregistrée</span></div>
              </div>
            </div>

            <div className="bilan-preview" aria-hidden="true">
              <div className="bp-h">
                <span className="t">Aide au bilan — exemple</span>
                <span className="tag">hanche / aine</span>
              </div>
              <div className="bp-flag">
                <div className="t">Drapeau rouge en tête</div>
                <div className="c">Les situations à ne pas manquer priment toujours sur le classement.</div>
              </div>
              <div className="bp-lbl">Hypothèses, par cohérence</div>
              <div className="bp-hyp">
                <div className="top">
                  <span className="bp-band forte">forte</span>
                  <span className="nom">Atteinte des adducteurs</span>
                  <span className="score">score 6</span>
                </div>
                <div className="bp-why"><span>Pubis / adducteurs</span><span>Frappe</span><span>Début aigu</span></div>
              </div>
              <div className="bp-hyp">
                <div className="top">
                  <span className="bp-band moderee">modérée</span>
                  <span className="nom">Pubalgie symphysaire</span>
                  <span className="score">score 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MODULES ---------- */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Les modules</div>
          <h2 className="h-display" style={{ fontSize: 30, margin: "8px 0 8px" }}>
            Une boîte à outils complète
          </h2>
          <p className="lede" style={{ marginBottom: 26 }}>
            Chaque module est consultable indépendamment et relié aux autres.
            Tout le contenu est sourcé (PubMed / DOI, textes officiels) ou marqué
            « à valider ».
          </p>
          <ModulesGrid modules={MODULES} />
        </div>
      </section>

      <hr className="rule" />

      {/* ---------- DEUX PUBLICS ---------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="panel-card">
              <div className="eyebrow">Pour les patients</div>
              <h3 className="h-display" style={{ fontSize: 22, margin: "8px 0 10px" }}>
                Comprendre la démarche de votre kinésithérapeute
              </h3>
              <p style={{ color: "var(--soft)", lineHeight: 1.65, fontSize: 15 }}>
                Cette plateforme aide le professionnel à structurer son
                raisonnement et à s&apos;appuyer sur des références. Elle ne pose pas
                de diagnostic et ne remplace pas une consultation. En cas de
                douleur qui vous inquiète, parlez-en à un professionnel de santé.
              </p>
            </div>
            <div className="panel-card pro">
              <div className="eyebrow">Pour les professionnels</div>
              <h3 className="h-display" style={{ fontSize: 22, margin: "8px 0 10px" }}>
                Gagner du temps sans rien inventer
              </h3>
              <p style={{ lineHeight: 1.65, fontSize: 15 }}>
                Des repères fiables et sourcés à portée de main en séance :
                valeurs de tests, scoring de questionnaires, phases de protocole,
                drapeaux rouges. Ce qui n&apos;est pas établi dans la littérature est
                signalé, jamais inventé.
              </p>
              <div style={{ marginTop: 16 }}>
                <Link href="/outil" className="btn btn-light">Ouvrir l&apos;aide au bilan →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section-sm">
        <div className="container">
          <div className="panel-card pro" style={{ textAlign: "center", display: "grid", placeItems: "center", gap: 14, padding: "44px 28px" }}>
            <h2 className="h-display" style={{ fontSize: 28, color: "#fff", maxWidth: "24ch" }}>
              Installez la plateforme sur votre téléphone
            </h2>
            <p style={{ color: "#AFCBC8", maxWidth: "54ch", margin: 0 }}>
              Application web installable (PWA) : ajoutez-la à votre écran
              d&apos;accueil pour un accès rapide au cabinet. Aucune donnée patient
              n&apos;est conservée.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 6 }}>
              {MODULES_PRINCIPAUX.slice(0, 1).map((m) => (
                <Link key={m.id} href={m.href} className="btn btn-primary">Commencer</Link>
              ))}
              <Link href="/methode" className="btn btn-light">Méthode &amp; sources</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

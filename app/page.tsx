import Link from "next/link";
import { REGIONS, REGIONS_MENU } from "@/data/regions";

const regionsDispo = REGIONS_MENU.filter((m) => !m.aVenir).map((m) => ({
  ...m,
  entites: REGIONS[m.id].HYPOTHESES.length,
}));
const totalEntites = regionsDispo.reduce((n, r) => n + r.entites, 0);

export default function Accueil() {
  return (
    <>
      {/* ---------- HERO : la transparence du raisonnement comme thèse ---------- */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Douleurs musculosquelettiques du sportif</div>
              <h1>
                Le raisonnement clinique, <em>rendu lisible</em>.
              </h1>
              <p className="lede">
                À partir de l&apos;anamnèse, l&apos;outil classe des hypothèses par
                cohérence, propose les tests qui les départagent et fait remonter
                les drapeaux rouges. Chaque ligne du bilan reste traçable jusqu&apos;aux
                réponses — le professionnel interprète et décide.
              </p>
              <div className="hero-actions">
                <Link href="/outil" className="btn btn-primary">Ouvrir l&apos;outil →</Link>
                <Link href="/methode" className="btn btn-light">Comment ça marche</Link>
              </div>
              <div className="hero-meta">
                <div className="m"><b>{regionsDispo.length}</b><span>régions couvertes</span></div>
                <div className="m"><b>{totalEntites}</b><span>hypothèses sourcées</span></div>
                <div className="m"><b>0</b><span>donnée enregistrée</span></div>
              </div>
            </div>

            {/* Signature : aperçu fidèle d'un bilan */}
            <div className="bilan-preview" aria-hidden="true">
              <div className="bp-h">
                <span className="t">Bilan orienté — hanche / aine</span>
                <span className="tag">exemple</span>
              </div>
              <div className="bp-flag">
                <div className="t">Suspicion de fracture de fatigue du col fémoral</div>
                <div className="c">Mise en décharge + IRM. Les drapeaux rouges s&apos;affichent toujours en tête.</div>
              </div>
              <div className="bp-lbl">Hypothèses, par cohérence</div>
              <div className="bp-hyp">
                <div className="top">
                  <span className="bp-band forte">forte</span>
                  <span className="nom">Atteinte des adducteurs</span>
                  <span className="score">score 6</span>
                </div>
                <div className="bp-why">
                  <span>Pubis / adducteurs</span>
                  <span>Frappe / shoot</span>
                  <span>Début aigu</span>
                </div>
              </div>
              <div className="bp-hyp">
                <div className="top">
                  <span className="bp-band moderee">modérée</span>
                  <span className="nom">Douleur pubienne / symphysaire</span>
                  <span className="score">score 2</span>
                </div>
                <div className="bp-why">
                  <span>Pubis / adducteurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRINCIPES ---------- */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Ce qui guide l&apos;outil</div>
          <h2 className="h-display" style={{ fontSize: 30, margin: "8px 0 28px", maxWidth: "20ch" }}>
            Une aide transparente, pas une boîte noire
          </h2>
          <div className="feature-grid">
            <article className="card">
              <div className="ic" aria-hidden="true">∑</div>
              <h3>Déterministe</h3>
              <p>
                Le classement vient d&apos;une somme de poids explicites, pas d&apos;une
                intelligence artificielle. Le même bilan donne toujours le même
                résultat, et chaque hypothèse affiche les réponses qui l&apos;ont
                fait monter.
              </p>
            </article>
            <article className="card">
              <div className="ic" aria-hidden="true">❝</div>
              <h3>Sourcé</h3>
              <p>
                Les indices et les sensibilités / spécificités des tests
                proviennent d&apos;articles scientifiques réels (PubMed, DOI). Ce qui
                n&apos;est pas établi dans la littérature est signalé comme tel,
                jamais inventé.
              </p>
            </article>
            <article className="card">
              <div className="ic" aria-hidden="true">⦸</div>
              <h3>Confidentiel</h3>
              <p>
                Tout reste dans votre navigateur, le temps de la session. Aucune
                réponse n&apos;est envoyée sur un serveur, aucune donnée de santé
                n&apos;est enregistrée.
              </p>
            </article>
          </div>
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
                Comprendre la démarche de votre praticien
              </h3>
              <p style={{ color: "var(--soft)", lineHeight: 1.65, fontSize: 15 }}>
                Cet outil aide le professionnel de santé à structurer son
                raisonnement face à une douleur du sport. Il ne pose pas de
                diagnostic et ne remplace pas une consultation. Si vous
                ressentez une douleur qui vous inquiète, le mieux reste d&apos;en
                parler à un professionnel de santé, qui réalisera un examen
                adapté à votre situation.
              </p>
            </div>
            <div className="panel-card pro">
              <div className="eyebrow">Pour les professionnels</div>
              <h3 className="h-display" style={{ fontSize: 22, margin: "8px 0 10px" }}>
                Un appui au raisonnement, à votre main
              </h3>
              <p style={{ lineHeight: 1.65, fontSize: 15 }}>
                Une anamnèse adaptative, des hypothèses classées par bandes de
                cohérence, les tests cliniques qui les départagent (avec leur
                lecture rule-in / rule-out) et une couche de drapeaux rouges.
                Les poids et seuils sont des jugements provisoires, à recalibrer
                cliniquement.
              </p>
              <div style={{ marginTop: 16 }}>
                <Link href="/outil" className="btn btn-light">Ouvrir l&apos;outil →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMMENT ÇA MARCHE (séquence réelle) ---------- */}
      <section className="section" style={{ background: "var(--canvas)" }}>
        <div className="container">
          <div className="eyebrow">Le déroulé</div>
          <h2 className="h-display" style={{ fontSize: 30, margin: "8px 0 28px" }}>
            Trois temps, un bilan en direct
          </h2>
          <div className="feature-grid">
            <article className="card">
              <div className="kicker-num">01</div>
              <h3>Anamnèse adaptative</h3>
              <p>
                Choisissez une région et répondez aux questions. Les questions de
                précision n&apos;apparaissent que lorsqu&apos;elles sont pertinentes ;
                masquées, leur réponse est oubliée.
              </p>
            </article>
            <article className="card">
              <div className="kicker-num">02</div>
              <h3>Hypothèses par cohérence</h3>
              <p>
                Les hypothèses se classent en cohérence forte, modérée ou faible
                selon des seuils explicites — des repères qualitatifs, jamais des
                pourcentages de probabilité.
              </p>
            </article>
            <article className="card">
              <div className="kicker-num">03</div>
              <h3>Tests &amp; drapeaux rouges</h3>
              <p>
                L&apos;outil propose les tests qui départagent les hypothèses
                retenues et fait remonter, en tête, les situations à ne pas
                manquer.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- RÉGIONS ---------- */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Couverture</div>
          <h2 className="h-display" style={{ fontSize: 30, margin: "8px 0 8px" }}>
            {regionsDispo.length} régions, du tronc aux extrémités
          </h2>
          <p className="lede" style={{ marginBottom: 22 }}>
            Chaque région est un module clinique daté et sourcé, ajouté par ordre
            de prévalence dans la pratique.
          </p>
          <div className="regions-wrap">
            {regionsDispo.map((r) => (
              <span className="region-chip" key={r.id}>
                {r.nom}
                <span className="n">{r.entites}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="section-sm">
        <div className="container">
          <div
            className="panel-card pro"
            style={{ textAlign: "center", display: "grid", placeItems: "center", gap: 14, padding: "44px 28px" }}
          >
            <h2 className="h-display" style={{ fontSize: 28, color: "#fff", maxWidth: "22ch" }}>
              Prêt à structurer votre raisonnement ?
            </h2>
            <p style={{ color: "#AFCBC8", maxWidth: "52ch", margin: 0 }}>
              L&apos;outil fonctionne dans votre navigateur et ne conserve aucune
              donnée.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 6 }}>
              <Link href="/outil" className="btn btn-primary">Ouvrir l&apos;outil</Link>
              <Link href="/methode" className="btn btn-light">Méthode &amp; sources</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

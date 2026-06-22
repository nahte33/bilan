import type { Metadata } from "next";
import Link from "next/link";
import { REGIONS, REGIONS_MENU } from "@/data/regions";

export const metadata: Metadata = {
  title: "Méthode & sources",
  description:
    "Comment l'outil raisonne : règles explicites et déterministes, bandes qualitatives, contenu sourcé (PubMed, DOI), honnêteté épistémique et confidentialité.",
};

const apercu = REGIONS_MENU.filter((m) => !m.aVenir).map((m) => {
  const r = REGIONS[m.id];
  const sources = new Set<string>();
  r.HYPOTHESES.forEach((h) => h.indices.forEach((i) => i.source && sources.add(i.source)));
  r.TESTS.forEach((t) => t.source && sources.add(t.source));
  const principales = [
    ...new Set([...sources].map((s) => s.split(/[;(]/)[0].trim())),
  ]
    .slice(0, 4)
    .join(" · ");
  return {
    nom: r.nom,
    entites: r.HYPOTHESES.length,
    tests: r.TESTS.length + (r.TEST_SCREEN ? 1 : 0),
    drapeaux: r.DRAPEAUX_ROUGES.length,
    principales,
  };
});

export default function MethodePage() {
  return (
    <div className="wrap">
      <div className="eyebrow">Méthode &amp; sources</div>
      <h1 className="h-display" style={{ fontSize: 34, margin: "8px 0 10px" }}>
        Comment l&apos;outil raisonne
      </h1>
      <p className="lede" style={{ marginBottom: 28 }}>
        L&apos;objectif est qu&apos;une orientation soit toujours justifiable : on doit
        pouvoir remonter de chaque hypothèse jusqu&apos;aux réponses de l&apos;anamnèse et
        jusqu&apos;à une source. Voici les règles que l&apos;outil s&apos;impose.
      </p>

      <div className="prose">
        <h2>Déterministe et traçable</h2>
        <p>
          Le classement est produit par une <strong>somme de poids explicites</strong> :
          chaque réponse d&apos;anamnèse renforce certaines hypothèses d&apos;un montant
          défini à l&apos;avance. Il n&apos;y a <strong>aucune intelligence artificielle</strong> dans
          la logique de classement. Le calcul est reproductible et chaque
          hypothèse affiche les signes qui l&apos;ont fait monter.
        </p>

        <h2>Des bandes, pas des pourcentages</h2>
        <p>
          Les sorties sont des repères qualitatifs — <em>cohérence forte, modérée
          ou faible</em> — déterminés par des seuils. L&apos;outil n&apos;affiche jamais de
          pourcentage de probabilité : ce ne serait pas une probabilité validée,
          et cela donnerait une fausse impression de certitude.
        </p>

        <h2>Les drapeaux rouges priment</h2>
        <p>
          Les situations à ne pas manquer (fracture de fatigue, infection,
          origine non musculosquelettique…) sont affichées en tête du bilan,
          visuellement distinctes, indépendamment du classement des hypothèses.
        </p>

        <h2>Sourcé, et honnête sur ses limites</h2>
        <p>
          Les indices et les valeurs de sensibilité / spécificité des tests
          s&apos;appuient sur des publications réelles, citées dans chaque module
          (consensus, revues systématiques, méta-analyses d&apos;exactitude
          diagnostique, puis études primaires). Lorsqu&apos;une valeur n&apos;est pas
          établie dans la littérature, elle est explicitement marquée « à
          sourcer / valider » plutôt qu&apos;inventée.
        </p>
        <div className="callout">
          Les poids et les seuils de bandes sont des <strong>jugements cliniques
          provisoires</strong> ; les sensibilités / spécificités sont indicatives et
          varient selon les études (standard de référence, recrutement). Les
          modules doivent encore être relus par des pairs et testés sur des cas
          connus avant tout usage en situation réelle.
        </div>

        <h2>Hiérarchie de preuve</h2>
        <ul>
          <li>Consensus &amp; recommandations de pratique</li>
          <li>Revues systématiques &amp; méta-analyses d&apos;exactitude diagnostique</li>
          <li>Études primaires</li>
          <li>Avis d&apos;expert (en dernier recours, signalé comme tel)</li>
        </ul>

        <h2>Confidentialité</h2>
        <p>
          L&apos;application fonctionne entièrement dans votre navigateur. Les réponses
          ne sont pas envoyées sur un serveur et ne sont pas enregistrées : elles
          disparaissent dès que l&apos;onglet est fermé. Voir les{" "}
          <Link href="/mentions">mentions &amp; la confidentialité</Link>.
        </p>
      </div>

      <h2 className="h-display" style={{ fontSize: 24, margin: "40px 0 14px" }}>
        Couverture &amp; sources principales
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table className="src-table">
          <thead>
            <tr>
              <th>Région</th>
              <th>Hypothèses</th>
              <th>Tests</th>
              <th>Drapeaux</th>
              <th>Exemples de sources</th>
            </tr>
          </thead>
          <tbody>
            {apercu.map((r) => (
              <tr key={r.nom}>
                <td><strong>{r.nom}</strong></td>
                <td className="mono">{r.entites}</td>
                <td className="mono">{r.tests}</td>
                <td className="mono">{r.drapeaux}</td>
                <td><span className="mono">{r.principales}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color: "var(--soft)", fontSize: 13.5, marginTop: 14 }}>
        Les références complètes (avec DOI) figurent dans chaque module et dans
        le document de revue clinique du projet.
      </p>
    </div>
  );
}

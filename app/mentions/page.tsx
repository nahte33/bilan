import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions & confidentialité",
  description:
    "Avertissement clinique, statut de l'outil, confidentialité (aucune donnée de santé enregistrée) et limites d'usage.",
};

export default function MentionsPage() {
  return (
    <div className="wrap">
      <div className="eyebrow">Mentions &amp; confidentialité</div>
      <h1 className="h-display" style={{ fontSize: 34, margin: "8px 0 22px" }}>
        Avertissement, statut &amp; confidentialité
      </h1>

      <div className="callout clinique" style={{ marginBottom: 26 }}>
        <strong>Avertissement clinique.</strong> Cet outil est une aide au
        raisonnement à visée professionnelle et pédagogique. Il n&apos;établit pas de
        diagnostic, ne prescrit aucun traitement et ne remplace ni l&apos;examen ni la
        décision d&apos;un professionnel de santé. En cas de douleur inquiétante ou de
        signe d&apos;alerte, consultez un professionnel de santé.
      </div>

      <div className="prose">
        <h2>Statut de l&apos;outil</h2>
        <p>
          Les modules cliniques sont structurés et sourcés, mais{" "}
          <strong>n&apos;ont pas encore fait l&apos;objet d&apos;une validation clinique
          complète</strong> (relecture par des pairs et test rétrospectif sur des
          cas connus pour recalibrer les poids). Les hypothèses, poids et seuils
          sont des jugements provisoires. L&apos;outil est fourni « en l&apos;état », sans
          garantie de résultat.
        </p>

        <h2>Ce que l&apos;outil ne fait pas</h2>
        <ul>
          <li>Il ne pose pas de diagnostic et n&apos;affirme jamais qu&apos;une personne « a » telle pathologie.</li>
          <li>Il n&apos;affiche pas de pourcentage de probabilité.</li>
          <li>Il ne se substitue pas au jugement clinique ni à un examen physique.</li>
          <li>Il ne propose aucun traitement.</li>
        </ul>

        <h2>Confidentialité &amp; données</h2>
        <p>
          L&apos;application est <strong>100 % côté client</strong> : les réponses saisies
          restent en mémoire de votre navigateur, le temps de la session. Aucune
          donnée n&apos;est transmise à un serveur, aucune donnée de santé n&apos;est
          enregistrée ni partagée, et aucun traceur publicitaire n&apos;est utilisé.
          Fermer l&apos;onglet efface les réponses.
        </p>

        <h2>Sources &amp; méthode</h2>
        <p>
          Le détail de la méthode et des références figure sur la page{" "}
          <Link href="/methode">Méthode &amp; sources</Link>. Les valeurs de
          sensibilité / spécificité sont indicatives et issues de la littérature
          citée dans chaque module.
        </p>

        <h2>Responsabilité</h2>
        <p>
          La responsabilité de l&apos;interprétation et de toute décision de soin
          relève du professionnel de santé. Les autrices et auteurs du projet ne
          sauraient être tenus responsables d&apos;un usage de l&apos;outil hors de ce
          cadre.
        </p>
      </div>
    </div>
  );
}

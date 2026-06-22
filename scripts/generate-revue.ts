/* =============================================================================
   GÉNÉRATEUR DU DOCUMENT DE REVUE CLINIQUE
   =============================================================================
   Produit `REVUE-CLINIQUE.md` à partir des modules de données (source de vérité).
   Le document est donc TOUJOURS le reflet exact du contenu de l'application :
   pas de recopie manuelle, pas de divergence possible.

   Lancer :  npx vite-node scripts/generate-revue.ts
   ============================================================================= */

import { writeFileSync } from "node:fs";
import { indexerQuestions, signesCondition } from "../lib/moteur/engine";
import type { Condition, Region } from "../lib/moteur/types";
import { REGIONS, REGIONS_MENU } from "../data/regions";

function cond(qIndex: ReturnType<typeof indexerQuestions>, c: Condition): string {
  return signesCondition(qIndex, c).join(" + ");
}

function regionSection(id: string, r: Region): string {
  const qIndex = indexerQuestions(r.QUESTIONS);
  const nomParId = new Map(r.HYPOTHESES.map((h) => [h.id, h.nom]));
  const L: string[] = [];

  L.push(`## ${r.nom}\n`);
  L.push(
    `Seuils de cohérence : **forte** ≥ ${r.BANDES.forte} · **modérée** ≥ ${r.BANDES.moderee} · **faible** ≥ 1 (sinon écartée). ` +
      `${r.QUESTIONS.length} questions · ${r.HYPOTHESES.length} hypothèses · ${r.TESTS.length} tests · ${r.DRAPEAUX_ROUGES.length} drapeaux rouges.\n`,
  );

  // --- Hypothèses ---
  L.push(`### Hypothèses et indices pondérés\n`);
  L.push(`> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.\n`);
  for (const h of r.HYPOTHESES) {
    L.push(`#### ${h.nom}  _(quadrant : ${h.quadrant})_\n`);
    L.push(`| Signe (réponse d'anamnèse) | Poids | Source |`);
    L.push(`|---|---|---|`);
    for (const i of h.indices) {
      L.push(`| ${cond(qIndex, i.si)} | +${i.poids} | ${i.source ?? "—"} |`);
    }
    L.push("");
  }

  // --- Tests ---
  L.push(`### Tests proposés\n`);
  for (const t of r.TESTS) {
    const cibles = t.discrimine.map((d) => nomParId.get(d) ?? d).join(", ");
    L.push(`**${t.nom}**  — _départage : ${cibles || "—"}_  `);
    if (t.technique) L.push(`Technique : ${t.technique}  `);
    if (t.precision) L.push(`Valeur diagnostique : ${t.precision}  `);
    L.push(`Source : ${t.source ?? "_(non documentée / à sourcer)_"}\n`);
  }
  if (r.TEST_SCREEN) {
    const ts = r.TEST_SCREEN;
    L.push(`**${ts.nom}** _(dépistage — proposé si « ${signesCondition(qIndex, { [ts.siRep]: true })[0] ?? ts.siRep} »)_  `);
    if (ts.technique) L.push(`Technique : ${ts.technique}  `);
    if (ts.precision) L.push(`Valeur diagnostique : ${ts.precision}  `);
    L.push(`Source : ${ts.source ?? "_(à sourcer)_"}\n`);
  }

  // --- Drapeaux rouges ---
  L.push(`### Drapeaux rouges\n`);
  L.push(`| Drapeau | Déclencheur | Conduite | Source |`);
  L.push(`|---|---|---|---|`);
  for (const d of r.DRAPEAUX_ROUGES) {
    L.push(`| **${d.libelle}** | ${cond(qIndex, d.si)} | ${d.conduite} | ${d.source ?? "—"} |`);
  }
  L.push("\n---\n");
  return L.join("\n");
}

const date = new Date().toISOString().slice(0, 10);
const ordre = REGIONS_MENU.filter((m) => !m.aVenir).map((m) => m.id);

const head = `# Bilan MSK — Document de revue clinique

> **Document généré automatiquement** depuis les modules de données (\`data/regions/\`).
> Ne pas modifier à la main : éditer les modules puis régénérer
> (\`npx vite-node scripts/generate-revue.ts\`). Généré le ${date}.

## À l'attention du relecteur

Cet outil **aide au raisonnement**, il ne pose **jamais de diagnostic**. Le classement
des hypothèses est **déterministe** (somme de poids explicites), sans aucune IA.
Les sorties sont des **bandes qualitatives** (cohérence forte / modérée / faible),
**jamais** des probabilités.

**Ce qui est demandé pour la relecture (étapes 7-8 du brief) :**

1. **Pertinence clinique** des hypothèses retenues par région (entités fréquentes / à ne pas manquer ; exclusions).
2. **Poids provisoires** : sont-ils cohérents ? (le score d'une hypothèse = somme des poids des indices vrais). Proposer des réajustements.
3. **Tests et valeurs Se/Sp** : exactes, bien interprétées (rule-in / rule-out) ? Les valeurs proviennent d'articles réels (DOI cités) ; les tests sans donnée d'exactitude fiable sont signalés « à sourcer/valider ».
4. **Drapeaux rouges** : complets et correctement déclenchés ?
5. **Test rétrospectif** sur des cas connus : le classement retombe-t-il sur le diagnostic confirmé ? Sinon, quels poids ajuster ?

> ⚠️ Les poids et seuils sont des **jugements cliniques provisoires** ; les Se/Sp
> sont **indicatives** et varient selon les études. Aucun module n'est « validé »
> tant que cette relecture + le test sur cas connus n'ont pas eu lieu.

---
`;

const body = ordre.map((id) => regionSection(id, REGIONS[id])).join("\n");
writeFileSync(new URL("../REVUE-CLINIQUE.md", import.meta.url), head + "\n" + body, "utf8");
console.log(`REVUE-CLINIQUE.md généré (${ordre.length} régions).`);

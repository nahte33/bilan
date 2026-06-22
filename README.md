# Bilan MSK — aide au raisonnement clinique (douleurs MSK du sportif)

Application web qui aide un kinésithérapeute à raisonner sur une douleur
musculosquelettique du sportif. À partir d'une anamnèse adaptative, l'outil
classe des **hypothèses** par cohérence, propose les **tests cliniques** qui les
départagent, et fait remonter les **drapeaux rouges**.

> ⚠️ Aide à la décision, **jamais un diagnostic**. Le clinicien interprète et
> décide. Les bandes de cohérence sont des seuils de jugement (non validés) ;
> les Se/Sp citées sont indicatives et sourcées. Voir `CLAUDE.md` (garde-fous).

## Stack

Next.js (App Router) · React · TypeScript strict · Tailwind v4 · 100 % côté
client (aucun backend, aucune donnée patient persistée). Déployable sur Vercel.

## Architecture

```
app/                 écran principal (sélecteur de région + bilan)
lib/moteur/          moteur PUR et générique : types, engine, tests
data/regions/        données par région (hanche-aine) + registre index.ts
components/           Questionnaire (adaptatif) + Bilan
reference/           fichiers de référence d'origine (non importés au build)
```

Le **moteur** est écrit une fois, sans connaître aucune région. Ajouter une
région = ajouter un fichier dans `data/regions/` + une ligne dans son `index.ts`.
Aucun LLM/API n'intervient dans le classement : tout est déterministe (somme de
poids) et traçable jusqu'aux réponses.

## Commandes

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # tests unitaires du moteur (scénarios de référence)
npm run build    # build de production (statique)
```

## Régions couvertes

Chaque région est un module `data/regions/<region>.ts` ; le moteur est inchangé.

| Région | Entités | Principales sources (PubMed + DOI) |
|---|---|---|
| Hanche / aine | 10 | Doha 2015, Warwick 2016, Reiman 2013, Dhillon 2025… |
| Genou | 11 | Benjaminse 2006, van Eck 2012, Sokal 2022, Smith 2015, Kazemi 2023 (Ottawa), Crossley 2016 |
| Cheville / pied | 9 | Gomes 2022 (Ottawa), Netterström-Wedin 2021 ×2, Maffulli 1998, Cushman 2024 |
| Cuisse / ischio | 6 | Pollock 2014 (British Athletics), Cacchio 2012 |
| Épaule | 8 | Hegedus 2012, Gismervik 2017, Luime 2004 (JAMA) |
| Rachis lombaire | 7 | Downie 2013 (BMJ), Scaia 2012 |
| Coude | 6 | O'Driscoll 2007 (hook test) |
| Poignet / main | 7 | Mallee 2014 (scaphoïde) |
| Rachis cervical | 5 | Thoomes 2017 (Spurling) |

> ⚠️ **Sourçage et honnêteté épistémique.** Toutes les valeurs Se/Sp proviennent
> d'articles réels (PubMed, DOI cités dans les champs `source`). Quand l'exactitude
> d'un test n'est pas établie dans la littérature, elle est explicitement marquée
> `// TODO à sourcer/valider` plutôt qu'inventée. Les poids et seuils sont des
> jugements cliniques **provisoires**.

## État — à valider par un humain

Les modules sont **structurés et sourcés** mais **NON encore validés cliniquement** :
les étapes 7-8 du brief (relecture par un confrère + test rétrospectif sur cas
connus pour recalibrer les poids) restent à réaliser avant tout usage réel. Aucun
module n'est « done » au sens de la section 8 tant que cette validation humaine
n'a pas eu lieu.

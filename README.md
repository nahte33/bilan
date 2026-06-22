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

## État

Première itération (section 9 du brief) : moteur + région hanche/aine + UI +
tests. **En attente de relecture humaine** avant d'ajouter d'autres régions.

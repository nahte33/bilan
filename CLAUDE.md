# Brief projet — Outil d'aide au raisonnement clinique (douleurs MSK du sportif)

> À utiliser comme **premier message** dans Claude Code **et** à enregistrer comme
> `CLAUDE.md` à la racine du dépôt pour qu'il garde ce contexte en permanence.

---

## 0. Comment démarrer (pour l'humain)

1. Crée un dépôt vide, ajoute les deux fichiers de référence à la racine ou dans `/reference` :
   - `hanche-aine.ts` → **les données cliniques** de la région hanche/aine (source canonique).
   - `prototype-bilan.html` → **prototype fonctionnel autonome** (données + moteur + UI) qui montre exactement le comportement attendu.
2. Colle ce brief comme premier message, et enregistre-le en `CLAUDE.md`.
3. Demande à Claude Code de faire **uniquement la première itération** (section 9), puis de s'arrêter pour relecture.

---

## 1. Mission

Construire une application web qui aide un kinésithérapeute à raisonner sur une douleur musculosquelettique du sportif. À partir d'une anamnèse adaptative, l'outil classe des **hypothèses** par cohérence, propose les **tests cliniques** qui les départagent, et fait remonter les **drapeaux rouges**. Le clinicien interprète et décide ; l'outil ne pose jamais de diagnostic.

L'application se construit **région par région** (hanche/aine d'abord, puis genou, épaule, etc.). Le moteur est écrit une seule fois ; chaque région = un fichier de données au même format.

---

## 2. Principes NON NÉGOCIABLES (garde-fous)

Ces règles priment sur toute autre considération. Ne jamais les contourner « pour faire mieux ».

1. **Aide à la décision, jamais diagnostic.** Vocabulaire imposé : « hypothèses », « cohérence », « orientation », « tests à réaliser ». Bannir « diagnostic », « le patient a… », et tout pourcentage de probabilité. Le clinicien décide.
2. **Déterministe et transparent.** Le classement vient de **règles explicites** (somme de poids). **Interdiction absolue d'utiliser un LLM / une API d'IA pour produire le score, le classement ou les hypothèses.** Toute sortie doit être traçable jusqu'aux réponses de l'anamnèse.
3. **Bandes qualitatives, pas de probabilités.** Sorties = « cohérence forte / modérée / faible » selon des seuils. Jamais de « 73 % » : ce ne serait pas une probabilité validée.
4. **Les drapeaux rouges priment** et s'affichent toujours en tête du bilan, visuellement distincts.
5. **Local-only, zéro donnée patient.** Aucun backend stockant des données identifiantes, aucune base, aucun envoi réseau de données saisies. Tout reste en mémoire de session. Pas de `localStorage` de données patient. (Cela maintient le projet hors du périmètre lourd RGPD/HDS au stade MVP.)
6. **Séparation stricte données / moteur.** Le moteur ne connaît aucune région en particulier. Ajouter une région ne touche jamais au moteur ni à l'UI.
7. **Honnêteté épistémique.** Les poids et les seuils de bandes sont des **jugements cliniques provisoires** ; les sensibilités/spécificités sont **indicatives et sourcées**. L'UI doit le rappeler.

---

## 3. Fichiers de référence fournis

- **`hanche-aine.ts`** : source canonique des données de la région hanche/aine (questions, hypothèses avec indices pondérés et sources, tests avec Se/Sp, drapeaux rouges, seuils de bandes). **Le contenu clinique de ce fichier ne doit pas être modifié** lors du portage — seulement transposé.
- **`prototype-bilan.html`** : spécification vivante du comportement. Le bloc `REGIONS` y est la donnée ; en dessous, le **moteur** (`matchVal`, `condOK`, `estVisible`, `classement`, `testsProposes`, `drapeauxActifs`, `bandePour`) et l'UI. Reproduire ce comportement à l'identique.

---

## 4. Tâche technique

Reconstruire le prototype en **Next.js (App Router) + React + TypeScript + Tailwind**, déployable sur **Vercel**, 100 % côté client. Porter fidèlement le moteur et la région hanche/aine, puis préparer la structure pour ajouter d'autres régions.

---

## 5. Architecture cible

```
app/
  page.tsx                  → écran principal (sélecteur de région + bilan)
lib/
  moteur/
    types.ts                → Question, Indice, Hypothese, Test, DrapeauRouge, Region
    engine.ts               → fonctions PURES, génériques, identiques au prototype
    engine.test.ts          → tests unitaires (voir section 9)
data/
  regions/
    hanche-aine.ts          → données portées depuis le fichier de référence
    index.ts                → registre des régions disponibles
components/
  Questionnaire.tsx         → questions adaptatives (affichage conditionnel)
  Bilan.tsx                 → drapeaux rouges + classement + tests
```

- **Moteur** = fonctions pures et typées, sans effet de bord, sans dépendance à React. La logique est déjà écrite et validée dans le prototype : la transposer, pas la réinventer.
- **UI** = questionnaire adaptatif (une question conditionnelle n'apparaît que si sa `condition` est vraie ; si elle redevient invisible, sa réponse est oubliée) + bilan en direct.

---

## 6. Règles d'implémentation — À FAIRE / À NE PAS FAIRE

**À FAIRE**
- Réutiliser **exactement** la logique du moteur du prototype (mêmes fonctions, mêmes résultats).
- Tout typer en TypeScript strict.
- Écrire des tests unitaires qui reproduisent les scénarios validés (section 9).
- Garder la primauté visuelle des drapeaux rouges.
- Responsive jusqu'au mobile, focus clavier visible, `prefers-reduced-motion` respecté.
- En cas de doute sur une intention, **poser la question à l'humain** plutôt que de supposer.

**À NE PAS FAIRE (erreurs interdites)**
- ❌ Introduire un LLM / une API pour générer le classement ou les hypothèses.
- ❌ **Inventer** du contenu clinique, des poids, des sensibilités/spécificités ou des sources. (voir section 7)
- ❌ Ajouter un stockage de données patient, un backend, une base, une authentification, une analytique.
- ❌ Remplacer « hypothèse » par « diagnostic », ou afficher un pourcentage de probabilité.
- ❌ Fusionner données et moteur, ou coder en dur des éléments d'une région dans le moteur.
- ❌ Sur-ingénierie : pas de state management lourd, pas de dépendances inutiles.

---

## 7. La BOUCLE par région (cœur reproductible)

Pour **chaque nouvelle région**, on produit un fichier `data/regions/<region>.ts` au même format que la hanche, **sans toucher au moteur**. La rédaction du contenu clinique suit ce protocole.

> ⚠️ **Règle d'or anti-erreur :** le contenu clinique repose sur des **sources réelles**, pas sur la mémoire du modèle. Tout élément non sourcé est marqué `// TODO à sourcer/valider` et **jamais présenté comme acquis**. Claude Code peut aider à chercher et à structurer, mais **n'invente jamais** une valeur de Se/Sp ni une référence. En cas d'incertitude : signaler, ne pas combler.

1. **Cadrer le périmètre** : lister ce qui est *dans* et *hors* de la région (entités fréquentes chez le sportif + à ne pas manquer). Écrire les exclusions.
2. **S'ancrer sur un cadre de référence** existant (consensus, recommandations de pratique, revue systématique récente) — comme l'accord de Doha pour l'aine. Ne pas réinventer la taxonomie.
3. **Pour chaque entité, extraire trois choses** : signes d'anamnèse discriminants ; tests cliniques **avec Se/Sp** et leur lecture rule-in / rule-out ; **source** de chaque élément.
4. **Respecter la hiérarchie de preuve** : consensus / recommandations > revues systématiques et méta-analyses d'exactitude diagnostique > études primaires > avis d'expert. Noter les Se/Sp comme indicatives (elles varient selon le standard de référence et le recrutement).
5. **Construire la couche drapeaux rouges** propre à la région (mimiques graves spécifiques) + les universelles.
6. **Pondérer** (provisoire) selon la force et la spécificité de chaque signe.
7. **Faire relire** par un ou deux confrères, puis **tester sur des cas connus** (rétrospectif) : si le classement ne retombe pas sur le diagnostic confirmé, réajuster les poids.
8. **Dater et versionner** le module (date, sources, version, cycle de revue).

Les régions s'enchaînent **par ordre de prévalence** dans la pratique.

---

## 8. Definition of done

**Par région**
- [ ] Périmètre (in/out) écrit.
- [ ] Chaque indice et chaque test portent une `source` réelle (ou un `TODO` explicite).
- [ ] Couche drapeaux rouges présente.
- [ ] Module daté/versionné.
- [ ] Relu par un confrère ; testé sur ≥ quelques cas connus.

**Global / technique**
- [ ] Séparation données / moteur respectée (ajouter une région ne touche que `data/`).
- [ ] Aucune donnée patient stockée ; aucun appel d'IA dans la logique de classement.
- [ ] Tests unitaires du moteur au vert.
- [ ] Drapeaux rouges en tête du bilan ; vocabulaire « hypothèse / orientation » partout.
- [ ] Responsive + accessibilité de base.

---

## 9. Première itération demandée (puis STOP)

Fais uniquement ceci, puis arrête-toi et montre le résultat avant d'aller plus loin :

1. Échafauder le projet Next.js + TS + Tailwind.
2. Transposer le **moteur** depuis le prototype dans `lib/moteur/` (fonctions pures + types).
3. Porter la région **hanche/aine** depuis `hanche-aine.ts` dans `data/regions/`, **sans modifier le contenu clinique**.
4. Implémenter `Questionnaire` et `Bilan` reproduisant le comportement du prototype.
5. Écrire des **tests unitaires** reproduisant ces scénarios de référence (déjà validés) :
   - douleur au pubis/adducteurs + frappe + début aigu → **adducteurs** en cohérence **forte** ;
   - douleur à l'appui/impact + RED-S + pic de charge → drapeau **fracture de fatigue du col** affiché, test de dépistage proposé ;
   - douleur profonde (signe du C) + accrochage + flexion assise → **atteinte intra-articulaire (FAI/labrum)** en tête, **FADIR + FABER** proposés ;
   - la question « localisation du ressaut » n'apparaît que si « ressaut = oui ».
6. Lancer en local, vérifier les tests, présenter.

**Ne pas** ajouter d'autres régions ni de fonctionnalités tant que cette base n'est pas validée par l'humain.

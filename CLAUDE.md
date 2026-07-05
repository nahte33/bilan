# Brief projet — Plateforme de référence pour kinésithérapeutes (« Bilan MSK » → plateforme kiné)

> Version 2 du brief (pivot du 2026-07-05, validé par l'humain). L'ancien brief
> (outil de bilan limité aux douleurs MSK du sportif) reste lisible dans
> `reference/brief-claude-code.md`. Les principes non négociables sont inchangés.

---

## 1. Mission

Construire une application **web + mobile (PWA)** qui centralise tout ce qui est
utile à la pratique du kinésithérapeute : une base de connaissances de référence,
légale et sourcée, pour **toutes les populations** (adultes MSK, gériatrie,
pédiatrie, sportifs, neuro/respi en phase 2).

**Onglet principal : l'aide au bilan** (anamnèse adaptative → hypothèses par
cohérence → tests → drapeaux rouges), à enrichir en continu. Autour de lui, des
modules de consultation :

| Module | Contenu |
|---|---|
| **Bilan** (principal) | Aide au raisonnement clinique par région, toutes populations |
| **Protocoles** | Protocoles de rééducation publiés (phases, critères, dosage, sources) |
| **Questionnaires** | PROMs et auto-questionnaires validés : fiche, scoring, MCID/MDC, statut copyright |
| **Tests cliniques** | Bibliothèque consultable : technique, Se/Sp, rule-in/out, sources |
| **Drapeaux rouges** | Signes d'alerte par région et population, conduite à tenir |
| **Normes** | Valeurs de référence : goniométrie, force, équilibre, marche… |
| **Exercices** | Bibliothèque d'exercices par région/pathologie/phase |
| **NGAP / cotation** | Lettres-clés, actes courants, règles de cumul (France) |
| **Cadre légal** | Décret de compétences, accès direct, obligations (France) |
| **Anatomie** | Dermatomes, myotomes, réflexes, innervation, repères palpatoires |
| **Glossaire EBP** | Se/Sp, LR, MCID, NNT… définis simplement |

---

## 2. Principes NON NÉGOCIABLES (garde-fous — inchangés)

1. **Aide à la décision, jamais diagnostic.** Vocabulaire : « hypothèses », « cohérence », « orientation ». Bannir « diagnostic », « le patient a… », tout pourcentage de probabilité.
2. **Déterministe et transparent.** Classement par somme de poids explicites. **Interdiction absolue d'un LLM/API d'IA dans la logique.** Toute sortie traçable jusqu'aux réponses.
3. **Bandes qualitatives, pas de probabilités.**
4. **Les drapeaux rouges priment**, toujours en tête, visuellement distincts.
5. **Local-only, zéro donnée patient.** Aucun backend, aucune base, aucun envoi réseau de données saisies. Pas de `localStorage` de données patient.
6. **Séparation stricte données / moteur / UI.** Ajouter un contenu = ajouter un fichier de données, jamais toucher au moteur.
7. **Honnêteté épistémique.** Poids/seuils = jugements provisoires ; Se/Sp indicatives et sourcées ; l'UI le rappelle.
8. **⚠️ Règle d'or anti-fabrication : ne JAMAIS inventer** un contenu clinique, une valeur Se/Sp, un protocole, un dosage, une norme, une règle de cotation ni une source. Sourcer (PubMed/DOI, textes officiels) ou marquer `// TODO à sourcer/valider`. En cas d'incertitude : signaler, ne pas combler.
9. **Légalité du contenu.** Questionnaires/PROMs : fiche descriptive pour tous (indication, population, scoring, MCID/MDC, interprétation, source) ; **reproduction intégrale uniquement si libre de droits** — sinon lien vers la source officielle. Idem pour toute figure/contenu tiers.

---

## 3. Architecture

```
app/                      routes (une par module + accueil + méthode + mentions)
lib/moteur/               moteur du bilan : fonctions PURES, génériques
lib/recherche/            recherche client-side transversale
data/
  regions/                modules du bilan (1 fichier = 1 région)
  protocoles/             1 fichier = 1 protocole sourcé
  questionnaires/         1 fichier = 1 fiche PROM
  tests-cliniques/        bibliothèque (générée/enrichie depuis les régions)
  drapeaux/               drapeaux rouges transversaux par population
  normes/                 valeurs de référence sourcées
  exercices/              bibliothèque d'exercices
  ngap/                   fiches cotation (datées, sourcées textes officiels)
  legal/                  fiches cadre légal (datées, sourcées)
  anatomie/               dermatomes, myotomes, réflexes…
  glossaire/              termes EBP
components/               UI (shell du site + composants par module)
reference/                fichiers de référence historiques
```

- Chaque type de contenu a son **type TS strict** et son **registre** ; le moteur du bilan reste inchangé et générique.
- **PWA** : manifest + service worker (cache statique), installable iOS/Android.
- Contenu daté/versionné ; les fiches réglementaires (NGAP, légal) portent leur date de vérification.

## 4. Definition of done (par module de contenu)

- [ ] Chaque élément porte une `source` réelle (ou `TODO` explicite) ;
- [ ] Statut copyright vérifié pour les questionnaires ;
- [ ] Daté/versionné ;
- [ ] Relu par un confrère (validation humaine — hors de portée de Claude) ;
- [ ] Tests unitaires au vert, build OK, responsive + accessibilité de base.

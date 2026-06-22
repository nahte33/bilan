# Bilan MSK — Document de revue clinique

> **Document généré automatiquement** depuis les modules de données (`data/regions/`).
> Ne pas modifier à la main : éditer les modules puis régénérer
> (`npx vite-node scripts/generate-revue.ts`). Généré le 2026-06-22.

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

## Hanche / aine

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 22 questions · 10 hypothèses · 12 tests · 8 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Douleur liée aux adducteurs (tendinopathie / lésion de l'adducteur long)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Pubis / insertion des adducteurs | +3 | Doha 2015 ; Hölmich 2004 (origine ADL = site principal, 94%) |
| Frappe / shoot | +2 | — |
| Changements de direction | +1 | — |
| Aiguë, sur un geste précis | +1 | — |

#### Douleur pubienne / symphysaire (pubalgie symphysaire)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Pubis / insertion des adducteurs | +2 | Doha 2015 |
| Progressive / insidieuse | +2 | — |
| Augmentation récente et marquée de la charge d'entraînement : oui | +1 | — |

#### Douleur inguinale (paroi / canal inguinal)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Pli de l'aine / face antérieure | +2 | Doha 2015 |
| Aggravation à la toux / éternuement / manœuvre de Valsalva : oui | +2 | — |
| Sprint / accélération | +1 | — |

#### Douleur liée à l'iliopsoas  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Pli de l'aine / face antérieure | +2 | Doha 2015 |
| Montée du genou / flexion de hanche active | +3 | — |
| Progressive / insidieuse | +1 | — |

#### Atteinte intra-articulaire (conflit fémoro-acétabulaire / lésion du labrum)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Profonde, en C autour de la hanche (signe du C) | +3 | Accord de Warwick 2016 (FAI : effet came / effet pince) |
| Accrochage, blocage ou dérobement : oui | +2 | — |
| Flexion profonde / assise basse | +2 | — |
| Aggravation par la position assise prolongée : oui | +1 | — |

#### Coxa saltans interna (ressaut interne de l'iliopsoas)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Sensation de ressaut / claquement de hanche : oui | +3 | — |
| Antérieur / profond (iliopsoas) | +2 | — |
| Pli de l'aine / face antérieure | +1 | — |

#### Tendinopathie fessière / GTPS (moyen et petit fessiers)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Latérale, sur le grand trochanter | +3 | Grimaldi 2015 ; Mathew (GTPS = tendinopathie GMed/GMin, non bursite) |
| Douleur en position couchée sur le côté atteint / la nuit sur ce côté : oui | +2 | — |
| Montée d'escaliers | +1 | — |
| Appui monopodal / impact | +1 | — |

#### Coxa saltans externa (ressaut externe, bandelette ilio-tibiale)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Sensation de ressaut / claquement de hanche : oui | +2 | — |
| Latéral, sur le grand trochanter (bandelette) | +3 | — |
| Latérale, sur le grand trochanter | +1 | — |

#### Syndrome glutéal profond / piriforme (compression non discale du nerf sciatique)  _(quadrant : Postérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Postérieure / fessière | +3 | Martin 2014 ; Carro 2016 (deep gluteal syndrome) |
| Aggravation par la position assise prolongée : oui | +2 | — |
| Irradiation dans la fesse / l'arrière de la cuisse / la jambe (sciatalgie) : oui | +2 | — |
| Engourdissements / fourmillements / brûlures sur le trajet : oui | +1 | — |

#### Coxarthrose (arthrose de hanche)  _(quadrant : Antérieur / intra-articulaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Raideur matinale et/ou perte de rotation interne de hanche : oui | +3 | — |
| Plus de 50 ans | +2 | — |
| Profonde, en C autour de la hanche (signe du C) | +1 | — |
| Progressive / insidieuse | +1 | — |

### Tests proposés

**Palpation de l'origine de l'adducteur long**  — _départage : Douleur liée aux adducteurs (tendinopathie / lésion de l'adducteur long)_  
Valeur diagnostique : Site de douleur le plus prévalent dans l'atteinte des adducteurs (94%). Fiabilité inter-examinateur seulement faible à modérée.  
Source : Heijboer 2024 ; Hölmich 2004

**Squeeze test des adducteurs (0° et 45°)**  — _départage : Douleur liée aux adducteurs (tendinopathie / lésion de l'adducteur long), Douleur pubienne / symphysaire (pubalgie symphysaire)_  
Technique : Adduction isométrique contre le poing/genou ; reproduction de la douleur inguinale.  
Valeur diagnostique : Positif dans 62-70% des cas, reproductibilité modérée. Précision >90% pour localiser les atteintes AIGUËS des adducteurs.  
Source : Verrall 2005 ; Serner 2016 ; Heijboer 2024

**Adduction résistée en abduction maximale**  — _départage : Douleur liée aux adducteurs (tendinopathie / lésion de l'adducteur long)_  
Valeur diagnostique : Test de résistance positif le plus prévalent (72%), fiabilité substantielle. À inclure pour ne pas manquer un test positif en flexion.  
Source : Heijboer 2024

**Flexion de hanche résistée + étirement (Thomas)**  — _départage : Douleur liée à l'iliopsoas_  
Technique : Douleur à la flexion résistée et/ou à l'étirement de l'iliopsoas.  
Valeur diagnostique : Difficulté connue à distinguer iliopsoas et droit fémoral proximal sur l'examen clinique seul.  
Source : Doha 2015 ; Serner 2018 (JOSPT)

**Sit-up / crunch résisté + palpation pubienne**  — _départage : Douleur inguinale (paroi / canal inguinal), Douleur pubienne / symphysaire (pubalgie symphysaire)_  
Source : _(non documentée / à sourcer)_

**FADIR (flexion-adduction-rotation interne)**  — _départage : Atteinte intra-articulaire (conflit fémoro-acétabulaire / lésion du labrum)_  
Technique : Reproduction d'une douleur antérieure profonde.  
Valeur diagnostique : Sensibilité élevée (≈0,96 ; intervalles larges 0,43-1,0 selon les études), spécificité FAIBLE (≈0,11). => bon test pour ÉLIMINER (rule-out) une atteinte intra-articulaire, pas pour confirmer.  
Source : Reiman 2013 (méta-analyse, BJSM) ; Shanmugaraj 2020

**FABER (Patrick)**  — _départage : Atteinte intra-articulaire (conflit fémoro-acétabulaire / lésion du labrum)_  
Technique : Flexion-abduction-rotation externe ; pied au-dessus du genou opposé.  
Valeur diagnostique : Sensibilité FAIBLE (≈41%) mais spécificité ÉLEVÉE (jusqu'à 100% pour le labrum) => bon test pour CONFIRMER (rule-in). Douleur postérieure controlatérale -> orienter vers la sacro-iliaque.  
Source : Dhillon 2025 (revue systématique) ; Tijssen 2012

**Log roll (rotation passive en décubitus)**  — _départage : Atteinte intra-articulaire (conflit fémoro-acétabulaire / lésion du labrum)_  
Valeur diagnostique : Un des tests les plus spécifiques de l'origine intra-articulaire (peu de sollicitation des tissus péri-articulaires).  
Source : _(non documentée / à sourcer)_

**Reproduction active du ressaut**  — _départage : Coxa saltans interna (ressaut interne de l'iliopsoas), Coxa saltans externa (ressaut externe, bandelette ilio-tibiale)_  
Technique : Passage flexion-abduction-RE vers extension-adduction-RI ; ressaut palpable/audible.  
Source : _(non documentée / à sourcer)_

**Palpation du grand trochanter + appui monopodal 30 s**  — _départage : Tendinopathie fessière / GTPS (moyen et petit fessiers)_  
Valeur diagnostique : Palpation : Se ≈80%, Sp ≈47% (sensible mais peu spécifique). Appui monopodal 30 s : plus spécifique.  
Source : Grimaldi ; Ganderton ; physiotutors (synthèse)

**FADER-R / ADD-R (résistés)**  — _départage : Tendinopathie fessière / GTPS (moyen et petit fessiers)_  
Technique : Mise en compression-tension des tendons fessiers en flexion-ADD-RE puis RI isométrique résistée.  
Source : _(non documentée / à sourcer)_

**Test du piriforme actif / étirement assis (FAIR)**  — _départage : Syndrome glutéal profond / piriforme (compression non discale du nerf sciatique)_  
Valeur diagnostique : Piriforme actif : Se ≈78%, Sp ≈80%. Étirement assis du piriforme : Se ≈52%, Sp ≈90%. (Données d'une seule étude => valeur clinique modérée.)  
Source : Martin 2014 (KSSTA)

**Fulcrum test + appui/saut monopodal (DÉPISTAGE FRACTURE)** _(dépistage — proposé si « Douleur à l'appui monopodal, au saut ou à l'impact (hop) : oui »)_  
Technique : Pression dorsale sur le genou, cuisse en bord de table ; douleur focale = suspect.  
Valeur diagnostique : Fulcrum = test clinique le plus valide pour la fracture de fatigue du col ; hop sensible mais à manier avec prudence. ⚠️ Radiographie souvent NORMALE au début -> IRM si suspicion.  
Source : Physiopedia (Femoral Stress Fracture) ; JOSPT 2018

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de fracture de fatigue du col fémoral** | Douleur à l'appui monopodal, au saut ou à l'impact (hop) : oui | Mise en décharge + IRM (la radiographie est souvent normale au début). NE PAS charger. RED-S et pic de charge = facteurs aggravants. Risque d'ostéonécrose si déplacement. | Bui & Papadakis ; JOSPT 2018 ; Nattiv 2013 |
| **Suspicion de hernie inguinale/fémorale vraie** | Tuméfaction inguinale palpable (visible à l'effort / Valsalva) : oui | Examen ciblé + avis chirurgical. À distinguer de l'atteinte inguinale (Doha), qui n'a pas de hernie palpable. | Doha 2015 (catégorie 'autres causes') |
| **Suspicion d'avulsion apophysaire** | Début sur une contraction explosive (sprint, frappe, départ) : oui + Adolescent (squelette en croissance) | Radiographie. Fréquent chez l'adolescent sportif (EIAS/sartorius, EIAI/droit fémoral, petit trochanter/iliopsoas, ischion/ischio-jambiers). | — |
| **Suspicion d'épiphysiolyse fémorale supérieure (SCFE)** | Adolescent (squelette en croissance) + Profonde, en C autour de la hanche (signe du C) | Urgence orthopédique. Radiographie hanche/bassin. Douleur de hanche OU de genou + boiterie chez l'adolescent. | — |
| **Suspicion d'arthrite septique / infection** | Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Avis médical urgent (urgences). | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale ou inflammatoire. | — |
| **Possible origine rachidienne / radiculaire** | Irradiation dans la fesse / l'arrière de la cuisse / la jambe (sciatalgie) : oui | Examiner le rachis lombaire et éliminer une sciatique discogène AVANT de conclure à une cause locale. | Carro 2016 (DDx du deep gluteal syndrome) |
| **Possible cause intrapelvienne (non MSK)** | Douleur cyclique ou signes urinaires / gynécologiques associés : oui | Orienter vers un avis médical (urologique / gynécologique). | — |

---

## Genou

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 22 questions · 11 hypothèses · 13 tests · 6 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Douleur fémoro-patellaire (PFP)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Antérieure / rotulienne | +3 | Crossley 2016 (consensus, BJSM) DOI 10.1136/bjsports-2016-096384 |
| Douleur antérieure à l'accroupissement, en descente d'escaliers, ou à l'assise prolongée : oui | +3 | Crossley 2016 (douleur aggravée par la mise en charge du genou fléchi) |
| Descente d'escaliers / de pente | +1 | — |
| Accroupissement / squat | +1 | — |
| Position assise prolongée, genou fléchi | +1 | — |
| Progressive / sans traumatisme | +1 | — |

#### Tendinopathie rotulienne (jumper's knee)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur localisée au pôle inférieur de la rotule, liée à la charge (sauts) : oui | +3 | — |
| Sauts répétés / réception | +2 | — |
| Antérieure / rotulienne | +1 | — |
| Progressive / sans traumatisme | +1 | — |

#### Rupture du ligament croisé antérieur (LCA)  _(quadrant : Pivot central)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Pivot / réception sans contact (valgus-rotation) | +3 | — |
| Craquement audible (« pop ») au moment de la blessure : oui | +2 | — |
| Immédiat (< 2-4 h → hémarthrose) | +2 | — |
| Sensation d'instabilité / dérobement (giving way) : oui | +2 | — |

#### Lésion méniscale  _(quadrant : Interligne)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Blocage vrai (genou bloqué, extension impossible) : oui | +3 | — |
| Interligne interne (médial) + Interligne externe (latéral) | +2 | — |
| Retardé (le lendemain) | +2 | — |
| Torsion sur pied fixé | +2 | — |
| Flexion profonde en charge | +1 | — |

#### Entorse du ligament collatéral médial (LLI)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Choc direct en valgus (sur la face externe) | +3 | — |
| Interligne interne (médial) | +1 | — |
| Aiguë, traumatique | +1 | — |

#### Entorse du ligament collatéral latéral / coin postéro-externe  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Choc direct en varus (sur la face interne) | +3 | — |
| Hyperextension | +1 | — |
| Interligne externe (latéral) | +1 | — |

#### Rupture du ligament croisé postérieur (LCP)  _(quadrant : Pivot central)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Choc antérieur sur tibia fléchi (tableau de bord) | +3 | — |
| Hyperextension | +1 | — |
| Postérieure (creux poplité) | +1 | — |

#### Syndrome de la bandelette ilio-tibiale (essuie-glace)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Latérale, sur le condyle externe | +3 | — |
| Course (surtout en descente) | +2 | — |
| Progressive / sans traumatisme | +1 | — |

#### Instabilité fémoro-patellaire  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Appréhension à la poussée latérale de la rotule (genou en légère flexion) : oui | +3 | — |
| Antécédent de luxation / subluxation de rotule : oui | +3 | — |
| Sensation d'instabilité / dérobement (giving way) : oui | +1 | — |

#### Gonarthrose (arthrose fémoro-tibiale / fémoro-patellaire)  _(quadrant : Intra-articulaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Raideur de démarrage / dérouillage, douleur mécanique chronique : oui | +3 | — |
| Plus de 50 ans | +2 | — |
| Progressive / sans traumatisme | +1 | — |

#### Maladie d'Osgood-Schlatter (apophysite tibiale antérieure)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur + tuméfaction de la tubérosité tibiale antérieure (sportif en croissance) : oui | +3 | — |
| Adolescent (squelette en croissance) | +1 | — |
| Sauts répétés / réception | +1 | — |

### Tests proposés

**Test de Lachman**  — _départage : Rupture du ligament croisé antérieur (LCA)_  
Technique : Tiroir antérieur à ~20-30° de flexion ; apprécier l'arrêt (dur/mou) et le déplacement.  
Valeur diagnostique : Se ≈85% / Sp ≈94% (Benjaminse 2006). Méta-analyse bivariée plus récente : Se ≈81% / Sp ≈85%, et Se plus basse pour les ruptures complètes/post-aiguës (Sokal 2022). Reste le test de référence en pratique.  
Source : Benjaminse 2006 (JOSPT) DOI 10.2519/jospt.2006.2011 ; Sokal 2022 (KSSTA) DOI 10.1007/s00167-022-06898-4

**Test du ressaut rotatoire (pivot shift)**  — _départage : Rupture du ligament croisé antérieur (LCA)_  
Technique : Reproduction de la subluxation-réduction du plateau tibial externe en valgus-rotation interne.  
Valeur diagnostique : Très spécifique mais peu sensible : Se ≈24% / Sp ≈98% (Benjaminse 2006) ; Se ≈55% / Sp ≈94% (Sokal 2022). => bon pour CONFIRMER (rule-in). Sensibilité nettement meilleure sous anesthésie.  
Source : Benjaminse 2006 DOI 10.2519/jospt.2006.2011 ; Sokal 2022 DOI 10.1007/s00167-022-06898-4

**Tiroir antérieur (90° de flexion)**  — _départage : Rupture du ligament croisé antérieur (LCA)_  
Valeur diagnostique : Bonne valeur en conditions chroniques (Se ≈92% / Sp ≈91%) mais médiocre en aigu (Se ≈38% en complète aiguë) (Benjaminse 2006 ; van Eck 2012).  
Source : Benjaminse 2006 DOI 10.2519/jospt.2006.2011 ; van Eck 2012 (KSSTA) DOI 10.1007/s00167-012-2250-9

**Lever sign (test de Lelli)**  — _départage : Rupture du ligament croisé antérieur (LCA)_  
Valeur diagnostique : Se ≈83% / Sp ≈91% (méta-analyse bivariée, Sokal 2022) ; identifié comme le meilleur test pour ÉLIMINER (rule-out). Données encore limitées.  
Source : Sokal 2022 (KSSTA) DOI 10.1007/s00167-022-06898-4

**Test de McMurray**  — _départage : Lésion méniscale_  
Valeur diagnostique : Se ≈61% / Sp ≈84% (Smith 2015). Plutôt utile pour confirmer que pour éliminer. ⚠️ Qualité des études faible, forte hétérogénéité.  
Source : Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160

**Test de Thessaly (à 20° de flexion)**  — _départage : Lésion méniscale_  
Valeur diagnostique : Se ≈75% / Sp ≈87% (Smith 2015). ⚠️ Qualité des études faible ; performances initialement surestimées par les études d'origine.  
Source : Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160

**Douleur à la palpation de l'interligne**  — _départage : Lésion méniscale_  
Valeur diagnostique : Se ≈83% / Sp ≈83% (Smith 2015) : test le plus sensible des trois, utile en première intention. ⚠️ Peu spécifique d'une lésion méniscale isolée.  
Source : Smith 2015 (Evid Based Med) DOI 10.1136/ebmed-2014-110160

**Test de contrainte en valgus (0° et 30°)**  — _départage : Entorse du ligament collatéral médial (LLI)_  
Technique : Laxité / douleur médiale en valgus forcé ; comparer au côté sain.  
Valeur diagnostique : Reproduction de la douleur/laxité médiale. ⚠️ Pas de consensus établi sur la Se/Sp des tests cliniques des ligaments collatéraux (Mabrouk 2023). Se/Sp // TODO à sourcer/valider.  
Source : Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3

**Test de contrainte en varus (0° et 30°) + bilan coin postéro-externe**  — _départage : Entorse du ligament collatéral latéral / coin postéro-externe_  
Valeur diagnostique : ⚠️ Pas de consensus établi sur la Se/Sp des tests cliniques du compartiment latéral (Mabrouk 2023). Évaluer aussi dial test / recurvatum. Se/Sp // TODO à sourcer/valider.  
Source : Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3

**Tiroir postérieur + signe de l'affaissement (posterior sag)**  — _départage : Rupture du ligament croisé postérieur (LCP)_  
Valeur diagnostique : Affaissement postérieur du tibia à 90° + tiroir postérieur. ⚠️ Pas de consensus établi sur la Se/Sp (Mabrouk 2023). Se/Sp // TODO à sourcer/valider.  
Source : Mabrouk 2023 (revue systématique) DOI 10.1007/s00167-023-07617-3

**Test de Noble (compression) / test de Renne**  — _départage : Syndrome de la bandelette ilio-tibiale (essuie-glace)_  
Valeur diagnostique : Reproduction de la douleur latérale vers 30° de flexion au condyle externe. // TODO à sourcer/valider (Se/Sp non établies dans la littérature consultée).  
Source : _(non documentée / à sourcer)_

**Squat unipodal en décliné (single-leg decline squat)**  — _départage : Tendinopathie rotulienne (jumper's knee)_  
Valeur diagnostique : Test de provocation de la douleur du tendon rotulien, utilisé comme standard de provocation dans les études (de Vries 2015). // TODO à sourcer/valider (Se/Sp diagnostiques non établies).  
Source : de Vries 2015 (Scand J Med Sci Sports) DOI 10.1111/sms.12556

**Test d'appréhension rotulienne (et moving patellar apprehension test)**  — _départage : Instabilité fémoro-patellaire_  
Valeur diagnostique : Appréhension à la translation latérale de la rotule. // TODO à sourcer/valider (Se/Sp non établies dans la littérature consultée).  
Source : _(non documentée / à sourcer)_

**Règle d'Ottawa du genou (DÉPISTAGE FRACTURE)** _(dépistage — proposé si « Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) : oui »)_  
Technique : Radiographie si ≥1 critère : âge ≥55 ans, douleur isolée de la rotule, douleur de la tête de la fibula, flexion < 90°, incapacité de faire 4 pas en appui.  
Valeur diagnostique : Se ≈98% / Sp ≈43% (Kazemi 2023) : excellent pour ÉLIMINER une fracture (rule-out) et réduire les radiographies inutiles ; peu spécifique.  
Source : Kazemi 2023 (revue systématique + méta-analyse) DOI 10.22037/aaem.v11i1.1934

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de fracture (critère d'Ottawa positif)** | Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) : oui | Radiographie selon la règle d'Ottawa du genou. NE PAS charger tant que la fracture n'est pas éliminée. | Kazemi 2023 DOI 10.22037/aaem.v11i1.1934 |
| **Suspicion de rupture de l'appareil extenseur / fracture de rotule** | Déficit d'extension active (incapacité à tenir la jambe tendue / à la relever) : oui | Déficit d'extension active = avis chirurgical + imagerie (rupture du tendon rotulien ou quadricipital, fracture de rotule). | — |
| **Suspicion d'arthrite septique** | Genou chaud, rouge, très douloureux avec fièvre : oui | Urgence : avis médical immédiat, ponction articulaire avant toute antibiothérapie. | — |
| **Suspicion de thrombose veineuse profonde** | Mollet douloureux, œdématié, chaud : oui | Évaluation urgente (score de Wells, écho-doppler veineux). Ne pas mobiliser/masser avant d'éliminer une TVP. | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale (l'ostéosarcome touche fréquemment le genou de l'adolescent/jeune adulte) ou inflammatoire. | — |
| **Chez l'adolescent : penser à la hanche (douleur projetée)** | Adolescent (squelette en croissance) | Toute gonalgie de l'enfant/adolescent impose d'examiner la hanche (épiphysiolyse fémorale supérieure, Legg-Calvé-Perthes peuvent se projeter au genou). | — |

---

## Cheville / pied

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 20 questions · 9 hypothèses · 11 tests · 6 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Entorse latérale de cheville (LTFA / LCF)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Inversion / supination (torsion en dedans) | +3 | — |
| Malléole externe / face latérale | +2 | — |
| Gonflement et/ou ecchymose rapides : oui | +1 | — |
| Instabilité / entorses à répétition / dérobements : oui | +1 | — |

#### Entorse de la syndesmose (entorse haute)  _(quadrant : Antéro-supérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Rotation externe sur pied fixé | +3 | — |
| Au-dessus de la cheville, antéro-latérale (syndesmose) | +2 | — |
| Flexion dorsale forcée | +1 | — |

#### Entorse médiale (ligament deltoïde)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Éversion / pronation (torsion en dehors) | +3 | — |
| Malléole interne / face médiale | +2 | — |

#### Rupture du tendon d'Achille  _(quadrant : Postérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Sensation de « coup » / claquement au mollet-talon | +2 | — |
| Claquement audible / sensation de coup au moment de la blessure : oui | +2 | — |
| Incapacité de se hisser sur la pointe du pied (sur une jambe) : oui | +2 | — |
| Tendon d'Achille / talon postérieur | +2 | — |

#### Tendinopathie du tendon d'Achille  _(quadrant : Postérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur du tendon d'Achille liée à la charge (course, sauts), avec raideur matinale du tendon : oui | +3 | — |
| Tendon d'Achille / talon postérieur | +1 | — |
| Progressive / sans traumatisme | +1 | — |
| Course | +1 | — |

#### Aponévrosite plantaire (fasciite plantaire)  _(quadrant : Plantaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur du talon maximale aux premiers pas du matin / après repos : oui | +3 | — |
| Talon, sous le pied | +2 | — |
| Progressive / sans traumatisme | +1 | — |

#### Dysfonction du tendon tibial postérieur  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Affaissement de l'arche interne / pied plat acquis / « trop d'orteils visibles » de dos : oui | +3 | — |
| Arche interne du pied | +2 | — |
| Progressive / sans traumatisme | +1 | — |

#### Pathologie des tendons fibulaires (péroniers)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Rétro-malléolaire externe (fibulaires) | +3 | — |
| Ressaut / luxation des tendons en arrière de la malléole externe : oui | +2 | — |
| Progressive / sans traumatisme | +1 | — |

#### Fracture de fatigue (os naviculaire, métatarsiens, malléole)  _(quadrant : Osseux)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur focale osseuse à l'appui / au saut / à l'impact, d'aggravation progressive : oui | +3 | — |
| Augmentation récente et marquée de la charge d'entraînement : oui | +1 | — |
| Facteurs RED-S (faible disponibilité énergétique, aménorrhée, ATCD de fracture de fatigue) : oui | +1 | — |
| Progressive / sans traumatisme | +1 | — |

### Tests proposés

**Palpation du ligament talo-fibulaire antérieur (LTFA)**  — _départage : Entorse latérale de cheville (LTFA / LCF)_  
Valeur diagnostique : Très sensible mais peu spécifique (Se 95-100% / Sp 0-32%) → bon pour ÉLIMINER (rule-out). À combiner avec le tiroir antérieur.  
Source : Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953

**Tiroir antérieur de cheville**  — _départage : Entorse latérale de cheville (LTFA / LCF)_  
Valeur diagnostique : Se ≈54% / Sp ≈87% (données poolées) → plutôt pour CONFIRMER (rule-in). Sensibilité meilleure à distance du traumatisme (≥5 j).  
Source : Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953

**Test du tiroir en inversion (talar tilt)**  — _départage : Entorse latérale de cheville (LTFA / LCF)_  
Valeur diagnostique : Peut CONFIRMER une atteinte du ligament calcanéo-fibulaire ; un test sensible pour ce ligament fait défaut.  
Source : Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953

**Cluster syndesmose : palpation + dorsiflexion-lunge, puis squeeze + rotation externe**  — _départage : Entorse de la syndesmose (entorse haute)_  
Technique : Tests sensibles (palpation Se ≈92%, dorsiflexion-lunge Se ≈75%) en dépistage, puis tests spécifiques (squeeze Sp ≈85%, rotation externe Sp ≈78%).  
Valeur diagnostique : Aucun test isolé n'est à la fois sensible et spécifique. La stabilité (stable/instable) requiert l'imagerie/arthroscopie.  
Source : Netterström-Wedin 2021 (Phys Ther Sport) DOI 10.1016/j.ptsp.2021.03.005

**Test de pression du mollet (Thompson / Simmonds)**  — _départage : Rupture du tendon d'Achille_  
Technique : Patient à plat ventre ; la compression du mollet ne produit pas de flexion plantaire si le tendon est rompu.  
Valeur diagnostique : Se ≈0,96 / Sp ≈0,93 : test le plus sensible pour la rupture complète. À combiner (≥2 tests positifs).  
Source : Maffulli 1998 (Am J Sports Med) DOI 10.1177/03635465980260021801

**Test de Matles (flexion active du genou à plat ventre)**  — _départage : Rupture du tendon d'Achille_  
Valeur diagnostique : Se ≈0,88 / Sp ≈0,85. Position du pied en flexion dorsale/neutre (au lieu de flexion plantaire) = suspect de rupture.  
Source : Maffulli 1998 (Am J Sports Med) DOI 10.1177/03635465980260021801

**Palpation + mise en charge du tendon d'Achille (talon levé, sauts)**  — _départage : Tendinopathie du tendon d'Achille_  
Valeur diagnostique : Diagnostic clinique (douleur localisée + épaississement). À l'échographie, une image normale a une bonne valeur prédictive négative du développement de douleur (VPN ≈92%) mais une faible VPP. Se/Sp d'un test clinique isolé // TODO à sourcer/valider.  
Source : Cushman 2024 (Clin J Sport Med) DOI 10.1097/JSM.0000000000001236

**Palpation de l'insertion plantaire + test de Windlass (mise en tension de l'aponévrose)**  — _départage : Aponévrosite plantaire (fasciite plantaire)_  
Valeur diagnostique : Reproduction de la douleur au tubercule calcanéen médial. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Heel-raise unipodal répété + signe « trop d'orteils »**  — _départage : Dysfonction du tendon tibial postérieur_  
Valeur diagnostique : Douleur/impossibilité au heel-raise unipodal et défaut d'inversion du talon. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Éversion résistée + recherche de subluxation des fibulaires**  — _départage : Pathologie des tendons fibulaires (péroniers)_  
Valeur diagnostique : Douleur à l'éversion résistée / ressaut rétro-malléolaire. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Palpation osseuse focale + percussion / hop test (dépistage fracture de fatigue)**  — _départage : Fracture de fatigue (os naviculaire, métatarsiens, malléole)_  
Valeur diagnostique : ⚠️ Radiographie souvent normale au début → IRM si suspicion. Le naviculaire et la base du 5e métatarsien sont des sites à haut risque de non-consolidation. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Règle d'Ottawa cheville/pied (DÉPISTAGE FRACTURE)** _(dépistage — proposé si « Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) : oui »)_  
Technique : Radiographie si douleur malléolaire/médio-pied AVEC ≥1 : douleur osseuse au bord postérieur d'une malléole, base du 5e métatarsien, naviculaire, OU incapacité de faire 4 pas en appui.  
Valeur diagnostique : Se ≈91% / Sp ≈25% chez l'adulte : très sensible (bon rule-out), peu spécifique. Réduit les radiographies inutiles.  
Source : Gomes 2022 (BMC Musculoskelet Disord) DOI 10.1186/s12891-022-05831-7

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de fracture (critère d'Ottawa positif)** | Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) : oui | Radiographie selon la règle d'Ottawa cheville/pied. NE PAS charger tant que la fracture n'est pas éliminée. | Gomes 2022 DOI 10.1186/s12891-022-05831-7 |
| **Suspicion de rupture du tendon d'Achille** | Incapacité de se hisser sur la pointe du pied (sur une jambe) : oui | Tests de Thompson + Matles ; avis chirurgical rapide. Une flexion plantaire active résiduelle (longs fléchisseurs) n'élimine PAS la rupture. | Maffulli 1998 DOI 10.1177/03635465980260021801 |
| **Suspicion de fracture de fatigue (site à haut risque)** | Douleur focale osseuse à l'appui / au saut / à l'impact, d'aggravation progressive : oui | Décharge + IRM (radiographie souvent normale au début). Naviculaire et base du 5e métatarsien = non-consolidation fréquente. RED-S/pic de charge aggravants. | — |
| **Atteinte neuro-vasculaire / syndrome de loge** | Pied froid/pâle, douleur disproportionnée, déficit de sensibilité ou de motricité : oui | Urgence : douleur disproportionnée, pied froid/pâle ou déficit sensitivomoteur → avis médical immédiat. | — |
| **Suspicion d'infection / cause systémique** | Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Avis médical urgent (arthrite septique, ostéomyélite). | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale ou inflammatoire. | — |

---

## Cuisse / ischio-jambiers

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 17 questions · 6 hypothèses · 6 tests · 6 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Lésion myo-aponévrotique des ischio-jambiers  _(quadrant : Postérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Course à haute vitesse / sprint | +3 | Pollock 2014 (mécanisme high-speed running) DOI 10.1136/bjsports-2013-093302 |
| Corps de la cuisse postérieure + Haut de la cuisse postérieure / ischion (pli fessier) | +2 | — |
| Sensation de déchirure / claquement au moment de la blessure : oui | +1 | — |
| Douleur reproduite à l'étirement des ischio-jambiers : oui | +1 | — |

#### Tendinopathie proximale des ischio-jambiers  _(quadrant : Postérieur proximal)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Haut de la cuisse postérieure / ischion (pli fessier) | +3 | Cacchio 2012 DOI 10.1136/bjsports-2011-090325 |
| Douleur à la position assise prolongée (sur l'ischion) : oui | +2 | — |
| Progressive / insidieuse | +2 | — |
| Douleur à la course / aux accélérations, d'installation progressive : oui | +1 | — |

#### Avulsion apophysaire de la tubérosité ischiatique (adolescent)  _(quadrant : Postérieur proximal)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur aiguë de l'ischion sur contraction explosive (sprint, grand écart) chez le sportif en croissance : oui | +3 | — |
| Adolescent (squelette en croissance) | +1 | — |
| Étirement brutal (grand écart, fente, jambe lancée) | +1 | — |

#### Lésion du droit fémoral / quadriceps  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Frappe / armer du tir (extension de hanche-flexion genou) | +3 | — |
| Face antérieure (quadriceps) | +2 | — |
| Course à haute vitesse / sprint | +1 | — |
| Sensation de déchirure / claquement au moment de la blessure : oui | +1 | — |

#### Contusion de la cuisse (béquille)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Choc direct sur la cuisse | +3 | — |
| Face antérieure (quadriceps) | +1 | — |
| Ecchymose étendue et/ou encoche (gap) palpable dans le muscle : oui | +1 | — |

#### Lésion proximale des adducteurs (versant cuisse)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Face interne haute (adducteurs) | +3 | — |
| Démarrage / changement de direction explosif | +1 | — |
| Aiguë, sur un geste précis | +1 | — |

### Tests proposés

**Palpation + tests de longueur/force des ischio-jambiers**  — _départage : Lésion myo-aponévrotique des ischio-jambiers_  
Technique : Localiser le site (longueur de douleur, distance à la tubérosité), longueur passive (AKE/SLR), force isométrique en flexion.  
Valeur diagnostique : La sévérité/le pronostic reposent sur l'IRM (classification 0-4 + a/b/c) ; les systèmes cliniques en 3 grades manquent d'exactitude. Se/Sp d'un test clinique isolé // TODO à sourcer/valider.  
Source : Pollock 2014 (BJSM) DOI 10.1136/bjsports-2013-093302

**Tests de provocation : Puranen-Orava, bent-knee stretch, modified bent-knee stretch**  — _départage : Tendinopathie proximale des ischio-jambiers_  
Valeur diagnostique : Fiabilité élevée (ICC inter-examinateurs 0,82-0,88) et validité modérée-à-élevée, la meilleure étant le modified bent-knee stretch test. À combiner avec l'IRM. Valeurs exactes de Se/Sp // TODO à sourcer/valider (non détaillées dans le résumé).  
Source : Cacchio 2012 (BJSM) DOI 10.1136/bjsports-2011-090325

**Radiographie du bassin (± comparatif)**  — _départage : Avulsion apophysaire de la tubérosité ischiatique (adolescent)_  
Valeur diagnostique : Confirme l'avulsion apophysaire ischiatique et son déplacement (oriente conservateur vs chirurgical). Examen clinique : douleur élective de l'ischion + déficit en flexion résistée.  
Source : _(non documentée / à sourcer)_

**Flexion de hanche / extension de genou résistées + palpation (droit fémoral)**  — _départage : Lésion du droit fémoral / quadriceps_  
Valeur diagnostique : Douleur à la contraction résistée et à l'étirement (test de Thomas / Ely). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Amplitude de flexion du genou (gradation de la contusion)**  — _départage : Contusion de la cuisse (béquille)_  
Valeur diagnostique : La flexion du genou disponible guide la sévérité (légère > 90°, sévère < 45°). Surveiller l'évolution (myosite ossifiante). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Squeeze test des adducteurs + palpation de l'insertion**  — _départage : Lésion proximale des adducteurs (versant cuisse)_  
Valeur diagnostique : Adduction isométrique résistée reproduisant la douleur. (Voir aussi le module Hanche/aine pour les valeurs de Se/Sp du squeeze.) Se/Sp ici // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion d'avulsion / rupture proximale des ischio-jambiers** | Ecchymose étendue et/ou encoche (gap) palpable dans le muscle : oui + Déficit de force marqué (flexion du genou / extension de hanche) : oui | Encoche palpable + déficit de force = IRM + avis chirurgical rapide (les avulsions proximales à ≥2 tendons rétractées bénéficient souvent d'une réparation précoce). | — |
| **Suspicion d'avulsion apophysaire de l'ischion (adolescent)** | Douleur aiguë de l'ischion sur contraction explosive (sprint, grand écart) chez le sportif en croissance : oui | Radiographie du bassin. Fréquent chez l'adolescent sportif sur contraction explosive ; un fragment déplacé peut relever d'un avis chirurgical. | — |
| **Risque de myosite ossifiante (après contusion)** | Après un choc sur la cuisse : perte de flexion du genou / masse dure qui persiste ou s'aggrave : oui | Perte de flexion / masse dure après contusion : PROSCRIRE massage profond et étirements agressifs ; glace, repos relatif, avis médical + imagerie si persistance. | — |
| **Suspicion de thrombose veineuse profonde** | Mollet douloureux, œdématié, chaud : oui | Évaluation urgente (score de Wells, écho-doppler). Ne pas masser/mobiliser avant d'éliminer une TVP. | — |
| **Possible origine lombaire / radiculaire** | Irradiation dans la fesse / l'arrière de la jambe (sciatalgie) : oui | Examiner le rachis lombaire : une douleur postérieure de cuisse peut être référée/radiculaire (à distinguer d'une lésion musculaire). | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale (sarcome des tissus mous / osseux) ou infectieuse. | — |

---

## Épaule

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 18 questions · 8 hypothèses · 10 tests · 5 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Douleur sous-acromiale (conflit / tendinopathie de coiffe)  _(quadrant : Antéro-latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur lors des mouvements au-dessus de la tête / à l'armer : oui | +2 | — |
| Douleur dans un arc moyen d'élévation (≈ 60-120°) : oui | +2 | Hegedus 2012 (arc douloureux Sp ≈76%) DOI 10.1136/bjsports-2012-091066 |
| Antéro-latérale / moignon, face externe du bras | +2 | — |
| Progressive / insidieuse | +1 | — |

#### Rupture transfixiante de la coiffe des rotateurs  _(quadrant : Antéro-latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Faiblesse à l'élévation et/ou à la rotation externe : oui | +3 | Gismervik 2017 (supraspinatus test DOR 9.24) DOI 10.1186/s12891-017-1400-0 |
| Plus de 60 ans | +2 | — |
| Incapacité d'élever activement le bras alors que le mouvement passif est possible (pseudoparalysie) : oui | +2 | — |
| Douleur la nuit, surtout couché sur l'épaule atteinte : oui | +1 | — |

#### Lésion du labrum / SLAP  _(quadrant : Profond)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Armer / lancer (bras en abduction-rotation externe) | +2 | — |
| Sensation d'instabilité / « bras mort » au lancer : oui | +2 | — |
| Profonde / diffuse | +1 | — |
| Douleur lors des mouvements au-dessus de la tête / à l'armer : oui | +1 | — |

#### Instabilité antérieure de l'épaule  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Appréhension / douleur bras en abduction-rotation externe (position d'armer) : oui | +3 | — |
| Antécédent de luxation / subluxation de l'épaule : oui | +3 | — |
| Sensation de déboîtement (luxation/subluxation) | +1 | — |
| Jeune (< 30 ans) | +1 | — |

#### Pathologie acromio-claviculaire  _(quadrant : Sommet)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Au sommet de l'épaule (articulation acromio-claviculaire) | +3 | — |
| Douleur au sommet de l'épaule à l'adduction horizontale forcée (bras croisé) : oui | +2 | — |
| Choc direct sur le moignon de l'épaule | +1 | — |

#### Capsulite rétractile (épaule gelée)  _(quadrant : Global)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Raideur globale avec perte d'amplitude ACTIVE ET PASSIVE (surtout rotation externe) : oui | +3 | — |
| Progressive / insidieuse | +1 | — |
| Douleur la nuit, surtout couché sur l'épaule atteinte : oui | +1 | — |

#### Atteinte du long biceps (tendinopathie / instabilité)  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Antérieure (gouttière bicipitale) | +3 | — |
| Douleur lors des mouvements au-dessus de la tête / à l'armer : oui | +1 | — |

#### Omarthrose (arthrose gléno-humérale)  _(quadrant : Profond)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Plus de 60 ans | +2 | — |
| Raideur globale avec perte d'amplitude ACTIVE ET PASSIVE (surtout rotation externe) : oui | +1 | — |
| Progressive / insidieuse | +1 | — |

### Tests proposés

**Test de Hawkins-Kennedy**  — _départage : Douleur sous-acromiale (conflit / tendinopathie de coiffe)_  
Valeur diagnostique : Se ≈79% / Sp ≈59% (Hegedus 2012) ; meilleur DOR pour le conflit (Se ≈58% / Sp ≈67%, Gismervik 2017). Sensible : aide à ÉLIMINER quand négatif.  
Source : Hegedus 2012 DOI 10.1136/bjsports-2012-091066 ; Gismervik 2017 DOI 10.1186/s12891-017-1400-0

**Test de Neer**  — _départage : Douleur sous-acromiale (conflit / tendinopathie de coiffe)_  
Valeur diagnostique : Se ≈72% / Sp ≈60% (Hegedus 2012).  
Source : Hegedus 2012 DOI 10.1136/bjsports-2012-091066

**Arc douloureux (60-120°)**  — _départage : Douleur sous-acromiale (conflit / tendinopathie de coiffe)_  
Valeur diagnostique : Se ≈53% / Sp ≈76% (Hegedus 2012) : plutôt pour CONFIRMER (rule-in).  
Source : Hegedus 2012 DOI 10.1136/bjsports-2012-091066

**Test du supra-épineux (Jobe / empty can)**  — _départage : Rupture transfixiante de la coiffe des rotateurs_  
Valeur diagnostique : Meilleur DOR (9.24) pour une rupture transfixiante (Se ≈0,74 / Sp ≈0,77, Gismervik 2017).  
Source : Gismervik 2017 DOI 10.1186/s12891-017-1400-0

**Signes de rappel (lag signs) + drop arm**  — _départage : Rupture transfixiante de la coiffe des rotateurs_  
Valeur diagnostique : Un déficit de maintien (RE lag, drop arm) est spécifique d'une rupture. Se/Sp précises // TODO à sourcer/valider. À combiner avec la force et l'âge.  
Source : _(non documentée / à sourcer)_

**Test de recentrage (relocation) + test de relâchement antérieur**  — _départage : Instabilité antérieure de l'épaule_  
Valeur diagnostique : Meilleur niveau de preuve pour l'instabilité : relocation LR+ ≈6,5 ; anterior release LR+ ≈8,3 (Luime 2004). Le test d'appréhension seul est moins utile.  
Source : Luime 2004 (JAMA) DOI 10.1001/jama.292.16.1989

**Compression-rotation / biceps load II (labrum-SLAP)**  — _départage : Lésion du labrum / SLAP_  
Valeur diagnostique : Aucun test de SLAP n'est fiable isolément. Compression-rotation : meilleur DOR pour SLAP (Se ≈0,43 / Sp ≈0,89, Gismervik 2017) ; biceps load II LR+ ≈26 (Luime 2004, étude unique — prudence).  
Source : Gismervik 2017 DOI 10.1186/s12891-017-1400-0 ; Luime 2004 DOI 10.1001/jama.292.16.1989

**Yergason / Speed (long biceps)**  — _départage : Atteinte du long biceps (tendinopathie / instabilité), Lésion du labrum / SLAP_  
Valeur diagnostique : Yergason : spécificité élevée (≈95%) pour le SLAP dans la méta-analyse (Hegedus 2012). Pour la tendinopathie isolée du long biceps, Se/Sp // TODO à sourcer/valider.  
Source : Hegedus 2012 DOI 10.1136/bjsports-2012-091066

**Adduction horizontale forcée (cross-body) + palpation acromio-claviculaire**  — _départage : Pathologie acromio-claviculaire_  
Valeur diagnostique : Reproduction de la douleur au sommet de l'épaule. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Perte de rotation externe passive + shoulder shrug sign**  — _départage : Capsulite rétractile (épaule gelée), Omarthrose (arthrose gléno-humérale)_  
Valeur diagnostique : Perte d'amplitude PASSIVE (surtout RE) en faveur d'une capsulite/omarthrose ; le shoulder shrug sign est sensible pour les pathologies « raides » (Hegedus 2012).  
Source : Hegedus 2012 DOI 10.1136/bjsports-2012-091066

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de rupture massive de coiffe (pseudoparalysie)** | Incapacité d'élever activement le bras alors que le mouvement passif est possible (pseudoparalysie) : oui | Incapacité d'élévation active avec passif conservé, surtout après traumatisme : imagerie + avis spécialisé rapide (une réparation peut être temps-dépendante). | — |
| **Atteinte nerveuse après luxation (nerf axillaire / plexus)** | Déficit de sensibilité (moignon) ou de motricité après un épisode de luxation : oui | Déficit sensitivomoteur après luxation : examen neurologique + avis urgent. Vérifier la réduction et l'état vasculo-nerveux. | — |
| **Possible origine cervicale (radiculopathie)** | Douleur irradiant du cou vers le bras / aggravée par les mouvements du cou : oui | Examiner le rachis cervical (Spurling, ROT, force) : une cervicobrachialgie peut mimer une douleur d'épaule. | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos permanente (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical : éliminer une cause tumorale (dont tumeur de l'apex pulmonaire / Pancoast projetée à l'épaule) ou systémique. | — |
| **Suspicion d'infection / cause systémique** | Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Fièvre/AEG avec épaule très douloureuse : avis médical urgent (arthrite septique). | — |

---

## Rachis lombaire

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 20 questions · 7 hypothèses · 6 tests · 8 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Lombalgie commune (non spécifique)  _(quadrant : Lombaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Lombaire pure (pas de douleur de jambe) | +3 | — |
| Aiguë (effort, faux mouvement) | +1 | — |

#### Radiculopathie lombaire / sciatique  _(quadrant : Radiculaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur de jambe descendant sous le genou (sur un trajet précis) : oui | +3 | — |
| Irradiation sous le genou (trajet de jambe) | +2 | — |
| Engourdissements / fourmillements sur un trajet précis du membre inférieur : oui | +2 | — |
| Douleur aggravée par la flexion (se pencher en avant, position assise) : oui | +1 | — |

#### Canal lombaire étroit (sténose)  _(quadrant : Canalaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Lourdeur / douleur des jambes à la marche, soulagée en s'asseyant ou en se penchant en avant : oui | +3 | — |
| Jambes (lourdeur/douleur) déclenchées par la marche | +2 | — |
| Plus de 50 ans | +2 | — |

#### Spondylolyse (fracture de fatigue de l'isthme — adolescent sportif)  _(quadrant : Postérieur (isthme))_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Lombalgie d'un sportif en croissance, reproduite/aggravée en hyperextension (gym, danse, lancers) : oui | +3 | — |
| Douleur aggravée par l'extension (cambrer, se pencher en arrière) : oui | +2 | — |
| Adolescent (squelette en croissance) | +1 | — |

#### Douleur d'origine sacro-iliaque  _(quadrant : Sacro-iliaque)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur localisée à une fesse / sacro-iliaque (sous l'épine iliaque postérieure) : oui | +3 | — |
| Irradiation fesse / cuisse (au-dessus du genou) | +1 | — |

#### Douleur discogénique (intolérance à la flexion)  _(quadrant : Discal)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur aggravée par la flexion (se pencher en avant, position assise) : oui | +2 | — |
| Lombaire pure (pas de douleur de jambe) | +1 | — |
| Progressive / insidieuse | +1 | — |

#### Douleur facettaire (intolérance à l'extension)  _(quadrant : Postérieur (facettes))_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur aggravée par l'extension (cambrer, se pencher en arrière) : oui | +2 | — |
| Lombaire pure (pas de douleur de jambe) | +1 | — |
| Plus de 50 ans | +1 | — |

### Tests proposés

**Test de l'élévation jambe tendue (SLR / Lasègue) + SLR croisé**  — _départage : Radiculopathie lombaire / sciatique_  
Technique : Reproduction de la douleur de jambe (et non lombaire) lors de l'élévation passive ; le SLR croisé reproduit la douleur du côté atteint en élevant la jambe saine.  
Valeur diagnostique : SLR « douleur » : exactitude variable selon les études (tantôt sensible, tantôt spécifique) ; faux positifs liés à la tension des ischio-jambiers. Le SLR croisé est classiquement plus spécifique. À interpréter avec le déficit neurologique.  
Source : Scaia 2012 (J Back Musculoskelet Rehabil) DOI 10.3233/BMR-2012-0339

**Examen neurologique segmentaire (sensibilité, force, réflexes)**  — _départage : Radiculopathie lombaire / sciatique_  
Valeur diagnostique : Localise le niveau radiculaire (L4 : réflexe rotulien/quadriceps ; L5 : releveurs/extenseur de l'hallux ; S1 : triceps sural/réflexe achilléen). Se/Sp par signe // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Évaluation de la claudication (marche, posture en flexion)**  — _départage : Canal lombaire étroit (sténose)_  
Valeur diagnostique : Soulagement en flexion/assise, aggravation à la marche/extension. Confirmation par imagerie (IRM). Se/Sp clinique // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Test d'hyperextension unipodale (stork test)**  — _départage : Spondylolyse (fracture de fatigue de l'isthme — adolescent sportif)_  
Valeur diagnostique : ⚠️ Faible exactitude diagnostique pour la spondylolyse (à ne pas utiliser seul). L'imagerie (IRM, ± TDM/SPECT) est nécessaire chez le jeune sportif avec lombalgie d'extension. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Cluster de tests de provocation sacro-iliaque (≥ 3 positifs)**  — _départage : Douleur d'origine sacro-iliaque_  
Technique : Distraction, compression, thigh thrust, Gaenslen, sacral thrust.  
Valeur diagnostique : Un regroupement de tests positifs est plus informatif qu'un test isolé. Se/Sp du cluster // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Mise en charge directionnelle (flexion vs extension répétées)**  — _départage : Douleur discogénique (intolérance à la flexion), Douleur facettaire (intolérance à l'extension)_  
Valeur diagnostique : La réponse directionnelle (centralisation/aggravation) oriente entre profils discogénique et facettaire. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de syndrome de la queue de cheval (troubles sphinctériens)** | Troubles récents pour uriner (rétention) ou incontinence : oui | URGENCE neurochirurgicale : IRM en urgence. Rétention/incontinence récente = ne pas temporiser. | — |
| **Suspicion de syndrome de la queue de cheval (anesthésie en selle)** | Engourdissement de la selle (périnée, face interne des cuisses) : oui | URGENCE neurochirurgicale : IRM en urgence. Rechercher troubles sphinctériens et déficit moteur associés. | — |
| **Déficit neurologique installé / progressif** | Faiblesse motrice d'un membre, installée ou progressive (pied tombant, etc.) : oui | Avis rapide : un déficit moteur (ex. pied tombant) signe une compression radiculaire significative. | — |
| **Suspicion de fracture (traumatisme sévère)** | Traumatisme important récent (chute de hauteur, AVP) : oui | Imagerie. La probabilité augmente nettement si plusieurs drapeaux fracture sont associés (Downie 2013). | Downie 2013 (BMJ) DOI 10.1136/bmj.f7095 |
| **Suspicion de fracture (corticoïdes / ostéoporose)** | Prise prolongée de corticoïdes / ostéoporose connue : oui | Évoquer une fracture vertébrale même sur traumatisme mineur ; imagerie selon le contexte. | Downie 2013 (BMJ) DOI 10.1136/bmj.f7095 |
| **Suspicion de cause maligne (antécédent de cancer)** | Antécédent de cancer : oui | L'antécédent de cancer est le signe le plus informatif d'une cause maligne : imagerie + avis. Renforcé par douleur nocturne/AEG. | Downie 2013 (BMJ) DOI 10.1136/bmj.f7095 |
| **Suspicion d'infection (spondylodiscite)** | Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Fièvre/AEG + lombalgie : avis médical urgent (spondylodiscite, abcès épidural), surtout si toxicomanie IV / immunodépression. | — |
| **Possible rachialgie inflammatoire (spondyloarthrite)** | Raideur matinale lombaire prolongée (> 30 min) : oui + Réveils par la douleur en 2e partie de nuit, amélioration par l'activité : oui | Raideur matinale prolongée + réveils nocturnes + amélioration à l'effort chez un sujet jeune : orienter vers un avis rhumatologique. | — |

---

## Coude

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 16 questions · 6 hypothèses · 6 tests · 4 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Épicondylalgie latérale (tennis elbow)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur reproduite à l'extension résistée du poignet / la préhension : oui | +3 | — |
| Épicondyle latéral (face externe) | +2 | — |
| Progressive / surmenage | +1 | — |

#### Épicondylalgie médiale (golfer's elbow)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur reproduite à la flexion-pronation résistée du poignet : oui | +3 | — |
| Épicondyle médial (face interne) | +2 | — |
| Progressive / surmenage | +1 | — |

#### Atteinte du ligament collatéral ulnaire (lanceurs)  _(quadrant : Médial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur médiale du coude à l'armer / accélération du lancer : oui | +3 | — |
| Contrainte en valgus au lancer (armer) | +2 | — |
| Épicondyle médial (face interne) | +1 | — |

#### Rupture du tendon distal du biceps  _(quadrant : Antérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Claquement + ecchymose au pli du coude, avec rétraction du muscle (signe de Popeye inversé) : oui | +2 | — |
| Déficit de force en flexion du coude et surtout en supination : oui | +2 | — |
| Pli du coude (antérieur, biceps) | +2 | — |
| Effort en flexion-supination contrariée (soulèvement brusque) | +2 | — |

#### Bursite olécrânienne  _(quadrant : Postérieur)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Tuméfaction molle, postérieure, sur l'olécrâne : oui | +3 | — |
| Postérieure (olécrâne) | +2 | — |

#### Ostéochondrite disséquante du condyle (capitellum)  _(quadrant : Latéral)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur latérale profonde chez un jeune lanceur / gymnaste, avec perte d'extension : oui | +3 | — |
| Latérale, radio-capitellaire (profonde) | +2 | — |
| Accrochage / blocage / craquements douloureux (corps étranger) : oui | +1 | — |

### Tests proposés

**Extension résistée du poignet (Cozen / Mill) + palpation épicondyle latéral**  — _départage : Épicondylalgie latérale (tennis elbow)_  
Valeur diagnostique : Reproduction de la douleur épicondylienne latérale. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Flexion-pronation résistée du poignet + palpation épicondyle médial**  — _départage : Épicondylalgie médiale (golfer's elbow)_  
Valeur diagnostique : Reproduction de la douleur épicondylienne médiale. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Moving valgus stress test + contrainte en valgus**  — _départage : Atteinte du ligament collatéral ulnaire (lanceurs)_  
Valeur diagnostique : Reproduction de la douleur médiale dans l'arc d'armer (≈ 70-120°). Décrit comme sensible (étude initiale de petite taille) ; Se/Sp robustes // TODO à sourcer/valider. À confronter à l'imagerie chez le lanceur.  
Source : _(non documentée / à sourcer)_

**Hook test (rupture du biceps distal)**  — _départage : Rupture du tendon distal du biceps_  
Technique : Coude fléchi à 90° en supination active ; l'index ne peut pas crocheter le tendon par le côté latéral si avulsion complète.  
Valeur diagnostique : Se ≈100% / Sp ≈100% pour l'avulsion complète dans la cohorte d'origine (supérieur à l'IRM). À combiner avec la force de supination.  
Source : O'Driscoll 2007 (Am J Sports Med) DOI 10.1177/0363546507305016

**Inspection / palpation de la bourse olécrânienne**  — _départage : Bursite olécrânienne_  
Valeur diagnostique : Bourse chaude/rouge/fébrile → suspecter une forme septique (ponction). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Imagerie (radiographie ± IRM) du condyle**  — _départage : Ostéochondrite disséquante du condyle (capitellum)_  
Valeur diagnostique : Confirme l'ostéochondrite et son stade (stabilité du fragment). Examen clinique : douleur latérale + perte d'extension chez le jeune lanceur.  
Source : _(non documentée / à sourcer)_

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de rupture du biceps distal** | Claquement + ecchymose au pli du coude, avec rétraction du muscle (signe de Popeye inversé) : oui + Déficit de force en flexion du coude et surtout en supination : oui | Hook test + force de supination ; avis chirurgical précoce (la réparation des ruptures complètes est souvent temps-dépendante). | O'Driscoll 2007 DOI 10.1177/0363546507305016 |
| **Suspicion de bursite septique** | Bourse rouge, chaude, fébrile : oui | Bourse chaude/rouge + fièvre : avis médical, ponction avant antibiothérapie. | — |
| **Atteinte du nerf ulnaire au coude** | Fourmillements / déficit dans les 4e-5e doigts (nerf ulnaire) : oui | Examen neurologique (territoire ulnaire) ; si déficit moteur/sensitif net, avis spécialisé. | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale ou infectieuse. | — |

---

## Poignet / main

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 13 questions · 7 hypothèses · 6 tests · 4 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Fracture du scaphoïde  _(quadrant : Radial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur à la palpation de la tabatière anatomique : oui | +3 | Mallee 2014 (Se élevée de la douleur de tabatière) DOI 10.1016/j.jhsa.2014.06.004 |
| Chute sur la main tendue (poignet en extension) | +2 | — |
| Versant radial / tabatière anatomique | +1 | — |

#### Fracture de l'extrémité distale du radius  _(quadrant : Dorsal)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Déformation visible du poignet (« dos de fourchette ») : oui | +3 | — |
| Chute sur la main tendue (poignet en extension) | +2 | — |
| Dorsale, extrémité distale du radius | +1 | — |

#### Entorse du poignet (scapho-lunaire)  _(quadrant : Dorsal)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Chute sur la main tendue (poignet en extension) | +1 | — |
| Torsion / charge en pronosupination | +2 | — |
| Dorsale, extrémité distale du radius | +1 | — |

#### Lésion du TFCC / instabilité radio-ulnaire distale  _(quadrant : Ulnaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Versant ulnaire (bord du 5e doigt) | +3 | — |
| Douleur ulnaire à la charge / en pronosupination (appui, vissage) : oui | +2 | — |
| Torsion / charge en pronosupination | +1 | — |

#### Ténosynovite de De Quervain  _(quadrant : Radial)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur radiale à la prise du pouce / déviation ulnaire (Finkelstein) : oui | +3 | — |
| Styloïde radiale / base du pouce (tendons) | +2 | — |
| Progressive / surmenage | +1 | — |

#### Syndrome du canal carpien  _(quadrant : Palmaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Fourmillements des 3 premiers doigts, surtout la nuit / au réveil : oui | +3 | — |
| Face palmaire / 3 premiers doigts | +1 | — |
| Progressive / surmenage | +1 | — |

#### Entorse du LCU du pouce (skier's / gamekeeper's thumb)  _(quadrant : Pouce)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Articulation MCP du pouce | +3 | — |
| Instabilité / perte de force de la pince du pouce après traumatisme : oui | +2 | — |
| Hyperabduction forcée du pouce (chute, sangle de ski) | +2 | — |

### Tests proposés

**Palpation de la tabatière + compression longitudinale du pouce + palpation du tubercule**  — _départage : Fracture du scaphoïde_  
Valeur diagnostique : Douleur de tabatière : test le plus sensible (Se 0,87-1,00) mais peu spécifique (Sp très variable). Combiner les tests augmente la spécificité. ⚠️ Traiter comme une fracture (immobilisation) malgré une radiographie initiale normale, puis réévaluer/IRM (risque de pseudarthrose).  
Source : Mallee 2014 (J Hand Surg Am) DOI 10.1016/j.jhsa.2014.06.004

**Radiographie du poignet (face + profil)**  — _départage : Fracture de l'extrémité distale du radius_  
Valeur diagnostique : Confirme la fracture et le déplacement. Rechercher une atteinte du nerf médian (canal carpien aigu) en cas de déplacement important.  
Source : _(non documentée / à sourcer)_

**Test de charge ulnaire / ulnar grind + stress radio-ulnaire distal**  — _départage : Lésion du TFCC / instabilité radio-ulnaire distale_  
Valeur diagnostique : Reproduction de la douleur ulnaire en compression/rotation ; tester la stabilité de l'articulation radio-ulnaire distale. Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Test de Finkelstein**  — _départage : Ténosynovite de De Quervain_  
Valeur diagnostique : Mise en tension des tendons du 1er compartiment (long abducteur / court extenseur du pouce). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Tests de provocation (Phalen, Tinel) + territoire médian**  — _départage : Syndrome du canal carpien_  
Valeur diagnostique : Tests de provocation des paresthésies du territoire médian. Se/Sp variables // TODO à sourcer/valider ; l'ENMG confirme si besoin.  
Source : _(non documentée / à sourcer)_

**Stress en valgus de la MCP du pouce (en extension et en flexion)**  — _départage : Entorse du LCU du pouce (skier's / gamekeeper's thumb)_  
Valeur diagnostique : Une laxité nette (souvent > 30-35° ou asymétrie marquée) évoque une rupture complète (lésion de Stener possible → chirurgie). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Conduite « scaphoïde » (DÉPISTAGE FRACTURE)** _(dépistage — proposé si « Douleur à la palpation de la tabatière anatomique : oui »)_  
Technique : Immobiliser comme une fracture, radiographies (incidences scaphoïde) ; si normales mais clinique persistante, réévaluation à 10-14 j ± IRM/TDM.  
Valeur diagnostique : La douleur de tabatière est très sensible mais peu spécifique (Mallee 2014). Le risque de pseudarthrose justifie de ne pas écarter la fracture sur une seule radiographie normale.  
Source : Mallee 2014 (J Hand Surg Am) DOI 10.1016/j.jhsa.2014.06.004

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de fracture du scaphoïde** | Douleur à la palpation de la tabatière anatomique : oui | Immobiliser et imager ; ne pas écarter sur une radiographie initiale normale (réévaluation/IRM). Risque de pseudarthrose et de nécrose. | Mallee 2014 DOI 10.1016/j.jhsa.2014.06.004 |
| **Suspicion de fracture de l'extrémité distale du radius** | Déformation visible du poignet (« dos de fourchette ») : oui | Radiographie ; rechercher une atteinte du nerf médian. Réduction selon le déplacement. | — |
| **Atteinte neuro-vasculaire / canal carpien aigu** | Main froide/pâle, douleur disproportionnée, déficit sensitivomoteur : oui | Urgence : main froide/pâle, douleur disproportionnée ou déficit médian aigu (surtout après fracture déplacée) → avis immédiat. | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne ou de repos (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une infection ou une cause tumorale. | — |

---

## Rachis cervical

Seuils de cohérence : **forte** ≥ 4 · **modérée** ≥ 2 · **faible** ≥ 1 (sinon écartée). 14 questions · 5 hypothèses · 4 tests · 6 drapeaux rouges.

### Hypothèses et indices pondérés

> Le score d'une hypothèse = somme des poids des indices dont la condition est vraie. À recalibrer cliniquement.

#### Cervicalgie commune (mécanique)  _(quadrant : Cervical)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Cervicale pure (cou / trapèzes) | +3 | — |
| Progressive / insidieuse | +1 | — |

#### Radiculopathie cervicale (névralgie cervico-brachiale)  _(quadrant : Radiculaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Douleur descendant dans le bras sur un trajet précis : oui | +3 | Thoomes 2017 DOI 10.1016/j.spinee.2017.08.241 |
| Fourmillements / engourdissements dans le bras ou la main : oui | +2 | — |
| Douleur du bras aggravée par l'extension-rotation du cou du côté atteint : oui | +1 | — |
| Irradiation dans le bras (trajet précis) | +1 | — |

#### Entorse cervicale / whiplash (WAD)  _(quadrant : Cervical)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Accélération-décélération (coup du lapin) | +3 | — |
| Aiguë, traumatique | +1 | — |
| Cervicale pure (cou / trapèzes) | +1 | — |

#### Céphalée cervicogénique  _(quadrant : Haut cervical)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Céphalée unilatérale partant de la nuque, reproduite par les mouvements du cou : oui | +3 | — |
| Occipitale / céphalée | +2 | — |

#### Myélopathie cervicale  _(quadrant : Médullaire)_

| Signe (réponse d'anamnèse) | Poids | Source |
|---|---|---|
| Troubles de l'équilibre / de la marche récents : oui | +3 | — |
| Maladresse des mains (boutons, écriture), perte de dextérité : oui | +2 | — |
| Troubles des 4 membres / de la marche | +2 | — |

### Tests proposés

**Test de Spurling (+ traction axiale, arm squeeze, tests neurodynamiques)**  — _départage : Radiculopathie cervicale (névralgie cervico-brachiale)_  
Technique : Spurling : extension-inclinaison-rotation homolatérale + compression axiale reproduisant la douleur radiculaire.  
Valeur diagnostique : Spurling : spécificité élevée (0,89-1,00), sensibilité variable (0,38-0,97) → bon pour CONFIRMER. Combiner Spurling + traction axiale + arm squeeze pour augmenter la probabilité ; 4 tests neurodynamiques négatifs + arm squeeze pour ÉLIMINER.  
Source : Thoomes 2017 (Spine J) DOI 10.1016/j.spinee.2017.08.241

**Examen neurologique du membre supérieur (force, réflexes, sensibilité)**  — _départage : Radiculopathie cervicale (névralgie cervico-brachiale)_  
Valeur diagnostique : Localise le niveau (C5 : deltoïde/biceps ; C6 : long supinateur/extenseurs poignet ; C7 : triceps ; C8 : fléchisseurs doigts). ⚠️ Pas de données d'exactitude pour ces signes pris isolément (Thoomes 2017).  
Source : Thoomes 2017 (Spine J) DOI 10.1016/j.spinee.2017.08.241

**Signes de myélopathie (Hoffmann, hyperréflexie, Babinski, marche)**  — _départage : Myélopathie cervicale_  
Valeur diagnostique : Recherche de signes pyramidaux et de troubles de la marche. Toute suspicion → IRM + avis spécialisé. Se/Sp par signe // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Reproduction de la céphalée par l'examen du rachis cervical haut**  — _départage : Céphalée cervicogénique_  
Valeur diagnostique : Reproduction de la céphalée à la mobilisation/palpation du rachis cervical supérieur (C0-C3). Se/Sp // TODO à sourcer/valider.  
Source : _(non documentée / à sourcer)_

**Règle canadienne du rachis cervical (DÉPISTAGE FRACTURE)** _(dépistage — proposé si « Traumatisme récent du cou (à évaluer pour une fracture) : oui »)_  
Technique : Imagerie si facteur à haut risque (≥65 ans, mécanisme dangereux, paresthésies des extrémités), absence de facteur à faible risque permettant l'évaluation des amplitudes, OU rotation active < 45° de chaque côté.  
Valeur diagnostique : Règle de décision très sensible pour les lésions cervicales cliniquement importantes, conçue pour réduire les imageries inutiles. Valeurs précises de Se/Sp // TODO à sourcer/valider ici.  
Source : _(à sourcer)_

### Drapeaux rouges

| Drapeau | Déclencheur | Conduite | Source |
|---|---|---|---|
| **Suspicion de myélopathie cervicale (troubles de la marche)** | Troubles de l'équilibre / de la marche récents : oui | Signes médullaires (marche, équilibre) : IRM + avis spécialisé. Éviter les manipulations. | — |
| **Suspicion de myélopathie cervicale (maladresse des mains)** | Maladresse des mains (boutons, écriture), perte de dextérité : oui | Perte de dextérité fine : rechercher signes pyramidaux (Hoffmann, hyperréflexie) → IRM + avis. | — |
| **Signes d'insuffisance vertébro-basilaire** | Vertiges, troubles de la parole, vision double, malaises (avec les mouvements du cou) : oui | Vertiges/dysarthrie/diplopie/drop attacks : CONTRE-INDIQUENT les manipulations cervicales ; avis médical. | — |
| **Suspicion de fracture cervicale (traumatisme)** | Traumatisme récent du cou (à évaluer pour une fracture) : oui | Appliquer la règle canadienne du rachis cervical ; immobiliser et imager en cas de critère à haut risque. | — |
| **Déficit neurologique d'un membre** | Faiblesse motrice d'un membre : oui | Faiblesse motrice : examen neurologique complet + avis (radiculopathie sévère ou atteinte médullaire). | — |
| **Douleur non mécanique + signes généraux** | Douleur nocturne / de repos permanente (non mécanique) : oui + Fièvre, altération de l'état général, perte de poids inexpliquée : oui | Imagerie + avis médical pour éliminer une cause tumorale ou infectieuse (spondylodiscite). | — |

---

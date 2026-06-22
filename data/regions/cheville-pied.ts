/* =============================================================================
   MODULE CLINIQUE — RÉGION CHEVILLE / PIED  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES, issues d'articles réels (PubMed), variables selon le
   standard de référence. Module NON relu par un confrère et NON testé sur cas
   connus (étapes 7-8 du brief) : à faire avant tout usage.

   PÉRIMÈTRE
     DANS : entorse latérale (LTFA/LCF), entorse de la syndesmose (high ankle),
       entorse médiale (deltoïde), rupture et tendinopathie du tendon d'Achille,
       aponévrosite plantaire, dysfonction du tibial postérieur, tendinopathie
       des fibulaires, fracture de fatigue (os à haut risque : naviculaire, base
       du 5e métatarsien).
     HORS : pathologies inflammatoires/métaboliques systémiques, neuropathies
       (sauf dépistage neuro-vasculaire en drapeau), pathologies de l'avant-pied
       dégénératives (hallux), couvertes ailleurs.

   CADRES DE RÉFÉRENCE / SOURCES (PubMed + DOI) :
     - Règle d'Ottawa cheville/pied : Gomes 2022 (revue systématique +
       méta-analyse, adultes) DOI 10.1186/s12891-022-05831-7.
     - Ligaments latéraux & sous-talien : Netterström-Wedin 2021 (Sports Health,
       méta-analyse) DOI 10.1177/19417381211029953.
     - Syndesmose : Netterström-Wedin 2021 (Phys Ther Sport, méta-analyse)
       DOI 10.1016/j.ptsp.2021.03.005.
     - Rupture du tendon d'Achille : Maffulli 1998 (étude prospective, 174 pts)
       DOI 10.1177/03635465980260021801.
     - Tendinopathie (imagerie prédictive) : Cushman 2024 (méta-analyse)
       DOI 10.1097/JSM.0000000000001236.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const chevillePied: Region = {
  nom: "Cheville / pied",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "localisation",
      texte: "Localisation de la douleur principale ?",
      type: "choix_unique",
      options: [
        { valeur: "malleole_laterale", label: "Malléole externe / face latérale" },
        { valeur: "malleole_mediale", label: "Malléole interne / face médiale" },
        { valeur: "syndesmose_anterolat", label: "Au-dessus de la cheville, antéro-latérale (syndesmose)" },
        { valeur: "tendon_achille", label: "Tendon d'Achille / talon postérieur" },
        { valeur: "talon_plantaire", label: "Talon, sous le pied" },
        { valeur: "arche_mediale", label: "Arche interne du pied" },
        { valeur: "retro_malleolaire_lat", label: "Rétro-malléolaire externe (fibulaires)" },
        { valeur: "avant_pied", label: "Avant-pied / médio-pied" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu_traumatique", label: "Aiguë, traumatique" },
        { valeur: "progressif", label: "Progressive / sans traumatisme" },
      ],
    },
    {
      id: "mecanisme",
      texte: "Mécanisme du traumatisme ?",
      type: "choix_multiple",
      condition: { installation: "aigu_traumatique" },
      options: [
        { valeur: "inversion", label: "Inversion / supination (torsion en dedans)" },
        { valeur: "eversion", label: "Éversion / pronation (torsion en dehors)" },
        { valeur: "rotation_externe_pied_fixe", label: "Rotation externe sur pied fixé" },
        { valeur: "flexion_dorsale_forcee", label: "Flexion dorsale forcée" },
        { valeur: "contraction_brutale_mollet", label: "Sensation de « coup » / claquement au mollet-talon" },
        { valeur: "choc_direct", label: "Choc direct" },
      ],
    },
    {
      id: "pop_claquement",
      texte: "Claquement audible / sensation de coup au moment de la blessure ?",
      type: "oui_non",
      condition: { installation: "aigu_traumatique" },
      aide: "Évoque une rupture du tendon d'Achille.",
    },
    {
      id: "incapacite_pointe",
      texte: "Incapacité de se hisser sur la pointe du pied (sur une jambe) ?",
      type: "oui_non",
      aide: "DRAPEAU possible : rupture du tendon d'Achille.",
    },
    {
      id: "gonflement_ecchymose",
      texte: "Gonflement et/ou ecchymose rapides ?",
      type: "oui_non",
    },
    {
      id: "impossible_appui_4pas",
      texte: "Impossibilité de faire 4 pas en appui (sur le moment ET à l'examen) ?",
      type: "oui_non",
      aide: "DRAPEAU (critère d'Ottawa) : impose une radiographie.",
    },
    {
      id: "douleur_os_malleole_pied",
      texte: "Douleur à la palpation osseuse (bord postérieur d'une malléole, base du 5e métatarsien ou naviculaire) ?",
      type: "oui_non",
      aide: "Critère d'Ottawa cheville/pied pour la radiographie.",
    },
    {
      id: "instabilite_recidive",
      texte: "Instabilité / entorses à répétition / dérobements ?",
      type: "oui_non",
      aide: "Instabilité chronique de cheville.",
    },
    {
      id: "douleur_matin_premiers_pas_talon",
      texte: "Douleur du talon maximale aux premiers pas du matin / après repos ?",
      type: "oui_non",
      aide: "Caractéristique de l'aponévrosite plantaire.",
    },
    {
      id: "douleur_retro_calcaneenne_charge",
      texte: "Douleur du tendon d'Achille liée à la charge (course, sauts), avec raideur matinale du tendon ?",
      type: "oui_non",
      aide: "Évoque une tendinopathie d'Achille.",
    },
    {
      id: "affaissement_arche_mediale",
      texte: "Affaissement de l'arche interne / pied plat acquis / « trop d'orteils visibles » de dos ?",
      type: "oui_non",
      aide: "Évoque une dysfonction du tibial postérieur.",
    },
    {
      id: "ressaut_tendons_lat",
      texte: "Ressaut / luxation des tendons en arrière de la malléole externe ?",
      type: "oui_non",
      aide: "Évoque une pathologie des fibulaires.",
    },
    {
      id: "douleur_appui_impact",
      texte: "Douleur focale osseuse à l'appui / au saut / à l'impact, d'aggravation progressive ?",
      type: "oui_non",
      aide: "DRAPEAU possible : fracture de fatigue (sites à haut risque : naviculaire, base du 5e métatarsien).",
    },
    {
      id: "pic_charge",
      texte: "Augmentation récente et marquée de la charge d'entraînement ?",
      type: "oui_non",
    },
    {
      id: "facteurs_red_s",
      texte: "Facteurs RED-S (faible disponibilité énergétique, aménorrhée, ATCD de fracture de fatigue) ?",
      type: "oui_non",
      aide: "Majore le risque de fracture de fatigue.",
    },
    {
      id: "gestes_aggravants",
      texte: "Gestes / situations qui reproduisent la douleur ?",
      type: "choix_multiple",
      options: [
        { valeur: "course", label: "Course" },
        { valeur: "saut_reception", label: "Sauts / réception" },
        { valeur: "appui_pointe", label: "Montée sur la pointe / propulsion" },
        { valeur: "changements_direction", label: "Changements de direction" },
        { valeur: "marche_prolongee", label: "Marche prolongée / station debout" },
      ],
    },
    {
      id: "deficit_neurovasculaire",
      texte: "Pied froid/pâle, douleur disproportionnée, déficit de sensibilité ou de motricité ?",
      type: "oui_non",
      aide: "DRAPEAU : atteinte neuro-vasculaire / syndrome de loge.",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne ou de repos (non mécanique) ?",
      type: "oui_non",
    },
    {
      id: "signes_systemiques",
      texte: "Fièvre, altération de l'état général, perte de poids inexpliquée ?",
      type: "oui_non",
    },
  ],

  HYPOTHESES: [
    {
      id: "lateral_ankle_sprain",
      nom: "Entorse latérale de cheville (LTFA / LCF)",
      quadrant: "Latéral",
      indices: [
        { si: { mecanisme: "inversion" }, poids: 3 },
        { si: { localisation: "malleole_laterale" }, poids: 2 },
        { si: { gonflement_ecchymose: true }, poids: 1 },
        { si: { instabilite_recidive: true }, poids: 1 },
      ],
    },
    {
      id: "syndesmosis_injury",
      nom: "Entorse de la syndesmose (entorse haute)",
      quadrant: "Antéro-supérieur",
      indices: [
        { si: { mecanisme: "rotation_externe_pied_fixe" }, poids: 3 },
        { si: { localisation: "syndesmose_anterolat" }, poids: 2 },
        { si: { mecanisme: "flexion_dorsale_forcee" }, poids: 1 },
      ],
    },
    {
      id: "medial_deltoid_sprain",
      nom: "Entorse médiale (ligament deltoïde)",
      quadrant: "Médial",
      indices: [
        { si: { mecanisme: "eversion" }, poids: 3 },
        { si: { localisation: "malleole_mediale" }, poids: 2 },
      ],
    },
    {
      id: "achilles_rupture",
      nom: "Rupture du tendon d'Achille",
      quadrant: "Postérieur",
      indices: [
        { si: { mecanisme: "contraction_brutale_mollet" }, poids: 2 },
        { si: { pop_claquement: true }, poids: 2 },
        { si: { incapacite_pointe: true }, poids: 2 },
        { si: { localisation: "tendon_achille" }, poids: 2 },
      ],
    },
    {
      id: "achilles_tendinopathy",
      nom: "Tendinopathie du tendon d'Achille",
      quadrant: "Postérieur",
      indices: [
        { si: { douleur_retro_calcaneenne_charge: true }, poids: 3 },
        { si: { localisation: "tendon_achille" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
        { si: { gestes_aggravants: "course" }, poids: 1 },
      ],
    },
    {
      id: "plantar_fasciitis",
      nom: "Aponévrosite plantaire (fasciite plantaire)",
      quadrant: "Plantaire",
      indices: [
        { si: { douleur_matin_premiers_pas_talon: true }, poids: 3 },
        { si: { localisation: "talon_plantaire" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "tibialis_posterior_dysfunction",
      nom: "Dysfonction du tendon tibial postérieur",
      quadrant: "Médial",
      indices: [
        { si: { affaissement_arche_mediale: true }, poids: 3 },
        { si: { localisation: "arche_mediale" }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "peroneal_tendinopathy",
      nom: "Pathologie des tendons fibulaires (péroniers)",
      quadrant: "Latéral",
      indices: [
        { si: { localisation: "retro_malleolaire_lat" }, poids: 3 },
        { si: { ressaut_tendons_lat: true }, poids: 2 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "bone_stress_fracture",
      nom: "Fracture de fatigue (os naviculaire, métatarsiens, malléole)",
      quadrant: "Osseux",
      indices: [
        { si: { douleur_appui_impact: true }, poids: 3 },
        { si: { pic_charge: true }, poids: 1 },
        { si: { facteurs_red_s: true }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "atfl_palpation",
      nom: "Palpation du ligament talo-fibulaire antérieur (LTFA)",
      discrimine: ["lateral_ankle_sprain"],
      precision: "Très sensible mais peu spécifique (Se 95-100% / Sp 0-32%) → bon pour ÉLIMINER (rule-out). À combiner avec le tiroir antérieur.",
      source: "Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953",
    },
    {
      id: "anterior_drawer_ankle",
      nom: "Tiroir antérieur de cheville",
      discrimine: ["lateral_ankle_sprain"],
      precision: "Se ≈54% / Sp ≈87% (données poolées) → plutôt pour CONFIRMER (rule-in). Sensibilité meilleure à distance du traumatisme (≥5 j).",
      source: "Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953",
    },
    {
      id: "talar_tilt",
      nom: "Test du tiroir en inversion (talar tilt)",
      discrimine: ["lateral_ankle_sprain"],
      precision: "Peut CONFIRMER une atteinte du ligament calcanéo-fibulaire ; un test sensible pour ce ligament fait défaut.",
      source: "Netterström-Wedin 2021 (Sports Health) DOI 10.1177/19417381211029953",
    },
    {
      id: "syndesmosis_cluster",
      nom: "Cluster syndesmose : palpation + dorsiflexion-lunge, puis squeeze + rotation externe",
      technique: "Tests sensibles (palpation Se ≈92%, dorsiflexion-lunge Se ≈75%) en dépistage, puis tests spécifiques (squeeze Sp ≈85%, rotation externe Sp ≈78%).",
      discrimine: ["syndesmosis_injury"],
      precision: "Aucun test isolé n'est à la fois sensible et spécifique. La stabilité (stable/instable) requiert l'imagerie/arthroscopie.",
      source: "Netterström-Wedin 2021 (Phys Ther Sport) DOI 10.1016/j.ptsp.2021.03.005",
    },
    {
      id: "calf_squeeze_thompson",
      nom: "Test de pression du mollet (Thompson / Simmonds)",
      technique: "Patient à plat ventre ; la compression du mollet ne produit pas de flexion plantaire si le tendon est rompu.",
      discrimine: ["achilles_rupture"],
      precision: "Se ≈0,96 / Sp ≈0,93 : test le plus sensible pour la rupture complète. À combiner (≥2 tests positifs).",
      source: "Maffulli 1998 (Am J Sports Med) DOI 10.1177/03635465980260021801",
    },
    {
      id: "matles_test",
      nom: "Test de Matles (flexion active du genou à plat ventre)",
      discrimine: ["achilles_rupture"],
      precision: "Se ≈0,88 / Sp ≈0,85. Position du pied en flexion dorsale/neutre (au lieu de flexion plantaire) = suspect de rupture.",
      source: "Maffulli 1998 (Am J Sports Med) DOI 10.1177/03635465980260021801",
    },
    {
      id: "achilles_palpation_load",
      nom: "Palpation + mise en charge du tendon d'Achille (talon levé, sauts)",
      discrimine: ["achilles_tendinopathy"],
      precision: "Diagnostic clinique (douleur localisée + épaississement). À l'échographie, une image normale a une bonne valeur prédictive négative du développement de douleur (VPN ≈92%) mais une faible VPP. Se/Sp d'un test clinique isolé // TODO à sourcer/valider.",
      source: "Cushman 2024 (Clin J Sport Med) DOI 10.1097/JSM.0000000000001236",
    },
    {
      id: "windlass_palpation_heel",
      nom: "Palpation de l'insertion plantaire + test de Windlass (mise en tension de l'aponévrose)",
      discrimine: ["plantar_fasciitis"],
      precision: "Reproduction de la douleur au tubercule calcanéen médial. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "single_heel_raise_too_many_toes",
      nom: "Heel-raise unipodal répété + signe « trop d'orteils »",
      discrimine: ["tibialis_posterior_dysfunction"],
      precision: "Douleur/impossibilité au heel-raise unipodal et défaut d'inversion du talon. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "peroneal_resisted_subluxation",
      nom: "Éversion résistée + recherche de subluxation des fibulaires",
      discrimine: ["peroneal_tendinopathy"],
      precision: "Douleur à l'éversion résistée / ressaut rétro-malléolaire. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "bone_stress_screen",
      nom: "Palpation osseuse focale + percussion / hop test (dépistage fracture de fatigue)",
      discrimine: ["bone_stress_fracture"],
      precision: "⚠️ Radiographie souvent normale au début → IRM si suspicion. Le naviculaire et la base du 5e métatarsien sont des sites à haut risque de non-consolidation. Se/Sp // TODO à sourcer/valider.",
    },
  ],

  TEST_SCREEN: {
    id: "ottawa_ankle_rule",
    nom: "Règle d'Ottawa cheville/pied (DÉPISTAGE FRACTURE)",
    siRep: "impossible_appui_4pas",
    technique: "Radiographie si douleur malléolaire/médio-pied AVEC ≥1 : douleur osseuse au bord postérieur d'une malléole, base du 5e métatarsien, naviculaire, OU incapacité de faire 4 pas en appui.",
    precision: "Se ≈91% / Sp ≈25% chez l'adulte : très sensible (bon rule-out), peu spécifique. Réduit les radiographies inutiles.",
    source: "Gomes 2022 (BMC Musculoskelet Disord) DOI 10.1186/s12891-022-05831-7",
  },

  DRAPEAUX_ROUGES: [
    {
      id: "fracture_ottawa",
      libelle: "Suspicion de fracture (critère d'Ottawa positif)",
      si: { impossible_appui_4pas: true },
      conduite: "Radiographie selon la règle d'Ottawa cheville/pied. NE PAS charger tant que la fracture n'est pas éliminée.",
      source: "Gomes 2022 DOI 10.1186/s12891-022-05831-7",
    },
    {
      id: "rupture_achille",
      libelle: "Suspicion de rupture du tendon d'Achille",
      si: { incapacite_pointe: true },
      conduite: "Tests de Thompson + Matles ; avis chirurgical rapide. Une flexion plantaire active résiduelle (longs fléchisseurs) n'élimine PAS la rupture.",
      source: "Maffulli 1998 DOI 10.1177/03635465980260021801",
    },
    {
      id: "fracture_fatigue_haut_risque",
      libelle: "Suspicion de fracture de fatigue (site à haut risque)",
      si: { douleur_appui_impact: true },
      conduite: "Décharge + IRM (radiographie souvent normale au début). Naviculaire et base du 5e métatarsien = non-consolidation fréquente. RED-S/pic de charge aggravants.",
    },
    {
      id: "atteinte_neurovasculaire",
      libelle: "Atteinte neuro-vasculaire / syndrome de loge",
      si: { deficit_neurovasculaire: true },
      conduite: "Urgence : douleur disproportionnée, pied froid/pâle ou déficit sensitivomoteur → avis médical immédiat.",
    },
    {
      id: "infection_systemique",
      libelle: "Suspicion d'infection / cause systémique",
      si: { signes_systemiques: true },
      conduite: "Avis médical urgent (arthrite septique, ostéomyélite).",
    },
    {
      id: "tumeur_cheville",
      libelle: "Douleur non mécanique + signes généraux",
      si: { douleur_nocturne_repos: true, signes_systemiques: true },
      conduite: "Imagerie + avis médical pour éliminer une cause tumorale ou inflammatoire.",
    },
  ],
};

/* =============================================================================
   MODULE CLINIQUE — RÉGION RACHIS LOMBAIRE  (v0.1 — BROUILLON À VALIDER)
   =============================================================================
   ⚠️ AIDE AU RAISONNEMENT, JAMAIS UN DIAGNOSTIC. Poids/seuils PROVISOIRES.
   Se/Sp INDICATIVES (PubMed). La majorité des lombalgies sont « non spécifiques ».
   IMPORTANT (Downie 2013) : pris ISOLÉMENT, beaucoup de drapeaux rouges modifient
   peu la probabilité de pathologie grave ; c'est leur COMBINAISON et le contexte
   qui comptent. Module NON relu / NON testé sur cas connus : à faire avant usage.

   PÉRIMÈTRE
     DANS : lombalgie commune non spécifique, radiculopathie/sciatique, canal
       lombaire étroit, spondylolyse (adolescent sportif), douleur sacro-iliaque,
       douleur discogénique (intolérance à la flexion), douleur facettaire
       (intolérance à l'extension).
     HORS : pathologies viscérales projetées, hanche (module dédié), prise en
       charge des pathologies graves (drapeaux → orientation).

   CADRES DE RÉFÉRENCE / SOURCES (PubMed + DOI) :
     - Drapeaux rouges (fracture/cancer) : Downie 2013 (revue systématique, BMJ)
       DOI 10.1136/bmj.f7095.
     - Straight Leg Raise (radiculopathie) : Scaia 2012 (revue systématique)
       DOI 10.3233/BMR-2012-0339.

   Version : v0.1 — Date : 2026-06-22 — Cycle de revue : relecture + cas connus.
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";

export const rachisLombaire: Region = {
  nom: "Rachis lombaire",
  BANDES: { forte: 4, moderee: 2 },

  QUESTIONS: [
    {
      id: "irradiation",
      texte: "Topographie de la douleur ?",
      type: "choix_unique",
      options: [
        { valeur: "lombaire_pure", label: "Lombaire pure (pas de douleur de jambe)" },
        { valeur: "irradiation_fesse_cuisse", label: "Irradiation fesse / cuisse (au-dessus du genou)" },
        { valeur: "irradiation_sous_genou", label: "Irradiation sous le genou (trajet de jambe)" },
        { valeur: "jambes_a_la_marche", label: "Jambes (lourdeur/douleur) déclenchées par la marche" },
      ],
    },
    {
      id: "installation",
      texte: "Mode d'installation ?",
      type: "choix_unique",
      options: [
        { valeur: "aigu", label: "Aiguë (effort, faux mouvement)" },
        { valeur: "progressif", label: "Progressive / insidieuse" },
      ],
    },
    {
      id: "douleur_flexion",
      texte: "Douleur aggravée par la flexion (se pencher en avant, position assise) ?",
      type: "oui_non",
      aide: "Profil « intolérant à la flexion » (orientation discogénique).",
    },
    {
      id: "douleur_extension",
      texte: "Douleur aggravée par l'extension (cambrer, se pencher en arrière) ?",
      type: "oui_non",
      aide: "Profil « intolérant à l'extension » (facettaire, spondylolyse, sténose).",
    },
    {
      id: "claudication_neurogene",
      texte: "Lourdeur / douleur des jambes à la marche, soulagée en s'asseyant ou en se penchant en avant ?",
      type: "oui_non",
      aide: "Claudication neurogène : oriente vers un canal lombaire étroit.",
    },
    {
      id: "douleur_jambe_sous_genou",
      texte: "Douleur de jambe descendant sous le genou (sur un trajet précis) ?",
      type: "oui_non",
      aide: "Évoque une radiculopathie.",
    },
    {
      id: "paresthesies_dermatomale",
      texte: "Engourdissements / fourmillements sur un trajet précis du membre inférieur ?",
      type: "oui_non",
    },
    {
      id: "douleur_sacroiliaque_localisee",
      texte: "Douleur localisée à une fesse / sacro-iliaque (sous l'épine iliaque postérieure) ?",
      type: "oui_non",
      aide: "Oriente vers une douleur sacro-iliaque.",
    },
    {
      id: "age",
      texte: "Tranche d'âge ?",
      type: "choix_unique",
      options: [
        { valeur: "adolescent", label: "Adolescent (squelette en croissance)" },
        { valeur: "adulte", label: "Adulte" },
        { valeur: "plus_50", label: "Plus de 50 ans" },
      ],
    },
    {
      id: "ado_sport_extension",
      texte: "Lombalgie d'un sportif en croissance, reproduite/aggravée en hyperextension (gym, danse, lancers) ?",
      type: "oui_non",
      condition: { age: "adolescent" },
      aide: "Évoque une spondylolyse (fracture de fatigue de l'isthme).",
    },
    {
      id: "raideur_matinale_prolongee",
      texte: "Raideur matinale lombaire prolongée (> 30 min) ?",
      type: "oui_non",
      aide: "DRAPEAU : évoque une rachialgie inflammatoire (spondyloarthrite).",
    },
    {
      id: "reveil_2e_partie_nuit",
      texte: "Réveils par la douleur en 2e partie de nuit, amélioration par l'activité ?",
      type: "oui_non",
      aide: "DRAPEAU : profil inflammatoire.",
    },
    {
      id: "troubles_sphincteriens",
      texte: "Troubles récents pour uriner (rétention) ou incontinence ?",
      type: "oui_non",
      aide: "DRAPEAU MAJEUR : syndrome de la queue de cheval.",
    },
    {
      id: "anesthesie_selle",
      texte: "Engourdissement de la selle (périnée, face interne des cuisses) ?",
      type: "oui_non",
      aide: "DRAPEAU MAJEUR : syndrome de la queue de cheval.",
    },
    {
      id: "deficit_moteur_progressif",
      texte: "Faiblesse motrice d'un membre, installée ou progressive (pied tombant, etc.) ?",
      type: "oui_non",
      aide: "DRAPEAU : déficit neurologique → avis rapide.",
    },
    {
      id: "trauma_severe",
      texte: "Traumatisme important récent (chute de hauteur, AVP) ?",
      type: "oui_non",
      aide: "DRAPEAU : fracture.",
    },
    {
      id: "corticoides_prolonges",
      texte: "Prise prolongée de corticoïdes / ostéoporose connue ?",
      type: "oui_non",
      aide: "DRAPEAU : fracture (même sur traumatisme mineur).",
    },
    {
      id: "atcd_cancer",
      texte: "Antécédent de cancer ?",
      type: "oui_non",
      aide: "DRAPEAU : c'est le signe le plus informatif pour une cause maligne (Downie 2013).",
    },
    {
      id: "douleur_nocturne_repos",
      texte: "Douleur nocturne / de repos permanente (non soulagée par les positions) ?",
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
      id: "nonspecific_lbp",
      nom: "Lombalgie commune (non spécifique)",
      quadrant: "Lombaire",
      indices: [
        { si: { irradiation: "lombaire_pure" }, poids: 3 },
        { si: { installation: "aigu" }, poids: 1 },
      ],
    },
    {
      id: "lumbar_radiculopathy",
      nom: "Radiculopathie lombaire / sciatique",
      quadrant: "Radiculaire",
      indices: [
        { si: { douleur_jambe_sous_genou: true }, poids: 3 },
        { si: { irradiation: "irradiation_sous_genou" }, poids: 2 },
        { si: { paresthesies_dermatomale: true }, poids: 2 },
        { si: { douleur_flexion: true }, poids: 1 },
      ],
    },
    {
      id: "spinal_stenosis",
      nom: "Canal lombaire étroit (sténose)",
      quadrant: "Canalaire",
      indices: [
        { si: { claudication_neurogene: true }, poids: 3 },
        { si: { irradiation: "jambes_a_la_marche" }, poids: 2 },
        { si: { age: "plus_50" }, poids: 2 },
      ],
    },
    {
      id: "spondylolysis",
      nom: "Spondylolyse (fracture de fatigue de l'isthme — adolescent sportif)",
      quadrant: "Postérieur (isthme)",
      indices: [
        { si: { ado_sport_extension: true }, poids: 3 },
        { si: { douleur_extension: true }, poids: 2 },
        { si: { age: "adolescent" }, poids: 1 },
      ],
    },
    {
      id: "sacroiliac_pain",
      nom: "Douleur d'origine sacro-iliaque",
      quadrant: "Sacro-iliaque",
      indices: [
        { si: { douleur_sacroiliaque_localisee: true }, poids: 3 },
        { si: { irradiation: "irradiation_fesse_cuisse" }, poids: 1 },
      ],
    },
    {
      id: "discogenic_flexion",
      nom: "Douleur discogénique (intolérance à la flexion)",
      quadrant: "Discal",
      indices: [
        { si: { douleur_flexion: true }, poids: 2 },
        { si: { irradiation: "lombaire_pure" }, poids: 1 },
        { si: { installation: "progressif" }, poids: 1 },
      ],
    },
    {
      id: "facet_extension",
      nom: "Douleur facettaire (intolérance à l'extension)",
      quadrant: "Postérieur (facettes)",
      indices: [
        { si: { douleur_extension: true }, poids: 2 },
        { si: { irradiation: "lombaire_pure" }, poids: 1 },
        { si: { age: "plus_50" }, poids: 1 },
      ],
    },
  ],

  TESTS: [
    {
      id: "slr_test",
      nom: "Test de l'élévation jambe tendue (SLR / Lasègue) + SLR croisé",
      technique: "Reproduction de la douleur de jambe (et non lombaire) lors de l'élévation passive ; le SLR croisé reproduit la douleur du côté atteint en élevant la jambe saine.",
      discrimine: ["lumbar_radiculopathy"],
      precision: "SLR « douleur » : exactitude variable selon les études (tantôt sensible, tantôt spécifique) ; faux positifs liés à la tension des ischio-jambiers. Le SLR croisé est classiquement plus spécifique. À interpréter avec le déficit neurologique.",
      source: "Scaia 2012 (J Back Musculoskelet Rehabil) DOI 10.3233/BMR-2012-0339",
    },
    {
      id: "neuro_exam_segmentaire",
      nom: "Examen neurologique segmentaire (sensibilité, force, réflexes)",
      discrimine: ["lumbar_radiculopathy"],
      precision: "Localise le niveau radiculaire (L4 : réflexe rotulien/quadriceps ; L5 : releveurs/extenseur de l'hallux ; S1 : triceps sural/réflexe achilléen). Se/Sp par signe // TODO à sourcer/valider.",
    },
    {
      id: "stenosis_clinical_walking",
      nom: "Évaluation de la claudication (marche, posture en flexion)",
      discrimine: ["spinal_stenosis"],
      precision: "Soulagement en flexion/assise, aggravation à la marche/extension. Confirmation par imagerie (IRM). Se/Sp clinique // TODO à sourcer/valider.",
    },
    {
      id: "stork_hyperextension",
      nom: "Test d'hyperextension unipodale (stork test)",
      discrimine: ["spondylolysis"],
      precision: "⚠️ Faible exactitude diagnostique pour la spondylolyse (à ne pas utiliser seul). L'imagerie (IRM, ± TDM/SPECT) est nécessaire chez le jeune sportif avec lombalgie d'extension. Se/Sp // TODO à sourcer/valider.",
    },
    {
      id: "sij_provocation_cluster",
      nom: "Cluster de tests de provocation sacro-iliaque (≥ 3 positifs)",
      technique: "Distraction, compression, thigh thrust, Gaenslen, sacral thrust.",
      discrimine: ["sacroiliac_pain"],
      precision: "Un regroupement de tests positifs est plus informatif qu'un test isolé. Se/Sp du cluster // TODO à sourcer/valider.",
    },
    {
      id: "flexion_extension_provocation",
      nom: "Mise en charge directionnelle (flexion vs extension répétées)",
      discrimine: ["discogenic_flexion", "facet_extension"],
      precision: "La réponse directionnelle (centralisation/aggravation) oriente entre profils discogénique et facettaire. Se/Sp // TODO à sourcer/valider.",
    },
  ],

  DRAPEAUX_ROUGES: [
    {
      id: "cauda_equina_sphincter",
      libelle: "Suspicion de syndrome de la queue de cheval (troubles sphinctériens)",
      si: { troubles_sphincteriens: true },
      conduite: "URGENCE neurochirurgicale : IRM en urgence. Rétention/incontinence récente = ne pas temporiser.",
    },
    {
      id: "cauda_equina_selle",
      libelle: "Suspicion de syndrome de la queue de cheval (anesthésie en selle)",
      si: { anesthesie_selle: true },
      conduite: "URGENCE neurochirurgicale : IRM en urgence. Rechercher troubles sphinctériens et déficit moteur associés.",
    },
    {
      id: "deficit_neuro_progressif",
      libelle: "Déficit neurologique installé / progressif",
      si: { deficit_moteur_progressif: true },
      conduite: "Avis rapide : un déficit moteur (ex. pied tombant) signe une compression radiculaire significative.",
    },
    {
      id: "fracture_trauma",
      libelle: "Suspicion de fracture (traumatisme sévère)",
      si: { trauma_severe: true },
      conduite: "Imagerie. La probabilité augmente nettement si plusieurs drapeaux fracture sont associés (Downie 2013).",
      source: "Downie 2013 (BMJ) DOI 10.1136/bmj.f7095",
    },
    {
      id: "fracture_osteoporose",
      libelle: "Suspicion de fracture (corticoïdes / ostéoporose)",
      si: { corticoides_prolonges: true },
      conduite: "Évoquer une fracture vertébrale même sur traumatisme mineur ; imagerie selon le contexte.",
      source: "Downie 2013 (BMJ) DOI 10.1136/bmj.f7095",
    },
    {
      id: "malignite",
      libelle: "Suspicion de cause maligne (antécédent de cancer)",
      si: { atcd_cancer: true },
      conduite: "L'antécédent de cancer est le signe le plus informatif d'une cause maligne : imagerie + avis. Renforcé par douleur nocturne/AEG.",
      source: "Downie 2013 (BMJ) DOI 10.1136/bmj.f7095",
    },
    {
      id: "infection_rachis",
      libelle: "Suspicion d'infection (spondylodiscite)",
      si: { signes_systemiques: true },
      conduite: "Fièvre/AEG + lombalgie : avis médical urgent (spondylodiscite, abcès épidural), surtout si toxicomanie IV / immunodépression.",
    },
    {
      id: "rachialgie_inflammatoire",
      libelle: "Possible rachialgie inflammatoire (spondyloarthrite)",
      si: { raideur_matinale_prolongee: true, reveil_2e_partie_nuit: true },
      conduite: "Raideur matinale prolongée + réveils nocturnes + amélioration à l'effort chez un sujet jeune : orienter vers un avis rhumatologique.",
    },
  ],
};

/* =============================================================================
   PROTOCOLES DE RÉÉDUCATION — synthèses de protocoles PUBLIÉS
   Version : v0.1 — 2026-07-05.
   ⚠️ Synthèses pédagogiques : appliquer selon le patient et l'avis médical.
   Les critères de progression priment sur les délais. Sources citées.
   ============================================================================= */
import type { Protocole } from "@/lib/contenu/types";

export const PROTOCOLES: Protocole[] = [
  {
    id: "alfredson_achille",
    nom: "Protocole excentrique d'Alfredson (tendinopathie corporéale du tendon d'Achille)",
    regions: ["cheville_pied"],
    pathologie: "Tendinopathie du corps du tendon d'Achille",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Programme d'exercices excentriques du triceps sural, 2 fois par jour, 7 j/7, pendant 12 semaines. Douleur modérée tolérée pendant l'exercice.",
    phases: [
      {
        nom: "Programme unique (12 semaines)",
        duree: "12 semaines",
        objectifs: ["Réduire la douleur", "Restaurer la capacité de charge du tendon"],
        contenu: [
          "3 × 15 répétitions genou tendu + 3 × 15 genou fléchi",
          "2 fois par jour, 7 jours sur 7 (soit 180 répétitions/jour)",
          "Phase excentrique : descente du talon sous le niveau de la marche, remontée avec le membre sain",
          "Progression par ajout de charge (sac à dos) quand l'exercice devient indolore",
        ],
        criteresProgression: ["Douleur devenue faible/absente à charge donnée → augmenter la charge"],
      },
    ],
    precautions: [
      "Distinguer atteinte corporéale (protocole validé) et insertionnelle (amplitude de descente à limiter).",
    ],
    sources: [
      { label: "Alfredson H et al. Am J Sports Med 1998", pubmedId: "9617396" },
    ],
  },
  {
    id: "hsr_tendinopathie",
    nom: "Heavy Slow Resistance (tendinopathie patellaire / achilléenne)",
    regions: ["genou", "cheville_pied"],
    pathologie: "Tendinopathie patellaire ou achilléenne",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Renforcement lourd et lent (3 s concentrique / 3 s excentrique), 3 séances/semaine, charges croissantes. Alternative efficace à l'excentrique isolé.",
    phases: [
      {
        nom: "Programme (≈ 12 semaines)",
        duree: "12 semaines",
        objectifs: ["Améliorer douleur et fonction", "Adaptation du tendon"],
        contenu: [
          "3 exercices (ex. squat, presse, hack squat) 3 fois/semaine",
          "Tempo lent : 3 s excentrique + 3 s concentrique",
          "Progression de charge : de 15RM (sem. 1) vers 6RM (sem. 9–12)",
          "Douleur ≤ 3/10 tolérée, doit se calmer au repos",
        ],
        criteresProgression: ["Tolérance à la charge sans exacerbation > 24 h"],
      },
    ],
    sources: [
      { label: "Kongsgaard M et al. Scand J Med Sci Sports 2009", pubmedId: "19793213" },
      { label: "Beyer R et al. Am J Sports Med 2015 (HSR vs excentrique, Achille)", pubmedId: "26018970" },
    ],
  },
  {
    id: "nordic_ischio",
    nom: "Nordic Hamstring (prévention des lésions ischio-jambières)",
    regions: ["cuisse"],
    pathologie: "Prévention primaire/secondaire des lésions des ischio-jambiers",
    populations: ["sportif"],
    resume:
      "Exercice excentrique nordique intégré à l'entraînement ; réduit d'environ moitié l'incidence des lésions ischio-jambières dans les sports de course.",
    phases: [
      {
        nom: "Programme de prévention",
        objectifs: ["Augmenter la force excentrique des ischio-jambiers", "Réduire l'incidence des lésions"],
        contenu: [
          "Progression sur ~10 semaines puis entretien",
          "Volume type : de 2×5 (sem. 1) à 3×12–10-8 (sem. 5+), 1–3 séances/semaine",
          "Contrôle de la descente le plus loin possible, retour aidé par les mains",
        ],
        criteresProgression: ["Augmenter volume/amplitude selon tolérance (courbatures)"],
      },
    ],
    precautions: ["Introduire progressivement (courbatures marquées au début)."],
    sources: [
      { label: "Petersen J et al. Am J Sports Med 2011", pubmedId: "21460189" },
      { label: "van Dyk N et al. Br J Sports Med 2019 (méta-analyse prévention)", pubmedId: "30846437" },
    ],
  },
  {
    id: "entorse_cheville",
    nom: "Rééducation fonctionnelle de l'entorse latérale de cheville",
    regions: ["cheville_pied"],
    pathologie: "Entorse latérale de cheville (LLE)",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Traitement fonctionnel (mobilisation précoce protégée + exercices), supérieur à l'immobilisation prolongée. Exercices neuromusculaires pour prévenir la récidive.",
    phases: [
      {
        nom: "Phase précoce (protection)",
        duree: "≈ J0–J7",
        objectifs: ["Contrôler douleur/œdème", "Charge protégée"],
        contenu: ["PEACE & LOVE / gestion de charge", "Mobilité active en dorsiflexion", "Appui selon douleur, aide de contention si besoin"],
      },
      {
        nom: "Phase de récupération",
        duree: "≈ S1–S3",
        objectifs: ["Restaurer amplitude et force", "Débuter proprioception"],
        contenu: ["Renforcement fibulaires/triceps", "Équilibre unipodal progressif", "Reprise marche normale"],
        criteresProgression: ["Appui complet indolore", "Amplitude symétrique"],
      },
      {
        nom: "Retour à l'activité",
        duree: "≈ S3+",
        objectifs: ["Réathlétisation", "Prévention de la récidive"],
        contenu: ["Exercices neuromusculaires/proprioceptifs", "Sauts, changements de direction progressifs", "Programme d'entretien"],
        criteresProgression: ["Hop tests symétriques", "Confiance et contrôle en pivot"],
      },
    ],
    sources: [
      { label: "Vuurberg G et al. Br J Sports Med 2018 (recommandations)", pubmedId: "29514819" },
    ],
  },
  {
    id: "lca_criteres",
    nom: "Rééducation du LCA basée sur des critères (retour au sport)",
    regions: ["genou"],
    pathologie: "Reconstruction / rupture du ligament croisé antérieur",
    populations: ["sportif", "post_operatoire"],
    resume:
      "Progression fondée sur l'atteinte de critères (force, hop tests, contrôle) plutôt que sur le seul délai. Retard du retour au sport et symétrie de force associés à moins de re-ruptures.",
    phases: [
      {
        nom: "Phase précoce",
        objectifs: ["Extension complète", "Contrôle de l'effusion", "Réveil quadricipital"],
        contenu: ["Mobilité, verrouillage quadricipital", "Marche sans boiterie", "Contrôle œdème/douleur"],
        criteresProgression: ["Extension symétrique, bon contrôle quadricipital"],
      },
      {
        nom: "Renforcement / neuromusculaire",
        objectifs: ["Restaurer force et contrôle", "Réintroduire la course"],
        contenu: ["Renforcement progressif", "Travail neuromusculaire/pliométrie de base"],
        criteresProgression: ["Symétrie de force quadriceps (LSI) en progression"],
      },
      {
        nom: "Retour au sport",
        objectifs: ["Réathlétisation complète", "Réduire le risque de récidive"],
        contenu: ["Pliométrie, agilité spécifiques", "Batterie de hop tests"],
        criteresProgression: [
          "LSI force quadriceps ≥ 90 %",
          "Hop tests ≥ 90 % du côté sain",
          "Retour au sport pivot différé (souvent ≥ 9 mois selon critères)",
        ],
      },
    ],
    precautions: ["Décision partagée avec le chirurgien ; les critères priment sur les délais."],
    sources: [
      { label: "van Melick N et al. Br J Sports Med 2016 (consensus rééducation LCA)", pubmedId: "27539507" },
      { label: "Grindem H et al. Br J Sports Med 2016 (retour au sport & re-rupture)", pubmedId: "27162233" },
    ],
  },
  {
    id: "glad_arthrose",
    nom: "GLA:D — éducation + exercice (arthrose de hanche / genou)",
    regions: ["hanche_aine", "genou"],
    pathologie: "Arthrose de hanche ou de genou",
    populations: ["adulte_msk", "geriatrie", "rhumatologie"],
    resume:
      "Programme structuré associant éducation du patient et exercice neuromusculaire supervisé, conforme aux recommandations « exercice + éducation en première intention » de l'arthrose.",
    phases: [
      {
        nom: "Éducation",
        duree: "≈ 2 séances",
        objectifs: ["Comprendre l'arthrose", "Auto-gestion, dédramatiser l'activité"],
        contenu: ["Sessions éducatives sur l'arthrose et son traitement", "Encouragement à l'activité physique"],
      },
      {
        nom: "Exercice neuromusculaire supervisé",
        duree: "≈ 6 semaines (≈ 12 séances)",
        objectifs: ["Contrôle neuromusculaire", "Force et confiance dans le mouvement"],
        contenu: ["Exercices de contrôle de la qualité du mouvement", "Progression individualisée", "Poursuite en autonomie ensuite"],
        criteresProgression: ["Bon contrôle du mouvement avant d'augmenter la charge"],
      },
    ],
    precautions: ["Approche de 1re intention ; ne dispense pas d'un avis médical si aggravation."],
    sources: [
      { label: "Skou ST, Roos EM. BMC Musculoskelet Disord 2017 (GLA:D)", pubmedId: "28173795" },
    ],
  },
  {
    id: "otago_chutes",
    nom: "Otago Exercise Programme (prévention des chutes)",
    regions: ["global"],
    pathologie: "Prévention des chutes de la personne âgée",
    populations: ["geriatrie"],
    resume:
      "Programme individualisé de renforcement des membres inférieurs et d'exercices d'équilibre, réalisé à domicile, réduisant les chutes chez les personnes âgées à risque.",
    phases: [
      {
        nom: "Programme individualisé",
        duree: "≈ 3×/semaine + marche, sur plusieurs mois",
        objectifs: ["Renforcer les membres inférieurs", "Améliorer l'équilibre", "Réduire le risque de chute"],
        contenu: [
          "Exercices de force (cheville, genou, hanche) avec lest progressif",
          "Exercices d'équilibre progressifs",
          "Programme de marche",
          "Progression revue lors de visites régulières",
        ],
        criteresProgression: ["Augmentation du lest et de la difficulté d'équilibre selon la tolérance"],
      },
    ],
    precautions: ["Adapter au niveau de fragilité ; sécuriser l'environnement d'exercice."],
    sources: [
      { label: "Campbell AJ et al. BMJ 1997 (Otago)", pubmedId: "9366737" },
    ],
  },
  {
    id: "capsulite_epaule",
    nom: "Capsulite rétractile (épaule gelée) — prise en charge par phases",
    regions: ["epaule"],
    pathologie: "Capsulite rétractile / épaule gelée",
    populations: ["adulte_msk"],
    resume:
      "Prise en charge guidée par l'irritabilité (recommandations de pratique) : la rééducation est adaptée à la phase douloureuse puis d'enraidissement, sans forcer en phase très irritable.",
    phases: [
      {
        nom: "Phase douloureuse (haute irritabilité)",
        objectifs: ["Contrôler la douleur", "Préserver les amplitudes accessibles sans les forcer"],
        contenu: ["Éducation, gestion de la douleur", "Mobilité douce dans l'amplitude indolore", "Éviter les étirements agressifs"],
        criteresProgression: ["Baisse de l'irritabilité (douleur nocturne, douleur avant la fin d'amplitude)"],
      },
      {
        nom: "Phase d'enraidissement (irritabilité modérée/basse)",
        objectifs: ["Récupérer les amplitudes", "Restaurer la fonction"],
        contenu: ["Mobilisations et étirements progressifs", "Techniques de thérapie manuelle", "Renforcement progressif"],
        criteresProgression: ["Gain d'amplitude, tolérance à l'étirement"],
      },
    ],
    precautions: ["Adapter l'intensité à l'irritabilité ; rechercher un diabète associé (facteur de risque)."],
    sources: [
      { label: "Kelley MJ et al. J Orthop Sports Phys Ther 2013 (CPG épaule gelée)", pubmedId: "23636125" },
    ],
  },
  {
    id: "coiffe_conservateur",
    nom: "Tendinopathie / conflit de coiffe — programme d'exercices (non opératoire)",
    regions: ["epaule"],
    pathologie: "Conflit sous-acromial / tendinopathie de coiffe",
    populations: ["adulte_msk", "sportif"],
    resume:
      "L'exercice a un effet significatif sur la douleur et la fonction ; la thérapie manuelle augmente l'effet de l'exercice ; un programme à domicile encadré équivaut à un programme supervisé.",
    phases: [
      {
        nom: "Programme d'exercices progressif",
        objectifs: ["Réduire la douleur", "Améliorer la fonction et le contrôle scapulo-huméral"],
        contenu: [
          "Renforcement de la coiffe et des stabilisateurs de la scapula",
          "Progression en charge et en amplitude",
          "Thérapie manuelle en complément si utile",
          "Programme à domicile encadré",
        ],
        criteresProgression: ["Diminution de la douleur, amélioration fonctionnelle"],
      },
    ],
    sources: [
      { label: "Kuhn JE. J Shoulder Elbow Surg 2009 (revue systématique + protocole)", pubmedId: "18835532" },
    ],
  },
  {
    id: "pfp_exercice",
    nom: "Syndrome fémoro-patellaire — exercice (hanche + genou)",
    regions: ["genou"],
    pathologie: "Syndrome douloureux fémoro-patellaire",
    populations: ["adulte_msk", "sportif"],
    resume:
      "L'exercice est recommandé, en combinant renforcement de la hanche (abducteurs/rotateurs externes) et du genou (quadriceps), selon les recommandations de pratique.",
    phases: [
      {
        nom: "Renforcement hanche + genou",
        objectifs: ["Réduire la douleur antérieure de genou", "Améliorer le contrôle du membre inférieur"],
        contenu: [
          "Renforcement des abducteurs et rotateurs externes de hanche",
          "Renforcement du quadriceps",
          "Exercices combinés hanche+genou > genou isolé",
          "Éventuellement : taping, thérapie combinée, orthèses selon le cas",
        ],
        criteresProgression: ["Contrôle du valgus dynamique, tolérance à la charge"],
      },
    ],
    sources: [
      { label: "Willy RW et al. J Orthop Sports Phys Ther 2019 (CPG douleur fémoro-patellaire)", pubmedId: "31475628" },
    ],
  },
  {
    id: "ischio_askling",
    nom: "Rééducation des lésions ischio-jambières — protocole d'allongement (Askling L-protocol)",
    regions: ["cuisse"],
    pathologie: "Lésion aiguë des ischio-jambiers",
    populations: ["sportif"],
    resume:
      "Un protocole mettant l'accent sur des exercices en position d'allongement (charge excentrique en amplitude) a été associé à un retour au sport plus rapide qu'un protocole conventionnel.",
    phases: [
      {
        nom: "Programme « lengthening »",
        objectifs: ["Récupérer force et longueur en toute sécurité", "Réduire le délai de retour au sport"],
        contenu: [
          "Trois exercices ciblant les ischio-jambiers en position d'allongement",
          "Progression selon la douleur et la tolérance",
          "Critères de reprise avant retour au sport",
        ],
        criteresProgression: ["Force et absence de douleur à l'étirement/contraction avant reprise"],
      },
    ],
    precautions: ["Distinguer les lésions de type sprint et de type étirement ; individualiser."],
    sources: [
      { label: "Askling CM et al. Br J Sports Med 2013", pubmedId: "23536466" },
    ],
  },
  {
    id: "lombalgie_cpg",
    nom: "Lombalgie — prise en charge par classification (recommandations JOSPT)",
    regions: ["rachis_lombaire"],
    pathologie: "Lombalgie aiguë, subaiguë et chronique",
    populations: ["adulte_msk", "geriatrie"],
    resume:
      "Recommandations de pratique : rester actif, éducation rassurante, exercice (contrôle moteur, renforcement, endurance), thérapie manuelle en complément ; approche adaptée à la présentation clinique (classification).",
    phases: [
      {
        nom: "Phase aiguë",
        objectifs: ["Rassurer et maintenir l'activité", "Réduire la douleur"],
        contenu: [
          "Éducation : évolution le plus souvent favorable, rester actif",
          "Thérapie manuelle si déficit de mobilité",
          "Exercices en direction de préférence si pertinent",
          "Éviter le repos strict au lit",
        ],
        criteresProgression: ["Reprise des activités quotidiennes"],
      },
      {
        nom: "Phase subaiguë / chronique",
        objectifs: ["Restaurer la fonction", "Prévenir la récidive et la chronicisation"],
        contenu: [
          "Exercices de contrôle moteur et renforcement du tronc",
          "Exercice général / endurance (marche, vélo…)",
          "Exposition graduée si peur du mouvement (drapeaux jaunes)",
          "Stratifier selon le risque (ex. STarT Back)",
        ],
        criteresProgression: ["Amélioration fonctionnelle (RMDQ/ODI), reprise des activités"],
      },
    ],
    precautions: ["Écarter les drapeaux rouges avant tout (voir module Drapeaux rouges)."],
    sources: [
      { label: "Delitto A et al. J Orthop Sports Phys Ther 2012 (CPG lombalgie)", pubmedId: "22466247" },
    ],
  },
  {
    id: "cervicalgie_cpg",
    nom: "Cervicalgie — prise en charge par catégories (recommandations JOSPT, révision 2017)",
    regions: ["rachis_cervical"],
    pathologie: "Cervicalgie (avec ou sans irradiation), whiplash, céphalée cervicogénique",
    populations: ["adulte_msk"],
    resume:
      "Recommandations de pratique : classer la cervicalgie (déficit de mobilité, troubles de coordination/whiplash, céphalée, douleur irradiante) et traiter par exercice + thérapie manuelle selon la catégorie et le stade.",
    phases: [
      {
        nom: "Déficit de mobilité",
        objectifs: ["Restaurer la mobilité cervicale et thoracique"],
        contenu: ["Mobilisations/manipulations cervicales et thoraciques", "Exercices de mobilité et renforcement cervico-scapulaire"],
      },
      {
        nom: "Troubles de coordination (whiplash)",
        objectifs: ["Reprendre confiance et fonction", "Éviter la chronicisation"],
        contenu: ["Éducation : rester actif, évolution favorable attendue", "Exercices progressifs (endurance, coordination)", "Exposition graduée aux activités"],
      },
      {
        nom: "Douleur irradiante",
        objectifs: ["Réduire les symptômes du membre supérieur"],
        contenu: ["Exercices de mobilisation neurale", "Traction et exercices selon la tolérance", "Renforcement progressif"],
      },
    ],
    precautions: ["Écarter drapeaux rouges (myélopathie, fracture, artère cervicale) avant traitement manuel."],
    sources: [
      { label: "Blanpied PR et al. J Orthop Sports Phys Ther 2017 (CPG cervicalgie)", pubmedId: "28666405" },
    ],
  },
  {
    id: "hanche_arthrose_cpg",
    nom: "Arthrose de hanche — exercice et thérapie manuelle (recommandations JOSPT, révision 2017)",
    regions: ["hanche_aine"],
    pathologie: "Coxarthrose / douleur de hanche avec déficit de mobilité",
    populations: ["adulte_msk", "geriatrie"],
    resume:
      "Recommandations de pratique : éducation à l'activité, exercices de renforcement et de souplesse, thérapie manuelle en complément ; l'exercice en première intention.",
    phases: [
      {
        nom: "Programme d'exercices",
        objectifs: ["Réduire douleur et raideur", "Améliorer force et fonction"],
        contenu: [
          "Renforcement progressif (fessiers, quadriceps)",
          "Exercices de mobilité/souplesse de hanche",
          "Activité aérobie adaptée (marche, vélo)",
          "Thérapie manuelle en complément si déficit de mobilité",
        ],
        criteresProgression: ["Tolérance à la charge, amélioration fonctionnelle (HOOS/WOMAC)"],
      },
    ],
    precautions: ["Douleur inflammatoire, boiterie fébrile ou traumatisme : avis médical."],
    sources: [
      { label: "Cibulka MT et al. J Orthop Sports Phys Ther 2017 (CPG hanche)", pubmedId: "28566053" },
    ],
  },
  {
    id: "rehab_respiratoire_bpco",
    nom: "Réhabilitation respiratoire (BPCO et maladies respiratoires chroniques)",
    regions: ["global"],
    pathologie: "BPCO, maladies respiratoires chroniques",
    populations: ["respiratoire", "geriatrie"],
    resume:
      "La réhabilitation respiratoire (entraînement à l'exercice + éducation + autogestion) améliore la dyspnée, la capacité d'exercice et la qualité de vie ; composante centrale : l'entraînement aérobie et en force.",
    phases: [
      {
        nom: "Programme structuré",
        duree: "≈ 6–12 semaines",
        objectifs: ["Réduire la dyspnée", "Améliorer la tolérance à l'effort et la qualité de vie"],
        contenu: [
          "Entraînement aérobie (vélo, marche) à intensité adaptée",
          "Renforcement des membres inférieurs et supérieurs",
          "Éducation et autogestion (exacerbations, activité)",
          "Évaluation par test de marche de 6 minutes avant/après",
        ],
        criteresProgression: ["Progression de l'intensité selon dyspnée (Borg) et tolérance"],
      },
    ],
    precautions: ["Programme initié après évaluation médicale ; surveiller SpO2 et signes d'intolérance."],
    sources: [
      { label: "Spruit MA et al. Am J Respir Crit Care Med 2013 (ATS/ERS statement)", pubmedId: "24127811" },
    ],
  },
  {
    id: "avc_rehab",
    nom: "Rééducation après AVC (recommandations AHA/ASA)",
    regions: ["global"],
    pathologie: "Accident vasculaire cérébral (phase subaiguë et chronique)",
    populations: ["neuro", "geriatrie"],
    resume:
      "Rééducation intensive, orientée tâche et répétitive, débutée dès que possible dans une filière organisée ; l'entraînement de la marche, de l'équilibre et du membre supérieur orienté tâche est recommandé.",
    phases: [
      {
        nom: "Principes transversaux",
        objectifs: ["Récupération fonctionnelle maximale", "Prévention des complications et des chutes"],
        contenu: [
          "Entraînement orienté tâche, intensif et répétitif",
          "Travail de l'équilibre et de la marche (dont tapis si utile)",
          "Rééducation du membre supérieur (contrainte induite si éligible)",
          "Prise en charge multidisciplinaire coordonnée",
        ],
        criteresProgression: ["Objectifs fonctionnels individualisés (marche, AVQ)"],
      },
    ],
    precautions: ["Coordination médicale indispensable (risque cardiovasculaire, spasticité, héminégligence…)."],
    sources: [
      { label: "Winstein CJ et al. Stroke 2016 (guidelines AHA/ASA)", pubmedId: "27145936" },
    ],
  },
  {
    id: "parkinson_lsvt_big",
    nom: "Maladie de Parkinson — entraînement en grande amplitude (LSVT-BIG)",
    regions: ["global"],
    pathologie: "Maladie de Parkinson (stades légers à modérés)",
    populations: ["neuro", "geriatrie"],
    resume:
      "Protocole intensif d'exercices en grande amplitude (16 séances individuelles d'1 h sur 4 semaines) ayant amélioré la motricité (UPDRS-III) versus marche nordique ou exercice à domicile dans l'essai princeps.",
    phases: [
      {
        nom: "Protocole LSVT-BIG",
        duree: "4 semaines (16 × 1 h)",
        objectifs: ["Augmenter l'amplitude des mouvements", "Améliorer la vitesse et la motricité globale"],
        contenu: [
          "Mouvements de grande amplitude, haute intensité",
          "Répétition et calibration de l'effort perçu",
          "Transfert vers les activités quotidiennes",
          "Poursuite en autonomie après le programme",
        ],
        criteresProgression: ["Amplitude et qualité du mouvement dans les tâches quotidiennes"],
      },
    ],
    precautions: ["Adapter aux fluctuations motrices ; coordination avec le traitement médicamenteux."],
    sources: [
      { label: "Ebersbach G et al. Mov Disord 2010 (essai LSVT-BIG)", pubmedId: "20669294" },
    ],
  },
  {
    id: "canal_carpien_cpg",
    nom: "Syndrome du canal carpien — prise en charge non chirurgicale (CPG JOSPT 2019)",
    regions: ["poignet_main"],
    pathologie: "Syndrome du canal carpien",
    populations: ["adulte_msk"],
    resume:
      "Recommandations de pratique : orthèse nocturne de poignet, mobilisation neurodynamique du nerf médian et éducation ; la kinésithérapie peut retarder ou éviter la chirurgie dans les formes légères à modérées.",
    phases: [
      {
        nom: "Prise en charge conservatrice",
        objectifs: ["Réduire les paresthésies nocturnes", "Améliorer la fonction de la main"],
        contenu: [
          "Orthèse de poignet en position neutre (surtout la nuit)",
          "Techniques de glissement neural du nerf médian (neurodynamique)",
          "Mobilisation du poignet/carpe, éducation ergonomique",
          "Réévaluation ; orientation chirurgicale si déficit moteur ou échec",
        ],
        criteresProgression: ["Diminution des symptômes nocturnes et amélioration fonctionnelle"],
      },
    ],
    precautions: ["Déficit moteur (amyotrophie thénarienne) / atteinte sévère : avis chirurgical."],
    sources: [
      { label: "Erickson M et al. J Orthop Sports Phys Ther 2019 (CPG canal carpien)", pubmedId: "31039690" },
    ],
  },
  {
    id: "epicondylalgie_laterale_cpg",
    nom: "Épicondylalgie latérale — exercice + thérapie manuelle (CPG JOSPT 2022)",
    regions: ["coude"],
    pathologie: "Épicondylalgie latérale (tennis elbow)",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Recommandations de pratique : exercice avec charge progressive des extenseurs du poignet (dont travail excentrique/isométrique), thérapie manuelle en complément, éducation et gestion de charge.",
    phases: [
      {
        nom: "Renforcement progressif",
        objectifs: ["Réduire la douleur", "Restaurer la force de préhension et la fonction"],
        contenu: [
          "Renforcement progressif des extenseurs du poignet (isométrique → excentrique/lourd et lent)",
          "Thérapie manuelle du coude/poignet en complément",
          "Éducation, adaptation des gestes et de la charge",
          "Orthèse (bracelet) possible en appoint symptomatique",
        ],
        criteresProgression: ["Tolérance à la charge, amélioration de la préhension indolore"],
      },
    ],
    sources: [
      { label: "Lucado AM et al. J Orthop Sports Phys Ther 2022 (CPG épicondylalgie latérale)", pubmedId: "36453071" },
    ],
  },
  {
    id: "achilleen_cpg",
    nom: "Tendinopathie achilléenne — recommandations de pratique (CPG JOSPT 2018)",
    regions: ["cheville_pied"],
    pathologie: "Tendinopathie du tendon d'Achille (corporéale et insertionnelle)",
    populations: ["adulte_msk", "sportif"],
    resume:
      "Recommandations de pratique : l'exercice avec mise en charge du tendon (excentrique ou lourd et lent) est le traitement de référence ; éducation et gestion de charge ; distinguer atteinte corporéale et insertionnelle (amplitude limitée si insertionnelle).",
    phases: [
      {
        nom: "Mise en charge du tendon",
        objectifs: ["Réduire la douleur", "Restaurer la capacité de charge et la fonction"],
        contenu: [
          "Programme excentrique (Alfredson) ou Heavy Slow Resistance",
          "Progression de charge guidée par la douleur (≤ 3-5/10, se calmant au repos)",
          "Éducation et gestion de la charge d'entraînement",
          "Atteinte insertionnelle : limiter la dorsiflexion (éviter la descente sous le plan)",
        ],
        criteresProgression: ["Tolérance à la charge sans exacerbation > 24 h ; suivi par VISA-A"],
      },
    ],
    sources: [
      { label: "Martin RL et al. J Orthop Sports Phys Ther 2018 (CPG tendinopathie achilléenne)", pubmedId: "29712543" },
    ],
  },
  {
    id: "torticolis_congenital_cpg",
    nom: "Torticolis musculaire congénital — prise en charge (CPG APTA pédiatrie, révision 2018)",
    regions: ["rachis_cervical"],
    pathologie: "Torticolis musculaire congénital du nourrisson",
    populations: ["pediatrie"],
    resume:
      "Recommandations de pratique : dépistage précoce, étirements passifs doux du sterno-cléido-mastoïdien, encouragement du mouvement actif (positionnement, portage, jeu), éducation des parents ; orientation médicale si asymétrie atypique ou absence de progrès.",
    phases: [
      {
        nom: "Prise en charge de 1re intention",
        objectifs: ["Restaurer la mobilité cervicale passive et active", "Prévenir/limiter la plagiocéphalie associée"],
        contenu: [
          "Étirements passifs doux et fréquents du SCM (rotation/inclinaison)",
          "Stimulation du mouvement actif vers le côté limité (jeu, portage, positionnement)",
          "Temps d'éveil sur le ventre supervisé (tummy time)",
          "Éducation et implication des parents à chaque étape",
        ],
        criteresProgression: ["Symétrie des rotations passives et actives, tenue de tête symétrique"],
      },
    ],
    precautions: [
      "Orientation médicale si : masse cervicale atypique, limitation sévère, signes neurologiques, absence d'amélioration après 4–6 semaines de traitement bien conduit.",
    ],
    sources: [
      { label: "Kaplan SL et al. Pediatr Phys Ther 2018 (CPG torticolis congénital)", pubmedId: "30277962" },
    ],
  },
  {
    id: "pfmt_incontinence",
    nom: "Rééducation périnéale (PFMT) — incontinence urinaire de la femme",
    regions: ["tronc_bassin"],
    pathologie: "Incontinence urinaire d'effort, d'urgenturie ou mixte",
    populations: ["perinatal", "adulte_msk", "geriatrie"],
    resume:
      "L'entraînement des muscles du plancher pelvien (PFMT) est le traitement de 1re intention de l'incontinence urinaire d'effort et mixte de la femme : les femmes traitées rapportent plus souvent une guérison ou amélioration et une meilleure qualité de vie (revue Cochrane).",
    phases: [
      {
        nom: "Programme d'entraînement du plancher pelvien",
        duree: "≥ 3 mois",
        objectifs: ["Restaurer force, endurance et coordination périnéales", "Réduire les fuites et améliorer la qualité de vie"],
        contenu: [
          "Vérifier la contraction correcte (éviter les compensations abdominales/fessières)",
          "Exercices de contraction périnéale progressifs (force + endurance + verrouillage à l'effort)",
          "Programme quotidien supervisé régulièrement",
          "Suivi par questionnaire validé (ex. ICIQ-UI SF)",
        ],
        criteresProgression: ["Amélioration des fuites (calendrier mictionnel, ICIQ) et de la force périnéale"],
      },
    ],
    precautions: ["Signes urinaires atypiques (hématurie, infections répétées, douleur pelvienne inexpliquée) : avis médical."],
    sources: [
      { label: "Dumoulin C et al. Cochrane Database Syst Rev 2018 (PFMT vs pas de traitement)", pubmedId: "30288727" },
    ],
  },
  {
    id: "pelvic_girdle_pain",
    nom: "Douleur de ceinture pelvienne (grossesse / post-partum) — guidelines européennes",
    regions: ["tronc_bassin", "rachis_lombaire"],
    pathologie: "Pelvic girdle pain (douleur pelvienne postérieure liée à la grossesse)",
    populations: ["perinatal"],
    resume:
      "Guidelines européennes : diagnostic par tests spécifiques (ASLR, provocation pelvienne postérieure), rassurer et encourager l'activité, exercices individualisés ; ceinture pelvienne en appoint symptomatique.",
    phases: [
      {
        nom: "Prise en charge",
        objectifs: ["Réduire la douleur et maintenir l'activité", "Restaurer le transfert de charge lombo-pelvien"],
        contenu: [
          "Information et réassurance (évolution le plus souvent favorable en post-partum)",
          "Exercices individualisés de stabilisation lombo-pelvienne",
          "Adaptation des activités quotidiennes ; ceinture pelvienne en appoint si soulagement",
          "Suivi par ASLR et échelle de douleur",
        ],
        criteresProgression: ["Amélioration de l'ASLR et des activités quotidiennes"],
      },
    ],
    precautions: ["Douleur non mécanique, fièvre, signes urinaires ou neurologiques : avis médical."],
    sources: [
      { label: "Vleeming A et al. Eur Spine J 2008 (guidelines pelvic girdle pain)", pubmedId: "18259783" },
    ],
  },
];

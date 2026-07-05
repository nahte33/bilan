/* =============================================================================
   DRAPEAUX ROUGES TRANSVERSAUX (par région et population)
   Version : v0.1 — 2026-07-05.
   ============================================================================= */
import type { DrapeauTransversal } from "@/lib/contenu/types";

export const DRAPEAUX: DrapeauTransversal[] = [
  {
    id: "syndrome_queue_cheval",
    libelle: "Syndrome de la queue de cheval",
    regions: ["rachis_lombaire", "tronc_bassin"],
    populations: ["adulte_msk", "geriatrie", "sportif"],
    signes: [
      "Anesthésie en selle",
      "Troubles sphinctériens (rétention/incontinence urinaire ou fécale)",
      "Déficit moteur bilatéral progressif",
      "Troubles sexuels d'apparition récente",
    ],
    conduite: "Urgence neurochirurgicale : orientation immédiate (IRM en urgence).",
    sources: [{ label: "Recommandations lombalgie — red flags (NICE NG59)", url: "https://www.nice.org.uk/guidance/ng59" }],
  },
  {
    id: "fracture_vertebrale",
    libelle: "Fracture vertébrale (dont ostéoporotique)",
    regions: ["rachis_lombaire", "rachis_thoracique", "rachis_cervical"],
    populations: ["geriatrie", "adulte_msk", "rhumatologie"],
    signes: [
      "Traumatisme (même mineur si os fragile)",
      "Âge élevé, corticothérapie prolongée, ostéoporose connue",
      "Douleur rachidienne intense d'apparition brutale",
    ],
    conduite: "Avis médical + imagerie. Prudence à la mobilisation.",
    sources: [{ label: "Downie A et al. BMJ 2013 (red flags fracture/malignité)", pubmedId: "24335669" }],
  },
  {
    id: "malignite_rachis",
    libelle: "Néoplasie / métastase rachidienne",
    regions: ["rachis_lombaire", "rachis_thoracique", "rachis_cervical", "global"],
    populations: ["adulte_msk", "geriatrie", "rhumatologie"],
    signes: [
      "Antécédent de cancer",
      "Douleur nocturne non mécanique, de repos",
      "Altération de l'état général, perte de poids inexpliquée",
      "Âge > 50 ans avec douleur nouvelle persistante",
    ],
    conduite: "Avis médical rapide + imagerie/biologie.",
    sources: [{ label: "Downie A et al. BMJ 2013", pubmedId: "24335669" }],
  },
  {
    id: "infection_rachidienne",
    libelle: "Infection (spondylodiscite, arthrite septique)",
    regions: ["rachis_lombaire", "global"],
    populations: ["adulte_msk", "geriatrie"],
    signes: [
      "Fièvre, frissons, sueurs nocturnes",
      "Immunodépression, toxicomanie IV, geste invasif récent",
      "Douleur intense inflammatoire",
    ],
    conduite: "Avis médical urgent (biologie, imagerie).",
    sources: [{ label: "Recommandations red flags MSK (synthèse)" }],
  },
  {
    id: "tvp_membre_inf",
    libelle: "Thrombose veineuse profonde",
    regions: ["cuisse", "genou", "cheville_pied"],
    populations: ["adulte_msk", "post_operatoire", "geriatrie"],
    signes: [
      "Mollet unilatéral chaud, douloureux, œdématié",
      "Contexte : immobilisation, post-op, néoplasie, long voyage",
    ],
    conduite: "Ne pas masser. Avis médical urgent (score de Wells, écho-doppler).",
    sources: [{ label: "Wells PS et al. — probabilité clinique de TVP" }],
  },
  {
    id: "cardiaque_epaule_thorax",
    libelle: "Origine cardiaque (douleur épaule/bras/thorax)",
    regions: ["epaule", "rachis_thoracique"],
    populations: ["adulte_msk", "geriatrie"],
    signes: [
      "Douleur thoracique/mâchoire/bras gauche à l'effort",
      "Dyspnée, sueurs, malaise",
      "Facteurs de risque cardiovasculaire",
    ],
    conduite: "Urgence : suspicion de syndrome coronarien → appeler le 15/112.",
    sources: [{ label: "Red flags douleur référée d'origine viscérale (synthèse)" }],
  },
  {
    id: "myelopathie_cervicale",
    libelle: "Myélopathie cervicale",
    regions: ["rachis_cervical"],
    populations: ["adulte_msk", "geriatrie"],
    signes: [
      "Maladresse des mains, troubles fins",
      "Troubles de la marche/équilibre",
      "Signes pyramidaux (Hoffmann, hyperréflexie), troubles sphinctériens",
    ],
    conduite: "Avis neurochirurgical + IRM.",
    sources: [{ label: "Red flags cervicaux (synthèse)" }],
  },
  {
    id: "fracture_stress_pediatrie",
    libelle: "Souffrance du cartilage de croissance / apophyse (enfant-ado)",
    regions: ["hanche_aine", "genou", "cheville_pied"],
    populations: ["pediatrie", "sportif"],
    signes: [
      "Douleur mécanique de l'enfant sportif en croissance",
      "Boiterie, douleur projetée hanche→genou (penser épiphysiolyse)",
    ],
    conduite: "Avis médical + imagerie adaptée ; ne pas banaliser une boiterie de l'enfant.",
    sources: [{ label: "Red flags pédiatriques MSK (synthèse)" }],
  },
];

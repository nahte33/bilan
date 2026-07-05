/* =============================================================================
   TYPES DE CONTENU — modules de la plateforme (hors moteur du bilan)
   =============================================================================
   Chaque module de connaissance a un type strict. Règle d'or : tout élément
   porte une `sources` réelle, ou est explicitement marqué à valider.
   ============================================================================= */

/** Référence bibliographique ou réglementaire réelle. */
export interface Source {
  label: string;
  doi?: string;
  pubmedId?: string;
  url?: string;
  /** Date de consultation/vérification (utile pour les fiches réglementaires). */
  verifie?: string;
}

/** Populations cibles (transversal à tous les modules). */
export type Population =
  | "adulte_msk"
  | "sportif"
  | "geriatrie"
  | "pediatrie"
  | "neuro"
  | "respiratoire"
  | "perinatal"
  | "rhumatologie"
  | "post_operatoire";

export const POPULATIONS: Record<Population, string> = {
  adulte_msk: "Adulte — MSK",
  sportif: "Sportif",
  geriatrie: "Gériatrie",
  pediatrie: "Pédiatrie",
  neuro: "Neurologie",
  respiratoire: "Respiratoire",
  perinatal: "Périnatalité",
  rhumatologie: "Rhumatologie",
  post_operatoire: "Post-opératoire",
};

/** Régions corporelles (partagées avec le bilan). */
export type RegionCorporelle =
  | "rachis_cervical"
  | "rachis_thoracique"
  | "rachis_lombaire"
  | "epaule"
  | "coude"
  | "poignet_main"
  | "hanche_aine"
  | "cuisse"
  | "genou"
  | "cheville_pied"
  | "tronc_bassin"
  | "global";

export const REGIONS_CORPS: Record<RegionCorporelle, string> = {
  rachis_cervical: "Rachis cervical",
  rachis_thoracique: "Rachis thoracique",
  rachis_lombaire: "Rachis lombaire",
  epaule: "Épaule",
  coude: "Coude",
  poignet_main: "Poignet / main",
  hanche_aine: "Hanche / aine",
  cuisse: "Cuisse",
  genou: "Genou",
  cheville_pied: "Cheville / pied",
  tronc_bassin: "Tronc / bassin",
  global: "Global",
};

/** Statut de droits d'un contenu tiers (questionnaires notamment). */
export type StatutCopyright = "libre" | "protege" | "a_verifier";

// ---------------------------------------------------------------------------
// QUESTIONNAIRES / PROMs
// ---------------------------------------------------------------------------
export interface Questionnaire {
  id: string;
  nom: string;
  acronyme?: string;
  domaine: string;
  populations: Population[];
  regions?: RegionCorporelle[];
  indication: string;
  structure: string;
  scoring: string;
  interpretation: string;
  /** Différence minimale cliniquement importante (si publiée). */
  mcid?: string;
  /** Différence minimale détectable (si publiée). */
  mdc?: string;
  tempsPassation?: string;
  copyright: StatutCopyright;
  /** Où obtenir la version officielle (si protégé) / le texte (si libre). */
  acces?: string;
  /** Lien direct vers le site officiel / le PDF (instruments libres uniquement). */
  urlOfficiel?: string;
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// PROTOCOLES DE RÉÉDUCATION
// ---------------------------------------------------------------------------
export interface PhaseProtocole {
  nom: string;
  duree?: string;
  objectifs: string[];
  criteresProgression?: string[];
  contenu: string[];
}
export interface Protocole {
  id: string;
  nom: string;
  regions: RegionCorporelle[];
  pathologie: string;
  populations: Population[];
  resume: string;
  phases: PhaseProtocole[];
  precautions?: string[];
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// TESTS CLINIQUES (bibliothèque consultable)
// ---------------------------------------------------------------------------
export interface TestClinique {
  id: string;
  nom: string;
  regions: RegionCorporelle[];
  cible: string;
  technique?: string;
  /** Sensibilité / spécificité + interprétation (rule-in / rule-out). */
  precision?: string;
  interpretation?: string;
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// DRAPEAUX ROUGES (transversal)
// ---------------------------------------------------------------------------
export interface DrapeauTransversal {
  id: string;
  libelle: string;
  regions: RegionCorporelle[];
  populations: Population[];
  signes: string[];
  conduite: string;
  sources: Source[];
}

// ---------------------------------------------------------------------------
// NORMES & VALEURS DE RÉFÉRENCE
// ---------------------------------------------------------------------------
export interface Norme {
  id: string;
  nom: string;
  categorie: string;
  valeurs: { parametre: string; valeur: string; precision?: string }[];
  populations?: Population[];
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// EXERCICES
// ---------------------------------------------------------------------------
export interface Exercice {
  id: string;
  nom: string;
  regions: RegionCorporelle[];
  objectif: string;
  phases?: string[];
  description: string;
  dosage?: string;
  progression?: string;
  regression?: string;
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// ANATOMIE DE RÉFÉRENCE
// ---------------------------------------------------------------------------
export interface EntreeAnatomie {
  id: string;
  categorie: "dermatome" | "myotome" | "reflexe" | "innervation" | "repere";
  niveau: string;
  description: string;
  sources: Source[];
  aValider?: boolean;
}

// ---------------------------------------------------------------------------
// GLOSSAIRE EBP
// ---------------------------------------------------------------------------
export interface TermeGlossaire {
  id: string;
  terme: string;
  sigle?: string;
  definition: string;
  formule?: string;
  exemple?: string;
}

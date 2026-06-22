/* =============================================================================
   MOTEUR — TYPES (génériques, aucune connaissance d'une région particulière)
   =============================================================================
   La "forme" des données d'une région. Ajouter une région ne touche jamais
   à ce fichier : on produit un nouveau module `data/regions/<region>.ts` au
   même format.
   ============================================================================= */

/** Valeur possible d'une réponse d'anamnèse. */
export type ReponseValeur = string | boolean | string[];

/** Carte des réponses courantes : { questionId: valeur }. */
export type Reponses = Record<string, ReponseValeur | undefined>;

/**
 * Condition logique (ET sur toutes les clés). La valeur attendue peut être
 * une chaîne, un booléen, ou une liste (OU sur les éléments de la liste).
 */
export type Condition = Record<string, ReponseValeur>;

export interface Option {
  valeur: string;
  label: string;
}

export type TypeQuestion = "choix_unique" | "choix_multiple" | "oui_non";

export interface Question {
  id: string;
  texte: string;
  type: TypeQuestion;
  options?: Option[];
  /** La question ne s'affiche que si cette condition est vraie. */
  condition?: Condition;
  aide?: string;
}

export interface Indice {
  si: Condition;
  poids: number;
  source?: string;
}

export interface Hypothese {
  id: string;
  nom: string;
  quadrant: string;
  indices: Indice[];
}

export interface Test {
  id: string;
  nom: string;
  technique?: string;
  /** ids des hypothèses que le test renforce/infirme. */
  discrimine: string[];
  /** Se/Sp + interprétation (rule-in / rule-out). Indicatif, sourcé. */
  precision?: string;
  source?: string;
}

/**
 * Test de dépistage non rattaché à une entité : proposé dès qu'une réponse
 * précise est vraie (ex. dépistage fracture lié au drapeau rouge).
 */
export interface TestScreen {
  id: string;
  nom: string;
  /** id de la question dont la réponse `true` déclenche la proposition. */
  siRep: string;
  technique?: string;
  precision?: string;
  source?: string;
}

export interface DrapeauRouge {
  id: string;
  libelle: string;
  si: Condition;
  conduite: string;
  source?: string;
}

/** Seuils des bandes qualitatives (jamais des probabilités). */
export interface Bandes {
  forte: number;
  moderee: number;
}

export type Bande = "forte" | "moderee" | "faible";

export interface Region {
  nom: string;
  BANDES: Bandes;
  QUESTIONS: Question[];
  HYPOTHESES: Hypothese[];
  TESTS: Test[];
  TEST_SCREEN?: TestScreen;
  DRAPEAUX_ROUGES: DrapeauRouge[];
}

// ---------- Résultats produits par le moteur ----------

export interface HypotheseClassee extends Hypothese {
  score: number;
  /** Libellés lisibles des réponses ayant contribué (transparence). */
  why: string[];
  bande: Bande;
}

export interface TestPropose extends Test {
  /** Vrai pour le test de dépistage (rendu visuellement distinct). */
  screen?: boolean;
}

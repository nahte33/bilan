/* =============================================================================
   VIEW-MODEL COMMUN — toutes les fiches de contenu se ramènent à cette forme,
   rendue par <ListePage>. Garde l'UI DRY et cohérente d'un module à l'autre.
   ============================================================================= */

export type Tone = "teal" | "brass" | "red" | "grey";

export interface Badge {
  label: string;
  tone?: Tone;
}

export interface LienSource {
  label: string;
  href?: string;
}

export interface Bloc {
  titre?: string;
  items: string[];
}

export interface FicheVM {
  id: string;
  titre: string;
  sousTitre?: string;
  badges?: Badge[];
  /** Lignes clé/valeur (ex. « Scoring : 0–100 »). */
  meta?: { k: string; v: string }[];
  /** Blocs à puces (ex. phases, signes). */
  blocs?: Bloc[];
  /** Paragraphe(s) libre(s). */
  texte?: string;
  /** Encadré d'alerte (conduite à tenir, avertissement). */
  alerte?: string;
  sources?: LienSource[];
  aValider?: boolean;
  /** Identifiants de facettes pour le filtrage (régions, populations…). */
  facetIds?: string[];
  /** Texte concaténé pour la recherche plein-texte. */
  recherche: string;
}

export interface Facette {
  id: string;
  label: string;
}

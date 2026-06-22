/* =============================================================================
   REGISTRE DES RÉGIONS DISPONIBLES
   =============================================================================
   Ajouter une région = ajouter son module ici. RIEN d'autre à toucher
   (ni le moteur, ni l'UI).
   ============================================================================= */

import type { Region } from "@/lib/moteur/types";
import { hancheAine } from "./hanche-aine";
import { genou } from "./genou";
import { chevillePied } from "./cheville-pied";
import { cuisse } from "./cuisse";

export interface EntreeRegion {
  id: string;
  region: Region;
  /** Régions annoncées mais pas encore disponibles (option désactivée). */
  aVenir?: boolean;
}

export const REGIONS: Record<string, Region> = {
  hanche_aine: hancheAine,
  genou: genou,
  cheville_pied: chevillePied,
  cuisse: cuisse,
};

/** Ordre d'affichage du sélecteur (régions à venir incluses, désactivées). */
export const REGIONS_MENU: { id: string; nom: string; aVenir?: boolean }[] = [
  { id: "hanche_aine", nom: hancheAine.nom },
  { id: "genou", nom: genou.nom },
  { id: "cheville_pied", nom: chevillePied.nom },
  { id: "cuisse", nom: cuisse.nom },
  { id: "epaule", nom: "Épaule — à venir", aVenir: true },
  { id: "rachis_lombaire", nom: "Rachis lombaire — à venir", aVenir: true },
];

export const REGION_DEFAUT = "hanche_aine";

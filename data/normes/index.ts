/* =============================================================================
   NORMES & VALEURS DE RÉFÉRENCE
   Version : v0.1 — 2026-07-05.
   ⚠️ Valeurs de référence indicatives : variables selon l'âge, le sexe, la
   méthode de mesure et la source. À confronter au côté sain et au contexte.
   ============================================================================= */
import type { Norme } from "@/lib/contenu/types";

export const NORMES: Norme[] = [
  {
    id: "gonio_epaule",
    nom: "Amplitudes articulaires — épaule",
    categorie: "Goniométrie",
    valeurs: [
      { parametre: "Flexion", valeur: "≈ 180°" },
      { parametre: "Abduction", valeur: "≈ 180°" },
      { parametre: "Rotation externe (bras le long du corps)", valeur: "≈ 70–90°" },
      { parametre: "Rotation interne", valeur: "≈ 70°" },
    ],
    sources: [{ label: "AAOS — amplitudes articulaires de référence (indicatif)" }],
    aValider: true,
  },
  {
    id: "gonio_hanche",
    nom: "Amplitudes articulaires — hanche",
    categorie: "Goniométrie",
    valeurs: [
      { parametre: "Flexion", valeur: "≈ 120°" },
      { parametre: "Extension", valeur: "≈ 20–30°" },
      { parametre: "Abduction", valeur: "≈ 45°" },
      { parametre: "Rotation interne", valeur: "≈ 35–45°" },
      { parametre: "Rotation externe", valeur: "≈ 45°" },
    ],
    sources: [{ label: "AAOS — amplitudes articulaires de référence (indicatif)" }],
    aValider: true,
  },
  {
    id: "gonio_genou",
    nom: "Amplitudes articulaires — genou",
    categorie: "Goniométrie",
    valeurs: [
      { parametre: "Flexion", valeur: "≈ 135–140°" },
      { parametre: "Extension", valeur: "0° (≈ +5° hyperextension physiologique)" },
    ],
    sources: [{ label: "AAOS — amplitudes articulaires de référence (indicatif)" }],
    aValider: true,
  },
  {
    id: "gonio_cheville",
    nom: "Amplitudes articulaires — cheville",
    categorie: "Goniométrie",
    valeurs: [
      { parametre: "Dorsiflexion", valeur: "≈ 20°" },
      { parametre: "Flexion plantaire", valeur: "≈ 40–50°" },
    ],
    sources: [{ label: "AAOS — amplitudes articulaires de référence (indicatif)" }],
    aValider: true,
  },
  {
    id: "tug",
    nom: "Timed Up and Go (TUG)",
    categorie: "Mobilité / équilibre",
    valeurs: [
      { parametre: "Adulte autonome", valeur: "< 10 s (usuel)" },
      { parametre: "Seuil d'alerte (risque de chute)", valeur: "≥ 13,5 s", precision: "seuil variable selon la population" },
    ],
    populations: ["geriatrie", "neuro"],
    sources: [{ label: "Podsiadlo D, Richardson S. J Am Geriatr Soc 1991", pubmedId: "1991946" }],
  },
  {
    id: "vitesse_marche",
    nom: "Vitesse de marche confortable",
    categorie: "Marche",
    valeurs: [
      { parametre: "Adulte (indicatif)", valeur: "≈ 1,2–1,4 m/s" },
      { parametre: "Seuil de fragilité (personne âgée)", valeur: "< 0,8 m/s (indicatif)" },
    ],
    populations: ["geriatrie", "neuro"],
    sources: [{ label: "Fritz S, Lusardi M. J Geriatr Phys Ther 2009 (walking speed, vital sign)", pubmedId: "20039582" }],
  },
  {
    id: "grip",
    nom: "Force de préhension (dynamomètre)",
    categorie: "Force",
    valeurs: [
      { parametre: "Valeurs normatives", valeur: "Dépendent fortement de l'âge et du sexe — se référer aux tables normatives", precision: "comparer au côté controlatéral" },
    ],
    sources: [{ label: "Bohannon RW — valeurs normatives de grip strength" }],
    aValider: true,
  },
];

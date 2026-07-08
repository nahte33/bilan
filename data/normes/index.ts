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
      { parametre: "Profil vie entière", valeur: "Pic vers 30–40 ans puis déclin progressif", precision: "normes centilées par âge et sexe" },
      { parametre: "Pic moyen (données britanniques)", valeur: "Hommes ≈ 51 kg · Femmes ≈ 31 kg", precision: "à comparer aux centiles et au côté controlatéral" },
    ],
    sources: [
      { label: "Dodds RM et al. PLoS One 2014 (normes vie entière, 12 études UK)", pubmedId: "25474696", doi: "10.1371/journal.pone.0113637" },
    ],
  },
  {
    id: "berg_seuil",
    nom: "Échelle d'équilibre de Berg — lecture du risque de chute",
    categorie: "Équilibre",
    valeurs: [
      { parametre: "Score", valeur: "0–56 (14 tâches cotées 0–4)" },
      { parametre: "Risque de chute", valeur: "Le risque augmente nettement sous ≈ 45/56", precision: "un score bas isolé prédit mal la chute individuelle — à intégrer au contexte (Muir 2008)" },
    ],
    populations: ["geriatrie", "neuro"],
    sources: [
      { label: "Muir SW et al. Phys Ther 2008 (valeur prédictive du Berg)", pubmedId: "18218822", doi: "10.2522/ptj.20070251" },
    ],
  },
  {
    id: "tm6_predit",
    nom: "Test de marche de 6 minutes — valeurs prédites",
    categorie: "Marche",
    valeurs: [
      { parametre: "Adultes sains 40–80 ans (médianes)", valeur: "Hommes ≈ 576 m · Femmes ≈ 494 m" },
      { parametre: "Équations de référence", valeur: "Fonction de l'âge, la taille, le poids et le sexe", precision: "utiliser l'équation d'Enright-Sherrill pour la valeur prédite individuelle" },
    ],
    populations: ["respiratoire", "geriatrie"],
    sources: [
      { label: "Enright PL, Sherrill DL. Am J Respir Crit Care Med 1998 (équations de référence)", pubmedId: "9817683", doi: "10.1164/ajrccm.158.5.9710086" },
    ],
  },
  {
    id: "spirometrie_gli",
    nom: "Spirométrie — valeurs de référence (GLI-2012)",
    categorie: "Respiratoire",
    valeurs: [
      { parametre: "Équations de référence", valeur: "Global Lung Initiative 2012 (âge 3–95 ans, multi-ethnique)", precision: "exprimer les résultats en z-scores / centiles, pas en simple % du prédit" },
      { parametre: "Limite inférieure de la normale (LLN)", valeur: "≈ 5e centile (z-score −1,64)" },
      { parametre: "Trouble obstructif", valeur: "VEMS/CVF < LLN", precision: "GOLD utilise le rapport fixe < 0,70 ; les équations GLI affinent selon l'âge" },
    ],
    populations: ["respiratoire", "geriatrie", "pediatrie"],
    sources: [
      { label: "Quanjer PH et al. Eur Respir J 2012 (GLI-2012)", pubmedId: "22743675", doi: "10.1183/09031936.00080312" },
    ],
  },
  {
    id: "functional_reach",
    nom: "Functional Reach Test (portée fonctionnelle)",
    categorie: "Équilibre",
    valeurs: [
      { parametre: "Principe", valeur: "Distance maximale d'atteinte antérieure bras tendu, en appui debout stable" },
      { parametre: "Seuil de risque de chute", valeur: "≈ ≤ 15-25 cm associé à un surrisque de chute chez la personne âgée", precision: "diminue avec l'âge ; à intégrer au contexte (Duncan 1990)" },
    ],
    populations: ["geriatrie", "neuro"],
    sources: [
      { label: "Duncan PW et al. J Gerontol 1990 (Functional Reach)", pubmedId: "2229941", doi: "10.1093/geronj/45.6.M192" },
    ],
  },
  {
    id: "appui_unipodal",
    nom: "Appui unipodal (single-leg stance) — valeurs normatives",
    categorie: "Équilibre",
    valeurs: [
      { parametre: "Principe", valeur: "Durée de maintien en appui unipodal, yeux ouverts (et yeux fermés)" },
      { parametre: "Normes par âge", valeur: "Décroissantes avec l'âge (ex. yeux ouverts ≈ 30 s jusqu'à 60 ans, puis baisse marquée)", precision: "se référer aux tables normatives par tranche d'âge (Springer 2007)" },
    ],
    populations: ["geriatrie", "neuro", "adulte_msk"],
    sources: [
      { label: "Springer BA et al. J Geriatr Phys Ther 2007 (normes appui unipodal)", pubmedId: "19839175", doi: "10.1519/00139143-200704000-00003" },
    ],
  },
  {
    id: "chair_stand_30s",
    nom: "Lever de chaise 30 secondes (30-s Chair Stand)",
    categorie: "Force",
    valeurs: [
      { parametre: "Principe", valeur: "Nombre de levers complets en 30 s, bras croisés" },
      { parametre: "Normes 60–94 ans", valeur: "Décroissantes avec l'âge (ex. ≈ 12–17 levers à 60–64 ans selon le sexe)", precision: "se référer aux tables normatives par tranche d'âge" },
    ],
    populations: ["geriatrie"],
    sources: [
      { label: "Jones CJ, Rikli RE, Beam WC. Res Q Exerc Sport 1999 (30-s chair stand, normes)", pubmedId: "10380242", doi: "10.1080/02701367.1999.10608028" },
    ],
  },
];

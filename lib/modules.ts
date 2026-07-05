/* =============================================================================
   REGISTRE DES MODULES DE LA PLATEFORME
   Source unique pour la navigation, l'accueil (springboard) et le hub Ressources.
   ============================================================================= */
import { REGIONS_MENU } from "@/data/regions";
import { PROTOCOLES } from "@/data/protocoles";
import { QUESTIONNAIRES } from "@/data/questionnaires";
import { bibliothequeTests } from "@/data/tests-cliniques";
import { DRAPEAUX } from "@/data/drapeaux";
import { NORMES } from "@/data/normes";
import { EXERCICES } from "@/data/exercices";
import { NGAP } from "@/data/ngap";
import { LEGAL } from "@/data/legal";
import { ANATOMIE } from "@/data/anatomie";
import { GLOSSAIRE } from "@/data/glossaire";

export interface ModuleInfo {
  id: string;
  nom: string;
  href: string;
  description: string;
  /** Glyphe simple (rendu dans la tuile façon icône d'app). */
  glyphe: string;
  /** Couleur d'accent de la tuile (dégradé duotone). */
  accent: string;
  /** Nombre d'entrées (indicatif). */
  count: number;
  /** Mis en avant dans la navigation principale. */
  principal?: boolean;
  categorie: "clinique" | "pratique";
}

const nbRegions = REGIONS_MENU.filter((m) => !m.aVenir).length;

export const MODULES: ModuleInfo[] = [
  {
    id: "bilan",
    nom: "Aide au bilan",
    href: "/outil",
    description: "Anamnèse adaptative, hypothèses par cohérence, tests et drapeaux rouges.",
    glyphe: "◎",
    accent: "#0E8C86",
    count: nbRegions,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "protocoles",
    nom: "Protocoles",
    href: "/protocoles",
    description: "Protocoles de rééducation publiés : phases, critères, dosage.",
    glyphe: "❯",
    accent: "#4F6DDE",
    count: PROTOCOLES.length,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "questionnaires",
    nom: "Questionnaires",
    href: "/questionnaires",
    description: "PROMs validés : scoring, MCID, statut copyright, sources.",
    glyphe: "▤",
    accent: "#7A5AF8",
    count: QUESTIONNAIRES.length,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "tests",
    nom: "Tests cliniques",
    href: "/tests",
    description: "Technique, sensibilité / spécificité, rule-in / rule-out.",
    glyphe: "✚",
    accent: "#2E8BD0",
    count: bibliothequeTests().length,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "drapeaux",
    nom: "Drapeaux rouges",
    href: "/drapeaux",
    description: "Signes d'alerte par région et population, conduite à tenir.",
    glyphe: "⚑",
    accent: "#D65745",
    count: DRAPEAUX.length,
    categorie: "clinique",
  },
  {
    id: "exercices",
    nom: "Exercices",
    href: "/exercices",
    description: "Exercices par région et phase, dosage sourcé quand publié.",
    glyphe: "▷",
    accent: "#2FA36B",
    count: EXERCICES.length,
    categorie: "clinique",
  },
  {
    id: "normes",
    nom: "Normes",
    href: "/normes",
    description: "Goniométrie, marche, équilibre, force : valeurs de référence.",
    glyphe: "±",
    accent: "#159AA8",
    count: NORMES.length,
    categorie: "clinique",
  },
  {
    id: "anatomie",
    nom: "Anatomie",
    href: "/anatomie",
    description: "Dermatomes, myotomes, réflexes : repères d'examen neuro.",
    glyphe: "⋔",
    accent: "#9B5DE5",
    count: ANATOMIE.length,
    categorie: "clinique",
  },
  {
    id: "ngap",
    nom: "Cotation NGAP",
    href: "/ngap",
    description: "Lettres-clés, actes, règles de cumul (France).",
    glyphe: "€",
    accent: "#C6892A",
    count: NGAP.length,
    categorie: "pratique",
  },
  {
    id: "legal",
    nom: "Cadre légal",
    href: "/legal",
    description: "Compétences, accès direct, déontologie, RGPD (France).",
    glyphe: "§",
    accent: "#5B6B7B",
    count: LEGAL.length,
    categorie: "pratique",
  },
  {
    id: "glossaire",
    nom: "Glossaire EBP",
    href: "/glossaire",
    description: "Se/Sp, LR, MCID, NNT… la lecture critique en clair.",
    glyphe: "∴",
    accent: "#C9508A",
    count: GLOSSAIRE.length,
    categorie: "pratique",
  },
];

export const MODULES_PRINCIPAUX = MODULES.filter((m) => m.principal);
export const MODULES_CLINIQUES = MODULES.filter((m) => m.categorie === "clinique");
export const MODULES_PRATIQUE = MODULES.filter((m) => m.categorie === "pratique");

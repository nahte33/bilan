/* =============================================================================
   REGISTRE DES MODULES DE LA PLATEFORME
   Source unique pour la navigation, l'accueil et le hub Ressources.
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
  /** Glyphe simple (pas d'icône lourde). */
  glyphe: string;
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
    description:
      "Anamnèse adaptative → hypothèses par cohérence → tests → drapeaux rouges.",
    glyphe: "◎",
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
    count: PROTOCOLES.length,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "questionnaires",
    nom: "Questionnaires",
    href: "/questionnaires",
    description: "PROMs et auto-questionnaires : scoring, MCID, copyright, sources.",
    glyphe: "▤",
    count: QUESTIONNAIRES.length,
    principal: true,
    categorie: "clinique",
  },
  {
    id: "tests",
    nom: "Tests cliniques",
    href: "/tests",
    description: "Bibliothèque de tests : technique, Se/Sp, rule-in / rule-out.",
    glyphe: "✚",
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
    count: DRAPEAUX.length,
    categorie: "clinique",
  },
  {
    id: "exercices",
    nom: "Exercices",
    href: "/exercices",
    description: "Exercices par région et phase, dosage sourcé quand publié.",
    glyphe: "▷",
    count: EXERCICES.length,
    categorie: "clinique",
  },
  {
    id: "normes",
    nom: "Normes & références",
    href: "/normes",
    description: "Goniométrie, marche, équilibre, force : valeurs de référence.",
    glyphe: "±",
    count: NORMES.length,
    categorie: "clinique",
  },
  {
    id: "anatomie",
    nom: "Anatomie",
    href: "/anatomie",
    description: "Dermatomes, myotomes, réflexes : repères d'examen neuro.",
    glyphe: "⋔",
    count: ANATOMIE.length,
    categorie: "clinique",
  },
  {
    id: "ngap",
    nom: "Cotation NGAP",
    href: "/ngap",
    description: "Lettres-clés, actes, règles de cumul (France).",
    glyphe: "€",
    count: NGAP.length,
    categorie: "pratique",
  },
  {
    id: "legal",
    nom: "Cadre légal",
    href: "/legal",
    description: "Compétences, accès direct, déontologie, RGPD (France).",
    glyphe: "§",
    count: LEGAL.length,
    categorie: "pratique",
  },
  {
    id: "glossaire",
    nom: "Glossaire EBP",
    href: "/glossaire",
    description: "Se/Sp, LR, MCID, NNT… la lecture critique en clair.",
    glyphe: "∴",
    count: GLOSSAIRE.length,
    categorie: "pratique",
  },
];

export const MODULES_PRINCIPAUX = MODULES.filter((m) => m.principal);
export const MODULES_CLINIQUES = MODULES.filter((m) => m.categorie === "clinique");
export const MODULES_PRATIQUE = MODULES.filter((m) => m.categorie === "pratique");

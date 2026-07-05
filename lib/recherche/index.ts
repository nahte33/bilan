/* =============================================================================
   INDEX DE RECHERCHE GLOBALE — agrège tous les modules en documents plats.
   Construit à partir des mêmes adaptateurs que les pages (cohérence garantie).
   ============================================================================= */
import {
  adaptAnatomie,
  adaptDrapeaux,
  adaptExercices,
  adaptGlossaire,
  adaptNormes,
  adaptProtocoles,
  adaptQuestionnaires,
  adaptTests,
} from "@/lib/contenu/adapters";
import { PROTOCOLES } from "@/data/protocoles";
import { QUESTIONNAIRES } from "@/data/questionnaires";
import { bibliothequeTests } from "@/data/tests-cliniques";
import { DRAPEAUX } from "@/data/drapeaux";
import { NORMES } from "@/data/normes";
import { EXERCICES } from "@/data/exercices";
import { ANATOMIE } from "@/data/anatomie";
import { GLOSSAIRE } from "@/data/glossaire";

export interface SearchDoc {
  id: string;
  titre: string;
  sousTitre?: string;
  type: string;
  href: string;
  recherche: string;
}

function collect(
  type: string,
  base: string,
  res: { entries: { id: string; titre: string; sousTitre?: string; recherche: string }[] },
): SearchDoc[] {
  return res.entries.map((e) => ({
    id: `${base}#${e.id}`,
    titre: e.titre,
    sousTitre: e.sousTitre,
    type,
    href: `${base}#${e.id}`,
    recherche: e.recherche,
  }));
}

export function buildIndex(): SearchDoc[] {
  return [
    ...collect("Protocole", "/protocoles", adaptProtocoles(PROTOCOLES)),
    ...collect("Questionnaire", "/questionnaires", adaptQuestionnaires(QUESTIONNAIRES)),
    ...collect("Test clinique", "/tests", adaptTests(bibliothequeTests())),
    ...collect("Drapeau rouge", "/drapeaux", adaptDrapeaux(DRAPEAUX)),
    ...collect("Norme", "/normes", adaptNormes(NORMES)),
    ...collect("Exercice", "/exercices", adaptExercices(EXERCICES)),
    ...collect("Anatomie", "/anatomie", adaptAnatomie(ANATOMIE)),
    ...collect("Glossaire", "/glossaire", adaptGlossaire(GLOSSAIRE)),
  ];
}

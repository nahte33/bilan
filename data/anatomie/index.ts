/* =============================================================================
   ANATOMIE DE RÉFÉRENCE — dermatomes, myotomes, réflexes
   Version : v0.1 — 2026-07-05.
   ⚠️ Les cartes de dermatomes varient selon les auteurs ; repères usuels
   d'examen neurologique, à confronter à un atlas de référence.
   ============================================================================= */
import type { EntreeAnatomie } from "@/lib/contenu/types";

const SRC_DERMATOME = {
  label:
    "Repères d'examen neurologique (dermatomes) — variabilité inter-auteurs connue",
};

export const ANATOMIE: EntreeAnatomie[] = [
  // --- Myotomes (membre supérieur) ---
  { id: "myo-c5", categorie: "myotome", niveau: "C5", description: "Abduction d'épaule (deltoïde), flexion de coude (biceps).", sources: [{ label: "Examen neurologique standard — myotomes MS" }] },
  { id: "myo-c6", categorie: "myotome", niveau: "C6", description: "Flexion de coude et extension du poignet.", sources: [{ label: "Examen neurologique standard — myotomes MS" }] },
  { id: "myo-c7", categorie: "myotome", niveau: "C7", description: "Extension de coude (triceps) et flexion du poignet.", sources: [{ label: "Examen neurologique standard — myotomes MS" }] },
  { id: "myo-c8", categorie: "myotome", niveau: "C8", description: "Extension des doigts, flexion des doigts.", sources: [{ label: "Examen neurologique standard — myotomes MS" }] },
  { id: "myo-t1", categorie: "myotome", niveau: "T1", description: "Abduction/adduction des doigts (interosseux).", sources: [{ label: "Examen neurologique standard — myotomes MS" }] },
  // --- Myotomes (membre inférieur) ---
  { id: "myo-l2", categorie: "myotome", niveau: "L2", description: "Flexion de hanche (psoas).", sources: [{ label: "Examen neurologique standard — myotomes MI" }] },
  { id: "myo-l3", categorie: "myotome", niveau: "L3", description: "Extension de genou (quadriceps).", sources: [{ label: "Examen neurologique standard — myotomes MI" }] },
  { id: "myo-l4", categorie: "myotome", niveau: "L4", description: "Dorsiflexion de cheville (tibial antérieur).", sources: [{ label: "Examen neurologique standard — myotomes MI" }] },
  { id: "myo-l5", categorie: "myotome", niveau: "L5", description: "Extension du gros orteil (long extenseur de l'hallux).", sources: [{ label: "Examen neurologique standard — myotomes MI" }] },
  { id: "myo-s1", categorie: "myotome", niveau: "S1", description: "Flexion plantaire de cheville, éversion.", sources: [{ label: "Examen neurologique standard — myotomes MI" }] },
  // --- Réflexes ostéotendineux ---
  { id: "ref-bicipital", categorie: "reflexe", niveau: "C5–C6", description: "Réflexe bicipital.", sources: [{ label: "Examen neurologique standard — ROT" }] },
  { id: "ref-stylo", categorie: "reflexe", niveau: "C6", description: "Réflexe styloradial (brachioradial).", sources: [{ label: "Examen neurologique standard — ROT" }] },
  { id: "ref-tricipital", categorie: "reflexe", niveau: "C7", description: "Réflexe tricipital.", sources: [{ label: "Examen neurologique standard — ROT" }] },
  { id: "ref-rotulien", categorie: "reflexe", niveau: "L3–L4", description: "Réflexe rotulien (patellaire).", sources: [{ label: "Examen neurologique standard — ROT" }] },
  { id: "ref-achilleen", categorie: "reflexe", niveau: "S1", description: "Réflexe achilléen.", sources: [{ label: "Examen neurologique standard — ROT" }] },
  // --- Dermatomes repères ---
  { id: "der-c6", categorie: "dermatome", niveau: "C6", description: "Pouce et bord radial de l'avant-bras.", sources: [SRC_DERMATOME], aValider: true },
  { id: "der-c7", categorie: "dermatome", niveau: "C7", description: "Majeur.", sources: [SRC_DERMATOME], aValider: true },
  { id: "der-c8", categorie: "dermatome", niveau: "C8", description: "Auriculaire et bord ulnaire.", sources: [SRC_DERMATOME], aValider: true },
  { id: "der-l4", categorie: "dermatome", niveau: "L4", description: "Face médiale de jambe et malléole interne.", sources: [SRC_DERMATOME], aValider: true },
  { id: "der-l5", categorie: "dermatome", niveau: "L5", description: "Dos du pied, gros orteil.", sources: [SRC_DERMATOME], aValider: true },
  { id: "der-s1", categorie: "dermatome", niveau: "S1", description: "Bord latéral du pied, talon.", sources: [SRC_DERMATOME], aValider: true },
];

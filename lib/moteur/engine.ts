/* =============================================================================
   MOTEUR — fonctions PURES, génériques (transposées du prototype)
   =============================================================================
   Aucune connaissance d'une région particulière, aucune dépendance à React,
   aucun effet de bord. Le classement vient de règles explicites (somme de
   poids), entièrement traçable jusqu'aux réponses de l'anamnèse.
   AUCUN LLM / API d'IA n'intervient ici.
   ============================================================================= */

import type {
  Bande,
  Bandes,
  Condition,
  DrapeauRouge,
  HypotheseClassee,
  Question,
  Region,
  ReponseValeur,
  Reponses,
  TestPropose,
} from "./types";

/** Index { id: Question } pour un accès rapide aux questions d'une région. */
export function indexerQuestions(
  questions: Question[],
): Record<string, Question> {
  const idx: Record<string, Question> = {};
  questions.forEach((q) => {
    idx[q.id] = q;
  });
  return idx;
}

/** Une valeur correspond-elle à l'attendu ? (gère bool, string, tableaux) */
export function matchVal(
  v: ReponseValeur | undefined,
  exp: ReponseValeur,
): boolean {
  if (v === undefined) return false;
  if (Array.isArray(exp)) return exp.some((e) => matchVal(v, e));
  if (Array.isArray(v)) return v.includes(exp as string);
  return v === exp;
}

/** Toutes les clés de la condition sont-elles satisfaites ? (ET logique) */
export function condOK(cond: Condition, rep: Reponses): boolean {
  return Object.entries(cond).every(([q, e]) => matchVal(rep[q], e));
}

/** Une question est-elle visible compte tenu des réponses courantes ? */
export function estVisible(q: Question, rep: Reponses): boolean {
  return !q.condition || condOK(q.condition, rep);
}

/** Libellé lisible d'une réponse (pour la transparence "pourquoi"). */
export function labelRep(
  qIndex: Record<string, Question>,
  qid: string,
  val: ReponseValeur,
): string {
  const q = qIndex[qid];
  if (!q) return qid;
  if (q.type === "oui_non") {
    return q.texte.replace(/\s*\?$/, "") + (val ? " : oui" : " : non");
  }
  const o = (q.options || []).find((o) => o.valeur === val);
  return o ? o.label : String(val);
}

/** Libellés lisibles de tous les signes d'une condition. */
export function signesCondition(
  qIndex: Record<string, Question>,
  si: Condition,
): string[] {
  const out: string[] = [];
  for (const [qid, exp] of Object.entries(si)) {
    (Array.isArray(exp) ? exp : [exp]).forEach((e) =>
      out.push(labelRep(qIndex, qid, e)),
    );
  }
  return out;
}

/** Bande qualitative pour un score donné (jamais une probabilité). */
export function bandePour(score: number, B: Bandes): Bande | null {
  if (score >= B.forte) return "forte";
  if (score >= B.moderee) return "moderee";
  if (score >= 1) return "faible";
  return null;
}

/** Classe les hypothèses par cohérence (somme de poids), du plus fort au plus faible. */
export function classement(region: Region, rep: Reponses): HypotheseClassee[] {
  const qIndex = indexerQuestions(region.QUESTIONS);
  return region.HYPOTHESES.map((h) => {
    let score = 0;
    const why: string[] = [];
    h.indices.forEach((i) => {
      if (condOK(i.si, rep)) {
        score += i.poids;
        why.push(...signesCondition(qIndex, i.si));
      }
    });
    const bande = bandePour(score, region.BANDES);
    return { ...h, score, why: [...new Set(why)], bande };
  })
    .filter((h): h is HypotheseClassee => h.bande !== null)
    .sort((a, b) => b.score - a.score);
}

/** Tests proposés pour départager les hypothèses retenues (+ dépistage éventuel). */
export function testsProposes(
  region: Region,
  rang: HypotheseClassee[],
  rep: Reponses,
): TestPropose[] {
  let retenues = rang
    .filter((h) => h.score >= region.BANDES.moderee)
    .map((h) => h.id);
  if (!retenues.length) retenues = rang.slice(0, 2).map((h) => h.id);
  const liste: TestPropose[] = region.TESTS.filter((t) =>
    t.discrimine.some((id) => retenues.includes(id)),
  );
  if (region.TEST_SCREEN && rep[region.TEST_SCREEN.siRep] === true) {
    liste.push({ ...region.TEST_SCREEN, discrimine: [], screen: true });
  }
  return liste;
}

/** Drapeaux rouges actifs (priment sur le classement). */
export function drapeauxActifs(region: Region, rep: Reponses): DrapeauRouge[] {
  return region.DRAPEAUX_ROUGES.filter((d) => condOK(d.si, rep));
}

/**
 * Met à jour les réponses après un clic sur une option, en reproduisant le
 * comportement du prototype : bascule (re-clic = désélection) puis nettoyage
 * des réponses devenues invisibles (une question masquée oublie sa réponse).
 */
export function toggleReponse(
  region: Region,
  rep: Reponses,
  q: Question,
  valeur: ReponseValeur,
): Reponses {
  const next: Reponses = { ...rep };
  if (q.type === "choix_multiple") {
    const arr = Array.isArray(next[q.id]) ? [...(next[q.id] as string[])] : [];
    const i = arr.indexOf(valeur as string);
    if (i >= 0) arr.splice(i, 1);
    else arr.push(valeur as string);
    next[q.id] = arr.length ? arr : undefined;
  } else if (q.type === "oui_non") {
    const bool = valeur === true;
    next[q.id] = next[q.id] === bool ? undefined : bool; // re-clic = désélection
  } else {
    next[q.id] = next[q.id] === valeur ? undefined : valeur;
  }
  // Nettoyage : si une question devient invisible, on oublie sa réponse.
  region.QUESTIONS.forEach((qq) => {
    if (qq.condition && !condOK(qq.condition, next)) delete next[qq.id];
  });
  return next;
}

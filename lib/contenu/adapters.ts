/* =============================================================================
   ADAPTATEURS — convertissent chaque type de contenu en FicheVM + facettes.
   ============================================================================= */
import type { Facette, FicheVM, LienSource } from "./vm";
import {
  POPULATIONS,
  REGIONS_CORPS,
  type DrapeauTransversal,
  type EntreeAnatomie,
  type Exercice,
  type FicheLegale,
  type FicheNGAP,
  type Norme,
  type Population,
  type Protocole,
  type Questionnaire,
  type RegionCorporelle,
  type Source,
  type StatutCopyright,
  type TermeGlossaire,
  type TestClinique,
} from "./types";

function src(sources: Source[]): LienSource[] {
  return sources.map((s) => {
    const parts = [s.label];
    if (s.doi) parts.push(`DOI ${s.doi}`);
    if (s.pubmedId) parts.push(`PMID ${s.pubmedId}`);
    if (s.verifie) parts.push(`vérifié ${s.verifie}`);
    return { label: parts.join(" · "), href: s.url ?? (s.doi ? `https://doi.org/${s.doi}` : undefined) };
  });
}

function popBadges(pops: Population[]) {
  return pops.map((p) => ({ label: POPULATIONS[p], tone: "grey" as const }));
}
function regBadges(regs: RegionCorporelle[]) {
  return regs.map((r) => ({ label: REGIONS_CORPS[r], tone: "teal" as const }));
}

function facettesRegions(regs: Set<RegionCorporelle>): Facette[] {
  return [...regs].map((r) => ({ id: `region:${r}`, label: REGIONS_CORPS[r] }));
}
function facettesPopulations(pops: Set<Population>): Facette[] {
  return [...pops].map((p) => ({ id: `pop:${p}`, label: POPULATIONS[p] }));
}

// --------------------------------------------------------------------------
export function adaptQuestionnaires(items: Questionnaire[]): { entries: FicheVM[]; facettes: Facette[] } {
  const regs = new Set<RegionCorporelle>();
  const pops = new Set<Population>();
  const copyLabel: Record<StatutCopyright, { label: string; tone: "teal" | "red" | "brass" }> = {
    libre: { label: "libre de droits", tone: "teal" },
    protege: { label: "protégé (licence)", tone: "red" },
    a_verifier: { label: "droits à vérifier", tone: "brass" },
  };
  const entries = items.map((q): FicheVM => {
    q.regions?.forEach((r) => regs.add(r));
    q.populations.forEach((p) => pops.add(p));
    const meta: { k: string; v: string }[] = [
      { k: "Indication", v: q.indication },
      { k: "Structure", v: q.structure },
      { k: "Scoring", v: q.scoring },
      { k: "Interprétation", v: q.interpretation },
    ];
    if (q.mcid) meta.push({ k: "MCID", v: q.mcid });
    if (q.mdc) meta.push({ k: "MDC", v: q.mdc });
    if (q.tempsPassation) meta.push({ k: "Passation", v: q.tempsPassation });
    if (q.acces) meta.push({ k: "Accès", v: q.acces });
    return {
      id: q.id,
      titre: q.nom,
      sousTitre: [q.acronyme, q.domaine].filter(Boolean).join(" · "),
      badges: [{ ...copyLabel[q.copyright] }, ...popBadges(q.populations)],
      meta,
      sources: src(q.sources),
      aValider: q.aValider,
      facetIds: [
        ...(q.regions ?? []).map((r) => `region:${r}`),
        ...q.populations.map((p) => `pop:${p}`),
      ],
      recherche: [q.nom, q.acronyme, q.domaine, q.indication].filter(Boolean).join(" "),
    };
  });
  return { entries, facettes: [...facettesPopulations(pops), ...facettesRegions(regs)] };
}

// --------------------------------------------------------------------------
export function adaptProtocoles(items: Protocole[]): { entries: FicheVM[]; facettes: Facette[] } {
  const regs = new Set<RegionCorporelle>();
  const entries = items.map((p): FicheVM => {
    p.regions.forEach((r) => regs.add(r));
    const blocs = p.phases.map((ph) => ({
      titre: [ph.nom, ph.duree].filter(Boolean).join(" · "),
      items: [
        `Objectifs : ${ph.objectifs.join(", ")}`,
        ...ph.contenu,
        ...(ph.criteresProgression ? [`Progression : ${ph.criteresProgression.join(" ; ")}`] : []),
      ],
    }));
    if (p.precautions?.length) blocs.push({ titre: "Précautions", items: p.precautions });
    return {
      id: p.id,
      titre: p.nom,
      sousTitre: p.pathologie,
      badges: [...regBadges(p.regions), ...popBadges(p.populations)],
      texte: p.resume,
      blocs,
      sources: src(p.sources),
      aValider: p.aValider,
      facetIds: p.regions.map((r) => `region:${r}`),
      recherche: [p.nom, p.pathologie, p.resume].join(" "),
    };
  });
  return { entries, facettes: facettesRegions(regs) };
}

// --------------------------------------------------------------------------
export function adaptTests(items: TestClinique[]): { entries: FicheVM[]; facettes: Facette[] } {
  const regs = new Set<RegionCorporelle>();
  const entries = items.map((t): FicheVM => {
    t.regions.forEach((r) => regs.add(r));
    const meta: { k: string; v: string }[] = [];
    if (t.technique) meta.push({ k: "Technique", v: t.technique });
    if (t.precision) meta.push({ k: "Valeur diagnostique", v: t.precision });
    return {
      id: t.id,
      titre: t.nom,
      sousTitre: t.cible,
      badges: regBadges(t.regions),
      meta,
      sources: src(t.sources),
      aValider: t.aValider,
      facetIds: t.regions.map((r) => `region:${r}`),
      recherche: [t.nom, t.cible, t.technique, t.precision].filter(Boolean).join(" "),
    };
  });
  return { entries, facettes: facettesRegions(regs) };
}

// --------------------------------------------------------------------------
export function adaptDrapeaux(items: DrapeauTransversal[]): { entries: FicheVM[]; facettes: Facette[] } {
  const pops = new Set<Population>();
  const entries = items.map((d): FicheVM => {
    d.populations.forEach((p) => pops.add(p));
    return {
      id: d.id,
      titre: d.libelle,
      badges: [...regBadges(d.regions), ...popBadges(d.populations)],
      blocs: [{ titre: "Signes d'alerte", items: d.signes }],
      alerte: `Conduite : ${d.conduite}`,
      sources: src(d.sources),
      facetIds: d.populations.map((p) => `pop:${p}`),
      recherche: [d.libelle, ...d.signes, d.conduite].join(" "),
    };
  });
  return { entries, facettes: facettesPopulations(pops) };
}

// --------------------------------------------------------------------------
export function adaptNormes(items: Norme[]): { entries: FicheVM[]; facettes: Facette[] } {
  const entries = items.map((n): FicheVM => ({
    id: n.id,
    titre: n.nom,
    sousTitre: n.categorie,
    meta: n.valeurs.map((v) => ({ k: v.parametre, v: v.precision ? `${v.valeur} (${v.precision})` : v.valeur })),
    sources: src(n.sources),
    aValider: n.aValider,
    facetIds: [`cat:${n.categorie}`],
    recherche: [n.nom, n.categorie, ...n.valeurs.map((v) => v.parametre + " " + v.valeur)].join(" "),
  }));
  const cats = [...new Set(items.map((n) => n.categorie))];
  return { entries, facettes: cats.map((c) => ({ id: `cat:${c}`, label: c })) };
}

// --------------------------------------------------------------------------
export function adaptExercices(items: Exercice[]): { entries: FicheVM[]; facettes: Facette[] } {
  const regs = new Set<RegionCorporelle>();
  const entries = items.map((x): FicheVM => {
    x.regions.forEach((r) => regs.add(r));
    const meta: { k: string; v: string }[] = [];
    if (x.dosage) meta.push({ k: "Dosage", v: x.dosage });
    if (x.progression) meta.push({ k: "Progression", v: x.progression });
    if (x.regression) meta.push({ k: "Régression", v: x.regression });
    return {
      id: x.id,
      titre: x.nom,
      sousTitre: x.objectif,
      badges: [...regBadges(x.regions), ...(x.phases ?? []).map((p) => ({ label: p, tone: "brass" as const }))],
      texte: x.description,
      meta,
      sources: src(x.sources),
      aValider: x.aValider,
      facetIds: x.regions.map((r) => `region:${r}`),
      recherche: [x.nom, x.objectif, x.description].join(" "),
    };
  });
  return { entries, facettes: facettesRegions(regs) };
}

// --------------------------------------------------------------------------
export function adaptNGAP(items: FicheNGAP[]): { entries: FicheVM[] } {
  return {
    entries: items.map((f): FicheVM => ({
      id: f.id,
      titre: f.acte,
      sousTitre: f.lettreCle,
      meta: f.coefficient ? [{ k: "Coefficient", v: f.coefficient }] : undefined,
      blocs: [{ titre: "Règles", items: f.regles }],
      sources: src(f.sources),
      recherche: [f.acte, f.lettreCle, ...f.regles].join(" "),
    })),
  };
}

// --------------------------------------------------------------------------
export function adaptLegal(items: FicheLegale[]): { entries: FicheVM[]; facettes: Facette[] } {
  const entries = items.map((f): FicheVM => ({
    id: f.id,
    titre: f.titre,
    sousTitre: f.categorie,
    blocs: [{ items: f.points }],
    sources: src(f.sources),
    facetIds: [`cat:${f.categorie}`],
    recherche: [f.titre, f.categorie, ...f.points].join(" "),
  }));
  const cats = [...new Set(items.map((f) => f.categorie))];
  return { entries, facettes: cats.map((c) => ({ id: `cat:${c}`, label: c })) };
}

// --------------------------------------------------------------------------
export function adaptAnatomie(items: EntreeAnatomie[]): { entries: FicheVM[]; facettes: Facette[] } {
  const labels: Record<EntreeAnatomie["categorie"], string> = {
    dermatome: "Dermatome",
    myotome: "Myotome",
    reflexe: "Réflexe",
    innervation: "Innervation",
    repere: "Repère",
  };
  const entries = items.map((a): FicheVM => ({
    id: a.id,
    titre: `${a.niveau} — ${labels[a.categorie]}`,
    texte: a.description,
    sources: src(a.sources),
    aValider: a.aValider,
    facetIds: [`cat:${a.categorie}`],
    recherche: [a.niveau, labels[a.categorie], a.description].join(" "),
  }));
  const cats = [...new Set(items.map((a) => a.categorie))];
  return { entries, facettes: cats.map((c) => ({ id: `cat:${c}`, label: labels[c] })) };
}

// --------------------------------------------------------------------------
export function adaptGlossaire(items: TermeGlossaire[]): { entries: FicheVM[] } {
  return {
    entries: items.map((t): FicheVM => {
      const meta: { k: string; v: string }[] = [];
      if (t.formule) meta.push({ k: "Formule", v: t.formule });
      if (t.exemple) meta.push({ k: "Repère", v: t.exemple });
      return {
        id: t.id,
        titre: t.sigle ? `${t.terme} (${t.sigle})` : t.terme,
        texte: t.definition,
        meta: meta.length ? meta : undefined,
        recherche: [t.terme, t.sigle, t.definition].filter(Boolean).join(" "),
      };
    }),
  };
}

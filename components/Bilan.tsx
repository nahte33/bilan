"use client";

import type { Region, Reponses } from "@/lib/moteur/types";
import { classement, drapeauxActifs, testsProposes } from "@/lib/moteur/engine";

interface BilanProps {
  region: Region;
  rep: Reponses;
}

export default function Bilan({ region, rep }: BilanProps) {
  const aRepondu = Object.keys(rep).length > 0;

  return (
    <section className="panel bilan">
      <div className="panel-h">
        <h2>Bilan orienté</h2>
      </div>
      <div className="panel-body">
        {!aRepondu ? (
          <div className="empty">
            Réponds aux questions à gauche : le bilan se construit en direct.
          </div>
        ) : (
          <Resultats region={region} rep={rep} />
        )}
      </div>
    </section>
  );
}

function Resultats({ region, rep }: BilanProps) {
  const flags = drapeauxActifs(region, rep);
  const rang = classement(region, rep);
  const tests = testsProposes(region, rang, rep);

  return (
    <>
      {/* Drapeaux rouges : toujours en tête, visuellement distincts. */}
      {flags.map((f) => (
        <div className="flag" key={f.id}>
          <div className="t">{f.libelle}</div>
          <div className="c">{f.conduite}</div>
        </div>
      ))}

      <div className="block-lbl">Hypothèses, par cohérence</div>
      {rang.length === 0 ? (
        <div className="empty" style={{ padding: "12px 0" }}>
          Pas encore assez d'éléments.
        </div>
      ) : (
        rang.map((h) => (
          <div className="hyp" key={h.id}>
            <div className="hyp-top">
              <span className={`band b-${h.bande}`}>{h.bande}</span>
              <div>
                <div className="hyp-nom">{h.nom}</div>
                <div className="hyp-quad">
                  {h.quadrant} · score {h.score}
                </div>
              </div>
            </div>
            {h.why.length > 0 && (
              <div className="why">
                {h.why.map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              </div>
            )}
          </div>
        ))
      )}

      {tests.length > 0 && (
        <>
          <div className="block-lbl">Tests à réaliser pour départager</div>
          {tests.map((t) => (
            <div className={`test${t.screen ? " screen" : ""}`} key={t.id}>
              <div className="test-nom">{t.nom}</div>
              {t.precision && <div className="test-meta">{t.precision}</div>}
            </div>
          ))}
        </>
      )}
    </>
  );
}

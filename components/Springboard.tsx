import Link from "next/link";
import type { ModuleInfo } from "@/lib/modules";

/** Planche d'« app-icons » : une tuile arrondie par module. */
export default function Springboard({ modules }: { modules: ModuleInfo[] }) {
  return (
    <div className="springboard">
      {modules.map((m, i) => (
        <Link
          key={m.id}
          href={m.href}
          className="app-card"
          style={{ ["--accent" as string]: m.accent, ["--i" as string]: i }}
        >
          <span className="app-tile" aria-hidden="true">
            {m.glyphe}
          </span>
          <span className="app-body">
            <span className="app-name">
              {m.nom}
              <span className="app-count">{m.count}</span>
            </span>
            <span className="app-desc">{m.description}</span>
          </span>
          <span className="app-chev" aria-hidden="true">›</span>
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";
import type { ModuleInfo } from "@/lib/modules";

export default function ModulesGrid({ modules }: { modules: ModuleInfo[] }) {
  return (
    <div className="modules-grid">
      {modules.map((m) => (
        <Link key={m.id} href={m.href} className="module-card">
          <span className="g" aria-hidden="true">{m.glyphe}</span>
          <span>
            <h3>
              {m.nom} <span className="n">{m.count}</span>
            </h3>
            <p>{m.description}</p>
          </span>
        </Link>
      ))}
    </div>
  );
}

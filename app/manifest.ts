import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kiné Ressources — base de référence pour kinésithérapeutes",
    short_name: "Kiné Ressources",
    description:
      "Aide au bilan, protocoles, questionnaires, tests cliniques, drapeaux rouges et repères de pratique. Sourcé, déterministe, sans donnée patient.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9FA",
    theme_color: "#0A2624",
    lang: "fr",
    orientation: "portrait-primary",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}

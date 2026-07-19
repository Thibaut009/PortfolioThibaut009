import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thibaut Gabet — Développeur Full Stack",
    short_name: "Thibaut Gabet",
    description:
      "Portfolio de Thibaut Gabet, développeur Full Stack spécialisé Angular, Spring Boot, PostgreSQL et React/Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070c",
    theme_color: "#07070c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = ["Tous", "Angular", "Frontend", "Backend", "Full Stack"];

const PROJECTS = [
  {
    title: "SaaS Dashboard",
    description: "Dashboard analytics moderne pour une gestion complète des données clients.",
    tags: ["Angular", "TypeScript", "Chart.js"],
    angular: true,
    thumb: "bars" as const,
  },
  {
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement et dashboard admin.",
    tags: ["Angular", "NgRx", "Spring Boot"],
    angular: true,
    thumb: "cards" as const,
  },
  {
    title: "Portfolio Template",
    description: "Template de portfolio moderne et entièrement personnalisable.",
    tags: ["Next.js", "Framer Motion"],
    angular: false,
    thumb: "avatar" as const,
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches façon Kanban avec drag & drop en temps réel.",
    tags: ["Angular", "Node.js", "Socket.io"],
    angular: true,
    thumb: "kanban" as const,
  },
  {
    title: "Real-time Chat App",
    description: "Messagerie instantanée avec salons, notifications et statuts de présence.",
    tags: ["React", "Node.js", "WebSocket"],
    angular: false,
    thumb: "lines" as const,
  },
  {
    title: "Landing Page",
    description: "Page d'atterrissage produit, optimisée conversion et performance.",
    tags: ["Angular", "Tailwind"],
    angular: false,
    thumb: "soon" as const,
  },
];

function ProjectThumb({ project }: { project: (typeof PROJECTS)[number] }) {
  switch (project.thumb) {
    case "bars":
      return (
        <div className="proj-thumb">
          <span className="proj-badge">◈ Angular</span>
          <div className="mini-bars">
            <i style={{ height: "60%" }} />
            <i style={{ height: "85%" }} />
            <i style={{ height: "40%" }} />
            <i style={{ height: "70%" }} />
            <i style={{ height: "55%" }} />
          </div>
        </div>
      );
    case "cards":
      return (
        <div
          className="proj-thumb"
          style={{
            background:
              "linear-gradient(150deg, rgba(221,0,49,.15), rgba(139,92,246,.12))",
          }}
        >
          <span className="proj-badge">◈ Angular</span>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 34,
                height: 44,
                background: "rgba(255,255,255,.06)",
                borderRadius: 6,
              }}
            />
            <div
              style={{
                width: 34,
                height: 44,
                background: "rgba(255,255,255,.06)",
                borderRadius: 6,
              }}
            />
            <div
              style={{
                width: 34,
                height: 44,
                background: "rgba(255,255,255,.06)",
                borderRadius: 6,
              }}
            />
          </div>
        </div>
      );
    case "avatar":
      return (
        <div className="proj-thumb">
          <Image
            src="/avatar-character.png"
            alt="avatar"
            width={327}
            height={772}
            style={{
              width: 56,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 14px rgba(0,0,0,.5))",
            }}
          />
        </div>
      );
    case "kanban":
      return (
        <div className="proj-thumb">
          <span className="proj-badge">◈ Angular</span>
          <div
            style={{
              width: "70%",
              height: "60%",
              border: "1px dashed rgba(139,92,246,.4)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-dimmer)",
              fontSize: ".7rem",
            }}
          >
            Board Kanban
          </div>
        </div>
      );
    case "lines":
      return (
        <div className="proj-thumb">
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "70%" }}>
            <div
              style={{
                height: 8,
                borderRadius: 4,
                background: "rgba(59,130,246,.4)",
                width: "80%",
              }}
            />
            <div
              style={{
                height: 8,
                borderRadius: 4,
                background: "rgba(139,92,246,.4)",
                width: "60%",
              }}
            />
            <div
              style={{
                height: 8,
                borderRadius: 4,
                background: "rgba(59,130,246,.4)",
                width: "90%",
              }}
            />
          </div>
        </div>
      );
    case "soon":
      return (
        <div className="proj-thumb" style={{ opacity: 0.55 }}>
          <span
            className="proj-badge"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
          >
            Bientôt
          </span>
        </div>
      );
  }
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-tag">Portfolio</div>
        <h2 className="section-title">
          Mes <span className="grad">projets</span>
        </h2>
        <p className="section-sub">
          Une sélection de projets récents, la majorité construits avec Angular pour le
          frontend et un backend Java / Node selon le contexte client.
        </p>

        <div className="filter-row">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-pill${filter === "Angular" ? " angular-pill" : ""}${
                activeFilter === filter ? " active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {PROJECTS.map((project) => (
            <div className="proj-card" key={project.title}>
              <ProjectThumb project={project} />
              <div className="proj-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="proj-links">
                  <a className="primary" href="#">
                    Live Demo
                  </a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 36,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: ".88rem" }}>
            Vous avez un projet en tête ?
            <br />
            Je suis toujours partant à discuter d&apos;idées.
          </p>
          <a className="btn-primary" href="#contact">
            Me contacter →
          </a>
        </div>
      </div>
    </section>
  );
}

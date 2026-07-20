import type { Metadata } from "next";
import Link from "next/link";
import content from "../../data/content.json";
import details from "../../data/projects/keychat.json";
import ProjectThumb from "../../components/ProjectThumb";
import TechIcon from "../../components/TechIcon";

const project = content.projects.items.find((item) => item.slug === "keychat")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function KeychatPage() {
  return (
    <>
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <p>{details.context}</p>
      </div>

      <div className="project-detail-thumb">
        <ProjectThumb project={project} />
      </div>

      <div className="project-detail-section">
        <h3>{details.featuresLabel}</h3>
        <ul>
          {details.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-detail-section">
        <h3>{details.notificationsLabel}</h3>
        <p style={{ color: "var(--text-dim)", fontSize: ".92rem", lineHeight: 1.6, marginBottom: 18 }}>
          {details.notificationsIntro}
        </p>
        <ul>
          {details.notificationsDetails.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="project-detail-section">
        <h3>{details.stackLabel}</h3>
        <dl className="project-detail-stack-explained">
          {details.stack.map((tech) => (
            <div key={tech.name}>
              <div className="ic">
                <TechIcon name={tech.icon} size={28} />
              </div>
              <div>
                <dt>{tech.name}</dt>
                <dd>{tech.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="project-detail-actions">
        <a className="btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          {project.demoLabel}
        </a>
        <Link className="back-link" href="/#projects">
          ← Retour aux projets
        </Link>
      </div>
    </>
  );
}

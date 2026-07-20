import type { Metadata } from "next";
import Link from "next/link";
import content from "../../data/content.json";
import details from "../../data/projects/wingflow.json";
import ProjectThumb from "../../components/ProjectThumb";

const project = content.projects.items.find((item) => item.slug === "wingflow")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function WingflowPage() {
  return (
    <>
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
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
        <h3>Stack technique</h3>
        <div className="project-detail-stack proj-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
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

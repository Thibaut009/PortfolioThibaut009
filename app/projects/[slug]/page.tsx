import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import content from "../../data/content.json";
import projectDetails from "../../data/projectDetails.json";
import StarField from "../../components/StarField";
import ProjectThumb from "../../components/ProjectThumb";
import Footer from "../../components/Footer";

const { projects, nav } = content;
const { featuresLabel, stackLabel, backLabel, items: detailsBySlug } = projectDetails;

function getProject(slug: string) {
  return projects.items.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return projects.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = (detailsBySlug as Record<string, { features: string[] }>)[slug];

  return (
    <>
      <div className="bg-fx" />
      <div className="grid-fx" />
      <StarField />

      <div className="project-detail-bar">
        <div className="wrap">
          <div className="logo">
            {nav.logoText}
            <span>.</span>
          </div>
          <Link className="back-link" href="/#projects">
            {backLabel}
          </Link>
        </div>
      </div>

      <section className="project-detail">
        <div className="wrap">
          <div className="project-detail-header">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>

          <div className="project-detail-thumb">
            <ProjectThumb project={project} />
          </div>

          <div className="project-detail-section">
            <h3>{featuresLabel}</h3>
            <ul>
              {details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail-section">
            <h3>{stackLabel}</h3>
            <div className="project-detail-stack proj-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-actions">
            <a
              className="btn-primary"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.demoLabel}
            </a>
            <Link className="back-link" href="/#projects">
              {backLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Link from "next/link";
import content from "../data/content.json";
import StarField from "../components/StarField";
import Footer from "../components/Footer";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-fx" />
      <div className="grid-fx" />
      <StarField />

      <div className="project-detail-bar">
        <div className="wrap">
          <div className="logo">
            {content.nav.logoText}
            <span>.</span>
          </div>
          <Link className="back-link" href="/#projects">
            ← Retour aux projets
          </Link>
        </div>
      </div>

      <section className="project-detail">
        <div className="wrap">{children}</div>
      </section>

      <Footer />
    </>
  );
}

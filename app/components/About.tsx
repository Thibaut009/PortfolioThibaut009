import Image from "next/image";
import AngularShield from "./AngularShield";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-portrait">
            <Image
              className="char-img"
              src="/avatar-character.png"
              alt="Thibaut - avatar 3D développeur"
              width={327}
              height={772}
              style={{
                width: "45%",
                height: "auto",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,.6))",
              }}
            />
            <AngularShield size={78} iconSize={42} />
          </div>

          <div>
            <div className="section-tag">À propos de moi</div>
            <h2 className="section-title">
              Passionné par le code
              <br />
              et les <span className="grad">bonnes expériences</span>
            </h2>
            <p className="section-sub">
              Développeur Full Stack basé en France, j&apos;aide les entreprises et les
              startups à créer des applications web modernes, performantes et centrées sur
              l&apos;utilisateur — avec Angular comme spécialité de prédilection côté
              frontend.
            </p>

            <div className="info-list">
              <div className="info-row">
                <b>Nom</b>
                <span>Thibaut</span>
              </div>
              <div className="info-row">
                <b>Email</b>
                <span>alex.dev@exemple.com</span>
              </div>
              <div className="info-row">
                <b>Localisation</b>
                <span>France</span>
              </div>
              <div className="info-row">
                <b>Disponibilité</b>
                <span>Disponible pour travailler</span>
              </div>
            </div>

            <a className="btn-primary" href="#contact">
              Me contacter →
            </a>

            <div className="stat-row">
              <div className="stat-card">
                <div className="num">25+</div>
                <div className="lbl">Projets réalisés</div>
              </div>
              <div className="stat-card">
                <div className="num">3+</div>
                <div className="lbl">Années d&apos;expérience</div>
              </div>
              <div className="stat-card">
                <div className="num">15+</div>
                <div className="lbl">Clients satisfaits</div>
              </div>
              <div className="stat-card">
                <div className="num">100%</div>
                <div className="lbl">Passionné</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import StarField from "./components/StarField";
import ProjectsSection from "./components/ProjectsSection";

const AngularShield = ({ size = 64, iconSize = 36 }: { size?: number; iconSize?: number }) => (
  <div className="angular-shield" style={{ width: size, height: size }}>
    <svg viewBox="0 0 250 250" width={iconSize} height={iconSize}>
      <path
        d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z"
        fill="#dd0031"
      />
      <path
        d="M125 30 L204 190 H172 L155 150 H94 L77 190 H45 Z M125 65 L104 120 H146 Z"
        fill="#fff"
      />
    </svg>
  </div>
);

export default function Home() {
  return (
    <>
      <div className="bg-fx" />
      <div className="grid-fx" />
      <StarField />

      <Header />

      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="badge-avail">
                <i className="dot-live" /> Disponible pour travailler
              </div>
              <h1>
                Salut 👋
                <br />
                Je suis <span className="grad">Thibaut</span>
              </h1>
              <p className="role">Full Stack Developer</p>
              <p className="desc">
                Je conçois et développe des applications web modernes, performantes et
                scalables avec des expériences utilisateur exceptionnelles —{" "}
                <b style={{ color: "#ff6b8a" }}>Angular</b> en fer de lance côté frontend.
              </p>

              <div className="chip-row">
                <div className="chip angular-chip">
                  <i style={{ background: "#dd0031" }} /> Angular
                </div>
                <div className="chip">
                  <i style={{ background: "#3178c6" }} /> TypeScript
                </div>
                <div className="chip">
                  <i style={{ background: "#68a063" }} /> Node.js
                </div>
                <div className="chip">
                  <i style={{ background: "#4169e1" }} /> PostgreSQL
                </div>
                <div className="chip">
                  <i style={{ background: "#f97316" }} /> Spring Boot
                </div>
              </div>

              <div className="cta-row">
                <a className="btn-primary" href="#projects">
                  Voir mes projets →
                </a>
                <a className="btn-ghost" href="#contact">
                  Me contacter
                </a>
              </div>

              <div
                style={{
                  fontSize: ".68rem",
                  letterSpacing: "1.5px",
                  color: "var(--text-dimmer)",
                  marginBottom: 12,
                }}
              >
                SUIVEZ-MOI
              </div>
              <div className="socials">
                <a href="#" title="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.1.83-.27.83-.58v-2.17c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.82 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.22.69.83.57A12 12 0 0 0 12 .3z" />
                  </svg>
                </a>
                <a href="#" title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                  </svg>
                </a>
                <a href="#" title="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 4.9a9.3 9.3 0 0 1-2.66.73A4.63 4.63 0 0 0 22.4 3.2a9.3 9.3 0 0 1-2.94 1.12 4.6 4.6 0 0 0-7.94 4.2A13.06 13.06 0 0 1 1.67 3.9a4.6 4.6 0 0 0 1.42 6.14A4.55 4.55 0 0 1 1 9.5v.06a4.6 4.6 0 0 0 3.69 4.51 4.6 4.6 0 0 1-2.07.08 4.6 4.6 0 0 0 4.3 3.2A9.24 9.24 0 0 1 0 19.55a13.02 13.02 0 0 0 7.05 2.07c8.46 0 13.09-7.01 13.09-13.09 0-.2 0-.4-.01-.6A9.35 9.35 0 0 0 23 4.9z" />
                  </svg>
                </a>
                <a href="#" title="Email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 5h20v14H2V5zm2 2v.01L12 13l8-5.99V7H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 9.24V17h16V9.24z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* avatar composition */}
            <div className="hero-visual">
              <div className="orbit-ring r1">
                <div className="orbit-dot" />
              </div>
              <div className="orbit-ring r2" />

              <div className="term-float">
                <div>
                  <span className="dim">$</span> npm run dev
                </div>
                <div style={{ color: "#9ae6b4" }}>✓ ready in 2.2s</div>
              </div>

              <div className="float-code">
                <div className="ln" />
                <div className="ln" />
                <div className="ln" />
                <div className="ln" />
              </div>

              <div className="avatar-card">
                <div className="avatar-figure">
                  <Image
                    className="char-img"
                    src="/avatar-character.png"
                    alt="Thibaut - avatar 3D développeur"
                    width={327}
                    height={772}
                    priority
                  />
                  <div className="avatar-code">&lt;/&gt; developer</div>
                </div>
                <AngularShield />
              </div>
              <div className="avatar-podium" />
              <div className="angular-shield-label">◈ Angular first</div>
            </div>
          </div>

          {/* stack strip */}
          <div className="stack-strip">
            <div className="label">STACK TECH</div>
            <div className="stack-icons">
              <div className="stack-icon featured">
                <div className="ic">
                  <svg viewBox="0 0 250 250" width="30" height="30">
                    <path
                      d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z"
                      fill="#dd0031"
                    />
                    <path
                      d="M125 30 L204 190 H172 L155 150 H94 L77 190 H45 Z M125 65 L104 120 H146 Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <span>Angular</span>
              </div>
              <div className="stack-icon">
                <div className="ic">☕</div>
                <span>Spring Boot</span>
              </div>
              <div className="stack-icon">
                <div className="ic">🐘</div>
                <span>PostgreSQL</span>
              </div>
              <div className="stack-icon">
                <div className="ic">▲</div>
                <span>Next.js</span>
              </div>
              <div className="stack-icon">
                <div className="ic">TS</div>
                <span>TypeScript</span>
              </div>
              <div className="stack-icon">
                <div className="ic">⬢</div>
                <span>Node.js</span>
              </div>
              <div className="stack-icon">
                <div className="ic">🐳</div>
                <span>Docker</span>
              </div>
              <div className="stack-icon">
                <div className="ic">☁️</div>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
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

      {/* ================= PROJECTS ================= */}
      <ProjectsSection />

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <div className="wrap">
          <div className="section-tag">Savoir-faire</div>
          <h2 className="section-title">
            Mes <span className="grad">compétences</span>
          </h2>
          <p className="section-sub">
            Technologies frontend, backend et outils que j&apos;utilise au quotidien — avec
            Angular comme socle principal de mes développements.
          </p>

          <div className="skills-grid">
            <div className="skill-block">
              <h4>Compétences techniques</h4>

              {[
                { name: "◈ Angular", pct: 95, angular: true },
                { name: "React / Next.js", pct: 85 },
                { name: "TypeScript", pct: 90 },
                { name: "Tailwind CSS", pct: 88 },
                { name: "Node.js", pct: 82 },
                { name: "Spring Boot", pct: 78 },
                { name: "Base de données", pct: 80 },
                { name: "Outils & DevOps", pct: 75 },
              ].map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="top">
                    <b>{skill.name}</b>
                    <span>{skill.pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className={`bar-fill${skill.angular ? " angular" : ""}`}
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-dim)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Autres compétences
              </h4>
              <div className="softskill-list">
                {[
                  { name: "UI/UX Design", filled: 3 },
                  { name: "Responsive Design", filled: 4 },
                  { name: "Performance", filled: 4 },
                  { name: "SEO", filled: 3 },
                  { name: "Agile / Scrum", filled: 4 },
                  { name: "Communication", filled: 5 },
                ].map((soft) => (
                  <div className="softskill-row" key={soft.name}>
                    {soft.name}
                    <span className="stars-ic">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className={i >= soft.filled ? "off" : ""} />
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              <h4
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-dim)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Langues
              </h4>
              <div className="softskill-list" style={{ marginBottom: 30 }}>
                <div className="softskill-row">
                  Français <span style={{ color: "var(--text)" }}>Natif</span>
                </div>
                <div className="softskill-row">
                  Anglais <span>Courant</span>
                </div>
                <div className="softskill-row">
                  Espagnol <span>Intermédiaire</span>
                </div>
              </div>

              <h4
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-dim)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Outils & utilitaires
              </h4>
              <div className="tools-row">
                <div className="tool-pill">🖥 VS Code</div>
                <div className="tool-pill">🎨 Figma</div>
                <div className="tool-pill">📮 Postman</div>
                <div className="tool-pill">🐳 Docker</div>
                <div className="tool-pill">🐙 GitHub</div>
                <div className="tool-pill">▲ Vercel</div>
                <div className="tool-pill">☁️ AWS</div>
                <div className="tool-pill">📓 Notion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience">
        <div className="wrap">
          <div className="section-tag">Parcours</div>
          <h2 className="section-title">
            Mon <span className="grad">expérience</span>
          </h2>
          <p className="section-sub">
            Un parcours orienté frontend Angular, du développement junior à des missions full
            stack en agence et en startup.
          </p>

          <div className="exp-grid">
            <div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="date">2023 — Présent</div>
                  <h4>Développeur Full Stack Freelance</h4>
                  <div className="co">En indépendant</div>
                  <p>
                    Développement d&apos;applications Angular / Spring Boot pour des clients
                    variés, de la conception à la mise en production.
                  </p>
                </div>
                <div className="tl-item">
                  <div className="date">2021 — 2023</div>
                  <h4>Développeur Frontend</h4>
                  <div className="co">Tech Company</div>
                  <p>
                    Développement d&apos;interfaces Angular modernes et performantes pour des
                    applications métier à fort trafic.
                  </p>
                </div>
                <div className="tl-item">
                  <div className="date">2019 — 2020</div>
                  <h4>Développeur Junior</h4>
                  <div className="co">Startup Inc.</div>
                  <p>
                    Premières expériences en développement web, montée en compétences sur
                    l&apos;écosystème Angular et Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-dim)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Formation
              </h4>
              <div className="timeline" style={{ marginBottom: 34 }}>
                <div className="tl-item">
                  <div className="date">2018 — 2019</div>
                  <h4>Master en Informatique</h4>
                  <div className="co">Université</div>
                </div>
                <div className="tl-item">
                  <div className="date">2015 — 2018</div>
                  <h4>Licence en Informatique</h4>
                  <div className="co">Université</div>
                </div>
              </div>

              <h4
                style={{
                  fontSize: ".85rem",
                  color: "var(--text-dim)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Certifications
              </h4>
              <div className="cert-list">
                <div className="cert-card">
                  <div className="cert-ic">
                    <svg viewBox="0 0 250 250" width="20" height="20">
                      <path
                        d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z"
                        fill="#dd0031"
                      />
                      <path
                        d="M125 30 L204 190 H172 L155 150 H94 L77 190 H45 Z M125 65 L104 120 H146 Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div>
                    <b>Angular Certified Developer</b>
                    <span>Certification officielle</span>
                  </div>
                </div>
                <div className="cert-card">
                  <div className="cert-ic">☁️</div>
                  <div>
                    <b>AWS Certified Cloud Practitioner</b>
                    <span>Amazon Web Services</span>
                  </div>
                </div>
                <div className="cert-card">
                  <div className="cert-ic">📜</div>
                  <div>
                    <b>Scrum Fundamentals</b>
                    <span>Agile / Scrum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <div className="wrap">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">
            Me <span className="grad">contacter</span>
          </h2>
          <p className="section-sub">
            Une idée de projet, une opportunité ou juste envie d&apos;échanger ? N&apos;hésitez
            pas à me contacter.
          </p>

          <div className="contact-grid">
            <div>
              <div className="contact-item">
                <div className="contact-ic">✉️</div>
                <div>
                  <b>Email</b>
                  <span>alex.dev@exemple.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ic">📞</div>
                <div>
                  <b>Téléphone</b>
                  <span>+33 6 12 34 56 78</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ic">📍</div>
                <div>
                  <b>Localisation</b>
                  <span>France</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ic">🟢</div>
                <div>
                  <b>Disponibilité</b>
                  <span>Disponible pour travailler</span>
                </div>
              </div>
              <div className="socials" style={{ marginTop: 24 }}>
                <a href="#">in</a>
                <a href="#">gh</a>
                <a href="#">tw</a>
                <a href="#">@</a>
              </div>
            </div>

            <div className="form-card">
              <div className="form-row">
                <div>
                  <label>Nom</label>
                  <input type="text" placeholder="Votre nom" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="full">
                <label>Sujet</label>
                <input type="text" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Votre message..." />
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Envoyer le message →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <p>© 2026 Thibaut — Full Stack Developer. Tous droits réservés.</p>
          <p>
            Conçu avec <span style={{ color: "#ff6b8a" }}>♥</span> et beaucoup de{" "}
            <b style={{ color: "#ff6b8a" }}>Angular</b>
          </p>
        </div>
      </footer>
    </>
  );
}

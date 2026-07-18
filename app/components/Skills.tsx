const TECH_SKILLS = [
  { name: "◈ Angular", pct: 95, angular: true },
  { name: "React / Next.js", pct: 85 },
  { name: "TypeScript", pct: 90 },
  { name: "Tailwind CSS", pct: 88 },
  { name: "Node.js", pct: 82 },
  { name: "Spring Boot", pct: 78 },
  { name: "Base de données", pct: 80 },
  { name: "Outils & DevOps", pct: 75 },
];

const SOFT_SKILLS = [
  { name: "UI/UX Design", filled: 3 },
  { name: "Responsive Design", filled: 4 },
  { name: "Performance", filled: 4 },
  { name: "SEO", filled: 3 },
  { name: "Agile / Scrum", filled: 4 },
  { name: "Communication", filled: 5 },
];

const sectionLabelStyle = {
  fontSize: ".85rem",
  color: "var(--text-dim)",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
};

export default function Skills() {
  return (
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

            {TECH_SKILLS.map((skill) => (
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
            <h4 style={{ ...sectionLabelStyle, marginBottom: 20 }}>Autres compétences</h4>
            <div className="softskill-list">
              {SOFT_SKILLS.map((soft) => (
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

            <h4 style={{ ...sectionLabelStyle, marginBottom: 14 }}>Langues</h4>
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

            <h4 style={{ ...sectionLabelStyle, marginBottom: 14 }}>Outils & utilitaires</h4>
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
  );
}

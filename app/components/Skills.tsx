const TECH_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "Angular", color: "#dd0031" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "React / Next.js", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#38bdf8" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", color: "#68a063" },
      { name: "Spring Boot", color: "#f97316" },
    ],
  },
  {
    label: "Données",
    skills: [
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "MongoDB", color: "#47a248" },
    ],
  },
  {
    label: "Outils & DevOps",
    skills: [
      { name: "Docker", color: "#2496ed" },
      { name: "AWS", color: "#ff9900" },
      { name: "Git", color: "#f05033" },
    ],
  },
];

const SOFT_SKILLS = [
  "🎯 UI/UX Design",
  "📱 Responsive Design",
  "⚡ Performance",
  "🔍 SEO",
  "🔁 Agile / Scrum",
  "💬 Communication",
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

            {TECH_CATEGORIES.map((category) => (
              <div key={category.label} style={{ marginBottom: 24 }}>
                <h5 style={{ ...sectionLabelStyle, marginBottom: 12 }}>{category.label}</h5>
                <div className="chip-row">
                  {category.skills.map((skill) => (
                    <div className="chip" key={skill.name}>
                      <i style={{ background: skill.color }} /> {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ ...sectionLabelStyle, marginBottom: 20 }}>Autres compétences</h4>
            <div className="tools-row" style={{ marginBottom: 30 }}>
              {SOFT_SKILLS.map((soft) => (
                <div className="tool-pill" key={soft}>
                  {soft}
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

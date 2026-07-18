const sectionLabelStyle = {
  fontSize: ".85rem",
  color: "var(--text-dim)",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  marginBottom: 16,
};

export default function Experience() {
  return (
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
            <h4 style={sectionLabelStyle}>Formation</h4>
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

            <h4 style={sectionLabelStyle}>Certifications</h4>
            <div className="cert-list">
              <div className="cert-card">
                <div className="cert-ic">
                  <svg viewBox="0 0 250 250" width="20" height="20">
                    <path d="M125 0 L250 45 L227 200 L125 250 L23 200 L0 45 Z" fill="#dd0031" />
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
  );
}

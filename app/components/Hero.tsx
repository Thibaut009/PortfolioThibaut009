import Image from "next/image";
import AngularShield from "./AngularShield";
import TechIcon from "./TechIcon";
import SocialIcon from "./SocialIcon";
import content from "../data/content.json";

const { hero, about } = content;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="badge-avail">
              <i className="dot-live" /> {hero.badge}
            </div>
            <h1>
              {hero.greeting}
              <br />
              {hero.introPrefix} <span className="grad">{hero.name}</span>
            </h1>
            <p className="role">{hero.role}</p>
            <p className="desc">
              {hero.descriptionPrefix}{" "}
              <b style={{ color: "#ff6b8a" }}>{hero.descriptionHighlight}</b>{" "}
              {hero.descriptionSuffix}
            </p>

            <div className="chip-row">
              {hero.chips.map((chip) => (
                <div
                  className={`chip${chip.label === "Angular" ? " angular-chip" : ""}`}
                  key={chip.label}
                >
                  <i style={{ background: chip.color }} /> {chip.label}
                </div>
              ))}
            </div>

            <div className="cta-row">
              <a className="btn-primary" href="#projects">
                {hero.ctaPrimary}
              </a>
              <a className="btn-ghost" href="#contact">
                {hero.ctaGhost}
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
              {hero.socialsLabel}
            </div>
            <div className="socials">
              {hero.socials.map((social) => (
                <a
                  href={social.href}
                  title={social.title}
                  key={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
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
                <span className="dim">$</span> {hero.terminalCommand}
              </div>
              <div style={{ color: "#9ae6b4" }}>{hero.terminalOutput}</div>
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
                  alt={about.avatarAlt}
                  width={327}
                  height={772}
                  priority
                />
                <div className="avatar-code">{hero.avatarCode}</div>
              </div>
              <AngularShield />
            </div>
            <div className="avatar-podium" />
            <div className="angular-shield-label">{hero.shieldLabel}</div>
          </div>
        </div>

        {/* stack strip */}
        <div className="stack-strip">
          <div className="label">{hero.stackLabel}</div>
          <div className="stack-icons">
            {hero.stack.map((item) => (
              <div className={`stack-icon${item.featured ? " featured" : ""}`} key={item.label}>
                <div className="ic">
                  <TechIcon name={item.icon} size={30} />
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

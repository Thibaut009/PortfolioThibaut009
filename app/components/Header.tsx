"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#top", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const onScroll = () => {
      let current = "top";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120) current = sec.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="nav">
        <div className="logo">
          THIBAUT<span>.</span>
        </div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="btn-cv">⬇ Télécharger CV</button>
        <button
          className="burger"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

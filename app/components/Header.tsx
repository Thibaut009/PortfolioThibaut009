"use client";

import { useEffect, useState } from "react";
import content from "../data/content.json";

const { logoText, links, cvButton, burgerLabel } = content.nav;

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
          {logoText}
          <span>.</span>
        </div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((link) => (
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
        <a className="btn-cv" href="/cv-thibaut-gabet.pdf" download>
          {cvButton}
        </a>
        <button className="burger" aria-label={burgerLabel} onClick={() => setMenuOpen((v) => !v)}>
          ☰
        </button>
      </div>
    </header>
  );
}

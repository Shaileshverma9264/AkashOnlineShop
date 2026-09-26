import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useScrollSpy } from "../hooks.js";

const SECTION_IDS = ["home", "services", "about", "faq", "contact"];

export default function Navbar() {
  const { t, lang, theme, toggleLang, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  const nav = [
    ["home", t.navHome],
    ["services", t.navServices],
    ["about", t.navAbout],
    ["faq", t.navFaq],
    ["contact", t.navContact],
  ];

  return (
    <header className="nav">
      <div className="wrap navrow">
        <div className="brand">
          <span className="mark">AK</span>आकाश ऑनलाइन
        </div>
        <ul className="nav-links">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbtns">
          <button className="pill" onClick={toggleLang} aria-label="language toggle">
            {lang === "hi" ? "English" : "हिंदी"}
          </button>
          <button className="pill" onClick={toggleTheme} aria-label="theme toggle">
            {theme === "light" ? t.dark : t.light}
          </button>
          <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={"wrap mobile-menu" + (menuOpen ? " open" : "")}>
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useScrollSpy } from "../hooks.js";
import InstallPrompt from "./InstallPrompt.jsx";

const SECTION_IDS = ["home", "services", "gallery", "prices", "about", "faq", "contact"];

export default function Navbar() {
  const { t, lang, theme, toggleLang, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  const nav = [
    ["home", t.navHome],
    ["services", t.navServices],
    ["gallery", t.navGallery],
    ["prices", t.navPrices],
    ["about", t.navAbout],
    ["faq", t.navFaq],
    ["contact", t.navContact],
  ];

  return (
    <header className="nav">
      <div className="wrap navrow">
        <div className="brand">
          <span className="mark" aria-hidden="true">
            <span>स</span>
          </span>
          <span className="brand-name" aria-label="सहज जन सेवा केंद्र">
            <strong>सहज</strong>
            <small>जन सेवा केंद्र</small>
          </span>
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
          <InstallPrompt />
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

import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { MAPS_LINK } from "../data/content.js";

/**
 * Fixed bottom quick-action bar, shown on mobile only (see .dock CSS —
 * hidden at wider breakpoints where the navbar's own buttons suffice).
 * Gives one-thumb access to the four things a walk-in customer needs most.
 */
export default function Dock({ onBook }) {
  const { t, lang, openWhatsApp } = useApp();
  const defaultMsg =
    lang === "hi" ? "नमस्ते आकाश ऑनलाइन, मुझे जानकारी चाहिए।" : "Hi Aakash Online, I need some information.";

  return (
    <nav className="dock" aria-label="quick actions">
      <a className="dock-item" href="tel:+919807566048">
        <span className="dock-icon">📞</span>
        <span>{t.dockCall}</span>
      </a>
      <button className="dock-item" onClick={() => openWhatsApp(defaultMsg)}>
        <span className="dock-icon">💬</span>
        <span>{t.dockWhatsapp}</span>
      </button>
      <button className="dock-item dock-item-main" onClick={() => onBook()}>
        <span className="dock-icon">🗓️</span>
        <span>{t.dockBook}</span>
      </button>
      <a className="dock-item" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
        <span className="dock-icon">📍</span>
        <span>{t.dockDirections}</span>
      </a>
    </nav>
  );
}

import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useScrolledPast } from "../hooks.js";

/**
 * Floating "back to top" button. Appears once the page has been scrolled
 * past the hero, hidden again on mobile (see CSS) where the Dock bar
 * already occupies that screen real estate.
 */
export default function BackToTop() {
  const { t } = useApp();
  const visible = useScrolledPast(420);

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.backToTop}
      title={t.backToTop}
    >
      ↑
    </button>
  );
}

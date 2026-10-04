import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useIsOpenNow } from "../hooks.js";

export default function Hero({ onBook }) {
  const { t } = useApp();
  const isOpen = useIsOpenNow();

  return (
    <section className="hero" id="home">
      <div className="wrap hero-in">
        <div className="status-badge">{isOpen ? t.openNow : t.closedNow}</div>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <div className="hero-ctas">
          <button className="cta" onClick={onBook}>
            {t.bookCta}
          </button>
          <a className="cta ghost" href="#services">
            {t.exploreCta}
          </a>
        </div>
      </div>
    </section>
  );
}

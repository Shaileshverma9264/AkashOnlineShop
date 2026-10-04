import React from "react";
import { useApp } from "../context/AppContext.jsx";

export default function About() {
  const { t } = useApp();
  return (
    <section id="about">
      <div className="wrap grid2">
        <div>
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2 className="h2">{t.aboutTitle}</h2>
          <p className="about-text">{t.aboutText}</p>
        </div>
        <div className="card">
          <ul className="about-list">
            <li>{t.aboutPoint1}</li>
            <li>{t.aboutPoint2}</li>
            <li>{t.aboutPoint3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

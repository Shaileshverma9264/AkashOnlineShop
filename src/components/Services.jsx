import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { SERVICES } from "../data/content.js";

export default function Services() {
  const { t, lang } = useApp();
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow">{t.svcEyebrow}</p>
        <h2 className="h2">{t.svcTitle}</h2>
        <div className="services">
          {SERVICES[lang].map(([icon, title, desc], i) => (
            <div className="svc-card" key={i}>
              <div className="svc-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

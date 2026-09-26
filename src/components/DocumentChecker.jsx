import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { DOCS } from "../data/content.js";

export default function DocumentChecker() {
  const { t, lang } = useApp();
  const [service, setService] = useState("");

  return (
    <section className="checker" id="docs">
      <div className="wrap">
        <p className="eyebrow">{t.checkerEyebrow}</p>
        <h2 className="h2">{t.checkerTitle}</h2>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">{t.checkerPlaceholder}</option>
          {Object.keys(DOCS[lang] || {}).map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        {service && (
          <ul className="doclist">
            {DOCS[lang][service].map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

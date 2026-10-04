import React, { useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SERVICES } from "../data/content.js";

export default function Services() {
  const { t, lang } = useApp();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const list = SERVICES[lang];
    if (!search.trim()) return list;
    const q = search.trim().toLowerCase();
    return list.filter(([, title, desc]) => (title + " " + desc).toLowerCase().includes(q));
  }, [lang, search]);

  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow">{t.svcEyebrow}</p>
        <h2 className="h2">{t.svcTitle}</h2>
        <input
          className="svc-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.svcSearchPlaceholder}
        />
        {filtered.length === 0 && <p className="faq-empty">{t.svcSearchEmpty}</p>}
        <div className="services">
          {filtered.map(([image, title, desc, emoji], i) => (
            <div className="svc-card" key={i}>
              <div className="svc-image">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  onError={(e) => {
                    // If the photo fails to load, swap in a clean emoji
                    // badge instead of a broken image icon.
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("svc-image-fallback");
                  }}
                />
                <span className="svc-emoji-fallback" aria-hidden="true">
                  {emoji}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

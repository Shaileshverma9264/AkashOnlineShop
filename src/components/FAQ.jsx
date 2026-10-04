import React, { useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { FAQS } from "../data/content.js";

export default function FAQ() {
  const { t, lang } = useApp();
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState(0);

  const filtered = useMemo(() => {
    const list = FAQS[lang];
    if (!search.trim()) return list;
    const q = search.trim().toLowerCase();
    return list.filter(([question, answer]) => (question + " " + answer).toLowerCase().includes(q));
  }, [lang, search]);

  return (
    <section id="faq">
      <div className="wrap">
        <p className="eyebrow">{t.faqEyebrow}</p>
        <h2 className="h2">{t.faqTitle}</h2>
        <input
          className="faq-search"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpenIdx(0);
          }}
          placeholder={t.faqSearch}
        />
        {filtered.length === 0 && <p className="faq-empty">{t.faqEmpty}</p>}
        {filtered.map((f, i) => (
          <div className="faq-item" key={f[0]}>
            <div className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
              <span>{f[0]}</span>
              <span>{openIdx === i ? "–" : "+"}</span>
            </div>
            {openIdx === i && <div className="faq-a">{f[1]}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

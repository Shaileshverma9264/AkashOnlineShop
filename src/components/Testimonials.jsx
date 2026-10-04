import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { TESTIMONIALS } from "../data/content.js";

export default function Testimonials() {
  const { t, lang } = useApp();
  const list = TESTIMONIALS[lang];
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % list.length), 5000);
    return () => clearInterval(id);
  }, [list.length]);

  const go = (dir) => setI((v) => (v + dir + list.length) % list.length);

  return (
    <section style={{ borderBottom: "none" }}>
      <div className="wrap">
        <p className="eyebrow">{t.testiEyebrow}</p>
        <h2 className="h2">{t.testiTitle}</h2>
        <div className="testi-carousel">
          <button className="testi-nav" onClick={() => go(-1)} aria-label="previous">
            ‹
          </button>
          <div className="card testi-card">
            <p>&ldquo;{list[i][0]}&rdquo;</p>
            <div className="who">— {list[i][1]}</div>
          </div>
          <button className="testi-nav" onClick={() => go(1)} aria-label="next">
            ›
          </button>
        </div>
        <div className="testi-dots">
          {list.map((_, idx) => (
            <span key={idx} className={idx === i ? "dot active" : "dot"} onClick={() => setI(idx)} />
          ))}
        </div>
      </div>
    </section>
  );
}

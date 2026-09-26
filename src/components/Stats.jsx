import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useCountUp, useInView } from "../hooks.js";

export default function Stats() {
  const { t } = useApp();
  const [ref, inView] = useInView(0.4);
  const c1 = useCountUp(10000, inView);
  const c2 = useCountUp(5000, inView);
  const c3 = useCountUp(5, inView);

  return (
    <section ref={ref}>
      <div className="wrap">
        <p className="eyebrow">{t.statsEyebrow}</p>
        <div className="stats">
          <div className="stat">
            <b>{c1.toLocaleString()}+</b>
            <span>{t.stat1}</span>
          </div>
          <div className="stat">
            <b>{c2.toLocaleString()}+</b>
            <span>{t.stat2}</span>
          </div>
          <div className="stat">
            <b>{c3}+</b>
            <span>{t.stat3}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

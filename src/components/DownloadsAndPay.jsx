import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { DOWNLOADS } from "../data/content.js";

export default function DownloadsAndPay() {
  const { t, lang } = useApp();
  return (
    <section>
      <div className="wrap grid2">
        <div>
          <p className="eyebrow">{t.dlEyebrow}</p>
          <h2 className="h2-sm">{t.dlTitle}</h2>
          <div className="card">
            {DOWNLOADS[lang].map(([name, href, fname], i) => (
              <div className="dl-item" key={i}>
                <span>{name}</span>
                <a className="pill" href={href} download={fname}>
                  {t.dlBtn}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">{t.payEyebrow}</p>
          <h2 className="h2-sm">{t.payTitle}</h2>
          <div className="card qr-box">
            <div className="qr-img" aria-label="UPI QR code placeholder" />
            <p className="qr-note">{t.payNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

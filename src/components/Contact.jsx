import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SHOP_LOCATION, MAPS_EMBED_SRC, MAPS_LINK } from "../data/content.js";

export default function Contact() {
  const { t, lang, openWhatsApp, showToast } = useApp();
  const [query, setQuery] = useState("");

  const defaultMsg =
    lang === "hi" ? "नमस्ते आकाश ऑनलाइन, मुझे जानकारी चाहिए।" : "Hi Aakash Online, I need some information.";

  const address = lang === "hi" ? SHOP_LOCATION.addressHi : SHOP_LOCATION.addressEn;

  const send = () => {
    if (!query.trim()) return;
    openWhatsApp(query.trim());
    showToast(t.querySent);
    setQuery("");
  };

  return (
    <section id="contact">
      <div className="wrap grid2">
        <div>
          <p className="eyebrow">{t.contactTitle}</p>
          <h2 className="h2-sm">{t.contactSub}</h2>
          <p className="phone-line">
            📞{" "}
            <a href="tel:+919807566048" className="phone-link">
              +91 98075 66048
            </a>
          </p>
          <div className="card">
            <p className="query-label">{t.queryTitle}</p>
            <textarea
              className="query-box"
              rows="4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.queryPlaceholder}
            />
            <div className="query-actions">
              <button className="cta" onClick={send} disabled={!query.trim()}>
                💬 {t.querySend}
              </button>
            </div>
          </div>
        </div>

        <div className="contact-side location-block">
          <button className="cta ghost" onClick={() => openWhatsApp(defaultMsg)}>
            💬 {lang === "hi" ? "सीधे WhatsApp खोलें" : "Open WhatsApp directly"}
          </button>

          <div className="card location-card">
            <p className="location-label">📍 {t.addressLabel}</p>
            <p className="location-address">{address}</p>
            <div className="location-map">
              <iframe
                title="Shop location"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a className="cta" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              {t.directionsBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

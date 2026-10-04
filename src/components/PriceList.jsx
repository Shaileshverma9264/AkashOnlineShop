import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { PRICES } from "../data/content.js";

/**
 * Transparent price list — renders [title, fee, note] rows from PRICES.
 * Each row has a "Book" button that opens the booking modal with that
 * service already preselected (via the onBook(service) callback passed
 * down from App.jsx).
 */
export default function PriceList({ onBook }) {
  const { t, lang } = useApp();

  return (
    <section id="prices">
      <div className="wrap">
        <p className="eyebrow">{t.priceEyebrow}</p>
        <h2 className="h2">{t.priceTitle}</h2>
        <div className="price-table">
          {PRICES[lang].map(([title, fee, note]) => (
            <div className="price-row" key={title}>
              <div className="price-row-info">
                <span className="price-row-title">{title}</span>
                <span className="price-row-note">{note}</span>
              </div>
              <div className="price-row-right">
                <span className="price-row-fee">₹{fee}</span>
                <button className="pill" onClick={() => onBook(title)}>
                  {t.priceBookBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="price-note">{t.priceNote}</p>
      </div>
    </section>
  );
}

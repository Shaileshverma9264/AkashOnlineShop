import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { DOWNLOADS } from "../data/content.js";

function PhonePeQr() {
  const size = 29;
  const cells = [];

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const inTopLeft = x < 7 && y < 7;
      const inTopRight = x >= size - 7 && y < 7;
      const inBottomLeft = x < 7 && y >= size - 7;
      const isFinder = inTopLeft || inTopRight || inBottomLeft;

      let active = false;

      if (isFinder) {
        const dx = x < 7 ? x : x - (size - 7);
        const dy = y < 7 ? y : y - (size - 7);
        const edge = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const inner = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        active = edge || inner;
      } else {
        const insideCenter = x >= 10 && x <= 18 && y >= 10 && y <= 18;
        active =
          ((x * 13 + y * 17 + (x ^ y)) % 5 === 0 ||
            ((x + y) % 2 === 0 && !insideCenter)) &&
          !(x >= 11 && x <= 17 && y >= 11 && y <= 17 && (x + y) % 3 === 0 && x % 2 === 1);
      }

      if (active) {
        cells.push({
          x,
          y,
          size: 1,
        });
      }
    }
  }

  return (
    <svg
      className="qr-code-svg"
      viewBox={`0 0 ${size} ${size}`}
      aria-label="PhonePe QR code"
      role="img"
    >
      {cells.map((cell, index) => (
        <rect
          key={`${cell.x}-${cell.y}-${index}`}
          x={cell.x}
          y={cell.y}
          width={cell.size}
          height={cell.size}
          rx={0.2}
          fill="#000000"
        />
      ))}
      <circle cx={14.5} cy={14.5} r={4.2} fill="#ffffff" />
      <circle cx={14.5} cy={14.5} r={3.2} fill="#6f2de4" opacity={0.96} />
      <text
        x="14.5"
        y="16.2"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="sans-serif"
      >
        पे
      </text>
    </svg>
  );
}

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
            <div className="qr-frame" aria-label="PhonePe QR code">
              <PhonePeQr />
            </div>
            <div className="qr-side">
              <p className="qr-title">Pay your service fee by UPI</p>
              <p className="qr-note">{t.payNote}</p>
              <p className="qr-owner">Aakash Rao</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

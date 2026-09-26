import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { SERVICES } from "../data/content.js";

function makeToken() {
  const n = Math.floor(100 + Math.random() * 900);
  return `AO-${n}`;
}

export default function BookingModal({ open, onClose }) {
  const { t, lang, openWhatsApp, showToast } = useApp();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [token, setToken] = useState(null);

  if (!open) return null;

  const canConfirm = name.trim() && service && date && time;

  const confirm = () => {
    if (!canConfirm) return;
    setToken(makeToken());
  };

  const sendConfirmation = () => {
    const msg =
      lang === "hi"
        ? `नमस्ते, मैंने अपॉइंटमेंट बुक की है।\nनाम: ${name}\nसेवा: ${service}\nतारीख: ${date}\nसमय: ${time}\nटोकन नंबर: ${token}`
        : `Hi, I've booked an appointment.\nName: ${name}\nService: ${service}\nDate: ${date}\nTime: ${time}\nToken: ${token}`;
    openWhatsApp(msg);
    showToast(t.querySent);
    reset();
    onClose();
  };

  const reset = () => {
    setName("");
    setService("");
    setDate("");
    setTime("");
    setToken(null);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          reset();
          onClose();
        }
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <h3>{t.bookTitle}</h3>
          <button
            className="pill"
            onClick={() => {
              reset();
              onClose();
            }}
          >
            ✕
          </button>
        </div>

        {!token ? (
          <div className="modal-body">
            <label>
              {t.bookName}
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              {t.bookService}
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">—</option>
                {SERVICES[lang].map(([, title]) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </label>
            <div className="modal-row">
              <label>
                {t.bookDate}
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </label>
              <label>
                {t.bookTime}
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </label>
            </div>
            <button className="cta" style={{ width: "100%", justifyContent: "center" }} disabled={!canConfirm} onClick={confirm}>
              {t.bookConfirm}
            </button>
          </div>
        ) : (
          <div className="modal-body token-view">
            <p className="token-label">{t.bookTokenPrefix}</p>
            <p className="token-value">{token}</p>
            <p className="token-meta">
              {name} · {service} · {date} {time}
            </p>
            <button className="cta" style={{ width: "100%", justifyContent: "center" }} onClick={sendConfirmation}>
              💬 {t.bookSendWa}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

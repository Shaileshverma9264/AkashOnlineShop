import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useLocalStorageState } from "../hooks.js";
import { SERVICES, OTHER_SERVICE_VALUE } from "../data/content.js";

function makeToken() {
  const n = Math.floor(100 + Math.random() * 900);
  return `AO-${n}`;
}

/**
 * Booking modal with three internal views:
 *  - "form": pick name/service/date/time and request a token
 *  - "token": shows the freshly-issued token + a WhatsApp confirmation button
 *  - "list": "My Bookings" — every token ever issued on this device/browser,
 *            persisted in localStorage, with a per-row cancel action.
 *
 * `presetService` (optional) pre-selects a service — used by the Price List
 * section's "Book" buttons so tapping a price row jumps straight to a
 * ready-filled form instead of an empty one.
 */
export default function BookingModal({ open, onClose, presetService = "" }) {
  const { t, lang, openWhatsApp, showToast } = useApp();
  const [bookings, setBookings] = useLocalStorageState("ao-bookings", []);

  const [view, setView] = useState("form");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [token, setToken] = useState(null);
  const [slotError, setSlotError] = useState(false);

  // Whenever the modal is (re)opened with a preset service, drop straight
  // into the form with that service already chosen.
  React.useEffect(() => {
    if (open && presetService) {
      setService(presetService);
      setView("form");
    }
  }, [open, presetService]);

  if (!open) return null;

  const isOther = service === OTHER_SERVICE_VALUE;
  // The actual service text we'll display/send — either the picked
  // service title, or whatever the user typed in the "Other" box.
  const resolvedService = isOther ? customService.trim() : service;

  const canConfirm = name.trim() && service && (!isOther || customService.trim()) && date && time;

  const reset = () => {
    setName("");
    setService("");
    setCustomService("");
    setDate("");
    setTime("");
    setToken(null);
    setSlotError(false);
    setView("form");
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  const confirm = () => {
    if (!canConfirm) return;
    // Simple client-side slot-clash check against this device's own
    // saved bookings, so the same browser doesn't double-book a slot.
    const clash = bookings.some((b) => b.date === date && b.time === time);
    if (clash) {
      setSlotError(true);
      return;
    }
    setSlotError(false);
    const newToken = makeToken();
    setToken(newToken);
    setBookings((prev) => [
      { token: newToken, name: name.trim(), service: resolvedService, date, time, createdAt: Date.now() },
      ...prev,
    ]);
    setView("token");
  };

  const sendConfirmation = () => {
    const msg =
      lang === "hi"
        ? `नमस्ते, मैंने अपॉइंटमेंट बुक की है।\nनाम: ${name}\nसेवा: ${resolvedService}\nतारीख: ${date}\nसमय: ${time}\nटोकन नंबर: ${token}`
        : `Hi, I've booked an appointment.\nName: ${name}\nService: ${resolvedService}\nDate: ${date}\nTime: ${time}\nToken: ${token}`;
    openWhatsApp(msg);
    showToast(t.querySent);
    closeModal();
  };

  const cancelBooking = (tok) => {
    setBookings((prev) => prev.filter((b) => b.token !== tok));
    showToast(t.bookCancelled);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <h3>{view === "list" ? t.myBookingsTitle : t.bookTitle}</h3>
          <button className="pill" onClick={closeModal}>
            ✕
          </button>
        </div>

        {view === "form" && (
          <div className="modal-body">
            <button type="button" className="link-btn" onClick={() => setView("list")}>
              {t.myBookingsLink}
              {bookings.length > 0 ? ` (${bookings.length})` : ""}
            </button>

            <label>
              {t.bookName}
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              {t.bookService}
              <select
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (e.target.value !== OTHER_SERVICE_VALUE) setCustomService("");
                }}
              >
                <option value="">—</option>
                {SERVICES[lang].map(([, title]) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option value={OTHER_SERVICE_VALUE}>{t.bookOtherOption}</option>
              </select>
            </label>
            {isOther && (
              <label>
                {t.bookOtherLabel}
                <input
                  type="text"
                  value={customService}
                  onChange={(e) => setCustomService(e.target.value)}
                  placeholder={t.bookOtherPlaceholder}
                />
              </label>
            )}
            <div className="modal-row">
              <label>
                {t.bookDate}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setSlotError(false);
                  }}
                />
              </label>
              <label>
                {t.bookTime}
                <input
                  type="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setSlotError(false);
                  }}
                />
              </label>
            </div>
            {slotError && <p className="slot-warning">{t.bookSlotTaken}</p>}
            <button
              className="cta"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={!canConfirm}
              onClick={confirm}
            >
              {t.bookConfirm}
            </button>
          </div>
        )}

        {view === "token" && (
          <div className="modal-body token-view">
            <p className="token-label">{t.bookTokenPrefix}</p>
            <p className="token-value">{token}</p>
            <p className="token-meta">
              {name} · {resolvedService} · {date} {time}
            </p>
            <button className="cta" style={{ width: "100%", justifyContent: "center" }} onClick={sendConfirmation}>
              💬 {t.bookSendWa}
            </button>
          </div>
        )}

        {view === "list" && (
          <div className="modal-body">
            <button type="button" className="link-btn" onClick={() => setView("form")}>
              {t.myBookingsBack}
            </button>

            {bookings.length === 0 ? (
              <>
                <p className="bookings-empty">{t.myBookingsEmpty}</p>
                <button className="cta" style={{ width: "100%", justifyContent: "center" }} onClick={() => setView("form")}>
                  {t.myBookingsNewBtn}
                </button>
              </>
            ) : (
              <ul className="bookings-list">
                {bookings.map((b) => (
                  <li className="booking-card" key={b.token}>
                    <div className="booking-card-main">
                      <span className="booking-token">{b.token}</span>
                      <span className="booking-service">{b.service}</span>
                      <span className="booking-meta">
                        {b.name} · {b.date} {b.time}
                      </span>
                    </div>
                    <button className="pill" onClick={() => cancelBooking(b.token)}>
                      {t.myBookingsCancel}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

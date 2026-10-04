import React from "react";
import { useApp } from "../context/AppContext.jsx";

export default function WhatsAppFloat() {
  const { lang, openWhatsApp } = useApp();
  const defaultMsg =
    lang === "hi" ? "नमस्ते आकाश ऑनलाइन, मुझे जानकारी चाहिए।" : "Hi Aakash Online, I need some information.";
  return (
    <button className="wa-float" onClick={() => openWhatsApp(defaultMsg)} aria-label="WhatsApp">
      💬
    </button>
  );
}

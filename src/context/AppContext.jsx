import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { STR, WHATSAPP_NUMBER } from "../data/content.js";

const AppContext = createContext(null);

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => readStorage("ao-lang", "hi"));
  const [theme, setTheme] = useState(() => readStorage("ao-theme", "light"));
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("ao-theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("ao-lang", lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(id);
  }, [toast]);

  const toggleLang = useCallback(() => setLang((l) => (l === "hi" ? "en" : "hi")), []);
  const toggleTheme = useCallback(() => setTheme((th) => (th === "light" ? "dark" : "light")), []);
  const showToast = useCallback((msg) => setToast(msg), []);

  const openWhatsApp = useCallback((message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  }, []);

  const value = {
    lang,
    theme,
    toggleLang,
    toggleTheme,
    toast,
    showToast,
    openWhatsApp,
    t: STR[lang],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}

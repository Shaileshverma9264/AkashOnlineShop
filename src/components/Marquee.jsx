import React from "react";
import { useApp } from "../context/AppContext.jsx";

export default function Marquee() {
  const { t } = useApp();
  return (
    <div className="marquee" role="marquee" aria-label="updates">
      <span>{t.marquee}</span>
    </div>
  );
}

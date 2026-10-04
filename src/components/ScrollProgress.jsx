import React from "react";
import { useScrollProgress } from "../hooks.js";

/**
 * Thin gradient bar fixed to the very top of the viewport, tracking how
 * far down the page the visitor has scrolled (0–100%).
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

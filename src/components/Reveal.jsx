import React from "react";
import { useInView } from "../hooks.js";

/**
 * Wraps section content so it fades/slides into view the first time it
 * scrolls into the viewport. Purely presentational — doesn't change any
 * layout classes on its children, just adds a motion wrapper around them.
 */
export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`reveal${inView ? " in-view" : ""}${className ? " " + className : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

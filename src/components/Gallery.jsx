import React, { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { GALLERY } from "../data/content.js";

/**
 * Gallery section — a polished image carousel of shop photos with
 * autoplay, swipe/drag support, arrow navigation, dot indicators,
 * and a clickable thumbnail strip. Pauses autoplay on hover/focus.
 */
export default function Gallery() {
  const { t, lang } = useApp();
  const list = GALLERY[lang];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    setIndex(0);
  }, [lang]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % list.length), 4500);
    return () => clearInterval(id);
  }, [paused, list.length]);

  const go = (dir) => setIndex((v) => (v + dir + list.length) % list.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  return (
    <section id="gallery">
      <div className="wrap">
        <p className="eyebrow">{t.galleryEyebrow}</p>
        <h2 className="h2">{t.galleryTitle}</h2>

        <div
          className="gallery-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="gallery-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="gallery-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {list.map(([src, caption], i) => (
                <div className="gallery-slide" key={i}>
                  <img src={src} alt={caption} loading={i === 0 ? "eager" : "lazy"} />
                  <div className="gallery-caption">{caption}</div>
                </div>
              ))}
            </div>

            <button className="gallery-arrow left" onClick={() => go(-1)} aria-label="previous photo">
              ‹
            </button>
            <button className="gallery-arrow right" onClick={() => go(1)} aria-label="next photo">
              ›
            </button>
          </div>

          <div className="gallery-dots">
            {list.map((_, i) => (
              <span
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="gallery-thumbs">
            {list.map(([src, caption], i) => (
              <button
                key={i}
                className={"gallery-thumb" + (i === index ? " active" : "")}
                onClick={() => setIndex(i)}
                aria-label={caption}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

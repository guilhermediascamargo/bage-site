"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./home-hub.module.css";

export default function AthleteRail({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function updateEdges() {
      if (!track) return;
      setEdges({
        start: track.scrollLeft <= 1,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
      });
    }
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    track.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateEdges);
    };
  }, []);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduce ? "instant" : "smooth",
    });
  }

  return (
    <div className={styles.rail}>
      <div className={styles.railControls}>
        <button
          type="button"
          aria-label="Atletas anteriores"
          aria-controls="home-athletes"
          disabled={edges.start}
          onClick={() => move(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label="Próximos atletas"
          aria-controls="home-athletes"
          disabled={edges.end}
          onClick={() => move(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <ul
        id="home-athletes"
        ref={trackRef}
        className={styles.track}
        aria-label="Destaques do elenco profissional"
      >
        {children}
      </ul>
    </div>
  );
}

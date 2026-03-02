"use client";

import { useState, useEffect, useMemo } from "react";

const SNOWFLAKE_COUNT = 18;
const SNOWFLAKE_SYMBOLS = ["❄", "✦", "•", "❅", "✧"];

interface Snowflake {
  id: number;
  symbol: string;
  size: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

/**
 * Seeded PRNG (mulberry32) to generate deterministic snowflakes
 * so server and client produce identical output.
 */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateSnowflakes(): Snowflake[] {
  const random = seededRandom(42);
  return Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => ({
    id: i,
    symbol: SNOWFLAKE_SYMBOLS[i % SNOWFLAKE_SYMBOLS.length],
    size: random() * 16 + 8,
    left: random() * 100,
    animationDuration: random() * 6 + 5,
    animationDelay: random() * 5,
    opacity: random() * 0.5 + 0.15,
  }));
}

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const snowflakes = useMemo(() => generateSnowflakes(), []);

  const isFadingOut = !isLoading;

  useEffect(() => {
    if (isLoading) return;

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 700);
    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isFadingOut ? "loading-screen--fade-out" : ""}`}
      aria-label="Cargando sitio"
      role="status"
    >
      {/* Snowflake particles */}
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="loading-snowflake"
          aria-hidden="true"
          style={{
            left: `${String(flake.left)}%`,
            fontSize: `${String(flake.size)}px`,
            animationDuration: `${String(flake.animationDuration)}s`,
            animationDelay: `${String(flake.animationDelay)}s`,
            opacity: 0,
            ["--flake-opacity" as string]: flake.opacity,
          }}
        >
          {flake.symbol}
        </span>
      ))}

      {/* Central content */}
      <div className="loading-content">
        <img
          src="/logo.png"
          alt="Z.A. Refrigeración"
          className="loading-logo"
        />

        {/* AC Unit + Wind Progress Bar */}
        <div className="loading-bar-wrapper">
          <div className="loading-ac-unit" aria-hidden="true">
            {/* Mini AC unit body */}
            <div className="loading-ac-body">
              <div className="loading-ac-vent" />
              <div className="loading-ac-vent" />
              <div className="loading-ac-vent" />
            </div>
            {/* Wind blowing down from the unit */}
            <div className="loading-ac-wind">
              <span className="loading-wind-line" />
              <span className="loading-wind-line" />
              <span className="loading-wind-line" />
            </div>
          </div>

          <div className="loading-bar-track">
            <div className="loading-bar-fill">
              <div className="loading-bar-frost" />
            </div>
          </div>

          <p className="loading-text">Cargando...</p>
        </div>
      </div>
    </div>
  );
}

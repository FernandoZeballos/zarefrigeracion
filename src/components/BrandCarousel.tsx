"use client";

import React from "react";

export const BrandCarousel = () => {
  const BRANDS = [
    "Daikin",
    "Mitsubishi Electric",
    "LG",
    "Panasonic",
    "Samsung",
    "Fujitsu",
    "Gree",
    "Midea",
    "Hisense",
    "Toshiba",
    "General",
    "Hitachi",
    "Trane",
    "Blue Star",
    "Voltas",
  ];

  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-6 relative z-20">
        <h3 className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-4 inline-block mx-auto max-w-max">
          Instalación y reparación multimarca
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group mt-4">
        {/* Gradient overlays for smooth fade effect at edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-linear-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-linear-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10" />

        {/* Marquee container that pauses on hover */}
        <div className="flex animate-marquee whitespace-nowrap group-hover:paused">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="mx-8 sm:mx-12 flex items-center justify-center transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 cursor-default select-none"
            >
              <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-slate-700 dark:text-slate-300">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

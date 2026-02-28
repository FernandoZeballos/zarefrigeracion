"use client";

import { useState, useCallback } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/constants/faq";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = useCallback((id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 relative bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md">
            <HelpCircle className="w-4 h-4" />
            Dudas Comunes
          </div>
          <h2
            id="faq-heading"
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Encontrá respuestas rápidas a tus inquietudes sobre nuestros
            servicios.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = faq.id === openIndex;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-slate-700/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500/30"
              >
                <button
                  id={buttonId}
                  className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer focus:outline-none"
                  onClick={() => {
                    toggleQuestion(faq.id);
                  }}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

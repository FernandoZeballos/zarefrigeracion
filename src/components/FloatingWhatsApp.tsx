"use client";

import { getContactInfo } from "@/utils/contact";
import { useEffect, useState } from "react";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after scrolling down a bit (reduces immediate visual noise)
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={getContactInfo().whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablá con nosotros por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 p-2.5 md:p-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 right-0 mt-0 mr-0">
        <span className="relative flex h-3.5 w-3.5 md:h-4 md:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-red-500 border-2"></span>
        </span>
      </div>
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md"
      />
      <span className="absolute right-full mr-4 bg-slate-900 dark:bg-slate-800 text-white text-sm font-semibold py-2 px-4 rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
        ¡Hablemos ahora!
      </span>
    </a>
  );
};

import { MessageCircle } from "lucide-react";

import { useState } from "react";

export const WhatsAppButton = () => {
  const [message] = useState(() => {
    // Verificar si estamos en el cliente y hay parámetros
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("ref") === "qr") {
        return "Hola! Escaneé tu tarjeta de presentación y quisiera hacer una consulta.";
      }
    }
    return "Hola! Estoy viendo tu web y necesito una consulta.";
  });

  return (
    <a
      href={`https://wa.me/5491137046458?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        ¡Hablemos ahora!
      </span>
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110 animate-bounce-slow">
        <MessageCircle className="w-8 h-8" />
      </div>
      {/* Ping effect */}
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </a>
  );
};

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cobran el presupuesto o la visita técnica?",
    answer:
      "Sí, la visita técnica inicial tiene un costo que se descuenta del presupuesto final en caso de que decidamos realizar el trabajo. Esto nos permite cubrir los gastos de traslado y el tiempo del profesional.",
  },
  {
    question: "¿En qué zonas brindan servicio?",
    answer:
      "Tenemos amplia zona de cobertura. Atendemos principalmente en Zona Oeste (Laferrere, González Catán, San Justo, Ramos Mejía, etc.) y CABA. Contáctanos por WhatsApp para consultar la disponibilidad exacta en tu localidad.",
  },
  {
    question: "¿Los trabajos tienen garantía?",
    answer:
      "Nuestros servicios de instalación y reparación cuentan con una garantía escrita. Al utilizar materiales de primera calidad y herramientas especializadas, aseguramos la durabilidad de nuestro trabajo.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos efectivo, transferencias bancarias y MercadoPago. Puedes consultarnos las opciones de financiación y promociones vigentes.",
  },
  {
    question: "¿Cuándo es necesario realizar un mantenimiento preventivo?",
    answer:
      "Recomendamos realizar un mantenimiento preventivo general al menos una vez al año, preferiblemente antes del inicio de la temporada de mayor uso (verano). Una limpieza de filtros mensual te ayudará a mantener el rendimiento.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md">
            <HelpCircle className="w-4 h-4" />
            Dudas Comunes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Encuentre respuestas rápidas a sus inquietudes sobre nuestros
            servicios.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-white/60 dark:border-slate-700/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500/30"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer focus:outline-none"
                onClick={() => {
                  setOpenIndex(index === openIndex ? null : index);
                }}
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                    index === openIndex ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                  index === openIndex
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

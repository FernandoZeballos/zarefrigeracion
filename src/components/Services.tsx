"use client";

import {
  Wrench,
  Snowflake,
  Fan,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { useState, useCallback, type ReactNode } from "react";
import { useKeyboardClose } from "@/hooks/useKeyboardClose";
import { SERVICES, type ServiceDetail } from "@/constants/services";

const SERVICE_ICONS: Record<ServiceDetail["iconName"], ReactNode> = {
  snowflake: <Snowflake className="w-8 h-8 text-blue-500" />,
  wrench: <Wrench className="w-8 h-8 text-cyan-500" />,
  fan: <Fan className="w-8 h-8 text-indigo-500" />,
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  useKeyboardClose(selectedService !== null, closeModal);

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="py-20 bg-white dark:bg-slate-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="servicios-heading"
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Mis Servicios
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Soluciones integrales para asegurar el confort en tu hogar o
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-slate-600 hover:-translate-y-3 cursor-pointer active:scale-95"
              onClick={() => {
                setSelectedService(service);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedService(service);
                }
              }}
            >
              <div className="mb-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl w-fit group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 transition-all duration-500 shadow-sm group-hover:shadow-md">
                {SERVICE_ICONS[service.iconName]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                Más detalles <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-60 flex items-start justify-center pt-16 px-4 pb-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg md:max-w-4xl w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Cerrar detalle del servicio"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4 md:mb-6 flex items-center gap-4 pr-8 shrink-0">
              <div className="p-2 md:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl shrink-0">
                {SERVICE_ICONS[selectedService.iconName]}
              </div>
              <h3
                id="modal-service-title"
                className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                {selectedService.title}
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6 overflow-y-auto flex-1 px-1 min-h-0 pb-4">
              <div className="space-y-3">
                {selectedService.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm md:text-lg leading-snug">{detail}</p>
                  </div>
                ))}
              </div>

              {selectedService.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                  <img
                    src={selectedService.image}
                    alt={`Imagen de ${selectedService.title}`}
                    className="w-full h-48 md:h-72 lg:h-112 object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            <button
              onClick={closeModal}
              className="w-full py-3.5 md:py-4 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-xl font-bold transition-colors text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform shrink-0 cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

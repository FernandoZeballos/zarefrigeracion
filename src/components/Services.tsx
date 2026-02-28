"use client";

import { Wrench, Snowflake, Fan, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type ReactNode } from "react";
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
          {SERVICES.map((service) => {
            const isExpanded = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                className={`group p-6 md:p-8 rounded-3xl transition-all duration-300 ease-out border-2 cursor-pointer ${
                  isExpanded
                    ? "bg-blue-50/50 dark:bg-blue-900/10 border-blue-400 dark:border-blue-500 shadow-md ring-4 ring-blue-500/10"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] active:bg-slate-50 dark:active:bg-slate-800/80"
                }`}
                onClick={() => {
                  setSelectedService(isExpanded ? null : service);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedService(isExpanded ? null : service);
                  }
                }}
              >
                <div
                  className={`mb-6 p-4 rounded-2xl w-fit transition-all duration-500 shadow-sm ${
                    isExpanded
                      ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 scale-110 -rotate-3"
                      : "bg-slate-50 dark:bg-slate-900/50 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 group-hover:shadow-md"
                  }`}
                >
                  {SERVICE_ICONS[service.iconName]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div
                  className={`flex items-center font-bold transition-all ${
                    isExpanded
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {isExpanded ? "Ocultar detalles" : "Ver más detalles"}
                  <ArrowRight
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      isExpanded ? "-rotate-90" : "group-hover:translate-x-2"
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-6"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4 pt-4 border-t-2 border-slate-100 dark:border-slate-800/60 mt-2">
                      <div className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 shadow-sm"
                          >
                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-sm md:text-base leading-snug font-medium">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {service.image && (
                        <div className="rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-md mt-6">
                          <img
                            src={service.image}
                            alt={`Imagen de ${service.title}`}
                            className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

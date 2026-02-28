"use client";

import { Send, Smartphone, Loader2, CheckCircle } from "lucide-react";
import { openPhone, openWhatsApp } from "@/utils/contact";
import { useContactForm } from "@/hooks/useContactForm";

const SERVICE_OPTIONS = [
  { id: "Instalación", label: "Instalación" },
  { id: "Mantenimiento", label: "Mantenimiento" },
  { id: "Reparación", label: "Reparación" },
  { id: "Otros", label: "Otros" },
];

export const Contact = () => {
  const {
    step,
    nextStep,
    prevStep,
    formData,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleServiceSelect,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="py-12 md:py-20 relative overflow-hidden scroll-mt-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:bg-blue-50/50 md:dark:bg-slate-800/40 md:backdrop-blur-2xl md:border md:border-blue-200/50 md:dark:border-slate-700/50 md:rounded-[3rem] md:p-16 overflow-hidden relative shadow-lg md:shadow-2xl transition-all">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 hidden md:block mix-blend-multiply dark:mix-blend-lighten"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 hidden md:block mix-blend-multiply dark:mix-blend-lighten"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2
                id="contacto-heading"
                className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up"
              >
                ¿Necesitas un técnico de Aire Acondicionado?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed animate-slide-up delay-100">
                Llegamos a tu domicilio con soluciones efectivas y rápidas.{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  La visita se bonifica al 100% si realizás el trabajo con
                  nosotros.
                </span>
              </p>

              <div className="space-y-4 animate-slide-up delay-200">
                <button
                  onClick={() => openWhatsApp()}
                  className="flex w-full items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm backdrop-blur-sm group border border-blue-100 dark:border-slate-700/50 text-left cursor-pointer active:scale-95 hover:shadow-md"
                >
                  <img
                    src="/whatsapp.png"
                    alt=""
                    className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate tracking-wide">
                      WhatsApp Directo
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white truncate">
                      Respondemos en 15 min
                    </p>
                  </div>
                </button>

                <button
                  onClick={openPhone}
                  className="w-full flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm backdrop-blur-sm group border border-blue-100 dark:border-slate-700/50 text-left cursor-pointer active:scale-95 hover:shadow-md"
                >
                  <div className="bg-blue-50 dark:bg-slate-900 p-3 rounded-full group-hover:bg-blue-500 transition-colors shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate tracking-wide">
                      Llamada Telefónica
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white truncate">
                      Llamar ahora
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white md:bg-white/95 dark:bg-slate-900/95 md:backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 mt-8 md:mt-0 relative min-h-[420px] flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {isSubmitted && "¡Mensaje Enviado!"}
                  {!isSubmitted && step === 1 && "¿En qué te ayudamos?"}
                  {!isSubmitted && step === 2 && "¿En qué zona estás?"}
                  {!isSubmitted && step === 3 && "Cotizar al instante"}
                </h3>

                {!isSubmitted && (
                  <div className="hidden sm:flex gap-1.5">
                    <div
                      className={`w-8 h-1.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"}`}
                    />
                    <div
                      className={`w-8 h-1.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"}`}
                    />
                    <div
                      className={`w-8 h-1.5 rounded-full transition-colors duration-300 ${step >= 3 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"}`}
                    />
                  </div>
                )}
              </div>

              {isSubmitted ? (
                <div className="text-center py-4 animate-fade-in flex-1 flex flex-col justify-center items-center">
                  <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    ¡Gracias!
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Se abrió tu WhatsApp. Te responderemos lo antes posible.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-bold transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col"
                  noValidate
                >
                  {step === 1 && (
                    <div className="animate-fade-in space-y-3 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICE_OPTIONS.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleServiceSelect(option.id)}
                            className={`p-4 rounded-2xl border text-left transition-all group ${
                              formData.servicio === option.id
                                ? "bg-blue-50 border-blue-500 shadow-sm dark:bg-blue-900/20 dark:border-blue-500"
                                : "bg-slate-50 border-slate-200 hover:border-blue-300 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-slate-500"
                            }`}
                          >
                            <span className="font-semibold block text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleServiceSelect("")}
                        className="w-full text-center text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-400 mt-4 transition-colors cursor-pointer font-medium p-2"
                      >
                        Pasar este paso
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in space-y-6 flex-1 flex flex-col justify-center">
                      <div>
                        <input
                          type="text"
                          name="zona"
                          value={formData.zona}
                          onChange={handleChange}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              if (formData.zona) nextStep();
                            }
                          }}
                          className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="Ej: Caballito, Morón, Belgrano..."
                          autoFocus
                        />
                      </div>
                      <div className="flex gap-3 mt-auto">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold transition-all cursor-pointer"
                        >
                          Atrás
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.zona}
                          className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white rounded-full font-bold transition-all cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-500/20 disabled:shadow-none"
                        >
                          Siguiente paso
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in space-y-4 flex-1 flex flex-col justify-center">
                      <div>
                        <input
                          type="text"
                          name="nombre"
                          required
                          autoComplete="name"
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="Tu nombre completo"
                          autoFocus
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="Tu celular (WhatsApp)"
                        />
                      </div>
                      <div className="flex gap-3 mt-auto pt-2">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold transition-all cursor-pointer"
                        >
                          Atrás
                        </button>
                        <button
                          type="submit"
                          disabled={
                            isSubmitting ||
                            !formData.nombre ||
                            !formData.telefono
                          }
                          className="flex-1 py-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 active:translate-y-0 cursor-pointer disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              Ver Tarifa
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {!isSubmitted && (
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 shrink-0">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-300">
                            JP
                          </div>
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-300">
                            ML
                          </div>
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-purple-600 dark:text-purple-300">
                            FR
                          </div>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 leading-tight">
                          <span className="font-semibold text-slate-700 dark:text-slate-300 dark:font-bold">
                            Alta satisfacción
                          </span>{" "}
                          - "Vinieron el mismo día y arreglaron la pérdida"
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

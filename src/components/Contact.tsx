import { MapPinned, Send, Smartphone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { openPhone, openWhatsApp } from "@/utils/contact";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { nombre, telefono, mensaje } = formData;

    // Validar que haya datos básicos
    if (!nombre || !telefono) return;

    // Validar origen
    const params = new URLSearchParams(window.location.search);
    const isFH = params.get("ref") === "qr";
    const origen = isFH ? "\n(Vengo de la tarjeta de presentación)" : "";

    const text = `Hola *Z.A.Refrigeracion*!\n\nMi nombre es: *${nombre}*\nMi teléfono: *${telefono}*\n\nConsulta:\n${mensaje}${origen}`;

    // Redirigir a WhatsApp

    // Redirigir a WhatsApp
    openWhatsApp(text);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      id="contacto"
      className="py-12 md:py-20 relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:bg-blue-50/50 md:dark:bg-slate-800/40 md:backdrop-blur-2xl md:border md:border-blue-200/50 md:dark:border-slate-700/50 md:rounded-[3rem] md:p-16 overflow-hidden relative shadow-lg md:shadow-2xl transition-all">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 hidden md:block mix-blend-multiply dark:mix-blend-lighten"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 hidden md:block mix-blend-multiply dark:mix-blend-lighten"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up">
                ¿Necesitas un técnico de Aire Acondicionado?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed animate-slide-up delay-100">
                Llegamos a tu domicilio con soluciones efectivas y rápidas en
                refrigeración y climatización.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed animate-slide-up delay-100">
                Contáctanos hoy mismo para un presupuesto rápido.{" "}
                <span className="animate-pulse font-semibold text-blue-600 dark:text-blue-400">
                  Respuesta inmediata garantizada.
                </span>
              </p>

              <div className="space-y-4 animate-slide-up delay-200">
                <button
                  onClick={() => {
                    openWhatsApp();
                  }}
                  className="flex w-full items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm backdrop-blur-sm group border border-blue-100 dark:border-slate-700/50 text-left cursor-pointer active:scale-95 hover:shadow-md"
                >
                  <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate tracking-wide">
                      WhatsApp Directo
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white truncate">
                      Chat de WhatsApp
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

                <a
                  href="https://www.google.com/maps/place/La+Matanza,+Provincia+de+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm backdrop-blur-sm group border border-blue-100 dark:border-slate-700/50 text-left cursor-pointer active:scale-95 hover:shadow-md"
                >
                  <div className="bg-indigo-50 dark:bg-slate-900 p-3 rounded-full group-hover:bg-indigo-500 transition-colors shrink-0">
                    <MapPinned className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate tracking-wide">
                      Ver mapa de cobertura
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white truncate">
                      CABA, Zona Oeste y GBA
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white md:bg-white/95 dark:bg-slate-900/95 md:backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 mt-8 md:mt-0 relative">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Envíame un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 pl-4">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 pl-4">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                    placeholder="Ej: 11 1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 pl-4">
                    Consulta
                  </label>
                  <textarea
                    rows={3}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                >
                  Enviar WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

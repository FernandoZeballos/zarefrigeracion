import { MapPinned, Send, Smartphone } from "lucide-react";
import { useState, type FormEvent } from "react";

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
    window.open(
      `https://wa.me/5491137046458?text=${encodeURIComponent(text)}`,
      "_blank",
    );
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
    <div id="contacto" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:bg-blue-600 md:dark:bg-blue-700 md:rounded-[3rem] md:p-16 overflow-hidden relative md:shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 hidden md:block"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 hidden md:block"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 md:text-white dark:text-white mb-6 animate-slide-up">
                ¿Necesitas un técnico?
              </h2>
              <p className="text-slate-600 md:text-blue-100 dark:text-slate-300 text-lg mb-8 leading-relaxed animate-slide-up delay-100">
                No dejes que el calor o tambien el frio te ganen, ¿Como nosotros
                podemos ayudarte?.
              </p>
              <p className="text-slate-600 md:text-blue-100 dark:text-slate-300 text-lg mb-8 leading-relaxed animate-slide-up delay-100">
                Contáctanos hoy mismo para un presupuesto sin cargo.{" "}
                <span className="animate-pulse font-semibold text-blue-600 md:text-white dark:text-blue-400">
                  Respondemos a la brevedad.
                </span>
              </p>

              <div className="space-y-4 animate-slide-up delay-200">
                <a
                  href="https://wa.me/5491137046458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 md:bg-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 md:hover:bg-white/20 rounded-full transition-colors shadow-sm md:shadow-none md:backdrop-blur-sm group border border-slate-100 dark:border-slate-700 md:border-transparent"
                >
                  <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 md:text-blue-200 truncate">
                      WhatsApp Directo
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white md:text-white truncate">
                      +54 9 11 3704-6458
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+5491137046458"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 md:bg-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 md:hover:bg-white/20 rounded-full transition-colors shadow-sm md:shadow-none md:backdrop-blur-sm group border border-slate-100 dark:border-slate-700 md:border-transparent"
                >
                  <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500 transition-colors shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 md:text-blue-200 truncate">
                      Llamada Telefónica
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white md:text-white truncate">
                      11 3704-6458
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 md:bg-white/10 rounded-full md:backdrop-blur-sm border border-slate-100 dark:border-slate-700 md:border-transparent shadow-sm md:shadow-none">
                  <div className="bg-indigo-500/10 p-3 rounded-full shrink-0">
                    <MapPinned className="w-6 h-6 text-indigo-600 dark:text-indigo-400 md:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400 md:text-blue-200 truncate">
                      Zona de Cobertura
                    </p>
                    <p className="font-bold text-lg text-slate-900 dark:text-white md:text-white truncate">
                      Buenos Aires (Zona Oeste/Capital)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:bg-white md:dark:bg-slate-900 md:p-8 md:rounded-3xl md:shadow-xl">
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
                    className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 placeholder:text-slate-400"
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
                    className="w-full px-6 py-4 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 placeholder:text-slate-400"
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
                    className="w-full px-6 py-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 resize-none placeholder:text-slate-400"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-full font-bold transition-colors flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl cursor-pointer"
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

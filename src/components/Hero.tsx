import { ShieldCheck, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <div
      id="inicio"
      className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Servicio Técnico Especializado
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 tracking-tight mb-7 pb-6 animate-fade-in">
            Instalación y Servicio Técnico de Aire Acondicionado
          </h1>

          <h2 className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed animate-fade-in delay-100">
            Expertos en <strong>mantenimiento, reparación e instalación</strong>{" "}
            de equipos Split y Centrales. Servicio profesional, rápido y
            garantizado en <strong>CABA y Zona Oeste</strong> para el máximo
            confort de tu hogar o empresa.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-[linear-gradient(110deg,#2563eb,45%,#60a5fa,55%,#2563eb)] bg-size-[200%_100%] animate-shine text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2 animate-slide-up delay-200"
            >
              <Clock className="w-5 h-5 animate-pulse" />
              Solicitar Presupuesto
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full font-bold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 active:scale-95 animate-slide-up delay-300"
            >
              <ShieldCheck className="w-5 h-5" />
              Ver Servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div>
              <p className="font-bold text-2xl text-slate-900 dark:text-white">
                +2 Años
              </p>
              <p className="text-sm font-semibold animate-pulse text-blue-600 dark:text-blue-400">
                Experiencia
              </p>
            </div>
            <div>
              <p className="font-bold text-2xl text-slate-900 dark:text-white">
                100%
              </p>
              <p className="text-sm font-semibold animate-pulse text-blue-600 dark:text-blue-400">
                Garantizado
              </p>
            </div>
            <div>
              <p className="font-bold text-2xl text-slate-900 dark:text-white">
                24h
              </p>
              <p className="text-sm font-semibold animate-pulse text-blue-600 dark:text-blue-400">
                Respuesta
              </p>
            </div>
            <div>
              <p className="font-bold text-2xl text-slate-900 dark:text-white">
                Certificado
              </p>
              <p className="text-sm font-semibold animate-pulse text-blue-600 dark:text-blue-400">
                Matriculado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

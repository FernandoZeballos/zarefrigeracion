import {
  Wrench,
  Snowflake,
  Fan,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Snowflake className="w-8 h-8 text-blue-500" />,
    title: "Instalación de Equipos",
    description:
      "Montaje profesional de aires acondicionados split y ventana. Ubicación estratégica para mayor eficiencia.",
    details: [
      "Instalación Matriculada: Cumplimos con todas las normativas para validar la garantía de tu equipo.",
      "Uso de Bomba de Vacío: Fundamental para eliminar la humedad del circuito y asegurar la vida útil del motor (muchos técnicos omiten este paso vital).",
      "Materiales de Primera: Utilizamos cañería de cobre de espesor reglamentario y aislantes de alta densidad.",
      "Prolijidad y Limpieza: Cuidamos tu casa como si fuera la nuestra. Terminaciones estéticas y limpieza post-instalación.",
    ],
  },
  {
    icon: <Wrench className="w-8 h-8 text-cyan-500" />,
    title: "Mantenimiento Preventivo",
    description:
      "Limpieza profunda de filtros, control de gas y verificación eléctrica para extender la vida útil de tu equipo.",
    details: [
      "Limpieza Profunda: Desarme de unidad interior para limpieza de turbina, filtros y radiador con productos antibacterianos.",
      "Control de Presiones: Verificación de carga de gas refrigerante para asegurar que enfríe como el primer día.",
      "Chequeo Eléctrico: Medición de consumo (amperaje) y ajuste de conexiones para prevenir cortocircuitos.",
      "Ahorro de Energía: Un equipo limpio y a punto consume mucha menos electricidad.",
    ],
  },
  {
    icon: <Fan className="w-8 h-8 text-indigo-500" />,
    title: "Reparaciones Generales",
    description:
      "Diagnóstico y solución de fallas: fugas de gas, placas electrónicas, cambios de capacitor y más.",
    details: [
      "Diagnóstico Certero: Utilizamos herramientas de precisión para detectar la falla real, sin adivinanzas.",
      "Fugas de Gas: No solo recargamos, buscamos y reparamos la pérdida con nitrógeno a alta presión.",
      "Reparación de Placas: Solución a problemas electrónicos, códigos de error y fallas de encendido.",
      "Garantía de Reparación: Respaldamos nuestro trabajo para tu tranquilidad.",
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <div id="servicios" className="py-20 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Soluciones integrales para asegurar el confort en tu hogar o
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                setSelectedService(service);
              }}
            >
              <div className="mb-6 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                Más detalles <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg md:max-w-2xl w-full p-5 md:p-10 relative animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={() => {
                setSelectedService(null);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4 md:mb-6 flex items-center gap-4 pr-8 shrink-0">
              <div className="p-2 md:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl shrink-0">
                {selectedService.icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                {selectedService.title}
              </h3>
            </div>

            <div className="space-y-3 mb-6 overflow-y-auto flex-1 px-1 min-h-0">
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

            <button
              onClick={() => {
                setSelectedService(null);
              }}
              className="w-full py-3.5 md:py-4 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-xl font-bold transition-colors text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform shrink-0"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

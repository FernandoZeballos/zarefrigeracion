import { useState } from "react";
import { UserPlus, X } from "lucide-react";
import { openWhatsApp, getContactInfo } from "@/utils/contact";

export const Footer = () => {
  const { qrUrl } = getContactInfo();
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <a
            href="#inicio"
            className="h-32 flex items-center cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src="/logo.jpg"
              alt="Z.A. Refrigeración"
              className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 dark:brightness-110 contrast-125"
            />
          </a>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm font-medium text-slate-900 dark:text-white text-center">
                Guardá mi contacto
              </p>
              <div className="bg-white p-2 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none hover:scale-105 transition-transform cursor-pointer relative group">
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  title="Click para ver opciones de contacto"
                >
                  <img
                    src={qrUrl}
                    alt="Escanear para agregar contacto"
                    className="w-32 h-32"
                  />
                </div>
              </div>
              <p className="text-xs text-blue-500 font-semibold animate-pulse">
                (Haz click en el QR)
              </p>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right">
              <p>
                © {new Date().getFullYear()} Z.A.Refrigeracion. Todos los
                derechos reservados.
              </p>
              <p className="mt-1">Servicio técnico matriculado.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Options Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800 text-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full animate-bounce">
                <UserPlus className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              ¡Hola!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Escribinos directo por WhatsApp para agendarnos y responder tu
              consulta.
              <br />
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Somos Z.A. Refrigeración
              </span>
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  openWhatsApp(
                    "Hola Z.A. Refrigeración! Les escribo para agendar su contacto y tenerlos a mano para futuros trabajos.",
                  );
                  setShowModal(false);
                }}
                className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 active:scale-95"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-6 h-6 invert brightness-0"
                />
                Ir al chat de WhatsApp
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="w-full py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold transition-colors active:scale-95"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

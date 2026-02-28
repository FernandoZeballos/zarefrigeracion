"use client";

import { useState, useCallback } from "react";
import { UserPlus, X } from "lucide-react";
import { openWhatsApp, getContactInfo } from "@/utils/contact";
import { useKeyboardClose } from "@/hooks/useKeyboardClose";

export const Footer = () => {
  const { qrUrl } = getContactInfo();
  const [showModal, setShowModal] = useState(false);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  useKeyboardClose(showModal, closeModal);

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <a
            href="#inicio"
            className="h-32 flex items-center cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src="/logo.png"
              alt="Z.A. Refrigeración — Ir al inicio"
              className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 dark:brightness-110 contrast-125"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm font-medium text-slate-900 dark:text-white text-center">
                Guardá mi contacto
              </p>
              <div className="bg-white p-2 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none hover:scale-105 transition-transform cursor-pointer relative group">
                <button
                  onClick={openModal}
                  aria-label="Ver opciones de contacto"
                  className="cursor-pointer"
                >
                  <img
                    src={qrUrl}
                    alt="Código QR para agregar contacto de Z.A. Refrigeración"
                    className="w-32 h-32"
                    loading="lazy"
                  />
                </button>
              </div>
              <p className="text-xs text-blue-500 font-semibold">
                (Hacé click en el QR)
              </p>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Z.A. Refrigeración
              </p>
              <p>Área de servicio: Buenos Aires (CABA, Zona Oeste y GBA)</p>
              <p>Tel: +54 9 11 6143-2681</p>
              <p className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                © {new Date().getFullYear()} Z.A. Refrigeración. Todos los
                derechos reservados.
              </p>
              <p>Maestro mayor de obra, instalador de aires acondicionados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Options Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800 text-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              aria-label="Cerrar ventana de contacto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full animate-bounce">
                <UserPlus className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <h3
              id="footer-modal-title"
              className="text-xl font-bold text-slate-900 dark:text-white mb-3"
            >
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
                  closeModal();
                }}
                className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <img
                  src="/whatsapp.png"
                  alt=""
                  className="w-6 h-6 invert brightness-0"
                />
                Ir al chat de WhatsApp
              </button>
              <button
                onClick={closeModal}
                className="w-full py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold transition-colors active:scale-95 cursor-pointer"
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

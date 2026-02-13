import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { openPhone, openWhatsApp } from "@/utils/contact";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <a
            href="#inicio"
            className="h-24 flex items-center cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src="/LogoA.jpeg"
              alt="Z.A. Refrigeración"
              className="h-full w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 dark:brightness-110 contrast-125"
            />
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#inicio"
              className="px-3 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all duration-300"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="px-3 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all duration-300"
            >
              Servicios
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={openPhone}
                className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 animate-pulse text-blue-600" />
                <span>Llamar ahora</span>
              </button>
              <a
                href="#contacto"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-100 dark:border-slate-800 animate-in slide-in-from-top-5 fade-in duration-200 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a
              href="#inicio"
              className="block px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium active:scale-95 duration-200"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="block px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium active:scale-95 duration-200"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Servicios
            </a>
            <button
              onClick={openPhone}
              className="w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 duration-200"
            >
              📞 Llamar ahora
            </button>
            <button
              onClick={() => {
                openWhatsApp();
              }}
              className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-green-600 font-medium hover:bg-green-50 dark:hover:bg-green-900/20 active:scale-95 duration-200"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
              WhatsApp
            </button>
            <a
              href="#contacto"
              className="block px-4 py-3 rounded-xl text-blue-600 font-bold bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 active:scale-95 duration-200 mt-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

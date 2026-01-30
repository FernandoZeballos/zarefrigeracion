import { Snowflake, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <Snowflake className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              Z.A.Refrigeracion
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#inicio"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Servicios
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="tel:+5491137046458"
                className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>11 3704-6458</span>
              </a>
              <a
                href="#contacto"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
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
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-500"
            >
              Servicios
            </a>
            <a
              href="tel:+5491137046458"
              className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-500 font-medium"
            >
              📞 Llamar ahora
            </a>
            <a
              href="https://wa.me/5491137046458"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-green-600 font-medium hover:text-green-700"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 text-blue-600 font-medium"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

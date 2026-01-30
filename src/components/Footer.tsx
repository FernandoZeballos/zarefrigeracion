import { Snowflake } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <Snowflake className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              Z.A.Refrigeracion
            </span>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Guardá mi contacto
              </p>
              <div className="bg-white p-2 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-none">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://zarefrigeracion.com.ar/?ref=qr"
                  alt="QR Code"
                  className="w-32 h-32"
                />
              </div>
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
    </footer>
  );
};

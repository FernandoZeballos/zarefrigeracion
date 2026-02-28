export interface ServiceDetail {
  id: string;
  iconName: "snowflake" | "wrench" | "fan";
  title: string;
  description: string;
  details: string[];
  image?: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "instalacion",
    image: "/instalacion.png",
    iconName: "snowflake",
    title: "Instalación de Equipos",
    description:
      "Montaje profesional de aires acondicionados split y ventana. Ubicación estratégica para mayor eficiencia.",
    details: [
      "Instalación Especializada: Cumplimos con todas las normativas para validar la garantía de tu equipo bajo supervisión de un Maestro Mayor de Obra.",
      "Uso de Bomba de Vacío: Fundamental para eliminar la humedad del circuito y asegurar la vida útil del motor (muchos técnicos omiten este paso vital).",
      "Materiales de Primera: Utilizamos cañería de cobre de espesor reglamentario y aislantes de alta densidad.",
      "Prolijidad y Limpieza: Cuidamos tu casa como si fuera la nuestra. Terminaciones estéticas y limpieza post-instalación.",
    ],
  },
  {
    id: "mantenimiento",
    image: "/mantenimiento.png",
    iconName: "wrench",
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
    id: "reparaciones",
    image: "/reparacion.png",
    iconName: "fan",
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

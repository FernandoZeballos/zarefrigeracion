export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "presupuesto",
    question: "¿Cobran el presupuesto o la visita técnica?",
    answer:
      "La visita para presupuestar es sin cargo. Sin embargo, si el trabajo es aprobado, el equipo técnico asiste al lugar y luego decides cancelar la obra, se cobrará el costo de la visita para cubrir los gastos de traslado y el tiempo del profesional.",
  },
  {
    id: "zonas",
    question: "¿En qué zonas brindan servicio?",
    answer:
      "Tenemos amplia zona de cobertura. Atendemos principalmente en Zona Oeste (Laferrere, González Catán, San Justo, Ramos Mejía, etc.) y CABA. Contáctanos por WhatsApp para consultar la disponibilidad exacta en tu localidad.",
  },
  {
    id: "garantia",
    question: "¿Los trabajos tienen garantía?",
    answer:
      "Nuestros servicios de instalación y reparación cuentan con una garantía escrita. Al utilizar materiales de primera calidad y herramientas especializadas, aseguramos la durabilidad de nuestro trabajo.",
  },
  {
    id: "pagos",
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos efectivo, transferencias bancarias y MercadoPago. Puedes consultarnos las opciones de financiación y promociones vigentes.",
  },
  {
    id: "mantenimiento",
    question: "¿Cuándo es necesario realizar un mantenimiento preventivo?",
    answer:
      "Recomendamos realizar un mantenimiento preventivo general al menos una vez al año, preferiblemente antes del inicio de la temporada de mayor uso (verano). Una limpieza de filtros mensual te ayudará a mantener el rendimiento.",
  },
];

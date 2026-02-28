import type { Metadata } from "next";
import Script from "next/script";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";
export const metadata: Metadata = {
  title:
    "Z.A. Refrigeración - Servicio Técnico de Aire Acondicionado en Buenos Aires",
  description:
    "Servicio técnico oficial en refrigeración. Instalador de aires acondicionados (Split y Centrales) en Buenos Aires, Zona Oeste y CABA. Atención rápida por maestro mayor de obra.",
  keywords: [
    "aire acondicionado",
    "refrigeración",
    "servicio técnico",
    "reparación de aires",
    "instalación split",
    "mantenimiento",
    "carga de gas",
    "limpiar filtros",
    "Z.A. Refrigeración",
    "Buenos Aires",
    "Zona Oeste",
    "CABA",
    "climatización",
    "maestro mayor de obra",
    "instalador de aires acondicionados",
    "instalación de aires acondicionados",
  ],
  authors: [{ name: "Z.A. Refrigeración" }],
  robots: "index, follow",
  verification: {
    google: "NhtfirFyAw_j45GPDbawdc_UtaUHkKR634ZSxsXNm8o",
  },
  alternates: {
    canonical: "https://zarefrigeracion.com.ar/",
  },
  openGraph: {
    type: "website",
    url: "https://zarefrigeracion.com.ar/",
    title: "Z.A. Refrigeración - Expertos en Climatización",
    description:
      "Maestro mayor de obra, instalador de aires acondicionados. Soluciones rápidas y garantizadas en instalación y reparación para tu hogar o empresa.",
    images: ["https://zarefrigeracion.com.ar/logo.png"],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z.A. Refrigeración - Servicio Técnico",
    description:
      "Servicio técnico profesional de aires acondicionados. Instalación, mantenimiento y reparación en el día.",
    images: ["https://zarefrigeracion.com.ar/logo.png"],
  },
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Buenos Aires",
    "geo.position": "-34.6037;-58.3816",
    ICBM: "-34.6037, -58.3816",
  },
};

const HVAC_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Z.A. Refrigeración",
  image: "https://zarefrigeracion.com.ar/logo.png",
  logo: "https://zarefrigeracion.com.ar/logo.png",
  telephone: "+54 9 11 6143-2681",
  email: "z.arefrigeracion@gmail.com",
  url: "https://zarefrigeracion.com.ar/",
  priceRange: "$$",
  description:
    "Instalador de aires acondicionados y servicio técnico especialista en refrigeración. Instalación, mantenimiento y reparación por un maestro mayor de obra en Buenos Aires.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-34.6037",
    longitude: "-58.3816",
  },
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "City", name: "Zona Oeste" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: ["https://wa.me/5491161432681"],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cobran el presupuesto o la visita técnica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La visita para presupuestar es sin cargo. Sin embargo, si el trabajo es aprobado, el equipo técnico asiste al lugar y luego decides cancelar la obra, se cobrará el costo de la visita para cubrir los gastos de traslado y el tiempo del profesional.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas brindan servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tenemos amplia zona de cobertura. Atendemos principalmente en Zona Oeste (Laferrere, González Catán, San Justo, Ramos Mejía, etc.) y CABA. Contáctanos por WhatsApp para consultar la disponibilidad exacta en tu localidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los trabajos tienen garantía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros servicios de instalación y reparación cuentan con una garantía escrita. Al utilizar materiales de primera calidad y herramientas especializadas, aseguramos la durabilidad de nuestro trabajo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las formas de pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aceptamos efectivo, transferencias bancarias y MercadoPago. Puedes consultarnos las opciones de financiación y promociones vigentes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es necesario realizar un mantenimiento preventivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos realizar un mantenimiento preventivo general al menos una vez al año, preferiblemente antes del inicio de la temporada de mayor uso (verano). Una limpieza de filtros mensual te ayudará a mantener el rendimiento.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Script
          id="dark-mode-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        {children}
        <FloatingWhatsApp />
        {/* JSON-LD structured data — placed in body per Next.js recommendation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(HVAC_BUSINESS_SCHEMA),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(FAQ_SCHEMA),
          }}
        />
      </body>
    </html>
  );
}

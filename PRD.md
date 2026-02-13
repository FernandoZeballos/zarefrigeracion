# PRD - Z.A. Refrigeración

## 1. Descripción del Producto
**Z.A. Refrigeración** es una página web promocional para un servicio técnico especializado en climatización. Su objetivo principal es captar clientes potenciales y facilitar el contacto directo con el técnico a través de WhatsApp y llamadas telefónicas.

## 2. Público Objetivo
- Propietarios de viviendas en CABA y GBA Zona Oeste (Argentina)
- Personas que necesitan instalación, mantenimiento o reparación de aires acondicionados
- Usuarios que buscan un técnico matriculado y confiable

## 3. Funcionalidades Principales

### 3.1 Navegación (Navbar)
- Logo de la empresa
- Enlaces a secciones: Inicio, Servicios, Contacto
- Soporte para modo oscuro/claro
- Navegación responsive para móviles

### 3.2 Hero Section
- Título principal promocional
- Descripción del servicio
- Botones CTA: "Solicitar Presupuesto" y "Ver Servicios"
- Indicadores de confianza:
  - +2 Años de experiencia
  - 100% Garantizado
  - 24h de respuesta
  - Técnico Matriculado

### 3.3 Servicios
Tres tarjetas interactivas con modal de detalles:

**Instalación de Equipos:**
- Instalación matriculada (cumple normativas)
- Uso de bomba de vacío
- Materiales de primera calidad
- Prolijidad y limpieza

**Mantenimiento Preventivo:**
- Limpieza profunda con productos antibacterianos
- Control de presiones y carga de gas
- Chequeo eléctrico
- Optimización de consumo energético

**Reparaciones Generales:**
- Diagnóstico con herramientas de precisión
- Detección y reparación de fugas de gas
- Reparación de placas electrónicas
- Garantía de reparación

### 3.4 Contacto
- **Formulario de contacto** con campos:
  - Nombre (requerido)
  - Teléfono (requerido)
  - Mensaje/Consulta (opcional)
- **Botón WhatsApp directo** - Abre chat con mensaje pre-formateado
- **Botón llamada telefónica** - Inicia llamada directa
- **Zona de cobertura** - CABA y GBA Zona Oeste
- El formulario envía los datos vía WhatsApp

### 3.5 Footer
- Información de copyright
- Enlaces relevantes

## 4. Requisitos Técnicos

### Stack Tecnológico
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Estilos:** Tailwind CSS 4
- **Iconos:** Lucide React
- **Hosting:** Estático (dist/)

### Requisitos de UX
- Diseño responsive (mobile-first)
- Soporte para modo oscuro
- Animaciones suaves (hover, transiciones)
- Efectos visuales: fondo con patrón de puntos, efecto parallax con mouse

## 5. Flujos de Usuario

### Flujo Principal: Solicitar Presupuesto
1. Usuario llega a la página (Hero)
2. Lee información del servicio
3. Hace clic en "Solicitar Presupuesto" o navega a Contacto
4. Completa formulario con nombre y teléfono
5. Hace clic en "Enviar WhatsApp"
6. Se abre WhatsApp con mensaje pre-formateado
7. Usuario envía mensaje al técnico

### Flujo Alternativo: Contacto Directo
1. Usuario llega a la página
2. Hace clic en botón de WhatsApp o Llamar
3. Se comunica directamente con el técnico

### Flujo de Información: Ver Servicios
1. Usuario navega a sección Servicios
2. Hace clic en una tarjeta de servicio
3. Se abre modal con detalles del servicio
4. Usuario lee información y cierra modal

## 6. Parámetros de Tracking
- `?ref=qr` - Indica que el usuario viene de la tarjeta de presentación física

## 7. Criterios de Éxito
- Carga rápida (< 3 segundos)
- Funciona correctamente en móviles
- Formulario envía correctamente a WhatsApp
- SEO optimizado (meta tags configurados)
- Google Site Verification configurado

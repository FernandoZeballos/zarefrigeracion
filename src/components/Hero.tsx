"use client";

import { useState, useEffect } from "react";
import { Clock, Snowflake } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { AcUnit3D } from "./AcUnit3D";

const TRUST_BADGES = [
  { value: "+2 Años", label: "Experiencia" },
  { value: "100%", label: "Garantizado" },
  { value: "24h", label: "Respuesta" },
  { value: "Certificado", label: "M. Mayor de Obra" },
] as const;

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-dvh lg:min-h-screen flex items-end pb-4 lg:pb-24 overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-blue-950 dark:to-slate-900"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none will-change-transform">
        <div className="w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-full bg-linear-to-br from-blue-200/20 via-cyan-100/10 to-blue-50/5 dark:from-blue-400/20 dark:via-cyan-300/10 dark:to-white/5 blur-2xl md:blur-[60px] animate-blob"></div>
      </div>
      <div className="absolute top-1/3 right-[15%] pointer-events-none will-change-transform">
        <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-linear-to-t from-blue-100/20 via-cyan-200/10 to-transparent dark:from-white/10 dark:via-blue-200/5 dark:to-transparent blur-[30px] md:blur-[50px] animate-blob animation-delay-2000"></div>
      </div>
      <div className="absolute bottom-0 left-[20%] pointer-events-none">
        <div className="w-[400px] h-[400px] bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-[50px]"></div>
      </div>

      {/* Subtle noise/grain overlay - Reduced opacity for performance */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-[0.02] dark:opacity-30 pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 lg:pt-48 pb-6 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-white/10 backdrop-blur-md text-blue-700 dark:text-blue-200 text-sm font-semibold mb-8 border border-blue-200/50 dark:border-white/10 animate-fade-in">
              <Snowflake className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
              Servicio Técnico Especializado
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 animate-fade-in leading-[1.05]"
            >
              <span className="italic font-light text-slate-500 dark:text-cyan-300 block mb-2 text-3xl md:text-4xl">
                Solución Inmediata
              </span>
              <span className="text-slate-900 dark:text-white">
                Tu Aire Listo{" "}
              </span>
              <span className="text-blue-600 dark:text-cyan-400">
                Hoy. Sin Vueltas.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed max-w-xl animate-fade-in delay-100 font-medium">
              Instalación y reparación en el día para{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                CABA y GBA
              </span>
              . Presupuestos transparentes y sin sorpresas. Maestro mayor de
              obra, instalador de aires acondicionados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 animate-slide-up delay-200 mt-10">
              <a
                href="#contacto"
                className="group px-8 py-4 bg-blue-600 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/20 dark:shadow-white/10 hover:shadow-blue-500/40 dark:hover:shadow-white/25 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:w-max w-full"
              >
                <Clock className="w-5 h-5 text-blue-200 dark:text-blue-600 group-hover:rotate-12 transition-transform" />
                Solicitar Visita Técnica
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium sm:ml-4 text-center sm:text-left">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Respondemos en 15 minutos por WhatsApp
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-6 sm:gap-x-12 border-t border-slate-200 dark:border-white/10 pt-8 text-center sm:text-left">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.label} className="flex flex-col gap-1">
                  <p className="font-bold text-2xl text-slate-900 dark:text-white">
                    {badge.value}
                  </p>
                  <p className="text-sm font-medium text-blue-600 dark:text-cyan-400">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas */}
          <div className="hidden lg:flex justify-end items-center relative h-[500px] w-full max-w-lg">
            <div
              className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/10 dark:hover:bg-cyan-400/10 blur-3xl transition-colors duration-700 rounded-full scale-75 
                            pointer-events-none z-0"
            ></div>

            {/* The 3D Canvas wrapper */}
            <div className="w-full h-full relative cursor-grab active:cursor-grabbing z-10">
              {isMounted && (
                <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow
                  />

                  {/* Environment mapping for realistic reflections on the AC case */}
                  <Environment preset="city" />

                  {/* Float makes the AC slowly bob up and down while rotating slightly */}
                  <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    {/* We pass a slight default rotation so it looks nice on load */}
                    <AcUnit3D rotation={[0.1, -0.6, 0]} />
                  </Float>

                  {/* Nice soft shadow below the floating unit */}
                  <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.5}
                    scale={15}
                    blur={2.5}
                    far={4}
                  />

                  {/* Mouse controls! */}
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                  />
                </Canvas>
              )}

              {/* Floating tech element tooltip for UI blend */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-sm font-bold text-slate-800 dark:text-cyan-300 rounded-xl shadow-xl border border-white/40 dark:border-white/20 pointer-events-none">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  Girá el equipo en 360°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

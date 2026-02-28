"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandCarousel } from "@/components/BrandCarousel";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MouseBackground } from "@/components/MouseBackground";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FadeIn } from "@/components/FadeIn";

const LOADING_DURATION_MS = 2500;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION_MS);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/20 relative">
      <LoadingScreen isLoading={isLoading} />
      <MouseBackground />
      <Navbar />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <FadeIn delay={100}>
          <BrandCarousel />
        </FadeIn>
        <FadeIn delay={200}>
          <Services />
        </FadeIn>
        <FadeIn delay={200}>
          <FAQ />
        </FadeIn>
        <FadeIn delay={200}>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

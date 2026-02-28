"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }, // Trigger when 10% is visible
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Determine starting transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-16";
      case "down":
        return "-translate-y-16";
      case "left":
        return "translate-x-16";
      case "right":
        return "-translate-x-16";
      case "none":
        return "";
      default:
        return "translate-y-16";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${getInitialTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

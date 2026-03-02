"use client";

import { useEffect, useRef } from "react";

export const MouseBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to update position
    const updatePosition = (x: number, y: number) => {
      if (!blobRef.current) return;
      blobRef.current.animate(
        {
          transform: `translate(${String(x)}px, ${String(y)}px)`,
        },
        {
          duration: 300,
          fill: "forwards",
        },
      );
    };

    // Initialize at center
    if (blobRef.current) {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      updatePosition(x, y);
    }

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] bg-transparent dark:bg-cyan-500/10 rounded-full blur-[60px] will-change-transform"
        style={{
          left: -300,
          top: -300,
        }}
      />
    </div>
  );
};

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

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] will-change-transform"
        style={{
          left: -300,
          top: -300,
        }}
      />
    </div>
  );
};

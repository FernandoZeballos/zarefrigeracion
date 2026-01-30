import { useEffect, useRef } from "react";

export const MouseBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

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

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

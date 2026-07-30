"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };

    let raf: number;
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    const grow = () => {
      ring.style.width = "64px";
      ring.style.height = "64px";
      ring.style.borderColor = "rgba(255,255,255,0.7)";
    };
    const shrink = () => {
      ring.style.width = "38px";
      ring.style.height = "38px";
      ring.style.borderColor = "rgba(255,255,255,0.35)";
    };

    window.addEventListener("mousemove", move);

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("a, button, [data-cursor-hover]")) grow();
    };
    const handleOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("a, button, [data-cursor-hover]")) shrink();
    };
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

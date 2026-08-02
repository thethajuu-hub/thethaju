"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring || !text) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };

    let raf: number;
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      const transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%,-50%)`;
      ring.style.transform = transform;
      text.style.transform = transform;
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
    const expandWithText = (label: string) => {
      ring.style.width = "96px";
      ring.style.height = "96px";
      ring.style.borderColor = "rgba(255,255,255,0.9)";
      ring.style.backgroundColor = "rgba(255,255,255,0.05)";
      text.textContent = label;
      text.style.opacity = "1";
      dot.style.opacity = "0";
    };
    const resetFromText = () => {
      ring.style.backgroundColor = "transparent";
      text.style.opacity = "0";
      dot.style.opacity = "1";
      shrink();
    };

    window.addEventListener("mousemove", move);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const textTarget = target?.closest("[data-cursor-text]") as HTMLElement | null;
      if (textTarget) {
        expandWithText(textTarget.dataset.cursorText || "View");
        return;
      }
      if (target?.closest("a, button, [data-cursor-hover]")) grow();
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest("[data-cursor-text]")) {
        resetFromText();
        return;
      }
      if (target?.closest("a, button, [data-cursor-hover]")) shrink();
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
      <span
        ref={textRef}
        className="custom-cursor-text pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-body text-xs font-semibold uppercase tracking-widest2 text-paper opacity-0 transition-opacity duration-200 [mix-blend-mode:difference]"
      />
    </>
  );
}

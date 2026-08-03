"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-cursor-hover
    >
      <Tag
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={clsx(
          "group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide font-body transition-colors duration-500 ease-premium rounded-full border",
          variant === "solid"
            ? "bg-paper text-ink border-paper hover:bg-transparent hover:text-paper"
            : "bg-transparent text-paper border-line hover:border-white/40 hover:bg-white/5",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

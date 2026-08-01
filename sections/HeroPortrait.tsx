"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroPortrait() {
  const [broken, setBroken] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-sm md:max-w-md [perspective:1200px]"
    >
      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
        className="relative aspect-[4/5] w-full"
      >
        {/* Ambient glow behind the portrait, monochrome only */}
        <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-white/5 blur-3xl" />

        <div
          className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-card"
          style={{
            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        >
          {!broken ? (
            <Image
              src="/profile.jpg"
              alt="Mhd Thaju — AI Web Developer"
              fill
              priority
              onError={() => setBroken(true)}
              className="object-cover object-top grayscale contrast-125 brightness-[0.92]"
              sizes="(max-width: 768px) 80vw, 420px"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#0d0d0d] to-black text-center">
              <span className="font-display text-4xl text-line">TT</span>
              <span className="px-8 font-body text-xs text-subtle">
                Add /public/profile.jpg to show the portrait here
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

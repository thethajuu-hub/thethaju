"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { brand } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });
const HeroPortrait = dynamic(() => import("./HeroPortrait"), { ssr: false });

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-body font-medium text-xs text-muted">{brand.availability}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-eyebrow mb-6"
          >
            Based in Dubai, UAE
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 font-body text-lg md:text-xl font-medium text-muted"
          >
            {brand.role}
          </motion.p>

          <h1 className="font-display font-black tracking-tight leading-[0.92] text-paper">
            <span className="block overflow-hidden text-[clamp(2.5rem,11vw,3.5rem)] md:text-[clamp(3.5rem,7vw,4.5rem)] lg:text-[clamp(4.5rem,6vw,6rem)]">
              <motion.span custom={0} variants={reveal} initial="hidden" animate="show" className="block">
                THE
              </motion.span>
            </span>
            <span className="block overflow-hidden text-[clamp(2.5rem,11vw,3.5rem)] md:text-[clamp(3.5rem,7vw,4.5rem)] lg:text-[clamp(4.5rem,6vw,6rem)]">
              <motion.span custom={1} variants={reveal} initial="hidden" animate="show" className="block text-subtle">
                Thaju
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-lg font-body font-normal leading-relaxed text-base md:text-lg text-muted"
          >
            Building premium AI-powered websites with modern web technologies &mdash;
            for brands that want their site to feel as considered as their business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-lg font-body font-normal leading-relaxed text-sm text-subtle"
          >
            {brand.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <MagneticButton href="#work" variant="solid">
              View Work
            </MagneticButton>
            <MagneticButton href="#connect" variant="outline">
              Let&rsquo;s Connect
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <HeroPortrait />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[0.65rem] tracking-widest2 text-muted">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

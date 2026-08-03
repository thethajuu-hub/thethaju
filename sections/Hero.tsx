"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { brand } from "@/lib/data";

const HeroPortrait = dynamic(() => import("./HeroPortrait"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:pt-24 md:pb-20">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 backdrop-blur-sm px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-body font-medium text-xs text-muted">{brand.availability}</span>
            <span className="h-3 w-px bg-line" />
            <span className="font-body text-xs text-subtle">Dubai, UAE</span>
          </motion.div>

          {/* Small intro line — kept light so it doesn't compete with the headline */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display font-medium tracking-tight leading-snug text-paper/90 text-[clamp(1.05rem,1.6vw,1.375rem)] flex flex-wrap items-center gap-2"
          >
            Hi! I&rsquo;m{" "}
            <span className="inline-flex items-center rounded-full bg-white text-ink px-3.5 py-1 align-middle text-[0.95em] font-semibold">
              Thajudheen
            </span>
          </motion.p>

          {/* Headline — the dominant, large, bold statement */}
          <motion.h1
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 font-display font-black tracking-tight leading-[1.15] text-paper text-[clamp(1.875rem,4.4vw,3.25rem)]"
          >
            <span className="block mb-3 w-fit rounded-full border border-line bg-card/80 backdrop-blur-sm px-5 py-2 align-middle font-body font-semibold tracking-normal text-muted text-[clamp(1.125rem,2.4vw,1.75rem)]">
              Digital Designer &amp; Developer
            </span>
            Premium websites for modern businesses.
          </motion.h1>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md font-body font-normal leading-relaxed text-sm text-muted"
          >
            {brand.statement}
          </motion.p>

          <motion.div
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10"
          >
            <MagneticButton href="#projects" variant="outline" className="px-6 py-3">
              Projects
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-paper/25 transition-transform duration-300 ease-premium group-hover:rotate-45">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
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
        transition={{ delay: 1.6, duration: 1 }}
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
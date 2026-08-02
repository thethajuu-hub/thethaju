"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { brand } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });
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
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 backdrop-blur-sm px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-body font-medium text-xs text-muted">{brand.availability}</span>
          </motion.div>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-body font-medium text-sm text-subtle"
          >
            {brand.personalName} &middot; {brand.role}
          </motion.p>

          {/* One plain, confident headline — no inline pills or extra chunks */}
          <motion.h1
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 font-display font-black leading-[1.05] text-paper text-[clamp(2rem,5.5vw,3.5rem)]"
          >
            Premium websites for modern businesses.
          </motion.h1>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md font-body font-normal leading-relaxed text-base text-muted"
          >
            {brand.statement}
          </motion.p>

          <motion.div
            custom={0.65}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <MagneticButton href="#projects" variant="solid">
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

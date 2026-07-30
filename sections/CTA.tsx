"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.15, 0.7]);

  return (
    <section ref={ref} className="relative border-t border-line px-6 py-32 md:py-44 text-center overflow-hidden">
      <motion.div
        style={{ scale: glowScale }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        <RevealText as="h2" className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-paper">
          Have a project in mind?
          <br />
          <span className="text-subtle">Let&rsquo;s build something extraordinary.</span>
        </RevealText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <MagneticButton href="#connect" variant="solid">
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

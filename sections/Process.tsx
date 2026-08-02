"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps, processIntro } from "@/lib/data";
import RevealText from "@/components/RevealText";

// White — the first half of the combined "Process + FAQ" white block.
export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative bg-paper px-6 pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body font-medium text-xs tracking-[0.28em] uppercase text-[#737373]"
        >
          Process
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl text-ink">
          {processIntro.title}
        </RevealText>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl font-body text-base md:text-lg text-[#525252] leading-relaxed"
        >
          {processIntro.subtitle}
        </motion.p>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-black/10 md:left-[35px]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] top-0 bottom-0 w-px origin-top bg-black/60 md:left-[35px]"
          />
          <div className="space-y-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                className="group relative flex gap-6 md:gap-10 py-6"
              >
                <div className="relative z-10 flex h-14 w-14 md:h-[70px] md:w-[70px] shrink-0 items-center justify-center rounded-full border border-black/10 bg-white font-display text-sm text-ink transition-colors duration-500 group-hover:border-black/30">
                  {step.index}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="font-display font-semibold text-2xl text-ink">{step.title}</h3>
                  <p className="mt-2 font-body text-sm text-[#525252] leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

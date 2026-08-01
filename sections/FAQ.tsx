"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "@/lib/data";
import RevealText from "@/components/RevealText";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-32 md:py-40 border-t border-line">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow"
        >
          FAQ
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl text-paper">
          Good to know.
        </RevealText>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor-hover
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display font-semibold text-lg md:text-xl text-paper">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 font-display text-2xl text-subtle"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-body text-sm md:text-base text-muted leading-relaxed max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

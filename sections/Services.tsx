"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow"
        >
          Services
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl text-paper max-w-xl">
          Where I can help.
        </RevealText>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card p-8 md:p-10 transition-colors duration-500 hover:bg-[#0d0d0d]"
            >
              <span className="font-display text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-xl md:text-2xl text-paper">{s.title}</h3>
              <p className="mt-3 font-body text-sm text-muted leading-relaxed">{s.description}</p>
              <span className="absolute bottom-8 right-8 font-body text-subtle opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
                &rarr;
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import { services } from "@/lib/data";

// Inverted to a light section deliberately — a single break in the black
// rhythm gives the page visual pacing instead of one long uninterrupted
// black scroll, the way alternating sections do on premium reference sites.
export default function Services() {
  return (
    <section id="what-i-do" className="relative bg-paper border-t border-black/10 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body font-medium text-xs tracking-[0.28em] uppercase text-[#737373]"
        >
          What I Do
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl text-ink max-w-xl">
          How I can help.
        </RevealText>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-paper p-8 md:p-10 transition-all duration-500 hover:bg-black/[0.03]"
            >
              <span className="font-display text-xs text-[#737373]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display font-semibold text-xl md:text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 font-body text-sm text-[#525252] leading-relaxed">{s.description}</p>
              <span className="absolute bottom-8 right-8 font-body text-[#737373] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
                &rarr;
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";

const reasons = [
  "Modern AI workflow",
  "Premium design quality",
  "Fast development",
  "Responsive websites",
  "Clean architecture",
  "Future scalability",
  "Performance focused",
  "SEO-friendly websites",
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative px-6 py-32 md:py-40 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-eyebrow"
            >
              Why work with me
            </motion.p>
            <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-5xl text-paper">
                Built to feel <span className="text-subtle">deliberate.</span>
              </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 font-body text-muted max-w-sm"
            >
              Every project is scoped, designed, and shipped with the same standard &mdash;
              no shortcuts on the details that make a site feel premium.
            </motion.p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card px-6 py-7"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                <span className="font-body text-sm md:text-base text-paper">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";
import RevealText from "@/components/RevealText";

const allTech = technologies.flatMap((cat) => cat.items);
const marqueeItems = [...allTech, ...allTech]; // duplicated for a seamless loop

export default function Technology() {
  return (
    <section className="relative py-32 md:py-40 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow"
        >
          Stack
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl text-paper max-w-xl">
          Tools of the craft.
        </RevealText>
      </div>

      {/* Continuous horizontal marquee — decorative, Linear-style */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-display text-3xl md:text-5xl text-line"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {technologies.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-card p-7"
            >
              <h3 className="font-body font-medium text-xs tracking-widest2 text-subtle uppercase">{cat.label}</h3>
              <ul className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="font-display font-semibold text-lg text-paper">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

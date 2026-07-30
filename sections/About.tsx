"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "@/lib/data";
import RevealText from "@/components/RevealText";

function Counter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || display) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, display]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-paper tabular-nums">
      {display ?? count}
      <span className="text-subtle">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-eyebrow"
            >
              About
            </motion.p>
            <RevealText
              as="h2"
              delay={0.1}
              className="mt-4 font-display text-4xl md:text-5xl text-paper leading-tight"
            >
              Muhammed
              <br />
              <span className="text-subtle">Thajudheen</span>
            </RevealText>
          </div>

          <div className="md:col-span-8 space-y-6">
            {[
              "I'm an AI Web Developer working out of Dubai, building websites that pair modern engineering with a genuinely premium feel — the kind of site a brand can point to and say, this is us.",
              "My workflow leans on AI as a collaborator, not a shortcut: it speeds up the repetitive parts of development so more time goes into the design decisions, motion detail, and performance work that actually shape how a site feels.",
              "Every project follows the same philosophy — restraint over noise, typography and spacing over decoration, and motion that supports the content instead of competing with it.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="font-body text-base md:text-lg text-muted leading-relaxed max-w-2xl"
              >
                {p}
              </motion.p>
            ))}

            <div className="hairline my-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} display={s.display} />
                  <p className="mt-2 font-body text-xs tracking-widest2 text-muted uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

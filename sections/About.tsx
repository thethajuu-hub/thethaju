"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats, brand } from "@/lib/data";
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
    <span ref={ref} className="font-display font-extrabold tracking-tight text-5xl md:text-6xl text-ink tabular-nums">
      {display ?? count}
      <span className="text-[#737373]">{suffix}</span>
    </span>
  );
}

// White section — paired with "What I Do" right after it to form one
// deliberate light break in the site's black rhythm, per request.
export default function About() {
  return (
    <section id="about" className="relative bg-paper px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-body font-medium text-xs tracking-[0.28em] uppercase text-[#737373]"
            >
              About
            </motion.p>
            <RevealText
              as="h2"
              delay={0.1}
              className="mt-4 font-display text-4xl md:text-6xl text-ink leading-[0.95]"
            >
              {brand.personalName.split(" ")[0]}
              <br />
              <span className="text-[#737373]">{brand.personalName.split(" ").slice(1).join(" ")}</span>
            </RevealText>
          </div>

          <div className="md:col-span-8 space-y-6">
            {[
              "I design and build digital experiences that businesses can build their credibility on. Based in Dubai, I work at the intersection of strategy, interface design, and modern engineering — turning ambiguous briefs into websites that look inevitable in hindsight.",
              "Every project starts the same way: understanding what the business actually needs, not what's trendy. From there, design and development move together — interface decisions and technical architecture inform each other from day one, which is why the sites I build feel considered rather than assembled from templates.",
              "AI is a genuine part of my workflow, not a buzzword bolted on. It clears the repetitive work out of the way so more of my attention goes where it counts: typography, motion, interaction detail, and the kind of performance engineering that visitors never consciously notice — but always feel.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                className="font-body text-base md:text-lg text-[#525252] leading-relaxed max-w-2xl"
              >
                {p}
              </motion.p>
            ))}

            <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} display={s.display} />
                  <p className="mt-2 font-body font-medium text-xs tracking-widest2 text-[#525252] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { brand, services, technologies } from "@/lib/data";
import RevealText from "@/components/RevealText";

const pillars = [
  {
    label: "Who I Am",
    text: "An AI Web Developer based in Dubai, working at the intersection of strategy, interface design, and modern engineering — turning ambiguous briefs into websites that look inevitable in hindsight.",
  },
  {
    label: "What I Build",
    text: "Premium business websites, landing pages, and ecommerce experiences for startups and modern brands that need their site to signal credibility from the first scroll.",
  },
  {
    label: "How I Work",
    text: "Design and development move together, not in separate stages. AI clears the repetitive work out of the way so more attention goes where it counts — typography, motion, and the performance engineering visitors feel but never consciously notice.",
  },
];

// White section — paired with the Process + FAQ white block later in the
// page to create the site's alternating black/white rhythm.
export default function About() {
  return (
    <section id="about" className="relative bg-paper px-6 py-20 sm:py-28 md:py-40">
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
              className="mt-4 font-display text-4xl md:text-5xl text-ink leading-[1.05] break-words"
            >
              {brand.personalName}
            </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-body text-sm text-[#737373]"
            >
              {brand.role}
            </motion.p>
          </div>

          <div className="md:col-span-8 space-y-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              >
                <h3 className="font-display font-semibold text-lg text-ink">{p.label}</h3>
                <p className="mt-2 font-body text-base md:text-lg text-[#525252] leading-relaxed max-w-2xl">
                  {p.text}
                </p>
              </motion.div>
            ))}

            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-lg text-ink">Services</h3>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                    className="rounded-xl border border-black/10 p-4"
                  >
                    <p className="font-display font-semibold text-sm text-ink">{s.title}</p>
                    <p className="mt-1 font-body text-xs text-[#737373] leading-relaxed">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-display font-semibold text-lg text-ink">Technologies</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.flatMap((cat) => cat.items).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-4 py-1.5 font-body text-xs text-[#525252]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

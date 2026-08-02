"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import { social } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Wire this up to /api/contact (or a form service such as Formspree)
      // once a backend endpoint is ready. For now this simulates a send.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="connect" className="relative px-6 py-20 sm:py-28 md:py-40 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-eyebrow"
            >
              Let&rsquo;s Connect
            </motion.p>
            <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl text-paper leading-[0.95]">
              Let&rsquo;s Build Something <span className="text-subtle">Exceptional.</span>
            </RevealText>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-body font-medium text-xs tracking-widest2 text-muted uppercase">Email</p>
                <a href={`mailto:${social.email}`} data-cursor-hover className="mt-1 block font-display font-semibold text-xl text-paper hover:text-paper transition-colors">
                  {social.email}
                </a>
              </div>
              <div>
                <p className="font-body font-medium text-xs tracking-widest2 text-muted uppercase">Location</p>
                <p className="mt-1 font-display font-semibold text-xl text-paper">{social.location}</p>
              </div>
              <div className="flex gap-6 pt-2">
                <a href={social.github} target="_blank" rel="noreferrer" data-cursor-hover className="font-body text-sm text-muted hover:text-paper transition-colors">GitHub</a>
                <a href={social.instagram} target="_blank" rel="noreferrer" data-cursor-hover className="font-body text-sm text-muted hover:text-paper transition-colors">Instagram</a>
                <a href={social.x} target="_blank" rel="noreferrer" data-cursor-hover className="font-body text-sm text-muted hover:text-paper transition-colors">X</a>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-6"
          >
            <div>
              <label className="font-body font-medium text-xs tracking-widest2 text-muted uppercase">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Your name"
                className="mt-2 w-full border-b border-line bg-transparent py-3 font-body text-paper placeholder:text-[#555] focus:border-white/70 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body font-medium text-xs tracking-widest2 text-muted uppercase">Email</label>
              <input
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full border-b border-line bg-transparent py-3 font-body text-paper placeholder:text-[#555] focus:border-white/70 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-body font-medium text-xs tracking-widest2 text-muted uppercase">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about your project"
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 font-body text-paper placeholder:text-[#555] focus:border-white/70 focus:outline-none transition-colors"
              />
            </div>

            <div className="pt-4 flex items-center gap-5">
              <MagneticButton variant="solid">
                {status === "sending" ? "Sending..." : "Send Message"}
              </MagneticButton>
              {status === "sent" && <span className="font-body text-sm text-subtle">Message sent — I&rsquo;ll reply soon.</span>}
              {status === "error" && <span className="font-body text-sm text-red-400">Something went wrong. Try email instead.</span>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

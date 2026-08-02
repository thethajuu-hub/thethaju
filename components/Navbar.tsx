"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium",
          scrolled ? "py-4" : "py-7"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 transition-all duration-500 ease-premium",
            scrolled
              ? "bg-black/60 backdrop-blur-xl border border-line py-3 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              : "border border-transparent py-3"
          )}
        >
          <a href="#home" className="font-display text-lg font-bold tracking-normal text-paper" data-cursor-hover>
            THE THAJU
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="font-body text-sm font-medium text-muted hover:text-paper transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#connect"
            data-cursor-hover
            className="hidden md:inline-flex items-center rounded-full border border-line px-5 py-2 text-sm font-semibold text-paper hover:border-white/40 hover:bg-white/5 transition-colors duration-300"
          >
            Start a Project
          </a>

          <button
            onClick={() => setOpen(true)}
            data-cursor-hover
            className="md:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="block h-px w-6 bg-paper" />
            <span className="block h-px w-6 bg-paper" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] bg-black flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center">
              <span className="font-display text-lg font-bold tracking-normal text-paper">THE THAJU</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" data-cursor-hover className="flex h-11 w-11 items-center justify-center text-paper text-3xl leading-none">&times;</button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl font-extrabold tracking-normal text-paper py-3 border-b border-line"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <p className="font-body text-xs text-muted tracking-widest2">DUBAI, UAE</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

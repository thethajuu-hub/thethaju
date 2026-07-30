"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.floor(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);

    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display text-4xl md:text-6xl tracking-[0.15em] text-paper"
            >
              THE THAJU
            </motion.p>
          </div>

          <div className="mt-10 flex items-center gap-4 font-body text-xs tracking-widest2 text-muted">
            <span>DIGITAL EXPERIENCE DESIGNER</span>
            <span className="h-px w-8 bg-line" />
            <span className="text-paper tabular-nums">{progress}%</span>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] bg-white" style={{ width: `${progress}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

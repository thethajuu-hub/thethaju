"use client";

import { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  onOpen,
  reversed,
}: {
  project: Project;
  onOpen: () => void;
  reversed?: boolean;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 150, damping: 18, mass: 0.5 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleTilt = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center",
        reversed && "md:[direction:rtl]"
      )}
    >
      <motion.button
        onClick={onOpen}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        data-cursor-hover
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={{ boxShadow: "0 30px 80px -20px rgba(255,255,255,0.12)" }}
        className="group relative w-full [direction:ltr] rounded-2xl border border-line bg-card p-3 text-left overflow-hidden"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", project.coverGradient)} />
        <div className="relative rounded-xl border border-line overflow-hidden bg-black">
          <div className="flex items-center gap-1.5 border-b border-line bg-[#0d0d0d] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#333]" />
            <span className="h-2 w-2 rounded-full bg-[#333]" />
            <span className="h-2 w-2 rounded-full bg-[#333]" />
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <iframe
              src={project.url}
              title={project.title}
              loading="lazy"
              className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0 transition-transform duration-700 ease-premium group-hover:scale-[0.52]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
        <div className="relative mt-4 flex items-center justify-between px-1 pb-1">
          <span className="font-body text-xs tracking-widest2 text-muted">VIEW PROJECT</span>
          <span className="font-body text-xs text-subtle transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
        </div>
      </motion.button>

      <div className="[direction:ltr]">
        <span className="font-display text-sm text-subtle">{project.index}</span>
        <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl text-paper">{project.title}</h3>
        <p className="mt-3 font-body text-muted">{project.tagline}</p>
        <p className="mt-5 font-body text-sm text-muted leading-relaxed max-w-md">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border border-line px-3 py-1 font-body text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={onOpen}
          data-cursor-hover
          className="mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-1 font-body text-sm text-paper"
        >
          Explore case study <span>&rarr;</span>
        </button>
      </div>
    </motion.div>
  );
}

"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 150, damping: 18, mass: 0.5 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.id}`} data-cursor-hover data-cursor-text="View Project" className="group block">
        <motion.div
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative overflow-hidden rounded-2xl border border-line bg-card"
        >
          <div className="relative h-72 md:h-[26rem] w-full overflow-hidden bg-black">
            <iframe
              src={project.url}
              title={project.title}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none absolute left-0 top-0 h-[220%] w-[220%] origin-top-left scale-[0.455] border-0 transition-transform duration-700 ease-premium group-hover:scale-[0.48]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </motion.div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-2xl text-paper">{project.title}</h3>
            <p className="mt-1 font-body text-xs tracking-widest2 uppercase text-subtle">{project.category}</p>
          </div>
          <span className="mt-1 inline-flex shrink-0 items-center gap-2 font-body text-sm text-muted transition-colors duration-300 group-hover:text-paper">
            View Project <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

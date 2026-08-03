"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/lib/data";
import DeviceMockup from "@/components/DeviceMockup";

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
          className="relative rounded-2xl border border-line bg-card p-6 pb-10 transition-colors duration-500 group-hover:border-white/20"
        >
          <DeviceMockup url={project.url} title={project.title} />
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

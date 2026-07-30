"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import { projects, Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow"
        >
          Selected Work
        </motion.p>
        <RevealText as="h2" delay={0.1} className="mt-4 font-display text-4xl md:text-6xl text-paper max-w-2xl">
          Products, not <span className="text-subtle">templates.</span>
        </RevealText>

        <div className="mt-24 space-y-28 md:space-y-40">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

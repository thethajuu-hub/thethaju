"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md px-4 py-10 md:py-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl border border-line bg-[#050505]"
          >
            <button
              onClick={onClose}
              data-cursor-hover
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper text-xl hover:border-white/30 hover:text-paper transition-colors"
            >
              &times;
            </button>

            <div className="border-b border-line p-8 md:p-12">
              <span className="font-display text-sm text-subtle">{project.index} &mdash; {project.year}</span>
              <h3 className="mt-3 font-display font-bold text-4xl md:text-5xl text-paper">{project.title}</h3>
              <p className="mt-3 font-body text-muted">{project.category}</p>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="overflow-hidden rounded-xl border border-line bg-black">
                <div className="flex items-center gap-1.5 border-b border-line bg-[#0d0d0d] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#333]" />
                  <span className="h-2 w-2 rounded-full bg-[#333]" />
                  <span className="h-2 w-2 rounded-full bg-[#333]" />
                  <span className="ml-3 font-body text-[0.65rem] text-muted">{project.url.replace("https://", "")}</span>
                </div>
                <div className="relative h-72 md:h-[26rem] w-full overflow-hidden">
                  <iframe
                    src={project.url}
                    title={project.title}
                    loading="lazy"
                    className="absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="section-eyebrow">Features</h4>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-3 font-body text-sm text-muted">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-white" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="section-eyebrow">Design &amp; Development Process</h4>
                  <ul className="mt-4 space-y-3">
                    {project.process.map((f) => (
                      <li key={f} className="flex gap-3 font-body text-sm text-muted">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-white" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="section-eyebrow">Technologies</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-line px-4 py-1.5 font-body text-xs text-paper">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-3 rounded-full border border-paper bg-paper px-8 py-4 font-body text-sm text-ink transition-colors duration-500 hover:bg-transparent hover:text-paper"
              >
                Visit Live Website <span>&rarr;</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

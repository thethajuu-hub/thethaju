"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { Project } from "@/lib/data";

// The hero image and gallery below use scaled-down live iframes of the
// actual site rather than static screenshots, so previews never go stale.
// Swap these for real screenshots in /public/projects/ any time — see
// public/projects/README.md.
function LivePreview({ url, title, scale, height }: { url: string; title: string; scale: number; height: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-line bg-black ${height}`}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none absolute left-0 top-0 border-0 origin-top-left"
        style={{ width: `${100 / scale}%`, height: `${100 / scale}%`, transform: `scale(${scale})` }}
      />
    </div>
  );
}

export default function ProjectDetail({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project;
  next: Project;
}) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 px-6 pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            data-cursor-hover
            className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-paper transition-colors"
          >
            &larr; Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <p className="font-body text-xs tracking-widest2 uppercase text-subtle">{project.category}</p>
            <h1 className="mt-3 font-display font-bold text-4xl md:text-6xl text-paper">{project.title}</h1>
            <p className="mt-4 max-w-xl font-body text-base md:text-lg text-muted leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <LivePreview url={project.url} title={project.title} scale={0.42} height="h-[22rem] md:h-[34rem]" />
          </motion.div>

          {/* Overview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="font-display font-semibold text-2xl text-paper">Overview</h2>
              <p className="mt-4 font-body text-base text-muted leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Gallery */}
              <h2 className="mt-14 font-display font-semibold text-2xl text-paper">Gallery</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LivePreview url={project.url} title={`${project.title} — detail 1`} scale={0.6} height="h-64" />
                <LivePreview url={project.url} title={`${project.title} — detail 2`} scale={0.8} height="h-64" />
              </div>
            </div>

            <div className="md:col-span-4">
              <h2 className="font-display font-semibold text-lg text-paper">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 font-body text-sm text-muted leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                    {f}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display font-semibold text-lg text-paper">Built With</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-body text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <MagneticButton href={project.url} target="_blank" rel="noreferrer" variant="solid">
                  Visit Live Website
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-line pt-10">
            <Link
              href={`/projects/${previous.id}`}
              data-cursor-hover
              className="group rounded-2xl border border-line p-6 transition-colors hover:border-white/30"
            >
              <p className="font-body text-xs tracking-widest2 uppercase text-subtle">&larr; Previous Project</p>
              <p className="mt-2 font-display font-semibold text-xl text-paper transition-transform duration-300 group-hover:-translate-x-1">
                {previous.title}
              </p>
            </Link>
            <Link
              href={`/projects/${next.id}`}
              data-cursor-hover
              className="group rounded-2xl border border-line p-6 text-right transition-colors hover:border-white/30"
            >
              <p className="font-body text-xs tracking-widest2 uppercase text-subtle">Next Project &rarr;</p>
              <p className="mt-2 font-display font-semibold text-xl text-paper transition-transform duration-300 group-hover:translate-x-1">
                {next.title}
              </p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

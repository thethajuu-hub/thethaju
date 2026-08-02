"use client";

import { social } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-display text-2xl font-bold tracking-normal text-paper">THE THAJU</p>
            <p className="mt-2 font-body text-sm text-muted">AI Web Developer &mdash; Dubai, UAE</p>
          </div>

          <div className="flex gap-8 font-body text-sm text-muted">
            <a href={social.github} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-paper transition-colors">
              GitHub
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-paper transition-colors">
              Instagram
            </a>
            <a href={social.x} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-paper transition-colors">
              X
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-cursor-hover
            className="self-start md:self-auto rounded-full border border-line px-5 py-2.5 font-body text-xs font-semibold tracking-widest2 text-muted hover:text-paper hover:border-white/40 transition-colors"
          >
            BACK TO TOP
          </button>
        </div>

        <div className="mt-12 flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-body text-xs text-muted">
            &copy; {year} The Thaju. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted">Designed &amp; built in Dubai.</p>
        </div>
      </div>
    </footer>
  );
}

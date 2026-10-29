'use client';

import React, { useState } from 'react';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  onSelectCaseStudy: (project: ProjectItem) => void;
}

export function ProjectCard({
  project,
  index,
  total,
  onSelectCaseStudy,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const formattedIdx = String(index + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');
  const topOffset = 92 + index * 16;
  const showScreenshot = Boolean(project.image) && !imgError;

  return (
    <div
      style={{ top: `${topOffset}px` }}
      className="sticky z-10 rounded-3xl border border-slate-800/95 bg-[#080d18]/95 p-6 sm:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl transition hover:border-emerald-500/50"
    >
      {/* Card Header Row */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs font-semibold text-emerald-300">
            {project.category}
          </span>
          <span className="font-mono text-xs text-slate-400">
            {formattedIdx} / {formattedTotal}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-300 hover:border-emerald-400 hover:text-emerald-300"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Source Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 px-3 py-1 font-mono text-xs text-emerald-200 hover:border-emerald-400"
          >
            <span>Check out</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Split Layout: Left Browser Mockup + Right Highlights */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        <div
          onClick={() => onSelectCaseStudy(project)}
          className="group relative lg:col-span-6 cursor-pointer overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-blue-950/60 p-3 shadow-lg"
        >
          <div className="mb-2.5 flex items-center justify-between rounded-lg bg-slate-950/90 px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-[10px] text-slate-400 truncate max-w-[200px]">
              {project.title.split('—')[0].trim().toLowerCase().replace(/\s+/g, '-')}.app
            </span>
            <span className="font-mono text-[10px] text-emerald-400">SSL</span>
          </div>

          <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-xl border border-slate-800 bg-[#060a12]">
            {showScreenshot ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col justify-between p-4 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),rgba(59,130,246,0.15),transparent_70%)]">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    FULL-STACK ARCHITECTURE
                  </span>
                  <span className="font-mono text-xs text-blue-400">#{formattedIdx}</span>
                </div>
                <div className="my-auto space-y-2">
                  <div className="text-base font-bold text-white line-clamp-1">
                    {project.title.split('—')[0]}
                  </div>
                  <div className="text-xs text-slate-400 line-clamp-2">{project.tagline}</div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="rounded-lg border border-emerald-500/20 bg-slate-900/90 p-2">
                      <div className="font-mono text-[9px] text-slate-400">STATUS</div>
                      <div className="font-mono text-xs font-bold text-emerald-400">PRODUCTION</div>
                    </div>
                    <div className="rounded-lg border border-blue-500/20 bg-slate-900/90 p-2">
                      <div className="font-mono text-[9px] text-slate-400">STACK</div>
                      <div className="font-mono text-xs font-bold text-blue-400">
                        {project.techStack[0]}
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-2">
                      <div className="font-mono text-[9px] text-slate-400">ENGINE</div>
                      <div className="font-mono text-xs font-bold text-cyan-300">REST / SSR</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Click to view full architecture &amp; case study</span>
                  <span className="text-emerald-400">→</span>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute bottom-3 right-3 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/60 bg-slate-950/90 text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-300 opacity-90 shadow-lg transition group-hover:scale-110">
              <span className="text-center leading-tight">
                VIEW
                <br />
                DETAILS
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.highlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-700/90 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>{project.impactMetric}</span>
            </div>
            <button
              type="button"
              onClick={() => onSelectCaseStudy(project)}
              className="font-mono text-xs text-blue-400 hover:underline"
            >
              View Case Study →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

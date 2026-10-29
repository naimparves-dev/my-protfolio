'use client';

import React from 'react';
import { X, Check, Github, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({
  project,
  onClose,
}: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-emerald-500/40 bg-[#080d18] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300">
            {project.category}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 p-1.5 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 space-y-2">
          <div className="font-mono text-xs uppercase text-emerald-400">
            Key Architectural Highlights
          </div>
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
          <span className="font-mono text-xs text-emerald-400">
            {project.impactMetric}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-white hover:border-emerald-400"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 text-xs font-bold text-slate-950"
            >
              <span>Visit Live Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

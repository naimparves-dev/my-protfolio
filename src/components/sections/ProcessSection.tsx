'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface ProcessSectionProps {
  activeSection: string;
}

export function ProcessSection({ activeSection }: ProcessSectionProps) {
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            — 05 / HOW I WORK
          </div>
          <ScrambleHeading
            text="Four steps, zero surprises"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            A transparent process built to remove ambiguity: you always know what is being engineered, how it supports business growth, and when it ships.
          </p>
        </div>
        <AvatarDockBox
          sectionId="process"
          activeSection={activeSection}
          label="PROCESS"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((st, idx) => {
          const isCurrent = activeProcessStep === idx;
          return (
            <div
              key={st.num}
              onClick={() => setActiveProcessStep(idx)}
              className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                isCurrent
                  ? 'border-emerald-400/70 bg-gradient-to-b from-emerald-950/35 via-slate-900 to-blue-950/30 shadow-[0_0_30px_-8px_rgba(34,197,94,0.35)] -translate-y-1'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <div className="font-mono text-3xl font-black text-emerald-400/90">
                {st.num}
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">{st.title}</h3>
              <div className="mt-1 font-mono text-xs text-blue-300">{st.subtitle}</div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {st.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3">
        {PROCESS_STEPS.map((st, idx) => (
          <button
            key={st.num}
            type="button"
            onClick={() => setActiveProcessStep(idx)}
            className="group flex flex-1 items-center gap-2"
          >
            <span
              className={`font-mono text-xs font-bold ${
                idx <= activeProcessStep ? 'text-emerald-400' : 'text-slate-600'
              }`}
            >
              {st.num}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full transition-all duration-300 ${
                  idx <= activeProcessStep
                    ? 'w-full bg-gradient-to-r from-emerald-400 to-blue-500'
                    : 'w-0'
                }`}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { TERMINAL_SCENARIOS } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';
import { InteractiveWireframe } from '@/components/ui/InteractiveWireframe';

interface UnderTheHoodSectionProps {
  activeSection: string;
}

export function UnderTheHoodSection({ activeSection }: UnderTheHoodSectionProps) {
  const [activeTerminalTab, setActiveTerminalTab] = useState<string>('fullstack');
  const [terminalStepCount, setTerminalStepCount] = useState<number>(3);

  const replayTerminal = (tabId: string) => {
    setActiveTerminalTab(tabId);
    setTerminalStepCount(0);
    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;
      setTerminalStepCount(step);
      if (step >= 3) window.clearInterval(interval);
    }, 380);
  };

  const currentScenario =
    TERMINAL_SCENARIOS.find((s) => s.id === activeTerminalTab) ||
    TERMINAL_SCENARIOS[0];

  return (
    <section id="terminal" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-blue-400">
            — 06 / UNDER THE HOOD &amp; REAL-TIME 3D
          </div>
          <ScrambleHeading
            text="What shipping actually looks like"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            No hand-waving: inspect the live engineering &amp; SEO workflows on the left or grab and spin the real-time 3D wireframe geometry on the right.
          </p>
        </div>
        <AvatarDockBox
          sectionId="terminal"
          activeSection={activeSection}
          label="TERMINAL"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#070b12] p-5 shadow-2xl">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  naimparves-dev — zsh
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {TERMINAL_SCENARIOS.map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => replayTerminal(sc.id)}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition ${
                      activeTerminalTab === sc.id
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-4 font-mono text-xs sm:text-sm">
              {currentScenario.commands.map((item, i) => {
                if (i >= terminalStepCount) return null;
                return (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400">$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <div className="pl-4 text-emerald-300/90">{item.out}</div>
                  </div>
                );
              })}
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">$</span>
                <span className="inline-block h-4 w-2 bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-3 font-mono text-[11px] text-slate-400">
            <span>STATUS: ALL CHECKS PASSING</span>
            <button
              type="button"
              onClick={() => replayTerminal(activeTerminalTab)}
              className="flex items-center gap-1 text-emerald-400 hover:underline"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Replay Terminal</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <InteractiveWireframe />
        </div>
      </div>
    </section>
  );
}

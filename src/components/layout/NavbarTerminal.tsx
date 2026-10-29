'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SECTIONS_LIST } from '@/data/portfolioData';

interface NavbarTerminalProps {
  scrollPercent: number;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function NavbarTerminal({
  scrollPercent,
  activeSection,
  onNavigate,
}: NavbarTerminalProps) {
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  const activeSectionIdx = Math.max(
    0,
    SECTIONS_LIST.findIndex((s) => s.id === activeSection)
  );
  const visitedPathString =
    '{' +
    SECTIONS_LIST.slice(0, activeSectionIdx + 1)
      .map((s) => s.label)
      .join('|') +
    '_';

  const handleJump = (id: string) => {
    setNavDropdownOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#05080f]/85 backdrop-blur-xl">
      {/* Top Navbar Row */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <button
          type="button"
          onClick={() => handleJump('intro')}
          className="flex items-center gap-2.5 text-left group"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 font-mono text-xs font-bold text-emerald-300 group-hover:border-emerald-400">
            &lt;/&gt;
          </span>
          <div>
            <span className="font-semibold tracking-tight text-white">Md Naim Parves</span>
            <span className="hidden sm:inline-block ml-2 rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
              MERN · Next.js · Growth
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">
          {SECTIONS_LIST.slice(1, 8).map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleJump(sec.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                activeSection === sec.id
                  ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {sec.title}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => handleJump('contact')}
          className="rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,197,94,0.35)] transition hover:brightness-110"
        >
          Start a project
        </button>
      </div>

      {/* Bottom Terminal Scroll-Progress Bar (Aashish Jaini Reference) */}
      <div className="border-t border-slate-800/70 bg-[#070b14]/95 px-4 py-1.5 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="flex shrink-0 items-center gap-1.5 font-mono text-xs font-bold text-amber-400">
            <span>➜</span>
            <span>{scrollPercent}%</span>
          </div>

          <div className="relative h-6 flex-1 overflow-hidden rounded-md border border-slate-800 bg-slate-950">
            <div
              style={{ width: `${Math.max(8, scrollPercent)}%` }}
              className="h-full bg-gradient-to-r from-blue-600/85 via-blue-500/80 to-emerald-500/85 transition-all duration-150"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center px-2.5 font-mono text-[11px] text-white/95 truncate">
              {visitedPathString}
            </div>
          </div>

          <div className="relative flex shrink-0 items-center gap-2 font-mono text-xs text-slate-400">
            <span className="hidden sm:inline">
              {scrollPercent >= 98 ? (
                <span className="text-emerald-400 font-semibold">complete ✓</span>
              ) : (
                `${100 - scrollPercent}% remaining`
              )}
            </span>
            <button
              type="button"
              onClick={() => setNavDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 rounded border border-slate-800 bg-slate-900 px-2 py-0.5 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300"
              title="Jump to section"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            {navDropdownOpen && (
              <div className="absolute right-0 top-8 z-50 w-48 rounded-xl border border-slate-700 bg-slate-900/95 p-1.5 shadow-2xl backdrop-blur-xl">
                {SECTIONS_LIST.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleJump(s.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left font-mono text-xs transition ${
                      activeSection === s.id
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] text-slate-500">#{s.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

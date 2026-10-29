'use client';

import React, { useState, useMemo } from 'react';
import { TECH_STACK_DATA } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface TechStackSectionProps {
  activeSection: string;
}

export function TechStackSection({ activeSection }: TechStackSectionProps) {
  const [stackFilter, setStackFilter] = useState<string>('All');
  const [stackTilt, setStackTilt] = useState({ x: 0, y: 0 });

  const filteredStack = useMemo(() => {
    if (stackFilter === 'All') return TECH_STACK_DATA;
    return TECH_STACK_DATA.filter((item) => item.category === stackFilter);
  }, [stackFilter]);

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            — 03 / THE TECH &amp; GROWTH STACK
          </div>
          <ScrambleHeading
            text="The tools behind every build"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Move your cursor across the 3D stage or filter by layer—from React, Next.js &amp; TypeScript to Node.js, Python, PostgreSQL &amp; SEO.
          </p>
        </div>
        <AvatarDockBox
          sectionId="stack"
          activeSection={activeSection}
          label="STACK"
        />
      </div>

      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
          const ny = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
          setStackTilt({ x: ny, y: nx });
        }}
        onMouseLeave={() => setStackTilt({ x: 0, y: 0 })}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#08111d] via-[#060911] to-[#081216] p-8 sm:p-12 shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.14),rgba(59,130,246,0.12),transparent_70%)]" />

        <div
          style={{
            transform: `perspective(900px) rotateX(${stackTilt.x}deg) rotateY(${stackTilt.y}deg)`,
          }}
          className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 transition-transform duration-200 ease-out"
        >
          {filteredStack.map((tech, idx) => {
            const depthOffset = (idx % 3) * 8 - 8;
            return (
              <div
                key={tech.name}
                style={{
                  backgroundColor: tech.bg,
                  borderColor: tech.border,
                  transform: `translateZ(${depthOffset}px)`,
                }}
                className="group relative flex flex-col items-center justify-center rounded-2xl border p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              >
                <div
                  style={{ color: tech.color }}
                  className="font-mono text-2xl sm:text-3xl font-black tracking-tighter"
                >
                  {tech.short}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-white">
                  {tech.name}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-slate-300">
                  {tech.category}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-slate-800/80 pt-6">
          {['All', 'Frontend', 'Backend', 'Business & SEO'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setStackFilter(cat)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition ${
                stackFilter === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold text-slate-950 shadow-md'
                  : 'border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-emerald-400/50'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Plus, X, Check } from 'lucide-react';
import { SERVICES_DATA } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface ServicesSectionProps {
  activeSection: string;
}

export function ServicesSection({ activeSection }: ServicesSectionProps) {
  const [openServiceId, setOpenServiceId] = useState<string>('01');

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-blue-400">
            — 02 / SERVICES &amp; CAPABILITIES
          </div>
          <ScrambleHeading
            text="Full-Stack Engineering & Strategic Growth"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            From full-stack Next.js web applications to global account management and technical SEO, click any capability below to inspect deliverables.
          </p>
        </div>
        <AvatarDockBox
          sectionId="services"
          activeSection={activeSection}
          label="SERVICES"
        />
      </div>

      <div className="space-y-3">
        {SERVICES_DATA.map((srv) => {
          const isOpen = openServiceId === srv.id;
          return (
            <div
              key={srv.id}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-emerald-500/60 bg-gradient-to-r from-emerald-950/30 via-slate-900/90 to-blue-950/30 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]'
                  : 'border-slate-800/90 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenServiceId(isOpen ? '' : srv.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                      isOpen
                        ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-300'
                        : 'border-slate-800 bg-slate-950 text-slate-400'
                    }`}
                  >
                    {srv.id}
                  </span>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-white">
                      {srv.title}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">{srv.summary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5 font-mono text-[10px] text-blue-300">
                    {srv.tag}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-slate-300">
                    {isOpen ? (
                      <X className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-slate-800/80 px-5 pb-6 pt-4 sm:px-6">
                  <p className="text-sm leading-relaxed text-slate-300">{srv.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {srv.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200"
                      >
                        <Check className="h-3 w-3 text-emerald-400" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

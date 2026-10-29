'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Check } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface AboutSectionProps {
  activeSection: string;
}

export function AboutSection({ activeSection }: AboutSectionProps) {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [aboutProgress, setAboutProgress] = useState(0.65);

  const aboutWords = useMemo(() => PERSONAL_INFO.aboutText.split(' '), []);

  useEffect(() => {
    const onScroll = () => {
      if (!aboutRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = (viewH * 0.85 - rect.top) / (rect.height * 0.95);
      setAboutProgress(Math.min(1, Math.max(0.18, raw)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          — 01 / ABOUT ME
        </div>
        <ScrambleHeading
          text="Bridging Engineering & Business Growth"
          className="mt-1 text-2xl sm:text-4xl font-bold text-white"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            {aboutWords.map((word, idx) => {
              const threshold = idx / aboutWords.length;
              const isLit = aboutProgress >= threshold;
              return (
                <span
                  key={idx}
                  className={`inline-block mr-1.5 transition-colors duration-200 ${
                    isLit ? 'text-white' : 'text-slate-600'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-slate-800/80 pt-6 text-xs">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
              <div className="font-mono text-slate-400">EMAIL</div>
              <div className="mt-1 font-medium text-emerald-300">{PERSONAL_INFO.email}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
              <div className="font-mono text-slate-400">LOCATION</div>
              <div className="mt-1 font-medium text-blue-300">{PERSONAL_INFO.location}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
              <div className="font-mono text-slate-400">EDUCATION</div>
              <div className="mt-1 font-medium text-white">Diploma in CST — Dhaka Polytechnic</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
              <div className="font-mono text-slate-400">CURRENT ROLE</div>
              <div className="mt-1 font-medium text-emerald-300">Key Account Manager @ Smart-Lab Global</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5">
            <div className="pr-4">
              <div className="font-mono text-xs text-emerald-400">WHY WORK WITH ME</div>
              <h3 className="mt-1 text-base font-semibold text-white">
                Engineering + Commercial Focus
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                I don&apos;t just ship code—I align architecture with client retention and measurable growth.
              </p>
            </div>
            <AvatarDockBox
              sectionId="about"
              activeSection={activeSection}
              label="ABOUT"
            />
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/40 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white">What I Bring to the Table</h3>
            <p className="mt-1 text-xs text-slate-400">
              Combining software engineering execution with commercial account leadership:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {PERSONAL_INFO.whatIBring.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

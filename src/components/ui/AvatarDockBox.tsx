'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface AvatarDockBoxProps {
  sectionId: string;
  activeSection: string;
  label?: string;
}

export function AvatarDockBox({
  sectionId,
  activeSection,
  label,
}: AvatarDockBoxProps) {
  const isDockedHere = activeSection === sectionId;
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(PERSONAL_INFO.avatarUrl) && !imgError;

  return (
    <div
      className={`group relative flex h-32 w-32 sm:h-36 sm:w-36 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-500 ${
        isDockedHere
          ? 'border-emerald-400/80 bg-gradient-to-br from-emerald-500/15 via-slate-900/90 to-blue-500/15 shadow-[0_0_40px_-5px_rgba(34,197,94,0.45)] scale-100'
          : 'border-slate-700/60 bg-slate-900/30 opacity-55 scale-95'
      }`}
    >
      {isDockedHere && (
        <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-blue-500/20 blur-xl animate-pulse" />
      )}

      <span className="absolute left-2 top-2 h-2.5 w-2.5 border-l-2 border-t-2 border-emerald-400/70" />
      <span className="absolute right-2 top-2 h-2.5 w-2.5 border-r-2 border-t-2 border-blue-400/70" />
      <span className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-blue-400/70" />
      <span className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-emerald-400/70" />

      <div
        className={`relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-500 ${
          isDockedHere
            ? 'border-emerald-400 shadow-[0_0_25px_rgba(34,197,94,0.5)] translate-y-0 opacity-100'
            : 'border-slate-700 translate-y-1 opacity-40'
        }`}
      >
        {showImage ? (
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt={PERSONAL_INFO.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full bg-gradient-to-b from-slate-900 via-emerald-950/60 to-blue-950/70 p-1.5"
          >
            <defs>
              <linearGradient id={`grad-${sectionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="44" r="22" fill={`url(#grad-${sectionId})`} opacity="0.92" />
            <path d="M38 40 C38 22, 82 22, 82 40 C78 31, 42 31, 38 40 Z" fill="#06090e" />
            <rect x="45" y="40" width="12" height="7" rx="2" fill="#06090e" />
            <rect x="63" y="40" width="12" height="7" rx="2" fill="#06090e" />
            <line x1="57" y1="43" x2="63" y2="43" stroke="#06090e" strokeWidth="2" />
            <path d="M24 104 C26 76, 42 68, 60 68 C78 68, 94 76, 96 104 Z" fill={`url(#grad-${sectionId})`} opacity="0.9" />
            <path d="M50 68 L60 86 L70 68 Z" fill="#06090e" />
          </svg>
        )}
      </div>

      <span className="mt-1.5 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-300/90">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isDockedHere ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'
          }`}
        />
        {isDockedHere ? label || 'ACTIVE' : 'SCROLL DOCK'}
      </span>
    </div>
  );
}

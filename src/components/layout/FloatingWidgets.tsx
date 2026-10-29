'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface FloatingWidgetsProps {
  activeSection: string;
  toastMessage: string | null;
  onClearToast: () => void;
  onNavigate: (sectionId: string) => void;
}

export function FloatingWidgets({
  activeSection,
  toastMessage,
  onClearToast,
  onNavigate,
}: FloatingWidgetsProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(PERSONAL_INFO.avatarUrl) && !imgError;

  return (
    <>
      {/* Bottom-Left Traveling Avatar Status Badge (Read-only for visitors) */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-[#080d18]/90 px-3.5 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-emerald-400">
          {showImage ? (
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-blue-600 font-mono text-xs font-bold text-slate-950">
              NP
            </div>
          )}
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-slate-950 bg-emerald-400" />
        </div>
        <div className="text-xs">
          <div className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            SECTION: #{activeSection.toUpperCase()}
          </div>
          <div className="text-slate-300 font-medium">Available for new projects</div>
        </div>
      </div>

      {/* Bottom-Right Visitor CTA Pill (Aashish Jaini Reference) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="flex items-center gap-2 rounded-full border border-blue-500/40 bg-gradient-to-r from-slate-900/95 via-blue-950/90 to-emerald-950/90 px-4 py-2.5 text-xs font-medium text-slate-100 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md transition hover:border-emerald-400 hover:scale-105"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>Let&apos;s work together</span>
        </button>
      </div>

      {/* Toast Notification (for Contact Form submission) */}
      {toastMessage && (
        <div className="fixed bottom-20 right-5 z-50 flex items-center gap-2.5 rounded-xl border border-emerald-400/50 bg-slate-900/95 px-4 py-3 text-sm text-emerald-200 shadow-2xl backdrop-blur-md">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={onClearToast}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </>
  );
}

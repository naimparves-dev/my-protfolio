'use client';

import React from 'react';

interface FooterProps {
  onScrollTop: () => void;
}

export function Footer({ onScrollTop }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#04060c] pt-10 pb-24">
      <div className="overflow-hidden py-4 border-b border-slate-800/60">
        <div className="text-center text-3xl sm:text-5xl font-black tracking-tight text-white">
          Let&apos;s build something{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            that lasts
          </span>{' '}
          <span className="text-emerald-400">◆</span> Md Naim Parves
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:px-6">
        <div>
          © {new Date().getFullYear()} Md Naim Parves (naimparves-dev). Built with Next.js, TypeScript &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-4 font-mono">
          <button
            type="button"
            onClick={onScrollTop}
            className="text-emerald-400 hover:underline"
          >
            TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

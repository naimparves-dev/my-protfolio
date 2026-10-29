'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '@/data/portfolioData';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface HeroSectionProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({
  activeSection,
  onNavigate,
}: HeroSectionProps) {
  const roles = PERSONAL_INFO.typewriterRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(PERSONAL_INFO.avatarUrl) && !imgError;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 35 : 70;

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        window.setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          currentRole.substring(0, typedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => window.clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="intro"
      className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:pt-20"
    >
      <div className="pointer-events-none absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-20 right-10 h-96 w-96 rounded-full bg-blue-500/15 blur-[130px]" />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Full-Stack Development &amp; Strategic Growth Projects</span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm text-blue-400">
              Hey, I&apos;m {PERSONAL_INFO.name} — {PERSONAL_INFO.location}
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
              Hi, I&apos;m Naim Parves.{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                I build Full-Stack apps that drive business growth.
              </span>
            </h1>
          </div>

          {/* Typewriter Bar */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/90 bg-slate-900/60 px-4 py-3 font-mono text-sm sm:text-base text-emerald-300">
            <Terminal className="h-4 w-4 shrink-0 text-blue-400" />
            <span className="text-slate-400">$ role:</span>
            <span className="font-semibold text-white">{typedText}</span>
            <span className="inline-block h-5 w-0.5 bg-emerald-400 animate-pulse" />
          </div>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            I bridge the gap between{' '}
            <strong className="text-white">Full-Stack Development (MERN &amp; Next.js)</strong>,{' '}
            <strong className="text-emerald-300">Key Account Management</strong>, and{' '}
            <strong className="text-blue-300">Business Growth</strong>. I build fast, scalable web applications while aligning technical architecture with client success and data-driven SEO.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:brightness-110"
            >
              <span>Start your project</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
            >
              <span>View Selected Work</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300"
            >
              <Github className="h-3.5 w-3.5" />
              <span>github.com/naimparves-dev</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-slate-300 hover:border-blue-400/50 hover:text-blue-300"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>in/md-naim-parves (368+ followers)</span>
            </a>
          </div>
        </div>

        {/* Hero Portrait Frame (Configured via PERSONAL_INFO.avatarUrl) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-blue-500/30 blur-2xl transition group-hover:opacity-100" />
            <div className="relative flex flex-col items-center rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-slate-900/95 to-[#070b14] p-6 shadow-2xl">
              <div className="mb-3 flex w-full items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="text-emerald-400">● DEVELOPER PORTRAIT</span>
                <span className="text-blue-400">DHAKA, BD</span>
              </div>

              <div className="relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-2xl border-2 border-emerald-400/70 bg-slate-950 shadow-[0_0_40px_rgba(34,197,94,0.25)]">
                {showImage ? (
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-950/50 to-blue-950/60 p-4 text-center">
                    <AvatarDockBox
                      sectionId="intro"
                      activeSection={activeSection}
                      label="HERO ACTIVE"
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 w-full text-center">
                <div className="text-sm font-bold text-white">{PERSONAL_INFO.name}</div>
                <div className="font-mono text-xs text-emerald-400">
                  Full-Stack Dev · Key Account Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 backdrop-blur-md sm:grid-cols-4">
        {[
          { value: `${PROJECTS_DATA.length}+`, label: 'FULL-STACK PROJECTS' },
          { value: '3', label: 'INDUSTRY ROLES (DHAKA)' },
          { value: '10+', label: 'CORE TECHNOLOGIES' },
          { value: '368+', label: 'LINKEDIN FOLLOWERS' },
        ].map((stat, idx) => (
          <div key={idx} className="text-center sm:text-left">
            <div className="bg-gradient-to-r from-white via-emerald-200 to-blue-300 bg-clip-text text-2xl sm:text-3xl font-extrabold text-transparent">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-[11px] tracking-wider text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Ticker */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/70 py-3">
        <div className="flex items-center justify-around gap-6 font-mono text-xs uppercase tracking-widest text-slate-400 flex-wrap px-4">
          <span className="text-emerald-400">◆ MERN STACK DEVELOPMENT</span>
          <span>◆ NEXT.JS &amp; TYPESCRIPT</span>
          <span className="text-blue-400">◆ KEY ACCOUNT MANAGEMENT</span>
          <span>◆ GLOBAL CLIENT SUCCESS</span>
          <span className="text-emerald-400">◆ TECHNICAL SEO &amp; SMM</span>
          <span>◆ PYTHON &amp; POSTGRESQL</span>
        </div>
      </div>
    </section>
  );
}

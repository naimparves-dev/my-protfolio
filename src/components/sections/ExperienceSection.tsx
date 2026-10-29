'use client';

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface ExperienceSectionProps {
  activeSection: string;
}

export function ExperienceSection({ activeSection }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            — 07 / PROFESSIONAL JOURNEY &amp; CREDENTIALS
          </div>
          <ScrambleHeading
            text="Work Experience & Education"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            My career progression across Key Account Management, Digital Marketing, and Software Development in Gulshan, Dhaka.
          </p>
        </div>
        <AvatarDockBox
          sectionId="experience"
          activeSection={activeSection}
          label="JOURNEY"
        />
      </div>

      {/* Alternating Vertical Timeline */}
      <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-blue-500 before:to-emerald-500 md:before:left-1/2">
        {EXPERIENCE_DATA.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-start ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 top-6 -ml-2 h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.8)] md:left-1/2" />

              <div className="w-full pl-10 md:w-1/2 md:px-8">
                <div className="rounded-2xl border border-slate-800/90 bg-slate-900/55 p-6 shadow-xl transition hover:border-emerald-500/50">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300">
                      {exp.period} · {exp.duration}
                    </span>
                    <span className="font-mono text-xs text-blue-400">{exp.type}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white">{exp.role}</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="text-emerald-300">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md border border-slate-700/80 bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Education & Certifications */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <GraduationCap className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between font-mono text-xs text-emerald-400">
                <span>2024 – Running</span>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="mt-1 text-base font-bold text-white">
                Diploma in Computer Science and Technology
              </div>
              <div className="text-xs text-blue-300">Dhaka Polytechnic Institute</div>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between font-mono text-xs text-blue-400">
                <span>2022 – 2023</span>
                <span>GPA: 5.00 / 5.00</span>
              </div>
              <div className="mt-1 text-base font-bold text-white">
                Secondary School Certificate (SSC) — Science
              </div>
              <div className="text-xs text-slate-400">Betagi Govt. High School</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <Award className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-500/30 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between font-mono text-xs text-emerald-400">
                <span>Programming Hero</span>
                <span>Verified Certificate</span>
              </div>
              <div className="mt-1 text-base font-bold text-white">
                Full-Stack Web Development (MERN Stack)
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Intensive hands-on specialization in React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between font-mono text-xs text-blue-400">
                <span>Creative IT Institute</span>
                <span>Verified Certificate</span>
              </div>
              <div className="mt-1 text-base font-bold text-white">
                Professional Digital Marketing
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Comprehensive certification in Search Engine Optimization (SEO), Social Media Marketing (SMM), and Lead Generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

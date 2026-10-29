'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { PERSONAL_INFO, FAQ_DATA } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';

interface ContactSectionProps {
  activeSection: string;
  onShowToast: (msg: string) => void;
}

export function ContactSection({
  activeSection,
  onShowToast,
}: ContactSectionProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application (Next.js / MERN)',
    message: '',
  });

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-blue-400">
            — 08 / LET&apos;S CONNECT
          </div>
          <ScrambleHeading
            text="Let's bring your vision to life"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Looking for a professional who understands both the technical architecture of Full-Stack development and the business side of client success? Let&apos;s talk!
          </p>
        </div>
        <AvatarDockBox
          sectionId="contact"
          activeSection={activeSection}
          label="CONTACT"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-emerald-500/50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate-400">Email</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
            </div>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-blue-500/50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate-400">Phone / WhatsApp</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate-400">Location</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="font-mono text-xs uppercase text-slate-400">Connect With Me</div>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300 hover:bg-blue-500/20"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onShowToast(
              `Thanks ${contactForm.name || 'friend'}! Your message has been prepared for ${PERSONAL_INFO.email}.`
            );
            setContactForm({
              name: '',
              email: '',
              projectType: 'Full-Stack Web Application (Next.js / MERN)',
              message: '',
            });
          }}
          className="lg:col-span-7 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block font-mono text-xs text-slate-300 mb-1.5">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-slate-300 mb-1.5">
                YOUR EMAIL
              </label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-slate-300 mb-1.5">
              PROJECT / OPPORTUNITY TYPE
            </label>
            <select
              value={contactForm.projectType}
              onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
            >
              <option>Full-Stack Web Application (Next.js / MERN)</option>
              <option>Key Account Management &amp; Global Sales</option>
              <option>Technical SEO &amp; Digital Marketing Growth</option>
              <option>Python / PostgreSQL / ERP Consultation</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs text-slate-300 mb-1.5">
              MESSAGE
            </label>
            <textarea
              rows={4}
              required
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              placeholder="Tell me about your project, timeline, or opportunity..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(34,197,94,0.3)] transition hover:brightness-110"
          >
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>

      {/* Frequently Asked Questions */}
      <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const open = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(open ? -1 : idx)}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-white"
                >
                  <span>{item.q}</span>
                  <span className="font-mono text-emerald-400">{open ? '×' : '+'}</span>
                </button>
                {open && (
                  <div className="border-t border-slate-800/80 px-4 py-3 text-xs leading-relaxed text-slate-300">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

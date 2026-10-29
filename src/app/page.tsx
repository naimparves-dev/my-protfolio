'use client';

import React, { useState, useEffect } from 'react';
import { ProjectItem } from '@/types/portfolio';
import { SECTIONS_LIST } from '@/data/portfolioData';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { NavbarTerminal } from '@/components/layout/NavbarTerminal';
import { FloatingWidgets } from '@/components/layout/FloatingWidgets';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { UnderTheHoodSection } from '@/components/sections/UnderTheHoodSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CaseStudyModal } from '@/components/modals/CaseStudyModal';

export default function HomePage() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct =
        docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
      setScrollPercent(pct);

      let currentSec = 'intro';
      for (const sec of SECTIONS_LIST) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.48) {
          currentSec = sec.id;
        }
      }
      setActiveSection(currentSec);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#05080f] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans overflow-x-clip">
      <CustomCursor />

      <FloatingWidgets
        activeSection={activeSection}
        toastMessage={toastMessage}
        onClearToast={() => setToastMessage(null)}
        onNavigate={scrollToSection}
      />

      <NavbarTerminal
        scrollPercent={scrollPercent}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <HeroSection activeSection={activeSection} onNavigate={scrollToSection} />
        <AboutSection activeSection={activeSection} />
        <ServicesSection activeSection={activeSection} />
        <TechStackSection activeSection={activeSection} />
        <ProjectsSection
          activeSection={activeSection}
          onSelectCaseStudy={(proj) => setSelectedProjectModal(proj)}
        />
        <ProcessSection activeSection={activeSection} />
        <UnderTheHoodSection activeSection={activeSection} />
        <ExperienceSection activeSection={activeSection} />
        <ContactSection activeSection={activeSection} onShowToast={showToast} />
      </main>

      <Footer onScrollTop={() => scrollToSection('intro')} />

      <CaseStudyModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
      />
    </div>
  );
}

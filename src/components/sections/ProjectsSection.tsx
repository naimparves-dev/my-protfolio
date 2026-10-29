'use client';

import React from 'react';
import { ProjectItem } from '@/types/portfolio';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { ScrambleHeading } from '@/components/ui/ScrambleHeading';
import { AvatarDockBox } from '@/components/ui/AvatarDockBox';
import { ProjectCard } from '@/components/ui/ProjectCard';

interface ProjectsSectionProps {
  activeSection: string;
  onSelectCaseStudy: (project: ProjectItem) => void;
}

export function ProjectsSection({
  activeSection,
  onSelectCaseStudy,
}: ProjectsSectionProps) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-blue-400">
            — 04 / SELECTED FULL-STACK WORK ({PROJECTS_DATA.length} PROJECTS)
          </div>
          <ScrambleHeading
            text="Projects that solve real problems"
            className="mt-1 text-2xl sm:text-4xl font-bold text-white"
          />
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            A selection of full-stack web applications, CRM portals, and SEO-driven platforms engineered with Next.js, React, Node.js, Python, and PostgreSQL.
          </p>
        </div>
        <AvatarDockBox
          sectionId="work"
          activeSection={activeSection}
          label="WORK"
        />
      </div>

      <div className="space-y-8">
        {PROJECTS_DATA.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            index={index}
            total={PROJECTS_DATA.length}
            onSelectCaseStudy={onSelectCaseStudy}
          />
        ))}
      </div>
    </section>
  );
}

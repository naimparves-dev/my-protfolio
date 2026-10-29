export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  impactMetric: string;
  liveUrl: string;
  githubUrl: string;
  image: string; // Put image in public/projects/ (e.g. '/projects/project-1.png')
  accentColor: 'emerald' | 'blue' | 'cyan';
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export interface TechStackItem {
  name: string;
  short: string;
  category: 'Frontend' | 'Backend' | 'Business & SEO';
  color: string;
  bg: string;
  border: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  accent: 'emerald' | 'blue';
}

export interface ProcessStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TerminalCommand {
  cmd: string;
  out: string;
}

export interface TerminalScenario {
  id: string;
  label: string;
  commands: TerminalCommand[];
}

export interface SectionNavItem {
  id: string;
  label: string;
  title: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

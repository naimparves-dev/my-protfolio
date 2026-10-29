import {
  ProjectItem,
  ServiceItem,
  TechStackItem,
  ExperienceItem,
  ProcessStep,
  TerminalScenario,
  SectionNavItem,
  FaqItem,
} from '@/types/portfolio';

// ============================================================================
// DEVELOPER CONFIG: Only YOU can change this data in VS Code.
// Visitors on the deployed website cannot edit or modify anything.
// ============================================================================

export const PERSONAL_INFO = {
  name: 'Md Naim Parves',
  handle: 'naimparves-dev',
  location: 'Gulshan, Dhaka, Bangladesh',
  email: 'mdnaimparves7@gmail.com',
  phone: '+880 1316-489016',
  phoneRaw: '+8801316489016',
  linkedin: 'https://www.linkedin.com/in/md-naim-parves/',
  github: 'https://github.com/naimparves-dev',
  // Drop your photo at: public/images/profile.png
  // If the file is not there yet, the site automatically renders the neon vector portrait.
  avatarUrl: '/images/profile.png',
  typewriterRoles: [
    'Full-Stack MERN & Next.js Developer',
    'Key Account Manager & Growth Strategist',
    'Technical SEO & Digital Marketing Expert',
    'Python & Enterprise ERP Contributor',
  ],
  aboutText:
    'I am a tech enthusiast and result-driven professional bridging the gap between Software Development, Key Account Management, and Business Growth. With a strong foundation in Full-Stack Development (MERN & Next.js) and hands-on experience in international client success at Smart-Lab Global, I help businesses build robust digital solutions while ensuring strategic growth and client satisfaction. My unique blend of technical architecture knowledge and marketing intelligence allows me to design smarter engineering and growth strategies that drive real, measurable results.',
  whatIBring: [
    'Developing responsive, user-centric web applications using modern MERN & Next.js stacks.',
    'Managing key international accounts, ensuring seamless communication, and driving global client success.',
    'Applying data-driven digital marketing & SEO strategies to boost online presence and business growth.',
    'Continuously exploring modern technologies across both technical architecture and business operations.',
  ],
};

export const SECTIONS_LIST: SectionNavItem[] = [
  { id: 'intro', label: 'intro', title: 'Hero' },
  { id: 'about', label: 'about', title: 'About Me' },
  { id: 'services', label: 'services', title: 'Services' },
  { id: 'stack', label: 'stack', title: 'Tech Stack' },
  { id: 'work', label: 'work', title: 'Selected Work' },
  { id: 'process', label: 'process', title: 'Process' },
  { id: 'terminal', label: 'under_hood', title: 'Under the Hood' },
  { id: 'experience', label: 'experience', title: 'Experience' },
  { id: 'contact', label: 'contact', title: 'Contact' },
];

// ============================================================================
// REUSABLE PROJECTS ARRAY — Edit these 4 or add a 5th/6th object in VS Code!
// Put screenshots in public/projects/project-1.png, project-2.png, etc.
// ============================================================================
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'News Portal 24 — Full-Stack Dynamic News & Media Platform',
    category: 'MERN + NEXT.JS',
    tagline: 'Real-time multi-category news platform with admin CMS & SEO-optimized articles.',
    description:
      'A production-grade full-stack news portal built with Next.js, Node.js, Express, and MongoDB featuring categorized news streams, an admin content management dashboard, JWT authentication, and server-side rendered article routes for high performance and technical SEO.',
    highlights: [
      'Engineered SSR & ISR news feed and article pages with Next.js and TypeScript for sub-second loads and top technical SEO scores.',
      'Built RESTful APIs with Node.js and Express.js supporting category management, publishing workflows, and secure admin authentication.',
      'Designed a responsive Tailwind CSS admin CMS with live article publishing, image handling, and reader analytics.',
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    impactMetric: '99 Lighthouse Performance & Technical SEO Score',
    liveUrl: 'https://news-portal-24-4v8d.vercel.app/',
    githubUrl: 'https://github.com/naimparves-dev/news-portal-24',
    image: '/projects/project-1.jpg',
    accentColor: 'emerald',
  },
  {
    id: 'proj-2',
    title: 'Wanderlast — Full-Stack Travel Discovery & Booking System',
    category: 'FULL-STACK TRAVEL',
    tagline: 'Destination discovery, curated trips & end-to-end booking with admin management.',
    description:
      'Wanderlast is a full-stack travel booking platform where users discover destinations, search trips by location, date, budget and group size, manage bookings, while admins curate destinations and oversee the entire booking pipeline from a dedicated dashboard.',
    highlights: [
      'Built a rich destination discovery experience with advanced search filters for location, date/duration, budget, and group size.',
      'Implemented full booking lifecycle — browse, book, and manage trips with a personal "My Bookings" area and user profiles.',
      'Developed a role-based admin panel for destination management, trip curation, and booking oversight.',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    impactMetric: 'End-to-end travel booking pipeline with admin control',
    liveUrl: 'https://github.com/naimparves-dev',
    githubUrl: 'https://github.com/naimparves-dev',
    image: '/projects/project-2.jpg',
    accentColor: 'blue',
  },
  // {
  //   id: 'proj-3',
  //   title: 'GrowthPilot — Technical SEO Audit & Lead Funnel Analytics Suite',
  //   category: 'MERN + SEO TECH',
  //   tagline: 'Full-stack marketing intelligence dashboard for technical SEO and lead conversion.',
  //   description:
  //     'A full-stack web application combining technical web engineering with digital marketing intelligence to track keyword rankings, on-page SEO health, social campaign ROI, and lead capture funnels.',
  //   highlights: [
  //     'Created an automated on-page SEO crawler and metadata validator using Node.js and Python microservice scripts.',
  //     'Built real-time conversion funnel visualizations and UTM campaign trackers with responsive React components.',
  //     'Engineered high-speed landing page templates with schema markup and Core Web Vitals optimization.',
  //   ],
  //   techStack: ['Next.js', 'Python', 'Node.js', 'React', 'Tailwind CSS', 'SEO Architecture'],
  //   impactMetric: 'Data-driven SEO & lead generation automation',
  //   liveUrl: 'https://github.com/naimparves-dev',
  //   githubUrl: 'https://github.com/naimparves-dev',
  //   image: '/projects/project-3.png',
  //   accentColor: 'cyan',
  // },
  // {
  //   id: 'proj-4',
  //   title: 'FlowSync Enterprise — Inventory & Business Workflow Web Portal',
  //   category: 'FULL-STACK + PYTHON/SQL',
  //   tagline: 'Modern web interface & Python/PostgreSQL data sync for business operations.',
  //   description:
  //     'A full-stack operational portal bridging modern React/Next.js frontends with Python and PostgreSQL backend workflows for inventory management, procurement approvals, and department reporting.',
  //   highlights: [
  //     'Architected clean relational database schemas and query optimizations in PostgreSQL paired with Python & Node.js endpoints.',
  //     'Built intuitive data tables with multi-column filtering, batch export, and real-time status transitions.',
  //     'Streamlined business process automation to reduce manual data entry across operations teams.',
  //   ],
  //   techStack: ['React', 'Next.js', 'Python', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
  //   impactMetric: 'Automated enterprise workflow & data synchronization',
  //   liveUrl: 'https://github.com/naimparves-dev',
  //   githubUrl: 'https://github.com/naimparves-dev',
  //   image: '/projects/project-4.png',
  //   accentColor: 'emerald',
  // },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    title: 'Full-Stack Web Development (MERN & Next.js)',
    tag: 'FULL-STACK',
    summary: 'End-to-end web applications engineered for speed, scalability, and clean user experience.',
    details:
      'From responsive React & Next.js frontends styled with Tailwind CSS to secure Node.js/Express backends and relational or NoSQL databases, I build modern web applications that solve real business problems.',
    deliverables: [
      'Next.js & React Single-Page / SSR Apps',
      'REST APIs with Node.js & Express.js',
      'TypeScript Type-Safe Architecture',
      'Responsive Tailwind CSS & HeroUI/shadcn Interfaces',
    ],
  },
  {
    id: '02',
    title: 'Key Account Management & Global Client Success',
    tag: 'CLIENT SUCCESS',
    summary: 'Strategic relationship management bridging international clients with engineering & design teams.',
    details:
      'I oversee international accounts and marketplace operations end-to-end—handling discovery, scope alignment, milestone communication, and long-term retention so technical deliveries match business goals.',
    deliverables: [
      'International Client Onboarding & Retention',
      'Cross-Functional Team Coordination',
      'Marketplace Operations & Global Sales',
      'Transparent Milestone & SLA Reporting',
    ],
  },
  {
    id: '03',
    title: 'Technical SEO & Search Engine Growth',
    tag: 'SEO & GROWTH',
    summary: 'Code-level SEO architecture and content strategies that turn search impressions into qualified leads.',
    details:
      'Combining full-stack developer control with professional digital marketing expertise, I optimize Core Web Vitals, semantic HTML, structured schema data, and keyword targeting for sustainable organic growth.',
    deliverables: [
      'Core Web Vitals & PageSpeed Optimization',
      'On-Page & Technical SEO Audits',
      'Schema Markup & Meta Architecture',
      'Keyword & Conversion Rate Optimization',
    ],
  },
  {
    id: '04',
    title: 'Social Media Marketing (SMM) & Lead Generation',
    tag: 'MARKETING',
    summary: 'Data-backed campaigns, profile optimization, and funnel strategies that expand brand reach.',
    details:
      'I design targeted social media marketing and lead generation campaigns that build authority, nurture prospects, and drive measurable pipeline growth for digital products and services.',
    deliverables: [
      'Social Media Strategy & Campaign Management',
      'B2B & Global Lead Generation Funnels',
      'Marketplace Profile Optimization',
      'Content Planning & Performance Analytics',
    ],
  },
  {
    id: '05',
    title: 'Backend Scripting, Python & ERP Architecture',
    tag: 'SYSTEMS',
    summary: 'Structured backend logic, PostgreSQL data modeling, and enterprise workflow understanding.',
    details:
      'Drawing on hands-on experience with Python, PostgreSQL, and Odoo ERP architecture, I help teams align their internal business operations with reliable software systems.',
    deliverables: [
      'Python Backend Scripting & Automation',
      'PostgreSQL Database Modeling',
      'Enterprise ERP Workflow Alignment',
      'API & Data Synchronization',
    ],
  },
];

export const TECH_STACK_DATA: TechStackItem[] = [
  { name: 'Next.js', short: 'NEXT', category: 'Frontend', color: '#ffffff', bg: 'rgba(17, 24, 39, 0.9)', border: '#38bdf8' },
  { name: 'React', short: 'REACT', category: 'Frontend', color: '#38bdf8', bg: 'rgba(12, 42, 62, 0.85)', border: '#38bdf8' },
  { name: 'TypeScript', short: 'TS', category: 'Frontend', color: '#60a5fa', bg: 'rgba(23, 37, 84, 0.85)', border: '#60a5fa' },
  { name: 'JavaScript', short: 'JS', category: 'Frontend', color: '#facc15', bg: 'rgba(59, 47, 6, 0.85)', border: '#facc15' },
  { name: 'Tailwind CSS', short: 'TW', category: 'Frontend', color: '#2dd4bf', bg: 'rgba(6, 52, 48, 0.85)', border: '#2dd4bf' },
  { name: 'HTML5', short: 'HTML', category: 'Frontend', color: '#fb923c', bg: 'rgba(59, 24, 8, 0.85)', border: '#fb923c' },
  { name: 'Node.js', short: 'NODE', category: 'Backend', color: '#4ade80', bg: 'rgba(8, 47, 25, 0.85)', border: '#4ade80' },
  { name: 'Express.js', short: 'EX', category: 'Backend', color: '#a7f3d0', bg: 'rgba(6, 40, 30, 0.85)', border: '#34d399' },
  { name: 'Python', short: 'PY', category: 'Backend', color: '#60a5fa', bg: 'rgba(22, 42, 69, 0.85)', border: '#60a5fa' },
  { name: 'PostgreSQL', short: 'SQL', category: 'Backend', color: '#93c5fd', bg: 'rgba(23, 37, 84, 0.85)', border: '#93c5fd' },
  { name: 'Odoo ERP', short: 'ERP', category: 'Business & SEO', color: '#c084fc', bg: 'rgba(46, 16, 101, 0.85)', border: '#c084fc' },
  { name: 'SEO & Growth', short: 'SEO', category: 'Business & SEO', color: '#34d399', bg: 'rgba(6, 54, 38, 0.85)', border: '#34d399' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Key Account Manager',
    company: 'Smart-Lab Global',
    type: 'Full-time · On-site',
    period: 'Mar 2026 – Present',
    duration: '8 mos',
    location: 'Gulshan, Dhaka, Bangladesh',
    description:
      'As a Key Account Manager, I manage international clients and key accounts while overseeing marketplace operations to ensure client success. I handle sales, client communication, and coordinate with development, design, and marketing teams to deliver high-quality solutions and build long-term relationships.',
    skills: [
      'Key Account Management',
      'International Sales',
      'Client Communication',
      'Marketplace Operations',
      'Team Coordination',
      'Strategic Growth',
    ],
    accent: 'emerald',
  },
  {
    id: 'exp-2',
    role: 'Digital Marketing Intern',
    company: 'Smart-Lab Global',
    type: 'Internship · On-site',
    period: 'Sep 2025 – Feb 2026',
    duration: '6 mos',
    location: 'Gulshan, Dhaka, Bangladesh',
    description:
      'As a Trainee in Marketplace Operations & Digital Marketing, I supported account management, including profile development, client communication, and global sales. I also assisted with content planning and ad campaign support, gaining hands-on experience in marketplace management, sales optimization, and digital marketing.',
    skills: [
      'Marketplace Operations',
      'Digital Marketing',
      'Global Sales',
      'Content Planning',
      'Ad Campaign Support',
    ],
    accent: 'blue',
  },
  {
    id: 'exp-3',
    role: 'Software Development Intern',
    company: 'Intelligent Automation Technology Ltd. (IATL)',
    type: 'Internship · On-site',
    period: 'Apr 2025 – Sep 2025',
    duration: '6 mos',
    location: 'Gulshan, Dhaka, Bangladesh',
    description:
      'During my Internship at IATL, I gained hands-on experience working with the Odoo ERP system and Python (PostgreSQL database). I contributed to real-world projects, improving my understanding of business operations and ERP workflows while strengthening my technical skills and supporting my professional growth.',
    skills: ['Python (Programming Language)', 'PostgreSQL', 'Odoo ERP Architecture', 'ERP Workflows'],
    accent: 'emerald',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery & Account Alignment',
    subtitle: 'Understanding technical scope + business KPIs',
    description:
      'Every project begins by aligning technical requirements with business goals—combining a Key Account Manager’s strategic communication with a Full-Stack Developer’s architectural clarity.',
  },
  {
    num: '02',
    title: 'Full-Stack Architecture & UI Blueprint',
    subtitle: 'Next.js / MERN stack + database & SEO structure',
    description:
      'I map out the frontend component hierarchy, REST API endpoints, database models, and technical SEO schema before writing production code so milestones stay predictable.',
  },
  {
    num: '03',
    title: 'Agile Build & Staging Review',
    subtitle: 'Clean TypeScript code + responsive Tailwind UI',
    description:
      'Iterative full-stack implementation with clean, maintainable code, mobile-first Tailwind CSS styling, and interactive staging previews you can test at every milestone.',
  },
  {
    num: '04',
    title: 'Launch, SEO & Growth Scaling',
    subtitle: 'Deployment + search visibility & long-term support',
    description:
      'Production deployment with Core Web Vitals optimization, technical SEO verification, documentation, and ongoing strategic support to drive real conversions.',
  },
];

export const TERMINAL_SCENARIOS: TerminalScenario[] = [
  {
    id: 'fullstack',
    label: 'Full-Stack Build (Next.js)',
    commands: [
      {
        cmd: 'npx create-next-app@latest naim-portfolio --ts --tailwind --app',
        out: '✔ Initialized Next.js 15 App Router + TypeScript + Tailwind CSS + HeroUI/shadcn',
      },
      {
        cmd: 'npm run build && npm run test:api',
        out: '✔ Compiled modular components in 1.2s · REST API & DB schemas verified',
      },
      {
        cmd: 'naim deploy --edge --production',
        out: '✔ Live on Edge Network · LCP 0.9s · CLS 0.00 · INP 34ms · Lighthouse 99/100',
      },
    ],
  },
  {
    id: 'growth',
    label: 'SEO & Growth Audit',
    commands: [
      {
        cmd: 'naim seo:audit --domain client-platform.io --deep',
        out: '✔ Crawled 128 pages · Schema.org JSON-LD valid · Meta & OpenGraph 100%',
      },
      {
        cmd: 'naim funnel:sync --channels "SEO,SMM,GlobalSales"',
        out: '✔ Key Account pipeline synced · Conversion tracking active (+42% qualified leads)',
      },
    ],
  },
  {
    id: 'erp',
    label: 'Python & PostgreSQL Sync',
    commands: [
      {
        cmd: 'python3 manage_erp_sync.py --db postgres --verify-models',
        out: '✔ Connected to PostgreSQL · 18 enterprise workflow tables indexed (19ms)',
      },
      {
        cmd: 'pytest tests/test_inventory_pipeline.py',
        out: '✔ 24 passed in 0.41s · Zero data drift across business operations',
      },
    ],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    q: 'How long does a typical Full-Stack web project take?',
    a: 'Depending on scope and integrations, most custom Next.js and MERN stack web applications take between 2 to 6 weeks from initial architecture to production deployment.',
  },
  {
    q: 'How does your Key Account Management background benefit my project?',
    a: 'Unlike developers who only focus on code in isolation, I bridge technical execution with business goals—ensuring clear milestone communication, predictable timelines, and solutions built to convert and retain users.',
  },
  {
    q: 'Do you also handle Technical SEO and post-launch digital growth?',
    a: 'Yes. Every application I build includes clean semantic markup, Core Web Vitals optimization, and technical SEO foundations, and I also support ongoing SEO, SMM, and lead generation strategies.',
  },
  {
    q: 'Are you open to full-time opportunities, freelance builds, or consulting?',
    a: 'Yes! Feel free to reach out via the contact form, email (mdnaimparves7@gmail.com), or LinkedIn to discuss Full-Stack engineering roles, Key Account leadership, or custom project collaborations.',
  },
];

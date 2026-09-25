export const translations = {

  // ─────────────────────────────────────────────────────────── ENGLISH ──
  en: {
    nav: {
      services:  'Services',
      howWeWork: 'How we work',
      work:      'Our work',
      caseStudies: 'Case Studies',
      contact:   'Contact',
      about:     'About',
      blog:      'Blog',
      cta:       'Get in touch',
      skip:      'Skip to main content',
      home:      'VOTUM — home',
      menu:      'Main menu',
      openMenu:  'Open menu',
      closeMenu: 'Close menu',
      close:     'Close',
      language:  'Language',
      backToTop: 'Back to top',
    },

    hero: {
      eyebrow:     'End-to-End Engineering',
      title:       { line1: 'Engineered', line2: 'for', accent: 'impact.' },
      lead:        'From strategy to operations — we design, build and run the software your business depends on.',
      ctaPrimary:  'Get in touch →',
      ctaSecondary:'Case Studies',
    },

    intro: {
      title: 'About VOTUM',
      body:  'VOTUM is a software engineering and technology consultancy based in Sofia, Bulgaria. Founded in {year} and operated by {legalName}, we help companies plan, build and run business-critical software across five areas: technology strategy and consulting, software engineering, DevOps and cloud, managed services and operations, and quality engineering and test automation.',
    },

    stats: [
      { num: '2024',       label: 'Founded in Sofia',       color: 'green' },
      { num: '{serviceCount}', label: 'Service areas',     color: 'teal'  },
      { num: '{caseCount}', label: 'Published case studies', color: 'green' },
      { num: 'End-to-end', label: 'Strategy to operations', color: 'teal'  },
    ],

    services: {
      eyebrow:   'What we do',
      title:     'End-to-end engineering',
      lead:      "We cover strategy, build, delivery and operations, so you don't have to coordinate separate vendors for each.",
      learnMore: 'Learn more →',
      cards: [
        {
          title:      'Technology Strategy & Consulting',
          body:       'Make the right technology decisions before they become expensive ones. We work with your leadership to define clear roadmaps, evaluate build-vs-buy tradeoffs, and align your architecture with your long-term business goals.',
          tags:       [
            { label: 'Architecture Assessment', variant: 'green' },
            { label: 'Vendor Evaluation',       variant: 'green' },
            { label: 'Risk Reduction',          variant: 'green' },
            { label: 'Roadmap Planning',        variant: 'green' },
          ],
        },
        {
          title:      'Software Engineering',
          body:       "From product concept to production-ready code. We build scalable, maintainable applications designed to grow with your business — not become tomorrow's technical debt.",
          tags:       [
            { label: 'Custom Development', variant: 'teal' },
            { label: 'Code Quality',       variant: 'teal' },
            { label: 'Scalability',        variant: 'teal' },
          ],
        },
        {
          title:      'DevOps & Cloud',
          body:       "Infrastructure that doesn't slow your team down. We design and operate CI/CD pipelines, containerized environments, and cloud-native platforms built for speed, reliability, and scale.",
          tags:       [
            { label: 'CI/CD Pipelines',       variant: 'green' },
            { label: 'Infrastructure-as-Code', variant: 'green' },
            { label: 'Containerization',       variant: 'green' },
            { label: 'Cloud Architecture',     variant: 'green' },
          ],
        },
        {
          title:      'Managed Services & Operations',
          body:       "We don't just build and hand off. We stay on to monitor, maintain, and continuously improve your systems — so your team focuses on features, not firefighting.",
          tags:       [
            { label: 'Incident Management',   variant: 'teal' },
            { label: '24/7 Monitoring',       variant: 'teal' },
            { label: 'Optimization',          variant: 'teal' },
            { label: 'Proactive Maintenance', variant: 'teal' },
          ],
        },
        {
          title:      'Quality Engineering & Test Automation',
          body:       'Testing strategies that improve reliability across the stack. We build automated test suites, implement quality gates, and establish processes that catch issues before they reach production.',
          tags:       [
            { label: 'Test Automation',    variant: 'green' },
            { label: 'Quality Strategy',   variant: 'green' },
            { label: 'Performance Testing',variant: 'green' },
            { label: 'Quality Gates',      variant: 'green' },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: 'How we work',
      visualNote: 'Example delivery dashboard · illustrative metrics',
      title:   'A process designed around no surprises.',
      lead:    'Every engagement follows the same structured process — designed to reduce delivery risk, align technology with business goals, and give your team solutions it can stand behind.',
      phases: [
        {
          eyebrow: 'Phase 01 — Discovery & Strategy',
          title:   'We start by understanding your business, not your backlog.',
          body:    'Before any solution is designed or built, we define your technology strategy, align stakeholders, and assess your current landscape. The result is a clear architecture and delivery roadmap everyone can commit to.',
          checks:  [
            'Agreed scope before build',
            'Stakeholder workshops & requirements gathering',
            'Technology strategy & architecture definition',
            'Technical audit of systems and cloud landscape',
            'Risk assessment and dependency mapping',
          ],
        },
        {
          eyebrow: 'Phase 02 — Build & Delivery',
          title:   'Engineering excellence across development, quality, and delivery.',
          body:    'Every solution is built, tested, and deployed using modern engineering, DevOps, and quality practices—ensuring your team inherits systems that are reliable, scalable, and maintainable.',
          checks:  [
            '2-week sprint cycles with live demos',
            'High automated test coverage as a standard',
            'Built-in quality engineering & test automation',
            'CI/CD and infrastructure automation by default',
            'Cloud-native and DevOps best practices',
          ],
        },
        {
          eyebrow: 'Phase 03 — Launch & Operations',
          title:   "We don't disappear after go-live.",
          body:    'We ensure your systems run reliably at scale through observability, proactive operations, and continuous optimization—acting as your long-term technology partner.',
          checks:  [
            'Zero-downtime production deployments',
            'Observability and monitoring built in',
            'Cloud and DevOps operations at scale',
            'Managed services with L1–L3 support',
            'Optional SLA and long-term support',
          ],
          cta: { label: 'Get in touch →', href: '#contact', variant: 'btn-primary' },
        },
      ],
    },

    // Case studies — the list, order, URLs and technologies are in
    // src/config/cases.js; this is the copy per slug. All five projects were
    // delivered by members of the current VOTUM team before VOTUM IT EOOD &
    // Co KD was founded in 2024 — never write "VOTUM delivered…" for them.
    // Evidence rules: CONTENT_EVIDENCE_REQUIRED.md §F.
    cases: {
      eyebrow: 'Our work',
      title:   'Selected project experience',
      lead:    'Selected enterprise software projects delivered by the engineering team behind VOTUM.',
      readLink: 'Read the case study →',
      allLink:  'All case studies →',
      items: {
        'software-delivery-platform-operations': {
          category:  'Managed Services & Operations',
          title:     'Software Delivery Platform Transformation & Operations',
          cardBody:  'A centralized software delivery and testing platform, followed by managed operations under agreed SLAs — maintenance, L1–L2 user support, incident management and continuous enhancements.',
          client:    'A global automotive organization with 150,000+ employees. The platform in scope supports 1,000+ users.',
          challenge: 'Fragmented tools, limited visibility and inconsistent processes across global teams made software delivery and testing hard to manage. Following a large-scale transformation, the organization needed a long-term partner to operate, maintain and continuously improve its centralized software delivery and testing platform.',
          solution:  'The team defined and executed a transformation strategy to unify software delivery and testing: a centralized platform based on OpenText ALM and UFT, with legacy systems migrated into a single ecosystem. Building on this foundation, the engagement included managed services for the platform — system maintenance, L1–L2 user support, incident management and continuous platform enhancements, all under agreed SLAs.',
          outcome:   'A standardized, centralized platform for software delivery and testing, operated under agreed SLAs. Day-to-day platform operations and user support were covered by the managed-services scope, alongside continuous improvements to the platform.',
          stats:     [{ value: '1,000+', label: 'users' }, { value: 'SLA', label: 'based operations' }, { value: 'L1–L2', label: 'user support' }],
        },
        'insurance-data-archival-migration': {
          category:  'Data Migration & Cloud Architecture',
          title:     'Data Archival and Migration for an Insurance Group',
          cardBody:  'An insurance group needed to decommission legacy OpenText ALM and PPM platforms while keeping historical data, attachments and audit trails accessible — without staying tied to the legacy vendor.',
          client:    'An insurance group decommissioning its OpenText ALM and PPM platforms.',
          challenge: 'Large volumes of historical Oracle database records, extensive attachments and strict audit and compliance obligations meant the data had to remain accessible and secure after the legacy platforms were switched off — without staying tied to the legacy vendor infrastructure.',
          solution:  'The team designed and implemented a cloud-native archival solution on AWS. The Oracle database was migrated to PostgreSQL on AWS RDS, including schema optimization. Attachments and documents were extracted and structured to preserve their relationships with the underlying data. A lightweight access tool, built for audit and compliance use cases, lets users query archived records and retrieve the related files.',
          outcome:   'Historical ALM and PPM data preserved in a PostgreSQL archive on AWS, with attachments kept linked to their records and an access tool for audit and compliance queries. Access to the historical data no longer depends on the legacy SaaS platforms.',
          stats:     [{ value: 'ALM/PPM', label: 'data archived' }, { value: 'AWS', label: 'cloud-native archive' }, { value: 'Audit', label: 'and compliance access' }],
        },
        'asset-management-advisory-platform': {
          category:  'Asset Management Platform',
          title:     'Digital Advisory Platform for an Asset Management Firm',
          cardBody:  "An asset management firm replaced a legacy system — limited in usability and scalability — with a new web platform for its consultants' planning, activity tracking and invoicing.",
          client:    'An asset management firm whose specialist investment consultants worked with a legacy platform.',
          challenge: "The firm's legacy platform could not scale. Outdated workflows, poor usability and siloed collaboration were slowing down its specialist investment consultants.",
          solution:  'The team designed and built a new web platform from scratch — covering planning, design, development, testing and full rollout. The solution has a microservices backend, a React frontend, secure authentication and containerized deployment.',
          outcome:   'Planning, service mediation, activity tracking and invoicing moved onto the new platform, with invoicing automated. Manual workflows were replaced by digital ones.',
          stats:     [{ value: 'Digital', label: 'end-to-end workflows' }, { value: 'Automated', label: 'invoicing' }, { value: 'Full', label: 'stack delivery' }],
        },
        'on-premise-kubernetes-platform': {
          category:  'DevOps Platform',
          title:     'On-Premise Kubernetes Platform for Application Delivery',
          cardBody:  'An organization with strict on-premise security requirements needed a DevOps platform for modern application delivery on its own infrastructure.',
          client:    'An organization with strict on-premise security requirements.',
          challenge: 'To meet growing application delivery demands, the organization needed a fully on-premise DevOps platform that supports modern deployment practices while meeting strict enterprise security and infrastructure requirements.',
          solution:  'The team designed and implemented an on-premise Kubernetes platform from scratch, with dedicated clusters for development and production, integrated core services (ingress, storage, backups, monitoring) and CI/CD pipelines in Jenkins with built-in security scanning.',
          outcome:   "A consistent, pipeline-based delivery path from development to production on the organization's own infrastructure, with separate development and production clusters and security scanning built into the CI/CD pipelines.",
          stats:     [{ value: 'CI/CD', label: 'automated deploys' }, { value: '2', label: 'cluster environments' }, { value: 'On-prem', label: 'Kubernetes platform' }],
        },
        'automotive-test-automation-framework': {
          category:  'Test Automation',
          title:     'Test Automation Framework for an Automotive Organization',
          cardBody:  'An automotive organization relied heavily on manual UI and functional testing, with slow release cycles and growing delivery risk.',
          client:    'An automotive organization that relied heavily on manual UI and functional testing.',
          challenge: "Slow release cycles, limited scalability and growing system complexity were creating delivery risk, and the testing function couldn't keep pace with delivery demands.",
          solution:  'The team designed and implemented a test automation framework from scratch on an industry-standard test automation platform, defined standardized testing processes, and integrated automated testing directly into the development and release lifecycle.',
          outcome:   'Automated testing became part of the development and release lifecycle, with standardized testing processes and less reliance on manual UI and functional testing.',
          stats:     [{ value: 'Framework', label: 'built from scratch' }, { value: 'Standard', label: 'testing processes' }, { value: 'Integrated', label: 'in the release lifecycle' }],
        },
      },
    },

    // /case-studies/<slug> — labels. {legalName}/{year} come from config/company.js
    casePage: {
      eyebrow:      'Case study',
      note:         'This project was delivered by members of the current VOTUM team before {legalName} was founded in {year}.',
      client:       'Client context',
      challenge:    'The challenge',
      solution:     'What the team did',
      outcome:      'The result',
      technologies: 'Technologies',
      services:     'Related services',
      related:      'Related case studies',
      cta:          { title: 'Working on something similar?', body: 'Tell us about your project — a short outline is enough to start the conversation.' },
    },

    // /case-studies — hub. {year}/{teamSince} come from config/company.js
    caseStudiesHub: {
      eyebrow:        'Case studies',
      h1:             'Software Engineering Case Studies',
      intro:          'Selected enterprise software projects delivered by the engineering team behind VOTUM — software delivery platforms and their operation, data archival and migration, web platforms, DevOps platforms and test automation. Client names are not published.',
      cardsTitle:     'Projects',
      portfolioTitle: 'About this portfolio',
      portfolio:      'VOTUM was founded in {year} by a team that has worked together on enterprise software projects since {teamSince}. The projects on this page were delivered by members of that team before the company was founded.',
      cta:            { title: 'Working on something similar?', body: 'Describe your project, and we will tell you where we can help.' },
    },
    cta: {
      eyebrow: 'Ready to transform your engineering?',
      title:   "Let's build your competitive advantage.",
      sub:     "Tell us about your vision — we'll come back within {hours} hours with a clear strategy, not a sales pitch.",
      button:  'Get in touch →',
      small:   'No commitment. Response within {hours} h.',
    },

    contact: {
      eyebrow:  "You're one message away",
      title:    'What are you working on?',
      sub:      'Share a rough outline — a paragraph is enough. One of our senior engineers will read it personally and come back with a clear next step within {hours} hours.',
      note:     'No commitment required.',
      sending:  'Sending…',
      privacy:  { before: 'We use the details you send only to respond to your enquiry. See our ', link: 'Privacy Policy', after: '.' },
      send:     'Send message →',
      fields: {
        name:    'Name',
        company: 'Company',
        email:   'Email',
        brief:   'Brief',
      },
      placeholders: {
        name:    'Your name',
        company: 'Company name (optional)',
        email:   'you@company.com',
        brief:   'What are you working on? A rough outline is enough.',
      },
      errors: {
        name:   'Please enter your name',
        email:  'Please enter a valid email address',
        brief:  'Please describe briefly what you are working on (at least 10 characters)',
        submit: 'Something went wrong sending your message. Please try again or email {email} directly.',
      },
      success: {
        title:  "We'll be in touch.",
        body:   "Thanks for reaching out. We'll respond within {hours} hours with a clear strategy — not a sales pitch.",
        detail: 'Response within {hours} h · No commitment',
      },
    },

    about: {
      hero: {
        eyebrow: 'About VOTUM',
        titleLines: ['We build', 'engineering'],
        titleTail: 'that',
        titleAccent: 'lasts.',
        lead: 'VOTUM is a senior engineering consultancy based in Sofia, Bulgaria. We embed with your team, take ownership of outcomes, and build the technical foundations that let your product scale — without the overhead of a traditional agency.',
        // The year itself comes from company.foundingYear (src/config/company.js)
        // and is only rendered once it is confirmed.
        // {year} = company.foundingYear, {teamSince} = company.teamSince (config/company.js)
        foundedText: 'VOTUM was founded in {year} by a team that has worked together on enterprise software projects since {teamSince}.',
      },
      stats: [
        { num: '2024',       label: 'Founded in Sofia',       color: 'green' },
        { num: '{serviceCount}', label: 'Service areas',     color: 'teal'  },
        { num: '{caseCount}', label: 'Published case studies', color: 'green' },
        { num: 'End-to-end', label: 'Strategy to operations', color: 'teal'  },
      ],
      mission: {
        eyebrow: 'Our mission',
        quote: 'Engineering organizations that',
        quoteAccent: 'outlast the engagement.',
        paragraphs: [
          'Most agencies optimize for delivery: ship the feature, invoice the hours, move on. We optimize for the moment you no longer need us — when your team is confident, your systems are stable, and the architecture we built together is something you can grow on for years.',
          "That means we embed deeply. We sit in your standups, write your documentation, and have the conversations that don't fit in a Jira ticket. It's slower in the short term and more valuable in the long term.",
          'VOTUM was built by engineers who had spent years watching the same patterns fail — disconnected strategy, short-term execution, and handoffs that left teams worse off than when the engagement started. We set out to build the alternative.',
        ],
      },
      principles: {
        eyebrow: 'How we work',
        title: "Six things we won't compromise on.",
        cards: [
          { num: '01', color: 'green', title: 'Senior engineers only',     body: "We don't staff with juniors and supervise from a distance. Every engineer working on your product has years of production experience. You pay for expertise, you get expertise." },
          { num: '02', color: 'teal',  title: 'Ownership, not output',     body: "We measure success by outcomes, not tickets closed. If a feature shipped but the system is harder to maintain, we didn't succeed. We own the full lifecycle of what we build." },
          { num: '03', color: 'green', title: 'No architecture astronauts', body: "We recommend the simplest solution that solves the real problem. We won't introduce complexity to look sophisticated or to extend the engagement. If a boring solution is the right one, we'll say so." },
          { num: '04', color: 'teal',  title: 'Scope and success criteria agreed before build',  body: "We won't start building until we understand the problem. Every engagement starts with a discovery phase — even a short one. Scope agreed on paper beats scope discovered in code." },
          { num: '05', color: 'green', title: 'Transparent progress',      body: "You see what we're doing every week. No black-box development cycles. Live demos every sprint, open backlogs, and honest status updates — including the hard ones." },
          { num: '06', color: 'teal',  title: 'We leave teams stronger',   body: 'The goal of every engagement is to make ourselves unnecessary. We write the documentation, run the knowledge transfers, and design systems your team can operate confidently without us.' },
        ],
      },
      diff: {
        eyebrow: 'Why VOTUM',
        title: 'Not a typical agency.',
        lead: 'The model most clients have experienced before — and what we do differently.',
        headers: ['Typical agency', 'VOTUM'],
        rows: [
          { label: 'Team composition',  left: 'Mix of seniors and juniors, often rotated between projects',                      right: 'Senior engineers only. The person in your standup is the person writing your code.' },
          { label: 'Engagement model',  left: 'Time-and-materials or fixed-price deliverables, optimized for hours billed',      right: 'Outcome-based. We define success criteria before we start and hold ourselves to them.' },
          { label: 'Handoff',           left: 'Code delivered, documentation minimal, team left to figure out the rest',         right: 'Full documentation, knowledge transfer sessions, and optional long-term support retainer.' },
          { label: 'Strategy',          left: 'Separate from execution — consultants advise, different team builds',             right: 'The engineers who advise are the engineers who build. No strategy-execution gap.' },
        ],
      },
      team: {
        eyebrow: 'The team',
        title: "People who've done this before.",
        note: 'Every person at VOTUM has spent years in production engineering — not in consulting about it. We hire experienced specialists and give them the ownership and environment to keep growing.',
        // kind: 'person' → a named individual (only with real, confirmed data).
        // kind: 'role'   → a role / capability description, rendered without
        //                  initials so it is never mistaken for a personal profile.
        // Real team members (confirmed by the client, 2026-09). `bio` is optional.
        // `photo` is optional too (square image in public/team/); without it the
        // card shows the initials tile.
        // The person bios are SAMPLE text derived from role + tags only — no years,
        // employers, certifications or client names. Each person should review theirs.
        members: [
          { kind: 'person', initials: 'HK', photo: '/team/hristo-kacarov.jpg', name: 'Hristo Kacarov', role: 'Managing Director / CTO',        bio: 'Leads VOTUM and sets its technical direction — from engineering strategy to the architecture decisions behind client projects.', tags: ['Strategy', 'Architecture', 'Leadership'] },
          { kind: 'person', initials: 'VK', photo: '/team/velislav-kunev.jpg', name: 'Velislav Kunev', role: 'Systems Architect',              bio: 'Designs the software and infrastructure architecture behind our client platforms, ensuring clean service integration, scalable cloud foundations, security, and reliability.', tags: ['Architecture', 'Integration', 'Cloud'] },
          { kind: 'person', initials: 'NP', photo: '/team/nikolay-peshev.jpg', name: 'Nikolay Peshev', role: 'Senior DevOps / Cloud Engineer', bio: 'Builds and runs the Kubernetes platforms and CI/CD pipelines that get software into production reliably — and keep it there.', tags: ['Kubernetes', 'CI/CD', 'Cloud'] },
          { kind: 'person', initials: 'BK', photo: '/team/blagovest-kasabov.jpg', name: 'Blagovest Kasabov', role: 'Senior Full-Stack Engineer',     bio: 'Develops web applications end to end, from backend services and APIs to the interfaces people work with every day.', tags: ['Full Stack', 'Backend', 'Frontend'] },
          { kind: 'person', initials: 'IP', photo: '/team/ivan-petrov.jpg', name: 'Ivan Petrov', role: 'Senior Test Manager',            bio: 'Shapes test strategy and automation so that quality is built into the release process rather than checked at the end.', tags: ['Test Automation', 'QA Strategy', 'Release Management'] },
          { kind: 'role',   name: 'Extended team',     role: 'On demand', bio: 'A network of senior engineers available for specific engagements. Every one vetted personally — no recruitment pool, no juniors.', tags: ['Full Stack', 'Mobile', 'Data'] },
        ],
        cta: {
          textBefore: "We're growing carefully.",
          textAfter: " If you're a senior engineer who wants to do high-quality work with clients who care about it, we'd like to hear from you.",
          // Rendered only while company.careers.openRoles is non-empty
          openRolesTitle: 'Open roles',
          // Fallback while there are no published roles
          emailButton: 'Write to us →',
          emailSubject: 'Careers at VOTUM',
        },
      },
    },

    blog: {
      hero: {
        eyebrow: 'Engineering insights',
        titleLines: ['From the', 'engineers', 'doing it.'],
        subStrong: 'Technical writing from the VOTUM team.',
        sub: ' Architecture decisions, delivery patterns, and hard-won lessons from production engineering across 45+ engagements.',
      },
      filtersLabel: 'Filter articles by category',
      // key = stable id used in the ?category= URL parameter
      filters: [
        { key: 'all',                 label: 'All' },
        { key: 'architecture',        label: 'Architecture' },
        { key: 'devops',              label: 'DevOps' },
        { key: 'quality-engineering', label: 'Quality Engineering' },
        { key: 'delivery',            label: 'Delivery' },
        { key: 'case-studies',        label: 'Case Studies' },
      ],
      featured: {
        slug: null, // set once the article exists in src/content/articles.js
        categories: ['case-studies', 'architecture'],
        tags: [
          { label: 'Case Study',   variant: 'green' },
          { label: 'Architecture', variant: 'teal'  },
        ],
        date: 'April 2026',
        title: 'Migrating 400GB of Insurance Data from OpenText SaaS — Without Losing a Single Record',
        excerpt: "A leading European insurance group needed to exit an expensive SaaS vendor contract without disrupting 12 years of archived policyholder data. Here's how we designed a migration that preserved data integrity, maintained audit compliance, and removed the dependency on the legacy vendor.",
        author: null, // set { initials, name, role } once the article and its real author exist
        cta: 'Read article →',
      },
      grid: {
        heading: 'Insights',
        readCta: 'Read →',
        inPreparation: 'Full article in preparation',
        empty: 'No articles in this category yet.',
        articles: [
          {
            slug: null, category: 'devops', icon: 'K8s', tagLabel: 'DevOps', tagVariant: 'teal',
            date: 'March 2026', readTime: '8 min read',
            title: 'Why we stopped using Helm for everything — and what we use instead',
            excerpt: "Helm is a great tool when you need it. But three engagements in a row taught us that it's also the fastest way to create configuration sprawl that nobody can untangle 18 months later.",
          },
          {
            slug: null, category: 'quality-engineering', icon: 'QE', tagLabel: 'Quality Engineering', tagVariant: 'green',
            date: 'February 2026', readTime: '11 min read',
            title: "95% test coverage is a bad goal. Here's what to measure instead.",
            excerpt: "Coverage metrics are comfortable because they're easy to measure. They're also routinely gamed, misunderstood, and used to justify test suites that provide almost no protection against the failures that actually happen in production.",
          },
          {
            slug: null, category: 'architecture', icon: 'ADR', tagLabel: 'Architecture', tagVariant: 'teal',
            date: 'January 2026', readTime: '6 min read',
            title: 'Architecture Decision Records: the one document every engineering team should write but almost none do',
            excerpt: 'Six months into an engagement, the question that kills velocity is "why did we build it this way?" ADRs are the cheapest insurance policy in software engineering. Here\'s our template and how we introduce them into teams that have never used them.',
          },
          {
            slug: null, category: 'delivery', icon: 'SLA', tagLabel: 'Delivery', tagVariant: 'green',
            date: 'December 2025', readTime: '9 min read',
            title: 'What a 99.98% uptime SLA actually costs — and how to design for it without over-engineering',
            excerpt: "The math around availability SLAs is often treated as a business concern rather than an engineering one. It shouldn't be. The architecture decisions that determine whether you hit 99.9% or 99.99% are made months before the SLA is signed.",
          },
          {
            slug: null, category: 'devops', icon: 'CI', tagLabel: 'DevOps', tagVariant: 'teal',
            date: 'November 2025', readTime: '7 min read',
            title: 'The CI pipeline that builds in 4 minutes: what we changed and why most pipelines take 20',
            excerpt: "Slow pipelines kill developer flow. We've optimized CI for three different technology stacks in the last year. The problems are almost always the same, and the fixes are less dramatic than most people expect.",
          },
          {
            slug: null, category: 'delivery', icon: '∅', tagLabel: 'Delivery', tagVariant: 'green',
            date: 'October 2025', readTime: '5 min read',
            title: 'The discovery phase clients want to skip — and why skipping it doubles the engagement cost',
            excerpt: "Every client who's ever pushed to skip discovery has regretted it. Not because we insist on process for its own sake, but because the questions that feel academic in week one become architectural constraints in week eight.",
          },
        ],
      },
      newsletter: {
        eyebrow: 'Stay sharp',
        title: 'Engineering insights, monthly.',
        sub: 'One email per month. Architecture decisions, delivery patterns, and lessons from production. No marketing, no product announcements.',
        label: 'Email address',
        placeholder: 'you@company.com',
        button: 'Subscribe →',
        sending: 'Subscribing…',
        note: 'Unsubscribe any time.',
        privacy: { before: 'See our ', link: 'Privacy Policy', after: '.' },
        success: 'Thanks — your subscription request was received.',
        devWarning: 'Development notice: VITE_NEWSLETTER_ENDPOINT is not set. This form is disabled and the whole section is hidden in production builds until an endpoint is configured.',
        errors: {
          email:  'Please enter a valid email address',
          submit: 'We could not subscribe you right now. Please try again later.',
        },
      },
    },

    article: {
      back: '← All insights',
    },

    notFound: {
      eyebrow: 'Error 404',
      title:   'This page does not exist.',
      body:    'The address may be mistyped, or the page may have moved.',
      home:    'Back to home →',
      blog:    'Browse insights',
    },

    // Service pages (/services/<slug>, see src/config/services.js). Everything
    // here must stay supportable: no certifications, partner statuses, client
    // names, response times, SLA figures or statistics.
    servicePage: {
      eyebrow:      'Service',
      problems:     'Problems this service helps solve',
      capabilities: 'Capabilities and scope',
      deliverables: 'Typical deliverables',
      technologies: 'Technologies from our project work',
      cases:        'Relevant project experience',
      caseLink:     'Read the case study →',
      approach:     'How we approach the engagement',
      related:      'Related services',
      cta:          'Contact us →',
    },

    servicePages: {
      'technology-consulting': {
        h1: 'Technology Strategy & Architecture Consulting',
        intro: [
          'Make the right technology decisions before they become expensive ones. We work with your leadership and engineering teams to review your architecture, evaluate build-vs-buy and vendor options, and turn business goals into a technology roadmap your teams can deliver.',
        ],
        problems: [
          'Technology decisions are made project by project, without an agreed direction.',
          'It is unclear whether to build, buy or extend — and what each option really costs.',
          'Legacy systems and technical debt slow delivery, but modernization priorities are not defined.',
          'Vendor and platform options are hard to compare objectively.',
          'Architecture and business goals have drifted apart.',
        ],
        capabilities: [
          { title: 'Architecture reviews',          body: 'Assessment of your current systems and cloud landscape: structure, dependencies, risks and technical debt.' },
          { title: 'Technology strategy & roadmaps', body: 'A clear, actionable roadmap that aligns technology choices with your long-term business goals.' },
          { title: 'Build-vs-buy analysis',         body: 'A structured comparison of building, buying or extending, with a cost-benefit view of each option.' },
          { title: 'Vendor & platform evaluation',  body: 'An objective assessment of vendor and platform options against your requirements.' },
          { title: 'Modernization planning',        body: 'Prioritised plans for modernizing legacy systems and reducing technical debt.' },
          { title: 'Stakeholder alignment',         body: 'Workshops with leadership and engineering to agree priorities, risks and dependencies.' },
        ],
        deliverables: [
          'Architecture assessment with findings and recommendations',
          'Technology strategy and delivery roadmap',
          'Build-vs-buy and vendor evaluation with cost-benefit analysis',
          'Risk assessment and dependency map',
          'Modernization priorities and a phased plan',
        ],
        technologies: [],
        approach: [
          { title: 'Discovery',                                        body: 'We start by understanding your business, stakeholders and current landscape — not your backlog.' },
          { title: 'Scope and success criteria agreed before build',   body: 'Before recommendations turn into delivery work, we agree scope and success criteria with you.' },
          { title: 'Actionable output',                                body: 'Recommendations come with priorities, risks and a roadmap your teams can execute.' },
          { title: 'From advice to delivery',                          body: 'The engineers who advise can also build, so the strategy does not get lost in a handoff.' },
        ],
        cta: { title: 'Planning a technology decision?', body: 'Tell us what you are deciding on — a short outline is enough to start the conversation.' },
      },

      'software-development': {
        h1: 'Custom Software Development',
        intro: [
          'From product concept to production-ready code. We design and build custom, business-critical software — modern web platforms, backend services and the interfaces people work with every day — designed to be maintainable, testable and scalable.',
        ],
        problems: [
          'A legacy system limits usability, scalability or the way your teams work.',
          'Manual, fragmented workflows need to become one integrated digital platform.',
          'A new product needs to reach production with the right architecture from the start.',
          'Existing code has become hard to maintain, test or extend.',
        ],
        capabilities: [
          { title: 'Custom web platforms',             body: 'Business-critical web applications built from the ground up — planning, design, development, testing and rollout.' },
          { title: 'Backend & frontend engineering',   body: 'Scalable backend services and APIs, and React frontends for the people who use the system every day.' },
          { title: 'Legacy modernization',             body: 'Replacing or modernizing legacy systems and moving manual workflows onto an integrated platform.' },
          { title: 'Secure authentication',            body: 'Authentication and access management built into the platform, for example with Keycloak.' },
          { title: 'Containerized delivery',           body: 'Applications packaged and deployed with Docker and Kubernetes, with automated CI/CD pipelines.' },
          { title: 'Maintainable by design',           body: 'Clean code, automated tests and documentation that let your team maintain and evolve the product.' },
        ],
        deliverables: [
          'Architecture and technical design',
          'Production-ready application code and APIs',
          'Automated tests and CI/CD pipelines',
          'Containerized deployment setup',
          'Technical documentation and knowledge transfer to your team',
        ],
        technologies: ['React', 'Java / Spring Boot', 'Microservices', 'Keycloak', 'Docker', 'Kubernetes', 'PostgreSQL', 'AWS'],
        approach: [
          { title: 'Discovery & architecture',                         body: 'We clarify the business problem and agree the architecture before production code is written.' },
          { title: 'Scope and success criteria agreed before build',   body: 'Priorities, scope and success criteria are agreed with you up front.' },
          { title: 'Iterative delivery',                               body: '2-week sprint cycles with live demos, so you see working software throughout.' },
          { title: 'Handover or long-term support',                    body: 'Documentation and knowledge transfer for your team, with optional long-term support.' },
        ],
        cta: { title: 'Building or modernizing a platform?', body: 'Share a rough outline of what you want to build or replace.' },
      },

      'devops-cloud': {
        h1: 'DevOps & Cloud Engineering',
        intro: [
          "Infrastructure that doesn't slow your team down. We design, build and operate CI/CD pipelines, Kubernetes platforms and cloud or on-premise environments, so your teams can deploy reliably and repeatably.",
        ],
        problems: [
          'Releases depend on manual steps and take too long.',
          'Environments differ between development and production.',
          'A modern delivery platform is needed, but infrastructure has to stay on-premise for security reasons.',
          'There is little visibility into what is running in production.',
          'Cloud architecture and costs have grown without a clear design.',
        ],
        capabilities: [
          { title: 'CI/CD pipelines',          body: 'Build and deployment pipelines designed and implemented end to end, including built-in security scanning.' },
          { title: 'Kubernetes platforms',     body: 'Production-ready Kubernetes platforms — on-premise or in the cloud — with separate development and production clusters, ingress, storage, backups and monitoring.' },
          { title: 'Cloud architecture',       body: 'Cloud-native, multi-cloud and hybrid architectures, including migrations from on-premise infrastructure.' },
          { title: 'Infrastructure as code',   body: 'Reproducible environments defined in code instead of configured by hand.' },
          { title: 'Observability',            body: 'Monitoring and alerting built into the platform from the start.' },
          { title: 'Operational readiness',    body: 'Zero-downtime deployment strategies where the platform and architecture support them, backups, disaster-recovery and business-continuity planning, and cloud cost optimization.' },
        ],
        deliverables: [
          'CI/CD pipelines with integrated security scanning',
          'Kubernetes platform for development and production',
          'Infrastructure-as-code definitions for your environments',
          'Monitoring and alerting setup',
          'Backup and disaster-recovery plan',
          'Operational documentation and knowledge transfer',
        ],
        technologies: ['Kubernetes', 'Docker', 'Jenkins', 'AWS', 'PostgreSQL'],
        approach: [
          { title: 'Assessment',                                       body: 'We review your current delivery process, infrastructure and security requirements.' },
          { title: 'Scope and success criteria agreed before build',   body: 'Target platform, scope and success criteria are agreed before implementation starts.' },
          { title: 'Automation by default',                            body: 'CI/CD and infrastructure automation are part of the build, not an afterthought.' },
          { title: 'Operate or hand over',                             body: 'We run the platform for you under managed services, or hand it over with documentation and knowledge transfer.' },
        ],
        cta: { title: 'Need a faster, more reliable delivery platform?', body: 'Tell us how you build and deploy today, and where it hurts.' },
      },

      'managed-services': {
        h1: 'Managed Services & L1–L3 Application Support',
        intro: [
          "We don't just build and hand off. We monitor, maintain and continuously improve business-critical applications and platforms, with L1–L3 support and 24/7 monitoring and support available under agreed SLAs.",
          'L3 engineering support is one of our core strengths: the engineers who support your platform work down to code and configuration level, fix root causes and contribute permanent improvements back into the product.',
        ],
        problems: [
          'Your internal team spends its time firefighting instead of building features.',
          'Incidents get fixed, but the same problems keep coming back.',
          'Support stops at triage — nobody can fix issues at code or configuration level.',
          'Business-critical platforms need monitoring and support outside office hours.',
          'Knowledge of the platform sits with a few people and is not documented.',
        ],
        tiersTitle: 'Support levels: L1, L2 and L3',
        tiersLead: 'Support is organized in three levels. Scope, support hours and service levels are agreed for each engagement.',
        tiers: [
          { level: 'L1', title: 'First-line support',              items: ['Intake and registration of requests and incidents', 'Initial triage and prioritization', 'Routine operational support and user questions'] },
          { level: 'L2', title: 'Application & platform support',  items: ['Investigation at application and platform level', 'Deeper operational troubleshooting', 'Configuration and service-level remediation'] },
          { level: 'L3', title: 'Engineering support',             items: ['Engineering-level troubleshooting', 'Source-code and configuration changes', 'Root-cause remediation and permanent technical fixes', 'Improvements contributed back into the product or platform'] },
        ],
        capabilities: [
          { title: 'Monitoring & alerting',                 body: '24/7 monitoring and support available under agreed SLAs, with alerting on the signals that matter.' },
          { title: 'Incident & problem management',         body: 'Incident response, root-cause analysis and problem management, so recurring issues are fixed at the source.' },
          { title: 'Application & platform maintenance',    body: 'Security patching, vulnerability management, updates and regular health checks.' },
          { title: 'Performance & capacity',                body: 'Performance optimization, capacity planning and scaling decisions based on real usage.' },
          { title: 'Continuous improvement',                body: 'Regular reports on system health, incidents and recommended improvements.' },
          { title: 'Operational ownership',                 body: 'We take responsibility for day-to-day operations within the agreed scope, so your team can focus on new features.' },
        ],
        deliverables: [
          'Support model (L1–L3) and service levels agreed per engagement',
          'Monitoring and alerting setup',
          'Incident, problem and change handling',
          'Regular health, incident and improvement reports',
          'Up-to-date operational documentation',
        ],
        technologies: ['OpenText ALM', 'OpenText UFT'],
        approach: [
          { title: 'Onboarding & knowledge transfer',  body: 'We learn the platform, document it and agree the support model and escalation paths.' },
          { title: 'Agreed service levels',            body: 'Support hours, response targets and escalation are agreed per engagement and written into the SLA.' },
          { title: 'Operate',                          body: 'Monitoring, L1–L3 support and incident handling within the agreed SLA.' },
          { title: 'Improve',                          body: 'Root causes are fixed permanently and improvements are fed back into the platform, with regular reporting.' },
        ],
        cta: { title: 'Looking for a long-term operations partner?', body: 'Tell us which platform needs support and the service level you need.' },
      },

      'test-automation': {
        h1: 'Test Automation & Quality Engineering',
        intro: [
          'Shipping with confidence requires more than manual testing. We define test strategies, build maintainable automation frameworks and integrate automated testing into your development and release lifecycle — with quality gates that enforce standards without slowing delivery.',
        ],
        problems: [
          'Releases depend on slow, manual UI and functional testing.',
          'Testing cannot keep pace with delivery demands and growing system complexity.',
          'Existing test automation is brittle and expensive to maintain.',
          'Testing processes differ from team to team.',
          'Performance problems are only discovered in production.',
        ],
        capabilities: [
          { title: 'Test strategy',                    body: 'A test strategy aligned with your product roadmap and release process.' },
          { title: 'UI, API & end-to-end automation',  body: 'Automated tests for critical user flows, APIs and integrations.' },
          { title: 'Automated regression testing',     body: 'Regression suites that run continuously as part of your CI/CD pipeline.' },
          { title: 'Performance & load testing',       body: 'Performance and load tests that identify bottlenecks before release.' },
          { title: 'Quality gates',                    body: 'Quality gates and quality metrics dashboards in the delivery pipeline.' },
          { title: 'Maintainable frameworks',          body: 'Test automation frameworks and standardized testing processes your teams can maintain and extend.' },
        ],
        deliverables: [
          'Test strategy and testing process standards',
          'Test automation framework and automated regression suite',
          'CI/CD integration with quality gates',
          'Performance and load test setup',
          'Quality metrics dashboard',
        ],
        technologies: ['OpenText UFT', 'OpenText ALM'],
        approach: [
          { title: 'Assessment',                                       body: 'We review your current testing, tooling and release process.' },
          { title: 'Scope and success criteria agreed before build',   body: 'Test strategy, priorities and success criteria are agreed with you before the framework is built.' },
          { title: 'Build & integrate',                                body: 'Automation framework, standardized processes and integration into your release lifecycle.' },
          { title: 'Enable your team',                                 body: 'Documentation and knowledge transfer, so your teams can extend the tests themselves.' },
        ],
        cta: { title: 'Too much manual testing?', body: 'Tell us how you test and release today.' },
      },
    },

    // /services — hub; the cards come from src/config/services.js
    servicesHub: {
      eyebrow:  'Services',
      h1:       'Software Engineering Services',
      intro:    'VOTUM covers the engineering lifecycle end to end — from technology strategy and architecture to building software, running the platform it depends on and supporting it in production. Each service can be engaged on its own or combined with the others.',
      cardsTitle: 'Service areas',
      cardLink: 'View service →',
      togetherTitle: 'How the service areas work together',
      together: [
        'Technology consulting sets the direction: architecture, roadmap and build-vs-buy decisions. Software development and DevOps & cloud turn that direction into working software and the platform it runs on.',
        'Test automation builds quality into every release, and managed services keep the result running and improving in production — with L1–L3 support and 24/7 monitoring and support available under agreed SLAs.',
        'Because one team covers strategy, build, delivery and operations, you do not have to coordinate separate vendors for each.',
      ],
      cta: { title: 'Not sure where to start?', body: 'Describe what you are working on, and we will suggest which service fits.' },
    },

    // Solution pages (/solutions/<slug>, see src/config/solutions.js).
    // Evidence-based: every statement maps to a public case study, a service
    // page or a confirmed company capability. No partner status,
    // certifications, versions, modules, counts or response times.
    solutionPages: {
      'opentext-alm': {
        eyebrow: 'Solution',
        h1: 'OpenText ALM Engineering, Modernization & Support',
        intro: 'VOTUM is a software engineering company based in Sofia, Bulgaria. We work with enterprise teams that run software delivery and testing on OpenText ALM: transforming and consolidating ALM environments, operating and supporting them, automating tests with OpenText UFT, and migrating or archiving ALM and PPM data when platforms are retired.',
        // Entity clarity: the products belong to OpenText; VOTUM is a separate company
        productNote: 'OpenText ALM, OpenText UFT and OpenText PPM are products of OpenText. VOTUM is an independent software engineering company; this page describes the team’s engineering work with these products.',
        challengesTitle: 'Common OpenText ALM challenges',
        challenges: [
          'Software delivery and testing spread across fragmented tools, with limited visibility and inconsistent processes across teams.',
          'Legacy systems that need to be migrated into one central ALM environment.',
          'A central ALM and testing platform that needs long-term operation, user support, incident management and continuous improvement.',
          'Test execution that still relies heavily on manual UI and functional testing.',
          'ALM or PPM platforms being retired while historical records, attachments and audit trails must remain accessible for audit and compliance.',
        ],
        capabilitiesTitle: 'What VOTUM covers',
        capabilities: [
          { title: 'Modernization & transformation', body: 'Consolidating software delivery and testing onto a centralized OpenText ALM platform, including the migration of legacy systems.' },
          { title: 'Operations & support',           body: 'Maintenance, user support, incident management and continuous enhancements, with L1–L3 support and 24/7 monitoring and support available under agreed SLAs.' },
          { title: 'Test automation',                body: 'Automated testing with OpenText UFT, integrated into the development and release lifecycle.' },
          { title: 'Data migration & archival',      body: 'Extracting and archiving ALM and PPM data (records, attachments and their relationships) when platforms are decommissioned.' },
        ],
        sections: [
          {
            title: 'ALM modernization and transformation',
            body: 'We define the transformation strategy and the target platform, then consolidate: software delivery and testing on a centralized OpenText ALM environment, with legacy systems migrated into one ecosystem.',
            points: [
              'Assessment of current tools, processes and dependencies',
              'Transformation strategy and roadmap',
              'A centralized delivery and testing platform based on OpenText ALM and UFT',
              'Migration of legacy systems into the central platform',
            ],
            evidence: 'software-delivery-platform-operations',
          },
          {
            title: 'Managed support and operations',
            body: 'A central platform needs owners after go-live. Our managed services cover maintenance, user support, incident management and continuous enhancements. Support is organized in three levels, and 24/7 monitoring and support is available under agreed SLAs.',
            tiers: [
              { level: 'L1', text: 'Intake, triage and routine user support' },
              { level: 'L2', text: 'Investigation and remediation at application and platform level, including configuration' },
              { level: 'L3', text: 'Engineering-level root-cause analysis, configuration and code-level fixes, and permanent improvements fed back into the platform' },
            ],
            note: 'L3 engineering support is one of our core strengths. The scope of each engagement is agreed individually: in the software delivery platform case below, the managed-services scope covered L1–L2 user support under agreed SLAs.',
            evidence: 'software-delivery-platform-operations',
          },
          {
            title: 'Test automation with OpenText UFT',
            body: 'Where testing runs on OpenText UFT and ALM, we build and maintain the automation around it: test strategy, automated regression suites and quality gates, integrated into the development and release lifecycle. Tool choice follows your environment; not every test automation engagement is built on UFT.',
            points: [
              'Test strategy aligned with the release process',
              'Automated regression suites for critical flows',
              'Quality gates in the delivery pipeline',
              'Centralized test management and execution on OpenText ALM and UFT',
            ],
            evidence: 'software-delivery-platform-operations',
          },
          {
            title: 'ALM and PPM data migration and archival',
            body: 'When OpenText ALM or PPM platforms are retired, historical data often has to stay available for audit and compliance. We extract and restructure that data into an archive the organization controls.',
            points: [
              'Extraction of historical ALM and PPM records, attachments and documents, keeping their relationships to the underlying data',
              'Database migration, for example from Oracle to PostgreSQL on AWS RDS',
              'A lightweight access tool for querying archived records and retrieving related files',
              'Access to historical data that no longer depends on the legacy SaaS platform',
            ],
            evidence: 'insurance-data-archival-migration',
          },
        ],
        evidenceLabel: 'Project experience:',
        technologiesTitle: 'Technologies from this work',
        casesTitle: 'Relevant project experience',
        casesNote: 'Both projects were delivered by members of the current VOTUM team before {legalName} was founded in {year}.',
        servicesTitle: 'Related services',
        approachTitle: 'How we approach an ALM engagement',
        approach: [
          { title: 'Review the ALM environment',                     body: 'Current platform, processes, integrations and data, and what has to change.' },
          { title: 'Scope and success criteria agreed before build', body: 'Scope, priorities and success criteria are agreed with you before transformation, migration or automation work starts.' },
          { title: 'Deliver in controlled steps',                    body: 'Transformation, migration and automation are delivered iteratively, with working results reviewed along the way.' },
          { title: 'Operate or hand over',                           body: 'We operate the platform under agreed SLAs, or hand it over with documentation and knowledge transfer.' },
        ],
        cta: { title: 'Working with OpenText ALM?', body: 'Tell us about your ALM environment and what you need: transformation, support, test automation or a data migration.' },
        // Contextual links back to this page (config/solutions.js → linkedFrom)
        inboundLabel: 'Related solution',
        inbound: {
          'technology-consulting':                 { lead: 'Planning a change to an OpenText ALM environment?', link: 'OpenText ALM modernization' },
          'managed-services':                      { lead: 'Running OpenText ALM or UFT?',                      link: 'OpenText ALM support' },
          'test-automation':                       { lead: 'Testing on OpenText UFT and ALM?',                  link: 'OpenText ALM and UFT test automation' },
          'software-delivery-platform-operations': { lead: 'More on this kind of work:',                        link: 'OpenText ALM engineering' },
          'insurance-data-archival-migration':     { lead: 'More on this kind of work:',                        link: 'OpenText ALM and PPM data migration' },
        },
      },
    },

    // /contact — company facts come from src/config/company.js
    contactPage: {
      eyebrow: 'Contact',
      h1: 'Contact VOTUM',
      intro: 'Tell us about your project, platform or technology decision. A short outline is enough to start the conversation.',
      send: 'Send us a message →',
      detailsTitle: 'Contact details',
      email: 'Email',
      phone: 'Phone',
      companyTitle: 'Company',
      operatedBy: '{brand} is operated by {legalName}.',
      registeredOffice: 'Registered office',
      registration: 'UIC',
      vat: 'VAT',
      legalLink: 'Full company details in the Legal Notice →',
      servicesTitle: 'What we can help with',
    },

    // Page metadata. The build plugin (vite.config.js) writes the English
    // values into the static HTML of each route; useSeo() updates them at runtime.
    seo: {
      home:     { title: 'VOTUM – Software Engineering, DevOps & Test Automation', description: 'Sofia-based engineering partner for technology consulting, custom software, DevOps & cloud, managed operations and test automation — from discovery to production.' },
      about:    { title: 'About VOTUM – Software Engineering Company in Sofia', description: 'Meet the VOTUM team: experienced engineers, scope and success criteria agreed before build, and transparent delivery. VOTUM IT EOOD & Co KD, Sofia, Bulgaria.' },
      blog:     { title: 'Insights — VOTUM', description: 'Engineering insights from the VOTUM team: architecture decisions, delivery patterns and lessons from production engineering.' },
      privacy:  { title: 'Privacy Policy — VOTUM', description: 'How VOTUM collects, uses and protects personal data when you visit this website or contact us.' },
      legal:    { title: 'Legal Notice — VOTUM', description: 'Company details of VOTUM IT EOOD & Co KD: registered address, UIC, VAT number and contact details.' },
      terms:    { title: 'Terms and Conditions — VOTUM', description: 'The terms and conditions that apply to the use of the VOTUM website and services.' },
      cookies:  { title: 'Cookie Policy — VOTUM', description: 'Which cookies and browser storage the VOTUM website uses — and which it does not.' },
      notFound: { title: 'Page not found — VOTUM', description: 'The page you are looking for does not exist.' },
      // Service pages + contact: `name` = H1-level name (breadcrumb, Service schema)
      serviceConsulting: { name: 'Technology Strategy & Architecture Consulting', title: 'Technology Strategy & Architecture Consulting | VOTUM', description: 'Architecture reviews, technology roadmaps, build-vs-buy and vendor evaluation, and modernization planning from VOTUM, a software engineering company in Sofia.' },
      serviceSoftware:   { name: 'Custom Software Development',                   title: 'Custom Software Development | VOTUM',                     description: 'Custom, business-critical software from VOTUM: modern web platforms, backend and frontend engineering, legacy modernization and containerized delivery.' },
      serviceDevops:     { name: 'DevOps & Cloud Engineering',                    title: 'DevOps & Cloud Engineering – Kubernetes, CI/CD | VOTUM',  description: 'CI/CD pipelines, Kubernetes platforms, cloud and on-premise environments, infrastructure as code and observability — designed and operated by VOTUM.' },
      serviceManaged:    { name: 'Managed Services & L1–L3 Application Support',  title: 'Managed Services & L1–L3 Application Support | VOTUM',   description: 'L1–L3 application and platform support, incident and problem management, and 24/7 monitoring and support available under agreed SLAs — from VOTUM.' },
      serviceTesting:    { name: 'Test Automation & Quality Engineering',         title: 'Test Automation & Quality Engineering | VOTUM',          description: 'Test strategy, UI, API and end-to-end automation, regression and performance testing, and quality gates in CI/CD — test automation services from VOTUM.' },
      contact:           { name: 'Contact',                                       title: 'Contact VOTUM – Sofia, Bulgaria',                        description: 'Contact VOTUM IT EOOD & Co KD in Sofia, Bulgaria: email info@votum.bg or send us a message about your software, DevOps, support or testing project.' },
      services:          { name: 'Services',                                      title: 'Software Engineering Services | VOTUM',                   description: 'Software engineering services from VOTUM in Sofia: technology consulting, custom software, DevOps & cloud, L1–L3 managed services and test automation.' },
      caseStudies:          { name: 'Case Studies',                         title: 'Case Studies – Software Engineering Projects | VOTUM',      description: 'Anonymized case studies from the team behind VOTUM: software delivery platform operations, data archival, web platforms, Kubernetes and test automation.' },
      caseDeliveryOps:      { name: 'Software Delivery Platform Operations', title: 'Software Delivery Platform Operations – Case Study | VOTUM', description: 'Case study: a centralized OpenText ALM and UFT delivery and testing platform for a global automotive organization, with L1–L2 support under agreed SLAs.' },
      caseInsuranceArchive: { name: 'Insurance Data Archival & Migration',   title: 'Insurance Data Archival & Migration – Case Study | VOTUM',   description: 'Case study: legacy OpenText ALM and PPM data archived on AWS for an insurance group — Oracle migrated to PostgreSQL on AWS RDS, attachments preserved.' },
      caseAssetPlatform:    { name: 'Asset Management Advisory Platform',    title: 'Asset Management Advisory Platform – Case Study | VOTUM',    description: 'Case study: a new web platform for an asset management firm, with a microservices backend, React frontend, secure authentication and containerized deployment.' },
      caseKubernetes:       { name: 'On-Premise Kubernetes Platform',        title: 'On-Premise Kubernetes Platform – Case Study | VOTUM',        description: 'Case study: an on-premise Kubernetes platform with separate development and production clusters and Jenkins CI/CD pipelines with built-in security scanning.' },
      caseTestAutomation:   { name: 'Automotive Test Automation Framework',  title: 'Automotive Test Automation Framework – Case Study | VOTUM',  description: 'Case study: a test automation framework for an automotive organization, integrated into the development and release lifecycle to reduce manual testing.' },
      solutionOpentextAlm:  { name: 'OpenText ALM',                          title: 'OpenText ALM Engineering, Modernization & Support | VOTUM',  description: 'OpenText ALM engineering from VOTUM: platform transformation, L1–L3 application support, UFT test automation, and ALM and PPM data migration and archival.' },
      breadcrumb: { home: 'Home', services: 'Services', caseStudies: 'Case Studies' },
    },

    footer: {
      tagline:   'Engineered for impact.\nFrom strategy to operations — we design, build and run the software your business depends on.',
      company: {
        title: 'Company',
        links: [
            { label: 'About',    href: '/about'   },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Blog',     href: '/blog'    },
            { label: 'Careers',  href: '/about#team' },
            { label: 'Contact',  href: '/contact' },
          ],
      },
      servicesTitle: 'Services',
      servicesAll:   'All services',
      contactTitle: 'Contact',
      copyright: 'All rights reserved.',
      legalNotice: 'Legal Notice',
      privacy:   'Privacy Policy',
      terms:     'Terms and Conditions',
      cookies:   'Cookie Policy',
    },
  },

  // ─────────────────────────────────────────────────────────── GERMAN ───
  de: {
    nav: {
      services:  'Leistungen',
      howWeWork: 'Unser Vorgehen',
      work:      'Referenzen',
      contact:   'Kontakt',
      about:     'About',
      blog:      'Blog',
      cta:       'Kontakt aufnehmen',
      skip:      'Zum Hauptinhalt springen',
      home:      'VOTUM — Startseite',
      menu:      'Hauptmenü',
      openMenu:  'Menü öffnen',
      closeMenu: 'Menü schließen',
      close:     'Schließen',
      language:  'Sprache',
      backToTop: 'Nach oben',
    },

    hero: {
      eyebrow:     'End-to-End Engineering',
      title:       { line1: 'Entwickelt', line2: 'für', accent: 'Wirkung.' },
      lead:        'Von der Vision bis zum Betrieb – wir verantworten Ihre Engineering-Exzellenz.',
      ctaPrimary:  'Kontakt aufnehmen →',
      ctaSecondary:'Fallstudien',
    },

    stats: [
      { num: '45+', label: 'Abgeschlossene Projekte', color: 'green' },
      { num: '18+', label: 'Jahre Erfahrung',         color: 'teal'  },
      { num: '80%', label: 'Kundenbindung',           color: 'green' },
      { num: '20+', label: 'Erfahrene Ingenieure',    color: 'teal'  },
    ],

    services: {
      eyebrow:   'Was wir tun',
      title:     'End-to-End Engineering',
      lead:      'Wir decken jede Schicht des Engineering-Lebenszyklus ab, damit Sie nicht fünf verschiedene Anbieter koordinieren müssen.',
      learnMore: 'Mehr erfahren →',
      cards: [
        {
          title:      'Technologiestrategie & Beratung',
          body:       'Treffen Sie die richtigen Technologieentscheidungen, bevor sie kostspielig werden. Wir arbeiten mit Ihrer Führungsebene zusammen, um klare Roadmaps zu entwickeln, Build-vs-Buy-Abwägungen zu evaluieren und Ihre Architektur mit Ihren langfristigen Geschäftszielen abzustimmen.',
          details:    [
            'Wir helfen Organisationen, komplexe Technologieentscheidungen an kritischen Wendepunkten zu navigieren. Unser Ansatz verbindet tiefes technisches Know-how mit unternehmerischem Verständnis, um klare, umsetzbare Technologie-Roadmaps zu entwickeln.',
            'Wir führen gründliche Architektur-Reviews durch, evaluieren Build-vs-Buy-Szenarien mit detaillierten Kosten-Nutzen-Analysen, beurteilen Anbieteroptionen objektiv und stimmen Ihre Technologiestrategie auf Geschäftsziele ab.',
            'Wir arbeiten direkt mit C-Suite und Engineering-Leadership zusammen, um technische Schulden, Modernisierungsprioritäten und Wettbewerbsvorteile durch Technologie zu identifizieren. Unser Ziel ist es, Risiken zu reduzieren, Entscheidungsprozesse zu beschleunigen und Ihre Organisation für nachhaltiges Wachstum aufzustellen.',
          ],
          tags:       [
            { label: 'Architektur-Assessment', variant: 'green' },
            { label: 'Anbieterbewertung',      variant: 'green' },
            { label: 'Risikominimierung',       variant: 'green' },
            { label: 'Roadmap-Planung',         variant: 'green' },
          ],
          modalTitle: 'Fundierte Technologieentscheidungen treffen',
        },
        {
          title:      'Software Engineering',
          body:       'Vom Produktkonzept bis zum produktionsreifen Code. Wir entwickeln skalierbare, wartbare Anwendungen, die mit Ihrem Unternehmen wachsen – statt morgen technische Schulden zu verursachen.',
          details:    [
            'Wir liefern maßgeschneiderte Softwarelösungen, die von Grund auf mit Produktionsexzellenz entwickelt werden. Ob Sie ein neues Produkt launchen, Legacy-Systeme modernisieren oder eine bestehende Anwendung skalieren – wir entwerfen und bauen Systeme, die auf Wachstum ausgelegt sind.',
            'Unsere Engineering-Praxis legt Wert auf sauberen Code, umfassende Tests, automatisierte Deployment-Pipelines und Dokumentation, die es Ihrem Team ermöglicht, das Produkt zu warten und weiterzuentwickeln.',
            'Wir arbeiten mit Ihrem Team zusammen, transferieren Wissen und stärken Ihre internen Fähigkeiten. Wir fokussieren uns auf die Lösung Ihrer tatsächlichen Geschäftsprobleme, ohne Over-Engineering.',
            'Jede Zeile Code ist für Wartbarkeit, Testbarkeit und Skalierbarkeit ausgelegt – technische Schulden werden verhindert, bevor sie entstehen.',
          ],
          tags:       [
            { label: 'Custom Development', variant: 'teal' },
            { label: 'Code-Qualität',      variant: 'teal' },
            { label: 'Skalierbarkeit',     variant: 'teal' },
          ],
          modalTitle: 'Maßgeschneiderte Software built für Exzellenz',
        },
        {
          title:      'DevOps & Cloud',
          body:       'Infrastruktur, die Ihr Team nicht ausbremst. Wir entwerfen und betreiben CI/CD-Pipelines, containerisierte Umgebungen und Cloud-native Plattformen für Geschwindigkeit, Zuverlässigkeit und Skalierung.',
          details:    [
            'Infrastruktur ist das Rückgrat moderner Software-Lieferung und sollte kein Engpass sein. Wir entwerfen und verwalten Cloud-Architekturen, die Ihrem Team ermöglichen, mit Vertrauen zu deployen und zuverlässig in jeder Größenordnung zu betreiben.',
            'Unsere Leistungen umfassen: CI/CD-Pipeline-Design und -Implementierung, Containerisierungsstrategien mit Docker und Kubernetes, Multi-Cloud- und Hybrid-Cloud-Architektur, Infrastructure-as-Code-Praktiken, automatisiertes Monitoring und Alerting, Disaster Recovery und Business Continuity sowie Kostenoptimierung über alle Cloud-Plattformen hinweg.',
            'Wir übernehmen den operativen Aufwand – Infrastructure-Provisioning, Skalierung, Security Patching und Incident Response – damit sich Ihre Entwickler auf die Produktentwicklung konzentrieren können.',
          ],
          tags:       [
            { label: 'CI/CD-Pipelines',       variant: 'green' },
            { label: 'Infrastructure-as-Code', variant: 'green' },
            { label: 'Containerisierung',      variant: 'green' },
            { label: 'Cloud-Architektur',      variant: 'green' },
          ],
          modalTitle: 'Infrastruktur, die mit Ihnen wächst',
        },
        {
          title:      'Managed Services & Betrieb',
          body:       'Wir übergeben nicht einfach und verschwinden. Wir bleiben dabei, um Ihre Systeme zu überwachen, zu warten und kontinuierlich zu verbessern – damit sich Ihr Team auf Features konzentriert, nicht auf Fehlerbehebung.',
          details:    [
            'Produktionssysteme brauchen kontinuierliche Pflege. Wir bieten umfassende Managed Services, um Ihre Anwendungen reibungslos laufen zu lassen und kontinuierlich zu verbessern.',
            'Dazu gehören: 24/7-Systemmonitoring und Alerting, proaktives Incident Management und Root-Cause-Analyse, Performance-Optimierung und Tuning, Security Patching und Schwachstellenmanagement, regelmäßige Gesundheitsprüfungen, Kapazitätsplanung und Skalierungsentscheidungen sowie Dokumentationsaktualisierungen.',
            'Statt reaktiver Fehlerbehebung verfolgen wir einen proaktiven Ansatz – wir identifizieren Probleme, bevor sie Nutzer betreffen, optimieren Systeme basierend auf realen Nutzungsmustern und verbessern die Zuverlässigkeit kontinuierlich.',
            'Ihr Team konzentriert sich auf neue Features, während wir Infrastrukturstabilität, Performance und Sicherheit gewährleisten. Wir liefern regelmäßige Reports zu Systemgesundheit, Incident-Zusammenfassungen und Optimierungsempfehlungen.',
          ],
          tags:       [
            { label: 'Incident Management',  variant: 'teal' },
            { label: '24/7 Monitoring',      variant: 'teal' },
            { label: 'Optimierung',          variant: 'teal' },
            { label: 'Proaktive Wartung',    variant: 'teal' },
          ],
          modalTitle: 'Immer verfügbar – Betrieb und Support rund um die Uhr',
        },
        {
          title:      'Quality Engineering & Testautomatisierung',
          body:       'Umfassende Teststrategien für Zuverlässigkeit auf jeder Ebene. Wir entwickeln automatisierte Test-Suites, implementieren Quality Gates und etablieren Prozesse, die Probleme abfangen, bevor sie die Produktion erreichen.',
          details:    [
            'Mit Vertrauen auszuliefern erfordert mehr als manuelle Tests. Wir etablieren Quality-Engineering-Praktiken, die Probleme früh erkennen und mit Ihrem Produkt skalieren.',
            'Unser Ansatz umfasst: Teststrategieentwicklung abgestimmt auf Ihre Produkt-Roadmap, automatisierte Unit- und Integrationstests, End-to-End-Testautomatisierung für kritische User Flows, Performance- und Lasttests, Sicherheitstests, kontinuierliche CI-Testausführung und Quality-Metrics-Dashboards.',
            'Wir implementieren Tests auf jeder Ebene – von Unit-Tests während der Entwicklung bis zu Produktionsmonitoring und synthetischen Tests. Wir etablieren Quality Gates, die Standards durchsetzen, ohne die Deployment-Geschwindigkeit zu verlangsamen.',
            'Das bedeutet weniger Produktionsvorfälle, schnelleres Feedback und die Gewissheit, Features zügig auszuliefern. Unser Ziel ist es, Qualität unsichtbar zu machen – Tests so gründlich und automatisiert, dass sie Teil Ihres normalen Entwicklungsrhythmus werden.',
          ],
          tags:       [
            { label: 'Testautomatisierung', variant: 'green' },
            { label: 'Qualitätsstrategie',  variant: 'green' },
            { label: 'Performance-Tests',   variant: 'green' },
            { label: 'Quality Gates',       variant: 'green' },
          ],
          modalTitle: 'Mit Vertrauen ausliefern',
        },
      ],
    },

    howWeWork: {
      eyebrow: 'Unser Vorgehen',
      visualNote: 'Beispiel-Dashboard · illustrative Kennzahlen',
      title:   'Ein Prozess, der auf Transparenz ausgelegt ist.',
      lead:    'Wir gehen keine Abkürzungen. Jedes Engagement folgt einem bewährten Prozess, der Risiken eliminiert, Technologie mit Geschäftszielen ausrichtet und Lösungen liefert, hinter denen Ihr Team stehen kann.',
      phases: [
        {
          eyebrow: 'Phase 01 — Discovery & Strategie',
          title:   'Wir beginnen damit, Ihr Unternehmen zu verstehen – nicht Ihr Backlog.',
          body:    'Bevor eine Lösung entworfen oder entwickelt wird, definieren wir Ihre Technologiestrategie, stimmen Stakeholder ab und bewerten Ihre aktuelle Landschaft. Das Ergebnis ist eine klare Architektur und Delivery-Roadmap, hinter der alle stehen können.',
          checks:  [
            'Fester Scope. Keine Überraschungen',
            'Stakeholder-Workshops & Anforderungserhebung',
            'Technologiestrategie & Architekturdefinition',
            'Technisches Audit von Systemen und Cloud-Landschaft',
            'Risikobewertung und Abhängigkeits-Mapping',
          ],
        },
        {
          eyebrow: 'Phase 02 — Build & Lieferung',
          title:   'Engineering-Exzellenz in Entwicklung, Qualität und Lieferung.',
          body:    'Jede Lösung wird mit modernen Engineering-, DevOps- und Qualitätspraktiken entwickelt, getestet und deployt – damit Ihr Team Systeme übernimmt, die zuverlässig, skalierbar und wartbar sind.',
          checks:  [
            '2-Wochen-Sprint-Zyklen mit Live-Demos',
            'Hohe automatisierte Testabdeckung als Standard',
            'Integriertes Quality Engineering & Testautomatisierung',
            'CI/CD und Infrastrukturautomatisierung als Standard',
            'Cloud-native und DevOps Best Practices',
          ],
        },
        {
          eyebrow: 'Phase 03 — Launch & Betrieb',
          title:   'Wir verschwinden nicht nach dem Go-Live.',
          body:    'Wir stellen sicher, dass Ihre Systeme zuverlässig und skaliert laufen – durch Observability, proaktiven Betrieb und kontinuierliche Optimierung. Als Ihr langfristiger Technologiepartner.',
          checks:  [
            'Zero-Downtime-Produktions-Deployments',
            'Vollständige Observability und Monitoring',
            'Cloud- und DevOps-Betrieb in großem Maßstab',
            'Managed Services mit L1–L3-Support',
            'Optionale SLA und Langzeit-Support',
          ],
          cta: { label: 'Kontakt aufnehmen →', href: '#contact', variant: 'btn-primary' },
        },
      ],
    },

    cases: {
      eyebrow: 'Unsere Arbeit',
      title:   'Ergebnisse, die für sich sprechen',
      lead:    'Eine Auswahl von Projekten, bei denen präzises Engineering einen messbaren Unterschied gemacht hat.',
      labels:  { challenge: 'Die Herausforderung', solution: 'Was wir getan haben', outcome: 'Das Ergebnis' },
      feature: {
        category: 'Managed Services & Betrieb',
        title:    'End-to-End-Transformation der Software-Lieferung & Betrieb für einen globalen Automobilkonzern',
        cardBody: 'Von der Plattformtransformation bis zum 24/7-Managed-Betrieb – Zuverlässigkeit, Skalierbarkeit und kontinuierliche Verbesserung sichergestellt.',
        summary:  'Zuverlässigen Betrieb und kontinuierliche Verbesserung unter definierten SLAs sichergestellt.',
        challenge:'Ein führender Automobilhersteller kämpfte mit fragmentierten Tools, begrenzter Transparenz und inkonsistenten Prozessen in globalen Teams. Nach einer groß angelegten Transformation benötigte er einen vertrauenswürdigen Langzeitpartner, um seine zentralisierte Software-Lieferungs- und Testplattform zu betreiben, zu warten und kontinuierlich zu verbessern.',
        solution: 'Wir haben eine Transformationsstrategie zur Vereinheitlichung der Software-Lieferung und des Testens definiert und umgesetzt, eine zentralisierte Plattform auf Basis von OpenText ALM & UFT entworfen und Legacy-Systeme in ein einziges Ökosystem migriert. Darauf aufbauend bieten wir End-to-End Managed Services für eine Plattform mit über 1.000 Nutzern weltweit. Unser Leistungsumfang umfasst Systemwartung, L1–L2-Nutzersupport, Incident Management und kontinuierliche Plattformerweiterungen – alles unter klar definierten SLAs.',
        outcome:  'Eine standardisierte und skalierbare Umgebung mit vollständiger Lifecycle-Transparenz, kombiniert mit stabilem Betrieb innerhalb der vereinbarten SLA-Ziele. Der Kunde profitiert von deutlich reduzierter interner Arbeitsbelastung, kontinuierlicher Verbesserung und einer leistungsstarken Plattform für langfristige Skalierbarkeit.',
        tags:     ['OpenText ALM/UFT', 'Managed Services', 'SLA-Management', 'L1–L2-Support'],
        stats:    [{ value: '1.000+', label: 'Nutzer' }, { value: 'SLA', label: 'basierter Betrieb' }, { value: '24/7', label: 'Kontinuität' }],
      },
      hero: {
        category: 'Datenmigration & Cloud-Architektur',
        title:    'Datenarchivierung und -migration für eine führende Versicherungsgruppe',
        cardBody: 'Eine führende europäische Versicherungsgruppe musste kritische Legacy-Plattformen abschalten, während historische Daten, Anhänge und Audit-Trails vollständig erhalten bleiben mussten – ohne Vendor Lock-in.',
        summary:  'Unternehmensdaten aus OpenText SaaS in eine kosteneffiziente, audit-bereite AWS-Plattform migriert und archiviert.',
        challenge:'Eine führende europäische Versicherungsgruppe stellte ihre OpenText-ALM- und -PPM-Plattformen ein, stand aber vor einer kritischen Anforderung: Große Mengen historischer Oracle-Datenbankdatensätze, umfangreiche Anhänge und strenge Audit- und Compliance-Pflichten erforderten, dass die Daten vollständig zugänglich, sicher und audit-ready bleiben – ohne an die Legacy-Infrastruktur gebunden zu sein.',
        solution: 'Wir haben eine skalierbare, cloud-native Archivierungslösung auf AWS entwickelt und implementiert. Die Oracle-Datenbank wurde auf PostgreSQL auf AWS RDS migriert, mit vollständiger Datenintegrität und Schema-Optimierung. Alle Anhänge und Dokumente wurden extrahiert und strukturiert, um ihre Beziehungen zu den Basisdaten zu erhalten. Wir entwickelten außerdem ein maßgeschneidertes Zugriffstool für Audit- und Compliance-Anwendungsfälle, das einfaches Abfragen archivierter Datensätze ermöglicht.',
        outcome:  'Historische Daten aus OpenText ALM und PPM erhalten, erfolgreiche Oracle-zu-PostgreSQL-Migration und vollständige Audit-Bereitschaft mit schnellem Zugriff auf historische Datensätze. Der Kunde eliminierte die Abhängigkeit von Legacy-SaaS-Plattformen, reduzierte operative Kosten und erhielt ein modernes, zukunftssicheres Archiv.',
        tags:     ['AWS', 'PostgreSQL', 'Oracle Migration', 'OpenText ALM/PPM', 'Datenarchivierung'],
        stats:    [{ value: 'ALM/PPM', label: 'Daten archiviert' }, { value: 'AWS', label: 'Cloud-natives Archiv' }, { value: 'Audit', label: 'bereiter Zugriff' }],
      },
      supporting: [
        {
          category: 'Asset-Management-Plattform',
          title:    'Moderne digitale Beratungsplattform für einen führenden Asset Manager',
          cardBody: 'Ein führendes Asset-Management-Unternehmen kämpfte mit einem veralteten System – schlechte Benutzerfreundlichkeit, begrenzte Skalierbarkeit und Workflows, die ihre Berater verlangsamten.',
          summary:  'Manuelle Arbeitsabläufe in eine integrierte digitale Plattform transformiert.',
          challenge:'Ein führendes Asset-Management-Unternehmen wurde durch eine Legacy-Plattform ausgebremst, die nicht skalieren konnte. Veraltete Workflows, schlechte UX und isolierte Zusammenarbeit verlangsamten die spezialisierten Investment-Berater und schränkten die operative Effizienz ein.',
          solution: 'Wir haben eine moderne, enterprise-grade Webplattform von Grund auf entwickelt – von Planung, Design, Entwicklung, Testing bis hin zum vollständigen Rollout. Die Lösung umfasst ein skalierbares Microservices-Backend, ein React-Frontend, sichere Authentifizierung und containerisiertes Deployment.',
          outcome:  'End-to-End-Prozesse digitalisiert – einschließlich Planung, Service-Vermittlung, Aktivitätsverfolgung und automatisierter Rechnungsstellung. Manuelle Arbeitsabläufe durch digitale ersetzt und eine effiziente, skalierbare Zusammenarbeit in der gesamten Organisation ermöglicht.',
          tags:     ['React', 'Java / Spring Boot', 'Keycloak', 'Docker', 'Kubernetes'],
          stats:    [{ value: 'Digital', label: 'End-to-End-Workflows' }, { value: 'Autom.', label: 'Rechnungsstellung' }, { value: 'Full', label: 'Stack-Lieferung' }],
        },
        {
          category: 'DevOps-Plattform',
          title:    'Produktionsreife Kubernetes-Plattform für skalierbare Anwendungslieferung',
          cardBody: 'Um modernen Lieferanforderungen gerecht zu werden, benötigte ein Kunde eine robuste On-Premise-DevOps-Plattform nach Enterprise-Sicherheits- und Infrastrukturstandards.',
          summary:  'Sichere, kontrollierte Anwendungslieferung mit On-Premise-Infrastruktur ermöglicht.',
          challenge:'Um wachsenden Anwendungslieferungsanforderungen zu begegnen, benötigte ein Kunde eine robuste, vollständig On-Premise-DevOps-Plattform – eine, die moderne Deployment-Praktiken unterstützt und gleichzeitig strenge Enterprise-Sicherheits- und Infrastrukturanforderungen erfüllt.',
          solution: 'Wir haben eine vollständige On-Premise-Kubernetes-Plattform von Grund auf konzipiert und implementiert – mit dedizierten Clustern für Entwicklung und Produktion, integrierten Kerndiensten (Ingress, Storage, Backups, Monitoring) und CI/CD-Pipelines via Jenkins mit integriertem Security Scanning.',
          outcome:  'Eine produktionsreife Infrastruktur, die sichere, skalierbare und konsistente Anwendungslieferung ermöglicht – mit voller Kontrolle über Deployment-Prozesse und zuverlässigeren Releases.',
          tags:     ['Kubernetes', 'Jenkins', 'CI/CD', 'On-Premise-Infrastruktur', 'DevSecOps'],
          stats:    [{ value: 'CI/CD', label: 'automatisierte Deployments' }, { value: '2', label: 'Cluster-Umgebungen' }, { value: 'On-Prem', label: 'Kubernetes-Plattform' }],
        },
      ],
      final: {
        category: 'Testautomatisierung',
        title:    'Skalierbares Testautomatisierungs-Framework für einen Automobilkonzern',
        cardBody: 'Ein führender Automobilhersteller war stark auf manuelle Tests angewiesen – was zu langsamen Releases, begrenzter Skalierbarkeit und wachsenden Lieferrisiken führte.',
        summary:  'Tests direkt in den Release-Lebenszyklus durch Automatisierung integriert.',
        challenge:'Ein führender Automobilhersteller war zu sehr auf manuelle UI- und Funktionalitätstests angewiesen. Langsame Release-Zyklen, begrenzte Skalierbarkeit und wachsende Systemkomplexität schufen reale Risiken – und die Testfunktion konnte mit den Lieferanforderungen nicht Schritt halten.',
        solution: 'Wir haben ein umfassendes Testautomatisierungs-Framework von Grund auf entwickelt und implementiert, standardisierte Testprozesse definiert und automatisiertes Testing direkt in den Entwicklungs- und Release-Lebenszyklus integriert.',
        outcome:  'Deutlich reduzierter manueller Testaufwand, schnellere und zuverlässigere Release-Zyklen und verbesserte Testabdeckung über alle Teams hinweg – für eine skalierbare, hochwertige Software-Lieferung in Enterprise-Geschwindigkeit.',
        tags:     ['Testautomatisierung', 'QA-Strategie', 'Release-Management', 'Prozessstandardisierung'],
        stats:    [{ value: 'Mehr', label: 'Testabdeckung' }, { value: 'Schnellere', label: 'Release-Zyklen' }, { value: 'Weniger', label: 'manuelles Testen' }],
      },
    },

    cta: {
      eyebrow: 'Bereit, Ihr Engineering zu transformieren?',
      title:   'Lassen Sie uns Ihren Wettbewerbsvorteil aufbauen.',
      sub:     'Erzählen Sie uns von Ihrer Vision – wir melden uns innerhalb von {hours} Stunden mit einer klaren Strategie, nicht mit einem Sales-Pitch.',
      button:  'Kontakt aufnehmen →',
      small:   'Keine Verpflichtung. Antwort innerhalb von {hours} Std.',
    },

    contact: {
      eyebrow:  'Eine Nachricht genügt',
      title:    'Woran arbeiten Sie?',
      sub:      'Ein grober Überblick reicht — ein Absatz ist genug. Einer unserer Senior Engineers liest Ihre Nachricht persönlich und meldet sich innerhalb von {hours} Stunden mit einem klaren nächsten Schritt.',
      note:     'Keine Verpflichtung erforderlich.',
      sending:  'Wird gesendet…',
      privacy:  { before: 'Wir verwenden Ihre Angaben ausschließlich zur Beantwortung Ihrer Anfrage. Details in unserer ', link: 'Datenschutzrichtlinie', after: '.' },
      send:     'Nachricht senden →',
      fields: {
        name:    'Name',
        company: 'Unternehmen',
        email:   'E-Mail',
        brief:   'Ihr Vorhaben',
      },
      placeholders: {
        name:    'Ihr Name',
        company: 'Unternehmensname (optional)',
        email:   'sie@unternehmen.de',
        brief:   'Woran arbeiten Sie? Eine grobe Übersicht reicht.',
      },
      errors: {
        name:   'Bitte geben Sie Ihren Namen ein',
        email:  'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        brief:  'Bitte beschreiben Sie kurz Ihr Vorhaben (mindestens 10 Zeichen)',
        submit: 'Beim Senden ist ein Fehler aufgetreten. Bitte erneut versuchen oder direkt an {email} schreiben.',
      },
      success: {
        title:  'Wir melden uns.',
        body:   'Danke für Ihre Nachricht. Wir antworten innerhalb von {hours} Stunden mit einer klaren Strategie — ohne Sales-Pitch.',
        detail: 'Antwort innerhalb von {hours} Std. · Keine Verpflichtung',
      },
    },

    footer: {
      tagline:   'Entwickelt für Wirkung.\nVon der Vision bis zum Betrieb – wir verantworten Ihre Engineering-Exzellenz.',
      company: {
        title: 'Unternehmen',
        links: [
            { label: 'Über uns',      href: '/about'   },
            { label: 'Unsere Arbeit', href: '/#work'   },
            { label: 'Blog',          href: '/blog'    },
            { label: 'Karriere',      href: '/about#team' },
          ],
      },
      contactTitle: 'Kontakt',
      copyright: 'Alle Rechte vorbehalten.',
      legalNotice: 'Impressum',
      privacy:   'Datenschutzrichtlinie',
      terms:     'Nutzungsbedingungen',
      cookies:   'Cookie-Richtlinie',
    },
  },

  // ──────────────────────────────────────────────────────── BULGARIAN ───
  bg: {
    nav: {
      services:  'Услуги',
      howWeWork: 'Как работим',
      work:      'Нашата работа',
      contact:   'Контакт',
      about:     'About',
      blog:      'Blog',
      cta:       'Свържете се',
      skip:      'Към основното съдържание',
      home:      'VOTUM — начало',
      menu:      'Главно меню',
      openMenu:  'Отвори менюто',
      closeMenu: 'Затвори менюто',
      close:     'Затвори',
      language:  'Език',
      backToTop: 'Към началото',
    },

    hero: {
      eyebrow:     'End-to-End инженеринг',
      title:       { line1: 'Разработено', line2: 'за', accent: 'резултат.' },
      lead:        'От визията до операциите – ние отговаряме за вашето инженерно съвършенство.',
      ctaPrimary:  'Свържете се →',
      ctaSecondary:'Казуси',
    },

    stats: [
      { num: '45+', label: 'Завършени проекта',     color: 'green' },
      { num: '18+', label: 'Години опит',           color: 'teal'  },
      { num: '80%', label: 'Задържане на клиенти',  color: 'green' },
      { num: '20+', label: 'Експертни инженери',    color: 'teal'  },
    ],

    services: {
      eyebrow:   'Какво правим',
      title:     'End-to-end инженеринг',
      lead:      'Покриваме всеки слой от жизнения цикъл на инженеринга, така че да не се налага да координирате пет различни доставчика.',
      learnMore: 'Научете повече →',
      cards: [
        {
          title:      'Технологична стратегия и консултиране',
          body:       'Вземайте правилните технологични решения, преди да станат скъпи. Работим с вашето ръководство за дефиниране на ясни пътни карти, оценка на компромисите за изграждане срещу закупуване и привеждане на архитектурата в съответствие с дългосрочните бизнес цели.',
          details:    [
            'Помагаме на организациите да навигират сложни технологични решения в критични моменти. Нашият подход съчетава дълбока техническа експертиза с бизнес проницателност за разработване на ясни, приложими технологични пътни карти.',
            'Провеждаме задълбочени архитектурни прегледи, оценяваме сценарии за изграждане срещу закупуване с детайлен анализ на разходите и ползите, оценяваме опциите за доставчици обективно и привеждаме вашата технологична стратегия в съответствие с бизнес целите.',
            'Работим директно с C-suite и инженерното ръководство за идентифициране на техническия дълг, приоритетите за модернизация и конкурентните предимства чрез технология. Нашата цел е да намалим риска, да ускорим вземането на решения и да позиционираме вашата организация за устойчив растеж.',
          ],
          tags:       [
            { label: 'Архитектурна оценка',    variant: 'green' },
            { label: 'Оценка на доставчици',   variant: 'green' },
            { label: 'Намаляване на риска',    variant: 'green' },
            { label: 'Планиране на пътна карта', variant: 'green' },
          ],
          modalTitle: 'Вземайте уверени технологични решения',
        },
        {
          title:      'Разработка на софтуер',
          body:       'От концепция до готов за производство код. Изграждаме мащабируеми, поддържаеми приложения, проектирани да растат с вашия бизнес – а не да се превърнат в техническа задлъжнялост.',
          details:    [
            'Доставяме персонализирани софтуерни решения, изградени от нулата с производствено съвършенство. Независимо дали стартирате нов продукт, модернизирате Legacy системи или мащабирате съществуващо приложение – проектираме и изграждаме системи за растеж.',
            'Нашата инженерна практика набляга на чист код, изчерпателно тестване, автоматизирани pipeline-и за deployment и документация, която позволява на вашия екип да поддържа и развива продукта.',
            'Поставяме старши инженери редом до вашия екип, прехвърляйки знания и укрепвайки вашите вътрешни възможности. Фокусираме се върху решаването на вашите реални бизнес проблеми, без прекомерно инженерство.',
            'Всеки ред код е проектиран да бъде поддържаем, тестваем и мащабируем – елиминирайки техническия дълг преди да е започнал.',
          ],
          tags:       [
            { label: 'Персонализирана разработка', variant: 'teal' },
            { label: 'Качество на кода',            variant: 'teal' },
            { label: 'Мащабируемост',               variant: 'teal' },
          ],
          modalTitle: 'Персонализиран софтуер, изграден за съвършенство',
        },
        {
          title:      'DevOps и облак',
          body:       'Инфраструктура, която не забавя вашия екип. Проектираме и управляваме CI/CD тръбопроводи, контейнеризирани среди и cloud-native платформи за скорост, надеждност и мащаб.',
          details:    [
            'Инфраструктурата е гръбнакът на съвременната доставка на софтуер и не трябва да бъде пречка. Проектираме и управляваме облачни архитектури, които позволяват на вашия екип да deploy-ва с увереност и да работи надеждно в мащаб.',
            'Нашите услуги включват: проектиране и внедряване на CI/CD тръбопроводи, стратегии за контейнеризация с Docker и Kubernetes, мулти-облачна и хибридна облачна архитектура, практики за инфраструктура като код, автоматизиран мониторинг и alerting, планиране на disaster recovery и оптимизация на разходите.',
            'Поемаме оперативната тежест – provisioning на инфраструктура, мащабиране, security patching и реакция при инциденти – за да могат вашите инженери да се фокусират върху разработката на продукта.',
          ],
          tags:       [
            { label: 'CI/CD тръбопроводи',      variant: 'green' },
            { label: 'Инфраструктура като код',  variant: 'green' },
            { label: 'Контейнеризация',          variant: 'green' },
            { label: 'Облачна архитектура',      variant: 'green' },
          ],
          modalTitle: 'Инфраструктура, която расте с вас',
        },
        {
          title:      'Управлявани услуги и операции',
          body:       'Ние не просто изграждаме и предаваме. Оставаме, за да наблюдаваме, поддържаме и непрекъснато подобряваме вашите системи – за да може вашият екип да се фокусира върху функции, а не върху гасене на пожари.',
          details:    [
            'Производствените системи изискват непрекъсната грижа. Предоставяме цялостни управлявани услуги, за да поддържаме вашите приложения работещи гладко и непрекъснато подобряващи се.',
            'Това включва: 24/7 мониторинг и alerting, проактивна реакция при инциденти и анализ на основни причини, оптимизация на производителността, security patching и управление на уязвимости, редовни здравни одити, планиране на капацитет и решения за мащабиране.',
            'Вместо реактивно отстраняване на проблеми, ние използваме проактивен подход – идентифицираме проблемите преди да засегнат потребителите, оптимизираме системите въз основа на реални модели на използване и непрекъснато подобряваме надеждността.',
            'Вашият екип се фокусира върху изграждане на нови функции, докато ние гарантираме стабилността на инфраструктурата, производителността и сигурността. Предоставяме редовни доклади за здравето на системата, обобщения на инциденти и препоръки за оптимизация.',
          ],
          tags:       [
            { label: 'Управление на инциденти', variant: 'teal' },
            { label: 'Мониторинг 24/7',         variant: 'teal' },
            { label: 'Оптимизация',             variant: 'teal' },
            { label: 'Проактивна поддръжка',    variant: 'teal' },
          ],
          modalTitle: 'Непрекъснато работещи операции и поддръжка',
        },
        {
          title:      'Качествено инженерство и тест автоматизация',
          body:       'Цялостни стратегии за тестване, осигуряващи надеждност на всеки слой. Изграждаме автоматизирани тест пакети, внедряваме quality gates и установяваме процеси, които улавят проблемите преди да достигнат производството.',
          details:    [
            'Изпращането с увереност изисква повече от ръчно тестване. Установяваме практики за quality engineering, които улавят проблемите рано и се мащабират с вашия продукт.',
            'Нашият подход включва: разработка на стратегия за тестване, рамки за автоматизирани unit и integration тестове, end-to-end тест автоматизация за критични потребителски потоци, тестване на производителност и натоварване, тестване за сигурност, непрекъснато изпълнение на тестове и табла с метрики за качество.',
            'Внедряваме тестване на всеки слой – от unit тестове по време на разработка до мониторинг в производство и синтетично тестване. Работим с вашия екип за установяване на quality gates, които налагат стандарти без да забавят deployment скоростта.',
            'Това означава по-малко производствени инциденти, по-бързи feedback цикли и увереността да пускате функции бързо. Нашата цел е да направим качеството невидимо – тестване толкова задълбочено и автоматизирано, че да стане част от нормалния ви ритъм на разработка.',
          ],
          tags:       [
            { label: 'Тест автоматизация',          variant: 'green' },
            { label: 'Стратегия за качество',        variant: 'green' },
            { label: 'Тестване на производителност', variant: 'green' },
            { label: 'Quality Gates',                variant: 'green' },
          ],
          modalTitle: 'Изпращайте с увереност',
        },
      ],
    },

    howWeWork: {
      eyebrow: 'Как работим',
      visualNote: 'Примерно табло · илюстративни метрики',
      title:   'Процес, проектиран без изненади.',
      lead:    'Не вземаме преки пътища. Всяко ангажиране следва доказан процес, проектиран да елиминира риска, да синхронизира технологията с бизнес целите и да доставя решения, зад които вашият екип може да застане.',
      phases: [
        {
          eyebrow: 'Фаза 01 — Откритие и стратегия',
          title:   'Започваме с разбиране на вашия бизнес, а не на вашия бекълог.',
          body:    'Преди да се проектира или изгради каквото и да е решение, ние дефинираме вашата технологична стратегия, привеждаме заинтересованите страни в съответствие и оценяваме текущото ви положение. Резултатът е ясна архитектура и пътна карта за доставяне, с която всички могат да се ангажират.',
          checks:  [
            'Фиксиран обхват. Без изненади',
            'Работни срещи и събиране на изисквания',
            'Технологична стратегия и дефиниране на архитектура',
            'Технически одит на системи и облачна среда',
            'Оценка на рисковете и картографиране на зависимостите',
          ],
        },
        {
          eyebrow: 'Фаза 02 — Изграждане и доставяне',
          title:   'Инженерно съвършенство в разработката, качеството и доставянето.',
          body:    'Всяко решение се изгражда, тества и разгръща с използване на съвременни инженерни, DevOps и качествени практики – гарантирайки, че вашият екип наследява системи, които са надеждни, мащабируеми и поддържаеми.',
          checks:  [
            '2-седмични спринт цикли с демонстрации на живо',
            'Високо автоматизирано тестово покритие като стандарт',
            'Вградено quality engineering и тест автоматизация',
            'CI/CD и инфраструктурна автоматизация по подразбиране',
            'Cloud-native и DevOps добри практики',
          ],
        },
        {
          eyebrow: 'Фаза 03 — Стартиране и операции',
          title:   'Не изчезваме след стартирането.',
          body:    'Осигуряваме надеждното функциониране на вашите системи в мащаб чрез наблюдаемост, проактивни операции и непрекъсната оптимизация – действайки като ваш дългосрочен технологичен партньор.',
          checks:  [
            'Производствени разгръщания без прекъсване',
            'Пълна наблюдаемост и мониторинг',
            'Облачни и DevOps операции в мащаб',
            'Управлявани услуги с поддръжка L1–L3',
            'Опционално SLA и дългосрочна поддръжка',
          ],
          cta: { label: 'Свържете се →', href: '#contact', variant: 'btn-primary' },
        },
      ],
    },

    cases: {
      eyebrow: 'Нашата работа',
      title:   'Резултати, които говорят сами',
      lead:    'Подбор от проекти, при които прецизното инженерство направи измеримо различие.',
      labels:  { challenge: 'Предизвикателството', solution: 'Какво направихме', outcome: 'Резултатът' },
      feature: {
        category: 'Управлявани услуги и операции',
        title:    'End-to-End трансформация на доставката и операциите за световен автомобилен лидер',
        cardBody: 'От трансформация на платформата до 24/7 управляван режим – осигуряване на надеждност, мащабируемост и непрекъснато подобрение.',
        summary:  'Осигуряване на надежден режим и непрекъснато подобрение под дефинирани SLA.',
        challenge:'Водещ автомобилен производител се бореше с фрагментирани инструменти, ограничена видимост и непоследователни процеси в глобалните екипи. След мащабна трансформация се нуждаеше от надежден дългосрочен партньор за управление, поддръжка и непрекъснато подобрение на централизираната си платформа за доставка на софтуер и тестване.',
        solution: 'Дефинирахме и изпълнихме стратегия за трансформация за обединяване на доставката на софтуер и тестването, проектирайки централизирана платформа на базата на OpenText ALM & UFT и мигрирайки наследени системи в единна екосистема. На тази основа предоставяме end-to-end управлявани услуги за платформа, поддържаща над 1 000 потребители по целия свят, включително поддръжка на системата, потребителска поддръжка L1–L2, управление на инциденти и непрекъснати подобрения на платформата.',
        outcome:  'Стандартизирана и мащабируема среда с пълна видимост на жизнения цикъл, комбинирана със стабилни операции в рамките на договорените SLA цели. Клиентът се възползва от значително намалено вътрешно натоварване, непрекъснато подобрение и високопроизводителна платформа за дългосрочна мащабируемост.',
        tags:     ['OpenText ALM/UFT', 'Управлявани услуги', 'Управление на SLA', 'Поддръжка L1–L2'],
        stats:    [{ value: '1 000+', label: 'потребители' }, { value: 'SLA', label: 'базирани операции' }, { value: '24/7', label: 'непрекъснатост' }],
      },
      hero: {
        category: 'Миграция на данни и облачна архитектура',
        title:    'Архивиране и миграция на данни за водеща застрахователна група',
        cardBody: 'Голяма европейска застрахователна група трябваше да извади от употреба критични наследени платформи, запазвайки данните, прикачените файлове и одитните следи – без vendor lock-in.',
        summary:  'Мигрирани и архивирани корпоративни данни от OpenText SaaS към рентабилна, готова за одит AWS платформа.',
        challenge:'Голяма европейска застрахователна група извеждаше от употреба своите OpenText ALM и PPM платформи, но се сблъска с критично изискване: голям обем исторически записи в Oracle база данни, обширни прикачени файлове и строги задължения за одит и съответствие означаваха, че данните трябва да останат напълно достъпни, сигурни и готови за одит – без да бъдат обвързани с наследената инфраструктура.',
        solution: 'Проектирахме и внедрихме мащабируемо, cloud-native архивно решение на AWS. Базата данни Oracle беше мигрирана към PostgreSQL на AWS RDS, осигурявайки пълна цялост на данните и оптимизация на схемата. Всички прикачени файлове и документи бяха извлечени и структурирани за запазване на техните взаимовръзки. Разработихме също и персонализиран инструмент за достъп за одит и съответствие.',
        outcome:  'Запазени исторически данни от OpenText ALM и PPM, успешна миграция от Oracle към PostgreSQL и пълна готовност за одит с бърз достъп до исторически записи. Клиентът елиминира зависимостта от наследени SaaS платформи и намали оперативните разходи.',
        tags:     ['AWS', 'PostgreSQL', 'Oracle Migration', 'OpenText ALM/PPM', 'Архивиране на данни'],
        stats:    [{ value: 'ALM/PPM', label: 'архивирани данни' }, { value: 'AWS', label: 'cloud-native архив' }, { value: 'Одит', label: 'готов достъп' }],
      },
      supporting: [
        {
          category: 'Платформа за управление на активи',
          title:    'Модерна цифрова платформа за консултиране за водещ управител на активи',
          cardBody: 'Водещо предприятие за управление на активи се сблъска с ограничения на наследена система – лоша използваемост, ограничена мащабируемост и работни потоци, забавящи консултантите.',
          summary:  'Ръчните работни потоци са модернизирани в интегрирана цифрова платформа.',
          challenge:'Водеща фирма за управление на активи беше задържана от наследена платформа, която не можеше да се мащабира. Остарели работни потоци, лош UX и изолирано сътрудничество забавяха специализираните инвестиционни консултанти и ограничаваха оперативната ефективност.',
          solution: 'Проектирахме и изградихме модерна, корпоративна уеб платформа от нулата – покривайки планиране, дизайн, разработка, тестване и пълно внедряване. Решението включва мащабируем microservices backend, React frontend, сигурна автентикация и контейнеризирано deployment.',
          outcome:  'End-to-end процеси дигитализирани – включително планиране, медиация на услуги, проследяване на активности и автоматизирано фактуриране. Ръчните работни потоци заменени с дигитални, осигурявайки ефективно и мащабируемо сътрудничество.',
          tags:     ['React', 'Java / Spring Boot', 'Keycloak', 'Docker', 'Kubernetes'],
          stats:    [{ value: 'Дигитални', label: 'end-to-end процеси' }, { value: 'Авто', label: 'фактуриране' }, { value: 'Full', label: 'stack доставка' }],
        },
        {
          category: 'DevOps платформа',
          title:    'Готова за производство Kubernetes платформа за мащабируема доставка на приложения',
          cardBody: 'За да поддържа съвременните изисквания за доставка, клиент се нуждаеше от стабилна on-premise DevOps платформа, изградена по корпоративни стандарти за сигурност и инфраструктура.',
          summary:  'Осигурена сигурна, контролирана доставка на приложения с on-premise инфраструктура.',
          challenge:'За да отговори на нарастващите изисквания за доставка на приложения, клиент се нуждаеше от стабилна, изцяло on-premise DevOps платформа – такава, която да поддържа съвременни практики за deployment, отговаряйки на строги корпоративни изисквания за сигурност и инфраструктура.',
          solution: 'Проектирахме и внедрихме пълна on-premise Kubernetes платформа от нулата – с dedicated клъстери за разработка и производство, интегрирани основни услуги (ingress, storage, backups, monitoring) и CI/CD тръбопроводи чрез Jenkins с вградено сканиране за сигурност.',
          outcome:  'Готова за производство инфраструктура, осигуряваща сигурна, мащабируема и последователна доставка на приложения – с пълен контрол върху процесите на deployment и по-надеждни пускания.',
          tags:     ['Kubernetes', 'Jenkins', 'CI/CD', 'Локална инфраструктура', 'DevSecOps'],
          stats:    [{ value: 'CI/CD', label: 'автоматизирани разгръщания' }, { value: '2', label: 'клъстер среди' }, { value: 'On-prem', label: 'Kubernetes платформа' }],
        },
      ],
      final: {
        category: 'Тест автоматизация',
        title:    'Мащабируема рамка за тест автоматизация за автомобилно предприятие',
        cardBody: 'Водещ автомобилен производител разчиташе в голяма степен на ръчно тестване – което водеше до бавни пускания, ограничена мащабируемост и нарастващ риск за доставката.',
        summary:  'Тестването е интегрирано директно в жизнения цикъл на пускането чрез автоматизация.',
        challenge:'Водещ автомобилен производител разчиташе прекалено на ръчно UI и функционално тестване. Бавните цикли на пускане, ограничената мащабируемост и нарастващата системна сложност създаваха реален риск – а функцията за тестване не можеше да поддържа темпото на изискванията за доставка.',
        solution: 'Проектирахме и внедрихме цялостна рамка за тест автоматизация от нулата, дефинирахме стандартизирани процеси за тестване и интегрирахме автоматизираното тестване директно в жизнения цикъл на разработка и пускане.',
        outcome:  'Значително намалени усилия за ръчно тестване, по-бързи и по-надеждни цикли на пускане и подобрено тестово покритие в екипите – осигурявайки мащабируема, висококачествена доставка на софтуер в корпоративен темп.',
        tags:     ['Тест автоматизация', 'QA стратегия', 'Управление на пускания', 'Стандартизация на процеси'],
        stats:    [{ value: 'По-широко', label: 'тестово покритие' }, { value: 'По-бързи', label: 'цикли на пускане' }, { value: 'По-малко', label: 'ръчно тестване' }],
      },
    },

    cta: {
      eyebrow: 'Готови да трансформирате вашия инженеринг?',
      title:   'Нека изградим вашето конкурентно предимство.',
      sub:     'Разкажете ни за вашата визия – ще се върнем в рамките на {hours} часа с ясна стратегия, а не търговска презентация.',
      button:  'Свържете се →',
      small:   'Без ангажимент. Отговор в рамките на {hours} часа.',
    },

    contact: {
      eyebrow:  'Едно съобщение е достатъчно',
      title:    'По какво работите?',
      sub:      'Споделете груб преглед — един абзац е достатъчен. Един от нашите старши инженери ще го прочете лично и ще се върне с ясна следваща стъпка в рамките на {hours} часа.',
      note:     'Не е необходим ангажимент.',
      sending:  'Изпращане…',
      privacy:  { before: 'Използваме изпратените данни единствено за да отговорим на запитването ви. Вижте нашата ', link: 'Политика за поверителност', after: '.' },
      send:     'Изпратете съобщение →',
      fields: {
        name:    'Име',
        company: 'Компания',
        email:   'Имейл',
        brief:   'Описание',
      },
      placeholders: {
        name:    'Вашето име',
        company: 'Наименование на компанията (по желание)',
        email:   'вие@компания.bg',
        brief:   'По какво работите? Достатъчно е кратко описание.',
      },
      errors: {
        name:   'Моля, въведете вашето име',
        email:  'Моля, въведете валиден имейл адрес',
        brief:  'Моля, опишете накратко по какво работите (поне 10 символа)',
        submit: 'Възникна грешка при изпращането. Моля, опитайте отново или пишете директно на {email}.',
      },
      success: {
        title:  'Ще се свържем с вас.',
        body:   'Благодарим ви, че се свързахте с нас. Ще отговорим в рамките на {hours} часа с ясна стратегия — без търговска презентация.',
        detail: 'Отговор в рамките на {hours} ч. · Без ангажимент',
      },
    },

    footer: {
      tagline:   'Разработено за резултат.\nОт визията до операциите – ние отговаряме за вашето инженерно съвършенство.',
      company: {
        title: 'Компания',
        links: [
            { label: 'За нас',         href: '/about'   },
            { label: 'Нашата работа',  href: '/#work'   },
            { label: 'Блог',           href: '/blog'    },
            { label: 'Кариери',        href: '/about#team' },
          ],
      },
      contactTitle: 'Контакт',
      copyright: 'Всички права запазени.',
      legalNotice: 'Правна информация',
      privacy:   'Политика за поверителност',
      terms:     'Условия за ползване',
      cookies:   'Политика за бисквитки',
    },
  },
}

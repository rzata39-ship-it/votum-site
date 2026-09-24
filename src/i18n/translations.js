export const translations = {

  // ─────────────────────────────────────────────────────────── ENGLISH ──
  en: {
    nav: {
      services:  'Services',
      howWeWork: 'How we work',
      work:      'Our work',
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
      lead:        'From vision to operations, we own your engineering excellence.',
      ctaPrimary:  'Get in touch →',
      ctaSecondary:'Case Studies',
    },

    stats: [
      { num: '45+', label: 'Projects delivered',  color: 'green' },
      { num: '18+', label: 'Years of experience', color: 'teal'  },
      { num: '80%', label: 'Client retention',    color: 'green' },
      { num: '20+', label: 'Expert engineers',    color: 'teal'  },
    ],

    services: {
      eyebrow:   'What we do',
      title:     'End-to-end engineering',
      lead:      "We cover every layer of the engineering lifecycle, so you don't have to coordinate five different vendors.",
      learnMore: 'Learn more →',
      cards: [
        {
          title:      'Technology Strategy & Consulting',
          body:       'Make the right technology decisions before they become expensive ones. We work with your leadership to define clear roadmaps, evaluate build-vs-buy tradeoffs, and align your architecture with your long-term business goals.',
          details:    [
            'We help organizations navigate complex technology decisions at critical junctures. Our approach combines deep technical expertise with business acumen to develop clear, actionable technology roadmaps.',
            'We conduct thorough architecture reviews, evaluate build-vs-buy scenarios with detailed cost-benefit analysis, assess vendor options objectively, and align your technical strategy with business objectives.',
            'We work directly with C-suite and engineering leadership to identify technical debt, modernization priorities, and competitive advantages through technology. Our goal is to reduce risk, accelerate decision-making, and position your organization for sustainable growth without expensive missteps.',
          ],
          tags:       [
            { label: 'Architecture Assessment', variant: 'green' },
            { label: 'Vendor Evaluation',       variant: 'green' },
            { label: 'Risk Reduction',          variant: 'green' },
            { label: 'Roadmap Planning',        variant: 'green' },
          ],
          modalTitle: 'Make confident technology decisions',
        },
        {
          title:      'Software Engineering',
          body:       "From product concept to production-ready code. We build scalable, maintainable applications designed to grow with your business — not become tomorrow's technical debt.",
          details:    [
            "We deliver custom software solutions built from the ground up with production excellence in mind. Whether you're launching a new product, modernizing legacy systems, or scaling an existing application, we architect and build systems designed for growth.",
            'Our engineering practice emphasizes clean code, comprehensive testing, automated deployment pipelines, and documentation that enables your team to maintain and evolve the product.',
            'We pair senior engineers with your team, transferring knowledge and ensuring your in-house capabilities are strengthened. We focus on solving your actual business problems, not over-engineering solutions.',
            'Every line of code is designed to be maintainable, testable, and scalable — eliminating technical debt before it starts.',
          ],
          tags:       [
            { label: 'Custom Development', variant: 'teal' },
            { label: 'Code Quality',       variant: 'teal' },
            { label: 'Scalability',        variant: 'teal' },
          ],
          modalTitle: 'Custom software built for excellence',
        },
        {
          title:      'DevOps & Cloud',
          body:       "Infrastructure that doesn't slow your team down. We design and operate CI/CD pipelines, containerized environments, and cloud-native platforms built for speed, reliability, and scale.",
          details:    [
            "Infrastructure is the backbone of modern software delivery, and it shouldn't be a bottleneck. We design and manage cloud architectures that enable your team to deploy with confidence and operate reliably at scale.",
            'Our services include CI/CD pipeline design and implementation, containerization strategies using Docker and Kubernetes, multi-cloud and hybrid cloud architecture, infrastructure-as-code practices, automated monitoring and alerting, disaster recovery and business continuity planning, and cost optimization across cloud platforms.',
            "We handle the operational burden — infrastructure provisioning, scaling, security patching, and incident response — so your engineers focus on product development. Whether you're migrating from on-premises infrastructure or optimizing existing cloud environments, we reduce operational friction and enable rapid, safe deployments.",
          ],
          tags:       [
            { label: 'CI/CD Pipelines',       variant: 'green' },
            { label: 'Infrastructure-as-Code', variant: 'green' },
            { label: 'Containerization',       variant: 'green' },
            { label: 'Cloud Architecture',     variant: 'green' },
          ],
          modalTitle: 'Infrastructure that scales with you',
        },
        {
          title:      'Managed Services & Operations',
          body:       "We don't just build and hand off. We stay on to monitor, maintain, and continuously improve your systems — so your team focuses on features, not firefighting.",
          details:    [
            'Production systems require continuous care. We provide comprehensive managed services to keep your applications running smoothly and improving over time.',
            'This includes 24/7 system monitoring and alerting, proactive incident response and root cause analysis, performance optimization and tuning, security patching and vulnerability management, regular health audits and recommendations, capacity planning and scaling decisions, and documentation updates.',
            'Rather than reactive troubleshooting, we take a proactive approach — identifying issues before they impact users, optimizing systems based on real usage patterns, and continuously improving reliability.',
            'Your team focuses on building new features while we ensure infrastructure stability, performance, and security. We provide regular reports on system health, incident summaries, and optimization recommendations so you stay informed without the operational overhead.',
          ],
          tags:       [
            { label: 'Incident Management',   variant: 'teal' },
            { label: '24/7 Monitoring',       variant: 'teal' },
            { label: 'Optimization',          variant: 'teal' },
            { label: 'Proactive Maintenance', variant: 'teal' },
          ],
          modalTitle: 'Always-on operations and support',
        },
        {
          title:      'Quality Engineering & Test Automation',
          body:       'Comprehensive testing strategies ensuring reliability at every layer. We build automated test suites, implement quality gates, and establish processes that catch issues before they reach production.',
          details:    [
            'Shipping with confidence requires more than manual testing. We establish quality engineering practices that catch issues early and scale with your product.',
            'Our approach includes test strategy development aligned with your product roadmap, automated unit and integration testing frameworks, end-to-end test automation for critical user flows, performance and load testing to identify bottlenecks, security testing and vulnerability scanning, continuous integration test execution, and quality metrics dashboards.',
            'We implement testing at every layer — from unit tests during development to production monitoring and synthetic testing. We work with your team to establish quality gates that enforce standards without slowing deployment velocity.',
            'This means fewer production incidents, faster feedback loops, and the confidence to ship features quickly. Our goal is to make quality invisible — testing so thorough and automated that it becomes part of your normal development rhythm, not a bottleneck.',
          ],
          tags:       [
            { label: 'Test Automation',    variant: 'green' },
            { label: 'Quality Strategy',   variant: 'green' },
            { label: 'Performance Testing',variant: 'green' },
            { label: 'Quality Gates',      variant: 'green' },
          ],
          modalTitle: 'Ship with confidence',
        },
      ],
    },

    howWeWork: {
      eyebrow: 'How we work',
      visualNote: 'Example delivery dashboard · illustrative metrics',
      title:   'A process designed around no surprises.',
      lead:    "We don't take shortcuts. Every engagement follows a proven process designed to eliminate risk, align technology with business goals, and deliver solutions your team can stand behind.",
      phases: [
        {
          eyebrow: 'Phase 01 — Discovery & Strategy',
          title:   'We start by understanding your business, not your backlog.',
          body:    'Before any solution is designed or built, we define your technology strategy, align stakeholders, and assess your current landscape. The result is a clear architecture and delivery roadmap everyone can commit to.',
          checks:  [
            'Fixed scope. No surprises',
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
            'Full observability and monitoring',
            'Cloud and DevOps operations at scale',
            'Managed services with L1–L3 support',
            'Optional SLA and long-term support',
          ],
          cta: { label: 'Get in touch →', href: '#contact', variant: 'btn-primary' },
        },
      ],
    },

    cases: {
      eyebrow: 'Our work',
      title:   'Results that speak',
      lead:    'A selection of projects where precision engineering made a measurable difference.',
      labels:  { challenge: 'The Challenge', solution: 'What We Did', outcome: 'The Result' },
      feature: {
        category: 'Managed Services & Operations',
        title:    'End-to-End Software Delivery Transformation & Operations for a Tier 1 OEM',
        cardBody: 'From platform transformation to 24/7 managed operations—ensuring reliability, scalability, and continuous improvement.',
        summary:  'Ensuring reliable operations and continuous improvement under defined SLAs.',
        challenge:'A Tier 1 automotive OEM with 150,000+ employees struggled with fragmented tools, limited visibility, and inconsistent processes across global teams. Following a large-scale transformation, they required a trusted long-term partner to operate, maintain, and continuously improve their centralized software delivery and testing platform at enterprise scale.',
        solution: 'We defined and executed a transformation strategy to unify software delivery and testing, designing a centralized platform based on OpenText ALM & UFT and migrating legacy systems into a single ecosystem. Building on this foundation, we provide end-to-end managed services for a platform supporting over 1,000 users worldwide. Our scope includes system maintenance, L1–L2 user support, incident management, and continuous platform enhancements—all under clearly defined SLAs.',
        outcome:  'A standardized and scalable environment with full lifecycle visibility, combined with stable operations within the agreed SLA targets. The client benefits from significantly reduced internal workload, continuous improvement, and a high-performing platform that ensures long-term scalability and consistent global operations.',
        tags:     ['OpenText ALM/UFT', 'Managed Services', 'SLA Management', 'L1–L2 Support'],
        stats:    [{ value: '1,000+', label: 'users' }, { value: 'SLA', label: 'based operations' }, { value: '24/7', label: 'continuity' }],
      },
      hero: {
        category: 'Data Migration & Cloud Architecture',
        title:    'Data Archival and Migration for a Leading Insurance Group',
        cardBody: 'A major European insurance group needed to decommission critical legacy platforms while preserving years of historical data, attachments, and audit trails — without vendor lock-in.',
        summary:  'Migrated and archived enterprise ALM and PPM data from legacy OpenText SaaS to a cost-efficient, audit-ready AWS platform.',
        challenge:'A major European insurance group was decommissioning their OpenText ALM and PPM platforms but faced a critical requirement: large volumes of historical Oracle database records, extensive attachments, and strict audit and compliance obligations meant the data had to remain fully accessible, secure, and audit-ready — without staying tied to legacy vendor infrastructure.',
        solution: 'We designed and implemented a scalable, cloud-native archival solution on AWS. The Oracle database was migrated to PostgreSQL on AWS RDS, ensuring full data integrity and schema optimization. All attachments and documents were extracted and structured to preserve their relationships with the underlying data. We also built a custom lightweight access tool — purpose-built for audit and compliance use cases — allowing easy querying of archived records and seamless retrieval of related files.',
        outcome:  'Historical data from OpenText ALM and PPM preserved, a successful Oracle-to-PostgreSQL migration, and full audit readiness with fast access to historical records. The client eliminated their dependency on legacy SaaS platforms, reduced operational costs, and gained a modern, future-proof archive aligned with their long-term IT strategy.',
        tags:     ['AWS', 'PostgreSQL', 'Oracle Migration', 'OpenText ALM/PPM', 'Data Archival'],
        stats:    [{ value: 'ALM/PPM', label: 'data archived' }, { value: 'AWS', label: 'cloud-native archive' }, { value: 'Audit', label: 'ready access' }],
      },
      supporting: [
        {
          category: 'Asset Management Platform',
          title:    'Modern Digital Advisory Platform for a Leading Asset Manager',
          cardBody: 'A leading asset management enterprise faced limitations with a legacy system — poor usability, limited scalability, and workflows that slowed down their consultants.',
          summary:  'Modernized manual workflows into an integrated digital platform.',
          challenge:"A leading asset management firm was held back by a legacy platform that couldn't scale. Outdated workflows, poor UX, and siloed collaboration were slowing down their specialist investment consultants and limiting operational efficiency.",
          solution: 'We designed and built a modern, enterprise-grade web platform from scratch — covering planning, design, development, testing, and full rollout. The solution features a scalable microservices backend, a React frontend, secure authentication, and containerized deployment.',
          outcome:  'End-to-end processes digitized — including planning, service mediation, activity tracking, and automated invoicing. Manual workflows replaced by digital ones, enabling efficient and scalable collaboration across the organization.',
          tags:     ['React', 'Java / Spring Boot', 'Keycloak', 'Docker', 'Kubernetes'],
          stats:    [{ value: 'Digital', label: 'end-to-end workflows' }, { value: 'Automated', label: 'invoicing' }, { value: 'Full', label: 'stack delivery' }],
        },
        {
          category: 'DevOps Platform',
          title:    'Production-Ready Kubernetes Platform for Scalable Application Delivery',
          cardBody: 'To support modern delivery demands, a client needed a robust on-premise DevOps platform built to enterprise security and infrastructure standards.',
          summary:  'Enabled secure, controlled application delivery with on-premise infrastructure.',
          challenge:'To meet growing application delivery demands, a client needed a robust, fully on-premise DevOps platform — one that could support modern deployment practices while meeting strict enterprise security and infrastructure requirements.',
          solution: 'We designed and implemented a complete on-premise Kubernetes platform from scratch — with dedicated clusters for development and production, integrated core services (ingress, storage, backups, monitoring), and CI/CD pipelines via Jenkins with built-in security scanning.',
          outcome:  'A production-ready infrastructure enabling secure, scalable, and consistent application delivery — with full control over deployment processes and more reliable releases.',
          tags:     ['Kubernetes', 'Jenkins', 'CI/CD', 'On-Premise Infrastructure', 'DevSecOps'],
          stats:    [{ value: 'CI/CD', label: 'automated deploys' }, { value: '2', label: 'cluster environments' }, { value: 'On-prem', label: 'Kubernetes platform' }],
        },
      ],
      final: {
        category: 'Test Automation',
        title:    'Scalable Test Automation Framework for an Automotive Enterprise',
        cardBody: 'A leading automotive manufacturer relied heavily on manual testing — resulting in slow releases, limited scalability, and growing delivery risk.',
        summary:  'Integrated testing directly into the release lifecycle with automation.',
        challenge:"A leading automotive manufacturer was over-reliant on manual UI and functional testing. Slow release cycles, limited scalability, and growing system complexity were creating real risk — and the testing function couldn't keep pace with delivery demands.",
        solution: 'We designed and implemented a comprehensive test automation framework from scratch using world-class, industry-standard test automation platform, defined standardized testing processes, and integrated automated testing directly into the development and release lifecycle.',
        outcome:  'Significantly reduced manual testing effort, faster and more reliable release cycles, and improved test coverage across teams — enabling scalable, high-quality software delivery at enterprise pace.',
        tags:     ['Test Automation', 'QA Strategy', 'Release Management', 'Process Standardization'],
        stats:    [{ value: 'Broader', label: 'test coverage' }, { value: 'Faster', label: 'release cycles' }, { value: 'Less', label: 'manual testing' }],
      },
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
        eyebrow: 'About Votum',
        titleLines: ['We build', 'engineering'],
        titleTail: 'that',
        titleAccent: 'lasts.',
        lead: 'Votum is a senior engineering consultancy. We embed with your team, take ownership of outcomes, and build the technical foundations that let your product scale — without the overhead of a traditional agency.',
        // The year itself comes from company.foundingYear (src/config/company.js)
        // and is only rendered once it is confirmed.
        foundedText: "Built on the belief that great engineering is about ownership, not output. That hasn't changed.",
      },
      stats: [
        { num: '45+', label: 'Projects delivered',   color: 'green' },
        { num: '18+', label: 'Years of experience',  color: 'teal'  },
        { num: '80%', label: 'Client retention',     color: 'green' },
        { num: '20+', label: 'Senior engineers',     color: 'teal'  },
      ],
      mission: {
        eyebrow: 'Our mission',
        quote: 'Engineering organizations that',
        quoteAccent: 'outlast the engagement.',
        paragraphs: [
          'Most agencies optimize for delivery: ship the feature, invoice the hours, move on. We optimize for the moment you no longer need us — when your team is confident, your systems are stable, and the architecture we built together is something you can grow on for years.',
          "That means we embed deeply. We sit in your standups, write your documentation, and have the conversations that don't fit in a Jira ticket. It's slower in the short term and dramatically more valuable in the long term.",
          'Votum was built by engineers who had spent years watching the same patterns fail — disconnected strategy, short-term execution, and handoffs that left teams worse off than when the engagement started. We set out to build the alternative.',
        ],
      },
      principles: {
        eyebrow: 'How we work',
        title: "Six things we won't compromise on.",
        cards: [
          { num: '01', color: 'green', title: 'Senior engineers only',     body: "We don't staff with juniors and supervise from a distance. Every engineer working on your product has years of production experience. You pay for expertise, you get expertise." },
          { num: '02', color: 'teal',  title: 'Ownership, not output',     body: "We measure success by outcomes, not tickets closed. If a feature shipped but the system is harder to maintain, we didn't succeed. We own the full lifecycle of what we build." },
          { num: '03', color: 'green', title: 'No architecture astronauts', body: "We recommend the simplest solution that solves the real problem. We won't introduce complexity to look sophisticated or to extend the engagement. If a boring solution is the right one, we'll say so." },
          { num: '04', color: 'teal',  title: 'Fixed scope before build',  body: "We won't start building until we understand the problem. Every engagement starts with a discovery phase — even a short one. Scope agreed on paper beats scope discovered in code." },
          { num: '05', color: 'green', title: 'Transparent progress',      body: "You see what we're doing every week. No black-box development cycles. Live demos every sprint, open backlogs, and honest status updates — including the hard ones." },
          { num: '06', color: 'teal',  title: 'We leave teams stronger',   body: 'The goal of every engagement is to make ourselves unnecessary. We write the documentation, run the knowledge transfers, and design systems your team can operate confidently without us.' },
        ],
      },
      diff: {
        eyebrow: 'Why Votum',
        title: 'Not a typical agency.',
        lead: 'The model most clients have experienced before — and what we do differently.',
        headers: ['Typical agency', 'Votum'],
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
        note: 'Every person at Votum has spent years in production engineering — not in consulting about it. We hire experienced specialists and give them the ownership and environment to keep growing.',
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
        subStrong: 'Technical writing from the Votum team.',
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

    // Page metadata. The build plugin (vite.config.js) writes the English
    // values into the static HTML of each route; useSeo() updates them at runtime.
    seo: {
      home:     { title: 'VOTUM – Software Engineering, DevOps & Test Automation', description: 'Sofia-based engineering partner for technology consulting, custom software, DevOps & cloud, managed operations and test automation — from discovery to production.' },
      about:    { title: 'About VOTUM – Engineering Team in Sofia', description: 'Meet the VOTUM team and how we work: experienced engineers, fixed scope before build and transparent delivery. VOTUM IT EOOD & Co KD, Sofia, Bulgaria.' },
      blog:     { title: 'Insights — VOTUM', description: 'Engineering insights from the VOTUM team: architecture decisions, delivery patterns and lessons from production engineering.' },
      privacy:  { title: 'Privacy Policy — VOTUM', description: 'How VOTUM collects, uses and protects personal data when you visit this website or contact us.' },
      legal:    { title: 'Legal Notice — VOTUM', description: 'Company details of VOTUM IT EOOD & Co KD: registered address, UIC, VAT number and contact details.' },
      terms:    { title: 'Terms and Conditions — VOTUM', description: 'The terms and conditions that apply to the use of the VOTUM website and services.' },
      cookies:  { title: 'Cookie Policy — VOTUM', description: 'Which cookies and browser storage the VOTUM website uses — and which it does not.' },
      notFound: { title: 'Page not found — VOTUM', description: 'The page you are looking for does not exist.' },
    },

    footer: {
      tagline:   'Engineered for impact.\nFrom vision to operations, we own your engineering excellence.',
      company: {
        title: 'Company',
        links: [
            { label: 'About',    href: '/about'   },
            { label: 'Our work', href: '/#work'   },
            { label: 'Blog',     href: '/blog'    },
            { label: 'Careers',  href: '/about#team' },
          ],
      },
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

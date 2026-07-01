import {
  Boxes,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  Palette,
  Plane,
  Server,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Users,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  category: "Software" | "AI" | "Cloud" | "Design" | "Growth";
  features: string[];
  tech: string[];
  caseStudy: { title: string; result: string };
};

export const services: Service[] = [
  {
    slug: "saas-development",
    name: "SaaS Development",
    short: "Multi-tenant SaaS platforms built to scale.",
    description:
      "We architect multi-tenant SaaS platforms with billing, auth, and analytics baked in — engineered for scale from day one.",
    icon: Boxes,
    category: "Software",
    features: [
      "Multi-tenant architecture",
      "Subscription billing & invoicing",
      "Role-based access control",
      "Real-time analytics dashboard",
      "White-label theming",
      "API-first design",
    ],
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Kubernetes"],
    caseStudy: {
      title: "Scaled a fintech SaaS to 40k tenants",
      result: "0 → $2.4M ARR in 14 months",
    },
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    short: "AI-powered CRM suites that close more deals.",
    description:
      "Custom CRM systems with AI lead scoring, pipeline automation, and deep integrations tailored to your sales motion.",
    icon: Users,
    category: "Software",
    features: [
      "AI lead scoring & routing",
      "Visual pipeline builder",
      "Email & SMS automation",
      "Custom reporting",
      "Two-way calendar sync",
      "Salesforce / HubSpot sync",
    ],
    tech: ["Next.js", "Supabase", "OpenAI", "Twilio", "N8N"],
    caseStudy: {
      title: "Replaced Salesforce for a B2B agency",
      result: "38% faster deal cycles",
    },
  },
  {
    slug: "erp-software",
    name: "ERP Software",
    short: "Unified ERP for finance, HR, and operations.",
    description:
      "Modular ERP systems that unify finance, inventory, HR, and procurement into a single source of truth.",
    icon: LayoutDashboard,
    category: "Software",
    features: [
      "Finance & accounting module",
      "Inventory & procurement",
      "Production planning",
      "Approval workflows",
      "Audit-ready logging",
      "Multi-currency support",
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma", "Docker", "Grafana"],
    caseStudy: {
      title: "Unified 7 departments for a manufacturer",
      result: "52% less manual data entry",
    },
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    short: "HMS for patient care, billing, and records.",
    description:
      "End-to-end hospital management — patient records, appointments, billing, pharmacy, and lab integrations.",
    icon: Stethoscope,
    category: "Software",
    features: [
      "Electronic health records (EHR)",
      "Appointment scheduling",
      "Billing & insurance claims",
      "Pharmacy & lab modules",
      "Doctor & staff portals",
      "HL7 / FHIR compliant",
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js", "Redis", "AWS"],
    caseStudy: {
      title: "Digitized a 300-bed hospital network",
      result: "3x faster patient check-in",
    },
  },
  {
    slug: "hrms",
    name: "HRMS",
    short: "Smart HR management from hire to retire.",
    description:
      "Complete HRMS — recruitment, onboarding, payroll, leave, performance reviews, and employee self-service.",
    icon: Users,
    category: "Software",
    features: [
      "Recruitment & ATS",
      "Payroll & tax management",
      "Leave & attendance",
      "Performance reviews",
      "Employee self-service portal",
      "Org chart & analytics",
    ],
    tech: ["Next.js", "Supabase", "BullMQ", "Puppeteer", "Docker"],
    caseStudy: {
      title: "Automated payroll for 1,200 employees",
      result: "99.7% payroll accuracy",
    },
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions & AI Agents",
    short: "Autonomous agents and LLM-powered products.",
    description:
      "We design and deploy AI agents, RAG systems, and LLM-powered copilots that automate real business workflows.",
    icon: BrainCircuit,
    category: "AI",
    features: [
      "Custom AI agents & copilots",
      "RAG knowledge bases",
      "Document intelligence",
      "Voice & chat assistants",
      "Fine-tuned models",
      "MLOps & evaluation pipelines",
    ],
    tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    caseStudy: {
      title: "AI support agent handling 70% of tickets",
      result: "$480k/yr support cost saved",
    },
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    short: "High-performance web apps that scale.",
    description:
      "Custom web applications built with modern frameworks — fast, accessible, and ready for millions of users.",
    icon: Code2,
    category: "Software",
    features: [
      "Server-side rendering & ISR",
      "Real-time collaboration",
      "Progressive web apps",
      "Accessibility (WCAG 2.1)",
      "Edge-deployed & CDN-backed",
      "Comprehensive test coverage",
    ],
    tech: ["Next.js", "TypeScript", "tRPC", "Vercel", "Playwright"],
    caseStudy: {
      title: "Rebuilt a legacy portal for a logistics firm",
      result: "4.2s → 0.8s page load",
    },
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Design systems that convert and delight.",
    description:
      "Research-driven product design — from wireframes to polished design systems that ship pixel-perfect.",
    icon: Palette,
    category: "Design",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems & tokens",
      "Usability testing",
      "Motion & micro-interactions",
      "Developer handoff",
    ],
    tech: ["Figma", "Framer", "Lottie", "Storybook", "Tokens Studio"],
    caseStudy: {
      title: "Redesigned a B2B onboarding flow",
      result: "27% lift in activation",
    },
  },
  {
    slug: "devops-cloud",
    name: "DevOps & Cloud",
    short: "CI/CD, infra, and observability done right.",
    description:
      "Cloud infrastructure, CI/CD pipelines, and observability stacks that keep your product fast and reliable.",
    icon: Cloud,
    category: "Cloud",
    features: [
      "Infrastructure as code (Terraform)",
      "Kubernetes orchestration",
      "CI/CD pipelines",
      "Observability & alerting",
      "Cost optimization",
      "Zero-downtime deploys",
    ],
    tech: ["Terraform", "Kubernetes", "Docker", "Grafana", "AWS"],
    caseStudy: {
      title: "Cut cloud spend 41% for a scaleup",
      result: "$220k/yr infrastructure saved",
    },
  },
  {
    slug: "api-development",
    name: "API Development",
    short: "Robust, documented, and versioned APIs.",
    description:
      "API platforms with auth, rate limiting, SDKs, and interactive docs — built for partners and internal teams alike.",
    icon: Server,
    category: "Software",
    features: [
      "REST & GraphQL endpoints",
      "OAuth2 & API key auth",
      "Rate limiting & quotas",
      "Auto-generated SDKs",
      "OpenAPI documentation",
      "Versioning & deprecation",
    ],
    tech: ["Node.js", "Fastify", "GraphQL", "Redis", "Stoplight"],
    caseStudy: {
      title: "Built a partner API for a fintech",
      result: "120+ integrations in 6 months",
    },
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Growth marketing that compounds.",
    description:
      "SEO, paid acquisition, content, and lifecycle marketing engineered around measurable revenue — not vanity metrics.",
    icon: Megaphone,
    category: "Growth",
    features: [
      "Technical SEO audits",
      "Paid search & social",
      "Content strategy",
      "Lifecycle email & SMS",
      "Conversion rate optimization",
      "Attribution & analytics",
    ],
    tech: ["GA4", "HubSpot", "Ahrefs", "Klaviyo", "Segment"],
    caseStudy: {
      title: "Scaled organic traffic 5x for a SaaS",
      result: "180% more qualified leads",
    },
  },
  {
    slug: "travel-platform",
    name: "Travel Platform",
    short: "Booking, inventory, and itinerary engines.",
    description:
      "Travel booking platforms with real-time inventory, multi-supplier APIs, payments, and itinerary management.",
    icon: Plane,
    category: "Software",
    features: [
      "Real-time booking engine",
      "Multi-supplier inventory",
      "Payment & refund flows",
      "Itinerary builder",
      "Agent & B2B portals",
      "GDS / API integrations",
    ],
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Node.js"],
    caseStudy: {
      title: "Launched a DMC platform in 90 days",
      result: "12k bookings in first quarter",
    },
  },
  {
    slug: "edtech-solutions",
    name: "EdTech Solutions",
    short: "LMS, live classes, and adaptive learning.",
    description:
      "Learning platforms with live classes, assessments, adaptive learning paths, and rich analytics.",
    icon: GraduationCap,
    category: "Software",
    features: [
      "Course & curriculum builder",
      "Live classes & webinars",
      "Adaptive learning paths",
      "Assessments & proctoring",
      "Gamification & badges",
      "Student & parent portals",
    ],
    tech: ["Next.js", "Supabase", "WebRTC", "Mux", "OpenAI"],
    caseStudy: {
      title: "Powered an online university",
      result: "45k active learners",
    },
  },
  {
    slug: "fintech-solutions",
    name: "FinTech Solutions",
    short: "Payments, lending, and compliance platforms.",
    description:
      "FinTech platforms — payments, wallets, lending, KYC, and compliance — built to pass audit and scale.",
    icon: CreditCard,
    category: "Software",
    features: [
      "Payments & wallets",
      "Lending & BNPL engines",
      "KYC / AML compliance",
      "Ledger & reconciliation",
      "Fraud detection",
      "PCI-DSS ready architecture",
    ],
    tech: ["Next.js", "PostgreSQL", "Stripe", "Plaid", "AWS"],
    caseStudy: {
      title: "Launched a neobank MVP",
      result: "$1.1M deposits in 60 days",
    },
  },
  {
    slug: "ecommerce-platforms",
    name: "eCommerce Platforms",
    short: "Headless commerce that converts.",
    description:
      "Headless eCommerce storefronts with blazing-fast checkout, inventory, and omnichannel fulfillment.",
    icon: ShoppingCart,
    category: "Software",
    features: [
      "Headless storefront",
      "One-page checkout",
      "Inventory & order management",
      "Omnichannel fulfillment",
      "Subscriptions & loyalty",
      "Marketplace integrations",
    ],
    tech: ["Next.js", "Medusa", "Stripe", "Algolia", "Vercel"],
    caseStudy: {
      title: "Migrated a DTC brand to headless",
      result: "33% higher conversion rate",
    },
  },
  {
    slug: "agency-starter-solutions",
    name: "Agency Starter Solutions",
    short: "Launch your agency with white-label tech.",
    description:
      "White-label SaaS starter kits and reseller programs that let agencies launch client products in days, not months.",
    icon: Sparkles,
    category: "Software",
    features: [
      "White-label SaaS kits",
      "Reseller & partner program",
      "Client onboarding portals",
      "Branded invoicing",
      "Pre-built integrations",
      "Priority support SLAs",
    ],
    tech: ["Next.js", "Supabase", "Stripe", "Resend", "Docker"],
    caseStudy: {
      title: "Onboarded 60 agencies in year one",
      result: "$1.8M partner revenue",
    },
  },
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
};

export const products: Product[] = [
  {
    slug: "novhrm",
    name: "LumenHR",
    tagline: "Smart HR Management System",
    description:
      "A complete HRMS covering recruitment, payroll, attendance, performance, and employee self-service — with AI-assisted insights.",
    icon: Users,
    features: [
      "AI-assisted recruitment & ATS",
      "Automated payroll & tax filing",
      "Leave, attendance & shifts",
      "360° performance reviews",
      "Employee self-service portal",
      "Org analytics & attrition forecasting",
    ],
    pricing: { basic: 49, pro: 149, enterprise: 0 },
  },
  {
    slug: "novcrm",
    name: "LumenCRM",
    tagline: "AI-Powered CRM Suite",
    description:
      "A CRM that thinks — AI lead scoring, pipeline automation, and a unified inbox across email, SMS, and chat.",
    icon: Building2,
    features: [
      "AI lead scoring & next-best-action",
      "Visual pipeline & deal automation",
      "Unified inbox (email, SMS, chat)",
      "Custom dashboards & forecasting",
      "Two-way calendar & meeting sync",
      "Native integrations & open API",
    ],
    pricing: { basic: 39, pro: 119, enterprise: 0 },
  },
  {
    slug: "novtravel",
    name: "LumenTravel",
    tagline: "Travel Booking & Management Platform",
    description:
      "A travel platform with real-time inventory, multi-supplier APIs, itinerary building, and B2B agent portals.",
    icon: Plane,
    features: [
      "Real-time booking engine",
      "Multi-supplier inventory aggregation",
      "Dynamic packaging & itineraries",
      "B2B agent & reseller portals",
      "Payments, refunds & ledgers",
      "GDS & third-party API integrations",
    ],
    pricing: { basic: 199, pro: 499, enterprise: 0 },
  },
  {
    slug: "novsaas",
    name: "LumenKit",
    tagline: "White-label SaaS Accelerator",
    description:
      "A production-ready SaaS starter kit — auth, billing, teams, and admin — so you can launch your product in weeks.",
    icon: Boxes,
    features: [
      "Multi-tenant auth & teams",
      "Subscription billing & metering",
      "Admin & customer portals",
      "White-label theming",
      "Audit logs & compliance",
      "Pre-built integrations & API",
    ],
    pricing: { basic: 299, pro: 799, enterprise: 0 },
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "Northbeam",
    quote:
      "Novyra Technologies shipped our MVP in 8 weeks. The polish was so good our investors thought we'd spent six months on it.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "CTO",
    company: "Drift Health",
    quote:
      "They embedded with our team and felt like senior hires from day one. The codebase they handed back is the cleanest we've ever inherited.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Lead",
    company: "Kite Travel",
    quote:
      "We came with a Figma file and a deadline. Lumen hit the deadline and improved the design along the way. Rare combination.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Head of Engineering",
    company: "Meridian",
    quote:
      "The AI agent they built handles most of our support tickets. It paid for itself in the first quarter.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "COO",
    company: "Vertex Co.",
    quote:
      "Working with Lumen felt like adding a senior team, not a vendor. They cared about the outcome as much as we did.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "CEO",
    company: "Cobalt",
    quote:
      "They rebuilt our dashboard and our activation rate jumped 27%. The best engineering investment we've made this year.",
    rating: 5,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "architecting-multi-tenant-saas",
    title: "Architecting Multi-Tenant SaaS That Scales to 100k Tenants",
    excerpt:
      "A practical guide to database isolation, tenant routing, billing, and the trade-offs that actually matter at scale.",
    category: "Engineering",
    readTime: "8 min read",
    date: "2026-06-18",
    author: "Aarav Mehta",
    authorRole: "Principal Engineer",
    content:
      "Multi-tenancy is the defining architectural decision of any SaaS platform. Get it wrong early and every feature downstream becomes harder. In this piece we walk through the three isolation models — shared database with tenant discriminator, schema-per-tenant, and database-per-tenant — and when each one pays off.\n\nWe then cover the patterns we use at Novyra Technologies: a tenant context propagated via middleware, row-level security policies enforced at the database, and a billing service that meters usage asynchronously. The result is a system where adding a new tenant is a single API call, and where no tenant can ever see another tenant's data — by construction, not by convention.",
  },
  {
    slug: "ai-agents-in-production",
    title: "Shipping AI Agents in Production: Lessons From 30 Deployments",
    excerpt:
      "What we learned deploying LLM-powered agents for support, sales, and operations — including the failures nobody talks about.",
    category: "AI",
    readTime: "11 min read",
    date: "2026-06-10",
    author: "Leila Haddad",
    authorRole: "Head of AI",
    content:
      "Everyone ships a demo. Shipping an agent that runs 24/7, handles real money, and doesn't hallucinate at the worst moment is a different sport. After 30 production deployments we've learned that the model is maybe 20% of the work — the other 80% is evaluation, guardrails, observability, and the human-in-the-loop fallback.\n\nWe share our evaluation harness, the retrieval patterns that actually beat keyword search, and the operational playbook for when an agent goes off the rails. The single biggest lever: treat your agent like a junior employee. Give it a runbook, review its work, and never let it touch the database without a human approving the destructive action.",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale: Tokens, Theming, and Handoff",
    excerpt:
      "How we build design systems that survive rebrands, multiple products, and three rounds of engineering churn.",
    category: "Design",
    readTime: "7 min read",
    date: "2026-06-02",
    author: "Sofia Alvarez",
    authorRole: "Design Lead",
    content:
      "A design system is not a Figma file. It is a contract between design and engineering that, when maintained, lets a small team ship like a much bigger one. The foundation is tokens — a single source of truth for color, spacing, and typography that compiles to every platform you ship on.\n\nWe cover the token pipeline we use at Novyra Technologies, how we handle dark mode and white-label theming without forking components, and the handoff rituals that keep design and engineering in sync. The secret is boring: version your tokens, document every change, and treat the system as a product with its own roadmap.",
  },
  {
    slug: "devops-cost-optimization",
    title: "Cutting Cloud Spend 40% Without Losing Reliability",
    excerpt:
      "A field guide to right-sizing, autoscaling, and the FinOps practices that actually move the needle.",
    category: "Cloud",
    readTime: "6 min read",
    date: "2026-05-26",
    author: "Kenji Watanabe",
    authorRole: "Staff SRE",
    content:
      "Cloud bills creep up quietly. A service here, a forgotten staging environment there, and suddenly you're spending six figures a month on infrastructure that's 70% idle. We walk through the audit we run on every new engagement: identifying zombie resources, right-sizing instances, moving stateless workloads to spot, and autoscaling the rest.\n\nThe biggest wins are almost never exotic. They are visibility, tagging, and the discipline of shutting down what you aren't using. We share the dashboards and alerting we set up so the savings stick — because cost optimization is not a project, it's a habit.",
  },
  {
    slug: "fintech-compliance-by-design",
    title: "FinTech Compliance by Design: KYC, AML, and Audit Trails",
    excerpt:
      "Why compliance should be an architecture concern, not a legal afterthought bolted on before launch.",
    category: "FinTech",
    readTime: "9 min read",
    date: "2026-05-18",
    author: "Aarav Mehta",
    authorRole: "Principal Engineer",
    content:
      "In FinTech, compliance is not a feature you add in month eleven — it is the shape of your system. Every transaction, every customer onboarding, every privileged action must be auditable, immutable, and explainable to a regulator. We describe the event-sourced ledger pattern we use, how we build KYC and AML into the onboarding flow rather than bolting it on, and how we design audit trails that survive a database migration.\n\nThe payoff is huge: when the auditor arrives, you hand them a read-only dashboard instead of a spreadsheet. And when a customer disputes a charge, you can reconstruct the exact state of the system at that moment.",
  },
  {
    slug: "building-high-performing-teams",
    title: "Building High-Performing Product Teams: Our Playbook",
    excerpt:
      "The rituals, roles, and review practices we use to ship world-class software without burning out the team.",
    category: "Culture",
    readTime: "5 min read",
    date: "2026-05-09",
    author: "Daniel Brooks",
    authorRole: "VP Engineering",
    content:
      "Great software is built by great teams, and great teams are built by design, not by accident. We share the operating model behind every Novyra Technologies engagement: small cross-functional pods, a single accountable owner per outcome, and a weekly demo cadence that keeps everyone honest.\n\nWe also cover the review practices that keep quality high without slowing the team down — trunk-based development, pair programming on the risky parts, and a blameless post-mortem culture that turns every incident into a system improvement.",
  },
];

export const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Products Shipped",
    description: "MVPs and full platforms delivered to date.",
  },
  {
    value: 1,
    suffix: "",
    label: "Founders Partnered",
    description: "Startups and scaleups we work alongside.",
  },
  {
    value: 12,
    suffix: "wk",
    label: "Avg. Time to MVP",
    description: "From kickoff to production launch.",
  },
  {
    value: 100,
    suffix: "%",
    label: "In-House Team",
    description: "No outsourcing, no handoffs, no surprises.",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We map your goals, constraints, and users before writing a line of code.",
    visual: "discovery",
  },
  {
    title: "Design",
    description:
      "Wireframes, prototypes, and a design system tailored to your brand.",
    visual: "design",
  },
  {
    title: "Build",
    description:
      "Agile sprints with weekly demos, trunk-based development, and continuous integration.",
    visual: "build",
  },
  {
    title: "Test",
    description:
      "Automated tests, load tests, and usability testing before launch.",
    visual: "test",
  },
  {
    title: "Launch",
    description:
      "Zero-downtime deploy, observability, and a 90-day support window.",
    visual: "launch",
  },
];

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Material UI", category: "Frontend" },
  { name: "Ant Design", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Hugging Face", category: "AI" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const companyInfo = {
  name: "Novyra Technologies",
  tagline: "Software that moves you forward",
  email: "hello@novyratech.in",
  phone: "+91 7903724407",
  address: "Muzaffarpur, Bihar, India",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
};

export const team = [
  { name: "Aarav Mehta", role: "Founder & Engineer", initials: "AM" },
  { name: "Sofia Alvarez", role: "Design Lead", initials: "SA" },
  { name: "Leila Haddad", role: "AI Engineer", initials: "LH" },
  { name: "Kenji Watanabe", role: "Infrastructure Engineer", initials: "KW" },
  { name: "Daniel Brooks", role: "Senior Engineer", initials: "DB" },
  { name: "Priya Nair", role: "Product Designer", initials: "PN" },
];

export const timeline = [
  {
    year: "2024",
    title: "Founded",
    description:
      "Novyra Technologies starts as a two-person studio in San Francisco.",
  },
  {
    year: "2024",
    title: "First Shipped Product",
    description: "Shipped an MVP for a healthtech startup in 8 weeks.",
  },
  {
    year: "2025",
    title: "AI Practice",
    description:
      "Built our first production AI agent for a client support team.",
  },
  {
    year: "2025",
    title: "Product Suite",
    description: "Launched LumenHR, LumenCRM, LumenTravel, and LumenKit.",
  },
  {
    year: "2026",
    title: "Growing Fast",
    description:
      "Now a six-person team partnering with founders across industries.",
  },
];

export const categories = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Building interactive and responsive user interfaces",
    accentColor: "#a855f7",
    headerBg: "bg-purple-900/30",
    iconBg: "bg-purple-600",
    dotColor: "#a855f7",
    arrowColor: "#a855f7",
    techs: [
      { name: "React", category: "Frontend", icon: "react", color: "#61DAFB" },
      {
        name: "Next.js",
        category: "Frontend",
        icon: "nextjs",
        color: "#ffffff",
        active: true,
      },
      {
        name: "TypeScript",
        category: "Frontend",
        icon: "typescript",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: "tailwind",
        color: "#38BDF8",
      },
      {
        name: "Framer Motion",
        category: "Frontend",
        icon: "framer",
        color: "#e91e8c",
      },
      {
        name: "Material UI",
        category: "Frontend",
        icon: "materialui",
        color: "#007FFF",
      },
      {
        name: "Ant Design",
        category: "Frontend",
        icon: "antdesign",
        color: "#1677FF",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Powering the logic and APIs behind the scenes",
    accentColor: "#f97316",
    headerBg: "bg-orange-900/20",
    iconBg: "bg-orange-500",
    dotColor: "#f97316",
    arrowColor: "#f97316",
    techs: [
      {
        name: "Node.js",
        category: "Backend",
        icon: "nodejs",
        color: "#68A063",
      },
      {
        name: "GraphQL",
        category: "Backend",
        icon: "graphql",
        color: "#E535AB",
      },
      {
        name: "REST APIs",
        category: "Backend",
        icon: "rest",
        color: "#f97316",
      },
    ],
  },
  {
    id: "database",
    name: "Database",
    description: "Storing and managing application data",
    accentColor: "#22d3ee",
    headerBg: "bg-cyan-900/20",
    iconBg: "bg-cyan-500",
    dotColor: "#22d3ee",
    arrowColor: "#22d3ee",
    techs: [
      {
        name: "PostgreSQL",
        category: "Database",
        icon: "postgresql",
        color: "#336791",
      },
      {
        name: "MongoDB",
        category: "Database",
        icon: "mongodb",
        color: "#47A248",
      },
      { name: "Redis", category: "Database", icon: "redis", color: "#DC382D" },
      { name: "MySQL", category: "Database", icon: "mysql", color: "#00758F" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Deploying and scaling with the cloud",
    accentColor: "#22c55e",
    headerBg: "bg-green-900/20",
    iconBg: "bg-green-500",
    dotColor: "#22c55e",
    arrowColor: "#22c55e",
    techs: [
      { name: "AWS", category: "Cloud", icon: "aws", color: "#FF9900" },
      { name: "Vercel", category: "Cloud", icon: "vercel", color: "#22c55e" },
      { name: "Docker", category: "Cloud", icon: "docker", color: "#2496ED" },
      {
        name: "Kubernetes",
        category: "Cloud",
        icon: "kubernetes",
        color: "#326CE5",
      },
    ],
  },
];

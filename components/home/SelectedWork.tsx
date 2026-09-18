"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Layers3,
  Play,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  navigatorTitle: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
  icon: LucideIcon;
  capabilities: { label: string; icon: LucideIcon }[];
};

const PROJECTS: Project[] = [
  {
    id: "campus-management",
    title: "Campus Management Platform",
    navigatorTitle: "Campus Management",
    category: "Education",
    description: "A connected workspace for academics, attendance, communication and everyday school operations.",
    image: "/images/projects/campus-os.webp",
    alt: "School management dashboard displayed on a laptop in a bright workspace",
    accent: "#2f78ed",
    icon: GraduationCap,
    capabilities: [
      { label: "Academics", icon: BookOpenCheck },
      { label: "Engagement", icon: GraduationCap },
      { label: "Operations", icon: Workflow },
    ],
  },
  {
    id: "learning-ai",
    title: "AI Learning Platform",
    navigatorTitle: "AI Learning",
    category: "EdTech",
    description: "A focused learning environment that brings study plans, progress and useful guidance together.",
    image: "/images/projects/learning-ai.webp",
    alt: "AI learning dashboard displayed on a desktop monitor",
    accent: "#2d70dc",
    icon: Sparkles,
    capabilities: [
      { label: "Study Plans", icon: BookOpenCheck },
      { label: "AI Guidance", icon: Sparkles },
      { label: "Insights", icon: Layers3 },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Operations Portal",
    navigatorTitle: "Healthcare Operations",
    category: "Healthcare",
    description: "A clear digital experience for appointments, departments and coordinated patient services.",
    image: "/images/projects/healthcare-platform.webp",
    alt: "Healthcare operations dashboard displayed on a laptop",
    accent: "#19a58d",
    icon: HeartPulse,
    capabilities: [
      { label: "Appointments", icon: HeartPulse },
      { label: "Departments", icon: Building2 },
      { label: "Operations", icon: Workflow },
    ],
  },
  {
    id: "business-commerce",
    title: "Business Commerce Platform",
    navigatorTitle: "Business Commerce",
    category: "Digital Commerce",
    description: "A modern operations experience for products, enquiries, customers and everyday business visibility.",
    image: "/images/projects/business-commerce.webp",
    alt: "Digital commerce operations dashboard on a desktop display",
    accent: "#ef792f",
    icon: BriefcaseBusiness,
    capabilities: [
      { label: "Products", icon: Boxes },
      { label: "Enquiries", icon: BriefcaseBusiness },
      { label: "Customers", icon: Layers3 },
    ],
  },
  {
    id: "saas-operations",
    title: "SaaS Operations Workspace",
    navigatorTitle: "SaaS Workspace",
    category: "Business SaaS",
    description: "A scalable workspace for projects, workflows, team collaboration and operational reporting.",
    image: "/images/projects/saas-operations.webp",
    alt: "Dark navy SaaS operations dashboard displayed on a laptop",
    accent: "#4778e8",
    icon: Workflow,
    capabilities: [
      { label: "Workflows", icon: Workflow },
      { label: "Teams", icon: BriefcaseBusiness },
      { label: "Reports", icon: Layers3 },
    ],
  },
  {
    id: "fitness-wellness",
    title: "Fitness & Wellness Platform",
    navigatorTitle: "Fitness & Wellness",
    category: "Fitness",
    description: "A practical platform for memberships, classes, trainers, bookings and progress.",
    image: "/images/projects/fitness-platform.webp",
    alt: "Fitness and wellness management dashboard on a desktop monitor",
    accent: "#2e9b68",
    icon: Dumbbell,
    capabilities: [
      { label: "Classes", icon: Dumbbell },
      { label: "Memberships", icon: Layers3 },
      { label: "Progress", icon: Sparkles },
    ],
  },
];

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredRef = useRef<HTMLDivElement>(null);
  const activeProject = PROJECTS[activeIndex];
  const ActiveIcon = activeProject.icon;

  const selectProject = (index: number, fromMobile = false) => {
    setActiveIndex((index + PROJECTS.length) % PROJECTS.length);
    if (fromMobile && featuredRef.current) {
      const bounds = featuredRef.current.getBoundingClientRect();
      const comfortablyVisible = bounds.top >= 72 && bounds.bottom <= window.innerHeight - 100;
      if (!comfortablyVisible) {
        window.setTimeout(() => featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 40);
      }
    }
  };

  return (
    <section id="selected-work" className="work-section">
      <div className="work-ambient work-ambient-blue" aria-hidden />
      <div className="work-ambient work-ambient-green" aria-hidden />
      <div className="work-shell">
        <div className="work-top-composition">
          <header className="work-intro">
          <div className="work-eyebrow"><span />SELECTED WORK<span /></div>
          <h2 className="work-desktop-title">
            <span>Work We&apos;re</span>
            <span className="work-blue">Proud</span>
            <span className="work-green">to Ship.</span>
          </h2>
          <h2 className="work-mobile-title">
            <span>Work We&apos;re</span>
            <span>Proud <em>to Ship.</em></span>
          </h2>
          <p className="work-desktop-copy">From schools and hospitals to startups and growing businesses — we build digital products that solve real problems and create lasting value.</p>
          <p className="work-mobile-copy">From schools and hospitals to startups — we build digital products that create lasting impact.</p>
          <div className="work-actions">
            <Link href="/work" className="work-primary-action">Explore All Projects <ArrowRight aria-hidden /></Link>
            <button type="button" className="work-watch-action" aria-label="Watch success stories">
              <span><Play aria-hidden /></span>Watch<br />Success Stories
            </button>
          </div>
          <div className="work-proof-points" aria-label="Our project approach">
            <span><Layers3 aria-hidden />Diverse Industries</span>
            <span><BriefcaseBusiness aria-hidden />Real Projects</span>
            <span><Workflow aria-hidden />End-to-End Delivery</span>
          </div>
          </header>

          <div className="work-story" ref={featuredRef} style={{ "--project-accent": activeProject.accent } as CSSProperties}>
          <div className="work-stack" key={`stack-${activeProject.id}`}>
            {[2, 1].map((offset) => {
              const project = PROJECTS[(activeIndex + offset) % PROJECTS.length];
              return (
                <div className={`work-stack-back work-stack-back-${offset}`} key={project.id} aria-hidden>
                  <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 560px, 80vw" />
                </div>
              );
            })}
            <article className="work-featured-panel">
              <div className="work-featured-image">
                <Image src={activeProject.image} alt={activeProject.alt} fill priority={activeIndex === 0} sizes="(min-width: 1200px) 680px, (min-width: 768px) 82vw, calc(100vw - 28px)" />
                <span className="work-category-pill"><ActiveIcon aria-hidden />{activeProject.category}</span>
              </div>
              <div className="work-featured-content">
                <div>
                  <p>{String(activeIndex + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</p>
                  <h3>{activeProject.title}</h3>
                  <span>{activeProject.description}</span>
                </div>
                <Link href={`/work#${activeProject.id}`} aria-label={`Open ${activeProject.title}`}><ArrowRight aria-hidden /></Link>
              </div>
              <div className="work-capabilities">
                {activeProject.capabilities.map(({ label, icon: Icon }) => <span key={label}><Icon aria-hidden />{label}</span>)}
              </div>
            </article>
          </div>
          <svg className="work-story-path" viewBox="0 0 650 90" preserveAspectRatio="none" aria-hidden><path d="M20 20 C180 92 445 88 620 18" /><path d="m610 12 12 6-9 10" /></svg>
          </div>
        </div>

        <div className="work-filmstrip" aria-label="Choose a featured project">
          <div className="work-filmstrip-controls">
            <button type="button" aria-label="Previous project" onClick={() => selectProject(activeIndex - 1)}><ArrowLeft aria-hidden /></button>
            <div className="work-filmstrip-items">
              {PROJECTS.map((project, index) => (
                <button key={project.id} type="button" aria-label={`Show ${project.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => selectProject(index)}>
                  <Image src={project.image} alt="" fill sizes="150px" />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next project" onClick={() => selectProject(activeIndex + 1)}><ArrowRight aria-hidden /></button>
          </div>
          <div className="work-filmstrip-caption" key={`caption-${activeProject.id}`}>
            <small>{String(activeIndex + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</small>
            <strong>{activeProject.title}</strong>
            <span>{activeProject.category}</span>
          </div>
        </div>

        <div className="work-mobile-index" aria-label="Project story index">
          <div className="work-index-heading"><strong>EXPLORE PROJECTS</strong><span>{String(PROJECTS.length).padStart(2, "0")} PROJECTS</span></div>
          <div className="work-index-list">
            {PROJECTS.map((project, index) => (
              <div className="work-index-row" data-active={index === activeIndex ? "true" : undefined} style={{ "--project-accent": project.accent } as CSSProperties} key={project.id}>
                <button type="button" className="work-index-select" onClick={() => selectProject(index, true)} aria-pressed={index === activeIndex} aria-label={`Preview ${project.title}`}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <span className="work-index-thumb"><Image src={project.image} alt="" fill sizes="58px" /></span>
                  <span className="work-index-name"><strong>{project.navigatorTitle}</strong><small>{project.category}</small></span>
                </button>
                <Link href={`/work#${project.id}`} aria-label={`Open ${project.title}`}><ArrowRight aria-hidden /></Link>
              </div>
            ))}
          </div>
          <div className="work-mobile-end">
            <Link href="/work">View All Projects <ArrowRight aria-hidden /></Link>
          </div>
        </div>

        <aside className="work-impact-strip">
          <div className="work-impact-orbit" aria-hidden><span /></div>
          <strong>Built for Businesses<br />Across India.</strong>
          <p><b aria-hidden>“</b>From local shops to fast-scaling brands, we build technology that helps real businesses serve more customers and run better.</p>
          <Link href="#contact">Start Your Project <ArrowRight aria-hidden /></Link>
        </aside>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Boxes,
  Brush,
  CheckCircle2,
  Code2,
  Gauge,
  Headphones,
  LayoutDashboard,
  Lock,
  Megaphone,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  PenTool,
  PlugZap,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  label: string;
  icon: LucideIcon;
  tone: "orange" | "green" | "blue" | "indigo" | "coral";
};

type ServiceItem = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  visual: string;
  visualAlt: string;
  features: Feature[];
};

const SERVICES: ServiceItem[] = [
  {
    id: "website",
    number: "01",
    title: "Website Design & Development",
    shortTitle: "Website",
    tagline: "Build trust online with a fast, modern website.",
    description:
      "We create high-performing, SEO-friendly websites that help your business look credible, grow faster and reach more customers - especially in tier 2 & tier 3 cities.",
    href: "/services",
    icon: MonitorSmartphone,
    accent: "#ff6b35",
    visual: "/images/services/website-development.webp",
    visualAlt: "Premium laptop and smartphone showing a responsive modern website",
    features: [
      { label: "Websites That Perform", icon: Zap, tone: "orange" },
      { label: "Mobile Responsive", icon: Smartphone, tone: "green" },
      { label: "SEO Optimized", icon: BarChart3, tone: "blue" },
      { label: "Secure & Scalable", icon: ShieldCheck, tone: "indigo" },
      { label: "Ongoing Support", icon: Headphones, tone: "coral" },
    ],
  },
  {
    id: "saas",
    number: "02",
    title: "SaaS & Web Applications",
    shortTitle: "SaaS",
    tagline: "Turn your process into a scalable digital product.",
    description:
      "We build clean, reliable web applications for teams, customers and operations with workflows that are simple to use and ready to grow.",
    href: "/services",
    icon: LayoutDashboard,
    accent: "#1768c5",
    visual: "/images/services/saas-web-applications.webp",
    visualAlt: "Premium laptop showing a modern SaaS dashboard and workflow product",
    features: [
      { label: "Scalable Architecture", icon: Boxes, tone: "blue" },
      { label: "Responsive Product", icon: Smartphone, tone: "green" },
      { label: "Role-Based Access", icon: Lock, tone: "indigo" },
      { label: "API Ready", icon: PlugZap, tone: "orange" },
      { label: "Ongoing Support", icon: Headphones, tone: "coral" },
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "AI & Automation",
    shortTitle: "AI",
    tagline: "Automate repetitive work without losing human control.",
    description:
      "We design practical AI workflows, assistants and integrations that reduce manual effort while keeping your business decisions clear and accountable.",
    href: "/services",
    icon: BrainCircuit,
    accent: "#13a072",
    visual: "/images/services/ai-automation.webp",
    visualAlt: "Premium laptop showing an AI automation workspace for business workflows",
    features: [
      { label: "AI Workflows", icon: Workflow, tone: "green" },
      { label: "Automation", icon: Bot, tone: "blue" },
      { label: "Smart Assistance", icon: Sparkles, tone: "orange" },
      { label: "API Integration", icon: PlugZap, tone: "indigo" },
      { label: "Human Oversight", icon: CheckCircle2, tone: "coral" },
    ],
  },
  {
    id: "marketing",
    number: "04",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline: "Reach the right audience with measurable growth systems.",
    description:
      "We help businesses build visibility through SEO, campaigns and content systems that bring more qualified customers to your digital presence.",
    href: "/services",
    icon: Megaphone,
    accent: "#ff6b35",
    visual: "/images/services/digital-marketing.webp",
    visualAlt: "Premium laptop showing a digital marketing analytics workspace",
    features: [
      { label: "SEO", icon: Search, tone: "blue" },
      { label: "Social Media", icon: Megaphone, tone: "orange" },
      { label: "Campaign Strategy", icon: PanelsTopLeft, tone: "coral" },
      { label: "Analytics", icon: BarChart3, tone: "indigo" },
      { label: "Growth Tracking", icon: Gauge, tone: "green" },
    ],
  },
  {
    id: "design",
    number: "05",
    title: "UI/UX & Branding",
    shortTitle: "UI/UX",
    tagline: "Shape digital products people understand and remember.",
    description:
      "We craft interfaces, brand systems and product experiences that feel consistent, trustworthy and easy for your customers to use.",
    href: "/services",
    icon: PenTool,
    accent: "#1454a8",
    visual: "/images/services/ui-ux-branding.webp",
    visualAlt: "Premium creative workspace showing UI UX and branding screens",
    features: [
      { label: "User Research", icon: Search, tone: "blue" },
      { label: "Responsive UI", icon: MonitorSmartphone, tone: "green" },
      { label: "Design Systems", icon: Palette, tone: "indigo" },
      { label: "Prototyping", icon: PanelsTopLeft, tone: "orange" },
      { label: "Brand Consistency", icon: Brush, tone: "coral" },
    ],
  },
  {
    id: "software",
    number: "06",
    title: "Custom Business Software",
    shortTitle: "Software",
    tagline: "Build software around the way your business actually works.",
    description:
      "We create secure internal tools, dashboards and management systems that simplify operations and give your team better visibility.",
    href: "/services",
    icon: Code2,
    accent: "#137a43",
    visual: "/images/services/custom-business-software.webp",
    visualAlt: "Premium laptop showing a custom business operations software dashboard",
    features: [
      { label: "Custom Workflows", icon: Workflow, tone: "green" },
      { label: "Role Management", icon: Lock, tone: "indigo" },
      { label: "Business Analytics", icon: BarChart3, tone: "blue" },
      { label: "Secure Access", icon: ShieldCheck, tone: "orange" },
      { label: "Scalable Systems", icon: Boxes, tone: "coral" },
    ],
  },
];

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimer = useRef<number | null>(null);
  const active = SERVICES[activeIndex];

  useEffect(() => () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
    }
  }, []);

  const scheduleHover = (index: number) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
    }

    hoverTimer.current = window.setTimeout(() => setActiveIndex(index), 120);
  };

  return (
    <section id="services" className="wwd-section">
      <div aria-hidden className="wwd-atmosphere wwd-atmosphere-left" />
      <div aria-hidden className="wwd-atmosphere wwd-atmosphere-right" />
      <svg
        aria-hidden
        className="wwd-cityline"
        viewBox="0 0 430 96"
        fill="none"
      >
        <path d="M4 88H426" stroke="currentColor" strokeWidth="2" />
        <path d="M36 88V58L58 40L80 58V88M50 88V70H66V88" stroke="currentColor" strokeWidth="2" />
        <path d="M112 88V48L144 28L176 48V88M124 88V62H164V88" stroke="currentColor" strokeWidth="2" />
        <path d="M208 88V36L232 18L256 36V88M220 88V58H244V88" stroke="currentColor" strokeWidth="2" />
        <path d="M292 88C316 52 360 52 420 88" stroke="currentColor" strokeWidth="2" />
        <path d="M306 88V72M330 88V64M354 88V60M378 88V66M402 88V76" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div aria-hidden className="wwd-note wwd-note-left">
        Ideas<br />Technology<br />Real Impact
        <span />
      </div>
      <div aria-hidden className="wwd-note wwd-note-right">
        From<br />Vision to<br />Growth
        <span />
      </div>

      <div className="wwd-header">
        <div className="wwd-eyebrow">
          <span />
          <p>What We Do</p>
          <span />
        </div>
        <h2>
          Digital solutions built
          <br />
          for <span className="text-blue-700">real business</span>{" "}
          <span className="text-green-700">growth.</span>
        </h2>
        <p>
          From your first website to a complete business platform, we build technology around what your business actually needs.
        </p>
      </div>

      <div className="wwd-showcase">
        <div className="wwd-service-nav" role="tablist" aria-label="Services">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeIndex;

            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="what-we-do-panel"
                className="wwd-service-row"
                style={{ "--service-accent": service.accent } as CSSProperties}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => scheduleHover(index)}
              >
                <span className="wwd-service-number">{service.number}</span>
                <span className="wwd-service-icon">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="wwd-service-title">{service.title}</span>
                <ArrowRight className="wwd-service-arrow h-5 w-5" aria-hidden />
              </button>
            );
          })}
        </div>

        <div
          id="what-we-do-panel"
          role="tabpanel"
          className="wwd-panel"
          style={{ "--service-accent": active.accent } as CSSProperties}
          key={active.id}
        >
          <div className="wwd-panel-main">
            <div className="wwd-copy">
              <div className="wwd-copy-kicker">
                <span />
                {active.number}
              </div>
              <h3>{active.title}</h3>
              <p className="wwd-tagline">{active.tagline}</p>
              <p className="wwd-description">{active.description}</p>
              <Link href={active.href} className="wwd-service-cta">
                Explore Service
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
            <div className="wwd-visual-wrap">
              <figure className="wwd-service-figure">
                <Image
                  src={active.visual}
                  alt={active.visualAlt}
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1199px) 86vw, 52vw"
                  className="wwd-service-image"
                />
              </figure>
            </div>
          </div>

          <div className="wwd-feature-grid">
            {active.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.label} className="wwd-feature-chip" data-tone={feature.tone}>
                  <span>
                    <FeatureIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <strong>{feature.label}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wwd-footer-detail">
        <span />
        <p>Empowering Businesses</p>
        <b aria-hidden>•</b>
        <p>Strengthening Bharat</p>
        <span />
      </div>
    </section>
  );
}

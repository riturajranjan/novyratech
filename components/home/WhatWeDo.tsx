"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowLeft,
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
  mobileDescription: string;
  mobileChips: [string, string, string];
  mobileObjectPosition: string;
  mobileAccent: string;
  mobileTitle: [string, string];
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
    visualAlt:
      "Premium laptop and smartphone showing a responsive modern website",
    mobileDescription: "Build trust online with a fast, modern website.",
    mobileChips: ["Responsive", "SEO Ready", "Modern UI"],
    mobileObjectPosition: "58% center",
    mobileAccent: "#f36f45",
    mobileTitle: ["Website Design", "& Development"],
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
    visualAlt:
      "Premium laptop showing a modern SaaS dashboard and workflow product",
    mobileDescription:
      "Custom solutions to streamline and scale your business.",
    mobileChips: ["Scalable", "API Integration", "Cloud Ready"],
    mobileObjectPosition: "62% center",
    mobileAccent: "#347ae2",
    mobileTitle: ["SaaS & Web", "Applications"],
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
    visualAlt:
      "Premium laptop showing an AI automation workspace for business workflows",
    mobileDescription:
      "Automate repetitive work with smarter digital workflows.",
    mobileChips: ["Automation", "AI Workflows", "Smart Tools"],
    mobileObjectPosition: "58% center",
    mobileAccent: "#16a36f",
    mobileTitle: ["AI &", "Automation"],
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
    mobileDescription: "Get found, build trust and reach more customers.",
    mobileChips: ["SEO", "Social Media", "Paid Campaigns"],
    mobileObjectPosition: "60% center",
    mobileAccent: "#49a65a",
    mobileTitle: ["Digital Marketing", "& SEO"],
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
    mobileDescription: "Creative experiences that make your brand stand out.",
    mobileChips: ["Brand Identity", "UI/UX Design", "Creative Assets"],
    mobileObjectPosition: "56% center",
    mobileAccent: "#7458e8",
    mobileTitle: ["UI/UX &", "Branding"],
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
    visualAlt:
      "Premium laptop showing a custom business operations software dashboard",
    mobileDescription: "Software built around the way your business works.",
    mobileChips: ["Custom Built", "Secure", "Scalable"],
    mobileObjectPosition: "56% center",
    mobileAccent: "#156bc1",
    mobileTitle: ["Custom Business", "Software"],
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">(
    "next",
  );
  const [sliderVisible, setSliderVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const hoverTimer = useRef<number | null>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef(0);
  const pointerStartY = useRef(0);
  const reducedMotion = useRef(false);
  const active = SERVICES[activeIndex];
  const mobileService = SERVICES[mobileIndex];

  useEffect(
    () => () => {
      if (hoverTimer.current) {
        window.clearTimeout(hoverTimer.current);
      }
    },
    [],
  );

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const handleVisibility = () => setPageVisible(!document.hidden);
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    const slider = mobileSliderRef.current;
    if (!slider)
      return () =>
        document.removeEventListener("visibilitychange", handleVisibility);
    const observer = new IntersectionObserver(
      ([entry]) =>
        setSliderVisible(
          entry.isIntersecting && entry.intersectionRatio >= 0.4,
        ),
      { threshold: [0, 0.4, 0.75] },
    );
    observer.observe(slider);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (!sliderVisible || !pageVisible || reducedMotion.current) return;
    const timer = window.setTimeout(() => {
      setSlideDirection("next");
      setMobileIndex((index) => (index + 1) % SERVICES.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [mobileIndex, pageVisible, sliderVisible]);

  const showMobileService = (
    index: number,
    direction?: "next" | "previous",
  ) => {
    setSlideDirection(direction ?? (index > mobileIndex ? "next" : "previous"));
    setMobileIndex((index + SERVICES.length) % SERVICES.length);
  };

  const handleMobilePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    pointerStartX.current = event.clientX;
    pointerStartY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleMobilePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const deltaX = event.clientX - pointerStartX.current;
    const deltaY = event.clientY - pointerStartY.current;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    showMobileService(
      mobileIndex + (deltaX < 0 ? 1 : -1),
      deltaX < 0 ? "next" : "previous",
    );
  };

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
        fill="none">
        <path d="M4 88H426" stroke="currentColor" strokeWidth="2" />
        <path
          d="M36 88V58L58 40L80 58V88M50 88V70H66V88"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M112 88V48L144 28L176 48V88M124 88V62H164V88"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M208 88V36L232 18L256 36V88M220 88V58H244V88"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M292 88C316 52 360 52 420 88"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M306 88V72M330 88V64M354 88V60M378 88V66M402 88V76"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div aria-hidden className="wwd-note wwd-note-left">
        Ideas
        <br />
        Technology
        <br />
        Real Impact
        <span />
      </div>
      <div aria-hidden className="wwd-note wwd-note-right">
        From
        <br />
        Vision to
        <br />
        Growth
        <span />
      </div>

      <div className="wwd-header">
        <div className="wwd-eyebrow">
          <span />
          <p>What We Do</p>
          <span />
        </div>
        <h2>
          <span className="wwd-mobile-heading-line">
            Digital solutions built
          </span>
          <br className="wwd-desktop-heading-break" />
          <span className="wwd-mobile-heading-line">
            for <span className="text-blue-700">real business</span>{" "}
            <span className="text-green-700">growth.</span>
          </span>
        </h2>
        <p>
          From your first website to a complete business platform, we build
          technology around what your business actually needs.
        </p>
      </div>

      <div
        ref={mobileSliderRef}
        className="wwd-mobile-services"
        aria-label="Our services"
        aria-live="polite"
        tabIndex={0}
        style={
          { "--service-accent": mobileService.mobileAccent } as CSSProperties
        }
        onPointerDown={handleMobilePointerDown}
        onPointerUp={handleMobilePointerUp}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft")
            showMobileService(mobileIndex - 1, "previous");
          if (event.key === "ArrowRight")
            showMobileService(mobileIndex + 1, "next");
        }}>
        <article
          key={mobileService.id}
          className="wwd-mobile-card"
          data-direction={slideDirection}
          style={
            { "--service-accent": mobileService.mobileAccent } as CSSProperties
          }>
          <div className="wwd-mobile-visual">
            <Image
              src={mobileService.visual}
              alt={mobileService.visualAlt}
              fill
              sizes="(max-width: 767px) min(100vw - 32px, 420px), 1px"
              style={{ objectPosition: mobileService.mobileObjectPosition }}
              className="wwd-mobile-image"
            />
            <span className="wwd-mobile-image-fade" aria-hidden />
          </div>
          <div className="wwd-mobile-copy">
            <div className="wwd-mobile-kicker">
              <span />
              {mobileService.number} / 06
            </div>
            <h3>
              {mobileService.mobileTitle[0]}
              <br />
              {mobileService.mobileTitle[1]}
            </h3>
            <p>{mobileService.mobileDescription}</p>
            <div
              className="wwd-mobile-chips"
              aria-label={`${mobileService.title} capabilities`}>
              {mobileService.mobileChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <Link href={mobileService.href} className="wwd-mobile-learn">
              Explore Service <ArrowRight />
            </Link>
          </div>
        </article>

        <div className="wwd-mobile-slider-nav">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => showMobileService(mobileIndex - 1, "previous")}>
            <ArrowLeft aria-hidden />
          </button>
          <div
            className="wwd-mobile-dots"
            aria-label={`Service ${mobileIndex + 1} of ${SERVICES.length}`}>
            {SERVICES.map((service, index) => (
              <button
                key={service.id}
                type="button"
                aria-label={`Go to ${service.title}`}
                aria-current={index === mobileIndex ? "true" : undefined}
                onClick={() => showMobileService(index)}
              />
            ))}
          </div>
          <button
            key={`next-${mobileIndex}`}
            type="button"
            aria-label="Next service"
            className="wwd-mobile-next"
            onClick={() => showMobileService(mobileIndex + 1, "next")}>
            <span className="wwd-mobile-progress" aria-hidden />
            <ArrowRight aria-hidden />
          </button>
        </div>
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
                onMouseEnter={() => scheduleHover(index)}>
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
          key={active.id}>
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
                <div
                  key={feature.label}
                  className="wwd-feature-chip"
                  data-tone={feature.tone}>
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
    </section>
  );
}

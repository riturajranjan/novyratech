"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, type PointerEvent as ReactPointerEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BarChart3, Code2, Handshake, Lightbulb, type LucideIcon } from "lucide-react";

type Reason = {
  number: string;
  title: string;
  description: string;
  accent: string;
  tone: string;
  icon: LucideIcon;
};

const WHY_REASONS: Reason[] = [
  {
    number: "01",
    title: "Product-first thinking",
    description: "We focus on real business problems, not just tasks.",
    accent: "#f06a2f",
    tone: "orange",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design + engineering together",
    description: "Beautiful, functional and built for impact.",
    accent: "#347ae2",
    tone: "blue",
    icon: Code2,
  },
  {
    number: "03",
    title: "Built to scale",
    description: "Solutions that grow with your business.",
    accent: "#35a56a",
    tone: "green",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Long-term partnership",
    description: "We’re with you beyond launch, at every stage.",
    accent: "#7b5ce1",
    tone: "violet",
    icon: Handshake,
  },
];

export function WhyNovyra() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [activeDesktopReason, setActiveDesktopReason] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const pointerStartX = useRef(0);
  const pointerStartY = useRef(0);
  const activeReason = WHY_REASONS[mobileIndex];
  const ActiveReasonIcon = activeReason.icon;

  const showReason = (index: number, nextDirection?: "next" | "previous") => {
    setDirection(nextDirection ?? (index > mobileIndex ? "next" : "previous"));
    setMobileIndex((index + WHY_REASONS.length) % WHY_REASONS.length);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
    pointerStartY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const deltaX = event.clientX - pointerStartX.current;
    const deltaY = event.clientY - pointerStartY.current;
    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    showReason(mobileIndex + (deltaX < 0 ? 1 : -1), deltaX < 0 ? "next" : "previous");
  };

  return (
    <section id="why-novyra" className="why-section">
      <div className="why-ambient why-ambient-left" aria-hidden />
      <div className="why-ambient why-ambient-right" aria-hidden />

      <div className="why-shell">
        <svg className="why-partnership-path" viewBox="0 0 1400 850" preserveAspectRatio="none" aria-hidden>
          <path d="M 55 205 C 310 175, 325 355, 535 340 S 830 250, 930 455 S 1115 585, 1345 690" />
          <circle cx="535" cy="340" r="5" />
          <circle cx="930" cy="455" r="5" />
          <circle cx="1345" cy="690" r="5" />
        </svg>
        <div className="why-upper">
          <div className="why-copy">
            <div className="why-eyebrow"><span />WHY NOVYRA<span /></div>
            <h2>
              <span>More than</span>
              <span>an agency.</span>
              <span className="why-blue">A long-term</span>
              <span className="why-green">technology partner.</span>
            </h2>
            <p>
              We don’t just build digital products — we help businesses solve real problems, create new opportunities and grow for what’s next.
            </p>
            <Link href="#contact" className="why-primary-cta">
              Let&apos;s Build What&apos;s Next <ArrowRight aria-hidden />
            </Link>
          </div>

          <div className="why-visual">
            <span className="why-photo-layer why-photo-layer-blue" aria-hidden />
            <span className="why-photo-layer why-photo-layer-warm" aria-hidden />
            <span className="why-photo-curve" aria-hidden />
            <div className="why-photo">
              <Image
                src="/images/why-novyra/team-collaboration.webp"
                alt="Indian technology professionals collaborating around a laptop"
                fill
                sizes="(max-width: 767px) calc(100vw - 28px), (max-width: 1023px) 52vw, 620px"
                className="why-photo-image"
              />
              <span className="why-photo-label">BUILDING TOGETHER</span>
            </div>
            <blockquote className="why-quote">
              <b aria-hidden>“</b>
              <p>Great technology builds businesses. Stronger partnerships build what’s next.</p>
              <small>Built around meaningful collaboration</small>
            </blockquote>
            <p className="why-handwritten why-handwritten-right" aria-hidden>
              Let&apos;s create<br />what&apos;s next.<i />
            </p>
          </div>
        </div>

        <div
          className="why-reason-grid"
          style={{ "--journey-progress": activeDesktopReason / (WHY_REASONS.length - 1) } as CSSProperties}
        >
          {WHY_REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.number}
                className="why-reason-card"
                data-tone={reason.tone}
                data-active={index === activeDesktopReason ? "true" : undefined}
                style={{ "--reason-accent": reason.accent } as CSSProperties}
                tabIndex={0}
                onMouseEnter={() => setActiveDesktopReason(index)}
                onFocus={() => setActiveDesktopReason(index)}
              >
                <div className="why-reason-top">
                  <span className="why-reason-icon"><Icon aria-hidden /></span>
                  <b>{reason.number}</b>
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
                <Link href="/services">Learn More <ArrowRight aria-hidden /></Link>
              </article>
            );
          })}
        </div>

        <div
          className="why-mobile-reasons"
          aria-label="Why choose Novyra"
          style={{ "--reason-accent": activeReason.accent } as CSSProperties}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <article key={activeReason.number} className="why-mobile-card" data-direction={direction} data-tone={activeReason.tone} style={{ "--reason-accent": activeReason.accent } as CSSProperties}>
            <div className="why-mobile-card-top">
              <span><ActiveReasonIcon aria-hidden /></span>
              <b>{activeReason.number} / 04</b>
              <button type="button" aria-label="Next reason" onClick={() => showReason(mobileIndex + 1, "next")}><ArrowRight aria-hidden /></button>
            </div>
            <h3>{activeReason.title}</h3>
            <p>{activeReason.description}</p>
            <Link href="/services">Learn More <ArrowRight aria-hidden /></Link>
          </article>

          <div className="why-mobile-controls">
            <button type="button" aria-label="Previous reason" onClick={() => showReason(mobileIndex - 1, "previous")}><ArrowLeft aria-hidden /></button>
            <div>
              {WHY_REASONS.map((reason, index) => (
                <button key={reason.number} type="button" aria-label={`Go to ${reason.title}`} aria-current={index === mobileIndex ? "true" : undefined} onClick={() => showReason(index)} />
              ))}
            </div>
            <button type="button" aria-label="Next reason" onClick={() => showReason(mobileIndex + 1, "next")}><ArrowRight aria-hidden /></button>
          </div>
        </div>

        <div className="why-micro-label" aria-hidden><span />PEOPLE × PRODUCTS × PROGRESS<span /></div>
      </div>
    </section>
  );
}

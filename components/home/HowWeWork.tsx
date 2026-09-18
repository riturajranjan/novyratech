"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Lightbulb,
  MessageCircleMore,
  Pencil,
  Play,
  Rocket,
  Search,
  Settings2,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

type ProcessStage = {
  number: string;
  title: string;
  desktopDescription: string;
  mobileDescription: string;
  tone: string;
  icon: LucideIcon;
};

const PROCESS_STAGES: ProcessStage[] = [
  { number: "01", title: "Discover", desktopDescription: "We understand your business, users and goals.", mobileDescription: "Understand your business.", tone: "blue", icon: Search },
  { number: "02", title: "Design", desktopDescription: "Strategy, UX and visual direction.", mobileDescription: "Strategy & UX direction.", tone: "green", icon: Pencil },
  { number: "03", title: "Build", desktopDescription: "Engineering, integrations and testing.", mobileDescription: "Engineering & testing.", tone: "blue", icon: Code2 },
  { number: "04", title: "Launch", desktopDescription: "Production-ready delivery.", mobileDescription: "Go live with confidence.", tone: "blue", icon: Rocket },
  { number: "05", title: "Grow", desktopDescription: "Continuous improvement, support and scaling.", mobileDescription: "Scale, improve and succeed.", tone: "green", icon: BarChart3 },
];

const TRUST_POINTS = [
  { label: <>Transparent<br />Process</>, icon: Settings2, tone: "blue" },
  { label: <>Collaborative<br />Partnership</>, icon: Users, tone: "green" },
  { label: <>Focus on<br />Outcomes</>, icon: Target, tone: "orange" },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="process-section">
      <div className="process-shell">
        <div className="process-top">
          <div className="process-intro">
            <div className="process-eyebrow"><span />HOW WE WORK<span /></div>
            <h2>
              <span>From an <em className="process-blue">idea</em></span>
              <span>to something</span>
              <span>that <em className="process-green">actually</em></span>
              <span className="process-green">works.</span>
            </h2>
            <p>A clear, collaborative process designed to move from understanding the problem to launching the right solution.</p>
            <div className="process-actions">
              <Link href="#contact" className="process-primary">Start a Project <ArrowRight aria-hidden /></Link>
              <a href="#process-journey" className="process-secondary"><span><Play aria-hidden /></span><b>See<br />How We Work</b></a>
            </div>
            <div className="process-trust-points">
              {TRUST_POINTS.map(({ label, icon: Icon, tone }) => <span key={tone} data-tone={tone}><i><Icon aria-hidden /></i><b>{label}</b></span>)}
            </div>
          </div>

          <div id="process-journey" className="process-journey">
            {/* TODO: swap this illustrated landscape for a real graphic (or simple diagram) — keeping it for now since the 5 stage cards below are positioned to match it. */}
            <div className="process-desktop-art">
              <Image src="/images/how-we-work/process-journey.png" alt="A winding miniature landscape illustrating discovery, design, development, launch and growth" fill sizes="(min-width: 1024px) 58vw, 0px" loading="eager" />
              {PROCESS_STAGES.map(({ number, title, desktopDescription, tone, icon: Icon }) => (
                <article key={number} className={`process-stage process-stage-${number}`} data-tone={tone}>
                  <Icon aria-hidden />
                  <div><span>{number}</span><h3>{title}</h3><p>{desktopDescription}</p></div>
                </article>
              ))}
            </div>

            {/* TODO: same as above — swap for a real graphic once available; stage cards are positioned to match this artwork. */}
            <div className="process-mobile-art">
              <Image src="/images/how-we-work/process-journey-mobile.png" alt="A vertical miniature landscape illustrating Novyra's five-stage project process" fill sizes="(max-width: 767px) calc(100vw - 28px), 620px" loading="eager" />
              {PROCESS_STAGES.map(({ number, title, mobileDescription, tone, icon: Icon }, index) => (
                <motion.article
                  key={number}
                  className={`process-mobile-stage process-mobile-stage-${number}`}
                  data-tone={tone}
                  initial={{ opacity: 0.55, y: 12, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ duration: 0.48, delay: index * 0.03 }}
                >
                  <i><Icon aria-hidden /></i>
                  <div><span>{number}</span><h3>{title}</h3><p>{mobileDescription}</p></div>
                </motion.article>
              ))}
              <div className="process-mobile-proof">
                {TRUST_POINTS.map(({ label, icon: Icon, tone }) => <span key={tone} data-tone={tone}><i><Icon aria-hidden /></i><b>{label}</b></span>)}
              </div>
            </div>
          </div>
        </div>

        <aside className="process-approach">
          <div className="process-approach-image">
            <Image src="/images/how-we-work/collaboration-window.webp" alt="A premium workspace overlooking a city through a circular architectural window" fill sizes="520px" />
            <p>Same<br />People.<br />From<br />Start to Scale.</p>
          </div>
          <div className="process-approach-copy">
            <div className="process-approach-eyebrow"><span />OUR APPROACH<span /></div>
            <h3>We Work With You,<br />Not Just for You.</h3>
            <p>We work as an extension of your team, combining strategy, design and engineering to build solutions that last.</p>
          </div>
          <div className="process-approach-points">
            <span data-tone="orange"><i><MessageCircleMore aria-hidden /></i><b>Understand<br />How You Work</b></span>
            <span data-tone="blue"><i><Lightbulb aria-hidden /></i><b>Build the<br />Right Fit</b></span>
            <span data-tone="green"><i><BarChart3 aria-hidden /></i><b>Support After<br />Launch</b></span>
          </div>
          <div className="process-rings" aria-hidden><i /></div>
        </aside>
      </div>
    </section>
  );
}

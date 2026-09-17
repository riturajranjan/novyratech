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
  { label: <>Focus on<br />Real Outcomes</>, icon: Target, tone: "orange" },
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
            <p className="process-note process-note-left" aria-hidden>Good ideas<br />deserve great<br />execution.<i /></p>
            <p className="process-note process-note-mobile" aria-hidden>Ideas today<br />Impact tomorrow.<i /></p>
          </div>

          <div id="process-journey" className="process-journey">
            <div className="process-desktop-art">
              <Image src="/images/how-we-work/process-journey.png" alt="A winding miniature landscape illustrating discovery, design, development, launch and growth" fill sizes="(min-width: 1024px) 58vw, 0px" loading="eager" />
              {PROCESS_STAGES.map(({ number, title, desktopDescription, tone, icon: Icon }) => (
                <article key={number} className={`process-stage process-stage-${number}`} data-tone={tone}>
                  <Icon aria-hidden />
                  <div><span>{number}</span><h3>{title}</h3><p>{desktopDescription}</p></div>
                </article>
              ))}
              <p className="process-note process-note-top" aria-hidden>Ideas<br />Conversations<br />Opportunities<i /></p>
              <p className="process-note process-note-bottom" aria-hidden>Turning<br />Ideas into<br />Impact<i /></p>
            </div>

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
              <div className="process-brighter-sign">A Brighter<br />Tomorrow</div>
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
            <h3>Real Collaboration.<br />Real Progress.</h3>
            <p>We work as an extension of your team, combining strategy, design and technology to create solutions that deliver long-term value.</p>
          </div>
          <div className="process-approach-points">
            <span data-tone="orange"><i><MessageCircleMore aria-hidden /></i><b>Understand<br />Real Needs</b></span>
            <span data-tone="blue"><i><Lightbulb aria-hidden /></i><b>Build<br />Right Solutions</b></span>
            <span data-tone="green"><i><BarChart3 aria-hidden /></i><b>Create<br />Lasting Impact</b></span>
          </div>
          <div className="process-rings" aria-hidden><i /></div>
        </aside>
      </div>
    </section>
  );
}

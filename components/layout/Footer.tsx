"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesCombined,
  ChevronDown,
  Heart,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { ANNOUNCEMENT } from "@/lib/constants";

const FOOTER_GROUPS = [
  {
    title: "Explore",
    links: [
      ["About Us", "#why-novyra"],
      ["Services", "#services"],
      ["Industries", "#industries"],
      ["Our Work", "#selected-work"],
      ["Insights & Ideas", "#insights"],
      ["Client Stories", "#client-stories"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Web Development", "#services"],
      ["SaaS & Web Apps", "#services"],
      ["AI & Automation", "#services"],
      ["Digital Growth", "#services"],
      ["Brand & Design", "#services"],
      ["Ongoing Support", "#contact"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["Contact Us", "#contact"],
      ["Start a Project", "#contact"],
      ["Book a Call", `tel:${ANNOUNCEMENT.phone.replace(/\s+/g, "")}`],
    ],
  },
] as const;

const CTA_TRUST = [
  { label: "Quick", detail: "Response", icon: MessageCircle },
  { label: "Confidential", detail: "Discussion", icon: ShieldCheck },
  { label: "Direct Access", detail: "to Experts", icon: UsersRound },
];

const FOOTER_VALUES = [
  { label: "Real Partnerships", detail: "Not Just Projects", icon: Zap },
  { label: "Growth-Focused", detail: "Technology", icon: ChartNoAxesCombined },
  { label: "Long-Term Value", detail: "for Your Business", icon: Heart },
];

const phoneHref = `tel:${ANNOUNCEMENT.phone.replace(/\s+/g, "")}`;

function ProjectPanel() {
  return (
    <aside className="footer-project-panel">
      <Send className="footer-project-send" aria-hidden />
      <p className="footer-project-eyebrow">HAVE SOMETHING<br />IN MIND?</p>
      <h3 className="footer-project-title-desktop">Let’s Turn<br />Your Idea Into<br /><em>Real Impact.</em></h3>
      <h3 className="footer-project-title-mobile">Let’s Turn Your<br />Idea Into <em>Real Impact.</em></h3>
      <p className="footer-project-copy">Share your goals and our team will<br />help you find the right way forward.</p>
      <Link className="footer-project-primary" href="#contact">Tell Us About Your Project <ArrowRight aria-hidden /></Link>
      <a className="footer-project-secondary" href={phoneHref}><CalendarDays aria-hidden />Book a Free Consultation</a>
      <div className="footer-project-trust">
        {CTA_TRUST.map((item) => {
          const Icon = item.icon;
          return <div key={item.label}><Icon aria-hidden /><strong>{item.label}</strong><span>{item.detail}</span></div>;
        })}
      </div>
    </aside>
  );
}

function BrandBlock() {
  return (
    <div className="footer-brand">
      <Link href="#home" className="footer-wordmark" aria-label="Novyra home">Novyra<span>.</span></Link>
      <p className="footer-tagline">Innovate · Build · Elevate</p>
      <p className="footer-description">Digital products, websites and technology solutions built for businesses ready to grow.</p>
      <p className="footer-india"><MapPin aria-hidden /><span>Built with purpose<br />in India <i aria-hidden>🇮🇳</i></span></p>
    </div>
  );
}

export function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: .45, ease: "easeOut" }}
    >
      <div className="footer-story">
        {/* <picture>
          <source media="(max-width: 767px)" srcSet="/images/footer/footer-story-mobile.webp" />
          <Image
            src="/images/footer/footer-story-desktop.webp"
            alt="Creative workspace overlooking a city at dusk, representing ideas, technology and business growth."
            fill
            sizes="100vw"
          />
        </picture>
        <p className="footer-story-note footer-story-note-left" aria-hidden>Good ideas<br />deserve a place<br />to grow.<i /></p>
        <p className="footer-story-path" aria-hidden>IDEAS <span>→</span> PEOPLE <span>→</span> TECHNOLOGY <span>→</span> IMPACT</p>
        <p className="footer-story-note footer-story-note-right" aria-hidden>Let’s build<br />a better<br />tomorrow.<i /></p> */}
      </div>

      <div className="site-footer-main">
        <div className="footer-shell">
          <div className="footer-desktop-grid">
            <BrandBlock />
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} className="footer-link-group" aria-label={`${group.title} footer navigation`}>
                <h3>{group.title}</h3>
                <ul>{group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}<span aria-hidden>›</span></Link></li>)}</ul>
              </nav>
            ))}
            <ProjectPanel />
          </div>

          <div className="footer-mobile-content">
            <BrandBlock />
            <div className="footer-accordions">
              {FOOTER_GROUPS.map((group) => {
                const open = openGroup === group.title;
                const panelId = `footer-${group.title.toLowerCase()}-panel`;
                return (
                  <div className="footer-accordion" key={group.title}>
                    <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenGroup(open ? null : group.title)}>
                      {group.title}<ChevronDown aria-hidden />
                    </button>
                    <div id={panelId} className="footer-accordion-panel" data-open={open ? "true" : "false"}>
                      <div>{group.links.map(([label, href]) => <Link key={label} href={href}>{label}<span aria-hidden>›</span></Link>)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <ProjectPanel />
          </div>

          <div className="footer-value-row">
            {/* <p className="footer-lower-note" aria-hidden>Building<br />Ideas Today<br />for a Brighter Tomorrow.<i /></p> */}
            <div className="footer-values">
              {FOOTER_VALUES.map((item) => {
                const Icon = item.icon;
                return <div key={item.label}><Icon aria-hidden /><p><strong>{item.label}</strong><span>{item.detail}</span></p></div>;
              })}
            </div>
            {/* <p className="footer-next-note" aria-hidden><ArrowRight />Maybe<br />your idea<br />is next.<i /></p> */}
          </div>
        </div>

        <div className="footer-legal">
          <p>© {year} Novyra Technologies. <span>All rights reserved.</span></p>
          <p className="footer-built">Designed &amp; built for a brighter tomorrow. <Heart aria-hidden /></p>
        </div>
      </div>
    </motion.footer>
  );
}

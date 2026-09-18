"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, MessageCircle, UsersRound } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

const TRUST_POINTS = [
  { label: "Clear", detail: "Communication", icon: MessageCircle },
  { label: "Practical", detail: "Solutions", icon: Lightbulb },
  { label: "Long-Term", detail: "Support", icon: UsersRound },
];

const LOWER_TRUST = [
  { lead: "REAL", detail: "Business Conversations" },
  { lead: "CLEAR", detail: "Project Direction" },
  { lead: "LONG-TERM", detail: "Technology Support" },
];

const phoneHref = `tel:${ANNOUNCEMENT.phone.replace(/\s+/g, "")}`;

function ConversationSheet({ mobile = false }: { mobile?: boolean }) {
  return (
    <motion.aside
      className={mobile ? "final-cta-sheet final-cta-sheet-mobile" : "final-cta-sheet"}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: .42, ease: "easeOut" }}
    >
      <p className="final-cta-sheet-note">Just tell us<br />what you’re building.<i /></p>
      <a className="final-cta-primary" href={phoneHref}>Start Your Project <ArrowRight aria-hidden /></a>
      <a className="final-cta-secondary" href={phoneHref}><MessageCircle aria-hidden /> Talk to Our Team</a>
      <div className="final-cta-trust-points">
        {TRUST_POINTS.map((point) => {
          const Icon = point.icon;
          return <div key={point.label}><Icon aria-hidden /><strong>{point.label}</strong><span>{point.detail}</span></div>;
        })}
      </div>
    </motion.aside>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="final-cta-section">
      <div className="final-cta-shell">
        <motion.header className="final-cta-header" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .42 }}>
          <div className="final-cta-eyebrow"><span />LET&apos;S BUILD TOGETHER<span /></div>
          <h2><span>Have an Idea?</span><span>Let’s <em>Turn It Into</em> <b>Something Real.</b></span></h2>
          <p>Whether you’re starting small, improving an existing business, or building<br className="final-cta-desktop-break" /> something ambitious — let’s find the right way forward together.</p>
        </motion.header>

        <p className="final-cta-note final-cta-note-left" aria-hidden>Start with<br />a conversation.<i /></p>
        <p className="final-cta-note final-cta-note-right" aria-hidden>No pressure.<br />No complicated<br />process.<i /></p>

        <motion.div className="final-cta-visual" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .48 }}>
          <Image src="/images/final-cta/build-together-desktop.webp" alt="Business professionals discussing a digital project together in a modern workspace" fill sizes="(max-width: 1532px) calc(100vw - 32px), 1500px" />
          <p className="final-cta-photo-note final-cta-photo-note-left" aria-hidden>Good<br />Ideas<br />Build<br />Great<br />Businesses.<i /></p>
          <p className="final-cta-photo-note final-cta-photo-note-right" aria-hidden>People<br />Ideas<br />Technology<br />Real Impact<i /></p>
          <ConversationSheet />
        </motion.div>

        <div className="final-cta-mobile-composition">
          <motion.div className="final-cta-mobile-photo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45 }}>
            <Image src="/images/final-cta/build-together-mobile.webp" alt="Business professionals discussing a digital project together in a modern workspace" fill sizes="calc(100vw - 24px)" />
            <p className="final-cta-mobile-photo-note" aria-hidden>Good Ideas<br />Build Great<br />Businesses.<i /></p>
          </motion.div>
          <ConversationSheet mobile />
        </div>

        <div className="final-cta-lower">
          <div className="final-cta-chapter-note" aria-hidden>Your next chapter<br />could start here.<i /><ArrowRight /></div>
          <p className="final-cta-lower-statement">Real Conversations.<br />Real Solutions.<br />A Brighter Tomorrow.</p>
          <div className="final-cta-lower-trust">
            {LOWER_TRUST.map((item) => <div key={item.lead}><strong>{item.lead}</strong><span>{item.detail}</span></div>)}
          </div>
        </div>
      </div>

      <div className="final-cta-plant" aria-hidden><Image src="/images/final-cta/final-cta-plant.png" alt="" fill sizes="(max-width: 767px) 180px, 300px" /></div>
    </section>
  );
}

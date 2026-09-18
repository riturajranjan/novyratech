"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, MessageCircle, UsersRound } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";
import { ContactForm } from "@/components/home/ContactForm";

const TRUST_POINTS = [
  { label: "Clear", detail: "Communication", icon: MessageCircle },
  { label: "Practical", detail: "Solutions", icon: Lightbulb },
  { label: "Long-Term", detail: "Support", icon: UsersRound },
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
      <a className="final-cta-primary" href="#contact-form">Start Your Project <ArrowRight aria-hidden /></a>
      <a className="final-cta-secondary" href={phoneHref}><MessageCircle aria-hidden /> Call Us</a>
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

        <motion.div className="final-cta-visual" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .48 }}>
          <Image src="/images/final-cta/build-together-desktop.webp" alt="Business professionals discussing a digital project together in a modern workspace" fill sizes="(max-width: 1532px) calc(100vw - 32px), 1500px" />
          <ConversationSheet />
        </motion.div>

        <div className="final-cta-mobile-composition">
          <motion.div className="final-cta-mobile-photo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45 }}>
            <Image src="/images/final-cta/build-together-mobile.webp" alt="Business professionals discussing a digital project together in a modern workspace" fill sizes="calc(100vw - 24px)" />
          </motion.div>
          <ConversationSheet mobile />
        </div>

        <div id="contact-form" className="final-cta-form-wrap">
          <h3>Tell Us About Your Project</h3>
          <p>Fill this in and we&apos;ll get back to you within one business day.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

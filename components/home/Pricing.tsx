"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Handshake,
  Headphones,
  Layers3,
  Plane,
  Settings2,
  ShieldCheck,
  Store,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Plan = {
  id: string;
  tab: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  pedestal: string;
  number: string;
  tone: "blue" | "green" | "orange";
  icon: LucideIcon;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "launch", tab: "Launch", name: "Launch", subtitle: "Single Page Website", price: "₹7,999+", priceNote: "Starting at", cta: "Get Started", pedestal: "IDEAS TO ONLINE", number: "01", tone: "blue", icon: Plane,
    features: ["1-page modern design", "Mobile responsive", "Contact / WhatsApp", "Basic on-page SEO", "Fast deployment"],
  },
  {
    id: "starter", tab: "Starter", name: "Starter", subtitle: "For Local Businesses", price: "₹14,999+", priceNote: "Starting at", cta: "Choose Plan", pedestal: "ESTABLISH PRESENCE", number: "02", tone: "green", icon: Store,
    features: ["Up to 5 pages", "Mobile responsive", "Contact forms & maps", "Basic SEO setup", "Support after launch"],
  },
  {
    id: "professional", tab: "Pro", name: "Professional", subtitle: "For Growing Businesses", price: "₹34,999+", priceNote: "Starting at", cta: "Choose Plan", pedestal: "GROW WITH CONFIDENCE", number: "03", tone: "blue", icon: BarChart3, featured: true,
    features: ["Up to 10 pages", "Custom UI/UX design", "CMS (easy to manage)", "Advanced SEO setup", "Priority support"],
  },
  {
    id: "business", tab: "Business", name: "Business", subtitle: "Advanced Solutions", price: "₹69,999+", priceNote: "Starting at", cta: "Choose Plan", pedestal: "UNLOCK MORE POSSIBILITIES", number: "04", tone: "green", icon: Layers3,
    features: ["Custom features", "Web applications / portals", "API & third-party integrations", "Advanced SEO & performance", "Dedicated support"],
  },
  {
    id: "enterprise", tab: "Enterprise", name: "Enterprise", subtitle: "Custom Solutions", price: "Custom Quote", priceNote: "Tailored to your needs", cta: "Let’s Talk", pedestal: "BUILT FOR WHAT’S NEXT", number: "05", tone: "orange", icon: Building2,
    features: ["Fully custom development", "AI integrations", "Scalable architecture", "Dedicated team", "Ongoing partnership"],
  },
];

const MOBILE_PLANS = PLANS.slice(0, 4);

function PlanCard({ plan, mobile = false }: { plan: Plan; mobile?: boolean }) {
  const Icon = plan.icon;
  return (
    <article className={`pricing-card${plan.featured ? " is-featured" : ""}${mobile ? " is-mobile" : ""}`} data-tone={plan.tone}>
      {plan.featured && !mobile ? <div className="pricing-popular">★ Most Popular</div> : null}
      <div className="pricing-card-heading">
        <span className="pricing-plan-icon"><Icon aria-hidden /></span>
        <div><h3>{plan.name}</h3><p>{plan.subtitle}</p></div>
      </div>
      <div className="pricing-price"><strong>{plan.price}</strong><span>{plan.priceNote}</span></div>
      <ul>
        {plan.features.map((feature) => <li key={feature}><i><Check aria-hidden /></i><span>{feature}</span></li>)}
      </ul>
      <Link href="#contact" className="pricing-card-cta">{plan.cta}<ArrowRight aria-hidden /></Link>
    </article>
  );
}

export function Pricing() {
  const [activeId, setActiveId] = useState("launch");
  const activePlan = MOBILE_PLANS.find((plan) => plan.id === activeId) ?? MOBILE_PLANS[0];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-shell">
        <header className="pricing-header">
          <div className="pricing-eyebrow"><span />PRICING<span /></div>
          <h2><span>Start <em>Smart.</em></span><span>Scale When<br className="pricing-mobile-heading-break" /> You’re <b>Ready.</b></span></h2>
          <p>Flexible plans for businesses at every stage — from a simple online presence<br className="pricing-desktop-break" /> to powerful digital platforms.</p>
        </header>

        <p className="pricing-note pricing-note-right" aria-hidden>Different<br />Stages.<br />Same Partner.<i /></p>

        <div className="pricing-stage-desktop">
          <Image className="pricing-stage-image" src="/images/pricing/pricing-stage-desktop.png" alt="Five ascending cream stone pricing pedestals with plants and a warm lamp" fill sizes="min(1500px, calc(100vw - 7vw))" />
          {PLANS.map((plan) => <div key={plan.id} className={`pricing-stage-card pricing-stage-card-${plan.number}`}><PlanCard plan={plan} /></div>)}
        </div>

        <div className="pricing-mobile-ui">
          <div className="pricing-tabs" role="tablist" aria-label="Choose a pricing plan">
            {MOBILE_PLANS.map((plan) => (
              <button key={plan.id} type="button" role="tab" aria-selected={activeId === plan.id} onClick={() => setActiveId(plan.id)}>{plan.tab}</button>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activePlan.id} className="pricing-mobile-card-wrap" initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .2 }}>
              <PlanCard plan={activePlan} mobile />
            </motion.div>
          </AnimatePresence>
          <div className="pricing-dots" aria-hidden>
            {MOBILE_PLANS.map((plan) => <span key={plan.id} className={activeId === plan.id ? "is-active" : ""} />)}
          </div>
          <div className="pricing-enterprise-mobile">
            <Headphones aria-hidden />
            <div><strong>Need something bigger?</strong><p>SaaS, AI, integrations &amp; complex platforms.</p></div>
            <Link href="#contact">Get a Custom Quote <ArrowRight aria-hidden /></Link>
          </div>
          <div className="pricing-mobile-trust">
            <span><i><Settings2 aria-hidden /></i><b>Transparent<br />Pricing</b></span>
            <span><i><ShieldCheck aria-hidden /></i><b>No Hidden<br />Costs</b></span>
            <span><i><Handshake aria-hidden /></i><b>Ongoing<br />Support</b></span>
          </div>
        </div>

        <aside className="pricing-consultation">
          <div><h3>Not sure which plan is right for you?</h3><p>Talk to our team and get a personalized recommendation.</p></div>
          <div className="pricing-consult-trust">
            <span><i><Settings2 aria-hidden /></i><b>Transparent<br />Pricing</b></span>
            <span><i><ShieldCheck aria-hidden /></i><b>No Hidden<br />Costs</b></span>
            <span><i><Handshake aria-hidden /></i><b>Flexible<br />Engagements</b></span>
          </div>
          <Link href="#contact">Talk to Our Team <ArrowRight aria-hidden /></Link>
        </aside>
      </div>
      {/* <div className="pricing-desk-scene" aria-hidden>
        <Image src="/images/pricing/pricing-desk-scene.webp" alt="" fill sizes="100vw" />
      </div> */}
    </section>
  );
}

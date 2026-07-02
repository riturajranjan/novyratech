"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/three/particle-field";
import Image from "next/image";

const featureCards = [
  {
    icon: Code2,
    title: "Modern Tech",
    description: "Built with cutting-edge technologies",
    gradient: "from-indigo-600 to-violet-600",
    glow: "rgba(99,102,241,0.5)",
  },
  {
    icon: Rocket,
    title: "Fast & Scalable",
    description: "Performance that grows with your vision",
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.5)",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security from the ground up",
    gradient: "from-indigo-700 to-blue-600",
    glow: "rgba(99,102,241,0.4)",
  },
];

const trustedLogos = [
  {
    name: "Linear",
    svg: (
      <svg
        viewBox="0 0 65 20"
        fill="currentColor"
        className="h-5 w-auto opacity-60">
        <path d="M2.27 2.27a7.74 7.74 0 000 10.95l4.5 4.51L17.73 6.77l-4.5-4.5a7.74 7.74 0 00-10.96 0zM5.43 18.48a7.74 7.74 0 0010.96 0l2.62-2.62-10.96-10.96-2.62 2.62a7.74 7.74 0 000 10.96zm12.3-1.08l1.7-1.7-10.95-10.95-1.7 1.7 10.95 10.95zM25 1h38v2H25V1zm0 8h38v2H25V9zm0 8h22v2H25v-2z" />
      </svg>
    ),
  },
  {
    name: "Upstash",
    svg: (
      <svg
        viewBox="0 0 80 22"
        fill="currentColor"
        className="h-5 w-auto opacity-60">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6zm26-5h-6v16h4V4h2V2zm-2 6h4v2h-4V8zm6-6h4v16h-4V2zm6 0h4v8l4-8h5l-5 9 5 7h-5l-4-6v6h-4V2zm20 0h-4v16h12v-4h-8V2z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg
        viewBox="0 0 96 22"
        fill="currentColor"
        className="h-5 w-auto opacity-60">
        <path d="M11 4.1C8.4 4.1 6.7 5.4 6 8c1-1.4 2.2-1.9 3.5-1.6 .8.2 1.3.7 1.9 1.4.9 1 2 2.1 4.3 2.1 2.6 0 4.3-1.3 5-3.9-1 1.4-2.2 1.9-3.5 1.6-.8-.2-1.3-.7-1.9-1.4C14.4 5.2 13.3 4.1 11 4.1zm-5 6C3.4 10.1 1.7 11.4 1 14c1-1.4 2.2-1.9 3.5-1.6.8.2 1.3.7 1.9 1.4.9 1 2 2.1 4.3 2.1 2.6 0 4.3-1.3 5-3.9-1 1.4-2.2 1.9-3.5 1.6-.8-.2-1.3-.7-1.9-1.4C9.4 11.2 8.3 10.1 6 10.1zm25-8h3v12h-3V2zm5 0h8c3.3 0 5 1.5 5 4 0 1.5-.7 2.6-2 3.2L50 14h-3.5l-2.5-4H39v4h-3V2zm3 2.8v4.4h4.5c1.5 0 2.2-.8 2.2-2.2 0-1.4-.7-2.2-2.2-2.2H39zm11 5.2c0-2.8 1.8-4.2 5-4.2h3V8h-3c-1.4 0-2 .5-2 1.5v.5h5v2.5h-5V16h-3V10zm12-6h3v9c0 1 .5 1.5 1.5 1.5H69V17h-2.5C64.2 17 62 15.7 62 13V4zm10 0h3v4h4v3h-4v4c0 1 .5 1.5 1.5 1.5H79V19h-2.5C74.2 19 72 17.7 72 15V7h-2V4h2V2l3-2v4zm8 6c0-2.8 1.8-4.2 5-4.2h5V8h-4.5c-1.4 0-2 .5-2 1.5v.5h6.5v2.5H84v1c0 1 .6 1.5 2 1.5H91V17h-4.5C84.2 17 80 15.7 80 13v-3z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg
        viewBox="0 0 58 18"
        fill="currentColor"
        className="h-5 w-auto opacity-60">
        <path d="M9 0L18 16H0L9 0zm13 2h8c3.5 0 5.5 1.8 5.5 4.5S33.5 11 30 11h-4v5h-4V2zm4 3v3h3.5c1 0 1.5-.5 1.5-1.5S30.5 5 29.5 5H26zm10-3h12v3h-4v9h-4V5h-4V2zm14 0h4v12h-4V2zm6 0h4l3 8 3-8h4l-5 12h-4L46 2z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    svg: (
      <svg
        viewBox="0 0 58 18"
        fill="currentColor"
        className="h-5 w-auto opacity-60">
        <path d="M5 0h10v6H5L0 0h5zM0 6h10l5 6H5L0 6zM5 12h5v6L5 12z M20 2h8c3 0 4.5 1.5 4.5 4 0 1.5-.7 2.7-2 3.3L33 14h-4l-2.5-4H24v4h-4V2zm4 2.5v3H27c1 0 1.5-.6 1.5-1.5S28 4.5 27 4.5H24zm11-2.5h13v3h-4.5v9h-4V5H35V2zm15 0h4v12h-4V2zm6 0h12v3h-8v2h7v3h-7v1h8v3H36V2z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050714]">
      {/* Particle background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Deep purple/blue glow in center-right */}
      <div className="absolute top-0 right-0 w-[70%] h-[80%] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full bg-indigo-800/25 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-violet-700/15 blur-[80px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0 flex-1">
          {/* LEFT — text */}
          <div className="flex-1 lg:max-w-[52%] flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-7">
              <span className="flex gap-1">
                {["#f97316", "#a855f7", "#3b82f6"].map((c, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </span>
              <Rocket className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-sm text-white/70">
                A studio for founders who ship
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display font-bold leading-[1.08] tracking-tight text-5xl sm:text-6xl lg:text-[68px]">
              <span className="block text-white">Software that</span>
              <span className="block hero-gradient-text">
                moves you forward
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 max-w-md text-base sm:text-lg text-white/55 leading-relaxed">
              We design and build SaaS, AI agents, and web platforms for
              founders and teams who care about the details.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl h-14 px-7 text-base font-semibold text-white border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #f97316 100%)",
                  boxShadow: "0 0 40px -8px rgba(124,58,237,0.7)",
                }}>
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="group h-14 px-7 text-base font-semibold text-white rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link href="/services">
                  View Our Work
                  <span className="ml-2 text-white/60 transition-all group-hover:text-white">
                    ✦
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Feature cards */}
          </div>

          <div className="flex-1 hidden md:flex items-center justify-center lg:justify-end relative lg:pl-8 min-h-[380px] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[520px] aspect-square">
              <Image alt="" src="/images/herobanner.png" fill />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-4"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient}`}
                style={{ boxShadow: `0 4px 20px -4px ${card.glow}` }}>
                <card.icon className="h-5 w-5 text-white" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  {card.title}
                </span>
                <span className="block text-xs text-white/45 mt-0.5 leading-snug">
                  {card.description}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

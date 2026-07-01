'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Rocket, Star, Boxes, BrainCircuit, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleField } from '@/components/three/particle-field';
import { cn } from '@/lib/utils';

const featureCards = [
  {
    icon: Boxes,
    title: 'Build Faster',
    description: 'Production-ready solutions that ship on time.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Native',
    description: 'Intelligent systems that learn and adapt.',
    gradient: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.3)',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Security and scalability built into every layer.',
    gradient: 'from-orange-500 to-amber-500',
    glow: 'rgba(249,115,22,0.3)',
  },
  {
    icon: Rocket,
    title: 'Scale Confidently',
    description: 'Architecture that grows with your business.',
    gradient: 'from-violet-600 to-indigo-600',
    glow: 'rgba(124,58,237,0.3)',
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      {/* Glow orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-500/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[100px] pointer-events-none" />

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-32 left-[8%] hidden lg:block"
      >
        <div className="h-20 w-20 rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-md" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-40 right-[10%] hidden lg:block"
      >
        <div className="h-16 w-16 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/2 right-[20%] hidden lg:block"
      >
        <div className="h-10 w-10 rotate-45 border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md" />
      </motion.div>

      {/* Main hero content */}
      <div className="relative flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground"
          >
            <span className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-4 w-4 rounded-full border border-background bg-gradient-to-br from-violet-500 to-orange-500"
                />
              ))}
            </span>
            <Rocket className="h-3.5 w-3.5 text-primary" />
            A studio for founders who ship
          </motion.div>

          <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-foreground"
            >
              Software that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="block text-gradient animate-gradient"
            >
              moves you forward
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            We design and build SaaS, AI agents, and web platforms for founders and teams who care about the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-orange-500 text-white animate-pulse-glow w-full sm:w-auto"
            >
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group border border-border/60 bg-background/40 backdrop-blur-md hover:bg-white/5 w-full sm:w-auto"
            >
              <Link href="/services">
                View Our Work
                <Sparkles className="ml-2 h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </motion.div>

          {/* Mini rating row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span>Loved by the founders we partner with</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature cards strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="relative z-10 w-full border-t border-border/40 bg-background/30 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop: 4-column strip */}
          <div className="hidden lg:grid lg:grid-cols-4 divide-x divide-border/40">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col items-center gap-3 px-8 py-8 text-center group"
                >
                  <div
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110',
                      card.gradient
                    )}
                    style={{ boxShadow: `0 0 24px -6px ${card.glow}` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col divide-y divide-border/40 lg:hidden">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="flex items-center gap-4 px-2 py-5">
                  <div
                    className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white',
                      card.gradient
                    )}
                    style={{ boxShadow: `0 0 20px -6px ${card.glow}` }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{card.description}</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

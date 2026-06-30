'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleField } from '@/components/three/particle-field';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-orange-500 text-white animate-pulse-glow"
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
              className="group border border-border/60 bg-background/40 backdrop-blur-md hover:bg-white/5"
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
            className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

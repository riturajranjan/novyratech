'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Rocket, Handshake, Clock, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const statItems = [
  {
    value: 2,
    suffix: '+',
    label: 'Products Shipped',
    description: 'MVPs and full platforms delivered to date.',
    icon: Rocket,
    gradient: 'from-violet-500 to-purple-600',
    numGradient: 'from-violet-400 to-purple-400',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    value: 1,
    suffix: '',
    label: 'Founders Partnered',
    description: 'Startups and scaleups we work alongside.',
    icon: Handshake,
    gradient: 'from-fuchsia-500 to-pink-600',
    numGradient: 'from-fuchsia-400 to-pink-400',
    glow: 'rgba(217,70,239,0.35)',
  },
  {
    value: 12,
    suffix: 'wk',
    label: 'Avg. Time to MVP',
    description: 'From kickoff to production launch.',
    icon: Clock,
    gradient: 'from-orange-500 to-amber-500',
    numGradient: 'from-orange-400 to-amber-300',
    glow: 'rgba(249,115,22,0.35)',
  },
  {
    value: 100,
    suffix: '%',
    label: 'In-House Team',
    description: 'No outsourcing, no handoffs, no surprises.',
    icon: Users,
    gradient: 'from-violet-600 to-indigo-600',
    numGradient: 'from-violet-300 to-indigo-400',
    glow: 'rgba(124,58,237,0.35)',
  },
];

function Counter({ value, suffix, gradient }: { value: number; suffix: string; gradient: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className={cn('bg-gradient-to-r bg-clip-text text-transparent', gradient)}
    >
      {display}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary"
          >
            <Star className="h-3.5 w-3.5 fill-primary" />
            Our Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Outcomes, not just{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
              deliverables
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            We measure our success by the results our clients achieve after launch.
          </motion.p>
        </div>

        {/* Desktop: 4-column cards */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-4 gap-5">
          {statItems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl p-6 overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40"
                style={{ boxShadow: `0 0 40px -20px ${s.glow}` }}
              >
                <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br', s.gradient)} />
                <div
                  className={cn('flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white', s.gradient)}
                  style={{ boxShadow: `0 0 24px -6px ${s.glow}` }}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mt-5 font-display text-5xl font-bold tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} gradient={s.numGradient} />
                </div>
                <div className="mt-2 font-display text-lg font-semibold text-foreground">{s.label}</div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-5 flex items-center justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical list */}
        <div className="mt-10 flex flex-col gap-4 lg:hidden">
          {statItems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl p-5"
                style={{ boxShadow: `0 0 30px -15px ${s.glow}` }}
              >
                <div
                  className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white', s.gradient)}
                  style={{ boxShadow: `0 0 20px -6px ${s.glow}` }}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-3xl font-bold tracking-tight">
                    <Counter value={s.value} suffix={s.suffix} gradient={s.numGradient} />
                  </div>
                  <div className="font-display text-sm font-semibold text-foreground">{s.label}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

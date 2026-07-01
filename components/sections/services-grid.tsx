'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { SectionHeading } from '@/components/sections/section-heading';
import { cn } from '@/lib/utils';

const iconGradients = [
  { bg: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)' },
  { bg: 'from-fuchsia-500 to-pink-600', glow: 'rgba(217,70,239,0.3)' },
  { bg: 'from-orange-500 to-amber-500', glow: 'rgba(249,115,22,0.3)' },
  { bg: 'from-cyan-500 to-blue-600', glow: 'rgba(6,182,212,0.3)' },
  { bg: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.3)' },
  { bg: 'from-violet-600 to-indigo-600', glow: 'rgba(124,58,237,0.3)' },
  { bg: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.3)' },
  { bg: 'from-amber-500 to-orange-600', glow: 'rgba(245,158,11,0.3)' },
];

export function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Software that moves your business forward"
          subtitle="From SaaS platforms to AI agents — pick a practice, or let us assemble a team around your roadmap."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const grad = iconGradients[i % iconGradients.length];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                  style={{ ['--glow' as string]: grad.glow }}
                >
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110',
                      grad.bg
                    )}
                    style={{ boxShadow: `0 0 20px -6px ${grad.glow}` }}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {s.short}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

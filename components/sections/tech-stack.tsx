'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';
import { SectionHeading } from '@/components/sections/section-heading';
import { cn } from '@/lib/utils';

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'AI'] as const;

const categoryMeta: Record<
  string,
  { gradient: string; glow: string; icon: string }
> = {
  Frontend: {
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.35)',
    icon: '◆',
  },
  Backend: {
    gradient: 'from-orange-500 to-amber-600',
    glow: 'rgba(249,115,22,0.35)',
    icon: '▲',
  },
  Database: {
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.35)',
    icon: '■',
  },
  Cloud: {
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.35)',
    icon: '●',
  },
  AI: {
    gradient: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.35)',
    icon: '✦',
  },
};

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Stack"
          title="A modern stack across every layer"
          subtitle="Frontend, backend, database, cloud, and AI — the tools we trust to build and scale your product."
        />

        <div className="mt-16 space-y-12">
          {categories.map((cat, catIdx) => {
            const items = techStack.filter((t) => t.category === cat);
            const meta = categoryMeta[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-white text-sm font-bold',
                      meta.gradient
                    )}
                  >
                    {meta.icon}
                  </span>
                  <h3 className="font-display text-lg font-semibold">{cat}</h3>
                  <span className="text-sm text-muted-foreground">({items.length})</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {items.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="group relative flex flex-col items-center justify-center gap-2 rounded-xl glass-card px-4 py-6 text-center card-hover"
                    >
                      <div
                        className={cn(
                          'absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10',
                          meta.gradient
                        )}
                      />
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-lg font-bold text-muted-foreground transition-all duration-300 group-hover:text-white group-hover:border-transparent"
                        style={{ '--tw-gradient': meta.gradient } as React.CSSProperties}
                      >
                        <span className={cn('bg-gradient-to-br bg-clip-text text-transparent transition-all', meta.gradient)}>
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <span className="relative font-display text-sm font-medium text-foreground">
                        {t.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                        {cat}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { products } from '@/lib/data';
import { SectionHeading } from '@/components/sections/section-heading';
import { cn } from '@/lib/utils';

export function FeaturedProducts() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Solutions you can deploy today"
          subtitle="Four production-ready platforms powering businesses across industries."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                active === i
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40'
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-2xl glass-card p-8">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                  <product.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold">{product.name}</h3>
                <p className="mt-1 text-primary">{product.tagline}</p>
                <p className="mt-4 text-muted-foreground">{product.description}</p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl glass-card p-8">
              <h4 className="font-display text-lg font-semibold">Key features</h4>
              <ul className="mt-5 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between rounded-xl border border-border/60 bg-background/40 p-4">
                <div>
                  <span className="text-xs text-muted-foreground">Starting at</span>
                  <div className="font-display text-2xl font-bold">
                    ${product.pricing.pro}
                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_24px_-6px_hsl(var(--primary))]"
                >
                  Request demo <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

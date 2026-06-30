'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import { SectionHeading } from '@/components/sections/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Basic',
    description: 'For small teams getting started.',
    features: ['Up to 25 users', 'Core modules', 'Email support', 'Community access'],
    highlight: false,
  },
  {
    name: 'Pro',
    description: 'For growing businesses that need more.',
    features: ['Up to 250 users', 'All modules', 'Priority support', 'Custom integrations', 'Advanced analytics', 'SLA guarantee'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations at scale.',
    features: ['Unlimited users', 'Dedicated infrastructure', '24/7 support', 'Custom development', 'On-premise option', 'Dedicated CSM'],
    highlight: false,
  },
];

export function ProductsContent() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Products"
            title="Production-ready platforms"
            subtitle="Four products we've built and refined. Deploy in weeks, not months."
          />
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {products.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl glass-card p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm text-primary">{p.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            subtitle="Start small, scale as you grow. No hidden fees, no surprises."
          />

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={cn('text-sm', !annual ? 'text-foreground' : 'text-muted-foreground')}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative h-7 w-14 rounded-full bg-gradient-to-r from-primary to-accent transition-colors"
              aria-label="Toggle billing period"
            >
              <span
                className={cn(
                  'absolute top-1 h-5 w-5 rounded-full bg-white transition-transform',
                  annual ? 'translate-x-8' : 'translate-x-1'
                )}
              />
            </button>
            <span className={cn('text-sm', annual ? 'text-foreground' : 'text-muted-foreground')}>
              Annual <Badge variant="outline" className="ml-1 border-primary/30 text-primary">Save 20%</Badge>
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const basePrice = i === 0 ? 49 : i === 1 ? 149 : 499;
              const price = annual ? Math.round(basePrice * 0.8) : basePrice;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={cn(
                    'relative rounded-2xl p-8',
                    tier.highlight
                      ? 'border-2 border-primary/50 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_50px_-15px_hsl(var(--primary))]'
                      : 'glass-card'
                  )}
                >
                  {tier.highlight && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      Most popular
                    </Badge>
                  )}
                  <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                  <div className="mt-6">
                    <span className="font-display text-4xl font-bold">${price}</span>
                    <span className="text-sm text-muted-foreground">/mo</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn(
                      'mt-8 w-full',
                      tier.highlight
                        ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                        : 'border border-border/60 bg-background/40 hover:bg-white/5'
                    )}
                    variant={tier.highlight ? 'default' : 'outline'}
                  >
                    <a href="#demo">
                      {tier.name === 'Enterprise' ? 'Contact sales' : 'Request demo'}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

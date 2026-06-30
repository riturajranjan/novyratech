import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { SectionHeading } from '@/components/sections/section-heading';
import { CtaBanner } from '@/components/sections/cta-banner';

export const metadata = {
  title: 'Services',
  description: 'Software practices — from SaaS platforms to AI agents — built for founders and teams who care about the details.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to build, scale, and grow"
            subtitle="Pick a practice, or let us assemble a small team around your roadmap."
          />
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-2xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                    {s.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

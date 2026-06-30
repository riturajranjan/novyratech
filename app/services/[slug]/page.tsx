import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/sections/cta-banner';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
              <service.icon className="h-10 w-10" />
            </div>
            <div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                {service.category}
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {service.name}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold">Key features</h2>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 rounded-xl glass-card p-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">Technology we use</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm font-medium text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl glass-card p-8">
                <h2 className="font-display text-2xl font-bold">Case study preview</h2>
                <p className="mt-4 text-lg font-medium text-foreground">{service.caseStudy.title}</p>
                <p className="mt-2 text-gradient font-display text-3xl font-bold">
                  {service.caseStudy.result}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Want the full breakdown? We&apos;ll walk you through the architecture, the trade-offs, and the metrics that mattered.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl glass-card p-6">
                <h3 className="font-display text-lg font-semibold">Related services</h3>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5"
                      >
                        <r.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground">
                          {r.name}
                        </span>
                        <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                <h3 className="font-display text-lg font-semibold">
                  Get a Quote for {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us about your project. We&apos;ll send a tailored proposal within 48 hours.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
                >
                  <Link href="/contact">
                    Request a quote <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

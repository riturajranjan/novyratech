'use client';

import { techStack } from '@/lib/data';

export function Marquee() {
  const items = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Material UI',
    'Ant Design',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'MySQL',
    'AWS',
    'Vercel',
    'Docker',
    'Kubernetes',
    'OpenAI',
    'LangChain',
  ];
  const doubled = [...items, ...items];

  return (
    <section className="relative border-y border-border/40 bg-background/40 py-8">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap font-display text-lg font-medium text-muted-foreground/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

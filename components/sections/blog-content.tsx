'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { SectionHeading } from '@/components/sections/section-heading';
import { cn } from '@/lib/utils';

const categories = ['All', 'Engineering', 'AI', 'Design', 'Cloud', 'FinTech', 'Culture'];

export function BlogContent() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCat = category === 'All' || p.category === category;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas worth shipping"
            subtitle="Hard-won lessons on building software, deploying AI, and running teams at scale."
          />
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                    category === c
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                      : 'border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="bg-background/40 pl-9"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 text-center text-muted-foreground">
              No articles found. Try a different search or category.
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl glass-card overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40"
                  >
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-violet-500/20">
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-4xl font-bold text-primary/30">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {post.category}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

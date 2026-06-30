import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Calendar, Linkedin, Twitter, Link2 } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/sections/cta-banner';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallback;

  return (
    <div className="pt-16">
      <article className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <Badge variant="outline" className="border-primary/30 text-primary">
              {post.category}
            </Badge>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-8 flex items-center justify-between border-y border-border/60 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-foreground">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Link2, label: 'Copy link' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:text-primary hover:border-primary/40"
                >
                  <s.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Related articles</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {p.category}
                </Badge>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">Back to all articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

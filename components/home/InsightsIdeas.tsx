"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BookOpenText,
  Bookmark,
  BriefcaseBusiness,
  FolderOpen,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  NotebookTabs,
  Palette,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type CategoryKey = "all" | "web" | "ai" | "saas" | "growth" | "business" | "design";

type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<CategoryKey, "all">;
  categoryLabel: string;
  image: string;
  alt: string;
  featured: boolean;
  href: string;
};

const CATEGORIES: { key: CategoryKey; desktopLabel: string; mobileLabel: string; icon: LucideIcon }[] = [
  { key: "all", desktopLabel: "All Insights", mobileLabel: "All", icon: Lightbulb },
  { key: "web", desktopLabel: "Web Development", mobileLabel: "Web Dev", icon: LayoutDashboard },
  { key: "ai", desktopLabel: "AI & Automation", mobileLabel: "AI & Automation", icon: Bot },
  { key: "saas", desktopLabel: "SaaS", mobileLabel: "SaaS", icon: FolderOpen },
  { key: "growth", desktopLabel: "Digital Growth", mobileLabel: "Growth", icon: LineChart },
  { key: "business", desktopLabel: "Business", mobileLabel: "Business", icon: BriefcaseBusiness },
  { key: "design", desktopLabel: "Design", mobileLabel: "Design", icon: Palette },
];

// Approved sample content for the section concept. Replace with CMS-backed articles when available.
const SAMPLE_ARTICLES: InsightArticle[] = [
  {
    slug: "strategic-website-growth-engine",
    title: "How a Strategic Website Becomes a Growth Engine for Your Business",
    excerpt: "A practical guide to building high-performing websites that do more than look good — they attract, engage and grow your business.",
    category: "web",
    categoryLabel: "Web Development",
    image: "/images/insights/featured-website-growth.webp",
    alt: "Warm business workspace with a laptop, notebook, coffee mug and growth books",
    featured: true,
    href: "/blog",
  },
  {
    slug: "real-ways-ai-simplify-business",
    title: "5 Real Ways AI Can Simplify Your Business (Without Replacing You)",
    excerpt: "Practical ways thoughtful automation can support everyday business work.",
    category: "ai",
    categoryLabel: "AI & Automation",
    image: "/images/insights/insight-ai-business.webp",
    alt: "Indian business professional working on a laptop in a warm modern office",
    featured: false,
    href: "/blog",
  },
  {
    slug: "practical-saas-roadmap",
    title: "From Idea to Scalable Product: A Practical SaaS Roadmap",
    excerpt: "A grounded path from early planning to a useful, scalable product.",
    category: "saas",
    categoryLabel: "SaaS",
    image: "/images/insights/insight-saas-roadmap.webp",
    alt: "Open notebook showing a handwritten Plan, Build and Scale roadmap",
    featured: false,
    href: "/blog",
  },
  {
    slug: "proven-digital-growth-strategies",
    title: "7 Practical Digital Growth Strategies for Sustainable Momentum",
    excerpt: "Clear, practical ideas for improving digital visibility and momentum.",
    category: "growth",
    categoryLabel: "Digital Growth",
    image: "/images/insights/insight-digital-growth.webp",
    alt: "Hands using a laptop with a clean blue analytics dashboard",
    featured: false,
    href: "/blog",
  },
];

function InsightFilters({ active, onChange, mobile = false }: { active: CategoryKey; onChange: (key: CategoryKey) => void; mobile?: boolean }) {
  return (
    <nav className={mobile ? "insights-filters insights-filters-mobile" : "insights-filters"} aria-label="Filter insights by category">
      {CATEGORIES.map((category) => {
        const Icon = category.icon;
        return (
          <button key={category.key} type="button" className={active === category.key ? "is-active" : ""} aria-pressed={active === category.key} onClick={() => onChange(category.key)}>
            {!mobile ? <Icon aria-hidden /> : null}
            <span>{mobile ? category.mobileLabel : category.desktopLabel}</span>
          </button>
        );
      })}
    </nav>
  );
}

function FeaturedArticle({ article }: { article: InsightArticle }) {
  return (
    <article className="insights-featured-card">
      <Image src={article.image} alt={article.alt} fill sizes="(max-width: 1023px) calc(100vw - 48px), 58vw" />
      <div className="insights-featured-shade" />
      <div className="insights-featured-top">
        <span><Star aria-hidden /> FEATURED ARTICLE</span>
      </div>
      <div className="insights-featured-copy">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="insights-featured-actions">
          <Link href={article.href}>Read Full Article <ArrowRight aria-hidden /></Link>
        </div>
      </div>
    </article>
  );
}

function SupportingArticle({ article }: { article: InsightArticle }) {
  return (
    <article className="insights-support-card">
      <Link href={article.href} aria-label={`Read ${article.title}`}>
        <span className="insights-support-image"><Image src={article.image} alt={article.alt} fill sizes="(max-width: 767px) 96px, 180px" /></span>
        <span className="insights-support-copy">
          <b data-category={article.category}>{article.categoryLabel}</b>
          <strong>{article.title}</strong>
        </span>
        <i className="insights-support-arrow"><ArrowRight aria-hidden /></i>
      </Link>
    </article>
  );
}

export function InsightsIdeas() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [saved, setSaved] = useState(false);
  const matching = activeCategory === "all" ? SAMPLE_ARTICLES : SAMPLE_ARTICLES.filter((article) => article.category === activeCategory);
  const fallback = SAMPLE_ARTICLES.filter((article) => !matching.some((match) => match.slug === article.slug));
  const displayArticles = [...matching, ...fallback].slice(0, 4);
  const featured = displayArticles[0];
  const supporting = displayArticles.slice(1, 4);

  return (
    <section id="insights" className="insights-section">
      <div className="insights-shell">
        <header className="insights-header">
          <div className="insights-eyebrow"><span />INSIGHTS &amp; IDEAS<span /></div>
          <h2><span>Ideas <em>Worth Sharing.</em></span><span>Knowledge That <b>Helps You Grow.</b></span></h2>
          <p>Practical insights on websites, AI, SaaS, digital growth and building better businesses.</p>
        </header>

        <div className="insights-desktop-tablet">
          <InsightFilters active={activeCategory} onChange={setActiveCategory} />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeCategory} className="insights-main" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: .21 }}>
              <FeaturedArticle article={featured} />
              <div className="insights-support-list">
                {supporting.map((article) => <SupportingArticle key={article.slug} article={article} />)}
              </div>
            </motion.div>
          </AnimatePresence>

          <aside className="insights-utility">
            <div><BookOpenText aria-hidden /><span><strong>Practical</strong><small>Articles</small></span></div>
            <div><UsersRound aria-hidden /><span><strong>Real-World</strong><small>Business Insights</small></span></div>
            <div><NotebookTabs aria-hidden /><span><strong>Actionable</strong><small>Tips &amp; Resources</small></span></div>
            <Link href="/blog">Explore All Insights <ArrowRight aria-hidden /></Link>
          </aside>
        </div>

        <div className="insights-mobile">
          <InsightFilters active={activeCategory} onChange={setActiveCategory} mobile />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeCategory} initial={{ opacity: 0, x: 7 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -7 }} transition={{ duration: .2 }}>
              <article className="insights-mobile-featured">
                  <Image src={featured.image} alt={featured.alt} fill sizes="calc(100vw - 24px)" />
                  <div className="insights-featured-shade" />
                  <span className="insights-mobile-featured-pill"><Star aria-hidden /> FEATURED</span>
                  <button type="button" className={saved ? "is-saved" : ""} aria-label={saved ? "Remove saved article" : "Save featured article"} aria-pressed={saved} onClick={() => setSaved((value) => !value)}><Bookmark aria-hidden /></button>
                  <div className="insights-mobile-featured-copy">
                    <b>{featured.categoryLabel}</b>
                    <h3>{featured.title}</h3>
                  </div>
                  <Link href={featured.href} aria-label={`Read ${featured.title}`}><ArrowRight aria-hidden /></Link>
              </article>
              <div className="insights-mobile-list">
                {supporting.map((article) => <SupportingArticle key={article.slug} article={article} />)}
              </div>
            </motion.div>
          </AnimatePresence>
          <Link className="insights-mobile-explore" href="/blog">Explore All Insights <ArrowRight aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}

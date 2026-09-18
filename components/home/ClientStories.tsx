"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Leaf,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type StoryMetric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type ClientStory = {
  id: string;
  number: string;
  name: string;
  industry: string;
  service: string;
  image: string;
  alt: string;
  quote: string;
  description: string;
  photoNote: string;
  metrics: StoryMetric[];
};

// Demo stories for this marketing concept. Replace with approved client evidence before publishing as verified case studies.
const DEMO_STORIES: ClientStory[] = [
  {
    id: "daily-grind",
    number: "01",
    name: "The Daily Grind",
    industry: "Food & Beverage",
    service: "Website Development",
    image: "/images/client-stories/daily-grind-client.webp",
    alt: "Two cafe owners collaborating on a laptop in their warm, plant-filled cafe",
    quote: "They didn’t just build what we asked for. They understood what our business actually needed.",
    description: "From the first conversation to the final launch, the team brought clarity, creativity and genuine care. Our new website has not only improved our online presence but also helped us connect with more customers.",
    photoNote: "From Ideas\nto Impact",
    metrics: [
      { value: "3X", label: "More Inquiries", icon: BarChart3 },
      { value: "60%", label: "Faster Operations", icon: UsersRound },
      { value: "Higher", label: "Customer Satisfaction", icon: Sparkles },
    ],
  },
  {
    id: "fitlife",
    number: "02",
    name: "FitLife Studio",
    industry: "Health & Fitness",
    service: "Web App Development",
    image: "/images/client-stories/fitlife-client.webp",
    alt: "Fitness studio founder reviewing her business on a tablet in a modern training space",
    quote: "Our day-to-day work finally feels as polished and focused as the experience we give our members.",
    description: "A clear digital workflow brought enquiries, memberships and schedules into one practical place. The studio team can now spend less time on admin and more time building meaningful member relationships.",
    photoNote: "Stronger Systems\nHealthier Growth",
    metrics: [
      { value: "2.4X", label: "More Bookings", icon: BarChart3 },
      { value: "8 hrs", label: "Saved Weekly", icon: UsersRound },
      { value: "92%", label: "Member Retention", icon: Sparkles },
    ],
  },
  {
    id: "edunext",
    number: "03",
    name: "EduNext",
    industry: "Education",
    service: "Learning Platform",
    image: "/images/client-stories/edunext-client.webp",
    alt: "Education founder working on a laptop in a bright learning studio",
    quote: "The platform turned a complex learning journey into something simple, useful and easy to grow.",
    description: "Working closely with the education team helped shape a calm, intuitive experience for learners and staff. The result is a platform that makes everyday learning activity easier to understand and manage.",
    photoNote: "Learning Made\nMore Human",
    metrics: [
      { value: "4X", label: "Learner Reach", icon: BarChart3 },
      { value: "45%", label: "Less Admin", icon: UsersRound },
      { value: "96%", label: "Positive Feedback", icon: Sparkles },
    ],
  },
];

function StoryMetrics({ story }: { story: ClientStory }) {
  return (
    <div className="stories-metrics">
      {story.metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label}>
            <Icon aria-hidden />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function ClientStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = DEMO_STORIES[activeIndex];

  const changeStory = (nextIndex: number) => {
    setActiveIndex((nextIndex + DEMO_STORIES.length) % DEMO_STORIES.length);
  };

  return (
    <section id="client-stories" className="stories-section">
      <div className="stories-shell">
        <header className="stories-header">
          <div className="stories-eyebrow"><span />CLIENT STORIES<span /></div>
          <h2>Built <em>Together.</em><br />Growing <b>Together.</b></h2>
          <p>Real partnerships are built through understanding, collaboration<br className="stories-desktop-break" /> and work that creates meaningful business value.</p>
        </header>

        <p className="stories-note stories-note-left" aria-hidden>Good Work<br />Starts With<br />Listening.<i /></p>

        <div className="stories-desktop">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeStory.id}
              className="stories-feature"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24 }}
            >
              <div className="stories-photo">
                <Image src={activeStory.image} alt={activeStory.alt} fill priority={false} sizes="(max-width: 767px) 92vw, 50vw" />
                <span className="stories-photo-pill"><i />DEMO STORY · {activeStory.number}</span>
                <span className="stories-photo-note" aria-hidden>{activeStory.photoNote.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
                <StoryMetrics story={activeStory} />
              </div>

              <article className="stories-copy-card">
                <span className="stories-quote-mark" aria-hidden>“</span>
                <span className="stories-stamp" aria-hidden>
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <path id="stories-stamp-path" d="M50 12a38 38 0 1 1-.1 0" />
                    </defs>
                    <text>
                      <textPath href="#stories-stamp-path" startOffset="1%">REAL BUSINESSES · REAL RESULTS ·</textPath>
                    </text>
                    <path className="stories-stamp-arrow" d="M39 67 63 43m-13 0h13v13" />
                  </svg>
                </span>
                <h3>“{activeStory.quote}”</h3>
                <p>{activeStory.description}</p>
                <i className="stories-copy-rule" aria-hidden />
                <div className="stories-client">
                  <span><Leaf aria-hidden /></span>
                  <div><strong>{activeStory.name}</strong><small>{activeStory.industry} <i /> {activeStory.service}</small></div>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>

          <div className="stories-selectors" aria-label="Choose a demo client story">
            {DEMO_STORIES.map((story, index) => (
              <button key={story.id} type="button" className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} onClick={() => changeStory(index)}>
                <span className="stories-selector-image"><Image src={story.image} alt="" fill sizes="90px" /></span>
                <span className="stories-selector-copy"><b>{story.number}</b><strong>{story.name}</strong><small>{story.industry}<br />{story.service}</small></span>
                <i><ArrowRight aria-hidden /></i>
              </button>
            ))}
          </div>

          <div className="stories-footer">
            <div className="stories-controls">
              <button type="button" onClick={() => changeStory(activeIndex - 1)} aria-label="Show previous client story"><ArrowLeft aria-hidden /></button>
              <div aria-hidden>{DEMO_STORIES.map((story, index) => <span key={story.id} className={index === activeIndex ? "is-active" : ""} />)}</div>
              <button type="button" onClick={() => changeStory(activeIndex + 1)} aria-label="Show next client story"><ArrowRight aria-hidden /></button>
            </div>
            <Link className="stories-all-link" href="#selected-work">View All Case Studies <ArrowRight aria-hidden /></Link>
          </div>
        </div>

        <div className="stories-mobile">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeStory.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .22 }}>
              <div className="stories-mobile-photo">
                <Image src={activeStory.image} alt={activeStory.alt} fill sizes="calc(100vw - 32px)" />
                <span className="stories-mobile-counter"><i />{activeStory.number} / 03</span>
                <button type="button" onClick={() => changeStory(activeIndex - 1)} aria-label="Show previous client story"><ArrowLeft aria-hidden /></button>
                <button type="button" onClick={() => changeStory(activeIndex + 1)} aria-label="Show next client story"><ArrowRight aria-hidden /></button>
                <span className="stories-mobile-photo-note" aria-hidden>{activeStory.photoNote.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
              </div>
              <article className="stories-mobile-card">
                <span className="stories-mobile-demo">Demo client story</span>
                <h3>“{activeStory.quote}”</h3>
                <p>{activeStory.description}</p>
                <div className="stories-client">
                  <span><Leaf aria-hidden /></span>
                  <div><strong>{activeStory.name}</strong><small>{activeStory.industry}<br />{activeStory.service}</small></div>
                </div>
                <StoryMetrics story={activeStory} />
                <Link href="#selected-work">View Full Case Study <ArrowRight aria-hidden /></Link>
                <div className="stories-mobile-controls">
                  <button type="button" onClick={() => changeStory(activeIndex - 1)} aria-label="Show previous client story"><ArrowLeft aria-hidden /></button>
                  <div aria-hidden>{DEMO_STORIES.map((story, index) => <span key={story.id} className={index === activeIndex ? "is-active" : ""} />)}</div>
                  <button type="button" onClick={() => changeStory(activeIndex + 1)} aria-label="Show next client story"><ArrowRight aria-hidden /></button>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>

          <div className="stories-mobile-selectors" aria-label="Choose a demo client story">
            {DEMO_STORIES.map((story, index) => (
              <button key={story.id} type="button" className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} onClick={() => changeStory(index)}>
                <span><Image src={story.image} alt="" fill sizes="88px" /></span>
                <b>{story.number}</b><strong>{story.name}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="stories-desk-scene" aria-hidden>
        <p className="stories-ahead-note">More<br />Success Stories<br />Ahead...<i /></p>
        <Image src="/images/client-stories/client-stories-desk.png" alt="" fill sizes="100vw" />
      </div> */}
    </section>
  );
}

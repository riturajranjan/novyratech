// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Search,
//   PenTool,
//   Code2,
//   TestTube,
//   Rocket,
//   ArrowRight,
//   Check,
//   Users,
//   Figma,
//   GitBranch,
//   ShieldCheck,
//   CloudUpload,
// } from 'lucide-react';
// import { processSteps } from '@/lib/data';
// import { SectionHeading } from '@/components/sections/section-heading';
// import { cn } from '@/lib/utils';

// const stepMeta = [
//   { icon: Search, color: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.4)' },
//   { icon: PenTool, color: 'from-fuchsia-500 to-pink-600', glow: 'rgba(217,70,239,0.4)' },
//   { icon: Code2, color: 'from-orange-500 to-amber-600', glow: 'rgba(249,115,22,0.4)' },
//   { icon: TestTube, color: 'from-cyan-500 to-blue-600', glow: 'rgba(6,182,212,0.4)' },
//   { icon: Rocket, color: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.4)' },
// ];

// const stepDetails = [
//   {
//     bullets: ['Stakeholder interviews', 'Technical audit', 'Roadmap workshop', 'Risk assessment'],
//     visual: [
//       { icon: Users, label: 'Stakeholders', value: '5–8' },
//       { icon: Search, label: 'Audit depth', value: 'Full' },
//       { icon: Check, label: 'Deliverable', value: 'Roadmap' },
//     ],
//   },
//   {
//     bullets: ['User flows', 'Wireframes', 'Hi-fi prototypes', 'Design system'],
//     visual: [
//       { icon: Figma, label: 'Tool', value: 'Figma' },
//       { icon: PenTool, label: 'Prototypes', value: '3' },
//       { icon: Check, label: 'Deliverable', value: 'Design system' },
//     ],
//   },
//   {
//     bullets: ['Agile sprints', 'Weekly demos', 'Code reviews', 'CI/CD pipeline'],
//     visual: [
//       { icon: GitBranch, label: 'Sprint length', value: '2 weeks' },
//       { icon: Code2, label: 'Reviews', value: '100%' },
//       { icon: Check, label: 'Deliverable', value: 'Working software' },
//     ],
//   },
//   {
//     bullets: ['Unit + integration tests', 'Load testing', 'Security audit', 'Usability testing'],
//     visual: [
//       { icon: ShieldCheck, label: 'Coverage', value: '90%+' },
//       { icon: TestTube, label: 'Load tests', value: 'Passed' },
//       { icon: Check, label: 'Deliverable', value: 'QA report' },
//     ],
//   },
//   {
//     bullets: ['Zero-downtime deploy', 'Monitoring + alerts', '90-day support', 'Handoff docs'],
//     visual: [
//       { icon: CloudUpload, label: 'Downtime', value: '0s' },
//       { icon: Rocket, label: 'Support', value: '90 days' },
//       { icon: Check, label: 'Deliverable', value: 'Live product' },
//     ],
//   },
// ];

// export function Process() {
//   const [active, setActive] = useState(0);
//   const step = processSteps[active];
//   const meta = stepMeta[active];
//   const details = stepDetails[active];
//   const Icon = meta.icon;

//   return (
//     <section className="relative py-24 sm:py-32 overflow-hidden">
//       <div className="absolute inset-0 bg-grid opacity-30" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-violet-500/10 blur-[140px] pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <SectionHeading
//           eyebrow="How We Work"
//           title="A process built for momentum"
//           subtitle="Five disciplined phases that turn ambitious ideas into shipped software."
//         />

//         {/* Stepper */}
//         <div className="relative mt-16">
//           <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-border/60 lg:block">
//             <motion.div
//               className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500"
//               initial={{ width: '0%' }}
//               whileInView={{ width: `${((active + 1) / 5) * 100}%` }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.5, ease: 'easeOut' }}
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
//             {processSteps.map((s, i) => {
//               const M = stepMeta[i];
//               const SIcon = M.icon;
//               const isActive = i === active;
//               const isDone = i < active;
//               return (
//                 <motion.button
//                   key={s.title}
//                   onClick={() => setActive(i)}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.1 }}
//                   className="group relative flex flex-col items-center text-center"
//                 >
//                   <div
//                     className={cn(
//                       'relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300',
//                       isActive
//                         ? `bg-gradient-to-br ${M.color} border-transparent text-white scale-110 shadow-lg`
//                         : isDone
//                         ? 'bg-card border-primary/40 text-primary'
//                         : 'bg-card border-border text-muted-foreground group-hover:border-primary/40'
//                     )}
//                     style={isActive ? { boxShadow: `0 0 30px -6px ${M.glow}` } : undefined}
//                   >
//                     <SIcon className="h-6 w-6" />
//                     <span
//                       className={cn(
//                         'absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors',
//                         isActive ? 'bg-white text-violet-600' : 'bg-muted-foreground/30 text-foreground'
//                       )}
//                     >
//                       {i + 1}
//                     </span>
//                   </div>
//                   <span
//                     className={cn(
//                       'mt-3 text-sm font-medium transition-colors',
//                       isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
//                     )}
//                   >
//                     {s.title}
//                   </span>
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Detail card */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -16 }}
//             transition={{ duration: 0.35, ease: 'easeOut' }}
//             className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
//           >
//             {/* Left: text */}
//             <div className="rounded-2xl glass-card p-8">
//               <div className={cn('inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white', meta.color)}>
//                 <Icon className="h-6 w-6" />
//               </div>
//               <h3 className="mt-5 font-display text-2xl font-bold">{step.title}</h3>
//               <p className="mt-2 text-muted-foreground">{step.description}</p>
//               <ul className="mt-6 space-y-2.5">
//                 {details.bullets.map((b) => (
//                   <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
//                     <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
//                       <Check className="h-3 w-3" />
//                     </span>
//                     {b}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right: visual card — image-type display */}
//             <div className="relative overflow-hidden rounded-2xl glass-card p-8">
//               <div className={cn('absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl', meta.color)} />
//               <div className="absolute inset-0 bg-grid-sm opacity-20" />
//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
//                     Phase 0{active + 1} / 05
//                   </span>
//                   <span className={cn('rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white', meta.color)}>
//                     {step.title}
//                   </span>
//                 </div>

//                 {/* Visual mock — image-type card */}
//                 <div className="mt-6 space-y-3">
//                   {details.visual.map((v, idx) => {
//                     const VIcon = v.icon;
//                     return (
//                       <motion.div
//                         key={v.label}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.1 + idx * 0.08 }}
//                         className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/40 p-4"
//                       >
//                         <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-white', meta.color)}>
//                           <VIcon className="h-5 w-5" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-muted-foreground">{v.label}</div>
//                           <div className="font-display text-sm font-semibold text-foreground">{v.value}</div>
//                         </div>
//                         <Check className="h-4 w-4 text-primary" />
//                       </motion.div>
//                     );
//                   })}
//                 </div>

//                 {/* Progress bar */}
//                 <div className="mt-6">
//                   <div className="flex items-center justify-between text-xs text-muted-foreground">
//                     <span>Progress</span>
//                     <span>{Math.round(((active + 1) / 5) * 100)}%</span>
//                   </div>
//                   <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
//                     <motion.div
//                       className={cn('h-full rounded-full bg-gradient-to-r', meta.color)}
//                       initial={{ width: 0 }}
//                       animate={{ width: `${((active + 1) / 5) * 100}%` }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Nav arrows */}
//         <div className="mt-8 flex items-center justify-between">
//           <button
//             onClick={() => setActive((a) => Math.max(0, a - 1))}
//             disabled={active === 0}
//             className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             <ArrowRight className="h-4 w-4 rotate-180" /> Previous
//           </button>
//           <span className="font-mono text-sm text-muted-foreground">
//             0{active + 1} / 05
//           </span>
//           <button
//             onClick={() => setActive((a) => Math.min(4, a + 1))}
//             disabled={active === 4}
//             className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed"
//           >
//             Next <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  ArrowRight,
  Check,
  Users,
  Figma,
  GitBranch,
  ShieldCheck,
  CloudUpload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const stepMeta = [
  {
    icon: Search,
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.5)",
    bg: "rgba(99,102,241,0.12)",
  },
  {
    icon: PenTool,
    color: "from-violet-500 to-fuchsia-600",
    glow: "rgba(168,85,247,0.5)",
    bg: "rgba(168,85,247,0.12)",
  },
  {
    icon: Code2,
    color: "from-cyan-500 to-indigo-600",
    glow: "rgba(6,182,212,0.5)",
    bg: "rgba(6,182,212,0.12)",
  },
  {
    icon: TestTube,
    color: "from-cyan-500 to-violet-600",
    glow: "rgba(34,211,238,0.5)",
    bg: "rgba(34,211,238,0.12)",
  },
  {
    icon: Rocket,
    color: "from-indigo-500 to-cyan-500",
    glow: "rgba(129,140,248,0.5)",
    bg: "rgba(129,140,248,0.12)",
  },
];

const stepDetails = [
  {
    bullets: [
      "Stakeholder interviews",
      "Technical audit",
      "Roadmap workshop",
      "Risk assessment",
    ],
    visual: [
      { icon: Users, label: "Stakeholders", value: "5–8" },
      { icon: Search, label: "Audit depth", value: "Full" },
      { icon: Check, label: "Deliverable", value: "Roadmap" },
    ],
  },
  {
    bullets: ["User flows", "Wireframes", "Hi-fi prototypes", "Design system"],
    visual: [
      { icon: Figma, label: "Tool", value: "Figma" },
      { icon: PenTool, label: "Prototypes", value: "3" },
      { icon: Check, label: "Deliverable", value: "Design system" },
    ],
  },
  {
    bullets: [
      "Agile sprints",
      "Weekly demos",
      "Code reviews",
      "CI/CD pipeline",
    ],
    visual: [
      { icon: GitBranch, label: "Sprint length", value: "2 weeks" },
      { icon: Code2, label: "Reviews", value: "100%" },
      { icon: Check, label: "Deliverable", value: "Working software" },
    ],
  },
  {
    bullets: [
      "Unit + integration tests",
      "Load testing",
      "Security audit",
      "Usability testing",
    ],
    visual: [
      { icon: ShieldCheck, label: "Coverage", value: "90%+" },
      { icon: TestTube, label: "Load tests", value: "Passed" },
      { icon: Check, label: "Deliverable", value: "QA report" },
    ],
  },
  {
    bullets: [
      "Zero-downtime deploy",
      "Monitoring + alerts",
      "90-day support",
      "Handoff docs",
    ],
    visual: [
      { icon: CloudUpload, label: "Downtime", value: "0s" },
      { icon: Rocket, label: "Support", value: "90 days" },
      { icon: Check, label: "Deliverable", value: "Live product" },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const step = processSteps[active];
  const meta = stepMeta[active];
  const details = stepDetails[active];
  const Icon = meta.icon;

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for momentum"
          subtitle="Five disciplined phases that turn ambitious ideas into shipped software."
        />

        {/* ── MOBILE LAYOUT ── */}
        <div className="mt-12 lg:hidden">
          {/* Step dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {processSteps.map((_, i) => {
              const M = stepMeta[i];
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Step ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive
                      ? `h-2.5 w-8 bg-gradient-to-r ${M.color}`
                      : isDone
                        ? "h-2.5 w-2.5 bg-primary/50"
                        : "h-2.5 w-2.5 bg-border",
                  )}
                />
              );
            })}
          </div>

          {/* Animated full-width step card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-border/60"
              style={{
                background: meta.bg,
                boxShadow: `0 0 60px -20px ${meta.glow}`,
              }}>
              {/* Background glow */}
              <div
                className={cn(
                  "absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-30 blur-3xl pointer-events-none",
                  meta.color,
                )}
              />
              <div className="absolute inset-0 bg-grid-sm opacity-10 pointer-events-none" />

              <div className="relative p-6">
                {/* Phase label + step name pill */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Phase 0{active + 1} / 05
                  </span>
                  <span
                    className={cn(
                      "rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white",
                      meta.color,
                    )}>
                    {step.title}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    "mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                    meta.color,
                  )}
                  style={{ boxShadow: `0 8px 32px -8px ${meta.glow}` }}>
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title + description */}
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Bullet list */}
                <ul className="mt-5 space-y-2.5">
                  {details.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Metrics row */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {details.visual.map((v) => {
                    const VIcon = v.icon;
                    return (
                      <div
                        key={v.label}
                        className="flex flex-col items-center gap-1.5 rounded-xl border border-border/60 bg-background/50 px-2 py-3 text-center">
                        <div
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                            meta.color,
                          )}>
                          <VIcon className="h-4 w-4" />
                        </div>
                        <span className="font-display text-xs font-bold text-foreground leading-tight">
                          {v.value}
                        </span>
                        <span className="text-[10px] text-muted-foreground leading-tight">
                          {v.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Progress</span>
                    <span>{Math.round(((active + 1) / 5) * 100)}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border/60">
                    <motion.div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        meta.color,
                      )}
                      animate={{ width: `${((active + 1) / 5) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile prev/next */}
          {/* <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={() => go(Math.max(0, active - 1))}
              disabled={active === 0}
              className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              onClick={() => go(Math.min(4, active + 1))}
              disabled={active === 4}
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                active < 4
                  ? `bg-gradient-to-r ${meta.color} text-white`
                  : "border border-border/60 bg-card text-muted-foreground",
              )}
              style={
                active < 4
                  ? { boxShadow: `0 4px 20px -6px ${meta.glow}` }
                  : undefined
              }>
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div> */}

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => go(Math.max(0, active - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed">
              <ArrowRight className="h-4 w-4 rotate-180" /> Previous
            </button>
            <span className="font-mono text-sm text-muted-foreground">
              0{active + 1} / 05
            </span>
            <button
              onClick={() => go(Math.min(4, active + 1))}
              disabled={active === 4}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed">
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:block">
          {/* Stepper */}
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-border/60">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500"
                initial={{ width: "0%" }}
                whileInView={{ width: `${((active + 1) / 5) * 100}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="grid grid-cols-5">
              {processSteps.map((s, i) => {
                const M = stepMeta[i];
                const SIcon = M.icon;
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <motion.button
                    key={s.title}
                    onClick={() => go(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative flex flex-col items-center text-center">
                    <div
                      className={cn(
                        "relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300",
                        isActive
                          ? `bg-gradient-to-br ${M.color} border-transparent text-white scale-110 shadow-lg`
                          : isDone
                            ? "bg-card border-primary/40 text-primary"
                            : "bg-card border-border text-muted-foreground group-hover:border-primary/40",
                      )}
                      style={
                        isActive
                          ? { boxShadow: `0 0 30px -6px ${M.glow}` }
                          : undefined
                      }>
                      <SIcon className="h-6 w-6" />
                      <span
                        className={cn(
                          "absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors",
                          isActive
                            ? "bg-white text-indigo-600"
                            : "bg-muted-foreground/30 text-foreground",
                        )}>
                        {i + 1}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "mt-3 text-sm font-medium transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}>
                      {s.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop detail cards */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-12 grid grid-cols-2 gap-6">
              {/* Left */}
              <div className="rounded-2xl glass-card p-8">
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                    meta.color,
                  )}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {details.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="relative overflow-hidden rounded-2xl glass-card p-8">
                <div
                  className={cn(
                    "absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
                    meta.color,
                  )}
                />
                <div className="absolute inset-0 bg-grid-sm opacity-20" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Phase 0{active + 1} / 05
                    </span>
                    <span
                      className={cn(
                        "rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white",
                        meta.color,
                      )}>
                      {step.title}
                    </span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {details.visual.map((v, idx) => {
                      const VIcon = v.icon;
                      return (
                        <motion.div
                          key={v.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.08 }}
                          className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/40 p-4">
                          <div
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                              meta.color,
                            )}>
                            <VIcon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-muted-foreground">
                              {v.label}
                            </div>
                            <div className="font-display text-sm font-semibold text-foreground">
                              {v.value}
                            </div>
                          </div>
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{Math.round(((active + 1) / 5) * 100)}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                      <motion.div
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r",
                          meta.color,
                        )}
                        animate={{ width: `${((active + 1) / 5) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop nav */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => go(Math.max(0, active - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed">
              <ArrowRight className="h-4 w-4 rotate-180" /> Previous
            </button>
            <span className="font-mono text-sm text-muted-foreground">
              0{active + 1} / 05
            </span>
            <button
              onClick={() => go(Math.min(4, active + 1))}
              disabled={active === 4}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed">
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

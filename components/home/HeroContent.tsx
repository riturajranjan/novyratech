"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, lineReveal } from "@/lib/motion";

const HEADLINE_LINES = [
  { text: "Technology", className: "text-navy-950" },
  { text: "That Empowers", className: "text-green-600" },
  { text: "Real Businesses", className: "text-navy-950" },
];

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col">
      <motion.div variants={fadeUp} custom={0.1} initial="hidden" animate="show">
        <span className="inline-flex h-[34px] items-center gap-2 rounded-full border border-[#f1ded3] bg-surface/82 px-[17px] text-[12px] font-bold text-navy-950 shadow-[0_8px_22px_-18px_rgba(7,24,45,0.28)]">
          <span aria-hidden>🚀</span>
          Digital Solutions for a Brighter Bharat
        </span>
      </motion.div>

      <h1 className="mt-[5px] flex flex-col text-[70px] font-extrabold leading-[0.93] tracking-[-0.04em] max-xl:text-[61px] max-lg:text-[clamp(3.5rem,10vw,5rem)]">
        {HEADLINE_LINES.map((line, index) => (
          <span key={line.text} className="overflow-hidden py-[1px]">
            <motion.span
              variants={lineReveal}
              custom={0.25 + index * 0.1}
              initial="hidden"
              animate="show"
              className={`block whitespace-nowrap ${line.className}`}
            >
              {line.text}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        variants={fadeUp}
        custom={0.6}
        initial="hidden"
        animate="show"
        className="mt-[13px] max-w-[512px] text-[17px] font-medium leading-[1.34] text-[#253347] max-lg:text-base"
      >
        We help schools, hospitals, local businesses and growing brands build
        modern websites, web applications and AI solutions to reach more
        people and grow faster.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={0.7}
        initial="hidden"
        animate="show"
        className="mt-[18px] flex flex-wrap items-center gap-4"
      >
        <Button href="#contact" variant="primary" className="h-12 min-w-[208px] px-8 text-[14px]">
          Start Your Project
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Button>

        <a href="#story" className="group flex h-12 items-center gap-3 rounded-full border border-border-soft bg-surface/55 pl-[17px] pr-[26px] text-[13px] font-bold text-navy-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/10 transition-colors duration-300 group-hover:bg-navy-900/15">
            <Play className="ml-0.5 h-4 w-4 fill-navy-900 text-navy-900" aria-hidden />
          </span>
          Watch Our Story
        </a>
      </motion.div>
    </div>
  );
}

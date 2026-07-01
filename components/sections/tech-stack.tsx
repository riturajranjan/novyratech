"use client";
import { ArrowRight, Menu } from "lucide-react";
import { categories } from "@/lib/data";
import { DesktopCategory } from "./tech-stack/DesktopCategory";
import CodeIcon from "./tech-stack/icons/CodeIcon";
import MobileCategory from "./tech-stack/MobileCategory";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

export default function TechStack() {
  return (
    <div className="min-h-screen  text-white">
      {/* Mobile nav */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3.5 border-b border-[#1a2744]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-700 flex items-center justify-center">
            <CodeIcon size={13} />
          </div>
          <span className="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
            My Tech Stack
          </span>
        </div>
        <button className="text-gray-400 p-1">
          <Menu size={20} />
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        {/* Hero */}
        {/* <div className="flex items-start justify-between mb-10 md:mb-12">
          <div className="max-w-sm">
            <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2">
              My Tech Stack
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              <span className="text-white">Skills </span>
              <span className="text-purple-400">&amp; Technologies</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              A comprehensive toolkit of modern technologies I use to build
              scalable, performant, and engaging digital experiences.
            </p>
          </div>

         
          <div className="hidden md:block">
            <Hero3D />
          </div>
        </div> */}

        <SectionHeading
          eyebrow="Our Tech Stack"
          title="A modern stack across every layer"
          subtitle="Frontend, backend, database, cloud, and AI — the tools we trust to build and scale your product."
        />

        {/* Desktop layout: timeline */}
        <div className="hidden md:flex gap-0 mt-8">
          <div className="w-8 flex-shrink-0" />
          <div className="flex-1">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}>
                <DesktopCategory cat={cat} last={i === categories.length - 1} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-3.5 mt-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}>
              <MobileCategory key={cat.id} cat={cat} />
            </motion.div>
          ))}

          <div className="flex items-center justify-between px-4 py-4 rounded-2xl border border-purple-800/40 bg-[#12082a]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  Always learning. Always building.
                </div>
                <div className="text-gray-400 text-xs">
                  Let&apos;s build something amazing together!
                </div>
              </div>
            </div>
            <ArrowRight size={18} className="text-purple-400 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

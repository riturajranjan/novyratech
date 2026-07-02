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
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        <SectionHeading
          eyebrow="Our Tech Stack"
          title="A modern stack across every layer"
          subtitle="Frontend, backend, database, cloud, and AI — the tools we trust to build and scale your product."
        />

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

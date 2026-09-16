"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { heroVisualReveal } from "@/lib/motion";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const translateX = useTransform(springX, [-1, 1], [-5, 5]);
  const translateY = useTransform(springY, [-1, 1], [-4, 4]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      mvX.set(relX * 2);
      mvY.set(relY * 2);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mvX, mvY]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <motion.div
        variants={heroVisualReveal}
        initial="hidden"
        animate="show"
        style={{ x: translateX, y: translateY }}
        className="relative h-full w-full"
      >
        <div
          className="hero-art-mask relative h-80 w-full sm:h-105 lg:h-full"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero/novyra-hero.webp"
              alt="A young Indian entrepreneur sits above Muzaffarpur at golden hour with a laptop and backpack, surrounded by floating cards showcasing Novyra's School, Hospital, Business and SaaS website solutions."
              fill
              priority
              sizes="(min-width: 1024px) calc(100vw - 505px), 100vw"
              className="object-contain object-[right_top]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

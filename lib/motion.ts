import type { Variants } from "framer-motion";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

export const lineReveal: Variants = {
  hidden: { y: "100%" },
  show: (delay: number = 0) => ({
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
};

export const heroVisualReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.3, ease: EASE_OUT },
  },
};

export const cardEnter: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

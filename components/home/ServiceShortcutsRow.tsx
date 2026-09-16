"use client";

import { motion } from "framer-motion";
import { ServiceShortcut } from "@/components/home/ServiceShortcut";
import { SERVICE_SHORTCUTS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export function ServiceShortcutsRow() {
  return (
    <motion.div
      variants={fadeUp}
      custom={0.9}
      initial="hidden"
      animate="show"
      className="flex w-[520px] max-w-full flex-nowrap items-center justify-between border-t border-border-soft pt-[21px]"
    >
      {SERVICE_SHORTCUTS.map((shortcut) => (
        <ServiceShortcut key={shortcut.label} {...shortcut} />
      ))}
    </motion.div>
  );
}

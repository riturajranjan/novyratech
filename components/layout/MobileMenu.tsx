"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-navy-950/40 lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-surface shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border-soft px-6 py-5">
              <Image src="/images/brand/novyra-mark.png" alt="" width={324} height={224} className="h-8 w-auto" />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-900/5"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link_
                      href={link.href}
                      onClose={onClose}
                      active={link.label === "Home"}
                      delay={index * 0.04}
                    >
                      {link.label}
                    </Link_>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border-soft px-6 py-6">
              <Button href="#contact" onClick={onClose} className="w-full justify-center">
                Start Your Project →
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Link_({
  href,
  children,
  onClose,
  active,
  delay,
}: {
  href: string;
  children: ReactNode;
  onClose: () => void;
  active: boolean;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClose}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-lg font-semibold transition-colors ${
        active ? "text-saffron-600" : "text-navy-900 hover:bg-navy-900/5"
      }`}
    >
      {children}
    </motion.a>
  );
}

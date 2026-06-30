'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-orange-500/20 p-10 text-center sm:p-16"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Tell us about your vision. We&apos;ll bring the engineering, design, and strategy to make it real.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-violet-600 to-orange-500 text-white animate-pulse-glow"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

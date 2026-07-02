"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, services } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent",
      )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={180}
              className="w-[100px] h-auto md:w-[180px]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                      pathname === link.href || pathname.startsWith("/services")
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}>
                    {link.label}
                    {pathname.startsWith("/services") && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent"
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                        <div className="w-[640px] glass rounded-2xl p-4 shadow-2xl">
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5">
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                                  <s.icon className="h-4 w-4" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-foreground group-hover:text-primary">
                                    {s.name}
                                  </span>
                                  <span className="block text-xs text-muted-foreground line-clamp-1">
                                    {s.short}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-3">
                            <span className="text-sm text-muted-foreground">
                              Not sure what you need?
                            </span>
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                              Talk to an expert{" "}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent"
                    />
                  )}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-shadow">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  height={150}
                  width={150}
                  alt="Logo"
                />
              </Link>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-4 sm:px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}>
                  <Link
                    href={link.href}
                    className="block py-3 text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  <Link href="/contact">
                    Get a Free Consultation{" "}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

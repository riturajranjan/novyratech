"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hexagon,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { services, products, companyInfo } from "@/lib/data";
import { newsletterSchema } from "@/lib/schemas";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("newsletter").insert({ email });
      if (error && error.code !== "23505") throw error;
      setDone(true);
      toast.success("Subscribed! Check your inbox to confirm.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {/* <Hexagon className="h-8 w-8 text-primary" />
              <span className="font-display text-lg font-semibold">Novyra Technologies</span> */}
              <Image
                src="/images/logo.png"
                height={200}
                width={200}
                alt="Logo"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {companyInfo.tagline}. A small studio building software for
              founders who care about the details.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{companyInfo.email}</p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.address}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: Linkedin,
                  href: companyInfo.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: companyInfo.social.twitter,
                  label: "Twitter",
                },
                {
                  icon: Github,
                  href: companyInfo.social.github,
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: companyInfo.social.instagram,
                  label: "Instagram",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:text-primary hover:border-primary/50 hover:-translate-y-0.5">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/products"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Services", href: "/services" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Insights on building software that scales. No spam.
            </p>
            <form onSubmit={onSubmit} className="mt-4 space-y-2">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || done}
                className="bg-background/60"
              />
              <Button
                type="submit"
                disabled={loading || done}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                {done ? (
                  <>
                    <CheckCircle2 className="mr-1.5 h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="ml-1.5 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

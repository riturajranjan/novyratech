"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative z-50 hidden transition-all duration-300 md:block xl:absolute xl:top-[35px] xl:left-0 xl:right-0 ${
        scrolled
          ? "border-b border-border-soft bg-background/85 shadow-[0_8px_24px_-16px_rgba(7,24,45,0.25)] backdrop-blur-md"
          : "border-b border-transparent bg-background xl:bg-transparent"
      }`}
    >
      <div className="shell flex h-[73px] items-center px-4 sm:px-6 lg:px-0">
        <Link href="/" className="flex w-[302px] shrink-0 items-center gap-2.5" aria-label="Novyra Technologies home">
          <Image
            src="/images/brand/novyra-mark.png"
            alt=""
            width={324}
            height={224}
            priority
            className="h-[49px] w-auto object-contain object-left"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[37px] font-extrabold leading-[0.78] tracking-[0.08em] text-navy-950">
              NOVYRA
            </span>
            <span className="mt-1 text-[11px] font-semibold tracking-[0.42em] text-navy-900/55">
              TECHNOLOGIES
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.25em] text-navy-900/70">
              Innovate · Build · Elevate
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-[34px] text-[13px] font-semibold text-navy-950">
            {NAV_LINKS.map((link) => {
              const active = link.label === "Home";
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative py-1.5"
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-[9px] left-0 h-[2px] rounded-full bg-[#ff3b30] transition-all duration-300 ${
                        active ? "w-[31px]" : "w-0 group-hover:w-full"
                      }`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-[22px]">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-navy-950 transition-colors hover:bg-navy-900/5 xl:inline-flex"
          >
            <Search className="h-[20px] w-[20px]" aria-hidden />
          </button>

          <Button href="#contact" variant="dark" size="sm" className="hidden h-11 min-w-[208px] px-6 text-[13px] shadow-[0_10px_20px_-10px_rgba(6,22,42,0.7)] xl:inline-flex">
            Get a Free Consultation
            <span aria-hidden className="text-lg leading-none">→</span>
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-900/5 xl:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

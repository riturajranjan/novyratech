"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Contact, Grid2X2, Home, Newspaper } from "lucide-react";

const mobileNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "#services", icon: Grid2X2 },
  { label: "Industries", href: "#industries", icon: BriefcaseBusiness },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Contact", href: "#contact", icon: Contact },
] as const;

export function MobileBottomNav() {
  const [activeLabel, setActiveLabel] = useState("Home");

  useEffect(() => {
    const sections = [
      ["Services", document.querySelector("#services")],
      ["Industries", document.querySelector("#industries")],
      ["Contact", document.querySelector("#contact")],
    ] as const;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const match = sections.find(([, section]) => section === visible?.target);
        if (match) setActiveLabel(match[0]);
        else if (window.scrollY < 240) setActiveLabel("Home");
      },
      { rootMargin: "-28% 0px -48%", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach(([, section]) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mobile-bottom-nav md:hidden" aria-label="Mobile navigation">
      {mobileNavItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="mobile-bottom-nav-item"
            aria-current={activeLabel === item.label ? "page" : undefined}
            data-active={activeLabel === item.label ? "true" : "false"}
          >
            <span>
              <Icon className="h-[21px] w-[21px]" aria-hidden />
            </span>
            <strong>{item.label}</strong>
          </Link>
        );
      })}
    </nav>
  );
}

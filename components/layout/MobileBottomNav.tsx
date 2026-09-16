import Link from "next/link";
import { BriefcaseBusiness, Contact, Grid2X2, Home, Newspaper } from "lucide-react";

const mobileNavItems = [
  { label: "Home", href: "/", icon: Home, active: true },
  { label: "Services", href: "#services", icon: Grid2X2, active: false },
  { label: "Industries", href: "#industries", icon: BriefcaseBusiness, active: false },
  { label: "Blog", href: "/blog", icon: Newspaper, active: false },
  { label: "Contact", href: "#contact", icon: Contact, active: false },
] as const;

export function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav md:hidden" aria-label="Mobile navigation">
      {mobileNavItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="mobile-bottom-nav-item"
            aria-current={item.active ? "page" : undefined}
            data-active={item.active ? "true" : "false"}
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

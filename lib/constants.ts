import type { LucideIcon } from "lucide-react";
import {
  MonitorSmartphone,
  Megaphone,
  Layers,
  PenTool,
  Bot,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceShortcut = {
  label: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
};

export const SERVICE_SHORTCUTS: ServiceShortcut[] = [
  {
    label: "Web Development",
    icon: MonitorSmartphone,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-100",
  },
  {
    label: "Digital Marketing",
    icon: Megaphone,
    colorClass: "text-green-700",
    bgClass: "bg-green-100",
  },
  {
    label: "SaaS Development",
    icon: Layers,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-100",
  },
  {
    label: "Graphic Design",
    icon: PenTool,
    colorClass: "text-saffron-600",
    bgClass: "bg-saffron-100",
  },
  {
    label: "AI Automation",
    icon: Bot,
    colorClass: "text-green-700",
    bgClass: "bg-green-100",
  },
];

export const ANNOUNCEMENT = {
  message: "Empowering Businesses from Small Towns to a Smarter Tomorrow",
  location: "Muzaffarpur, Bihar",
  reach: "Working Across India",
  phone: "+91 79037 24407",
};

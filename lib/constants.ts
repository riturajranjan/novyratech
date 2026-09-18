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
  message: "Websites & Software for Schools, Hospitals and Local Businesses",
  location: "Muzaffarpur, Bihar",
  reach: "Working Across India",
  phone: "+91 75478 25187",
};

// TODO: confirm the real business email — placeholder until the client provides one.
export const CONTACT_EMAIL = "hello@novyratech.com";

// TODO: confirm this is the correct WhatsApp Business number (currently reusing the phone number).
export const WHATSAPP_NUMBER = "+91 75478 25187";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`;

export const BUSINESS_ADDRESS = {
  locality: "Muzaffarpur",
  region: "Bihar",
  country: "India",
  // TODO: add a full street address / PIN code once available.
  display: "Muzaffarpur, Bihar, India",
};

export const BUSINESS_TYPES = [
  "School",
  "Hospital",
  "Shop",
  "Startup",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₹15,000 (Launch / Starter)",
  "₹15,000 – ₹35,000 (Starter / Professional)",
  "₹35,000 – ₹70,000 (Professional / Business)",
  "₹70,000+ (Business / Enterprise)",
  "Not sure yet",
] as const;

export const FEATURE_FLAGS = {
  // Turn on once real, published articles exist behind /blog/[slug].
  showInsights: false,
};

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost";
  size?: "md" | "sm";
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-saffron-500 text-white shadow-[0_8px_20px_-8px_rgba(245,106,36,0.55)] hover:bg-saffron-600 hover:shadow-[0_12px_24px_-8px_rgba(245,106,36,0.6)]",
  dark: "bg-navy-900 text-white hover:bg-navy-800",
  ghost: "bg-transparent text-navy-900 hover:bg-navy-900/5",
};

const SIZE_CLASSES: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "px-7 py-4 text-base",
  sm: "px-4 py-2 text-sm",
};

function classes(variant: ButtonBaseProps["variant"] = "primary", size: ButtonBaseProps["size"] = "md", className = "") {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-all duration-300 ease-out will-change-transform",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(" ");
}

export function Button({ children, variant, size, className, href, onClick }: ButtonAsLink | ButtonAsButton) {
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes(variant, size, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes(variant, size, className)}>
      {children}
    </button>
  );
}

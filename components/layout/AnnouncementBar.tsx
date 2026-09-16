import { ArrowRight } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="hidden bg-navy-950 text-white/90 md:block">
      <div className="shell flex h-[35px] items-center justify-end gap-[27px] px-4 text-[11px] font-semibold sm:px-6 lg:px-0">
        <div className="flex min-w-0 items-center gap-[13px] truncate">
          <span aria-hidden className="shrink-0">
            🌱
          </span>
          <span className="hidden truncate sm:inline">{ANNOUNCEMENT.message}</span>
          <span className="hidden shrink-0 text-white/40 md:inline">|</span>
          <span className="hidden shrink-0 items-center gap-1 md:inline-flex">
            {ANNOUNCEMENT.location} <span aria-hidden>🇮🇳</span>
          </span>
          <span className="hidden shrink-0 text-white/40 lg:inline">|</span>
          <span className="hidden shrink-0 lg:inline">{ANNOUNCEMENT.reach}</span>
          <span className="truncate sm:hidden">
            {ANNOUNCEMENT.location} · {ANNOUNCEMENT.reach}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-[17px]">
          <a
            href={`tel:${ANNOUNCEMENT.phone.replace(/\s+/g, "")}`}
            className="hidden items-center gap-1.5 text-white/95 transition-colors hover:text-white sm:flex"
          >
            Call Us: {ANNOUNCEMENT.phone}
          </a>
          <span className="hidden h-3.5 w-px bg-white/45 sm:block" aria-hidden />
          <a
            href="#contact"
            className="group flex h-[35px] min-w-[143px] items-center justify-center gap-2 rounded-full bg-[#ff9a62] px-5 font-bold text-navy-950 transition-colors hover:bg-[#ff8849]"
          >
            Let&apos;s Discuss
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}

import type { ServiceShortcut as ServiceShortcutType } from "@/lib/constants";

export function ServiceShortcut({ label, icon: Icon, colorClass, bgClass }: ServiceShortcutType) {
  return (
    <div className="group flex shrink-0 cursor-default flex-col items-center gap-[7px]">
      <span
        className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full ${bgClass} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105`}
      >
        <Icon className={`h-4 w-4 ${colorClass}`} aria-hidden />
      </span>
      <span className="whitespace-nowrap text-[10px] font-bold text-navy-950 transition-colors duration-300 group-hover:text-navy-900">
        {label}
      </span>
    </div>
  );
}

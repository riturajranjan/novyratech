import { HeroContent } from "@/components/home/HeroContent";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ServiceShortcutsRow } from "@/components/home/ServiceShortcutsRow";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-green-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-saffron-100/35 blur-3xl"
      />

      <div className="hero-shell">
        <div className="relative z-10 max-w-[520px]">
          <HeroContent />
        </div>
        <div className="hero-art">
          <HeroVisual />
        </div>
        <div className="relative z-10 mt-[8px] max-w-[520px]">
          <ServiceShortcutsRow />
        </div>
      </div>
    </section>
  );
}

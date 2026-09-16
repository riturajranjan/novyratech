import { HeroContent } from "@/components/home/HeroContent";
import { HeroVisual } from "@/components/home/HeroVisual";
import { MobileHero } from "@/components/home/MobileHero";
import { ServiceShortcutsRow } from "@/components/home/ServiceShortcutsRow";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <MobileHero />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 hidden h-[420px] w-[420px] rounded-full bg-green-100/40 blur-3xl md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 hidden h-[380px] w-[380px] rounded-full bg-saffron-100/35 blur-3xl md:block"
      />

      <div className="hero-shell hidden md:flex">
        <div className="relative z-10 max-w-[520px]">
          <HeroContent />
        </div>
        <div className="hero-art">
          <HeroVisual />
        </div>
        <div className="relative z-10 mt-auto max-w-[520px]">
          <ServiceShortcutsRow />
        </div>
      </div>
    </section>
  );
}

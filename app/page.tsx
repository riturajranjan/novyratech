import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyNovyra } from "@/components/home/WhyNovyra";
import { SelectedWork } from "@/components/home/SelectedWork";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Pricing } from "@/components/home/Pricing";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Industries />
        <WhatWeDo />
        <WhyNovyra />
        <SelectedWork />
        <HowWeWork />
        <Pricing />
      </main>
      <MobileBottomNav />
    </>
  );
}

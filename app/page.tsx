import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { WhatWeDo } from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Industries />
        <WhatWeDo />
      </main>
      <MobileBottomNav />
    </>
  );
}

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
import { RealTestimonials } from "@/components/home/RealTestimonials";
import { InsightsIdeas } from "@/components/home/InsightsIdeas";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatButton } from "@/components/layout/WhatsAppFloatButton";
import { FEATURE_FLAGS } from "@/lib/constants";

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
        <RealTestimonials />
        {FEATURE_FLAGS.showInsights ? <InsightsIdeas /> : null}
        <FinalCta />
      </main>
      <Footer />
      <MobileBottomNav />
      <WhatsAppFloatButton />
    </>
  );
}

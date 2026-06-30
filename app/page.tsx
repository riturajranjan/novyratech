import { Hero } from '@/components/sections/hero';
import { Marquee } from '@/components/sections/marquee';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Stats } from '@/components/sections/stats';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { Process } from '@/components/sections/process';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { BlogPreview } from '@/components/sections/blog-preview';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <Stats />
      <FeaturedProducts />
      <Process />
      <TechStack />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}

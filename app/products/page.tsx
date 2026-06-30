import { SectionHeading } from '@/components/sections/section-heading';
import { ProductsContent } from '@/components/sections/products-content';
import { DemoForm } from '@/components/forms/demo-form';

export const metadata = {
  title: 'Products',
  description: 'Four products — LumenHR, LumenCRM, LumenTravel, and LumenKit — with transparent pricing.',
};

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <ProductsContent />
      <section id="demo" className="relative py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Request a Demo"
            title="See it in action"
            subtitle="Tell us which product interests you and we'll set up a personalized walkthrough."
          />
          <div className="mt-12">
            <DemoForm />
          </div>
        </div>
      </section>
    </div>
  );
}

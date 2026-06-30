import { ContactForm, ContactInfo } from '@/components/forms/contact-form';

export const metadata = {
  title: 'Contact',
  description: 'Tell us about your project. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

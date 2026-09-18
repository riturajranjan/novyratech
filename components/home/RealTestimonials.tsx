import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Testimonial = {
  id: string;
  name: string;
  business: string;
  city: string;
  photo: string;
  quote: string;
  projectHref?: string;
};

// TODO: add real clients here as projects launch — name, business, city, a real photo and a real quote.
// Section renders nothing until this has at least one entry, so no placeholder/demo content ever ships.
const TESTIMONIALS: Testimonial[] = [];

export function RealTestimonials() {
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section id="client-stories" className="stories-section">
      <div className="stories-shell">
        <header className="stories-header">
          <div className="stories-eyebrow"><span />CLIENT STORIES<span /></div>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from businesses we&apos;ve built for.</p>
        </header>

        <div className="stories-real-grid">
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.id} className="stories-real-card">
              <Image src={testimonial.photo} alt={`${testimonial.name}, ${testimonial.business}`} width={64} height={64} className="stories-real-photo" />
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.business} · {testimonial.city}</span>
              </div>
              {testimonial.projectHref ? (
                <Link href={testimonial.projectHref}>See the project <ArrowRight aria-hidden /></Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

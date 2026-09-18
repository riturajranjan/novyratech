import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Novyra Technologies",
  description: "The terms that apply when you use the Novyra Technologies website or engage us for a project.",
};

export default function TermsPage() {
  const updated = "18 September 2026";

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-updated">Last updated: {updated}</p>

        <p>
          These terms apply when you use this website or engage Novyra Technologies for a project. By using
          the site or submitting an enquiry, you agree to them.
        </p>

        <h2>Website use</h2>
        <p>
          Content on this website — text, images and pricing — is for general information. We try to keep
          it accurate, but final project scope and pricing are confirmed in writing before work begins.
        </p>

        <h2>Pricing</h2>
        <p>
          Prices shown on this site are starting points. The final quote for your project depends on the
          number of pages, features and content required, and will be shared in writing before you commit.
        </p>

        <h2>Project engagement</h2>
        <p>
          Once you confirm a plan with us, we&apos;ll share a simple written agreement covering scope,
          timeline and payment terms before starting work.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Once a project is paid for in full, ownership of the final website or application transfers to
          you, unless otherwise agreed in writing.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          We aim to deliver reliable, well-tested work, but we are not liable for indirect losses arising
          from the use of a delivered product beyond the value of the project itself.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}

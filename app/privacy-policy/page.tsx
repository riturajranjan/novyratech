import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Novyra Technologies",
  description: "How Novyra Technologies collects, uses and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  const updated = "18 September 2026";

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: {updated}</p>

        <p>
          Novyra Technologies (&quot;we&quot;, &quot;us&quot;) operates this website. This page explains what
          information we collect when you use it, and how we use it.
        </p>

        <h2>Information we collect</h2>
        <p>
          When you submit our contact form, we collect the details you provide — your name, phone number,
          business type, budget range and message. We do not collect payment information through this
          website.
        </p>

        <h2>How we use it</h2>
        <p>
          We use this information only to respond to your enquiry, understand your project and follow up
          by phone, email or WhatsApp. We do not sell or rent your information to third parties.
        </p>

        <h2>Data storage</h2>
        <p>
          Enquiry details are stored securely and kept only as long as needed to respond to your request or
          as required by law.
        </p>

        <h2>Cookies</h2>
        <p>
          This site may use basic cookies or analytics to understand how visitors use it. These do not
          identify you personally.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to review, correct or delete information you have shared with us by contacting us
          using the details below.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}

"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { BUDGET_RANGES, BUSINESS_TYPES } from "@/lib/constants";

type FormState = {
  name: string;
  phone: string;
  businessType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  businessType: BUSINESS_TYPES[0],
  budget: BUDGET_RANGES[0],
  message: "",
};

const PHONE_PATTERN = /^[+\d][\d\s-]{7,14}$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = "Please tell us your name.";
    }
    if (!PHONE_PATTERN.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (values.message.trim().length < 5) {
      nextErrors.message = "Tell us a little about what you need.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    // TODO: replace with a real submit handler — call an email API (e.g. Resend/SendGrid)
    // or append a row to a Google Sheet via a serverless function. For now this only
    // simulates a network call so the success state can be reviewed.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-success" role="status">
        <CheckCircle2 aria-hidden />
        <h3>Thanks, {form.name.split(" ")[0] || "there"}!</h3>
        <p>We&apos;ve got your details and will get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="contact-form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? <span id="contact-name-error" className="contact-form-error">{errors.name}</span> : null}
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? <span id="contact-phone-error" className="contact-form-error">{errors.phone}</span> : null}
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-business-type">Business type</label>
          <select
            id="contact-business-type"
            name="businessType"
            value={form.businessType}
            onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
          >
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-budget">Budget range</label>
          <select
            id="contact-budget"
            name="budget"
            value={form.budget}
            onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="contact-form-field contact-form-field-full">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            placeholder="Tell us what you're building — a new website, an app, a system for your team..."
          />
          {errors.message ? <span id="contact-message-error" className="contact-form-error">{errors.message}</span> : null}
        </div>
      </div>

      <button type="submit" className="contact-form-submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

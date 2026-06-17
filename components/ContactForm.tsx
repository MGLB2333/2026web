"use client";

import { useEffect, useState } from "react";

const REASONS = [
  { value: "demo", label: "Book a demo" },
  { value: "sales", label: "Talk to sales" },
  { value: "press", label: "Press & media" },
  { value: "partnership", label: "Partnerships" },
  { value: "support", label: "Product support" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState("");

  // Preselect the enquiry reason from ?reason= without forcing dynamic rendering.
  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("reason");
    if (r && REASONS.some((o) => o.value === r)) setReason(r);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    // TODO: POST the form data to your backend / form service here.
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="form-card reveal">
      <div className={`form-fields ${sent ? "hide" : ""}`.trim()}>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="first">First name <span className="req">*</span></label>
              <input id="first" name="first" type="text" placeholder="Jane" required />
            </div>
            <div className="field">
              <label htmlFor="last">Last name <span className="req">*</span></label>
              <input id="last" name="last" type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Work email <span className="req">*</span></label>
              <input id="email" name="email" type="email" placeholder="jane@agency.com" required />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Agency name" />
            </div>
          </div>
          <div className="field full">
            <label htmlFor="reason">What can we help with? <span className="req">*</span></label>
            <select
              id="reason"
              name="reason"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="" disabled>Select a reason</option>
              {REASONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">Message <span className="req">*</span></label>
            <textarea id="message" name="message" placeholder="Tell us a little about what you're looking for…" required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn dark">Send message <span className="ar">↗</span></button>
            <span className="form-note">By submitting, you agree to be contacted about your enquiry.</span>
          </div>
        </form>
      </div>
      <div className={`form-success ${sent ? "show" : ""}`.trim()}>
        <div className="tick">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3>Thanks, we&apos;ve got it.</h3>
        <p>Your message is on its way to our team. We&apos;ll be in touch shortly at the email you provided.</p>
      </div>
    </div>
  );
}

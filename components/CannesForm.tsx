"use client";

import { useState } from "react";

export default function CannesForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    // TODO: POST the form data to your backend / form service here.
    setSent(true);
  }

  return (
    <div className="form-card">
      <div className={`form-fields ${sent ? "hide" : ""}`.trim()}>
        <div className="fc-head">
          <h2>Request a meeting</h2>
          <p>Tell us a little about you and we&apos;ll find a time to connect on the Croisette.</p>
        </div>
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
          <div className="field full">
            <label htmlFor="title">Job title <span className="req">*</span></label>
            <input id="title" name="title" type="text" placeholder="Head of TV Planning" required />
          </div>
          <div className="field full">
            <label htmlFor="company">Company name <span className="req">*</span></label>
            <input id="company" name="company" type="text" placeholder="Agency name" required />
          </div>
          <div className="field full">
            <label htmlFor="email">Email address <span className="req">*</span></label>
            <input id="email" name="email" type="email" placeholder="jane@agency.com" required />
          </div>
          <div className="field full">
            <label htmlFor="topic">Meeting topic</label>
            <input id="topic" name="topic" type="text" placeholder="What would you like to talk about?" />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn dark">Request a meeting <span className="ar">↗</span></button>
            <span className="form-note">We&apos;ll be in touch to confirm a time.</span>
          </div>
        </form>
      </div>
      <div className={`form-success ${sent ? "show" : ""}`.trim()}>
        <div className="tick">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3>See you in Cannes.</h3>
        <p>Thanks — your request is in. Our team will reach out to lock in a time to meet on the Croisette.</p>
      </div>
    </div>
  );
}

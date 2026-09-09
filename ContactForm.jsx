"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  website: "" // Honeypot. Real users should never fill this.
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your request.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Thank you. Your consultation request has been sent successfully. We will get back to you shortly."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again or email us directly."
      });
    }
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Business email *
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Company
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>

        <label>
          Area of interest
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option>Functional Testing</option>
            <option>Automation Testing</option>
            <option>Performance Engineering</option>
            <option>Quality Strategy</option>
            <option>QA Transformation</option>
          </select>
        </label>
      </div>

      <label>
        Tell us about your quality challenge *
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your application, project or quality challenge."
          required
          rows="6"
        />
      </label>

      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex="-1"
            autoComplete="off"
            name="website"
            value={form.website}
            onChange={handleChange}
          />
        </label>
      </div>

      <button
        className="primary-button"
        type="submit"
        disabled={status.type === "loading"}
      >
        {status.type === "loading"
          ? "Sending..."
          : "Request Consultation →"}
      </button>

      {status.type === "success" && (
        <p className="form-message success" role="status">
          ✓ {status.message}
        </p>
      )}

      {status.type === "error" && (
        <p className="form-message error" role="alert">
          {status.message}
        </p>
      )}
    </form>
  );
}

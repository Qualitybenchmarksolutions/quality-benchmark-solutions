"use client";

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">START A CONVERSATION</div>
          <h1>Let's Talk <span>Quality.</span></h1>
          <p className="lead">
            Tell us about your application, project or quality challenge and we will
            help you identify the right next step.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">CONTACT DETAILS</div>
            <h2>Speak with a QA expert.</h2>
            <p>We work with organisations looking for independent quality engineering and software testing expertise.</p>

            <div className="contact-details">
              <div>
                <span>CALL / WHATSAPP</span>
                <a href="tel:+917019952138">+91 70199 52138</a>
              </div>
              <div>
                <span>BUSINESS EMAIL</span>
                <a href="mailto:info@qualitybenchmarksolutions.com">info@qualitybenchmarksolutions.com</a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-top">
              <span>REQUEST A CONSULTATION</span>
              <div className="form-dot"></div>
            </div>

            <h3>Tell us about your quality challenge.</h3>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. Your consultation request has been received.");
            }}>
              <input placeholder="Your name" required />
              <input type="email" placeholder="Business email" required />
              <input placeholder="Company name" />
              <select defaultValue="">
                <option value="" disabled>Service required</option>
                <option>Functional Testing</option>
                <option>Test Automation</option>
                <option>Performance Engineering</option>
                <option>AI & Quality Engineering</option>
                <option>QA Strategy & Consulting</option>
              </select>
              <textarea placeholder="Tell us about your project or quality challenge"></textarea>
              <button className="btn primary form-button" type="submit">
                Request Consultation <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

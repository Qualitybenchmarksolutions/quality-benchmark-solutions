"use client";

import "./globals.css";

const services = [
  {
    number: "01",
    title: "Functional Testing",
    description:
      "Comprehensive validation of business-critical features, workflows and user journeys across web, mobile and enterprise applications.",
    icon: "✓",
  },
  {
    number: "02",
    title: "Test Automation",
    description:
      "Scalable automation strategies and frameworks designed to accelerate releases while improving quality and delivery confidence.",
    icon: "⚙",
  },
  {
    number: "03",
    title: "Performance Engineering",
    description:
      "Load, stress, endurance and scalability testing to identify performance risks before they impact customers.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Mobile Application Testing",
    description:
      "Reliable testing across devices, operating systems, networks and real-world mobile usage scenarios.",
    icon: "▣",
  },
  {
    number: "05",
    title: "API & Integration Testing",
    description:
      "Validation of APIs, services, microservices and complex integrations across modern enterprise ecosystems.",
    icon: "⇄",
  },
  {
    number: "06",
    title: "QA Strategy & Consulting",
    description:
      "Independent QA assessments, quality strategy, process improvement and transformation consulting.",
    icon: "◆",
  },
];

const aiServices = [
  {
    title: "AI-Assisted Test Automation",
    description:
      "Accelerating test creation, analysis and automation maintenance using modern AI-assisted approaches.",
  },
  {
    title: "Intelligent Test Design",
    description:
      "Using AI-assisted analysis to identify missing scenarios, improve coverage and focus testing effort on risk.",
  },
  {
    title: "AI Application Testing",
    description:
      "Testing applications powered by generative AI, LLMs, AI assistants and intelligent workflows.",
  },
  {
    title: "AI Quality Risk Assessment",
    description:
      "Evaluating reliability, consistency, performance and quality risks within AI-enabled applications.",
  },
];

const industries = [
  "Enterprise Applications",
  "Digital Platforms",
  "Web & Mobile Products",
  "Large-Scale Integrations",
  "Digital Transformation",
  "Complex Technology Ecosystems",
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}

      <nav className="nav">
        <div className="wrap navin">
          <a className="brand" href="#home">
            <img
              src="/quality-benchmark-logo.png"
              alt="Quality-Benchmark Solutions"
            />
          </a>

          <div className="links">
            <a href="#services">Services</a>
            <a href="#ai-quality">AI & Quality</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Talk to a QA Expert
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="wrap hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              INDEPENDENT QUALITY ENGINEERING & SOFTWARE TESTING CONSULTING
            </div>

            <h1>
              Quality Engineering for
              <span> Confident Digital Delivery.</span>
            </h1>

            <p className="hero-description">
              We help organisations reduce quality risk, improve release
              confidence and deliver reliable, scalable digital products through
              expert functional and non-functional testing.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn primary">
                Talk to a QA Expert
                <span>→</span>
              </a>

              <a href="#services" className="btn secondary">
                Explore Our Capabilities
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>15+</strong>
                <span>Years of QA Experience</span>
              </div>

              <div>
                <strong>Web · Mobile · API</strong>
                <span>Digital Product Coverage</span>
              </div>

              <div>
                <strong>Functional + Non-Functional</strong>
                <span>End-to-End Quality Expertise</span>
              </div>
            </div>
          </div>

          {/* QUALITY INTELLIGENCE PANEL */}

          <div className="quality-visual">
            <div className="visual-top">
              <div>
                <span className="visual-label">QUALITY INTELLIGENCE</span>
                <h3>Release Readiness</h3>
              </div>

              <div className="status-ready">
                <span></span>
                READY
              </div>
            </div>

            <div className="confidence">
              <div className="confidence-circle">
                <strong>96%</strong>
                <span>CONFIDENCE</span>
              </div>

              <div className="confidence-copy">
                <span>QUALITY SCORE</span>
                <strong>High Release Confidence</strong>
                <p>
                  Quality signals consolidated across testing, automation,
                  performance and delivery risk.
                </p>
              </div>
            </div>

            <div className="metric">
              <div className="metric-header">
                <span>Functional Coverage</span>
                <strong>94%</strong>
              </div>
              <div className="progress">
                <span className="progress-one"></span>
              </div>
            </div>

            <div className="metric">
              <div className="metric-header">
                <span>Automation Readiness</span>
                <strong>87%</strong>
              </div>
              <div className="progress">
                <span className="progress-two"></span>
              </div>
            </div>

            <div className="metric">
              <div className="metric-header">
                <span>Performance Readiness</span>
                <strong>PASS</strong>
              </div>
              <div className="progress">
                <span className="progress-three"></span>
              </div>
            </div>

            <div className="ai-insight">
              <div className="ai-icon">AI</div>

              <div>
                <span>AI QUALITY INSIGHT</span>
                <strong>Risk patterns detected and prioritised.</strong>
              </div>

              <div className="ai-arrow">↗</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}

      <section id="experience" className="experience-strip">
        <div className="wrap">
          <p className="section-label">
            EXPERIENCE ACROSS COMPLEX DIGITAL ENVIRONMENTS
          </p>

          <div className="industry-list">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DO</div>

              <h2>
                Quality engineering built around
                <span> your business.</span>
              </h2>
            </div>

            <p>
              From validating a critical release to improving an entire QA
              capability, we bring independent expertise and a practical
              delivery mindset.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon">{service.icon}</div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI QUALITY */}

      <section id="ai-quality" className="ai-section">
        <div className="wrap ai-layout">
          <div className="ai-intro">
            <div className="eyebrow">AI & QUALITY ENGINEERING</div>

            <h2>
              Building quality for
              <span> the AI era.</span>
            </h2>

            <p>
              AI is changing how software is built, tested and maintained. Our
              approach focuses on practical adoption of AI-enabled quality
              engineering while maintaining strong testing fundamentals and
              independent quality judgement.
            </p>

            <div className="ai-statement">
              <span className="quote-mark">“</span>

              <p>
                Technology should not replace quality expertise.
                <strong> It should amplify it.</strong>
              </p>
            </div>
          </div>

          <div className="ai-cards">
            {aiServices.map((service, index) => (
              <article className="ai-card" key={service.title}>
                <div className="ai-card-number">
                  0{index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="ai-card-arrow">→</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section id="why" className="section soft-section">
        <div className="wrap why-grid">
          <div>
            <div className="eyebrow">
              WHY QUALITY-BENCHMARK SOLUTIONS
            </div>

            <h2>
              Experience that goes
              <span> beyond testing.</span>
            </h2>

            <p className="lead">
              We do not simply report defects. We help organisations understand
              quality risk, improve delivery confidence and build sustainable
              quality practices.
            </p>

            <div className="benefits">
              <div>
                <span>01</span>
                <p>15+ years of Quality Engineering experience</p>
              </div>

              <div>
                <span>02</span>
                <p>Functional and non-functional testing expertise</p>
              </div>

              <div>
                <span>03</span>
                <p>Independent and objective quality assessment</p>
              </div>

              <div>
                <span>04</span>
                <p>Modern automation, performance and AI-enabled approaches</p>
              </div>
            </div>
          </div>

          <div className="approach-panel">
            <span className="panel-label">OUR APPROACH</span>

            <h3>Understand. Assess. Assure.</h3>

            <p>
              Every engagement starts with understanding your product, users,
              risks and release objectives.
            </p>

            <div className="approach-step">
              <span>01</span>
              <div>
                <strong>Understand</strong>
                <p>Business context, technology and quality objectives.</p>
              </div>
            </div>

            <div className="approach-step">
              <span>02</span>
              <div>
                <strong>Assess</strong>
                <p>Testing maturity, coverage and delivery risks.</p>
              </div>
            </div>

            <div className="approach-step">
              <span>03</span>
              <div>
                <strong>Engineer</strong>
                <p>A focused strategy built around the right risks.</p>
              </div>
            </div>

            <div className="approach-step">
              <span>04</span>
              <div>
                <strong>Assure</strong>
                <p>Actionable insights and improved release confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section about-section">
        <div className="wrap about-grid">
          <div className="about-title">
            <div className="eyebrow">ABOUT US</div>

            <h2>
              Built on experience.
              <span> Focused on quality.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="lead">
              Quality-Benchmark Solutions is an independent Quality Engineering
              and Software Testing Consulting company focused on helping
              organisations deliver dependable digital products.
            </p>

            <p>
              Founded and led by <strong>Shashank Shekhar</strong>, an
              experienced Technology Leader in Testing and Quality Engineering with
              decades of experience across functional testing, performance
              testing, test automation, enterprise applications and digital
              platforms.
            </p>

            <p>
              Our focus is simple: combining strong testing fundamentals with
              modern automation, performance engineering and AI-enabled quality
              practices.
            </p>

            <div className="mission">
              <span>OUR MISSION</span>

              <strong>
                Help organisations release software with confidence.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">START A CONVERSATION</div>

            <h2>
              Let's talk
              <span> quality.</span>
            </h2>

            <p>
              Tell us about your application, project or quality challenge.
              We'll help you identify the right next step.
            </p>

            <div className="contact-details">
              <div>
                <span>CALL / WHATSAPP</span>
                <a href="tel:+917019952138">
                  +91 70199 52138
                </a>
              </div>

              <div>
                <span>BUSINESS EMAIL</span>
                <a href="mailto:info@qualitybenchmarksolutions.com">
                  info@qualitybenchmarksolutions.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-top">
              <span>REQUEST A CONSULTATION</span>
              <div className="form-dot"></div>
            </div>

            <h3>Tell us about your quality challenge.</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you. Your consultation request form is ready for email integration."
                );
              }}
            >
              <input placeholder="Your name" required />

              <input
                type="email"
                placeholder="Business email"
                required
              />

              <input placeholder="Company name" />

              <select defaultValue="">
                <option value="" disabled>
                  Service required
                </option>
                <option>Functional Testing</option>
                <option>Test Automation</option>
                <option>Performance Engineering</option>
                <option>Mobile Application Testing</option>
                <option>API & Integration Testing</option>
                <option>QA Strategy & Consulting</option>
                <option>AI & Quality Engineering</option>
              </select>

              <textarea placeholder="Tell us about your project or quality challenge"></textarea>

              <button className="btn primary form-button" type="submit">
                Request Consultation
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}

      <a
        className="whatsapp"
        href="https://wa.me/917019952138"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <span>W</span>
      </a>

      {/* FOOTER */}

      <footer className="footer">
        <div className="wrap footer-content">
          <div>
            © {new Date().getFullYear()} Quality-Benchmark Solutions.
          </div>

          <div className="footer-right">
            QUALITY ENGINEERING · TESTING · CONSULTING
          </div>
        </div>
      </footer>
    </main>
  );
}

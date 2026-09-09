"use client";
import "./globals.css";

const services=[
["◈","Functional Testing","Comprehensive validation of business-critical features, workflows and user journeys across web, mobile and enterprise applications."],
["⚙","Test Automation","Scalable automation strategies and frameworks that accelerate releases while improving quality and confidence."],
["◉","Performance Testing","Load, stress, endurance and scalability testing to identify performance risks before they impact users."],
["▣","Mobile Application Testing","Reliable testing across devices, operating systems, networks and real-world mobile usage scenarios."],
["↔","API & Integration Testing","Validation of APIs, services, microservices and complex integrations across modern enterprise ecosystems."],
["◆","QA Strategy & Consulting","Independent QA assessments, quality strategy, process improvement and transformation consulting."]
];

export default function Home(){
 return <main>
  <nav className="nav"><div className="wrap navin"><a className="brand" href="#"><img src="/quality-benchmark-logo.png" alt="Quality-Benchmark Solutions" /></a><div className="links"><a href="#services">Services</a><a href="#why">Why Us</a><a href="#about">About</a><a href="#contact" className="btn primary">Talk to a QA Expert</a></div></div></nav>

  <section className="hero"><div className="wrap hero-grid">
   <div>
   <div className="eyebrow">Independent Quality Engineering & Software Testing Consulting</div>
   <h1>Quality Without<br/>Compromise.</h1>
   <p>We help organisations deliver reliable, scalable and high-performing web, mobile and enterprise applications through expert functional and non-functional testing.</p>
   <div className="cta"><a className="btn primary" href="#services">Explore Our Services</a><a className="btn secondary" href="#contact">Request a Consultation</a></div>
   <div className="stats"><div className="stat"><strong>15+</strong>Years of QA experience</div><div className="stat"><strong>Web</strong>Digital application testing</div><div className="stat"><strong>Mobile</strong>Cross-platform quality</div><div className="stat"><strong>End-to-End</strong>Functional & non-functional expertise</div></div>
  </div>
  <div className="hero-orb"><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="core">Q<br/><span>QA</span></div><div className="signal s1"></div><div className="signal s2"></div><div className="signal s3"></div></div>
  </div></div></section>

  <section id="services" className="section muted"><div className="wrap"><div className="eyebrow">What we do</div><h2>Quality engineering built around your business.</h2><p className="lead">From validating a critical release to improving an entire QA capability, Quality-Benchmark Solutions brings independent expertise and a practical delivery mindset.</p>
  <div className="grid">{services.map(([i,t,d])=><article className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

  <section id="why" className="section"><div className="wrap split"><div><div className="eyebrow">Why Quality-Benchmark Solutions</div><h2>Experience that goes beyond testing.</h2><p className="lead">We do not simply report defects. We help organisations understand quality risk, improve delivery confidence and build sustainable quality practices.</p><ul className="list"><li>15+ years of enterprise QA experience</li><li>Functional and non-functional testing expertise</li><li>Web, mobile and enterprise application coverage</li><li>Independent and objective quality assessment</li><li>Modern automation and performance engineering approach</li></ul></div><div className="panel"><div className="eyebrow">Our approach</div><h3>Understand. Assess. Assure.</h3><p>Every engagement starts with understanding your product, users, risks and release objectives. We then design the right testing approach rather than forcing a one-size-fits-all service.</p><p><strong>Outcome:</strong> clearer quality risk, stronger release confidence and better customer experiences.</p></div></div></section>

  <section className="section muted"><div className="wrap"><div className="eyebrow">How we engage</div><h2>A flexible path to better quality.</h2><div className="process"><div className="card step"><div className="num">01 / DISCOVER</div><h3>Understand</h3><p>Business goals, architecture, risks and current quality challenges.</p></div><div className="card step"><div className="num">02 / ASSESS</div><h3>Analyse</h3><p>Testing maturity, coverage, bottlenecks and quality risks.</p></div><div className="card step"><div className="num">03 / ENGINEER</div><h3>Design</h3><p>A focused functional and non-functional testing strategy.</p></div><div className="card step"><div className="num">04 / ASSURE</div><h3>Deliver</h3><p>Actionable insights and measurable improvement in release confidence.</p></div></div></div></section>

  <section id="about" className="section"><div className="wrap split"><div className="panel"><div className="eyebrow">About us</div><h2>Built on experience. Focused on quality.</h2></div><div><p className="lead">Quality-Benchmark Solutions is an independent Quality Engineering and Software Testing Consulting company focused on helping organisations deliver dependable digital products.</p><p><strong>Founded and led by Shashank Shekhar</strong>, an experienced Test Manager and Quality Engineering professional with 15+ years of experience across functional testing, performance testing, test automation, enterprise applications and digital platforms.</p><p>His experience includes leading testing organisations, client-facing delivery, performance engineering, workload modelling and release quality assurance across consulting and enterprise engagements.</p><p><strong>Our mission is simple: help organisations release software with confidence.</strong></p></div></div></section>

  <section id="contact" className="contact"><div className="wrap split"><div><div className="eyebrow">Start a conversation</div><h2>Let's talk quality.</h2><p className="lead">Tell us about your application, project or quality challenge. We'll help you identify the right next step.</p><p><strong>Call / WhatsApp:</strong> +91 70199 52138<br/><strong>Business email:</strong> info@qualitybenchmarksolutions.com <em>(to be activated after the domain is registered)</em></p></div><div className="card"><h3>Request a Consultation</h3><form onSubmit={e=>{e.preventDefault();alert("Thank you. Your contact form is ready for email integration before launch.");}}><input placeholder="Your name" required/><input type="email" placeholder="Business email" required/><input placeholder="Company name"/><select defaultValue=""><option value="" disabled>Service required</option><option>Functional Testing</option><option>Test Automation</option><option>Performance Testing</option><option>Mobile Application Testing</option><option>QA Consulting</option></select><textarea placeholder="Tell us about your project or quality challenge"></textarea><button className="btn primary" type="submit">Request Consultation</button><a className="btn secondary" href="tel:+917019952138">Call +91 70199 52138</a></form></div></div></section>

  <a className="whatsapp" href="https://wa.me/917019952138" target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp">◔</a>
  <footer className="footer"><div className="wrap footerin"><div>© {new Date().getFullYear()} Quality-Benchmark Solutions. Quality Without Compromise.</div><div>QUALITY ENGINEERING · TESTING · CONSULTING</div></div></footer>
 </main>
}
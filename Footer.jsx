import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            QUALITY BENCHMARK SOLUTIONS
          </div>

          <p>
            Independent quality engineering, testing and consulting
            expertise for modern digital products.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>COMPANY</span>

            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <span>LEGAL</span>

            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          <div>
            <span>CONTACT</span>

            <a href="mailto:info@qualitybenchmarksolutions.com">
              info@qualitybenchmarksolutions.com
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} Quality Benchmark Solutions.
          All rights reserved.
        </p>

        <div className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

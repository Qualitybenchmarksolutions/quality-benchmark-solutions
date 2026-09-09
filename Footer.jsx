import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-content">
        <div>
          <div className="footer-brand">Quality Benchmark Solutions</div>
          <p>
            Independent quality engineering and software testing consulting for
            teams building reliable digital products.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/services">Services</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Quality Benchmark Solutions. All rights reserved.
        </span>
        <span>QUALITY ENGINEERING · TESTING · CONSULTING</span>
      </div>
    </footer>
  );
}

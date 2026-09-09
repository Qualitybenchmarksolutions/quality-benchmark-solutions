"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const active = (path) => pathname === path ? " active" : "";

  return (
    <nav className="nav">
      <div className="wrap navin">
        <Link className="brand" href="/">
          <img
            src="/quality-benchmark-logo.png"
            alt="Quality Benchmark Solutions"
          />
        </Link>

        <div className="links">
          <Link href="/services" className={"nav-link" + active("/services")}>
            Services
          </Link>
          <Link href="/ai-quality" className={"nav-link" + active("/ai-quality")}>
            AI & Quality
          </Link>
          <Link href="/experience" className={"nav-link" + active("/experience")}>
            Experience
          </Link>
          <Link href="/about" className={"nav-link" + active("/about")}>
            About
          </Link>
          <Link href="/contact" className="nav-cta">
            Talk to a QA Expert
          </Link>
        </div>
      </div>
    </nav>
  );
}

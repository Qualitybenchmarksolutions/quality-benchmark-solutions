import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Quality Benchmark Solutions | Quality Without Compromise",
  description:
    "Independent Quality Engineering and Software Testing Consulting for web, mobile and enterprise applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <a
          className="whatsapp"
          href="https://wa.me/+917676174925"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <span>W</span>
        </a>

        <Footer />
      </body>
    </html>
  );
}

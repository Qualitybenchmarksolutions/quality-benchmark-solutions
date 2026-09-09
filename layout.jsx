import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Quality Benchmark Solutions | Quality Without Compromise",
  description:
    "Independent quality engineering and software testing consulting for web, mobile and enterprise applications."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

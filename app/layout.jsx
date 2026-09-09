export const metadata = {
  title: "Quality-Benchmark Solutions | Quality Without Compromise",
  description: "Independent Quality Engineering and Software Testing Consulting for web, mobile and enterprise applications."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
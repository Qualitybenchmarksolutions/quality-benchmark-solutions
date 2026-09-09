export default function Footer() {
  return (
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
  );
}

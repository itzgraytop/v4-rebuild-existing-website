export default function Home() {
  return (
    <div>
      <header>
        <h1>🥶 FrostHosting</h1>
        <nav>
          <a href="#">Products</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Sign In</a>
          <a href="#" className="primary-btn" style={{ padding: "10px 15px" }}>
            Get Started
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="tagline">🥶 New: NA East Game Host</div>
        <h2>Sweet & Reliable Hosting Solutions</h2>
        <p>Experience hosting that's as cool as ice. Fast, secure, and backed by 24/7 support from real people.</p>
        <div className="cta-buttons">
          <a href="#" className="primary-btn">
            Stack Your Server →
          </a>
          <a href="mailto:support@frosthosting.xyz" className="secondary-btn">
            Talk to Our Support Team
          </a>
        </div>
        <div className="features">
          <div>🧊 99.9% Uptime Guarantee</div>
          <div>📞 24/7 Expert Support</div>
        </div>
      </section>

      <footer>
        &copy; 2025 FrostHosting. Need help? Contact{" "}
        <a href="mailto:support@frosthosting.xyz" style={{ color: "#69D3F5" }}>
          support@frosthosting.xyz
        </a>
      </footer>
    </div>
  )
}

import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2 className="footer-heading">Modern Business</h2>
          <p>Modern frontend solutions that scale with your business growth.</p>
        </section>

        <section>
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="footer-heading">Contact</h2>
          <p>Email: hello@modernbusiness.dev</p>
          <p>Phone: +1 (555) 240-9911</p>
        </section>
      </div>
      <p className="footer-bottom">© {year} Modern Business. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
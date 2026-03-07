import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Modern Business home">
          Modern Business
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <Navigation isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
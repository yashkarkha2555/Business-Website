import { NavLink } from "react-router-dom";

function Navigation({ isOpen, onNavigate }) {
  const navClassName = `nav-links ${isOpen ? "open" : ""}`;

  return (
    <nav aria-label="Main navigation">
      <ul className={navClassName} id="site-navigation">
        <li>
          <NavLink to="/" onClick={onNavigate}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={onNavigate}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={onNavigate}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={onNavigate}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={onNavigate}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const links = [
  { to: "/artisans", label: "Artisans" },
  { to: "/crafts", label: "Crafts" },
  { to: "/museums", label: "Museums" },
  { to: "/collectors", label: "Collectors" },
  { to: "/workshops", label: "Workshops" },
  { to: "/products", label: "Shop" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Karigar home">
          <span className="brand__mark">K</span>
          <span className="brand__text">
            Karigar
            <small>craft · culture · people</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-actions">
          <Link to="/login" className="btn btn--small btn--ghost">
            Login
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="View cart">
            <ShoppingBag size={19} />
          </Link>
        </div>
      </div>
    </header>
  );
}

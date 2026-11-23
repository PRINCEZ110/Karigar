import { Link } from "react-router-dom";

const columns = [
  {
    title: "Discover",
    links: [
      { to: "/artisans", label: "Artisans" },
      { to: "/crafts", label: "Traditional crafts" },
      { to: "/museums", label: "Museums" },
      { to: "/collectors", label: "Collectors" },
    ],
  },
  {
    title: "Explore",
    links: [
      { to: "/workshops", label: "Workshops" },
      { to: "/products", label: "Handmade shop" },
      { to: "/favorites", label: "Favorites" },
      { to: "/orders", label: "My orders" },
    ],
  },
  {
    title: "Account",
    links: [
      { to: "/login", label: "Login" },
      { to: "/register", label: "Create account" },
      { to: "/profile", label: "My profile" },
      { to: "/admin", label: "Admin panel" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__mark">K</span>
          <h2>Karigar</h2>
          <p>
            A digital home for local artisans, traditional crafts and cultural
            heritage.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="site-footer__column">
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Karigar. Final Year Project.</span>
        <span>Find · Learn · Explore · Connect</span>
      </div>
    </footer>
  );
}
